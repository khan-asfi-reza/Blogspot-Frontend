import {Div, FlexRow, Grid} from "../../components/UI/Container";
import Image from "next/image";
import Logo from "../../assets/images/logo.png";
import {SectionHeading, SmallText} from "../../components/UI/Typography";
import {Form, Input, InputGroup, Label} from "../../components/UI/Form";
import classNames from "classnames";


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

export function AuthFormFooter({text, onClick, buttonText}) {
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

export function AuthInputGroup({setInputState, value, name, type, icon, label}) {
    return (
        <InputGroup className={"group mt-6"}>
            <FlexRow
                className={"relative rounded-lg bg-gray-50 group border group-focus-within:border-emerald-500 transition-all duration-500 "}>
                <Input onChange={setInputState}
                       value={value}
                       name={name}
                       type={type}
                       required={true}
                       className={"text-gray-700 autofill-transparent peer bg-transparent transition-all duration-500 w-full h-12"}/>
                <Label
                    className={classNames(
                        "absolute  pointer-events-none top-1/2 ",
                        "peer-focus:top-0 peer-focus:before:bg-gray-50 before:h-[60%] before:absolute before:w-full before:bottom-0 before:-z-10 ",
                        "transform left-2  peer-valid:top-0 peer-valid:before:bg-gray-50 bg-transparent -translate-y-1/2 text-md group-focus-within:text-emerald-600 ",
                        "transition-all duration-150"
                    )}>
                    {label}
                </Label>
                <span className={"text-2xl peer-focus:text-emerald-500 grid place-items-center px-2"}>
                    {icon}
                </span>
            </FlexRow>
        </InputGroup>
    )
}

export function AuthForm({fields, setInputState, formOnSubmit}) {
    return (
        <Form onSubmit={formOnSubmit} className={"mt-10"}>
            {
                fields.map(({name, type, label, value, icon, row, rowClass}, key) =>
                    row.length ? <Grid className={classNames(rowClass, "gap-x-6")}>
                            {row.map((rowData, k) => (
                                <AuthInputGroup
                                    key={k}
                                    setInputState={setInputState}
                                    value={rowData.value}
                                    name={rowData.name}
                                    type={rowData.type}
                                    icon={rowData.icon}
                                    label={rowData.label}/>
                            ))}
                        </Grid> :
                        <AuthInputGroup setInputState={setInputState}
                                        value={value}
                                        name={name}
                                        type={type}
                                        icon={icon}
                                        label={label}/>
                )
            }
        </Form>
    )
}