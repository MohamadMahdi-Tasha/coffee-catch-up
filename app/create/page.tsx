// Codes by mahdi tasha
// Forcing NextJS to render this component as client side component
'use client';

// Importing part
import {Dispatch, ReactNode, useEffect, useState} from "react";
import HolderComponent from "@/chunk/holderComponent";
import IconComponent from "@/chunk/iconComponent";
import {DatabaseReference} from "@firebase/database";
import useFirebase from "@/hook/useFirebase";
import {Auth, getAuth, onAuthStateChanged} from "@firebase/auth";
import Link from "next/link";
import Editor from '@monaco-editor/react';

// Creating and exporting create blog page as default
export default function Page():ReactNode {
    // Defining states of component
    const [isFetching, setFetching]:[boolean, Dispatch<boolean>] = useState(true);
    const [isUserLoggedIn, setUserLoggedIn]:[boolean, Dispatch<boolean>] = useState(false);
    const [isUserAdmin, setUserAdmin]:[boolean, Dispatch<boolean>] = useState(false);

    // Defining firebase
    const databaseRef:DatabaseReference = useFirebase('/');

    // Using useEffect hook to check if is user logged in and he is admin
    useEffect(() => {
        const auth:Auth = getAuth();

        onAuthStateChanged(auth, (user) => {
            setFetching(false);

            if (user) {
                setUserLoggedIn(true);

                (user.email === "imwhdiiii@gmail.com")
                    ? setUserAdmin(true)
                    : setUserAdmin(false);
            } else {
                setUserLoggedIn(false);
                setUserAdmin(false);
            }
        })
    }, [])

    // Returning JSX
    return (
        <HolderComponent>
            {
                (isFetching)
                    ? <div className={'flex justify-center items-center'}><IconComponent size={50} name={'loading'} /></div>
                    : (!isUserLoggedIn)
                        ? (
                            <div className={'flex justify-center items-center flex-col'}>
                                <h1 className={'text-[40px] font-black text-center mb-[20px]'}>First Log In.</h1>
                                <Link className={'primary-btn'} href={'/login'}>Login</Link>
                            </div>
                        ) : (!isUserAdmin)
                            ? <h1 className={'text-[40px] font-black text-center mb-[20px]'}>You must be admin to add blogs, sorry.</h1>
                            : (
                                <form action={'#'}>
                                    <h1 className={'title-no-blog'}>Create blog:</h1>
                                    <div>
                                        <div>
                                            <label htmlFor="title-input">Title of the blog:</label>
                                            <input type="text" placeholder={'Examaples like: Todays Todo List :))'} required id={'title-input'} name={'title-input'} />
                                        </div>
                                        <div>
                                            <label htmlFor="img-input">Title of the blog:</label>
                                            <input type="text" placeholder={'https:www. and ...... :))'} required id={'img-input'} name={'img-input'} />
                                        </div>
                                        <Editor theme={'vs-dark'} height="500px" defaultLanguage="markdown" defaultValue="# Header 1" />
                                        <button className={'primary-btn w-full'}>Submit</button>
                                    </div>
                                </form>
                            )
            }
        </HolderComponent>
    );
}