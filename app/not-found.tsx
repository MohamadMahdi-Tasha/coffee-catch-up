// Codes By mahdi tasha
// Importing part
import {ReactNode} from "react";
import HolderComponent from "@/chunk/holderComponent";
import Link from "next/link";
import IconComponent from "@/chunk/iconComponent";

// Creating and exporting 404 page as default
export default function Page():ReactNode {
    // Returning JSX
    return (
        <HolderComponent>
            <h1>Sorry but the page your looking for is not found :)</h1>
            <Link href={'/'}>
                <IconComponent name={'chevron-left'} size={20} />
                Go Home
            </Link>
        </HolderComponent>
    );
}