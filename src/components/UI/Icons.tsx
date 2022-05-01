import classNames from "classnames";
import Image from "next/image"
import LogoImage from "@images/logo.png";

export const Indicator = ({className, style}) => (
    <svg className={classNames(className, "indicator")} style={style} width="94" height="56"
         xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="47" cy="28" rx="24" ry="28"/>
        <path d="M24 20C24 20 28 55.9999 48 56L0 55.9997C18 55.9998 24 20 24 20Z"/>
        <path d="M70 20C70 20 66 55.9999 46 56L94 55.9997C76 55.9998 70 20 70 20Z"/>
    </svg>
)

export const Logo = () => (
    <div className={"sm:h-10 h-8 sm:w-10 w-8 relative"}>
        <Image src={LogoImage} objectFit={"contain"} layout={"fill"} alt={"Logo"}/>
    </div>
)