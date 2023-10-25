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
        <>
            <HolderComponent>
                <section>
                    <header>
                        <h1>DISCOVER OUR LATEST POSTS</h1>
                    </header>
                    <main>
                        <ul>
                            <ArticleComponent link={''} title={'title 1'} img={''} date={'1/1/1'} profileImg={''} profileName={''}>asdasd</ArticleComponent>
                        </ul>
                    </main>
                </section>
                <aside>
                    <header>
                        <form action="#">
                            <div>
                                <label htmlFor="search-input"><IconComponent name={'search'} size={12} /></label>
                                <input type="text" placeholder={'Read About ...'} required id={'search-input'} name={'search-input'} />
                            </div>
                        </form>
                    </header>
                    <main>
                        <h5>TOP POSTS</h5>
                        <ul>
                            <SmallArticleComponent link={''} title={''} img={''} />
                        </ul>
                    </main>
                    <footer>
                        <h5>FOLLOW ME</h5>
                        <ul>
                            <li>
                                <Link href={'https://www.instagram.com/mahditasha_/'}>
                                    <IconComponent name={'instagram'} size={20} />
                                </Link>
                            </li>
                            <li>
                                <Link href={'https://github.com/MohamadMahdi-Tasha'}>
                                    <IconComponent name={'github'} size={20} />
                                </Link>
                            </li>
                            <li><Link href={'https://github.com/MohamadMahdi-Tasha'}>My personal website</Link></li>
                        </ul>
                    </footer>
                </aside>
            </HolderComponent>
        </>
    );
}