import {Div} from "./Layout";
import classNames from "classnames";
import {MotionDivProps} from "./interface";

/**
 * UI Grid, a grid display element, has default css class 'grid'
 * @param {string} classname - HTML class
 * @param {React.ReactNode} children - React Child Node
 * @param {MotionDivProps<"div">} props - Framer motion section element props
 * @returns {JSX.Element} - Returns framer motion div component with default css class grid
 **/
export const Grid = ({className, children, ...props}: MotionDivProps): JSX.Element => {
    return (
        <Div className={classNames("grid", className)} {...props}>
            {children}
        </Div>
    )
}