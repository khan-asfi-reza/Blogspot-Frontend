import Image, {StaticImageData} from "next/image";
import {IoChatbubbleEllipsesOutline, IoEllipsisVertical, IoHeartOutline} from "react-icons/io5";
import Moment from "@SharedComponents/Moment";
import Number from "@SharedComponents/Number";

export interface ContentProps {
    avatar: StaticImageData | string,
    name: string,
    date: string,
    title: string,
    text: string,
    image: StaticImageData | string,
    tags: Array<string>
}

export default function Content(props: ContentProps) {


    return (
        <article className={"grid grid-cols-2 gap-6 bg-content sm:p-8 p-4 rounded-lg"}>
            <div
                className={"xl:order-1  xl:col-span-1 order-3 col-span-2 xl:h-auto h-60 row-span-4 relative rounded-xl overflow-hidden"}>
                <Image src={props.image} objectFit={"cover"} layout={"fill"} alt={"Image"}/>
            </div>
            <div className={"xl:order-2 xl:col-span-1 col-span-2 order-1 flex  items-center justify-between"}>
                <div className={"flex items-center gap-x-3"}>
                    <div className={"h-12 w-12 relative rounded-full overflow-hidden"}>
                        <Image src={props.avatar} objectFit={"cover"} layout={"fill"} alt={"Avatar"}/>
                    </div>
                    <div>
                        <p className={"text-title text-md"}>
                            {props.name}
                        </p>
                        <p className={"text-subtitle text-xs"}>
                            <Moment date={props.date}/>
                        </p>
                    </div>
                </div>
                <button>
                    <IoEllipsisVertical/>
                </button>
            </div>
            <h3 className={"xl:order-3 xl:col-span-1 col-span-2 order-2 text-title font-medium text-xl"}>
                {props.title}
            </h3>
            <p className={"xl:order-4 xl:col-span-1 col-span-2 order-4 text-subtext text-md"}>
                {props.text.slice(0, 150)}
            </p>

            <div className={"xl:order-5 xl:col-span-1 col-span-2 order-5 flex gap-x-8 items-center"}>
                <p className={"flex items-center gap-x-1 text-rose-500"}>
                    <IoHeartOutline/>
                    <span>
                            <Number number={2050}/>
                        </span>
                </p>
                <p className={"flex items-center gap-x-1 text-indigo-500"}>
                    <IoChatbubbleEllipsesOutline/>
                    <span>
                            <Number number={2050}/>
                        </span>
                </p>
            </div>

        </article>
    )
}