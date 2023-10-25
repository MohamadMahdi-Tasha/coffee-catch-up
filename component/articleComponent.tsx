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
    loading?: boolean;
}

// Creating and exporting article component as default
export default function ArticleComponent({date, link, img, profileImg, profileName, children, title, loading}:propsType):ReactNode {
    // Conditional rendering
    if (!loading) {
        return (
            <li>
                <article>
                    <Link href={link} className={'py-[20px] flex lg:flex-row flex-col gap-[20px]'}>
                        <img src={img} alt={title} className={'lg:aspect-square lg:w-[50%] w-full lg:h-auto h-[250px] object-cover'} />
                        <div className={'lg:w-[50%] flex flex-col justify-between gap-[20px]'}>
                            <span className={'text-black font-bold break-words text-[25px] line-clamp-2 mb-[20px]'}>{title}</span>
                            <p className={'text-black font-light break-words line-clamp-2 mb-[30px] text-[20px]'}>{children}</p>
                            <div className={'flex lg:justify-between items-center gap-[10px]'}>
                                <img src={profileImg} alt={profileName} className={'profile-img'} />
                                <span className={'profile-name'}>{profileName}</span>
                                <div className={'profile-divider'} />
                                <time className={'profile-date'} dateTime={date}>{date}</time>
                            </div>
                        </div>
                    </Link>
                </article>
            </li>
        );
    } else {
        return (
            <li className={'py-[20px] flex lg:flex-row flex-col gap-[20px]'}>
                <div className={'lg:aspect-square lg:w-[50%] w-full lg:h-auto h-[250px] loading'} />
                <div className={'lg:w-[50%] flex flex-col justify-between gap-[20px]'}>
                    <div className={'w-full h-[20px] loading'} />
                    <div className={'h-[200px] loading w-full'} />
                    <div className={'flex lg:justify-between items-center gap-[10px]'}>
                        <div className={'w-[50px] loading rounded-full loading aspect-square'} />
                        <div className={'w-[50%] h-[20px] loading'} />
                        <div className={'profile-divider'} />
                        <div className={'w-[50%] h-[20px] loading'} />
                    </div>
                </div>
            </li>
        );
    }
}