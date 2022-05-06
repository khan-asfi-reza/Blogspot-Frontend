import classNames from "classnames";
import {MouseEventHandler, useState} from "react";
import {AnimatePresence} from "framer-motion";
import {IoAddSharp, IoChevronBackOutline, IoChevronForwardOutline, IoPersonAddSharp} from "react-icons/io5";
import {Avatar} from "@SharedComponents/Avatar";
import {useQuery} from "react-query";
import axios from "axios";
import Link from "next/link";
import {Center, Div} from "@UI/Layout";
import {P} from "@UI/Typography";

import {CgSpinner} from "react-icons/cg";

function Controller({onClick, open}: { onClick: MouseEventHandler<HTMLButtonElement>, open: boolean }) {

    return (
        <button onClick={onClick} className={classNames("lg:hidden block fixed z-50",
            "top-20 text-2xl rounded-full p-2 right-2 bg-slate-200 text-gray-800 font-bold")}>
            <AnimatePresence exitBeforeEnter>
                {open ? <Div className={"flex items-center"}
                             key={"1"}
                             transition={{duration: 0.3}}
                             exit={{rotate: '-180deg'}}>
                        <IoChevronForwardOutline/>
                    </Div> :
                    <Div className={"flex items-center"}
                         key={"2"}
                         transition={{duration: 0.3}}
                         exit={{rotate: '180deg'}}>
                        <IoChevronBackOutline/>
                    </Div>}
            </AnimatePresence>
        </button>)
}

function Aside({children, open}) {
    return (
        <aside
            className={classNames("lg:col-span-3 min-h-[calc(100vh+12rem)] scrollbar-light lg:transition-none transition-all duration-300 h-[calc(100vh+4rem)] order-3 lg:col-span-3 flex fixed sm:col-span-4",
                "lg:w-full w-[320px] bg-nav rounded-lg lg:sticky lg:top-16 top-14 lg:bg-transparent lg:right-0 flex-col gap-y-10 lg:p-4 p-2",
                open ? "right-0" : "-right-full")}>
            {children}
        </aside>
    )
}


// Show More Button
function ShowMore({route}) {
    return (
        <Link passHref href={route}>
            <a className={"text-left px-4 text-sm text-gray-500"}>
                Show More
            </a>
        </Link>
    )
}

// Sidebar Each Section Container
function Container({children}) {
    return (
        <div className={"w-full bg-white rounded-xl grid gap-4 py-6 "}>
            {children}
        </div>
    )
}

// Stacked Flex Box
function Stack({children}) {
    return (
        <div className={"flex flex-col gap-y-5  mt-4"}>
            {children}
        </div>
    )
}

// Item Box
function StackItem({children}) {
    return (
        <div className={"flex items-center justify-between px-4"}>
            {children}
        </div>
    )
}

// Each section in the sidebar contains a title
function Header({text}) {
    return (
        <P size={"xl"} className={"font-bold text-black px-4"}>
            {text}
        </P>
    )
}

const SidebarContent = Object.assign(Aside, {Container, Header, ShowMore, Stack, Controller, StackItem})

// RecommendationContainer
function RecommendationContainer({title, route, children}) {
    return (
        <SidebarContent.Container>
            <SidebarContent.Header text={title}/>
            <SidebarContent.Stack>
                {
                    children
                }
                <ShowMore route={route}/>
            </SidebarContent.Stack>
        </SidebarContent.Container>
    )
}

// People To Follow
function FollowingRecommendation({data}) {
    return (
        <RecommendationContainer title={"Suggested People"} route={"/"}>
            {
                data.slice(0, 6).map((each, key) => (
                    <SidebarContent.StackItem key={key}>
                        <div className={"flex items-center gap-x-2"}>
                            <Avatar src={each.urls.full} size={"lg"}/>
                            <div>
                                <p className={"text-md font-medium text-title"}>{each.user.first_name} {each.user.last_name}</p>
                                <p className={"text-xs text-subtitle"}>32.5k Follower</p>
                            </div>
                        </div>
                        <button className={"p-2 rounded-full bg-blue-100 text-blue-500 text-center"}>
                            <IoPersonAddSharp/>
                        </button>
                    </SidebarContent.StackItem>
                ))
            }
        </RecommendationContainer>

    )
}

// Contents To Follow

function ContentRecommendation({data}) {
    return (
        <RecommendationContainer title={"Suggested Contents"} route={"/"}>
            {
                data.slice(0, 6).map((each, key) => (
                    <SidebarContent.StackItem key={key}>
                        <div className={"flex flex-col"}>
                            <p className={"text-title text-lg"}>
                                @React
                            </p>
                            <p className={"text-xs text-subtext"}>
                                129.5k Posts
                            </p>
                        </div>
                        <button className={"p-2 rounded-full bg-blue-100 text-blue-500 text-center"}>
                            <IoAddSharp/>
                        </button>
                    </SidebarContent.StackItem>
                ))
            }
        </RecommendationContainer>

    )
}

// Loading View while Loading Content
function ContentLoading() {
    return (
        <SidebarContent.Container>
            <Center>
                <span className={"text-3xl animate-spin text-gray-500"}>
                    <CgSpinner/>
                </span>
            </Center>
        </SidebarContent.Container>
    )
}

export default function Sidebar() {
    const [isSideBarOpen, setSideBarOpen] = useState(false);

    const {isLoading, data} = useQuery('sidebarImages', async () => {
        let images = await axios.get('https://api.unsplash.com/photos/?client_id=xUWwCMTcPs-YwJx-mqr7LGRtKU32FPeS-NoFSpZhPS8&query=person')
        return await images.data;
    })

    return (
        <>
            <SidebarContent.Controller onClick={() => {
                setSideBarOpen(!isSideBarOpen)
            }} open={isSideBarOpen}/>
            <SidebarContent open={isSideBarOpen}>

                {
                    isLoading ?
                        <ContentLoading/>
                        :
                        <FollowingRecommendation data={data}/>
                }

                {
                    isLoading ?
                        <ContentLoading/>
                        :
                        <ContentRecommendation data={data}/>
                }

            </SidebarContent>
        </>)
}