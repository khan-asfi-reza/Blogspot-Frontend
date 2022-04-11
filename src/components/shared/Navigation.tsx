import {
    IoAddCircleOutline,
    IoAlbumsOutline,
    IoChatboxOutline,
    IoHomeOutline,
    IoNotifications,
    IoPersonAddOutline,
    IoSearchOutline,
    IoShareOutline
} from "react-icons/io5";
import Image from "next/image";
import classNames from "classnames";
import Logo from "@images/logo.png";
import {SecondaryInput} from "@UI/Form";
import {Div} from "@UI/Layout";
import {FocusEvent, useState} from "react";
import {AnimatePresence} from "framer-motion";
import {SmallText} from "@UI/Typography";

const navigation = [
    {name: <IoHomeOutline/>, href: '#', current: true},
    {name: <IoPersonAddOutline/>, href: '#', current: false},
    {name: <IoChatboxOutline/>, href: '#', current: false},
    {name: <IoShareOutline/>, href: '#', current: false},
    {name: <IoAlbumsOutline/>, href: '#', current: false},
]
const NavItem = ({href, children, current}) => (
    <a
        href={href}
        className={classNames(
            'text-gray-600  hover:bg-gray-200',
            'md:p-3 p-2 sm:text-2xl text-xl font-medium border-b border-transparent ',
            current ? "bg-theme text-white rounded-full" : "bg-transparent rounded-md"
        )}
    >
        {children}
    </a>
)


export const Navigation = () => {

    const [isSearchActive, setIsSearchActive] = useState(false);

    const onFocus = () => {
        setIsSearchActive(true);
    }

    const onBlur = (e: FocusEvent<HTMLInputElement>) => {
        if (!e.target.value) {
            setIsSearchActive(false)
        }
    }

    return (
        <>
            <nav className={"w-full fixed bg-white border-b border-gray-200"}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div
                        className="relative grid lg:grid-cols-3 md:grid-cols-10 grid-cols-5 lg:gap-x-10 md:gap-x-5 gap-x-3 items-center justify-between h-16">
                        <div
                            className="flex-shrink-0 gap-x-0.5 flex items-center lg:col-span-1 md:col-span-3 col-span-3 overflow-hidden">
                            <AnimatePresence exitBeforeEnter={true}>
                                {!isSearchActive &&
                                    <Div key={"searchIcon"}
                                         initial={{x: 1000,}}
                                         exit={{x: 1000, display: "none"}}
                                         animate={{x: 0,}}
                                         className={"h-8 w-8 relative"}>
                                        <Image src={Logo} alt={"Logo Image"} layout={"fill"} objectFit={"contain"}/>
                                    </Div>
                                }
                            </AnimatePresence>
                            <Div
                                className={classNames("lg:w-[80%] md:w-full transition-all", isSearchActive && "lg:w-[90%]")}>
                                <SecondaryInput containerProps={{className: "w-full"}}
                                                inputProps={{onFocus: onFocus, onBlur: onBlur}}
                                                icon={
                                                    <IoSearchOutline/>
                                                }
                                                label={"Search content, friends"}/>
                            </Div>
                        </div>
                        <div className="flex-full lg:col-span-1 md:col-span-4 md:block hidden">
                            <div className="flex justify-between ">
                                {navigation.map((item, key) => (
                                    <NavItem key={key} href={""} current={item.current}>
                                        {item.name}
                                    </NavItem>
                                ))}
                            </div>
                        </div>

                        <div className={"flex justify-end items-center lg:col-span-1 md:col-span-3 col-span-2"}>

                            <NavItem current={false} href={""}>
                                <IoAddCircleOutline/>
                            </NavItem>

                            <NavItem current={false} href={""}>
                                <IoNotifications/>
                            </NavItem>

                            <Div className={"xs:h-10 xs:w-10 h-8 w-8 rounded-full bg-gray-300 mr-1 relative"}>
                                <Div className={"absolute top-[110%] p-3 right-0 w-60 bg-gray-200 rounded-md"}>
                                    <SmallText>
                                        Hi there
                                    </SmallText>
                                </Div>
                            </Div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Bottom Mobile Navigation */}
            <nav className={"fixed h-16 w-full bottom-0 bg-white md:hidden block border-t border-gray-200"}>
                <div className={"max-w-7xl mx-auto px-8 xs:px-32 md:px-12 h-full"}>
                    <div className="flex space-x-4 justify-between items-center h-full">
                        {navigation.map((item, key) => (
                            <NavItem current={item.current} key={key} href={""}>
                                {item.name}
                            </NavItem>
                        ))}
                    </div>
                </div>
            </nav>
        </>
    )

}