// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import HolderComponent from '@/chunk/holderComponent';
import Image from 'next/image';
import logoImage from '@/app/favicon.ico';
import Link from "next/link";

// Creating and exporting header component as default
export default function HeaderComponent():ReactNode {
    // Returning JSX
    return (
        <header className={'border-b border-b-black w-full bg-white/20'}>
            <HolderComponent className={'flex justify-between gap-[20px] items-center'}>
                <Link href={'/'} className={'flex items-center'}>
                    <Image src={logoImage.src} alt={'Logo of coffee catch up'} width={50} height={50} />
                    <span className={'text-[18px] truncate block text-black ml-[20px]'}>Coffee Catch Up</span>
                </Link>
                <Link className={'primary-btn'} href={'/login'}>
                    Log in
                </Link>
            </HolderComponent>
        </header>
    );
}