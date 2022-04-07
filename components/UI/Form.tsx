import {forwardRef, HTMLAttributes, InputHTMLAttributes, MutableRefObject, useRef, useState} from "react";
import classNames from "classnames";
import {Div, FlexRow} from "./Container";

/**
 * UI Form
 * @param {HTMLAttributes<HTMLFormElement>} props - HTML Form Props
 * @returns {JSX.Element} - Returns Form Element
 **/
export const Form = (props: HTMLAttributes<HTMLFormElement>) => {
    return (<form {...props}>
        {props.children}
    </form>)
}


/**
 * UI InputField Group, Group of elements consisting of an input
 * @param {HTMLAttributes<HTMLFormElement>} props - div element props
 * @returns {JSX.Element} - Returns Div Element
 **/
export const InputGroup = (props: HTMLAttributes<HTMLDivElement>) => (
    <div {...props}>
        {props.children}
    </div>)


/**
 * UI InputField, with forwarded ref, input has default padding and no outline on active state
 * @param {InputHTMLAttributes<HTMLInputElement>} props - Framer motion div element props
 * @param {HTMLInputElement} ref - Ref of the input that is being forwarded
 * @returns {JSX.Element} - Returns Div Element
 **/
export const InputField = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
    (props, ref) => (
        <input ref={ref} {...props}
               className={classNames(props.className, "active:outline-0 outline-0 px-2 focus:outline-0")}/>)
)
InputField.displayName = "InputField"


/**
 * UI Label
 * @param {HTMLAttributes<HTMLLabelElement>} props - div element props
 * @returns {JSX.Element} - Returns Div Element
 **/
export const Label = (props: HTMLAttributes<HTMLLabelElement>) => (
    <label {...props}>
        {props.children}
    </label>)

// Generic/Abstract Primary Styled Input Props Interface
/**
 * Interface of primary Styled Input | Globally used Input
 * @param {InputHTMLAttributes<HTMLInputElement>} inputProps - HTML Input Props, props belonging to the root input
 * @param {HTMLAttributes<HTMLLabelElement>} labelProps - Floating label Props
 * @param {InputHTMLAttributes<HTMLInputElement>} iconProps - Right Sided Icon Props
 * @param {HTMLAttributes<HTMLSpanElement>} containerProps - Container of the input group props
 * @param {string | JSX.Element} icon - Icon String | React Icon Component
 * @param {string} label - Label String
 * @param {string | false} validator - Input Validator
 */
interface AbstractInputProps {
    inputProps?: InputHTMLAttributes<HTMLInputElement>,
    labelProps?: HTMLAttributes<HTMLLabelElement>,
    iconProps?: HTMLAttributes<HTMLSpanElement>,
    containerProps?: HTMLAttributes<HTMLDivElement>,
    icon?: string | JSX.Element,
    label?: string,

    validator?(): string | false
}

/**
 * @param {AbstractInputProps} props
 * @param {any} ref
 */
export const AbstractInput = forwardRef(
    ({inputProps, labelProps, iconProps, containerProps, icon, label, validator}: AbstractInputProps, ref: any) => {

        // Animation variant for validator
        const variants = {
            open: {opacity: 1, y: 0},
            closed: {opacity: 1, y: "-100%"},
        }

        const validation = () => {
            if (validator) {
                return validator();
            }
            return false;
        }


        return (
            <Div>
                <FlexRow className={classNames("group mt-4 relative rounded-lg bg-gray-50",
                    "group border focus-within:border-sky-600 transition-all duration-500",
                    validation() === false ?
                        inputProps.value && "border-emerald-500" : "border-red-500"
                )}>
                    <InputField ref={ref}
                                required={true}
                                {...inputProps}
                                className={classNames(
                                    "text-gray-700 autofill-transparent peer",
                                    "bg-transparent group-focus-within:border-emerald-500 transition-all",
                                    "duration-500 w-full h-12", inputProps && inputProps.className)}
                    />
                    <Label
                        {...labelProps}
                        className={classNames(
                            "absolute  pointer-events-none top-1/2 ",
                            "peer-focus:top-0 peer-focus:before:bg-gray-50 before:h-[60%] before:absolute before:w-full before:bottom-0 before:-z-10 ",
                            "transform left-2 peer-valid:top-0 peer-valid:before:bg-gray-50 bg-transparent",
                            "-translate-y-1/2 text-md peer-focus:text-sky-600 ",
                            "transition-all duration-150 ",
                            validation() === false ?
                                inputProps.value && "text-emerald-500" : "text-red-500",
                            labelProps && labelProps.className
                        )}>
                        {label}
                    </Label>
                    <span
                        {...iconProps}
                        className={classNames("text-2xl peer-focus:text-sky-600 grid place-items-center px-2",
                            validation() === false ?
                                inputProps.value && "text-emerald-500" : "text-red-500",
                            iconProps && iconProps.className
                        )}>
                    {icon}
                </span>
                </FlexRow>
                <Div className={"h-5 overflow-hidden"}>
                    <Div animate={validator && validator() ? "open" : "closed"}
                         variants={variants}>
                        {
                            <p className={"my-0 text-red-500 text-sm"}>
                                {validator && validator()}
                            </p>
                        }
                    </Div>
                </Div>
            </Div>
        )
    })

AbstractInput.displayName = "AbstractInput"

// If clicking the icon will change attributes of the input group, this interface will be used
export interface InputInterface extends AbstractInputProps {
    iconOnClick?(ref?: MutableRefObject<any>, changeIconState?: Function, iconState?: any): void,
}

// Whether the input group will call to action to the icon
const IconActionInput = ({
                             inputProps,
                             iconProps,
                             icon,
                             iconOnClick,
                             label,
                             labelProps,
                             containerProps
                         }: InputInterface) => {
    const inputRef = useRef(null);
    const [currentIcon, changeCurrentIcon] = useState(icon);
    return (
        <>
            <AbstractInput inputProps={inputProps}
                           labelProps={labelProps}
                           ref={inputRef}
                           iconProps={{
                               onClick: () => {
                                   if (iconOnClick) {
                                       iconOnClick(inputRef, changeCurrentIcon, currentIcon)
                                   }
                               },
                               ...iconProps
                           }}
                           containerProps={containerProps}
                           icon={currentIcon}
                           label={label}/>
        </>
    )
}


export function Input(props: InputInterface) {
    if (props.iconOnClick) {
        return <IconActionInput {...props}/>
    }
    return <AbstractInput {...props}/>
}