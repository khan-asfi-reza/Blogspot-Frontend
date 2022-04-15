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
import Link from "next/link";
import Menu from "@UI/Menu";
import {useRouter} from "next/router";

const navigation = [
    {name: <IoHomeOutline/>, href: '/', current: true, route: "/"},
    {name: <IoPersonAddOutline/>, href: '/friends', current: false, route: "/friends"},
    {name: <IoChatboxOutline/>, href: '#', current: false, route: "home"},
    {name: <IoShareOutline/>, href: '#', current: false, route: "home"},
    {name: <IoAlbumsOutline/>, href: '#', current: false, route: "home"},
]


const Indicator = ({className, style}) => (
    <svg className={classNames(className, "indicator")} style={style} width="94" height="56"
         xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="47" cy="28" rx="24" ry="28"/>
        <path d="M24 20C24 20 28 55.9999 48 56L0 55.9997C18 55.9998 24 20 24 20Z"/>
        <path d="M70 20C70 20 66 55.9999 46 56L94 55.9997C76 55.9998 70 20 70 20Z"/>
    </svg>
)

const NavItem = ({href, children, current, showActive}:
                     {
                         href: string,
                         children: JSX.Element,
                         current: boolean,
                         showActive?: boolean,
                     }
) => (
    <Link href={href} passHref>
        <a
            className={classNames(
                'text-gray-600 relative nav-link',
                'md:p-4 p-2 box-border h-full grid place-items-center sm:text-2xl text-xl font-medium border-b border-transparent ',
                current ? "hover:bg-blue-700 text-white rounded-full active-link" : "hover:bg-gray-200  bg-transparent rounded-md"
            )}
        >

            {children}

            {
                (showActive && current) &&
                <Indicator style={{}}
                           className={"absolute transition-all md:rotate-180 -z-10 left-1/2 -translate-x-1/2 md:top-0 bottom-0 transform fill-theme"}/>
            }
        </a>
    </Link>
)


export const Navigation = () => {

    const [isSearchActive, setIsSearchActive] = useState(false);
    const router = useRouter();
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
            <header className={"w-full fixed bg-white border-b border-gray-200"}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div
                        className="relative grid lg:grid-cols-3 md:grid-cols-4 grid-cols-5 lg:gap-x-10 md:gap-x-2 gap-x-3 items-center justify-between h-16">
                        <div
                            className="flex-shrink-0 gap-x-0.5 flex items-center lg:col-span-1 md:col-span-1 col-span-3 overflow-hidden">
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
                        <nav
                            className="md:flex-full md:h-full h-16 md:bg-transparent md:border-t-0 border-t border-gray-200 bg-white lg:col-span-1 md:col-span-2 block md:static left-0 fixed bottom-0 w-full">
                            <div className={"h-full w-full"}>
                                <div
                                    className="flex h-full justify-center lg:gap-x-8 md:gap-x-5 sm:gap-x-10 gap-x-8 items-center relative">
                                    {navigation.map((item, key) => (
                                        <NavItem key={key}
                                                 href={item.href}
                                                 current={item.href === router.pathname}
                                                 showActive={true}
                                        >
                                            {item.name}
                                        </NavItem>
                                    ))}
                                </div>
                            </div>
                        </nav>

                        <div className={"flex justify-end items-center lg:col-span-1 md:col-span-1 col-span-2"}>

                            <NavItem current={false} href={""}>
                                <IoAddCircleOutline/>
                            </NavItem>

                            <NavItem current={false} href={""}>
                                <IoNotifications/>
                            </NavItem>

                            <Menu/>
                        </div>
                    </div>
                </div>
            </header>

            {/* Bottom Mobile Navigation */}
            {/*<nav className={"fixed h-16 w-full bottom-0 bg-white md:hidden block border-t border-gray-200"}>*/}
            {/*    <div className={"max-w-7xl mx-auto px-8 xs:px-32 md:px-12 h-full"}>*/}
            {/*        <div className="flex space-x-4 justify-between items-center h-full">*/}
            {/*            {navigation.map((item, key) => (*/}
            {/*                <NavItem current={item.current} key={key} href={""}>*/}
            {/*                    {item.name}*/}
            {/*                </NavItem>*/}
            {/*            ))}*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</nav>*/}
        </>
    )

}