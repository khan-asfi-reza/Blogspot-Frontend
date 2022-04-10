import {FormEventHandler} from "react";
import {InputInterface} from "../../UI/Form";

/**
 * Interface for List of Form Fields
 */
export interface AuthFormFieldInterface {
    field: InputInterface,
    row?: Array<InputInterface>,
    rowClass?: string,
    dataTestId?: string
}

/**
 * Interface for Auth Form
 */
export interface AuthFormPropsInterface {
    fields: Array<AuthFormFieldInterface>,
    loading: boolean,
    formOnSubmit: FormEventHandler<HTMLFormElement>,
    children?: JSX.Element,
    buttonText: string,
    disabled: boolean
}