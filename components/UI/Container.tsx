import classNames from "classnames";
import {HTMLMotionProps, motion} from "framer-motion";

export interface ContainerInterface extends HTMLMotionProps<"div"> {
    overWrite?: boolean,
}

export interface MotionDivProps extends HTMLMotionProps<"div"> {
}

export const Container = ({className, children, overWrite = false, ...props}: ContainerInterface) => {
    return (
        <motion.div className={classNames(!overWrite && "container mx-auto", className)} {...props}>
            {children}
        </motion.div>
    )
}

export const Section = (props: HTMLMotionProps<"section">) => {
    return (
        <motion.section {...props}>
            {props.children}
        </motion.section>
    )
}

export const Div = (props: MotionDivProps) => {
    return (
        <motion.div {...props}>
            {props.children}
        </motion.div>
    )
}

export const Grid = ({className, children, ...props}: MotionDivProps) => {
    return (
        <Div className={classNames("grid", className)} {...props}>
            {children}
        </Div>
    )
}

export const Flex = ({className, children, ...props}: MotionDivProps) => {
    return (
        <Div className={classNames("flex", className)} {...props}>
            {children}
        </Div>
    )
}

export const FlexRow = ({className, children, ...props}: MotionDivProps) => {
    return (
        <Flex className={classNames("flex-row", className)} {...props}>
            {children}
        </Flex>
    )
}

export const Row = ({className, children, ...props}: MotionDivProps) => {
    return (
        <Div className={classNames(className)} {...props}>
            {children}
        </Div>
    )
}

export const Col = ({className, children, ...props}: MotionDivProps) => {
    return (
        <Div className={classNames(className)} {...props}>
            {children}
        </Div>
    )
}

export const FlexCol = ({className, children, ...props}: MotionDivProps) => {
    return (
        <Flex className={classNames("flex-col", className)} {...props}>
            {children}
        </Flex>
    )
}

export const FlexRowWrap = ({className, children, ...props}: MotionDivProps) => {
    return (
        <Flex className={classNames("flex-row flex-wrap", className)} {...props}>
            {children}
        </Flex>
    )
}

export const Center = ({className, children, ...props}: MotionDivProps) => {
    return (
        <Div className={classNames("grid place-items-center", className)} {...props}>
            {children}
        </Div>
    )
}
