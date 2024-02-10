'use client';
import { useState, useEffect } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const CodeBlock = ({ children }) => {
    return (
        <SyntaxHighlighter language="jsx" style={okaidia}>
            {children}
        </SyntaxHighlighter>
    );
};

const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};

export async function Refresh(setConversation) {
    const ConvoResp = await fetch(`/api/fetchConvo?id=916043469552758784`);
    const Convo = await ConvoResp.json();
    await setConversation(Convo);
    console.log('i ran:');
    console.log(Convo);
}

let conversationElement = (
    <>
        <div className={`flex gap-3 flex-row-reverse animate-pulse`}>
            <div className="w-10 h-10 flex-none bg-neutral-200 border border-gray-300 shadow-md rounded-full">
                <div className="rounded-full bg-neutral-200 border border-gray-300 w-full h-full shadow-md object-cover" />
            </div>
            <div className={`border break-words border-gray-300 w-6/12 h-[58px] shadow-md p-4 rounded-2xl font-medium bg-neutral-200 text-neutral-700`}>
            </div>
        </div>
        <div className={`flex gap-3 flex-row animate-pulse`}>
            <div className="w-10 h-10 flex-none bg-neutral-400 border border-gray-300 shadow-md rounded-full">
                <div className="rounded-full bg-neutral-400 border border-gray-300 w-full h-full shadow-md object-cover" />
            </div>
            <div className={`border break-words border-gray-300 w-9/12 h-[82px] shadow-md p-4 rounded-2xl font-medium bg-neutral-400 text-neutral-700`}>
            </div>
        </div>
        <div className={`flex gap-3 flex-row-reverse animate-pulse`}>
            <div className="w-10 h-10 flex-none bg-neutral-200 border border-gray-300 shadow-md rounded-full">
                <div className="rounded-full bg-neutral-200 border border-gray-300 w-full h-full shadow-md object-cover" />
            </div>
            <div className={`border break-words border-gray-300 w-1/4 h-[58px] shadow-md p-4 rounded-2xl font-medium bg-neutral-200 text-neutral-700`}>
            </div>
        </div>
        <div className={`flex gap-3 flex-row animate-pulse`}>
            <div className="w-10 h-10 flex-none bg-neutral-400 border border-gray-300 shadow-md rounded-full">
                <div className="rounded-full bg-neutral-400 border border-gray-300 w-full h-full shadow-md object-cover" />
            </div>
            <div className={`border break-words border-gray-300 w-6/12 h-[58px] shadow-md p-4 rounded-2xl font-medium bg-neutral-400 text-neutral-700`}>
            </div>
        </div>
        <div className={`flex gap-3 flex-row-reverse animate-pulse`}>
            <div className="w-10 h-10 flex-none bg-neutral-200 border border-gray-300 shadow-md rounded-full">
                <div className="rounded-full bg-neutral-200 border border-gray-300 w-full h-full shadow-md object-cover" />
            </div>
            <div className={`border break-words border-gray-300 w-9/12 h-[82px] shadow-md p-4 rounded-2xl font-medium bg-neutral-200 text-neutral-700`}>
            </div>
        </div>
    </>
);

export default function ChatContainer({ conversation, setConversation }) {
    const [convoElement, setConvoElement] = useState(conversationElement);
    // Call Refresh once on page load
    useEffect(() => {
        Refresh(setConversation);

    }, [setConversation]);

    useEffect(() => {
        // Scroll to the bottom when the component mounts
        scroll.scrollToBottom({ smooth: true, duration: 500 });
        console.log(conversation);
    }, [conversation]);

    /*
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
                */

    useEffect(() => {
        console.log('i ran now')
        async function awaitMessages() {
            var convoMap = await conversation;
            conversationElement = await convoMap.map((item, key) => (
                console.log('Raw content:', item.content),
                <div key={key} className={`flex gap-4 ${item.role === "user" ? "flex-row-reverse" : (item.role === "assistant" && "flex-row")}`}>
                    <div className="w-10 h-10 flex-none bg-white border border-gray-300 shadow-md rounded-full">
                        <img className="rounded-full bg-white border border-gray-300 w-full h-full shadow-md object-cover" src={item.role === "user" ? user.imageUrl : (item.role === "assistant" && "/deltasoftai.png")} alt="" />
                    </div>
                    <div className={`border-none pt-2 break-words font-medium text-neutral-700`}>
                        <ReactMarkdown
                            components={{
                                code: CodeBlock,
                                // Add more components as needed
                            }}
                        >
                            {item.content}
                        </ReactMarkdown>
                    </div>
                </div>
               ));
            setConvoElement(conversationElement);
        }
        awaitMessages();
        console.log(conversation);
    }, [conversation, setConvoElement]);


    return (
        <>
            {convoElement}
        </>
    );
}
