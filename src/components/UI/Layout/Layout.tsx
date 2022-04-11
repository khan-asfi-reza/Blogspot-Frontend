import classNames from "classnames";
import {HTMLMotionProps, motion} from "framer-motion";
import {MotionDivProps} from "./interface";

/**
 * UI Section with framer motion support
 * @component
 * @param {HTMLMotionProps<"section">} props - Framer motion section element props
 * @returns {JSX.Element} - Returns framer motion section component
 **/
export function Section(props: HTMLMotionProps<"section">): JSX.Element {
    return (
        <motion.section {...props}>
            {props.children}
        </motion.section>
    )
}

/**
 * UI Div element with framer motion support
 * @component
 * @param {HTMLMotionProps<"div">} props - Framer motion section element props
 * @returns {JSX.Element} - Returns framer motion div component
 **/
export function Div(props: MotionDivProps): JSX.Element {
    return (
        <motion.div {...props}>
            {props.children}
        </motion.div>
    )
}
/**
 * UI Row, just a basic Div Element, This Row Component is mainly for Grid and Flex, instead of using div or section
 * Using this Component makes more sense and gives a proper meaning and better readability
 * @param {string} classname - HTML class
 * @param {React.ReactNode} children - React Child Node
 * @param {HTMLMotionProps<"div">} props - Framer motion section element props
 * @returns {JSX.Element} - Returns framer motion div component named as Row
 **/
export const Row = ({className, children, ...props}: MotionDivProps) => {
    return (
        <Div className={classNames(className)} {...props}>
            {children}
        </Div>
    )
}
/**
 * UI Col, just a basic Div Element, This Col Component is mainly for Grid and Flex, instead of using div or section
 * Using this Component makes more sense and gives a proper meaning and better readability
 * @param {string} classname - HTML class
 * @param {React.ReactNode} children - React Child Node
 * @param {HTMLMotionProps<"div">} props - Framer motion section element props
 * @returns {JSX.Element} - Returns framer motion div component named as Col
 **/
export const Col = ({className, children, ...props}: MotionDivProps) => {
    return (
        <Div className={classNames(className)} {...props}>
            {children}
        </Div>
    )
}
/**
 * UI Center puts the element exactly in the center of the container, default css 'grid grid-items-center'
 * @param {string} classname - HTML class
 * @param {React.ReactNode} children - React Child Node
 * @param {HTMLMotionProps<"div">} props - Framer motion section element props
 * @returns {JSX.Element} - Returns framer motion div component with default css class 'grid grid-items-center'
 **/
export const Center = ({className, children, ...props}: MotionDivProps) => {
    return (
        <Div className={classNames("grid place-items-center", className)} {...props}>
            {children}
        </Div>
    )
}

