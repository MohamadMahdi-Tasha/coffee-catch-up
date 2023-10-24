// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";

// Defining type of props
interface propsType {
    children: ReactNode;
    className?: string;
}

// Creating and exporting holder component as default
export default function HolderComponent({children, className}:propsType):ReactNode {
    // Returning JSX
    return (
        <div className={
            (className)
                ? `${className}`
                : ''
        }>
            {children}
        </div>
    );
}