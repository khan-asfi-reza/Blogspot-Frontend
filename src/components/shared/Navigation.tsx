import {
    IoAddCircleOutline,
    IoApps,
    IoAppsSharp,
    IoHelpCircleOutline,
    IoLogOutOutline,
    IoMegaphoneOutline,
    IoMenuOutline,
    IoNotifications,
    IoRadio,
    IoSearchOutline
} from "react-icons/io5";
import classNames from "classnames";
import Link from "next/link";
import {useRouter} from "next/router";
import {Menu, MenuItem} from "@UI/Menu";
import Image from "next/image";
import Logo from "@images/logo.png";
import Person from "@images/person.jpg";
import {navigation} from "@const/navigation";
import {SecondaryInput} from "@UI/Form";

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

const NavigationRoot = ({children}) => (
    <section role={"navigation"} id={"navigationRoot"}>
        {children}
    </section>
)

export const Header = () => (
    <header role={"header navigation"}
            className={"w-full sm:h-16 h-14 fixed top-0 left-0 bg-nav border-b border-stroke z-50"}>
        <div className={"container h-full mx-auto"}>
            <div className={"grid h-full grid-cols-12 items-center"}>
                <div className={"lg:col-span-2 sm:col-span-1 col-span-1 flex items-center"}>

                    <div className={"sm:h-10 h-8 sm:w-10 w-8 relative"}>
                        <Image src={Logo} objectFit={"contain"} layout={"fill"} alt={"Logo"}/>
                    </div>
                    <h2 className={"text-xl lg:block hidden"}>
                        Firebolt
                    </h2>

                </div>
                <div
                    className={"lg:col-span-7 sm:col-span-7 col-span-7 flex lg:gap-x-32 lg:gap-x-10 sm:gap-x-6 gap-x-6 lg:border-r-2 lg:border-stroke pr-2"}>
                    <SecondaryInput containerProps={{className: "bg-accent sm:h-10 h-9 flex-1"}}
                                    icon={<IoSearchOutline/>}
                                    label={"Search anything"}/>

                    <button
                        className={"sm:px-4 sm:flex hidden hover:bg-blue-600 rounded-full text-md bg-theme text-white  items-center justify-center lg:gap-x-4 gap-x-1"}>
                                <span className={"md:inline hidden"}>
                                    Create
                                </span>
                        <span className={"text-2xl"}>
                                    <IoAddCircleOutline/>
                                </span>
                    </button>
                </div>
                <div
                    className={"lg:col-span-3 sm:col-span-4 col-span-4 justify-end flex 2xl:gap-x-8 xl:gap-x-4 lg:gap-x-4 sm:gap-x-4 gap-x-1"}>
                    <button className={"lg:text-3xl text-2xl text-gray-700 sm:block hidden"}>
                        <IoMegaphoneOutline/>
                    </button>
                    <button className={"lg:text-3xl text-2xl text-gray-700"}>
                        <IoNotifications/>
                    </button>
                    <button className={"lg:text-3xl text-2xl text-gray-700 sm:block hidden"}>
                        <IoRadio/>
                    </button>
                    <div className={"flex items-center gap-x-2"}>
                        <div className={"flex items-center bg-themeLight rounded-full sm:order-1 order-2"}>
                            <div className={"h-10 items-center px-4 xl:flex hidden"}>
                                <p>
                                    @asfi
                                </p>
                            </div>
                            <div className={"sm:h-10 h-8 sm:w-10 w-8 relative rounded-full overflow-hidden"}>
                                <Image src={Person} objectFit={"cover"} layout={"fill"} alt={"Test"}/>
                            </div>
                        </div>
                        <button className={"lg:text-3xl text-2xl text-subtext  sm:order-2 order-1"}>
                            <IoApps/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </header>
)


export const Navbar = () => {
    const router = useRouter();

    return (
        <nav role={"side navigation"}
             className={"w-full lg:col-span-2 sm:col-span-1 col-span-12 sm:order-1 sm:bg-transparent bg-nav order-2 overflow-hidden  sm:border-r sm:border-t-0 border-t border-stroke sticky z-40 sm:top-16 sm:bottom-0 top-0 bottom-0 left-0 h-16 sm:h-[calc(100vh-4rem)]"}>
            <div className="max-w-7xl mx-auto h-full">
                <div className={"flex sm:flex-col justify-between sm:gap-10 gap-x-8 sm:py-10 h-full"}>
                    <p className={"sm:flex hidden text-slate-900  gap-x-10 items-center font-bold text-xl "}>
                                <span className={"lg:inline hidden"}>
                                    Menu
                                </span>
                        <span>
                                    <IoAppsSharp/>
                                </span>

                    </p>
                    <div
                        className={"flex sm:flex-col sm:justify-start justify-between sm:gap-0.5 gap-x-1 flex-1 px-2 sm:px-0 sm:w-full sm:max-w-full container mx-auto"}>
                        {navigation.map((each, key) => (
                            <Link key={key} passHref href={each.route}>
                                <a className={classNames("block gap-x-4 py-4", "flex flex-row items-center",)}>
                                                <span
                                                    className={classNames("text-2xl relative", router.route === each.route ? "text-theme" : "text-subtext")}>
                                                    {each.icon}
                                                    {router.route === each.route && <span
                                                        className={"h-2 w-2 rounded-full bg-blue-500 absolute top-0 right-0"}/>}
                                                </span>
                                    <span
                                        className={classNames("text-md lg:block hidden", router.route === each.route ? "text-theme" : "text-subtext")}>
                                                    {each.name}
                                                </span>
                                </a>
                            </Link>))}
                        <Link passHref href={"/"}>
                            <a className={classNames("block gap-x-4 py-4", "flex flex-row items-center",)}>
                                            <span className={classNames("text-2xl relative", "text-subtext")}>
                                                <IoMenuOutline/>
                                            </span>
                                <span className={classNames("text-md lg:block hidden", "text-subtext")}>
                                                Info
                                            </span>
                            </a>
                        </Link>
                    </div>
                    <div className={"sm:flex hidden flex-col gap-0.5"}>
                        <Link passHref href={"/"}>
                            <a className={classNames("block gap-x-4 py-4", "flex flex-row items-center",)}>
                                        <span className={classNames("text-2xl relative", "text-subtext")}>
                                            <IoHelpCircleOutline/>
                                        </span>
                                <span className={classNames("text-md lg:block hidden", "text-subtext")}>
                                            Info
                                        </span>
                            </a>
                        </Link>

                        <Link passHref href={"/"}>
                            <a className={classNames("block gap-x-4 py-4", "flex flex-row items-center",)}>
                                        <span className={classNames("text-2xl relative", "text-subtext")}>
                                            <IoLogOutOutline/>
                                        </span>
                                <span className={classNames("text-md lg:block hidden", "text-subtext")}>
                                            Logout
                                        </span>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )

}

export const Navigation = Object.assign(NavigationRoot, {Navbar, Header})


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
