import Image from "next/image";
import Logo from "@images/logo.png";
import {SectionHeading, SmallText} from "@UI/Typography";
import {MouseEventHandler} from "react";
import {IoLockClosedOutline, IoLockOpenOutline} from "react-icons/io5";
import {LOGIN_PAGE_HEADING} from "@content/index";
import {Div, Grid} from "@UI/Layout";


// Auth Form Password To Text Switch Function
export function passwordTextSwitch(ref, changeIcon) {
    if (ref.current.type === "text") {
        ref.current.type = "password";
        changeIcon(<IoLockClosedOutline/>)
    } else {
        ref.current.type = "text";
        changeIcon(<IoLockOpenOutline/>)
    }
}


// Container Of Auth Form
export function AuthContainer({children}: { children: JSX.Element }) {
    return (
        <Grid className={"grid w-full h-full relative flex-1"}>
            <Div className={"w-full"}>
                {children}
            </Div>
        </Grid>
    )
}


// Authentication Form Header Images and Text along with logo
/**
 *
 * @param text - Small Text below Welcome Message
 */
export function AuthFormHeader({text}: { text: string }) {
    return (
        <Div>
            <Div className={"h-28 w-28 mb-5 rounded-full mx-auto bg-gray-100"}>
                <Div className={"relative w-[90%] mx-auto h-full"}>
                    <Image src={Logo} alt={"Logo"} layout='fill' objectFit='contain'/>
                </Div>
            </Div>
            <SectionHeading
                className={"text-center text-black font-medium"}>
                {LOGIN_PAGE_HEADING}
            </SectionHeading>
            <SmallText className={"text-gray-600 text-center"}>
                {text}
            </SmallText>
        </Div>
    )
}

/**
 *
 * @param text - Footer Text
 * @param onClick - Footer Button On Click Event
 * @param buttonText - Footer Button Text
 */
export function AuthFormFooter({text, onClick, buttonText}:
                                   {
                                       text: string,
                                       onClick: MouseEventHandler<HTMLSpanElement>,
                                       buttonText: string
                                   }) {
    return (
        <>
            <Div className={"mt-10"}>
                <SmallText className={"text-center text-gray-700"}>
                    {text}
                    <button data-testid={"CHANGE_PAGE"}
                            onClick={onClick}
                            className={"ml-2 text-blue-600 cursor-pointer hover:text-blue-700 active:text-blue-700"}>
                        {buttonText}
                    </button>
                </SmallText>
            </Div>
        </>
    )
}

export * from "./form";
export * from "./sideslide";
export * from "./interface";
