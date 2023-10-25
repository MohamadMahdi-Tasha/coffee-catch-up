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
        <HolderComponent className={'mt-[71px] min-h-[calc(100vh-71px)] flex justify-center items-center flex-col'}>
            <h1 className={'text-black font-bold mb-[20px] text-[30px] text-center'}>
                Sorry but the page your looking for <br/>
                is <span className={'font-black'}>not found</span> :)
            </h1>
            <Link href={'/'} className={'px-[30px] py-[7px] whitespace-nowrap border text-[15px] text-black border-black transition-all duration-500 hover:bg-black hover:text-white flex items-center'}>
                <span className={'mr-[20px]'}><IconComponent name={'chevron-left'} size={20} /></span>
                Go Home
            </Link>
        </HolderComponent>
    );
}