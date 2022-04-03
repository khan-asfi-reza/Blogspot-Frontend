import {Div, Grid} from "../../components/UI/Container";
import {Anchor} from "../../components/UI/Button";
import {useState} from "react";
import {IoAtCircleOutline, IoLockClosedOutline, IoLockOpenOutline} from "react-icons/io5";
import useApi from "../../hook/useApi";
import {AuthForm, AuthFormFooter, AuthFormHeader} from "./components";

export default function Login() {

    const [formData, setState] = useState({
        email: "",
        password: "",
    });

    const setInputState = (e) => {
        setState({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const InputFields = [
        {
            name: "email",
            type: "text",
            label: "Email",
            value: formData.email,
            icon: <IoAtCircleOutline/>,
            row: [],
            rowClass: "",
        },
        {
            name: "password",
            type: "password",
            label: "Password",
            value: formData.password,
            icon: <IoLockOpenOutline/>,
            row: [],
            rowClass: "",
            iconOnClick: function (ref, changeIcon) {
                if (ref.current.type === "text") {
                    ref.current.type = "password";
                    changeIcon(<IoLockClosedOutline/>)
                } else {
                    ref.current.type = "text";
                    changeIcon(<IoLockOpenOutline/>)
                }
            }
        }
    ]

    const [apiData, postApi] = useApi<{ email: string, password: string }>('/api/auth/login',);

    const formOnClick = (e) => {
        e.preventDefault();
        postApi(formData).then(() => {
            console.log("HELLO")
        });
    }

    return (
        <Grid className={"grid  w-full h-full relative"}>
            <Div className={"w-full"}>
                <AuthFormHeader text={"Login to Blogspot"}/>
                <AuthForm loading={apiData.loading}
                          setInputState={setInputState}
                          formOnSubmit={formOnClick}
                          fields={InputFields}>
                    <Div className={"text-right"}>
                        <Anchor className={"mt-4 hover:text-yellow-700"}>Forgot Password?</Anchor>
                    </Div>
                </AuthForm>
                <AuthFormFooter text={"Don't have an account?"} buttonText={"Create Account"} onClick={() => {
                }}/>
            </Div>
        </Grid>
    )
}