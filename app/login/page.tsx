// Codes by mahdi tasha
// Forcing NextJS To render this component as client side component
'use client';

// Importing part
import {Dispatch, ReactNode, useEffect, useState} from "react";
import IconComponent from "@/chunk/iconComponent";
import {Auth, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithRedirect} from "@firebase/auth";
import {DatabaseReference} from "@firebase/database";
import useFirebase from "@/hook/useFirebase";
import HolderComponent from "@/chunk/holderComponent";

// Creating and exporting login page as default
export default function Page():ReactNode {
    // Defining states of component
    const [isFetching, setFetching]:[boolean, Dispatch<boolean>] = useState(true);
    const [isUserLoggedIn, setUserLoggedIn]:[boolean, Dispatch<boolean>] = useState(false);

    // Defining firebase
    const databaseRef:DatabaseReference = useFirebase('/');

    // Using useEffect to log in the user if he isn't already
    useEffect(() => {
        setFetching(false);

        const auth:Auth = getAuth();

        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserLoggedIn(true);
            } else {
                const googleAuthProvider:GoogleAuthProvider = new GoogleAuthProvider();

                setUserLoggedIn(false);
                signInWithRedirect(auth, googleAuthProvider)
            }
        })
    }, [])

    // Returning JSX
    return (
        <div className={'min-h-[calc(100vh-100px)] w-full bg-gradient-to-b from-theme-color to-white'}>
            <HolderComponent className={'flex justify-center items-center flex-col'}>
                {
                    (isFetching)
                        ? <IconComponent size={50} name={'loading'} />
                        : (isUserLoggedIn)
                            ? <h1 className={'text-[40px] font-black text-center mb-[20px]'}>Your logged in already.</h1>
                            : <IconComponent size={50} name={'loading'} />
                }
            </HolderComponent>
        </div>
    );
}