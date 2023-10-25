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
                <Link href={link} className={'p-[20px] flex gap-[20px]'}>
                    <img src={img} alt={title} className={'aspect-square w-[50%]'} />
                    <div className={'w-[50%] flex flex-col justify-between gap-[20px]'}>
                        <span className={'text-black font-bold break-words text-[25px] line-clamp-2 mb-[20px]'}>{title}</span>
                        <p className={'text-black font-light break-words line-clamp-2 mb-[30px] text-[20px]'}>{children}</p>
                        <div className={'flex justify-between items-center gap-[10px]'}>
                            <img src={profileImg} alt={profileName} className={'w-[50px] h-[50px] aspect-square rounded-full object-cover'} />
                            <span className={'truncate text-[15px] font-light text-black'}>{profileName}</span>
                            <div className={'h-[40px] w-[1px] bg-black'} />
                            <time className={'text-[15px] font-light text-black'} dateTime={date}>{date}</time>
                        </div>
                    </div>
                </Link>
            </article>
        </li>
    );
}