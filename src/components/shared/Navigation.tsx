import {
    IoAddCircleOutline,
    IoApps,
    IoAppsSharp,
    IoMegaphoneOutline,
    IoNotifications,
    IoSearchOutline
} from "react-icons/io5";
import classNames from "classnames";
import Link from "next/link";
import {useRouter} from "next/router";
import {Menu, MenuItem} from "@UI/Menu";
import Image from "next/image";
import Person from "@images/person.jpg";
import {helperNavigation, moreMenu, navigation} from "@const/navigation";
import {SecondaryInput} from "@UI/Form";
import {Logo} from "@UI/Icons";

const NavLink = ({href, active, icon, name}) => (
    <Link passHref href={href}>
        <a className={classNames("block gap-x-4 py-4", "flex flex-row items-center",)}>
            <span className={classNames("text-2xl relative", active ? "text-theme" : "text-subtext")}>
                {icon}
                {active && <span
                    className={"h-2 w-2 rounded-full bg-blue-500 absolute top-0 right-0"}/>}
            </span>
            <span className={classNames("text-md lg:block hidden", active ? "text-theme" : "text-subtext")}>
                {name}
            </span>
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

                    <Logo/>
                    <h2 className={"text-xl font-semibold lg:block hidden"}>
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
                    className={"lg:col-span-3 sm:col-span-4 col-span-4 justify-end flex "}>
                    <button
                        className={"lg:text-2xl rounded-lg text-xl text-gray-700 sm:block hidden lg:p-4 p-2  hover:bg-gray-200  bg-transparent"}>
                        <IoMegaphoneOutline/>
                    </button>
                    <button
                        className={"lg:text-2xl rounded-lg text-xl text-gray-700 hover:bg-gray-200 lg:p-4 p-2   bg-transparent"}>
                        <IoNotifications/>
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
                        <NavigationMenu onClick={() => {
                        }} menuItems={moreMenu} icon={<IoApps/>}/>
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
                <div className={"flex sm:flex-col justify-between sm:gap-10 gap-x-8 sm:py-4 h-full"}>
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
                        {navigation.map((navItem, key) => (
                            <NavLink key={key}
                                     active={navItem.route === router.route}
                                     icon={navItem.icon}
                                     name={navItem.name}
                                     href={navItem.route}
                            />
                        ))}

                    </div>
                    <div className={"sm:flex hidden flex-col gap-0.5"}>
                        {
                            helperNavigation.map(
                                (moreNav) => (
                                    <NavLink
                                        key={moreNav.name}
                                        active={false}
                                        icon={moreNav.icon}
                                        name={moreNav.name}
                                        href={moreNav.route}
                                    />
                                )
                            )
                        }
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
                'lg:text-2xl rounded-lg text-xl text-gray-700 sm:block hidden lg:p-4 p-2  hover:bg-gray-200  bg-transparent',
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
                                                onClick(item.href)
                                            }}
                                            className={classNames(`group flex items-center rounded-md items-center w-full px-2 py-2 text-md`,
                                                active ? 'bg-theme text-white' : 'text-gray-600')}
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
