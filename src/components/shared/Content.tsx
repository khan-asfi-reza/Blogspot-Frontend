import Image, {StaticImageData} from "next/image";
import {IoChatbubbleOutline, IoStarOutline} from "react-icons/io5";
import classNames from "classnames";
import Moment from "@SharedComponents/Moment";
import Number from "@SharedComponents/Number";

export interface ContentProps {
    profilePicture: StaticImageData | string,
    name: string,
    date: Date,
    title: string,
    text: string,
    image: StaticImageData | string,
    tags: Array<string>
}

export default function Content(props: ContentProps) {


    return (
        <div className={"grid gap-4 bg-white p-8 rounded-lg"}>
            <div className={"flex items-center gap-x-2"}>
                <div className={"h-10 w-10 rounded-full relative overflow-hidden"}>
                    <Image alt={""} src={props.profilePicture} layout={"fill"} objectFit={"cover"}/>
                </div>
                <div className={"flex flex-col"}>
                    <p className={"font-medium text-md"}>
                        {props.name}
                    </p>
                    <p className={"text-gray-600 text-sm"}>
                        <Moment date={props.date}/>
                    </p>
                </div>
            </div>
            <h2 className={"font-medium sm:text-2xl"}>
                {props.title}
            </h2>
            <p className={"text-md text-gray-700"}>
                {props.text.slice(0, 500)}
                ...
            </p>
            <div className={"h-96 w-full relative rounded-lg overflow-hidden"}>
                <Image src={props.image} objectFit={"cover"} layout={"fill"} alt={""}/>
            </div>
            <div className={"grid grid-cols-2"}>
                <div className={"flex items-center gap-x-2"}>
                    <button
                        className={classNames("text-gray-700 hover:bg-gray-200  gap-x-2 transition-all rounded-full",
                            "flex items-center px-6 py-2 bg-slate-100 text-xl")}>
                        <IoStarOutline/>
                        <span className={"text-md "}>
                            3.5k
                        </span>
                    </button>

                    <button
                        className={classNames("text-gray-700 hover:bg-gray-200  gap-x-2 transition-all rounded-full",
                            "flex items-center px-6 py-2 bg-slate-100 text-xl")}>
                        <IoChatbubbleOutline/>
                        <span className={"text-md "}>
                            <Number number={3000}/>
                        </span>
                    </button>
                </div>
                <div className={"flex gap-x-4 justify-end"}>
                    {
                        props.tags.map((tag, key) => (
                            <div key={key}
                                 className={"bg-gray-200 grid place-items-center text-gray-700 px-4 py-1 rounded-full text-sm"}>
                                <p>
                                    {tag}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}