import {HTMLAttributes} from "react";
import classNames from "classnames";

/**
 * UI Heading, Large Heading with default tailwind classes
 * @param {string} classname - HTML class to be added
 * @param {React.ReactNode} children - React Child Node
 * @param {HTMLAttributes<HTMLHeadingElement>} props - H1 Props
 * @returns {JSX.Element} - Returns H1 Element
 **/
export const Heading = ({className, children, ...props}: HTMLAttributes<HTMLHeadingElement>) => (
    <h1 {...props}
        className={classNames("text-4xl sm:text-5xl md:text-6xl text-xl tracking-tight font-extrabold", className)}>
        {children}
    </h1>
)


/**
 * UI Heading, Medium Heading with default tailwind classes
 * @param {string} classname - HTML class to be added
 * @param {React.ReactNode} children - React Child Node
 * @param {HTMLAttributes<HTMLHeadingElement>} props - H2 Props
 * @returns {JSX.Element} - Returns H2 Element
 **/
export const SectionHeading = ({className, children, ...props}: HTMLAttributes<HTMLHeadingElement>) => (
    <h2 {...props} className={classNames("text-3xl tracking-tight sm:text-4xl md:text-5xl", className)}>
        {children}
    </h2>
)


/**
 * UI Text, Readable friendly Paragraph Element with default tailwind classes
 * @param {string} classname - HTML class to be added
 * @param {React.ReactNode} children - React Child Node
 * @param {HTMLAttributes<HTMLHeadingElement>} props - HTML Paragraph Props
 * @returns {JSX.Element} - Returns p Element
 **/
export const Text = ({className, children, ...props}: HTMLAttributes<HTMLParagraphElement>) => (
    <p {...props} className={classNames("text-base sm:text-lg sm:max-w-xl md:text-xl my-4", className)}>
        {children}
    </p>
)


/**
 * UI Text, Readable friendly small sized text Element with default tailwind classes
 * @param {string} classname - HTML class to be added
 * @param {React.ReactNode} children - React Child Node
 * @param {HTMLAttributes<HTMLHeadingElement>} props - HTML Paragraph Props
 * @returns {JSX.Element} - Returns p Element
 **/
export const SmallText = ({className, children, ...props}: HTMLAttributes<HTMLParagraphElement>) => (
    <p {...props} className={classNames("text-sm my-4", className)}>
        {children}
    </p>
)

/**
 * UI HR, no border, small height horizontal line
 * @param {string} classname - HTML class to be added
 * @param {React.ReactNode} children - React Child Node
 * @param {HTMLAttributes<HTMLHeadingElement>} props - HTML HR Props
 * @returns {JSX.Element} - Returns HR Element
 **/
export const HR = ({className, children, ...props}: HTMLAttributes<HTMLHRElement>) => (
    <hr className={classNames("border-0 h-2", className)} {...props} />
)
