import {HTMLAttributes, useEffect} from "react";
import classNames from "classnames";
import {ComponentSizeType, SizeType} from "@UI/types";
import {instanceOf} from "prop-types";

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

interface PAttributes extends HTMLAttributes<HTMLParagraphElement>{
    size: ComponentSizeType
}

export const P = ({size, children, ...props}: PAttributes) => {


    const sizeClassName = {
        base: {
            xs: "text-xs",
            md: "text-md",
            lg: "text-lg",
            xl: "text-xl",
            '2xl': "text-2xl",
            '3xl': "text-3xl",
            '4xl': "text-4xl",
            '5xl': "text-5xl",
            '6xl': "text-6xl",
            '7xl': "text-7xl",
            'base': "text-base"
        },
        xs: {
            xs: "xs:text-xs",
            md: "xs:text-md",
            lg: "xs:text-lg",
            xl: "xs:text-xl",
            '2xl': "xs:text-2xl",
            '3xl': "xs:text-3xl",
            '4xl': "xs:text-4xl",
            '5xl': "xs:text-5xl",
            '6xl': "xs:text-6xl",
            '7xl': "xs:text-7xl",
            'base': "xs:text-base"
        },
        md: {
            xs: "md:text-xs",
            md: "md:text-md",
            lg: "md:text-lg",
            xl: "md:text-xl",
            '2xl': "md:text-2xl",
            '3xl': "md:text-3xl",
            '4xl': "md:text-4xl",
            '5xl': "md:text-5xl",
            '6xl': "md:text-6xl",
            '7xl': "md:text-7xl",
            'base': "md:text-base"
        },
        lg: {
            xs: "lg:text-xs",
            md: "lg:text-md",
            lg: "lg:text-lg",
            xl: "lg:text-xl",
            '2xl': "lg:text-2xl",
            '3xl': "lg:text-3xl",
            '4xl': "lg:text-4xl",
            '5xl': "lg:text-5xl",
            '6xl': "lg:text-6xl",
            '7xl': "lg:text-7xl",
            'base': "lg:text-base"
        },
        xl: {
            xs: "xl:text-xs",
            md: "xl:text-md",
            lg: "xl:text-lg",
            xl: "xl:text-xl",
            '2xl': "xl:text-2xl",
            '3xl': "xl:text-3xl",
            '4xl': "xl:text-4xl",
            '5xl': "xl:text-5xl",
            '6xl': "xl:text-6xl",
            '7xl': "xl:text-7xl",
            'base': "xl:text-base"
        },
        '2xl': {
            xs: "2xl:text-xs",
            md: "2xl:text-md",
            lg: "2xl:text-lg",
            xl: "2xl:text-xl",
            '2xl': "2xl:text-2xl",
            '3xl': "2xl:text-3xl",
            '4xl': "2xl:text-4xl",
            '5xl': "2xl:text-5xl",
            '6xl': "2xl:text-6xl",
            '7xl': "2xl:text-7xl",
            'base': "2xl:text-base"
        },
    }

    const textSize = () => {
        let textClassName = "";

        function appendToClassName(screenType, key){
            const classNameMap = sizeClassName[screenType];
            textClassName += `${classNameMap[key]} `
        }

        if(typeof size === 'object'){
            Object.keys(size).forEach((screenType) => {
                appendToClassName(screenType, size[screenType]);
            })
        }else{
            appendToClassName('base', size);
        }

        return textClassName.replace(/^\s+|\s+$/g, '');
    }


    return(
        <p className={textSize()}>
            {children}
        </p>)
}