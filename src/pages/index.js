import Person from "../assets/images/person.jpg";
import Code from "../assets/images/code.jpg";
import Logo from "../assets/images/logo.png";
import Content from "../components/shared/Content";
import {useState} from "react";
import Image from "next/image";
import {navigation} from "../const/navigation";
import Link from "next/link";
import classNames from "classnames";
import {useRouter} from "next/router";
import {useTheme} from "next-themes";
import {
    IoAddCircleOutline,
    IoAppsOutline,
    IoAppsSharp,
    IoHelpCircleOutline,
    IoLogOutOutline,
    IoMegaphoneOutline,
    IoNotifications,
    IoRadio,
    IoSearchOutline
} from "react-icons/io5";
import {SecondaryInput} from "../components/UI/Form";

export default function Home() {
    const router = useRouter();
    const {resolvedTheme, setTheme} = useTheme()
    const [searchOpen, setSearchOpen] = useState(false);

    return (<div className={"bg-body"}>
        <header className={"w-full h-16 sticky top-0 left-0 bg-nav border-b border-stroke z-50"}>
            <div className={"container h-full mx-auto"}>
                <div className={"grid h-full grid-cols-12 items-center"}>
                    <div className={"lg:col-span-2 sm:col-span-1 flex items-center"}>

                        <div className={"h-10 w-10 relative"}>
                            <Image src={Logo} objectFit={"contain"} layout={"fill"} alt={"Logo"}/>
                        </div>
                        <h2 className={"text-xl lg:block hidden"}>
                            Firebolt
                        </h2>

                    </div>
                    <div
                        className={"lg:col-span-7 sm:col-span-7 flex lg:gap-x-32 lg:gap-x-10 sm:gap-x-6 lg:border-r-2 lg:border-stroke pr-2"}>
                        <SecondaryInput containerProps={{className: "bg-accent h-10 flex-1"}} icon={<IoSearchOutline/>}
                                        label={"Search anything"}/>
                        <button
                            className={"px-4 hover:bg-blue-600 rounded-full text-md bg-theme text-white flex items-center justify-center lg:gap-x-4 gap-x-1"}>
                                <span className={"md:inline hidden"}>
                                    Create
                                </span>
                            <span className={"text-2xl"}>
                                    <IoAddCircleOutline/>
                                </span>
                        </button>
                    </div>
                    <div
                        className={"lg:col-span-3 sm:col-span-4 justify-end flex 2xl:gap-x-8 xl:gap-x-4 lg:gap-x-4 sm:gap-x-4"}>
                        <button className={"lg:text-3xl text-2xl text-gray-700"}>
                            <IoMegaphoneOutline/>
                        </button>
                        <button className={"lg:text-3xl text-2xl text-gray-700"}>
                            <IoNotifications/>
                        </button>
                        <button className={"lg:text-3xl text-2xl text-gray-700"}>
                            <IoRadio/>
                        </button>
                        <div className={"flex items-center gap-x-2"}>
                            <div className={"flex items-center bg-blue-100 rounded-full"}>
                                <div className={"h-10 items-center px-4 xl:flex hidden"}>
                                    <p>
                                        @asfi
                                    </p>
                                </div>
                                <div className={"h-10 w-10 relative rounded-full overflow-hidden"}>
                                    <Image src={Person} objectFit={"cover"} layout={"fill"} alt={"Test"}/>
                                </div>
                            </div>
                            <button className={"lg:text-3xl text-2xl text-subtext"}>
                                <IoAppsOutline/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <main className={"container mx-auto grid grid-cols-12 "}>
            <nav
                className={"w-full lg:col-span-2 sm:col-span-1 overflow-hidden  border-r border-stroke sticky z-40 top-16 left-0 h-[calc(100vh-4rem)]"}>
                <div className="max-w-7xl mx-auto h-full">
                    <div className={"flex flex-col gap-10 py-10 h-full"}>
                        <p className={"text-slate-900 flex gap-x-10 items-center font-bold text-xl "}>
                                <span className={"lg:inline hidden"}>
                                    Menu
                                </span>
                            <span>
                                    <IoAppsSharp/>
                                </span>

                        </p>
                        <div className={"flex flex-col gap-0.5 flex-1"}>
                            {navigation.map((each, key) => (<Link key={key} passHref href={each.route}>
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
                        </div>
                        <div className={"flex flex-col gap-0.5"}>
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
            <section
                className={"lg:col-span-7 bg-body sm:col-span-11 container max-w-7xl lg:p-20 p-8  mx-auto lg:border-r-2 border-gray-200"}>
                <MainComponent/>
            </section>
            <div
                className={"flex lg:col-span-3 lg:col-span-3 lg:flex md:hidden hidden sm:col-span-4 sticky flex-col gap-y-10 lg:p-4 p-2 "}>


                <div className={"w-full bg-white rounded-xl grid gap-4 py-4 "}>
                    <h2 className={"text-xl font-bold text-black px-4"}>
                        Trends
                    </h2>

                    <div className={"grid"}>
                        <div className={"border-b border-slate-200 py-4 px-4 hover:bg-slate-200"}>
                            <p className={"text-gray-600 text-xs"}>
                                    Trending #1
                                </p>
                                <div className={"flex justify-between flex-row "}>
                                    <p className={"text-gray-700 text-base font-medium"}>
                                        @React
                                    </p>
                                    <p className={"text-gray-600 text-md"}>
                                        3.5k Blogs
                                    </p>
                                </div>
                            </div>

                            <div className={"border-b border-slate-200 py-4 px-4 hover:bg-slate-200"}>
                                <p className={"text-gray-600 text-xs"}>
                                    Trending #2
                                </p>
                                <div className={"flex justify-between flex-row "}>
                                    <p className={"text-gray-700 text-base font-medium"}>
                                        @React
                                    </p>
                                    <p className={"text-gray-600 text-md"}>
                                        3.5k Blogs
                                    </p>
                                </div>
                            </div>

                            <div className={"border-b border-slate-200 py-4 px-4 hover:bg-slate-200"}>
                                <p className={"text-gray-600 text-xs"}>
                                    Trending #3
                                </p>
                                <div className={"flex justify-between flex-row "}>
                                    <p className={"text-gray-700 text-base font-medium"}>
                                        @React
                                    </p>
                                    <p className={"text-gray-600 text-md"}>
                                        3.5k Blogs
                                    </p>
                                </div>
                            </div>
                        </div>

                        <button className={"text-left px-4 text-sm "}>
                            Show More
                        </button>
                    </div>
                    <div className={"w-full bg-white rounded-xl grid gap-4 py-4 "}>
                        <h2 className={"text-xl font-bold text-black px-4"}>
                            Trends
                        </h2>

                        <div className={"grid"}>
                            <div className={"border-b border-slate-200 py-4 px-4 hover:bg-slate-200"}>
                                <p className={"text-gray-600 text-xs"}>
                                    Trending #1
                                </p>
                                <div className={"flex justify-between flex-row "}>
                                    <p className={"text-gray-700 text-base font-medium"}>
                                        @React
                                    </p>
                                    <p className={"text-gray-600 text-md"}>
                                        3.5k Blogs
                                    </p>
                                </div>
                            </div>

                            <div className={"border-b border-slate-200 py-4 px-4 hover:bg-slate-200"}>
                                <p className={"text-gray-600 text-xs"}>
                                    Trending #2
                                </p>
                                <div className={"flex justify-between flex-row "}>
                                    <p className={"text-gray-700 text-base font-medium"}>
                                        @React
                                    </p>
                                    <p className={"text-gray-600 text-md"}>
                                        3.5k Blogs
                                    </p>
                                </div>
                            </div>

                            <div className={"border-b border-slate-200 py-4 px-4 hover:bg-slate-200"}>
                                <p className={"text-gray-600 text-xs"}>
                                    Trending #3
                                </p>
                                <div className={"flex justify-between flex-row "}>
                                    <p className={"text-gray-700 text-base font-medium"}>
                                        @React
                                    </p>
                                    <p className={"text-gray-600 text-md"}>
                                        3.5k Blogs
                                    </p>
                                </div>
                            </div>
                        </div>

                        <button className={"text-left px-4 text-sm "}>
                            Show More
                        </button>
                    </div>
            </div>
        </main>
    </div>)
}


const MainComponent = () => {

    return (
            <div className={"grid "}>
                <div className={"grid gap-10 lg:col-span-2  relative lg:order-1 order-2"}>
                    <Content name={"David Silva"}
                             title={"Why not to use PHP"}
                             tags={["React"]}
                             date={"2022-04-22T20:14:20"}
                             text={"If I’m saying that PHP is hated by the whole world, it’s not my personal opinion. In the latest stack overflow survey, developers from all over the world put PHP in the top 5 most dreaded languages. The latest Hired survey puts it squarely in the top 2 most hated. There’s a lot more and I’m not even talking about what’s going on Reddit. If you’re a PHP developer since 20 years who came here on a crusade to crucify me on the altar of Symfony, please relax. We’re here to talk, put the gun down. Well now on the contrary if you hate PHP with passion : take some pop-corns and sit down comfortably.\n" + "\n" + "Once upon a time I was doing some Symfony2 myself. And I liked the whole Symfony thing, frankly, it’s not bad. I told this to a developer I met at a devops meetup. He was shocked, he was about to vomit, he looked at me like I just murdered a newborn baby. From now on I’m going to call him James to make it easier. So I immediately asked James a question: why so much hatred?"}
                             image={Code}
                             profilePicture={Person}/>

                    <Content name={"David Silva"}
                             title={"Why not to use PHP"}
                             tags={["React"]}
                             date={"2022-04-22T20:14:20"}
                             text={"If I’m saying that PHP is hated by the whole world, it’s not my personal opinion. In the latest stack overflow survey, developers from all over the world put PHP in the top 5 most dreaded languages. The latest Hired survey puts it squarely in the top 2 most hated. There’s a lot more and I’m not even talking about what’s going on Reddit. If you’re a PHP developer since 20 years who came here on a crusade to crucify me on the altar of Symfony, please relax. We’re here to talk, put the gun down. Well now on the contrary if you hate PHP with passion : take some pop-corns and sit down comfortably.\n" + "\n" + "Once upon a time I was doing some Symfony2 myself. And I liked the whole Symfony thing, frankly, it’s not bad. I told this to a developer I met at a devops meetup. He was shocked, he was about to vomit, he looked at me like I just murdered a newborn baby. From now on I’m going to call him James to make it easier. So I immediately asked James a question: why so much hatred?"}
                             image={Code}
                             profilePicture={Person}/>
                </div>
            </div>
    )
}

const NavigationComponent = () => {
    return (<>
        <header
            className={"w-full lg:col-span-2 md:col-span-1 sticky z-50 top-0 left-0 bg-white border-b border-gray-100 h-screen"}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative grid grid-cols-2 md:gap-x-2 gap-x-3 items-center justify-between ">
                    <div className={"h-10 w-10 rounded-full relative overflow-hidden"}>
                        <Image src={Person} objectFit={"cover"} layout={"fill"}/>
                    </div>
                </div>
            </div>
        </header>
    </>)
}

const SecondaryComponent = () => {
    const [searchOpen, setSearchOpen] = useState(false);
    return (<div
        className={"flex lg:col-span-3 lg:flex md:hidden hidden md:col-span-4 sticky flex-col gap-y-10 lg:p-12 p-8 "}>


        <div className={"w-full bg-white rounded-xl grid gap-4 py-4 "}>
            <h2 className={"text-xl font-bold text-black px-4"}>
                Trends
            </h2>

            <div className={"grid"}>
                <div className={"border-b border-slate-200 py-4 px-4 hover:bg-slate-200"}>
                        <p className={"text-gray-600 text-xs"}>
                            Trending #1
                        </p>
                        <div className={"flex justify-between flex-row "}>
                            <p className={"text-gray-700 text-base font-medium"}>
                                @React
                            </p>
                            <p className={"text-gray-600 text-md"}>
                                3.5k Blogs
                            </p>
                        </div>
                    </div>

                    <div className={"border-b border-slate-200 py-4 px-4 hover:bg-slate-200"}>
                        <p className={"text-gray-600 text-xs"}>
                            Trending #2
                        </p>
                        <div className={"flex justify-between flex-row "}>
                            <p className={"text-gray-700 text-base font-medium"}>
                                @React
                            </p>
                            <p className={"text-gray-600 text-md"}>
                                3.5k Blogs
                            </p>
                        </div>
                    </div>

                    <div className={"border-b border-slate-200 py-4 px-4 hover:bg-slate-200"}>
                        <p className={"text-gray-600 text-xs"}>
                            Trending #3
                        </p>
                        <div className={"flex justify-between flex-row "}>
                            <p className={"text-gray-700 text-base font-medium"}>
                                @React
                            </p>
                            <p className={"text-gray-600 text-md"}>
                                3.5k Blogs
                            </p>
                        </div>
                    </div>
                </div>

                <button className={"text-left px-4 text-sm "}>
                    Show More
                </button>
            </div>
            <div className={"w-full bg-white rounded-xl grid gap-4 py-4 "}>
                <h2 className={"text-xl font-bold text-black px-4"}>
                    Trends
                </h2>

                <div className={"grid"}>
                    <div className={"border-b border-slate-200 py-4 px-4 hover:bg-slate-200"}>
                        <p className={"text-gray-600 text-xs"}>
                            Trending #1
                        </p>
                        <div className={"flex justify-between flex-row "}>
                            <p className={"text-gray-700 text-base font-medium"}>
                                @React
                            </p>
                            <p className={"text-gray-600 text-md"}>
                                3.5k Blogs
                            </p>
                        </div>
                    </div>

                    <div className={"border-b border-slate-200 py-4 px-4 hover:bg-slate-200"}>
                        <p className={"text-gray-600 text-xs"}>
                            Trending #2
                        </p>
                        <div className={"flex justify-between flex-row "}>
                            <p className={"text-gray-700 text-base font-medium"}>
                                @React
                            </p>
                            <p className={"text-gray-600 text-md"}>
                                3.5k Blogs
                            </p>
                        </div>
                    </div>

                    <div className={"border-b border-slate-200 py-4 px-4 hover:bg-slate-200"}>
                        <p className={"text-gray-600 text-xs"}>
                            Trending #3
                        </p>
                        <div className={"flex justify-between flex-row "}>
                            <p className={"text-gray-700 text-base font-medium"}>
                                @React
                            </p>
                            <p className={"text-gray-600 text-md"}>
                                3.5k Blogs
                            </p>
                        </div>
                    </div>
                </div>

                <button className={"text-left px-4 text-sm "}>
                    Show More
                </button>
            </div>
    </div>)
}