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
        <HolderComponent>
            <section>
                <header>
                    <Link href={'/'}>
                        <IconComponent name={'chevron-left'} size={20} />
                        Back to Blog
                    </Link>
                </header>
                <main>
                    <h1>Title</h1>
                    <div>
                        {/*Todo: Replaced With Img*/}
                        <div />
                        <h5>mmd</h5>
                        <h6><time dateTime={'1/1/1'}>1/1/1</time></h6>
                    </div>
                </main>
                <footer>
                    <div />
                </footer>
            </section>
            <section>
                <p>klasjdklajskldjklasjldkjaskljdlkasjdlaskljdklasd</p>
            </section>
        </HolderComponent>
    );
}
