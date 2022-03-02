import {Col, Container, Div, FlexRow, Section} from "../components/UI/Container";
import Image from "next/image";
import LoginPageImage from "../assets/images/login.png";
import {HR, SectionHeading, SmallText,} from "../components/UI/Typography";
import {Form, Input, InputGroup, Label} from "../components/UI/Form";
import {Anchor, Button} from "../components/UI/Button";
import Link from "next/link";
import {motion} from "framer-motion";
import {useState} from "react";
import {FaSpinner} from "react-icons/fa";

export default function Login() {

    const [state, setState] = useState({
        email: "",
        password: "",
        loading: false,
        error: "",
    });

    const setInputState = (e) => {
        setState({...state, [e.target.name]: e.target.value})
    }

    const InputFields = [
        {
            name: "email",
            type: "email",
            label: "Email",
            value: state.email,
        },
        {
            name: "password",
            type: "password",
            label: "Password",
            value: state.password
        }
    ]

    const formOnClick = (e) => {
        e.preventDefault();

    }


    return (
        <Section id={"LOGIN_SECTION"}
                 className={"min-h-screen min-w-full md:bg-gray-200 bg-gradient-to-br from-indigo-300 to-sky-300 overflow-hidden"}>
            <motion.div initial="hidden"
                        key={"inner"}
                        variants={{
                            hidden: {opacity: 0, x: -1000, y: 0},
                            enter: {opacity: 1, x: 0, y: 0},
                            exit: {opacity: 0, x: 1000, y: 0},
                        }}
                        animate="enter"
                        exit="exit"
                        transition={{type: 'linear'}}>
                <Container className={"max-w-7xl min-h-screen grid place-items-center px-4"}>
                    <Div
                        className={"static min-h-[75vh] md:grid m-auto w-full rounded-2xl md:bg-indigo-500 md:grid-cols-2 md:overflow-hidden"}>
                        <Col
                            className={"md:static relative md:h-auto bg-indigo-500 h-56 w-full md:rounded-none rounded-t-3xl md:p-12 grid place-items-center z-20"}>
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

                        <Col
                            className={"z-10 md:mt-0 overflow-hidden transition transform border-[1rem] md:rounded-3xl md:border-indigo-500 rounded-b-3xl border-blue-100 bg-blue-100 md:bg-blue-100 lg:py-16 md:py-10 lg:px-10 lg:px-12 md:px-8 md:py-8 sm:px-6 sm:py-16 py-16 "}>
                            <Div className={"grid place-items-center w-full h-full"}>
                                <Div className={"w-full"}>
                                    <Div>
                                        <SectionHeading
                                            className={"md:text-left text-center text-blue-900 font-medium"}>
                                            Welcome
                                        </SectionHeading>
                                        <HR className={"w-32 md:mx-0 mx-auto mt-2 rounded-2xl bg-blue-400"}/>
                                        <SmallText className={"text-gray-600 md:text-left text-center"}>
                                            Signup or sign into raydblock
                                        </SmallText>
                                    </Div>
                                    <Form onSubmit={formOnClick} className={"mt-10"}>
                                        {
                                            InputFields.map(({name, type, label, value}, key) =>
                                                <InputGroup key={key} className={"group mt-6 "}>
                                                    <Label
                                                        className={"text-md group-focus-within:text-emerald-600 transition-all duration-500"}>
                                                        {label}
                                                    </Label>
                                                    <FlexRow className={""}>
                                                        <span
                                                            className={"h-12 w-2 bg-blue-500 transition-all duration-500 group-focus-within:bg-emerald-500"}/>
                                                        <Input onChange={setInputState} value={value} name={name}
                                                               type={type}
                                                               className={"text-gray-700 border border-transparent transition-all duration-500 focus-within:border-emerald-500 w-full h-12"}/>
                                                    </FlexRow>
                                                </InputGroup>
                                            )
                                        }

                                        <Div className={"text-right"}>
                                            <Anchor className={"mt-4 hover:text-yellow-500"}>Forgot Password?</Anchor>
                                        </Div>
                                        <FlexRow className={"justify-between mt-12"}>
                                            <Button disabled={state.loading} type={"submit"}
                                                    className={"bg-blue-500 justify-center w-32 flex items-center " +
                                                        "text-white disabled:bg-emerald-500 md:px-10 px-8 hover:bg-sky-500 transition-all"}>
                                                {state.loading && <i className={"animate-spin mr-2"}><FaSpinner/></i>}
                                                Login
                                            </Button>
                                            <Link scroll={false} passHref={true} href={"/signup"}>
                                                <Anchor
                                                    className={"grid p-2 place-items-center text-center border border-blue-500 text-sky-600 hover:bg-blue-500 hover:text-white transition-all"}>
                                                    Create Account
                                                </Anchor>
                                            </Link>
                                        </FlexRow>
                                    </Form>
                                </Div>
                            </Div>
                        </Col>
                    </Div>
                </Container>
            </motion.div>
        </Section>

    )
}