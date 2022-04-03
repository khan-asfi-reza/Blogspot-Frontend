import {Div, FlexRow, Grid} from "../../components/UI/Container";
import {Anchor, Button} from "../../components/UI/Button";
import {FaSpinner} from "react-icons/fa";
import {useState} from "react";
import {IoAtCircleOutline, IoLockOpenOutline} from "react-icons/io5";
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
                <AuthForm setInputState={setInputState} formOnSubmit={formOnClick} fields={InputFields}/>
                <Div className={"text-right"}>
                    <Anchor className={"mt-4 hover:text-yellow-700"}>Forgot Password?</Anchor>
                </Div>
                <FlexRow className={"justify-between mt-12"}>
                    <Button disabled={apiData.loading} type={"submit"}
                            className={"bg-theme justify-center w-full flex items-center " +
                                "text-white disabled:bg-emerald-500 md:px-10 px-8 hover:bg-blue-500 transition-all"}>
                        {apiData.loading && <i className={"animate-spin mr-2"}><FaSpinner/></i>}
                        Login
                    </Button>
                </FlexRow>
                <AuthFormFooter text={"Don't have an account?"} buttonText={"Create Account"} onClick={() => {
                }}/>
            </Div>
        </Grid>
    )
}