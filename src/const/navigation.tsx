import {
    IoAlbumsOutline,
    IoCall,
    IoChatboxOutline,
    IoHelp, IoHelpCircleOutline,
    IoHomeOutline,
    IoLogOut, IoLogOutOutline,
    IoPersonAddOutline,
    IoPersonCircle,
    IoSettings,
    IoShareOutline
} from "react-icons/io5";

export const navigation = [
    {name: "Home", icon: <IoHomeOutline/>, href: '/', route: "/"},
    {name: "Followers", icon: <IoPersonAddOutline/>, route: "/friends"},
    {name: "Messages", icon: <IoChatboxOutline/>, href: '#', route: "home"},
    {name: "Discover", icon: <IoShareOutline/>, href: '#', route: "home"},
    {name: "More", icon: <IoAlbumsOutline/>, href: '#', route: "home"},
]


export const helperNavigation = [
    {name: "Support Center", icon: <IoHelpCircleOutline/>,  route: "/"},
    {name: "Logout", icon: <IoLogOutOutline/>, route: "/"},
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
            icon: <IoSettings/>
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
            icon: <IoLogOut/>
        },
    ]
]