import {useReducer, useState} from "react";
import {Col, Container, Div, FlexRow, Section} from "../../components/UI/Container";
import Login from "./login";
import Signup from "./signup";
import {AuthFormFooter, AuthFormSideBar} from "./components";
import classNames from "classnames";
import {AnimatePresence} from "framer-motion";


export const CHANGE_LOGIN_STATE = "CHANGE_LOGIN_STATE";
export const CHANGE_SIGNUP_STATE = "CHANGE_SIGNUP_STATE";

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

export default function AuthMain() {
    const [current, setCurrent] = useState(0);
    const [state, dispatch] = useReducer(authReducer, initialState)

    const changePage = () => {
        if (current === 0) {
            setCurrent(1);
        } else {
            setCurrent(0);
        }
    }

    const changeState = (action: string, e) => {
        dispatch({
            type: action,
            payload: {
                [e.target.name]: e.target.value
            }
        })
    }

    const setLoginState = (e) => {
        changeState(CHANGE_LOGIN_STATE, e);
    }

    const setSignupState = (e) => {
        changeState(CHANGE_SIGNUP_STATE, e);
    }

    const variants = {
        exit: {x: -1000, opacity: 0},
        initial: {x: 1000, opacity: 0},
        animate: {x: 0, opacity: 1},
        transition: {duration: 0.3}
    }

    return (
        <Section id={"LOGIN_SECTION"}
                 className={"min-h-screen  min-w-full bg-gray-100  overflow-hidden transition-all"}>
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
                <Div className={classNames("static min-h-[75vh] md:grid m-auto ",
                    "w-full rounded-2xl md:bg-theme md:grid-cols-2 md:overflow-hidden")}>
                    <AuthFormSideBar/>
                    <Col className={classNames("z-10 md:mt-0 overflow-hidden transition transform border-[1rem]",
                        "md:rounded-3xl md:border-theme rounded-b-3xl border-white bg-white ",
                        " lg:py-16 md:py-10 lg:px-10 lg:px-12 md:px-10 md:py-8 sm:px-10 sm:py-16 py-16 ")}>
                        <FlexRow className={"flex-nowrap w-full"}>
                            <AnimatePresence exitBeforeEnter={true}>
                                {
                                    current === 0 &&
                                    <Div {...variants} transition={{duration: 0.3}}
                                         className={"w-full flex-full"}
                                         key={"1"}
                                    >
                                        <Login state={state.login} setState={setLoginState}/>
                                    </Div>
                                }
                                {
                                    current === 1 &&
                                    <Div {...variants}
                                         transition={{duration: 0.3}}
                                         className={"w-full flex-full"}
                                         key={"2"}
                                    >
                                        <Signup state={state.signup} setState={setSignupState}/>
                                    </Div>
                                }
                            </AnimatePresence>

                        </FlexRow>
                        <AuthFormFooter text={"Don't have an account?"} buttonText={"Create Account"}
                                        onClick={changePage}/>
                    </Col>
                </Div>
            </Container>
        </Section>

    )
}