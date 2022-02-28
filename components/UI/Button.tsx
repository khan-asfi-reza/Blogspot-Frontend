import {HTMLAttributes} from "react";
import classNames from "classnames";

export const Button = ({className, children, ...props}: HTMLAttributes<HTMLButtonElement>) => (
    <button className={classNames("px-4 py-4", className)} {...props} >
        {children}
    </button>
)

export const Anchor = ({className, children, ...props}: HTMLAttributes<HTMLAnchorElement>) => (
    <a className={classNames("inline-block", className)} {...props} >
        {children}
    </a>
)