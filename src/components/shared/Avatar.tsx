import Image, {StaticImageData} from "next/image"
import classNames from "classnames";

export function Avatar({src, size}: {src: StaticImageData | string, size: "sm" | "md" | "lg" | "xl"}){
    return(
        <div className={classNames("overflow-hidden relative rounded-full", size === "sm" ?
            "h-8 w-8" : size === "md" ? "h-10 w-10" : size === "lg" ?
                "sm:h-12 h-10 sm:w-12 w-10" : "sm:h-14 sm:w-14 h-10 w-10")}>
            <Image alt={"Avatar"} src={src} objectFit={"cover"} layout={"fill"}/>
        </div>
    )
}