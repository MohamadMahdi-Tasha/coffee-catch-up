// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import HolderComponent from "@/chunk/holderComponent";
import Link from "next/link";
import IconComponent from "@/chunk/iconComponent";

// Creating and exporting blog page as default
export default function Page():ReactNode {
    // Returning JSX
    return (
        <>
            <head>
                <title>asdasdasda</title>
            </head>
            <section className={'mt-[72px] bg-theme-color/30'}>
                <HolderComponent className={'pt-[50px] pb-0'}>
                    <header className={'mb-[50px]'}>
                        <Link className={'text-[18px] font-normal text-black flex items-center'} href={'/'}>
                            <span className={'mr-[20px]'}><IconComponent name={'chevron-left'} size={20} /></span>
                            Back to Blog
                        </Link>
                    </header>
                    <main className={'mb-[100px]'}>
                        <h1 className={'title-no-blog'}>Title</h1>
                        <div className={'flex items-center flex-wrap gap-[20px]'}>
                            <img src={'sdasd'} alt={'asdasdasda'} className={'profile-img'} />
                            <span className={'profile-name'}>{'asdasdasdsad'}</span>
                            <div className={'profile-divider'} />
                            <time className={'profile-date'} dateTime={'asdasddasd'}>{'asdasdasd'}</time>
                        </div>
                    </main>
                    <footer>
                        <img src={''} alt={''} className={'h-[500px] w-full bg-red-600'} />
                    </footer>
                </HolderComponent>
            </section>
            <HolderComponent>
                <section>
                    <main>
                        <p>klasjdklajskldjklasjldkjaskljdlkasjdlaskljdklasd</p>
                    </main>
                </section>
            </HolderComponent>
        </>
    );
}
