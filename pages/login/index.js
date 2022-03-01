import {Col, Container, Div, FlexRow, Section} from "../../components/UI/Container";
import Image from "next/image";
import LoginPageImage from "../../assets/images/login.png";
import {HR, SectionHeading, SmallText,} from "../../components/UI/Typography";
import {Form, Input, InputGroup, Label} from "../../components/UI/Form";
import {Anchor, Button} from "../../components/UI/Button";


export default function Login() {
    return (
        <Section id={"LOGIN_SECTION"} className={"min-h-screen min-w-full md:bg-gray-200 bg-blue-500"}>
            <Container className={"max-w-7xl min-h-screen grid place-items-center px-4"}>
                <Div
                    className={"static md:grid m-auto w-full rounded-2xl md:bg-blue-500 md:grid-cols-2 md:overflow-hidden"}>
                    <Col className={"md:static relative md:h-auto h-56 w-full md:p-12 grid place-items-center z-20"}>
                        <Div>
                            <Div
                                className={"md:static absolute top-12 left-1/2 md:translate-x-0 -translate-x-1/2 md:h-auto md:w-full md:border-0 border-8 border-blue-500 h-56 w-56 rounded-full md:bg-transparent bg-blue-100 grid place-items-center mx-auto"}>
                                <Div className={"md:w-full mx-auto w-10/12"}>
                                    <Image alt={"LoginImage"} src={LoginPageImage}/>
                                </Div>
                            </Div>
                            <Div className={"md:grid hidden place-items-center"}>
                                <Div>
                                    <SmallText className={"text-gray-200 text-center font-medium"}>
                                        Raydblock the finest premium blogging site
                                    </SmallText>
                                </Div>
                            </Div>
                        </Div>
                    </Col>

                    <Div
                        className={"z-10 md:mt-0 overflow-hidden transition transform border-[1rem] rounded-3xl md:border-blue-500 border-blue-100 bg-blue-100 md:bg-blue-100 rounded-2xl lg:py-16 md:py-10 lg:px-10 lg:px-12 md:px-8 md:py-8 sm:px-6 sm:py-16 py-16 px-4"}>
                        <Div className={"grid place-items-center w-full h-full"}>
                            <Div className={"w-full"}>
                                <Div>
                                    <SectionHeading className={"md:text-left text-center text-blue-500 font-regular"}>
                                        Welcome
                                    </SectionHeading>
                                    <HR className={"w-32 md:mx-0 mx-auto mt-2 rounded-2xl bg-blue-400"}/>
                                    <SmallText className={"text-gray-600 md:text-left text-center"}>
                                        Signup or sign into raydblock
                                    </SmallText>
                                </Div>
                                <Form className={"mt-10"}>
                                    <InputGroup className={"group"}>
                                        <Label
                                            className={"text-md group-focus-within:text-emerald-600 transition-all duration-500"}>
                                            Email
                                        </Label>
                                        <FlexRow className={""}>
                                            <span
                                                className={"h-12 w-2 bg-blue-500 transition-all duration-500 group-focus-within:bg-emerald-500"}/>
                                            <Input
                                                className={"text-gray-700 border border-transparent transition-all duration-500 focus-within:border-emerald-500 w-full h-12"}/>
                                        </FlexRow>
                                    </InputGroup>

                                    <InputGroup className={"mt-6 group"}>
                                        <Label
                                            className={"text-md group-focus-within:text-emerald-600 transition-all duration-500"}>
                                            Password
                                        </Label>
                                        <FlexRow className={"group"}>
                                            <span
                                                className={"h-12 w-2 bg-blue-500 transition-all duration-500 group-focus-within:bg-emerald-500"}/>
                                            <Input
                                                className={"text-gray-700 border border-transparent duration-500 focus-within:border-emerald-500 w-full h-12"}/>
                                        </FlexRow>
                                    </InputGroup>
                                    <Div className={"text-right"}>
                                        <Anchor className={"mt-4 hover:text-yellow-500"}>Forgot Password?</Anchor>
                                    </Div>
                                </Form>
                                <FlexRow className={"justify-between mt-12"}>
                                    <Button
                                        className={"bg-blue-500 text-white md:px-10 px-8 hover:bg-sky-500 transition-all"}>
                                        Login
                                    </Button>
                                    <Button onClick={() => {
                                    }}
                                            className={"border border-blue-500 text-sky-600 hover:bg-blue-500 hover:text-white transition-all"}>
                                        Create Account
                                    </Button>
                                </FlexRow>
                            </Div>
                        </Div>
                    </Div>
                </Div>
            </Container>
        </Section>
    )
}