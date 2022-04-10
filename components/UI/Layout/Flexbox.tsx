import {MotionDivProps} from "./interface";
import classNames from "classnames";
import {Div} from "./Layout";

/**
 * UI Flex, a flex display element, has default css class 'flex'
 * @param {string} classname - HTML class
 * @param {React.ReactNode} children - React Child Node
 * @param {MotionDivProps} props - Framer motion section element props
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
 * @param {MotionDivProps} props - Framer motion section element props
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
 * @param {MotionDivProps} props - Framer motion section element props
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
 * @param {MotionDivProps} props - Framer motion section element props
 * @returns {JSX.Element} - Returns framer motion div component with default css class flex-row
 **/
export const FlexRowWrap = ({className, children, ...props}: MotionDivProps) => {
    return (
        <Flex className={classNames("flex-row flex-wrap", className)} {...props}>
            {children}
        </Flex>
    )
}