import {HTMLAttributes} from "react";
import classNames from "classnames";

export const Form = (props: HTMLAttributes<HTMLFormElement>) => {
    return (
        <form {...props}>
            {props.children}
        </form>
    )
}

export const InputGroup = (props: HTMLAttributes<HTMLDivElement>) => (
    <div {...props}>
        {props.children}
    </div>
)

export const Input = (props: HTMLAttributes<HTMLInputElement>) => (
    <input  {...props} className={classNames(props.className, "active:outline-0 outline-0 px-2 focus:outline-0")}/>

)

export const Label = (props: HTMLAttributes<HTMLLabelElement>) => (
    <label {...props}>
        {props.children}
    </label>
)