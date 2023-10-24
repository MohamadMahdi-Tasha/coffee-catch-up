// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import HolderComponent from "@/chunk/holderComponent";
import ArticleComponent from "@/component/articleComponent";

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
                            <ArticleComponent title={'title 1'} img={''} date={'1/1/1'} profileImg={''} profileName={''}>asdasd</ArticleComponent>
                        </ul>
                    </main>
                </section>
                <section>

                </section>
            </HolderComponent>
        </>
    );
}