'use server';
import { createClient } from 'redis';
import { OpenAI } from 'openai';
 // Create a Redis client with the given credentials
 const db = createClient({
    password: process.env.REDIS_PW,
    socket: {
        host: 'redis-15284.c321.us-east-1-2.ec2.cloud.redislabs.com',
        port: 15284
    }
});

// Create an OpenAI connection with the given API key
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
});
// Connect to redis db
export default async function handleMessage(content) {
   
    db.connect();

    async function getDb(input) {
        const value = await db.get(input);
        return JSON.parse(value);
    }
    // START GENERATE FUNCTION
    const assistantId_standard = process.env.assistantId_standard;
    const assistantId_plus = process.env.assistantId_plus;
    const assistantId_creative = process.env.assistantId_creative;
    const assistantId_pro = process.env.assistantId_pro;

    const plus_functions = [
        {
            "type": "function",
            "function": {
                "name": "createMem",
                "description": "Create a new Mem for the user.",
                "parameters": {
                    "type": "object",
                    "properties": {
                        "content": { "type": "string", "description": "The content of the new Mem. (Example: Shopping list, quick thoug or note, todo list, schedual." }
                    },
                    "required": ["content"]
                }
            }
        }
    ]

    const generate = async (userInput, userId) => {
        let userInfo = await getDb(userId)
        console.log(userInfo);
        let thread;
        let details = null;
        if (userInfo == null) {
            thread = await openai.beta.threads.create();
            details = "User Info: Username: " + userInfo.username + ". To ping the user, type: <@" + userInfo.id + ">. This user has the Free Tier. They can upgrade for more features."
            const json = {
                "id": userInfo.id,
                "preferred_model": "gpt-3.5",
                "username": userInfo.username,
                "tier": "standard",
                "thread_id": thread.id
            }
            db.set(userInfo.id, JSON.stringify(json))
        } else if (userInfo.thread_id == null) {
            thread = await openai.beta.threads.create();
            details = "You are talking to " + userInfo.username + ". To ping the user, type: <@" + userInfo.id + ">"
            // console.log('old thread:' + JSON.stringify(userInfo, null, 4));
            userInfo.thread_id = thread.id;
            // console.log('new thread:' + JSON.stringify(userInfo, null, 4));
            db.set(userInfo.id, JSON.stringify(userInfo))
        } else if (userInfo.thread_id != null) {
            thread = await openai.beta.threads.retrieve(
                userInfo.thread_id
            );
        } else {
            console.log('an unexpected error occured');
        }

        await openai.beta.threads.messages.create(thread.id, {
            role: "user",
            content: userInput,
        });

        var run = await openai.beta.threads.runs.create(thread.id, {
            assistant_id: assistantId_standard,
            additional_instructions: details
        });

        let runStatus = await openai.beta.threads.runs.retrieve(
            thread.id,
            run.id
        );

        // Polling mechanism to see if runStatus is completed
        while (runStatus.status !== "completed") {
            await new Promise((resolve) => setTimeout(resolve, 500));
            runStatus = await openai.beta.threads.runs.retrieve(
                thread.id,
                run.id
            );
            console.log(runStatus.status);
            if (runStatus.status == "in_progress") {
                //SEND TYPING HERE
            }
            if (runStatus.status == "requires_action") {
                //console.log(runStatus.required_action);
                if (runStatus.required_action.type == "submit_tool_outputs") {
                    const tool_calls = runStatus.required_action.submit_tool_outputs.tool_calls;
                    let tool_outputs = [];
                    //console.log(tool_calls);
                    tool_calls.forEach(async (tool) => {
                        switch (tool.function.name) {
                            case "createMem":
                                console.log('Create a mem:\n' + JSON.parse(tool.function.arguments).content)
                                const memClient = new MemClient({
                                    apiAccessToken: "17081f9e-03dd-40c6-bcc2-fcef17507920"
                                });
                                memClient.createMem({
                                    content: JSON.parse(tool.function.arguments).content
                                });
                                tool_outputs.push({
                                    tool_call_id: tool.id,
                                    output: 'Mem created.',
                                })
                                break;
                            default:
                            // code block
                        }
                    });
                    try {
                        await openai.beta.threads.runs.submitToolOutputs(
                            thread.id,
                            run.id,
                            {
                                tool_outputs: tool_outputs,
                            }
                        );
                    } catch (error) {
                        console.log(error);
                    }
                }
            }
            // Check for failed, cancelled, or expired status
            if (["failed", "cancelled", "expired"].includes(runStatus.status)) {
                console.log(
                    `Run status is '${runStatus.status}'. Unable to complete the request.`
                );
                break; // Exit the loop if the status indicates a failure or cancellation
            }
        }

        /* const runStep = await openai.beta.threads.runs.steps.retrieve(
             thread.id,
             run.id
         );
         console.log(runStep);*/

        // Get the last assistant message from the messages array
        const messages = await openai.beta.threads.messages.list(thread.id);

        // Find the last message for the current run
        const lastMessageForRun = messages.data
            .filter(
                (message) =>
                    message.run_id === run.id && message.role === "assistant"
            )
            .pop();

        // If an assistant message is found, console.log() it
        if (lastMessageForRun) {
            //console.log(`${lastMessageForRun.content[0].text.value} \n`);
            return (lastMessageForRun.content[0].text.value);
        } else if (
            !["failed", "cancelled", "expired"].includes(runStatus.status)
        ) {
            console.log("No response received from the assistant.");
        }
    }


    try {
        await generate(content, "916043469552758784");
        
    } catch (error) {

    } finally {
        // Close the Redis client
        await db.quit();
    }

    console.log(content);
}