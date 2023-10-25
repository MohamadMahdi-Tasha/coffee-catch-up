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
        <li className={'shrink-0 w-full'}>
            <article>
                <Link href={link} className={'flex gap-[20px] py-[20px]'}>
                    <img className={'aspect-square w-[20%]'} src={img} alt={title} />
                    <div className={'w-[80%] flex items-center'}>
                        <span className={'text-[15px] font-light line-clamp-2 break-words'}>{title}</span>
                    </div>
                </Link>
            </article>
        </li>
    );
}