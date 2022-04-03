import {Col, Container, Div, Section} from "../components/UI/Container";
import Image from "next/image";
import LoginPageImage from "../assets/images/login.png";
import {SectionHeading, SmallText,} from "../components/UI/Typography";
import Login from "../elements/auth/login";

export default function Auth() {

    return (
        <Section id={"LOGIN_SECTION"}
                 className={"min-h-screen  min-w-full bg-gray-100  overflow-hidden"}>
            <Container initial="hidden"
                       key={"inner"}
                       variants={{
                           hidden: {opacity: 0, x: -1000, y: 0},
                           enter: {opacity: 1, x: 0, y: 0},
                           exit: {opacity: 0, x: 1000, y: 0},
                       }}
                       animate="enter"
                       exit="exit"
                       transition={{type: 'linear'}} className={"max-w-7xl min-h-screen grid place-items-center px-4"}>
                <Div
                    className={"static min-h-[75vh] md:grid m-auto w-full rounded-2xl md:bg-theme md:grid-cols-2 md:overflow-hidden"}>
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
                                        Raydblock the finest premium blogging site
                                    </SmallText>
                                </Div>
                            </Div>
                        </Div>
                    </Col>

                    <Col
                        className={"z-10 md:mt-0 overflow-hidden transition transform border-[1rem] md:rounded-3xl md:border-theme rounded-b-3xl border-white bg-white  lg:py-16 md:py-10 lg:px-10 lg:px-12 md:px-10 md:py-8 sm:px-10 sm:py-16 py-16 "}>
                        <Login/>
                    </Col>
                </Div>
            </Container>
        </Section>

    )
}