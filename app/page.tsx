// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import HolderComponent from "@/chunk/holderComponent";
import ArticleComponent from "@/component/articleComponent";
import IconComponent from "@/chunk/iconComponent";
import SmallArticleComponent from "@/component/smallArticleComponent";
import Link from "next/link";

// Creating and exporting home page as default
export default function HomePage():ReactNode {
    // Returning JSX
    return (
        <HolderComponent className={'grid grid-cols-3 mt-[71px] min-h-screen'}>
            <section className={'col-span-2 border-r border-black pt-[50px]'}>
                <header className={'pb-[50px] border-b border-b-black'}>
                    <h1 className={'text-[50px] font-extrabold'}>DISCOVER OUR LATEST POSTS</h1>
                </header>
                <main className={'border-b border-b-black'}>
                    <ul className={'[&>li:not(:last-of-type)]:border-b [&>li:not(:last-of-type)]:border-b-black'}>
                        <ArticleComponent link={''} title={'title 1'} img={''} date={'1/1/1'} profileImg={''} profileName={''}>asdasd</ArticleComponent>
                        <ArticleComponent link={''} title={'title 1'} img={''} date={'1/1/1'} profileImg={''} profileName={''}>asdasd</ArticleComponent>
                        <ArticleComponent link={''} title={'title 1'} img={''} date={'1/1/1'} profileImg={''} profileName={''}>asdasd</ArticleComponent>
                    </ul>
                </main>
            </section>
            <aside className={'col-span-1 pt-[50px] px-[20px]'}>
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
                    <ul className={'[&>li]:border-b [&>li]:border-b-black'}>
                        <SmallArticleComponent link={'asdasd'} title={'asdasd'} img={'asd'} />
                        <SmallArticleComponent link={'asdasd'} title={'asdasd'} img={'asd'} />
                        <SmallArticleComponent link={'asdasd'} title={'asdasd'} img={'asd'} />
                        <SmallArticleComponent link={'asdasd'} title={'asdasd'} img={'asd'} />
                        <SmallArticleComponent link={'asdasd'} title={'asdasd'} img={'asd'} />
                    </ul>
                </main>
                <footer>
                    <h5 className={'text-[20px] font-extrabold mb-[20px]'}>FOLLOW ME</h5>
                    <ul className={'flex flex-wrap gap-[10px]'}>
                        <li>
                            <Link className={'w-[50px] h-[50px] aspect-square border border-black rounded-full flex justify-center items-center'} href={'https://www.instagram.com/mahditasha_/'}>
                                <IconComponent name={'instagram'} size={20} />
                            </Link>
                        </li>
                        <li>
                            <Link className={'w-[50px] h-[50px] aspect-square border border-black rounded-full flex justify-center items-center'} href={'https://github.com/MohamadMahdi-Tasha'}>
                                <IconComponent name={'github'} size={20} />
                            </Link>
                        </li>
                        <li>
                            <Link className={'border border-black rounded-[50rem] whitespace-nowrap flex justify-center items-center h-[50px] px-[30px] text-[15px] font-bold'} href={'https://github.com/MohamadMahdi-Tasha'}>
                                My personal website
                            </Link>
                        </li>
                    </ul>
                </footer>
            </aside>
        </HolderComponent>
    );
}