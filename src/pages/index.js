import Person from "../assets/images/person.jpg";
import Code from "../assets/images/code.jpg";
import Content from "../components/shared/Content";
import {useState} from "react";
import Image from "next/image";
import {navigation} from "../const/navigation";
import Link from "next/link";
import classNames from "classnames";
import {useRouter} from "next/router";
import {useTheme} from "next-themes";

export default function Home() {
    const router = useRouter();
    const {resolvedTheme, setTheme} = useTheme()
    const [searchOpen, setSearchOpen] = useState(false);

    return (
        <div className={"bg-body"}>
            <nav className={"w-full h-16 sticky top-0 left-0 bg-nav border-b border-stroke z-50"}>

            </nav>
            <main className={"max-w-[2800px] mx-auto flex"}>
                <header
                    className={"w-full lg:basis-[350px] md:basis-[200px]  lg:col-span-2 md:col-span-2 border-r border-stroke sticky z-40 top-0 left-0 bg-nav h-screen"}>
                    <div className="max-w-7xl mx-auto py-8">
                        <div className={"grid gap-10"}>

                            <p className={"text-slate-900 font-semibold text-xl  lg:px-8 px-2"}>
                                Menu
                            </p>
                            <div className={"grid gap-4"}>
                                {
                                    navigation.map((each, key) => (
                                        <Link key={key} passHref href={each.route}>
                                            <a className={classNames("block gap-x-4 lg:px-8 px-2 py-4",
                                                "flex flex-row items-center",
                                                router.route === each.route && "bg-gray-50"
                                            )}>
                                            <span className={
                                                classNames("text-2xl", router.route === each.route ? "text-theme" : "text-subtitle")
                                            }>
                                                {each.icon}
                                            </span>
                                                <span className={
                                                    classNames("text-md lg:block hidden", router.route === each.route ? "text-black" : "text-subtitle")
                                                }>
                                                {each.name}
                                            </span>
                                            </a>
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </header>
                <MainComponent/>
                <div
                    className={"flex basis-[500px] lg:col-span-3 lg:flex md:hidden hidden md:col-span-4 sticky flex-col gap-y-10 lg:p-12 p-8 "}>


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
        </div>
    )
}


const MainComponent = () => {

    return (
        <section
            className={"lg:p-20 p-8 lg:col-span-7 col-span-10 container max-w-7xl mx-auto border-r-2 border-gray-200"}>
            <div className={"grid "}>
                <div className={"grid gap-10 lg:col-span-2  relative lg:order-1 order-2"}>
                    <Content name={"David Silva"}
                             title={"Why not to use PHP"}
                             tags={["React"]}
                             date={"2022-04-22T20:14:20"}
                             text={"If I’m saying that PHP is hated by the whole world, it’s not my personal opinion. In the latest stack overflow survey, developers from all over the world put PHP in the top 5 most dreaded languages. The latest Hired survey puts it squarely in the top 2 most hated. There’s a lot more and I’m not even talking about what’s going on Reddit. If you’re a PHP developer since 20 years who came here on a crusade to crucify me on the altar of Symfony, please relax. We’re here to talk, put the gun down. Well now on the contrary if you hate PHP with passion : take some pop-corns and sit down comfortably.\n" +
                                 "\n" +
                                 "Once upon a time I was doing some Symfony2 myself. And I liked the whole Symfony thing, frankly, it’s not bad. I told this to a developer I met at a devops meetup. He was shocked, he was about to vomit, he looked at me like I just murdered a newborn baby. From now on I’m going to call him James to make it easier. So I immediately asked James a question: why so much hatred?"}
                             image={Code}
                             profilePicture={Person}/>

                    <Content name={"David Silva"}
                             title={"Why not to use PHP"}
                             tags={["React"]}
                             date={"2022-04-22T20:14:20"}
                             text={"If I’m saying that PHP is hated by the whole world, it’s not my personal opinion. In the latest stack overflow survey, developers from all over the world put PHP in the top 5 most dreaded languages. The latest Hired survey puts it squarely in the top 2 most hated. There’s a lot more and I’m not even talking about what’s going on Reddit. If you’re a PHP developer since 20 years who came here on a crusade to crucify me on the altar of Symfony, please relax. We’re here to talk, put the gun down. Well now on the contrary if you hate PHP with passion : take some pop-corns and sit down comfortably.\n" +
                                 "\n" +
                                 "Once upon a time I was doing some Symfony2 myself. And I liked the whole Symfony thing, frankly, it’s not bad. I told this to a developer I met at a devops meetup. He was shocked, he was about to vomit, he looked at me like I just murdered a newborn baby. From now on I’m going to call him James to make it easier. So I immediately asked James a question: why so much hatred?"}
                             image={Code}
                             profilePicture={Person}/>
                </div>
            </div>
        </section>
    )
}

const NavigationComponent = () => {
    return (
        <>
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
        </>
    )
}

const SecondaryComponent = () => {
    const [searchOpen, setSearchOpen] = useState(false);
    return (
        <div
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
        </div>
    )
}