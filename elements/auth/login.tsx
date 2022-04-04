import {Div} from "../../components/UI/Container";
import {Anchor} from "../../components/UI/Button";
import {IoAtCircleOutline} from "react-icons/io5";
import useApi from "../../hook/useApi";
import {AuthForm, AuthFormContainer, AuthFormFieldInterface, AuthFormHeader, passwordTextSwitch} from "./components";

export default function Login({state, setState}) {

    const InputFields: Array<AuthFormFieldInterface> = [
        {
            field: {
                icon: <IoAtCircleOutline/>,
                inputProps: {
                    type: "text",
                    name: "email",
                    onChange: setState,
                    value: state.email
                },
                label: "Email",
                validator: () => {
                    if (state.email === "test1234@gmail.com") {
                        return "Invalid email address"
                    }
                    return false
                },
            }
        },
        {
            field: {
                icon: <IoAtCircleOutline/>,
                inputProps: {
                    type: "password",
                    name: "password",
                    onChange: setState,
                    value: state.password
                },
                label: "Password",
                iconOnClick: passwordTextSwitch
            }
        },
    ]

    const [apiData, postApi] = useApi<{ email: string, password: string }>('/api/auth/login',);

    const formOnClick = (e) => {
        e.preventDefault();
        postApi(state)
            .then(() => {
                console.log(apiData)
            })

    }

    return (
        <AuthFormContainer>
            <AuthFormHeader text={"Login to Lightboat"}/>
            <AuthForm loading={apiData.loading} formOnSubmit={formOnClick} fields={InputFields}>
                <Div className={"text-right"}>
                    <Anchor className={"mt-4 hover:text-yellow-700"}>Forgot Password?</Anchor>
                </Div>
            </AuthForm>
        </AuthFormContainer>
    )
}