import {HTMLAttributes} from "react";
import classNames from "classnames";

interface ContainerInterface extends HTMLAttributes<HTMLDivElement> {
    overWrite?: boolean,
}

export const Container = ({className, children, overWrite = false, ...props}: ContainerInterface) => {
    return (
        <div className={classNames(!overWrite && "container mx-auto", className)} {...props}>
            {children}
        </div>
    )
}

export const Section = (props: HTMLAttributes<HTMLElement>) => {
    return (
        <section {...props}>
            {props.children}
        </section>
    )
}

export const Div = (props: HTMLAttributes<HTMLDivElement>) => {
    return (
        <div {...props}>
            {props.children}
        </div>
    )
}

export const Grid = ({className, children, ...props}: HTMLAttributes<HTMLDivElement>) => {
    return (
        <Div className={classNames("grid", className)} {...props}>
            {children}
        </Div>
    )
}

export const Flex = ({className, children, ...props}: HTMLAttributes<HTMLDivElement>) => {
    return (
        <Div className={classNames("flex", className)} {...props}>
            {children}
        </Div>
    )
}

export const FlexRow = ({className, children, ...props}: HTMLAttributes<HTMLDivElement>) => {
    return (
        <Flex className={classNames("flex-row", className)} {...props}>
            {children}
        </Flex>
    )
}

export const Row = ({className, children, ...props}: HTMLAttributes<HTMLDivElement>) => {
    return (
        <Div className={classNames(className)} {...props}>
            {children}
        </Div>
    )
}

export const Col = ({className, children, ...props}: HTMLAttributes<HTMLDivElement>) => {
    return (
        <Div className={classNames(className)} {...props}>
            {children}
        </Div>
    )
}

export const FlexCol = ({className, children, ...props}: HTMLAttributes<HTMLDivElement>) => {
    return (
        <Flex className={classNames("flex-col", className)} {...props}>
            {children}
        </Flex>
    )
}

export const FlexRowWrap = ({className, children, ...props}: HTMLAttributes<HTMLDivElement>) => {
    return (
        <Flex className={classNames("flex-row flex-wrap", className)} {...props}>
            {children}
        </Flex>
    )
}