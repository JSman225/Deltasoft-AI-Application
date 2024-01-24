'use client'
import { useState, useEffect } from "react";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

export async function fetchConvo() {
    const ConvoResp = await fetch(`http://localhost:3000/api/fetchConvo?id=916043469552758784`, { cache: 'no-store' });
    const Convo = ConvoResp.json();
    // console.log(initConvo);
    return Convo;
}


export async function Refresh(){
    const Convo = await fetchConvo(); //dont worry about the fetchConvo() function I know it works
    setConversation(Convo);
}

export default function ChatContainer() {
    const [conversation, setConversation] = useState([]);


    useEffect(() => {
        // Scroll to the bottom when the component mounts
        scroll.scrollToBottom({ smooth: true, duration: 500 });
      }, [conversation]);

    useEffect(() => {
        const fetchData = async () => {
            const initConvo = await fetchConvo();
            setConversation(initConvo);
        };

        fetchData();
    }, []); // Empty dependency array ensures it runs only once on component mount

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

    if (conversation.length > 0) {
        conversationElement = conversation.map((item, key) => (
            // your mapping logic
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
        ));
    }
    return (
        <>
            {conversationElement}
        </>
    );
}
