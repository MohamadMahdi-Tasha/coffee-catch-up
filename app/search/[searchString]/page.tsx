// Codes by mahdi tasha
// Forcing NextJs to render this component as client side component
'use client';

// Importing part
import {ReactNode, useState, useEffect, Dispatch} from "react";
import {usePathname} from "next/navigation";
import HolderComponent from "@/chunk/holderComponent";
import {DatabaseReference, DataSnapshot, onValue} from "@firebase/database";
import useFirebase from "@/hook/useFirebase";
import ArticleComponent from "@/component/articleComponent";

// Creating and exporting search page as default
export default function Page():ReactNode {
    // Defining states of component
    const [isFetching, setFetching]:[boolean, Dispatch<boolean>] = useState(true);
    const [data, setData]:[{
        title: string,
        img: string,
        content: string,
        date: string,
        profileImg: string,
        profileName: string,
        views: number
    }[], Dispatch<Array<any>>] = useState([{
        title: '',
        img: '',
        content: '',
        date: '',
        profileImg: '',
        profileName: '',
        views: 0
    }]);

    // Getting pathname of page
    const pathname:string = usePathname();
    const splitedPathname:Array<string> = pathname.split('/');
    const pathnameToSet:string = splitedPathname[2];

    // Defining firebase
    const databaseRef:DatabaseReference = useFirebase('/blogs');

    // Using useEffect hook to get data from database
    useEffect(() => {
        onValue(databaseRef, (snapshot:DataSnapshot) => {
            const arrayToSet:{
                title: string,
                img: string,
                content: string,
                date: string,
                profileImg: string,
                profileName: string,
                views: number
            }[] = [];

            const returnedData:{
                title: string,
                img: string,
                content: string,
                date: string,
                profileImg: string,
                profileName: string,
                views: number
            }[] = snapshot.val();

            returnedData.forEach(item => {
                if (item.title.toLowerCase().includes(pathnameToSet.toLowerCase())) {
                    arrayToSet.push(item);
                }
            })

            setFetching(false);
            setData(arrayToSet);
        })
    }, [])

    // Returning JSX
    return (
        <HolderComponent>
            <section>
                <header className={'mb-[50px]'}>
                    <h1 className={'title-no-blog'}>Result of your search:</h1>
                </header>
                <main>
                    {
                        (isFetching)
                            ? (
                                <ul className={'[&>li:not(:last-of-type)]:border-b [&>li:not(:last-of-type)]:border-b-black'}>
                                    <ArticleComponent link={''} title={''} img={''} date={''} profileImg={''} profileName={''} children={''} loading />
                                    <ArticleComponent link={''} title={''} img={''} date={''} profileImg={''} profileName={''} children={''} loading />
                                    <ArticleComponent link={''} title={''} img={''} date={''} profileImg={''} profileName={''} children={''} loading />
                                    <ArticleComponent link={''} title={''} img={''} date={''} profileImg={''} profileName={''} children={''} loading />
                                    <ArticleComponent link={''} title={''} img={''} date={''} profileImg={''} profileName={''} children={''} loading />
                                </ul>
                            ) : (
                                <ul className={'[&>li:not(:last-of-type)]:border-b [&>li:not(:last-of-type)]:border-b-black'}>
                                    {
                                        (data["0"] === undefined)
                                            ? <h1 className={'text-[30px] font-bold text-black my-[30px] text-center'}>We find no blogs about that topic.</h1>
                                            : (
                                                <ul className={'[&>li:not(:last-of-type)]:border-b [&>li:not(:last-of-type)]:border-b-black'}>
                                                    {
                                                        data.toReversed().map((item, index) => (
                                                            <ArticleComponent
                                                                key={index}
                                                                link={`blog/${btoa(item.title)}`}
                                                                title={item.title}
                                                                img={item.img}
                                                                date={item.date}
                                                                profileImg={item.profileImg}
                                                                profileName={item.profileName}
                                                            >
                                                                {item.content}
                                                            </ArticleComponent>
                                                        ))
                                                    }
                                                </ul>
                                            )
                                    }
                                </ul>
                            )
                    }
                </main>
            </section>
        </HolderComponent>
    );
}