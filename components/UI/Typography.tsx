import {HTMLAttributes} from "react";
import classNames from "classnames";

export const Heading = ({className, children, ...props}: HTMLAttributes<HTMLHeadingElement>) => (
    <h1 {...props}
        className={classNames("text-4xl sm:text-5xl md:text-6xl text-xl tracking-tight font-extrabold", className)}>
        {children}
    </h1>
)

export const SectionHeading = ({className, children, ...props}: HTMLAttributes<HTMLHeadingElement>) => (
    <h1 {...props} className={classNames("text-3xl tracking-tight sm:text-4xl md:text-5xl", className)}>
        {children}
    </h1>
)

export const Text = ({className, children, ...props}: HTMLAttributes<HTMLParagraphElement>) => (
    <p {...props} className={classNames("text-base sm:text-lg sm:max-w-xl md:text-xl my-4", className)}>
        {children}
    </p>
)

export const HR = ({className, children, ...props}: HTMLAttributes<HTMLHRElement>) => (
    <hr className={classNames("border-0 h-2", className)} {...props} />
)

export const SmallText = ({className, children, ...props}: HTMLAttributes<HTMLParagraphElement>) => (
    <p {...props} className={classNames("text-base my-4", className)}>
        {children}
    </p>
)