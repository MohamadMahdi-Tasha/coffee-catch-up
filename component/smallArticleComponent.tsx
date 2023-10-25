// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import Link from "next/link";

// Defining type of props
interface propsType {
    title: string;
    img: string;
    link: string;
}

// Creating and exporting small article component as default
export default function SmallArticleComponent({title, img, link}:propsType):ReactNode {
    // Returning JSX
    return (
        <li>
            <Link href={link}>
                <img src={img} alt={title} />
                <span>{title}</span>
            </Link>
        </li>
    );
}