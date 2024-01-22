'use client'
import { OpenAI } from 'openai';

// Create a OpenAI connection
const openai = new OpenAI({
  apiKey: "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",
  dangerouslyAllowBrowser: true
});

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
let conversation = [

];
/*
  async function connectDb() {
    await db.connect();
  } connectDb();*/

async function getDb(input) {
  const value = await db.get(input);
  return JSON.parse(value);
}

//console.log((await getDb('916043469552758784')));
//await db.connect();
//await db.set('916043469552758784',JSON.stringify(json))
/*async function test() {
  const value = await db.get('916043469552758784');
  console.log(JSON.parse(value));

} test();*/
let thread;
async function getMessageList() {
  const resp = await fetch(`http://localhost:3000/api?id=916043469552758784`, { cache: 'no-store' });
  const reps1 = await resp.json();
  const userInfo = JSON.parse(reps1.results);
  console.log(userInfo);
  thread = await openai.beta.threads.retrieve(
    userInfo.thread_id
  );
  const messages = await openai.beta.threads.messages.list(thread.id);
  // Find the last message for the current run
  const lastMessageForRun = messages.data;
  console.log(lastMessageForRun);
  lastMessageForRun.map((item) => {
    conversation.push({
      role: item.role,
      content: item.content[0].text.value
    })
  })
  console.log(conversation);
} getMessageList();
export default function Chat() {

  return (
    <div className="flex flex-col-reverse relative w-full bg-gray-100 overflow-hidden justify-end">
      <div className="w-full max-w-4xl py-6 px-3 mb-24 sm:mb-20 mx-auto flex-col flex-grow flex-shrink mt-16 justify-end gap-6 flex">
        {conversation.map((item, key) => (
          <div key={key} className={`flex gap-3 ${item.role === "user" ? "flex-row-reverse" : (item.role === "assistant" && "flex-row")}`}>
            <div className="w-10 h-10 flex-none bg-white border border-gray-300 shadow-md rounded-full">
              <img className="rounded-full bg-white border border-gray-300 w-full h-full shadow-md object-cover" src={item.role === "user" ? user.imageUrl : (item.role === "assistant" && "/deltasoftai.png")} alt="" />
            </div>
            <div className={`border break-words border-gray-300 shadow-md p-4 rounded-2xl font-medium ${item.role === "user" ? "bg-white text-neutral-700" : (item.role === "assistant" && "bg-neutral-800 text-neutral-300")}`}>
              <p>
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="fixed bottom-0 bg-gray-100 py-2 px-3 w-full inset-x-0">
        <div className="bg-white border  border-gray-300 shadow-md rounded-2xl w-full max-w-4xl p-4 mx-auto flex flex-row gap-4 items-center">
          <img className="w-8 h-8 rounded-full bg-gray-300" src={user.imageUrl} alt={user.name} />
          <input className="overflow-y-scroll outline-none resize-none border-none w-full text-base leading-6" placeholder="Chat with Delta..." rows="1" />
          <div className="text-2xl self-end w-6 h-6 m-1 text-gray-600 transition-colors cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
            </svg>
          </div>
        </div>
        <div className="text-center pt-2 text-sm text-gray-500/90 font-medium">Delta is still in Beta testing and may make mistakes. You are using the standard (free) tier.&nbsp;<a className="cursor-pointer underline" href="#" target="_blank" rel="noreferrer">Learn more</a></div>
      </div>
    </div>
  );
}
