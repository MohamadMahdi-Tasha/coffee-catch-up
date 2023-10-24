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
        <header>
            <HolderComponent>
                <Link href={'/'}>
                    <Image src={logoImage.src} alt={'Logo of coffee catch up'} width={50} height={50} />
                    <span>Coffee Catch Up</span>
                </Link>
                <Link href={'/login'}>Log in</Link>
            </HolderComponent>
        </header>
    );
}