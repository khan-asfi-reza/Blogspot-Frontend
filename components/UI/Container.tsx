import classNames from "classnames";
import {HTMLMotionProps, motion} from "framer-motion";

// Container has default classname and design and can be overwritten
export interface ContainerInterface extends HTMLMotionProps<"div"> {
    overwrite?: boolean,
}

// Interface for motion.div prop type
export interface MotionDivProps extends HTMLMotionProps<"div"> {
}

/**
 * UI Container which has a default width and auto margin
 * @param {string} classname - HTML class
 * @param {React.ReactNode} children - React Child Node
 * @param {HTMLMotionProps<"div">} props - Framer motion div element props
 * @returns {JSX.Element} - Returns framer motion div component
 **/
export const Container = ({className, children, overwrite = false, ...props}: ContainerInterface): JSX.Element => {
    return (
        <motion.div className={classNames(!overwrite && "container mx-auto", className)} {...props}>
            {children}
        </motion.div>
    )
}

/**
 * UI Section with framer motion support
 * @param {HTMLMotionProps<"section">} props - Framer motion section element props
 * @returns {JSX.Element} - Returns framer motion section component
 **/
export const Section = (props: HTMLMotionProps<"section">): JSX.Element => {
    return (
        <motion.section {...props}>
            {props.children}
        </motion.section>
    )
}

/**
 * UI Div element with framer motion support
 * @param {HTMLMotionProps<"div">} props - Framer motion section element props
 * @returns {JSX.Element} - Returns framer motion div component
 **/
export const Div = (props: MotionDivProps): JSX.Element => {
    return (
        <motion.div {...props}>
            {props.children}
        </motion.div>
    )
}

/**
 * UI Grid, a grid display element, has default css class 'grid'
 * @param {string} classname - HTML class
 * @param {React.ReactNode} children - React Child Node
 * @param {HTMLMotionProps<"div">} props - Framer motion section element props
 * @returns {JSX.Element} - Returns framer motion div component with default css class grid
 **/
export const Grid = ({className, children, ...props}: MotionDivProps): JSX.Element => {
    return (
        <Div className={classNames("grid", className)} {...props}>
            {children}
        </Div>
    )
}


/**
 * UI Flex, a flex display element, has default css class 'flex'
 * @param {string} classname - HTML class
 * @param {React.ReactNode} children - React Child Node
 * @param {HTMLMotionProps<"div">} props - Framer motion section element props
 * @returns {JSX.Element} - Returns framer motion div component with default css class flex
 **/
export const Flex = ({className, children, ...props}: MotionDivProps) => {
    return (
        <Div className={classNames("flex", className)} {...props}>
            {children}
        </Div>
    )
}

/**
 * UI Flex, a flex-row display element, has default css class 'flex-row'
 * @param {string} classname - HTML class
 * @param {React.ReactNode} children - React Child Node
 * @param {HTMLMotionProps<"div">} props - Framer motion section element props
 * @returns {JSX.Element} - Returns framer motion div component with default css class flex-row
 **/
export const FlexRow = ({className, children, ...props}: MotionDivProps) => {
    return (
        <Flex className={classNames("flex-row", className)} {...props}>
            {children}
        </Flex>
    )
}


/**
 * UI Flex, a flex-col display element, has default css class 'flex-col'
 * @param {string} classname - HTML class
 * @param {React.ReactNode} children - React Child Node
 * @param {HTMLMotionProps<"div">} props - Framer motion section element props
 * @returns {JSX.Element} - Returns framer motion div component with default css class flex-row
 **/
export const FlexCol = ({className, children, ...props}: MotionDivProps) => {
    return (
        <Flex className={classNames("flex-col", className)} {...props}>
            {children}
        </Flex>
    )
}


/**
 * UI Flex, a flex-row display element, has default css class 'flex-row flex-wrap'
 * A responsive flex row component
 * @param {string} classname - HTML class
 * @param {React.ReactNode} children - React Child Node
 * @param {HTMLMotionProps<"div">} props - Framer motion section element props
 * @returns {JSX.Element} - Returns framer motion div component with default css class flex-row
 **/
export const FlexRowWrap = ({className, children, ...props}: MotionDivProps) => {
    return (
        <Flex className={classNames("flex-row flex-wrap", className)} {...props}>
            {children}
        </Flex>
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
