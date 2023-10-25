// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import Link from 'next/link';

// Defining type of props
interface propsType {
    img: string;
    title: string;
    children: string;
    profileImg: string;
    profileName: string;
    date: string;
    link: string;
}

// Creating and exporting article component as default
export default function ArticleComponent({date, link, img, profileImg, profileName, children, title}:propsType):ReactNode {
    // Returning JSX
    return (
        <li>
            <article>
                <Link href={link}>
                    <img src={img} alt={title} />
                    <div>
                        <span>{title}</span>
                        <p>{children}</p>
                        <div>
                            <img src={profileImg} alt={profileName} />
                            <span>{profileName}</span>
                            <div />
                            <time dateTime={date}>{date}</time>
                        </div>
                    </div>
                </Link>
            </article>
        </li>
    );
}