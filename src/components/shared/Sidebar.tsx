import classNames from "classnames";
import {MouseEventHandler, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {IoChevronBackOutline, IoChevronForwardOutline} from "react-icons/io5";

export function SidebarController({onClick, open}: { onClick: MouseEventHandler<HTMLButtonElement>, open: boolean }) {

    return (<button onClick={onClick}
                    className={"lg:hidden block fixed z-50 top-20 text-2xl rounded-full p-2 right-2 bg-slate-200 text-gray-800 font-bold"}>
        <AnimatePresence exitBeforeEnter>
            {open ? <motion.div className={"flex items-center"} key={"1"} transition={{duration: 0.3}}
                                exit={{rotate: '-180deg'}}>
                <IoChevronForwardOutline/>

            </motion.div> : <motion.div className={"flex items-center"} key={"2"} transition={{duration: 0.3}}
                                        exit={{rotate: '180deg'}}>
                <IoChevronBackOutline/>

            </motion.div>}

        </AnimatePresence>
    </button>)
}

export default function Sidebar() {
    const [isSideBarOpen, setSideBarOpen] = useState(false);

    return (<>
        <SidebarController onClick={() => {
            setSideBarOpen(!isSideBarOpen)
        }} open={isSideBarOpen}/>
        <div
            className={classNames("lg:col-span-3 lg:transition-none transition-all duration-300 h-[calc(100vh-4rem)] order-3 lg:col-span-3 flex fixed sm:col-span-4",
                "lg:w-full w-[320px] bg-nav rounded-lg lg:sticky lg:top-16 top-14 lg:bg-transparent lg:right-0 flex-col gap-y-10 lg:p-4 p-2",
                isSideBarOpen ? "right-0" : "-right-full")}>
            <div className={"w-full bg-white rounded-xl grid gap-4 py-4 "}>
                <h2 className={"text-xl font-bold text-black px-4"}>
                    Trends
                </h2>

                <div className={"grid"}>
                    <div className={"border-b border-slate-200 py-4 px-4 hover:bg-slate-200"}>
                        <p className={"text-gray-600 text-xs"}>
                            Trending #1
                        </p>
                            <div className={"flex justify-between flex-row "}>
                                <p className={"text-gray-700 text-base font-medium"}>
                                    @React
                                </p>
                                <p className={"text-gray-600 text-md"}>
                                    3.5k Blogs
                                </p>
                            </div>
                        </div>

                        <div className={"border-b border-slate-200 py-4 px-4 hover:bg-slate-200"}>
                            <p className={"text-gray-600 text-xs"}>
                                Trending #2
                            </p>
                            <div className={"flex justify-between flex-row "}>
                                <p className={"text-gray-700 text-base font-medium"}>
                                    @React
                                </p>
                                <p className={"text-gray-600 text-md"}>
                                    3.5k Blogs
                                </p>
                            </div>
                        </div>

                        <div className={"border-b border-slate-200 py-4 px-4 hover:bg-slate-200"}>
                            <p className={"text-gray-600 text-xs"}>
                                Trending #3
                            </p>
                            <div className={"flex justify-between flex-row "}>
                                <p className={"text-gray-700 text-base font-medium"}>
                                    @React
                                </p>
                                <p className={"text-gray-600 text-md"}>
                                    3.5k Blogs
                                </p>
                            </div>
                        </div>
                    </div>

                    <button className={"text-left px-4 text-sm "}>
                        Show More
                    </button>
                </div>
                <div className={"w-full bg-white rounded-xl grid gap-4 py-4 "}>
                    <h2 className={"text-xl font-bold text-black px-4"}>
                        Trends
                    </h2>

                    <div className={"grid"}>
                        <div className={"border-b border-slate-200 py-4 px-4 hover:bg-slate-200"}>
                            <p className={"text-gray-600 text-xs"}>
                                Trending #1
                            </p>
                            <div className={"flex justify-between flex-row "}>
                                <p className={"text-gray-700 text-base font-medium"}>
                                    @React
                                </p>
                                <p className={"text-gray-600 text-md"}>
                                    3.5k Blogs
                                </p>
                            </div>
                        </div>

                        <div className={"border-b border-slate-200 py-4 px-4 hover:bg-slate-200"}>
                            <p className={"text-gray-600 text-xs"}>
                                Trending #2
                            </p>
                            <div className={"flex justify-between flex-row "}>
                                <p className={"text-gray-700 text-base font-medium"}>
                                    @React
                                </p>
                                <p className={"text-gray-600 text-md"}>
                                    3.5k Blogs
                                </p>
                            </div>
                        </div>

                        <div className={"border-b border-slate-200 py-4 px-4 hover:bg-slate-200"}>
                            <p className={"text-gray-600 text-xs"}>
                                Trending #3
                            </p>
                            <div className={"flex justify-between flex-row "}>
                                <p className={"text-gray-700 text-base font-medium"}>
                                    @React
                                </p>
                                <p className={"text-gray-600 text-md"}>
                                    3.5k Blogs
                                </p>
                            </div>
                        </div>
                    </div>

                    <button className={"text-left px-4 text-sm "}>
                        Show More
                    </button>
                </div>
        </div>
    </>)
}