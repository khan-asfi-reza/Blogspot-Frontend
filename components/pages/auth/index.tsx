import {useReducer, useState} from "react";
import {Col, Container, Div, FlexRow, Section} from "../../UI/Container";
import Login from "./login";
import Signup from "./signup";
import {AuthFormFooter} from "./components";
import classNames from "classnames";
import Image from "next/image";
import Circle from "../../../assets/images/circle.png";
import Shape from "../../../assets/images/shape.png";

import {AnimatePresence} from "framer-motion";
import {
    ACCOUNT_CREATION_BUTTON_TEXT,
    ACCOUNT_CREATION_TEXT,
    SWITCH_TO_LOGIN_BUTTON_TEXT,
    SWITCH_TO_LOGIN_TEXT
} from "../../../content";
import {AuthFormSideBar} from "./sideslide";

// Reducer Action Types
export const CHANGE_LOGIN_STATE = "CHANGE_LOGIN_STATE";
export const CHANGE_SIGNUP_STATE = "CHANGE_SIGNUP_STATE";

// Auth State Reducer to change reducer state. Login State Change Type to change only login information
// Signup State Change Type to change only signup information
function authReducer(state, action) {
    switch (action.type) {
        case CHANGE_LOGIN_STATE:
            return {
                ...state, login: {...state.login, ...action.payload}
            }
        case  CHANGE_SIGNUP_STATE:
            return {
                ...state, signup: {...state.signup, ...action.payload}
            }
    }
}

// Reducer initial state, for login and signup information storing
const initialState = {
    login: {
        email: "",
        password: "",
    },
    signup: {
        email: "",
        first_name: "",
        last_name: "",
        password: "",
        confirmPassword: "",
    }
}
// Auth Page has both signup and login section, clicking cta changes state
export default function AuthMain() {
    // Current Content Indicator, whether it is currently showing login or signup page
    const [current, setCurrent] = useState(0);
    // Login and Signup Detail Saving reducer
    const [state, dispatch] = useReducer(authReducer, initialState)

    // Change page from login to signup or signup to login
    const changePage = () => {
        if (current === 0) {
            setCurrent(1);
        } else {
            setCurrent(0);
        }
    }

    // Form Data Saving in the State Function
    const changeState = (action: string, e) => {
        dispatch({
            type: action,
            payload: {
                [e.target.name]: e.target.value
            }
        })
    }

    // Form Data to save only login form data
    const setLoginState = (e) => {
        changeState(CHANGE_LOGIN_STATE, e);
    }

    // Form Data to save only signup form data
    const setSignupState = (e) => {
        changeState(CHANGE_SIGNUP_STATE, e);
    }

    // Framer motion animation variant
    const variants = {
        exit: {x: 1000, opacity: 0},
        initial: {x: -1000, opacity: 0},
        animate: {x: 0, opacity: 1},
        transition: {duration: 0.5}
    }

    return (
        <Section id={"LOGIN_SECTION"}
                 className={"min-h-screen relative  min-w-full bg-bgWhite  overflow-hidden transition-all"}>
            {/* Background Images */}
            <BackgroundImages/>
            {/* Root Container */}
            <Container initial="hidden" key={"inner"}{...variants} transition={{type: 'linear', duration: 0.2}}
                       className={"max-w-7xl min-h-screen grid place-items-center px-4 z-30"}>
                {/* Grid Container Left Column Shows Slide show of images and Right Container Contains Form*/}
                <Div className={classNames("static min-h-[75vh] md:grid m-auto ",
                    "w-full rounded-2xl md:bg-theme md:grid-cols-2 md:overflow-hidden")}>
                    <AuthFormSideBar/>
                    <Col
                        className={classNames("z-10 md:mt-0 overflow-hidden transition transform md:border-[0.5rem] border-4",
                            "rounded-3xl md:border-theme border-white bg-white ",
                            " lg:py-16 md:py-10 lg:px-10 lg:px-12 md:px-10 md:py-8 sm:px-10 sm:py-16 py-16 px-2")}>
                        <FlexRow className={"flex-nowrap w-full"}>
                            <AnimatePresence exitBeforeEnter={true}>
                                {
                                    current === 0 &&
                                    <Div {...variants}
                                         data-testid={"LOGIN"}
                                         transition={{duration: 0.3}}
                                         className={"w-full flex-full"}
                                         key={"1"}
                                    >
                                        <Login state={state.login} setState={setLoginState}/>
                                    </Div>
                                }
                                {
                                    current === 1 &&
                                    <Div {...variants}
                                         data-testid={"SIGNUP"}
                                         transition={{duration: 0.3}}
                                         className={"w-full flex-full"}
                                         key={"2"}
                                    >
                                        <Signup state={state.signup} setState={setSignupState}/>
                                    </Div>
                                }
                            </AnimatePresence>

                        </FlexRow>
                        <AnimatePresence exitBeforeEnter={true}>
                            {
                                current === 0 &&
                                <Div {...variants} key={0}>
                                    <AuthFormFooter text={ACCOUNT_CREATION_TEXT}
                                                    buttonText={ACCOUNT_CREATION_BUTTON_TEXT}
                                                    onClick={changePage}/>
                                </Div>
                            }
                            {
                                current === 1 &&
                                <Div{...variants} key={1}>
                                    <AuthFormFooter text={SWITCH_TO_LOGIN_TEXT}
                                                    buttonText={SWITCH_TO_LOGIN_BUTTON_TEXT}
                                                    onClick={changePage}/>
                                </Div>
                            }
                        </AnimatePresence>

                    </Col>
                </Div>
            </Container>
        </Section>

    )
}

const BackgroundImages = () => (
    <>
        <Div className={"absolute h-[30rem] w-[30rem] top-5 left-5"}>
            <Image src={Circle} alt={"Circle"} objectFit={"contain"} layout={"fill"}/>
        </Div>
        <Div className={"absolute h-60 w-60 top-5 right-36"}>
            <Image src={Circle} alt={"Circle"} objectFit={"contain"} layout={"fill"}/>
        </Div>
        <Div className={"absolute h-[40rem] w-[40rem] bottom-0 right-0"}>
            <Image src={Circle} alt={"Circle"} objectFit={"contain"} layout={"fill"}/>
        </Div>
        <Div className={"absolute h-16 w-16 top-10 right-5 z-10"}>
            <Image src={Shape} alt={"Circle"} objectFit={"contain"} layout={"fill"}/>
        </Div>
    </>
)