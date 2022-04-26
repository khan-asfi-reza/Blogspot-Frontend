import {
    IoAlbums,
    IoCall,
    IoChatbox,
    IoHelp,
    IoHome,
    IoLogOut,
    IoPersonAdd,
    IoPersonCircle,
    IoSettings,
    IoShare
} from "react-icons/io5";

export const navigation = [
    {name: "Home", icon: <IoHome/>, href: '/', route: "/"},
    {name: "Followers", icon: <IoPersonAdd/>, href: '/friends', route: "/friends"},
    {name: "Messages", icon: <IoChatbox/>, href: '#', route: "home"},
    {name: "Discover", icon: <IoShare/>, href: '#', route: "home"},
    {name: "More", icon: <IoAlbums/>, href: '#', route: "home"},
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