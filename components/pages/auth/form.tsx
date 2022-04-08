import {AuthFormPropsInterface} from "./interface";
import {Form, Input} from "../../UI/Form";
import {Grid} from "../../UI/Container";
import classNames from "classnames";
import {Button} from "../../UI/Button";
import {FaSpinner} from "react-icons/fa";

/**
 * Authentication Page Form For Signing in and Signing up
 * @param {Array<AuthFormFieldInterface>}fields - List of Input Fields inside the form
 * @param {FormEventHandler<HTMLFormElement>}formOnSubmit - Form On submit action
 * @param {JSX.Element}children - JSX Children
 * @param {boolean}loading - Is Button Loading or not, mainly to show if form is sending request to the api
 * @param {string}buttonText - Button Display Text
 * @param {boolean}disabled - If button is disabled
 */
export function AuthForm({fields, formOnSubmit, children, loading, buttonText, disabled}: AuthFormPropsInterface) {

    return (
        <Form onSubmit={formOnSubmit} className={"mt-10"}>
            {
                fields.map((props, key) =>
                    props.row && props.row.length ?
                        <Grid key={key} className={classNames(props.rowClass, "gap-x-6")}>
                            {
                                props.row.map((each, k) => (
                                    <Input key={k} {...each}/>
                                ))
                            }
                        </Grid> :
                        <Input key={key} {...props.field}/>
                )
            }
            {children}
            <Button disabled={disabled} type={"submit"} data-testid={"ACTION_BUTTON"}
                    className={classNames("bg-theme justify-center w-full flex items-center mt-12",
                        "text-white disabled:bg-gray-400 md:px-10 px-8 hover:bg-blue-500 transition-all", loading && "bg-emerald-500")}>
                {loading && <i className={"animate-spin mr-2"}><FaSpinner/></i>}
                {buttonText}
            </Button>
        </Form>
    )
}