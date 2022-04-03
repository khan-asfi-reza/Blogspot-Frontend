import {forwardRef, HTMLAttributes, InputHTMLAttributes} from "react";
import classNames from "classnames";

export const Form = (props: HTMLAttributes<HTMLFormElement>) => {
    return (<form {...props}>
        {props.children}
    </form>)
}

export const InputGroup = (props: HTMLAttributes<HTMLDivElement>) => (<div {...props}>
    {props.children}
</div>)


export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
    (props, ref) => (
        <input ref={ref} {...props}
               className={classNames(props.className, "active:outline-0 outline-0 px-2 focus:outline-0")}/>)
)
Input.displayName = "Input"

export const Label = (props: HTMLAttributes<HTMLLabelElement>) => (<label {...props}>
    {props.children}
</label>)