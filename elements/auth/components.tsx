import {Col, Div, Grid} from "../../components/UI/Container";
import Image from "next/image";
import Logo from "../../assets/images/logo.png";
import {SectionHeading, SmallText} from "../../components/UI/Typography";
import {Form, Input, InputInterface} from "../../components/UI/Form";
import classNames from "classnames";
import {FaSpinner} from "react-icons/fa";
import {Button} from "../../components/UI/Button";
import {FormEventHandler, MouseEventHandler} from "react";
import {IoLockClosedOutline, IoLockOpenOutline} from "react-icons/io5";
import LoginPageImage from "../../assets/images/login.png";


export function passwordTextSwitch(ref, changeIcon) {
    if (ref.current.type === "text") {
        ref.current.type = "password";
        changeIcon(<IoLockClosedOutline/>)
    } else {
        ref.current.type = "text";
        changeIcon(<IoLockOpenOutline/>)
    }
}


export function AuthFormSideBar() {
    return (
        <Col
            className={"md:static relative md:h-auto bg-theme h-56 w-full md:rounded-none rounded-t-3xl md:p-12 grid place-items-center z-20"}>
            <Div>
                <Div
                    className={"md:static absolute top-12 left-1/2 md:translate-x-0 -translate-x-1/2 md:h-auto md:w-full md:border-0 border-8 border-theme h-56 w-56 rounded-full md:bg-transparent bg-blue-100 grid place-items-center mx-auto"}>
                    <Div className={"md:w-full mx-auto w-10/12 "}>
                        <Image alt={"LoginImage"} src={LoginPageImage}/>
                    </Div>
                </Div>
                <Div className={"md:grid hidden place-items-center"}>
                    <Div>
                        <SectionHeading
                            className={"text-center text-white font-medium"}>
                            Read write and enjoy
                        </SectionHeading>
                        <SmallText className={"text-gray-100" +
                            " text-center font-base"}>
                            Lightboat the finest premium blogging site
                        </SmallText>
                    </Div>
                </Div>
            </Div>
        </Col>
    )
}


// Container Of Auth Form
export function AuthFormContainer({children}) {
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
                    <Image src={Logo} alt={"Blogspot Logo"} layout='fill'
                           objectFit='contain'/>
                </Div>
            </Div>
            <SectionHeading
                className={"text-center text-black font-medium"}>
                Welcome
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
                    <span
                        onClick={onClick}
                        className={"ml-2 text-blue-600 cursor-pointer hover:text-blue-700 active:text-blue-700"}>
                                {buttonText}
                            </span>
                </SmallText>
            </Div>
        </>
    )
}

/**
 * Interface for List of Form Fields
 */
export interface AuthFormFieldInterface {
    field: InputInterface,
    row?: Array<InputInterface>,
    rowClass?: string
}


interface AuthFormPropsInterface {
    fields: Array<AuthFormFieldInterface>,
    loading: boolean,
    formOnSubmit: FormEventHandler<HTMLFormElement>,
    children?: JSX.Element
}

/**
 * Authentication Page Form For Signing in and Signing up
 * @param {Array<AuthFormFieldInterface>}fields - List of Input Fields inside the form
 * @param {FormEventHandler<HTMLFormElement>}formOnSubmit - Form On submit action
 * @param {JSX.Element}children - JSX Children
 * @param {boolean}loading - Is Button Loading or not
 *
 */
export function AuthForm({fields, formOnSubmit, children, loading}: AuthFormPropsInterface) {

    return (
        <Form onSubmit={formOnSubmit} className={"mt-10"}>
            {
                fields.map((props, key) =>
                    props.row && props.row.length ?
                        <Grid key={key} className={classNames(props.rowClass, "gap-x-6")}>
                            {
                                props.row.map((each, k) => (
                                    <Input key={k} {...each}/>
                                ))
                            }
                        </Grid> :
                        <Input key={key} {...props.field}/>
                )
            }
            {children}
            <Button disabled={loading} type={"submit"}
                    className={classNames("bg-theme justify-center w-full flex items-center mt-12",
                        "text-white disabled:bg-emerald-500 md:px-10 px-8 hover:bg-blue-500 transition-all")}>
                {loading && <i className={"animate-spin mr-2"}><FaSpinner/></i>}
                Login
            </Button>
        </Form>
    )
}