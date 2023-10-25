// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import HolderComponent from "@/chunk/holderComponent";
import ArticleComponent from "@/component/articleComponent";
import IconComponent from "@/chunk/iconComponent";
import SmallArticleComponent from "@/component/smallArticleComponent";
import Link from "next/link";
import bgLightImage from '@/public/img/img-light.png';

// Creating and exporting home page as default
export default function HomePage():ReactNode {
    // Returning JSX
    return (
        <>
            <head><title>Coffee Catch Up - Daily blog app</title></head>
            <HolderComponent className={'lg:grid flex gap-[20px] flex-col-reverse grid-cols-3 mt-[71px] relative'}>
                <img src={bgLightImage.src} alt="Image of simple lighting" className={'absolute w-full lg:-top-[200px] top-0 lg:-left-[500px] left-[-200px] opacity-50 -z-[1]'}/>
                <img src={bgLightImage.src} alt="Image of simple lighting" className={'absolute w-full top-[700px] lg:-right-[300px] -right-[200px] opacity-50 -z-[1]'}/>
                <section className={'col-span-2 sm:border-r border-black lg:pt-[50px]'}>
                    <header className={'pb-[50px] border-b border-b-black'}>
                        <h1 className={'title-no-blog'}>DISCOVER OUR LATEST POSTS</h1>
                    </header>
                    <main className={'border-b border-b-black'}>
                        <ul className={'[&>li:not(:last-of-type)]:border-b [&>li:not(:last-of-type)]:border-b-black'}>
                            <ArticleComponent link={''} title={'title 1'} img={''} date={'1/1/1'} profileImg={''} profileName={''}>asdasd</ArticleComponent>
                            <ArticleComponent link={''} title={'title 1'} img={''} date={'1/1/1'} profileImg={''} profileName={''}>asdasd</ArticleComponent>
                            <ArticleComponent link={''} title={'title 1'} img={''} date={'1/1/1'} profileImg={''} profileName={''}>asdasd</ArticleComponent>
                        </ul>
                    </main>
                </section>
                <aside className={'col-span-1 pt-[50px]'}>
                    <header className={'mb-[30px]'}>
                        <form action="#">
                            <div className={'relative'}>
                                <input className={'py-[10px] w-full pl-[50px] pr-[20px] [&~label]:focus:text-black border border-black/30 focus:border-black placeholder:transition-all placeholder:duration-500 transition-all duration-500 text-black outline-0 placeholder:text-[15px] placeholder:font-light placeholder:text-black/50 focus:placeholder:text-black block rounded-[50rem]'} type="text" placeholder={'Read About ...'} required id={'search-input'} name={'search-input'} />
                                <label className={'absolute top-[50%] text-black/30 transition-all duration-500 left-[20px] -translate-y-[50%]'} htmlFor="search-input">
                                    <IconComponent name={'search'} size={18} />
                                </label>
                            </div>
                        </form>
                    </header>
                    <main className={'mb-[30px]'}>
                        <h5 className={'text-[20px] font-extrabold mb-[20px]'}>TOP POSTS</h5>
                        <ul className={'[&>li]:border-b [&>li]:border-b-black lg:block flex gap-[20px] overflow-auto'}>
                            <SmallArticleComponent link={'asdasd'} title={'asdasd'} img={'asd'} />
                            <SmallArticleComponent link={'asdasd'} title={'asdasd'} img={'asd'} />
                            <SmallArticleComponent link={'asdasd'} title={'asdasd'} img={'asd'} />
                            <SmallArticleComponent link={'asdasd'} title={'asdasd'} img={'asd'} />
                            <SmallArticleComponent link={'asdasd'} title={'asdasd'} img={'asd'} />
                        </ul>
                    </main>
                    <footer className={'lg:block hidden'}>
                        <h5 className={'text-[20px] font-extrabold mb-[20px]'}>FOLLOW ME</h5>
                        <ul className={'flex flex-wrap gap-[10px]'}>
                            <li>
                                <Link className={'social-link'} href={'https://www.instagram.com/mahditasha_/'}>
                                    <IconComponent name={'instagram'} size={20} />
                                </Link>
                            </li>
                            <li>
                                <Link className={'social-link'} href={'https://github.com/MohamadMahdi-Tasha'}>
                                    <IconComponent name={'github'} size={20} />
                                </Link>
                            </li>
                            <li>
                                <Link className={'border transition-all duration-500 hover:bg-black hover:text-white border-black rounded-[50rem] whitespace-nowrap flex justify-center items-center h-[50px] px-[30px] text-[15px] font-bold'} href={'https://github.com/MohamadMahdi-Tasha'}>
                                    My personal website
                                </Link>
                            </li>
                        </ul>
                    </footer>
                </aside>
            </HolderComponent>
        </>
    );
}