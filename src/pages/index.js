import Person from "../assets/images/person.jpg";
import Code from "../assets/images/code.jpg";
import Content from "../components/shared/Content";
import {SecondaryInput} from "../components/UI/Form";
import {IoSearchOutline} from "react-icons/io5";
import {useState} from "react";
import Image from "next/image";
import {AnimatePresence} from "framer-motion";
import {Div} from "../components/UI/Layout";
import {Navigation} from "../components/shared/Navigation";

export default function Home() {


    return (
        <div className={"bg-themeBg"}>
            <main className={"max-w-[2800px] mx-auto grid grid-cols-12"}>
                <Navigation/>
                <MainComponent/>
                <SecondaryComponent/>
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
            className={"flex lg:col-span-3 lg:block md:hidden hidden md:col-span-4 sticky flex-col gap-y-10 lg:p-12 p-8 "}>
            <div className={"relative z-30"}>
                <SecondaryInput containerProps={{className: "bg-[#fff]"}}
                                icon={<IoSearchOutline/>}
                                label={"Search anything"}

                >

                </SecondaryInput>
                <AnimatePresence exitBeforeEnter>
                    {
                        searchOpen &&
                        <Div initial={{opacity: 0, scale: 0.95}}
                             animate={{opacity: 1, scale: 1}}
                             exit={{opacity: 0, scale: 0.95}}
                             className={"absolute grid gap-y-4 top-[110%] outline outline-gray-100 -left-[5%] ring-1 bg-white w-[110%] z-10 rounded-lg py-4 border border-gray-100"}>
                            <button
                                className={"flex group items-center  gap-x-4 px-4 hover:bg-theme py-1 rounded-lg"}>
                                <div className={"h-10 w-10 rounded-full overflow-hidden relative"}>
                                    <Image src={Person} alt={""} layout={"fill"} objectFit={"cover"}/>
                                </div>
                                <div>
                                    <p className={"text-md text-gray-800 group-hover:text-gray-50"}>
                                        David Silva
                                    </p>
                                </div>
                            </button>

                            <button
                                className={"flex group items-center gap-x-4 px-4 hover:bg-theme py-1 rounded-lg"}>
                                <div className={"h-10 w-10 rounded-full overflow-hidden relative"}>
                                    <Image src={Person} alt={""} layout={"fill"} objectFit={"cover"}/>
                                </div>
                                <div>
                                    <p className={"text-md text-gray-800 group-hover:text-gray-50"}>
                                        David Silva
                                    </p>
                                </div>
                            </button>
                        </Div>
                    }
                </AnimatePresence>
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