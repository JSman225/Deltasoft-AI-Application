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
<textarea onChange={handleSearchChange} value={content} className="overflow-y-scroll outline-none resize-none border-none w-full text-neutral-700 font-medium text-base leading-6" placeholder="Chat with Delta..." onKeyDown={(e) => { if (e.key === 'Enter' && e.shiftKey) { e.preventDefault();  } 
}} /> 
</div>
    );
}
