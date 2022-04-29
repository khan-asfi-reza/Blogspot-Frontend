import Person from "../assets/images/person.jpg";
import Code from "../assets/images/code.jpg";
import Content from "../components/shared/Content";
import {Navigation} from "../components/shared/Navigation";
import {useState} from "react";
import Sidebar from "../components/shared/Sidebar";


export default function Home() {

    const [isSideBarOpen, setSideBarOpen] = useState(false);

    return (
        <main className={"bg-body relative"}>
            <Navigation.Header/>
            <section className={"sm:container mx-auto grid grid-cols-12 sm:pt-16 pt-14 "}>
                <Navigation.Navbar/>
                <section
                    className={"lg:col-span-7 bg-body sm:col-span-11 col-span-12 sm:order-2 order-1 container max-w-7xl py-4 lg:px-12 sm:px-8 px-4  mx-auto lg:border-r-2 border-gray-200"}>
                    <MainComponent/>
                </section>
                <Sidebar/>
            </section>
        </main>
    )

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
                         avatar={Person}/>

                <Content name={"David Silva"}
                         title={"Why not to use PHP"}
                         tags={["React"]}
                         date={"2022-04-22T20:14:20"}
                         text={"If I’m saying that PHP is hated by the whole world, it’s not my personal opinion. In the latest stack overflow survey, developers from all over the world put PHP in the top 5 most dreaded languages. The latest Hired survey puts it squarely in the top 2 most hated. There’s a lot more and I’m not even talking about what’s going on Reddit. If you’re a PHP developer since 20 years who came here on a crusade to crucify me on the altar of Symfony, please relax. We’re here to talk, put the gun down. Well now on the contrary if you hate PHP with passion : take some pop-corns and sit down comfortably.\n" + "\n" + "Once upon a time I was doing some Symfony2 myself. And I liked the whole Symfony thing, frankly, it’s not bad. I told this to a developer I met at a devops meetup. He was shocked, he was about to vomit, he looked at me like I just murdered a newborn baby. From now on I’m going to call him James to make it easier. So I immediately asked James a question: why so much hatred?"}
                         image={Code}
                         avatar={Person}/>
            </div>
        </div>
    )
}
