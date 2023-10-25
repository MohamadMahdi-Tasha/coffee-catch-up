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
        <header className={'border-b border-b-black fixed top-0 left-0 w-full bg-white/20 backdrop-blur z-[100]'}>
            <HolderComponent className={'flex justify-between gap-[20px] items-center'}>
                <Link href={'/'} className={'flex items-center'}>
                    <Image src={logoImage.src} alt={'Logo of coffee catch up'} width={50} height={50} />
                    <span className={'text-[18px] truncate block text-black ml-[20px]'}>Coffee Catch Up</span>
                </Link>
                <Link className={'px-[30px] py-[7px] whitespace-nowrap border text-[15px] text-black border-black transition-all duration-500 hover:bg-black hover:text-white'} href={'/login'}>
                    Log in
                </Link>
            </HolderComponent>
        </header>
    );
}