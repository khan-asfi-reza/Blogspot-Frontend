import {Col, Container, Div, FlexRow, Section} from "../components/UI/Container";
import Image from "next/image";
import SignupImage from "../assets/images/signup.png";
import {SectionHeading, Text} from "../components/UI/Typography";
import {Form, Input, InputGroup, Label} from "../components/UI/Form";
import {Anchor, Button} from "../components/UI/Button";
import {AnimatePresence, motion} from "framer-motion";
import Link from "next/link";
import {useReducer} from "react";

const FORM_DATA_UPDATE = "FORM_DATA_UPDATE";
const PAGE_STATE_UPDATE = "PAGE_STATE_UPDATE";
const PAGE_FORWARD = "PAGE_FORWARD";
const PAGE_BACK = "PAGE_BACK";

const signupState = {
    loading: false, error: null, current_page: 0, formData: {
        first_name: "", last_name: "", email: "", password: "", confirm_password: "", date_of_birth: "",
    }
};

const TOTAL_PAGE_NUMBER = 2;

function signupReducer(state, action) {
    switch (action.type) {
        case FORM_DATA_UPDATE:
            return {...state, formData: {...state.formData, ...action.data}};
        case PAGE_STATE_UPDATE:
            return {...state, ...action.data};
        case PAGE_FORWARD:
            return {
                ...state,
                current_page: (state.current_page === TOTAL_PAGE_NUMBER - 1) ? state.current_page : state.current_page + 1
            }
        case PAGE_BACK:
            return {...state, current_page: (state.current_page === 0) ? state.current_page : state.current_page - 1}
        default:
            return state;
    }
}

export default function Signup() {

    const [state, dispatch] = useReducer(signupReducer, signupState);

    const createButtonAction = (e) => {
        e.preventDefault();
        if (state.current_page !== TOTAL_PAGE_NUMBER - 1) {
            dispatch({type: PAGE_FORWARD});
        } else {
            dispatch({type: PAGE_BACK});
        }
    }

    return (<Section className={"bg-gradient-to-br from-green-100 to-emerald-100 min-h-screen grid place-items-center"}
                     id={"SIGNUP"}>
        <AnimatePresence exitBeforeEnter={true}>
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
                <Container className={"min-w-6xl rounded-3xl bg-opacity-90 lg:overflow-hidden"}>
                    <Div
                        className={"min-h-[90vh] lg:bg-white bg-transparent lg:static h-full relative lg:grid block lg:grid-cols-2"}>
                        <Col
                            className={"bg-green-400 md:static relative lg:h-auto h-56 px-10 py-10 grid place-items-center md:order-2"}>
                            <Div
                                className={"lg:static absolute lg:border-0 border-green-400 border-8 top-10 lg:h-auto lg:w-full h-56 w-56 mx-auto grid place-items-center rounded-full bg-white"}>
                                <Div className={"lg:w-full w-9/12  mx-auto"}>
                                    <Image src={SignupImage} alt={"Signup Image"}/>
                                </Div>
                            </Div>
                        </Col>
                        <Col
                            className={"lg:bg-transparent overflow-hidden bg-white  px-10 py-10 grid place-items-center w-full"}>
                            <Div className={"w-full"}>
                                <SectionHeading className={"font-bold text-blue-900 lg:text-left text-center"}>
                                    Sign Up
                                </SectionHeading>
                                <FlexRow className={"items-center mt-6 lg:justify-start justify-center"}>
                                    <hr className={"h-1 w-20 mr-3 bg-green-400"}/>
                                    <Text className={"md:text-sm text-green-500"}>
                                        Sign Up Now to Join Raydblock
                                    </Text>
                                </FlexRow>
                                <Form className={"mt-14 transition-all "}>
                                    <Div className={"h-96"}>
                                        <AnimatePresence exitBeforeEnter={true}>
                                            {state.current_page === 0 &&
                                                <motion.div initial={"hidden"} animate={"enter"} key={"FORM_1"}
                                                            exit={"exit"}
                                                            transition={{type: 'linear'}}
                                                            variants={
                                                                {
                                                                    hidden: {opacity: 0, x: -1000, y: 0},
                                                                    enter: {opacity: 1, x: 0, y: 0},
                                                                    exit: {opacity: 0, x: 1000, y: 0},
                                                                }
                                                            }
                                                >
                                                    <Div>
                                                        <InputGroup className={"grid grid-cols-2 gap-x-5"}>
                                                            <InputGroup className={"group "}>
                                                                <Label
                                                                    className={"text-md group-focus-within:text-emerald-600 transition-all duration-300"}>
                                                                    First Name
                                                                </Label>
                                                                <FlexRow className={""}>
                                            <span
                                                className={"h-12 w-2 bg-blue-500 transition-all duration-300 group-focus-within:bg-emerald-500"}/>
                                                                    <Input name={"first_name"}
                                                                           className={"text-gray-700 bg-gray-100 border border-gray-200 transition-all duration-300 focus:border-emerald-500 w-full h-12"}/>
                                                                </FlexRow>
                                                            </InputGroup>
                                                            <InputGroup className={"group"}>
                                                                <Label
                                                                    className={"text-md group-focus-within:text-emerald-600 transition-all duration-300"}>
                                                                    Last Name
                                                                </Label>
                                                                <FlexRow className={""}>
                                            <span
                                                className={"h-12 w-2 bg-blue-500 transition-all duration-300 group-focus-within:bg-emerald-500"}/>
                                                                    <Input name={"last_name"}
                                                                           className={"text-gray-700 bg-gray-100 border border-gray-200 transition-all duration-300 focus-within:border-emerald-500 w-full h-12"}/>
                                                                </FlexRow>
                                                            </InputGroup>
                                                        </InputGroup>
                                                        <InputGroup className={"group mt-6"}>
                                                            <Label
                                                                className={"text-md group-focus-within:text-emerald-600 transition-all duration-300"}>
                                                                Email
                                                            </Label>
                                                            <FlexRow className={""}>
                                            <span
                                                className={"h-12 w-2 bg-blue-500 transition-all duration-300 group-focus-within:bg-emerald-500"}/>
                                                                <Input
                                                                    className={"text-gray-700 bg-gray-100 border border-gray-200  transition-all duration-300 focus-within:border-emerald-500 w-full h-12"}/>
                                                            </FlexRow>
                                                        </InputGroup>

                                                        <InputGroup className={"mt-6 group"}>
                                                            <Label
                                                                className={"text-md group-focus-within:text-emerald-600 transition-all duration-300"}>
                                                                Password
                                                            </Label>
                                                            <FlexRow className={"group"}>
                                            <span
                                                className={"h-12 w-2 bg-blue-500 transition-all duration-300 group-focus-within:bg-emerald-500"}/>
                                                                <Input
                                                                    className={"text-gray-700 bg-gray-100 border border-gray-200 transition-all duration-300 focus-within:border-emerald-500 w-full h-12"}/>
                                                            </FlexRow>
                                                        </InputGroup>

                                                        <InputGroup className={"mt-6 group"}>
                                                            <Label
                                                                className={"text-md group-focus-within:text-emerald-600 transition-all duration-300"}>
                                                                Confirm Password
                                                            </Label>
                                                            <FlexRow className={"group"}>
                                            <span
                                                className={"h-12 w-2 bg-blue-500 transition-all duration-300 group-focus-within:bg-emerald-500"}/>
                                                                <Input
                                                                    className={"text-gray-700 bg-gray-100 border border-gray-200 transition-all duration-300 focus-within:border-emerald-500 w-full h-12"}/>
                                                            </FlexRow>
                                                        </InputGroup>
                                                    </Div>
                                                </motion.div>
                                            }

                                            {state.current_page === 1 &&
                                                <motion.div initial={"hidden"} animate={"enter"} key={"FORM_2"}
                                                            exit={"exit"}
                                                            transition={{type: 'linear'}}
                                                            variants={
                                                                {
                                                                    hidden: {opacity: 0, x: -1000, y: 0},
                                                                    enter: {opacity: 1, x: 0, y: 0},
                                                                    exit: {opacity: 0, x: 1000, y: 0},
                                                                }
                                                            }
                                                >
                                                    <Div>
                                                        <InputGroup className={"group mt-6"}>
                                                            <Label
                                                                className={"text-md group-focus-within:text-emerald-600 transition-all duration-300"}>
                                                                Phone Number
                                                            </Label>
                                                            <FlexRow className={""}>
                                                <span
                                                    className={"h-12 w-2 bg-blue-500 transition-all duration-300 group-focus-within:bg-emerald-500"}/>
                                                                <Input
                                                                    className={"text-gray-700 bg-gray-100 border border-gray-200  transition-all duration-300 focus-within:border-emerald-500 w-full h-12"}/>
                                                            </FlexRow>
                                                        </InputGroup>

                                                        <InputGroup className={"mt-6 group"}>
                                                            <Label
                                                                className={"text-md group-focus-within:text-emerald-600 transition-all duration-300"}>
                                                                Password
                                                            </Label>
                                                            <FlexRow className={"group"}>
                                            <span
                                                className={"h-12 w-2 bg-blue-500 transition-all duration-300 group-focus-within:bg-emerald-500"}/>
                                                                <Input
                                                                    className={"text-gray-700 bg-gray-100 border border-gray-200 transition-all duration-300 focus-within:border-emerald-500 w-full h-12"}/>
                                                            </FlexRow>
                                                        </InputGroup>

                                                        <InputGroup className={"mt-6 group"}>
                                                            <Label
                                                                className={"text-md group-focus-within:text-emerald-600 transition-all duration-300"}>
                                                                Confirm Password
                                                            </Label>
                                                            <FlexRow className={"group"}>
                                            <span
                                                className={"h-12 w-2 bg-blue-500 transition-all duration-300 group-focus-within:bg-emerald-500"}/>
                                                                <Input
                                                                    className={"text-gray-700 bg-gray-100 border border-gray-200 transition-all duration-300 focus-within:border-emerald-500 w-full h-12"}/>
                                                            </FlexRow>
                                                        </InputGroup>
                                                    </Div>
                                                </motion.div>
                                            }
                                        </AnimatePresence>
                                    </Div>
                                    <FlexRow className={"justify-between mt-12"}>
                                        <Button onClick={createButtonAction}
                                                className={"bg-blue-500 text-white md:px-10 px-8 hover:bg-sky-500 transition-all"}>
                                            Create
                                        </Button>
                                        <Link scroll={false} passHref href={"/login"}>
                                            <Anchor className={"text-sky-600 hover:text-green-500 transition-all"}>
                                                Have an account?
                                            </Anchor>
                                        </Link>
                                    </FlexRow>
                                </Form>
                            </Div>
                        </Col>

                    </Div>
                </Container>
            </motion.div>
        </AnimatePresence>
    </Section>)
}