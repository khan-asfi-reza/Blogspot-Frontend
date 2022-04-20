import {
    IoAlbumsOutline,
    IoCall,
    IoChatboxOutline,
    IoHelp,
    IoHomeOutline,
    IoLogOutOutline,
    IoPersonAddOutline,
    IoPersonCircle,
    IoSettingsOutline,
    IoShareOutline
} from "react-icons/io5";

export const navigation = [
    {name: <IoHomeOutline/>, href: '/', current: true, route: "/"},
    {name: <IoPersonAddOutline/>, href: '/friends', current: false, route: "/friends"},
    {name: <IoChatboxOutline/>, href: '#', current: false, route: "home"},
    {name: <IoShareOutline/>, href: '#', current: false, route: "home"},
    {name: <IoAlbumsOutline/>, href: '#', current: false, route: "home"},
]

export const moreMenu = [
    [
        {
            name: "Profile",
            href: '/profile',
            icon: <IoPersonCircle/>
        },
        {
            name: "Settings",
            href: '/settings',
            icon: <IoSettingsOutline/>
        }
    ],
    [
        {
            name: "Help",
            href: '/help',
            icon: <IoHelp/>
        },
        {
            name: "Support Center",
            href: '/support',
            icon: <IoCall/>
        },
    ],
    [
        {
            name: "Logout",
            href: '/logout',
            icon: <IoLogOutOutline/>
        },
    ]
]