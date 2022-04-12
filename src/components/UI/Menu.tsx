import {Div} from "@UI/Layout/Layout";
import {useState} from "react";
import {AnimatePresence} from "framer-motion";
import {IoExitOutline} from "react-icons/io5";

export default function Menu({}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Div onClick={() => {
            setIsOpen(!isOpen)
        }} className={"xs:h-10 xs:w-10 h-8 w-8 rounded-full bg-gray-300 mr-1 relative"}>
            <AnimatePresence exitBeforeEnter={true}>
                {
                    isOpen &&
                    <Div key={"menuKey"}
                         initial={{scale: 0.95, opacity: 0}}
                         animate={{scale: 1, opacity: 1}}
                         exit={{scale: 0.95, opacity: 0}}
                         transition={{duration: 0.075}}
                         className={"absolute top-[110%] p-3 right-0 w-52 bg-slate-200 rounded-md"}>
                        <button className={"flex items-center justify-between w-full"}>
                            <span>
                                Logout
                            </span>
                            <IoExitOutline/>
                        </button>
                        <hr className={"w-full border-slate-300 my-2"}/>
                    </Div>
                }
            </AnimatePresence>
        </Div>
    )
}