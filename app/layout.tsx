// Code by mahdi tasha
// Importing part
import {ReactNode} from 'react';
import {Metadata} from "next";
import {Nunito} from "next/font/google";
import '@/app/index.css';
import {NextFont} from "next/dist/compiled/@next/font";
import HeaderComponent from "@/component/headerComponent";

// Defining Font
const NunitoFont:NextFont = Nunito({
    weight: ['300','400', '500', '700', '900'],
    subsets: ['latin']
})

// Defining metadata of pages
export const metadata:Metadata = {
    title: 'Coffee Catch Up - Daily blog app',
    description: 'Coffee Catch Up is daily my (Mahdi Tasha) daily weblog :))',
    viewport: 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0',
    themeColor: '#00000',
    openGraph: {
        title: 'Coffee Catch Up - Daily blog app',
        description: 'Coffee Catch Up is daily my (Mahdi Tasha) daily weblog :))',
        type: "website"
    },
    twitter:{
        title: 'Coffee Catch Up - Daily blog app',
        description: 'Coffee Catch Up is daily my (Mahdi Tasha) daily weblog :))',
    }
};

// Defining type of props
interface propsType {
    children: ReactNode;
}

// Creating and exporting layout component as default
export default function Layout({children}:propsType):ReactNode {
    // Returning JSX
    return (
        <html>
            <body className={`${NunitoFont.className} overflow-x-hidden overflow-y-auto`}>
                <HeaderComponent />
                {children}
            </body>
        </html>
    );
}