import {IoChatboxOutline, IoHomeOutline, IoMenuOutline, IoPersonAddOutline, IoShareOutline} from "react-icons/io5";
import Image from "next/image";
import classNames from "classnames";
import Logo from "../../assets/images/logo.png";
import {Div} from "./Container";

const navigation = [
    {name: <IoHomeOutline/>, href: '#', current: true},
    {name: <IoPersonAddOutline/>, href: '#', current: false},
    {name: <IoChatboxOutline/>, href: '#', current: false},
    {name: <IoShareOutline/>, href: '#', current: false},
]
const NavItem = ({href, children}) => (
    <a
        href={href}
        className={classNames(
            'text-gray-600  hover:bg-theme hover:text-white',
            'p-4 sm:text-2xl text-xl font-medium border-b border-transparent rounded-full'
        )}
    >
        {children}
    </a>
)


export const Navigation = () => (
    <>
        <nav className={"w-full fixed bg-white border-b border-gray-200"}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className="relative grid sm:grid-cols-3 grid-cols-2 md:gap-x-10 gap-x-2 items-center justify-between h-16">

                    <div className="flex-shrink-0 flex items-center ">
                        <Div className={"h-8 w-8 relative"}>
                            <Image src={Logo} alt={"Logo Image"} layout={"fill"} objectFit={"contain"}/>
                        </Div>

                    </div>
                    <div className="flex-full  sm:block hidden">
                        <div className="flex space-x-4 justify-between ">
                            {navigation.map((item, key) => (
                                <NavItem key={key} href={""}>
                                    {item.name}
                                </NavItem>
                            ))}
                        </div>
                    </div>

                    <div className={"flex justify-end"}>
                        <NavItem href={""}>
                            <IoMenuOutline/>
                        </NavItem>
                    </div>
                </div>
            </div>
        </nav>
        <nav className={"fixed h-16 w-full bottom-0 bg-white sm:hidden block border-t border-gray-200"}>
            <div className={"max-w-7xl mx-auto px-8 xs:px-32 sm:px-12"}>
                <div className="flex space-x-4 justify-between ">
                    {navigation.map((item, key) => (
                        <NavItem key={key} href={""}>
                            {item.name}
                        </NavItem>
                    ))}
                </div>
            </div>
        </nav>
    </>

)