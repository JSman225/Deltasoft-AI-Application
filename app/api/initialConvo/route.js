// Import the required modules
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



// Define an async function to handle GET requests
export async function GET(request) {
  // Connect to the Redis database
  db.connect();

  // Get the search term from the query parameters
  const { searchParams } = new URL(request.url);
  const searchTerm = searchParams.get('id');

  try {
    // Get the results from the Redis database
    const resultsresp = await db.get(searchTerm);
    const results = JSON.parse(resultsresp);

    // Retrieve the thread from the OpenAI beta API
    let thread = await openai.beta.threads.retrieve(results.thread_id);

    // List the messages from the thread
    const messages = await openai.beta.threads.messages.list(thread.id);

    // Extract the role and content from each message
    let conversation = [];
    for (let item of messages.data) {
      conversation.push({
        role: item.role,
        content: item.content[0].text.value
      });
    }

    // Quite the Redis databse connection
    db.quit();
    
    // Return the conversation as a JSON response
    return Response.json(conversation);
  } catch (error) {
    // Return an error response with the status code and the error message
    return Response.json({ statusCode: 500, body: error.toString() });
  }
}
