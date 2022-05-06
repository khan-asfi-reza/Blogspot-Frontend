import Person from "@images/person.jpg";
import Code from "@images/code.jpg";
import Content from "@SharedComponents/Content";
import Image from "next/image";
import axios from "axios";
import {IoImagesOutline} from "react-icons/io5";
import PageLayout from "@containers/layout";

export default function Home({images}) {

    return (
        <PageLayout title={"Firebolt | Home"}>
            <MainComponent images={images}/>
        </PageLayout>
    )

}

export async function getServerSideProps(context) {
    let images;
    try {
        images = await axios.get('https://api.unsplash.com/photos/?client_id=xUWwCMTcPs-YwJx-mqr7LGRtKU32FPeS-NoFSpZhPS8&query=person')
        images = await images.data;
    } catch (e) {

    }
    return {
        props: {
            images: images
        }
    }
}

const MainComponent = ({images}) => {

    return (
        <div className={"flex flex-col gap-10"}>
            <p className={"block col-span-2 text-xl font-medium"}>
                People you follow
            </p>
            <div className={"flex items-center justify-between col-span-2"}>
                {
                    images.slice(0, 8).map((each) => (
                        <div key={each.id} className={"relative h-14 w-14 rounded-full overflow-hidden"}>
                            <Image src={each.urls.full} alt={each.title} layout={"fill"} objectFit={"cover"}/>
                        </div>
                    ))
                }
            </div>
            <div className={"col-span-2"}>
                <div className={"inline-flex items-center px-4 py-2 rounded-full bg-accent"}>
                    <button
                        className={"inline-flex bg-white gap-x-2 rounded-full text-blue-400 items-center justify-center py-2 px-4"}>
                        <IoImagesOutline/>
                        <span>
                            Following
                        </span>
                    </button>
                    <button className={"inline-flex items-center justify-center p-2"}>
                        Recommended
                    </button>
                </div>
            </div>
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
