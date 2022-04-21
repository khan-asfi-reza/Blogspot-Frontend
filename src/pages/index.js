import {Navigation} from "../components/shared/Navigation";
import {SmallText} from "../components/UI/Typography";
import Image from "next/image";
import Person from "../assets/images/person.jpg";
import Code from "../assets/images/code.jpg";


export default function Home() {
    return (
        <main className={"bg-gray-100 min-h-screen"}>
            <Navigation/>
            <section className={"pt-28 container max-w-7xl mx-auto"}>
                <div className={"grid grid-cols-3 gap-20"}>
                    <div className={"grid gap-10 col-span-2"}>
                        <div className={"grid gap-4 bg-white p-8 rounded-lg"}>
                            <div className={"flex items-center gap-x-2"}>
                                <div className={"h-10 w-10 rounded-full relative overflow-hidden"}>
                                    <Image alt={""} src={Person} layout={"fill"} objectFit={"cover"}/>
                                </div>
                                <SmallText className={"font-medium"}>
                                    David Silva.
                                </SmallText>
                                <SmallText className={"text-gray-800"}>
                                    October 29, 2021
                                </SmallText>
                            </div>
                            <h2 className={"font-medium sm:text-2xl"}>
                                Stop using PHP if you are developing applications
                            </h2>
                            <p className={"text-md text-gray-700"}>
                                f I’m saying that PHP is hated by the whole world, it’s not my personal opinion.
                                In the latest stack overflow survey, developers from all over the world put PHP in the
                                top 5 most dreaded languages. The latest Hired survey puts it squarely in the
                                top 2 most hated. There’s a lot more and I’m not even talking about what’s going on
                                Reddit. If you’re a PHP developer since 20 years who came here on a crusade to crucify
                                me on the altar of Symfony, please relax. We’re here to talk, put the gun down. Well now
                                ...
                            </p>
                            <div className={"h-96 w-full relative rounded-lg overflow-hidden"}>
                                <Image src={Code} objectFit={"cover"} layout={"fill"} alt={""}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
