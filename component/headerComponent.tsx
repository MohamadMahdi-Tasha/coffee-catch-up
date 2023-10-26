// Codes by mahdi tasha
// Forcing NextJS to render this component as client side component
'use client';

// Importing part
import {ReactNode, useState, useEffect, Dispatch} from "react";
import HolderComponent from '@/chunk/holderComponent';
import Image from 'next/image';
import logoImage from '@/app/favicon.ico';
import Link from "next/link";
import {Auth, getAuth, onAuthStateChanged} from "@firebase/auth";
import {DatabaseReference} from "@firebase/database";
import useFirebase from "@/hook/useFirebase";

// Creating and exporting header component as default
export default function HeaderComponent():ReactNode {
    // Defining states of component
    const [isUserLoggedIn, setUserLoggedIn]:[boolean, Dispatch<boolean>] = useState(false);
    const [isFetching, setFetching]:[boolean, Dispatch<boolean>] = useState(true);
    const [imgOfUser, setImgUser]:[string, Dispatch<string>] = useState('');

    // Defining firebase
    const databaseRef:DatabaseReference = useFirebase('/');
    const auth:Auth = getAuth();

    // Using useEffect hook to check if user is logged in
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setFetching(false);

            if (user) {
                (user.photoURL)
                    ? setImgUser(user.photoURL)
                    : setImgUser('')

                setUserLoggedIn(true);
            } else {
                setUserLoggedIn(false)
                setImgUser('');
            }
        })
    }, [])

    // Returning JSX
    return (
        <header className={'border-b border-b-black w-full bg-white/20'}>
            <HolderComponent className={'flex justify-between gap-[20px] items-center'}>
                <Link href={'/'} className={'flex items-center'}>
                    <Image src={logoImage.src} alt={'Logo of coffee catch up'} width={50} height={50} />
                    <span className={'text-[18px] truncate block text-black ml-[20px]'}>Coffee Catch Up</span>
                </Link>
                {
                    (isFetching)
                        ? <div className={'w-[50px] h-[50px] rounded-full aspect-square loading'} />
                        : (isUserLoggedIn)
                            ? <img tabIndex={0} onClick={() => auth.signOut()} src={imgOfUser} alt="Profile of user" className={'w-[50px] cursor-pointer h-[50px] aspect-square rounded-full'} />
                            : <Link className={'primary-btn'} href={'/login'}>Log in</Link>
                }
            </HolderComponent>
        </header>
    );
}