import Image, {StaticImageData} from "next/image";
import moment from "moment";
import {IoStarOutline} from "react-icons/all";
import classNames from "classnames";

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

    const formatDate = () => {
        const now = new Date();
        const providedDate = new Date(props.date);
        const diff = Math.abs(providedDate.getTime() - now.getTime()) / (60 * 60 * 1000);
        if (diff < 24) {
            return moment(props.date).startOf('day').fromNow();
        } else {
            return moment(props.date).format('MMMM Do YYYY');
        }
    }

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
                        {formatDate()}
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
                    <button className={classNames("gap-x-2 transition-all rounded-full",
                        "flex items-center px-6 py-2 hover:bg-gray-200 bg-slate-100 text-xl")}>
                        <span className={"text-gray-700"}>
                            <IoStarOutline/>
                        </span>
                    </button>

                </div>
                <div className={"flex gap-x-4 justify-end"}>
                    <button className={classNames("gap-x-2 transition-all rounded-full",
                        "flex items-center px-6 py-2 hover:bg-gray-200 bg-slate-100 text-xl")}>
                        <span className={"text-blue-500"}>
                            <IoStarOutline/>
                        </span>
                        <span className={"text-md text-gray-700 "}>
                            3.5k
                        </span>
                    </button>
                    {
                        props.tags.map((tag, key) => (
                            <div key={key}
                                 className={"bg-slate-100 grid place-items-center text-gray-700 px-4 py-1 rounded-full text-sm"}>
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