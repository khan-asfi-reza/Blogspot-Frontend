// Container has default classname and design and can be overwritten
import {HTMLMotionProps} from "framer-motion";

export interface ContainerInterface extends HTMLMotionProps<"div"> {
    overwrite?: boolean,
}

// Interface for motion.div prop type
export interface MotionDivProps extends HTMLMotionProps<"div"> {
}