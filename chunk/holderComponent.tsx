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
                ? `${className} max-w-[1200px] mx-auto p-[20px]`
                : 'max-w-[1200px] mx-auto p-[20px]'
        }>
            {children}
        </div>
    );
}