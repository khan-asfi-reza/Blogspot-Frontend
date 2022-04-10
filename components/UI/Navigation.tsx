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
import Logo from "../../assets/images/logo.png";
import {Div} from "./Container";
import {SecondaryInput} from "./Form";

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


export const Navigation = () => (
    <>
        <nav className={"w-full fixed bg-white border-b border-gray-200"}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className="relative grid lg:grid-cols-3 md:grid-cols-4 grid-cols-2 md:gap-x-10 gap-x-2 items-center justify-between h-16">

                    <div className="flex-shrink-0 flex items-center ">
                        <Div className={"h-8 w-8 relative"}>
                            <Image src={Logo} alt={"Logo Image"} layout={"fill"} objectFit={"contain"}/>
                        </Div>
                        <SecondaryInput containerProps={{className: "lg:w-[80%] md:w-full"}} icon={<IoSearchOutline/>}
                                        label={"Search"}/>
                    </div>
                    <div className="flex-full lg:col-span-1 md:col-span-2 md:block hidden">
                        <div className="flex justify-between ">
                            {navigation.map((item, key) => (
                                <NavItem key={key} href={""} current={item.current}>
                                    {item.name}
                                </NavItem>
                            ))}
                        </div>
                    </div>

                    <div className={"flex justify-end items-center"}>

                        <NavItem current={false} href={""}>
                            <IoAddCircleOutline/>
                        </NavItem>

                        <NavItem current={false} href={""}>
                            <IoNotifications/>
                        </NavItem>

                        <Div className={"h-10 w-10 rounded-full bg-gray-300 mr-1"}>

                        </Div>
                    </div>
                </div>
            </div>
        </nav>
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