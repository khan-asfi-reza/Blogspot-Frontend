import {IoChevronDown} from "react-icons/io5";
import classNames from "classnames";
import Link from "next/link";
import {useRouter} from "next/router";
import {Menu, MenuItem} from "@UI/Menu";
import {useTheme} from "next-themes";
import {useState} from "react";
import Image from "next/image";
import Logo from "@images/logo.png";
import Person from "@images/person.jpg";
import {navigation} from "@const/navigation";

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
                'relative nav-link',
                'md:p-4 p-2 box-border h-full',
                'grid place-items-center sm:text-2xl text-xl font-medium border-b border-transparent ',
                showActive && current ? "group text-white rounded-full active-link"
                    : "hover:bg-gray-200 text-gray-600  bg-transparent rounded-md"
            )}
        >

            {children}

            {
                (showActive && current) &&
                <Indicator style={{}}
                           className={classNames("group-hover:scale-125 absolute transition-all md:rotate-180",
                               "-z-10 left-1/2 -translate-x-1/2 md:top-0 bottom-0 transform fill-theme")}/>
            }
        </a>
    </Link>
)


export const Navigation = () => {
    const router = useRouter();
    const {resolvedTheme, setTheme} = useTheme()
    const [searchOpen, setSearchOpen] = useState(false);


    return (
        <>
            <header className={"w-full lg:col-span-2 md:col-span-2 sticky z-50 top-0 left-0 bg-white h-screen"}>
                <div className="max-w-7xl mx-auto py-8">
                    <div className={"grid gap-10"}>
                        <div className={"flex flex-row items-center gap-x-4 lg:px-8 px-2"}>
                            <div className={"h-16 w-16 relative overflow-hidden"}>
                                <Image src={Logo} objectFit={"contain"} layout={"fill"}/>
                            </div>
                            <p className={"text-theme font-bold text-xl lg:block hidden"}>
                                Firebolt
                            </p>
                        </div>
                        <p className={"text-slate-900 font-semibold text-xl  lg:px-8 px-2"}>
                            Menu
                        </p>
                        <div className={"grid gap-4"}>
                            {
                                navigation.map((each, key) => (
                                    <Link key={key} passHref href={each.route}>
                                        <a className={classNames("block gap-x-4 lg:px-8 px-2 py-4",
                                            "flex flex-row items-center",
                                            router.route === each.route && "bg-gray-50"
                                        )}>
                                            <span className={
                                                classNames("text-2xl", router.route === each.route ? "text-theme" : "text-slate-500")
                                            }>
                                                {each.icon}
                                            </span>
                                            <span className={
                                                classNames("text-md lg:block hidden", router.route === each.route ? "text-black" : "text-slate-500")
                                            }>
                                                {each.name}
                                            </span>
                                        </a>
                                    </Link>
                                ))
                            }
                        </div>
                        <p className={"text-slate-900 flex items-center justify-between font-semibold text-xl  lg:px-8 px-2"}>
                            <span>
                                Account
                            </span>
                            <span className={"lg:block hidden"}>
                                <IoChevronDown/>
                            </span>
                        </p>
                        <div className={"lg:px-8 px-2"}>
                            <div className={"flex gap-x-4 items-center"}>
                                <div className={"h-12 w-12 relative rounded-full overflow-hidden"}>
                                    <Image src={Person} objectFit={"cover"} layout={"fill"}/>
                                </div>
                                <div className={"lg:block hidden"}>
                                    <p className={"text-base font-medium text-gray-800"}>Khan Asfi Reza</p>
                                    <p className={"text-md text-gray-400"}>@reza</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )

}

const NavigationMenu = ({onClick, menuItems, icon}:
                            {
                                onClick: CallableFunction,
                                menuItems: Array<Array<{ href?: string, icon: JSX.Element, name: string, onClick?: Function }>>,
                                icon: JSX.Element
                            }) => {
    return (
        <Menu
            buttonClassName={classNames(
                'text-gray-600 relative nav-link',
                'md:p-4 p-2 box-border h-full grid place-items-center sm:text-2xl text-xl font-medium border-b border-transparent ',
                "hover:bg-gray-200  bg-transparent rounded-md"
            )}
            buttonText={<span>{icon}</span>}>
            {
                menuItems.map((items, key) => (
                    <div key={key} className="px-1 py-1">
                        {
                            items.map((item, k) => (
                                <MenuItem key={k}>
                                    {({active}) => (
                                        <button
                                            onClick={() => {
                                                if (item.onClick) {
                                                    item.onClick()
                                                } else {
                                                    onClick(item.href)
                                                }
                                            }}
                                            className={classNames(`group flex items-center rounded-md items-center w-full px-2 py-2 text-md`,
                                                active ? 'bg-theme text-white' : 'text-gray-900')}
                                        >
                                            <span className={"mr-4 text-xl"}>
                                                {item.icon}
                                            </span>
                                            {item.name}
                                        </button>
                                    )}
                                </MenuItem>
                            ))
                        }
                    </div>
                ))
            }
        </Menu>
    )
}
