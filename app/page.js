'use client'
const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
let conversation = [
  {
    "role": "user",
    "content": "Vivid dreams under starry skies, chasing galaxies in my sleep. Do you ever feel the cosmic embrace?"
  },
  {
    "role": "assistant",
    "content": "Absolutely, the universe whispers in every dream. Celestial melodies guide us through the night, revealing the secrets written in stardust."
  },
  {
    "role": "user",
    "content": "Moonlit serenades and whispers of the night, entwined with the symphony of silence. Share your favorite nocturnal tale."
  },
  {
    "role": "assistant",
    "content": "In the moon's soft glow, a piano's melody echoed through ancient cobblestone streets. Shadows danced to the rhythm, unveiling a tale of forgotten romances and clandestine rendezvous."
  },
  {
    "role": "user",
    "content": "Moonlit serenades and whispers of the night, entwined with the symphony of silence. Share your favorite nocturnal tale."
  },
  {
    "role": "assistant",
    "content": "In the moon's soft glow, a piano's melody echoed through ancient cobblestone streets. Shadows danced to the rhythm, unveiling a tale of forgotten romances and clandestine rendezvous."
  }
]
export default function Chat() {
  return (
    <div className="flex flex-col-reverse relative w-full bg-gray-100 overflow-hidden justify-end">
      <div className="w-full max-w-4xl py-6 mb-20 mx-auto flex-col flex-grow flex-shrink mt-16 justify-end gap-6 flex">
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
      <div className="fixed bottom-0 bg-gray-100 py-2 w-full inset-x-0">
        <div className="bg-white border border-gray-300 shadow-md rounded-2xl w-full max-w-4xl p-4 mx-auto flex flex-row gap-4 items-center">
          <img className="w-8 h-8 rounded-full bg-gray-300" src={user.imageUrl} alt={user.name} />
          <input className="overflow-y-scroll outline-none resize-none border-none w-full text-base leading-6" placeholder="Chat with Delta..." rows="1" />
          <div className="text-2xl self-end w-6 h-6 m-1 text-gray-600 transition-colors cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
            </svg>
          </div>
        </div>
        <div class="text-center pt-2 text-sm text-gray-500/90 font-medium">Delta is still in Beta testing and may make mistakes. You are using the standard (free) tier.&nbsp;<a class="cursor-pointer underline" href="#" target="_blank" rel="noreferrer">Learn more</a></div>
      </div>
    </div>
  );
}
