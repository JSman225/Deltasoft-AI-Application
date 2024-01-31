'use client'
import { useState } from 'react';
import handleMessage from '@/app/actions/handleMessage';
import { Refresh } from '../chatContainer/page';

const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

export default function ChatInput({ conversation, setConversation }) {
    const [content, setContent] = useState('');
    const handleSearchChange = (event) => {
        setContent(event.target.value);
    };
    const onClick = async () => {
        setContent('');
        await handleMessage(content);
        Refresh(setConversation);    
    };
    return (
        <div className="bg-white border border-gray-300 shadow-md rounded-2xl w-full max-w-4xl p-4 mx-auto flex flex-row gap-4 items-center">
            <img className="w-8 h-8 rounded-full bg-gray-300" src={user.imageUrl} alt={user.name} />
            <textbox onChange={handleSearchChange} value={content} className="overflow-y-scroll outline-none resize-none border-none w-full text-neutral-700 font-medium text-base leading-6" placeholder="Chat with Delta..." />
            <div onClick={onClick} className="text-2x self-end w-6 h-6 m-1 text-gray-600 transition-colors cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                </svg>
            </div>
        </div>
    );
}
