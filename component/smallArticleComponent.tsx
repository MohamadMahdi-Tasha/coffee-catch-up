// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import Link from "next/link";

// Defining type of props
interface propsType {
    title: string;
    img: string;
    link: string;
    loading?: boolean;
}

// Creating and exporting small article component as default
export default function SmallArticleComponent({title, img, link, loading}:propsType):ReactNode {
    // Conditional rendering
    if (!loading) {
        return (
            <li className={'shrink-0 w-full'}>
                <article>
                    <Link href={link} className={'flex gap-[20px] py-[20px]'}>
                        <div className={'aspect-square w-[20%] relative'}>
                            <div className={'absolute w-full h-full bg-theme-color mix-blend-hue'} />
                            <img className={'w-full object-cover h-full'} src={img} alt={title} />
                        </div>
                        <div className={'w-[80%] flex items-center'}>
                            <span className={'text-[15px] font-light line-clamp-2 break-words'}>{title}</span>
                        </div>
                    </Link>
                </article>
            </li>
        );
    } else {
        return (
            <li className={'shrink-0 w-full flex h-[130px] gap-[20px] py-[20px]'}>
                <div className={'aspect-square w-[20%] loading'} />
                <div className={'aspect-square w-[80%] loading'} />
            </li>
        );
    }
}