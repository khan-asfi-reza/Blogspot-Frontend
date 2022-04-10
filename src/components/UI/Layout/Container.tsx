import classNames from "classnames";
import {HTMLMotionProps, motion} from "framer-motion";
import {ContainerInterface} from "./interface";

/**
 * UI Container which has a default width and auto margin
 * @param {string} classname - HTML class
 * @param {React.ReactNode} children - React Child Node
 * @param {HTMLMotionProps<"div">} props - Framer motion div element props
 * @returns {JSX.Element} - Returns framer motion div component
 * @example <Container> </Container>
 **/
export const Container = ({className, children, overwrite = false, ...props}: ContainerInterface): JSX.Element => {
    return (
        <motion.div className={classNames(!overwrite && "container mx-auto", className)} {...props}>
            {children}
        </motion.div>
    )
}


