import classNames from "classnames";
import {MouseEventHandler, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {IoAddSharp, IoChevronBackOutline, IoChevronForwardOutline} from "react-icons/io5";
import {Avatar} from "@SharedComponents/Avatar";
import Image from "next/image";

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

export default function Sidebar({images}) {
    const [isSideBarOpen, setSideBarOpen] = useState(false);

    return (
        <>
            <SidebarController onClick={() => {
                setSideBarOpen(!isSideBarOpen)
            }} open={isSideBarOpen}/>
            <div
                className={classNames("lg:col-span-3 overflow-y-auto scrollbar-light lg:transition-none transition-all duration-300 h-[calc(100vh-4rem)] order-3 lg:col-span-3 flex fixed sm:col-span-4",
                    "lg:w-full w-[320px] bg-nav rounded-lg lg:sticky lg:top-16 top-14 lg:bg-transparent lg:right-0 flex-col gap-y-10 lg:p-4 p-2",
                    isSideBarOpen ? "right-0" : "-right-full")}>
                <div className={"w-full bg-white rounded-xl grid gap-4 py-4 "}>
                    <h2 className={"text-xl font-bold text-black px-4"}>
                        People to follow
                    </h2>

                    <div className={"flex flex-col gap-y-5"}>

                        {
                            images.slice(0, 6).map((each, key) => (
                                <div key={key} className={"flex items-center justify-between px-4"}>
                                    <div className={"flex items-center gap-x-2"}>
                                        <Avatar src={each.urls.full} size={"lg"}/>
                                        <div>
                                            <p className={"text-md font-medium text-title"}>{each.user.first_name} {each.user.last_name}</p>
                                            <p className={"text-xs text-subtitle"}>32.5k Follower</p>
                                        </div>
                                    </div>
                                    <button className={"p-2 rounded-full bg-blue-100 text-blue-500 text-center"}>
                                        <IoAddSharp/>
                                    </button>
                                </div>
                            ))
                        }

                        <button className={"text-left px-4 text-sm "}>
                            Show More
                        </button>
                    </div>

                </div>

                <div className={"px-4 w-full bg-white rounded-xl grid gap-4 py-4 "}>
                    <h2 className={"text-xl font-bold text-black"}>
                        Contents
                    </h2>

                    <div style={{gridTemplateRows: 'repeat(3, 150px)'}} className={"grid grid-cols-2 gap-4"}>
                        {
                            images && images[0] &&
                            <div className={'relative col-span-1 rounded-lg overflow-hidden'}>
                                <Image alt={"Image"} src={images[0].urls.full} objectFit={"cover"} layout={"fill"}/>
                            </div>
                        }
                        {images && images[1] && <div className={'relative col-span-1 row-span-2 rounded-lg overflow-hidden'}>
                            <Image alt={"Image"} src={images[1].urls.full} objectFit={"cover"} layout={"fill"}/>
                        </div>}
                        {images && images[2] && <div className={'relative col-span-1 rounded-lg overflow-hidden'}>
                            <Image alt={"Image"} src={images[2].urls.full} objectFit={"cover"} layout={"fill"}/>
                        </div>
                        }
                        {images && images[3] && <div className={'relative col-span-2 rounded-lg overflow-hidden'}>
                            <Image alt={"Image"} src={images[3].urls.full} objectFit={"cover"} layout={"fill"}/>
                        </div>
                        }
                    </div>
                </div>
            </div>
        </>)
}