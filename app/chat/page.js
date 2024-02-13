'use client'

const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

export default function ChatPage() {
    return (
        <main className="relative h-full w-full flex-1 overflow-auto transition-width">
            <div role="presentation" className="flex h-full flex-col">
                <div className="flex-1 overflow-hidden">
                    <div className="react-scroll-to-bottom--css-ifxyh-79elbk h-full">
                        <div className="react-scroll-to-bottom--css-ifxyh-1n7m0yu">
                            <div className="flex flex-col pb-9 text-sm">
                                <div className="h-1.5"></div>
                                <div className="w-full text-token-text-primary" data-testid="conversation-turn-2" style={{'--avatar-color': '#19c37d'}}>
                                    <div className="px-4 py-2 justify-center text-base md:gap-6 m-auto">
                                        <div className="flex flex-1 text-base mx-auto gap-3 md:px-5 lg:px-1 xl:px-5 md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem] group">
                                            <div className="flex-shrink-0 flex flex-col relative items-end">
                                                <div>
                                                    <div className="pt-0.5">
                                                        <div className="gizmo-shadow-stroke flex h-6 w-6 items-center justify-center overflow-hidden rounded-full">
                                                            <div className="relative flex">
                                                                <img
                                                                    alt="User"
                                                                    loading="lazy"
                                                                    width="24"
                                                                    height="24"
                                                                    decoding="async"
                                                                    data-nimg="1"
                                                                    className="rounded-sm"
                                                                    src="https://lh3.googleusercontent.com/a/AEdFTp7IxrDntjaLwGR4oqoBFX2l2VwbfEMlhAlmlfB6=s96-c"
                                                                    style={{ color: 'transparent' }}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="relative flex w-full flex-col">
                                                <div className="font-semibold select-none">You</div>
                                                <div className="flex-col gap-1 md:gap-3">
                                                    <div className="flex flex-grow flex-col max-w-full">
                                                        <div data-message-author-role="user" data-message-id="aaa28983-af14-413f-9068-6a6dde21613f" className="min-h-[20px] text-message flex flex-col items-start gap-3 whitespace-pre-wrap break-words [.text-message+&amp;]:mt-5 overflow-x-auto">
                                                            <div>Explain why popcorn pops to a kid who loves watching it in the microwave.</div>
                                                        </div>
                                                    </div>
                                                    <div className="mt-1 flex justify-start gap-3 empty:hidden">
                                                        <div className="text-gray-400 flex self-end lg:self-center justify-center lg:justify-start mt-0 -ml-1 visible">
                                                            <button className="p-1 rounded-md text-token-text-tertiary hover:text-token-text-primary md:invisible md:group-hover:visible md:group-[.final-completion]:visible">
                                                                <div className="flex items-center gap-1.5 text-xs">
                                                                    {/* Icon SVG for button */}
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full text-token-text-primary" data-testid="conversation-turn-2" style={{'--avatar-color': '#19c37d'}}>
                                    <div className="px-4 py-2 justify-center text-base md:gap-6 m-auto">
                                        <div className="flex flex-1 text-base mx-auto gap-3 md:px-5 lg:px-1 xl:px-5 md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem] group">
                                            <div className="flex-shrink-0 flex flex-col relative items-end">
                                                <div>
                                                    <div className="pt-0.5">
                                                        <div className="gizmo-shadow-stroke flex h-6 w-6 items-center justify-center overflow-hidden rounded-full">
                                                            <div className="relative flex">
                                                                <img
                                                                    alt="User"
                                                                    loading="lazy"
                                                                    width="24"
                                                                    height="24"
                                                                    decoding="async"
                                                                    data-nimg="1"
                                                                    className="rounded-sm"
                                                                    src="https://lh3.googleusercontent.com/a/AEdFTp7IxrDntjaLwGR4oqoBFX2l2VwbfEMlhAlmlfB6=s96-c"
                                                                    style={{ color: 'transparent' }}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="relative flex w-full flex-col">
                                                <div className="font-semibold select-none">You</div>
                                                <div className="flex-col gap-1 md:gap-3">
                                                    <div className="flex flex-grow flex-col max-w-full">
                                                        <div data-message-author-role="user" data-message-id="aaa28983-af14-413f-9068-6a6dde21613f" className="min-h-[20px] text-message flex flex-col items-start gap-3 whitespace-pre-wrap break-words [.text-message+&amp;]:mt-5 overflow-x-auto">
                                                            <div>Explain why popcorn pops to a kid who loves watching it in the microwave.</div>
                                                        </div>
                                                    </div>
                                                    <div className="mt-1 flex justify-start gap-3 empty:hidden">
                                                        <div className="text-gray-400 flex self-end lg:self-center justify-center lg:justify-start mt-0 -ml-1 visible">
                                                            <button className="p-1 rounded-md text-token-text-tertiary hover:text-token-text-primary md:invisible md:group-hover:visible md:group-[.final-completion]:visible">
                                                                <div className="flex items-center gap-1.5 text-xs">
                                                                    {/* Icon SVG for button */}
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full text-token-text-primary" data-testid="conversation-turn-2" style={{'--avatar-color': '#19c37d'}}>
                                    <div className="px-4 py-2 justify-center text-base md:gap-6 m-auto">
                                        <div className="flex flex-1 text-base mx-auto gap-3 md:px-5 lg:px-1 xl:px-5 md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem] group">
                                            <div className="flex-shrink-0 flex flex-col relative items-end">
                                                <div>
                                                    <div className="pt-0.5">
                                                        <div className="gizmo-shadow-stroke flex h-6 w-6 items-center justify-center overflow-hidden rounded-full">
                                                            <div className="relative flex">
                                                                <img
                                                                    alt="User"
                                                                    loading="lazy"
                                                                    width="24"
                                                                    height="24"
                                                                    decoding="async"
                                                                    data-nimg="1"
                                                                    className="rounded-sm"
                                                                    src="https://lh3.googleusercontent.com/a/AEdFTp7IxrDntjaLwGR4oqoBFX2l2VwbfEMlhAlmlfB6=s96-c"
                                                                    style={{ color: 'transparent' }}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="relative flex w-full flex-col">
                                                <div className="font-semibold select-none">You</div>
                                                <div className="flex-col gap-1 md:gap-3">
                                                    <div className="flex flex-grow flex-col max-w-full">
                                                        <div data-message-author-role="user" data-message-id="aaa28983-af14-413f-9068-6a6dde21613f" className="min-h-[20px] text-message flex flex-col items-start gap-3 whitespace-pre-wrap break-words [.text-message+&amp;]:mt-5 overflow-x-auto">
                                                            <div>Explain why popcorn pops to a kid who loves watching it in the microwave.</div>
                                                        </div>
                                                    </div>
                                                    <div className="mt-1 flex justify-start gap-3 empty:hidden">
                                                        <div className="text-gray-400 flex self-end lg:self-center justify-center lg:justify-start mt-0 -ml-1 visible">
                                                            <button className="p-1 rounded-md text-token-text-tertiary hover:text-token-text-primary md:invisible md:group-hover:visible md:group-[.final-completion]:visible">
                                                                <div className="flex items-center gap-1.5 text-xs">
                                                                    {/* Icon SVG for button */}
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full text-token-text-primary" data-testid="conversation-turn-2" style={{'--avatar-color': '#19c37d'}}>
                                    <div className="px-4 py-2 justify-center text-base md:gap-6 m-auto">
                                        <div className="flex flex-1 text-base mx-auto gap-3 md:px-5 lg:px-1 xl:px-5 md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem] group">
                                            <div className="flex-shrink-0 flex flex-col relative items-end">
                                                <div>
                                                    <div className="pt-0.5">
                                                        <div className="gizmo-shadow-stroke flex h-6 w-6 items-center justify-center overflow-hidden rounded-full">
                                                            <div className="relative flex">
                                                                <img
                                                                    alt="User"
                                                                    loading="lazy"
                                                                    width="24"
                                                                    height="24"
                                                                    decoding="async"
                                                                    data-nimg="1"
                                                                    className="rounded-sm"
                                                                    src="https://lh3.googleusercontent.com/a/AEdFTp7IxrDntjaLwGR4oqoBFX2l2VwbfEMlhAlmlfB6=s96-c"
                                                                    style={{ color: 'transparent' }}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="relative flex w-full flex-col">
                                                <div className="font-semibold select-none">You</div>
                                                <div className="flex-col gap-1 md:gap-3">
                                                    <div className="flex flex-grow flex-col max-w-full">
                                                        <div data-message-author-role="user" data-message-id="aaa28983-af14-413f-9068-6a6dde21613f" className="min-h-[20px] text-message flex flex-col items-start gap-3 whitespace-pre-wrap break-words [.text-message+&amp;]:mt-5 overflow-x-auto">
                                                            <div>Explain why popcorn pops to a kid who loves watching it in the microwave.</div>
                                                        </div>
                                                    </div>
                                                    <div className="mt-1 flex justify-start gap-3 empty:hidden">
                                                        <div className="text-gray-400 flex self-end lg:self-center justify-center lg:justify-start mt-0 -ml-1 visible">
                                                            <button className="p-1 rounded-md text-token-text-tertiary hover:text-token-text-primary md:invisible md:group-hover:visible md:group-[.final-completion]:visible">
                                                                <div className="flex items-center gap-1.5 text-xs">
                                                                    {/* Icon SVG for button */}
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full text-token-text-primary" data-testid="conversation-turn-2" style={{'--avatar-color': '#19c37d'}}>
                                    <div className="px-4 py-2 justify-center text-base md:gap-6 m-auto">
                                        <div className="flex flex-1 text-base mx-auto gap-3 md:px-5 lg:px-1 xl:px-5 md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem] group">
                                            <div className="flex-shrink-0 flex flex-col relative items-end">
                                                <div>
                                                    <div className="pt-0.5">
                                                        <div className="gizmo-shadow-stroke flex h-6 w-6 items-center justify-center overflow-hidden rounded-full">
                                                            <div className="relative flex">
                                                                <img
                                                                    alt="User"
                                                                    loading="lazy"
                                                                    width="24"
                                                                    height="24"
                                                                    decoding="async"
                                                                    data-nimg="1"
                                                                    className="rounded-sm"
                                                                    src="https://lh3.googleusercontent.com/a/AEdFTp7IxrDntjaLwGR4oqoBFX2l2VwbfEMlhAlmlfB6=s96-c"
                                                                    style={{ color: 'transparent' }}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="relative flex w-full flex-col">
                                                <div className="font-semibold select-none">You</div>
                                                <div className="flex-col gap-1 md:gap-3">
                                                    <div className="flex flex-grow flex-col max-w-full">
                                                        <div data-message-author-role="user" data-message-id="aaa28983-af14-413f-9068-6a6dde21613f" className="min-h-[20px] text-message flex flex-col items-start gap-3 whitespace-pre-wrap break-words [.text-message+&amp;]:mt-5 overflow-x-auto">
                                                            <div>Explain why popcorn pops to a kid who loves watching it in the microwave.</div>
                                                        </div>
                                                    </div>
                                                    <div className="mt-1 flex justify-start gap-3 empty:hidden">
                                                        <div className="text-gray-400 flex self-end lg:self-center justify-center lg:justify-start mt-0 -ml-1 visible">
                                                            <button className="p-1 rounded-md text-token-text-tertiary hover:text-token-text-primary md:invisible md:group-hover:visible md:group-[.final-completion]:visible">
                                                                <div className="flex items-center gap-1.5 text-xs">
                                                                    {/* Icon SVG for button */}
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full text-token-text-primary" data-testid="conversation-turn-2" style={{'--avatar-color': '#19c37d'}}>
                                    <div className="px-4 py-2 justify-center text-base md:gap-6 m-auto">
                                        <div className="flex flex-1 text-base mx-auto gap-3 md:px-5 lg:px-1 xl:px-5 md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem] group">
                                            <div className="flex-shrink-0 flex flex-col relative items-end">
                                                <div>
                                                    <div className="pt-0.5">
                                                        <div className="gizmo-shadow-stroke flex h-6 w-6 items-center justify-center overflow-hidden rounded-full">
                                                            <div className="relative flex">
                                                                <img
                                                                    alt="User"
                                                                    loading="lazy"
                                                                    width="24"
                                                                    height="24"
                                                                    decoding="async"
                                                                    data-nimg="1"
                                                                    className="rounded-sm"
                                                                    src="https://lh3.googleusercontent.com/a/AEdFTp7IxrDntjaLwGR4oqoBFX2l2VwbfEMlhAlmlfB6=s96-c"
                                                                    style={{ color: 'transparent' }}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="relative flex w-full flex-col">
                                                <div className="font-semibold select-none">You</div>
                                                <div className="flex-col gap-1 md:gap-3">
                                                    <div className="flex flex-grow flex-col max-w-full">
                                                        <div data-message-author-role="user" data-message-id="aaa28983-af14-413f-9068-6a6dde21613f" className="min-h-[20px] text-message flex flex-col items-start gap-3 whitespace-pre-wrap break-words [.text-message+&amp;]:mt-5 overflow-x-auto">
                                                            <div>Explain why popcorn pops to a kid who loves watching it in the microwave.</div>
                                                        </div>
                                                    </div>
                                                    <div className="mt-1 flex justify-start gap-3 empty:hidden">
                                                        <div className="text-gray-400 flex self-end lg:self-center justify-center lg:justify-start mt-0 -ml-1 visible">
                                                            <button className="p-1 rounded-md text-token-text-tertiary hover:text-token-text-primary md:invisible md:group-hover:visible md:group-[.final-completion]:visible">
                                                                <div className="flex items-center gap-1.5 text-xs">
                                                                    {/* Icon SVG for button */}
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* ChatGPT's response */}
                                <div className="w-full text-token-text-primary" data-testid="conversation-turn-3" style={{'--avatar-color': '#19c37d'}}>
                                    <div className="px-4 py-2 justify-center text-base md:gap-6 m-auto">
                                        <div className="flex flex-1 text-base mx-auto gap-3 md:px-5 lg:px-1 xl:px-5 md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem] group">
                                            <div className="flex-shrink-0 flex flex-col relative items-end">
                                                <div>
                                                    <div className="pt-0.5">
                                                        <div className="gizmo-shadow-stroke flex h-6 w-6 items-center justify-center overflow-hidden rounded-full">
                                                            <div className="relative p-1 rounded-sm h-9 w-9 text-white flex items-center justify-center" style={{ backgroundColor: 'rgb(25, 195, 125)', width: '24px', height: '24px' }}>
                                                                {/* ChatGPT icon */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="relative flex w-full flex-col">
                                                <div className="font-semibold select-none">ChatGPT</div>
                                                <div className="flex-col gap-1 md:gap-3">
                                                    <div className="flex flex-grow flex-col max-w-full">
                                                        <div data-message-author-role="assistant" data-message-id="aaa28983-af14-413f-9068-6a6dde21613f" className="min-h-[20px] text-message flex flex-col items-start gap-3 whitespace-pre-wrap break-words [.text-message+&amp;]:mt-5 overflow-x-auto">
                                                            <div>Hey there! Popcorn pops because the moisture inside the kernel turns into steam when heated, creating pressure. Eventually, the kernel can't contain the pressure, causing it to pop. It's like a mini explosion of deliciousness!</div>
                                                        </div>
                                                    </div>
                                                    <div className="mt-1 flex justify-start gap-3 empty:hidden">
                                                        <div className="text-gray-400 flex self-end lg:self-center justify-center lg:justify-start mt-0 -ml-1 visible">
                                                            <button className="p-1 rounded-md text-token-text-tertiary hover:text-token-text-primary md:invisible md:group-hover:visible md:group-[.final-completion]:visible">
                                                                <div className="flex items-center gap-1.5 text-xs">
                                                                    {/* Icon SVG for button */}
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}