import {Anchor} from "../../components/UI/Button";
import {IoAtCircleOutline, IoLockClosedOutline} from "react-icons/io5";
import useApi from "../../hook/useApi";
import {
    AuthContainer,
    AuthForm,
    AuthFormFieldInterface,
    AuthFormHeader,
    passwordTextSwitch
} from "../../components/pages/auth";
import {LOGIN_PAGE_TEXT} from "../../content";
import {Div} from "../../components/UI/Layout";

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
                dataTestId: "email"
            }
        },
        {
            field: {
                icon: <IoLockClosedOutline/>,
                inputProps: {
                    type: "password",
                    name: "password",
                    onChange: setState,
                    value: state.password
                },

                label: "Password",
                iconOnClick: passwordTextSwitch,
                dataTestId: "password"
            },

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

    const disabled = () => {
        return Object.values(state).every(val => {
            return !val;
        });
    }

    return (
        <AuthContainer>
            <>
                <AuthFormHeader text={LOGIN_PAGE_TEXT}/>
                <AuthForm buttonText={"Login"}
                          loading={apiData.loading}
                          formOnSubmit={formOnClick}
                          fields={InputFields}
                          disabled={disabled()}
                >
                    <Div className={"text-right"}>
                        <Anchor className={"mt-4 hover:text-yellow-700"}>Forgot Password?</Anchor>
                    </Div>
                </AuthForm>
            </>
        </AuthContainer>
    )
}