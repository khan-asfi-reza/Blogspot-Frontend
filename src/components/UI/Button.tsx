import {ButtonHTMLAttributes, HTMLAttributes} from "react";
import classNames from "classnames";


/**
 * UI Button By Default Contains Padding
 * @param {string} classname - HTML class
 * @param {React.ReactNode} children - React Child Node
 * @param {ButtonHTMLAttributes<HTMLButtonElement>} props - Default HTML Button Props
 * @returns {HTMLButtonElement} - Returns html button element
 **/
export const Button = ({className, children, ...props}: ButtonHTMLAttributes<HTMLButtonElement>) => (
    <button className={classNames("px-4 py-4", className)} {...props} >
        {children}
    </button>
)


/**
 * UI Anchor Tag
 * @param {string} classname - HTML class
 * @param {React.ReactNode} children - React Child Node
 * @param {HTMLAttributes<HTMLAnchorElement>} props - Default HTML Button Props
 * @returns {HTMLAnchorElement} - Returns html button element
 **/
export const Anchor = ({className, children, ...props}: HTMLAttributes<HTMLAnchorElement>) => (
    <a className={classNames("inline-block", className)} {...props} >
        {children}
    </a>
)