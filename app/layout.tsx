// Code by mahdi tasha
// Importing part
import {ReactNode} from 'react';
import {Metadata} from "next";
import '@/app/index.css';

// Defining metadata of pages
const metadata:Metadata = {
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
            <body>
                {children}
            </body>
        </html>
    );
}