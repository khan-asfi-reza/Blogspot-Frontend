import {Navigation} from "../components/shared/Navigation";
import Person from "../assets/images/person.jpg";
import Code from "../assets/images/code.jpg";
import Content from "../components/shared/Content";


export default function Home() {
    return (
        <main className={"bg-gray-100 min-h-screen"}>
            <Navigation/>
            <section className={"pt-12 container max-w-7xl mx-auto"}>
                <div className={"grid grid-cols-3 gap-20"}>
                    <div className={"grid gap-10 col-span-2"}>
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
        </main>
    )
}
