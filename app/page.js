'use client'
import ChatContainer from "./components/chatContainer/page";
import ChatInput from "./components/chatInput/page";
import { useState, useEffect } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

export default function Chat() {
  const [conversation, setConversation] = useState([]);
  return (
    <div className="flex flex-col-reverse relative w-full bg-gray-100 overflow-hidden justify-end">
      <div className="w-full max-w-4xl py-6 px-3 mb-24 sm:mb-20 mx-auto flex-col-reverse flex-grow flex-shrink mt-16 justify-end gap-6 flex">
        <ChatContainer conversation={conversation} setConversation={setConversation} />
      </div>
      <div className="fixed bottom-0 bg-gray-100 py-2 px-3 w-full inset-x-0">
        <ChatInput conversation={conversation} setConversation={setConversation} />
        <div className="text-center pt-2 text-sm text-gray-500/90 font-medium">Delta is still in Beta testing and may make mistakes. You are using the standard (free) tier.&nbsp;<a className="cursor-pointer underline" href="#" target="_blank" rel="noreferrer">Learn more</a></div>
      </div>
    </div>
  );
}
