import {IoLaptopOutline, IoMoonSharp, IoSunnySharp} from "react-icons/io5";
import classNames from "classnames";
import Link from "next/link";
import {useRouter} from "next/router";
import {Menu, MenuItem} from "@UI/Menu";
import {useTheme} from "next-themes";
import {useState} from "react";

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

    const ThemeMenu = [
        [
            {
                name: "Light",
                icon: <IoSunnySharp/>,
                onClick: () => {
                    setTheme("light")
                }
            },
            {
                name: "Dark",
                icon: <IoMoonSharp/>,
                onClick: () => {
                    setTheme("dark")
                }
            },
            {
                name: "System",
                icon: <IoLaptopOutline/>,
                onClick: () => {
                    setTheme("system")
                }
            },
        ]
    ]

    const LogoIcon = () => {
        switch (resolvedTheme) {
            case "dark":
                return <IoSunnySharp/>
            case "light":
                return <IoMoonSharp/>
            default:
                return <IoSunnySharp/>
        }
    }


    return (
        <>
            <header className={"w-full sticky z-50 top-0 left-0 bg-white border-b border-gray-100 h-screen"}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative grid grid-cols-2 md:gap-x-2 gap-x-3 items-center justify-between ">

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
