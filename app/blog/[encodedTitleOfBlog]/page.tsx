// Codes by mahdi tasha
// Forcing NextJs to render this component as client side component
'use client';

// Importing part
import {Dispatch, ReactNode, useEffect, useState} from "react";
import HolderComponent from "@/chunk/holderComponent";
import Link from "next/link";
import IconComponent from "@/chunk/iconComponent";
import useFirebase from "@/hook/useFirebase";
import {DatabaseReference, DataSnapshot, onValue, set} from "@firebase/database";
import {usePathname} from "next/navigation";
import Tilt from "react-parallax-tilt";
import Markdown from "react-markdown";
import remarkGfm from 'remark-gfm';

// Creating and exporting blog page as default
export default function Page():ReactNode {
    // Defining states of component
    const [isFetching, setFetching]:[boolean, Dispatch<boolean>] = useState(true);
    const [indexOfBlog, setIndexOfBlog]:[number, Dispatch<number>] = useState(0);
    const [blog, setBlog]:[{
        title: string,
        img: string,
        content: string,
        date: string,
        profileImg: string,
        profileName: string,
        views: number
    }, Dispatch<any>] = useState({
        title: '',
        img: '',
        content: '',
        date: '',
        profileImg: '',
        profileName: '',
        views: 0
    });

    // Getting pathname of page and getting blog title
    const pathname:string = usePathname();
    const splitedPathname:Array<string> = pathname.split('/');
    const titleOfBlog:string = atob(splitedPathname[2]);

    // Defining firebase
    const databaseRef:DatabaseReference = useFirebase('/blogs');

    // Using useEffect hook to get data from database
    useEffect(() => {
        onValue(databaseRef, (snapshot:DataSnapshot) => {
            const valueOfDatabase:{
                title: string,
                img: string,
                content: string,
                date: string,
                profileImg: string,
                profileName: string,
                views: number
            }[] = snapshot.val();

            const findedBlog:any = valueOfDatabase.find(item => item.title === titleOfBlog);

            setIndexOfBlog(valueOfDatabase.indexOf(findedBlog));

            setBlog(findedBlog);
            setFetching(false);
        })

        const viewsOfBlogDBRef:DatabaseReference = useFirebase(`/blogs/${indexOfBlog}/views`);
        set(viewsOfBlogDBRef, blog.views + 1);
    }, [])

    // Returning JSX
    return (
        <>
            <section className={'bg-theme-color/30'}>
                <HolderComponent className={'pt-[50px] pb-0'}>
                    <header className={'mb-[50px]'}>
                        <Link className={'text-[18px] font-normal text-black flex items-center'} href={'/'}>
                            <span className={'mr-[20px]'}><IconComponent name={'chevron-left'} size={20} /></span>
                            Back to Blog
                        </Link>
                    </header>
                    <main className={'mb-[100px]'}>
                        {
                            (isFetching)
                                ? (
                                    <>
                                        <div className={'w-full mb-[20px] h-[50px] loading'} />
                                        <div className={'flex items-center flex-wrap gap-[20px]'}>
                                            <div className={'w-[50px] loading rounded-full loading aspect-square'} />
                                            <div className={'w-[100px] h-[20px] loading'} />
                                            <div className={'profile-divider'} />
                                            <div className={'w-[100px] h-[20px] loading'} />
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <h1 className={'title'}>{blog.title}</h1>
                                        <div className={'flex items-center flex-wrap gap-[20px]'}>
                                            <img src={blog.profileImg} alt={blog.title} className={'profile-img'} />
                                            <span className={'profile-name'}>{blog.profileName}</span>
                                            <div className={'profile-divider'} />
                                            <time className={'profile-date'} dateTime={blog.date}>
                                                {new Date(blog.date).toLocaleDateString('en')}
                                            </time>
                                        </div>
                                    </>
                                )
                        }
                    </main>
                    <footer>
                        {
                            (isFetching)
                                ? <div className={'h-[500px] w-full loading'} />
                                : (
                                    <Tilt tiltAxis={'y'} className={'w-full h-[500px] relative'}>
                                        <img src={blog.img} alt={blog.title} className={'h-full w-full object-cover'} />
                                        <div className={'absolute top-0 left-0 w-full h-full bg-theme-color mix-blend-hue'} />
                                    </Tilt>
                                )
                        }
                    </footer>
                </HolderComponent>
            </section>
            <HolderComponent>
                <section>
                    <main className={'pt-[100px]'}>
                        {
                            (isFetching)
                                ? (
                                    <div>
                                        <div className={'w-full mb-[20px] loading h-[30px]'}></div>
                                        <div className={'w-full loading h-[150px]'}></div>
                                        <hr className={'border-black my-[30px]'} />
                                        <div className={'w-full mb-[20px] loading h-[30px]'}></div>
                                        <div className={'w-full loading h-[150px]'}></div>
                                    </div>
                                ) : <Markdown className={'markdown'} remarkPlugins={[remarkGfm]}>{blog.content.replace(/\\n/g, '\n')}</Markdown>
                        }
                    </main>
                </section>
            </HolderComponent>
        </>
    );
}
