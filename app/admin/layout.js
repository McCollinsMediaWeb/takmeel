// "use client";

import { getServerSession } from 'next-auth';
// import SessionProvider from '@/providers/SessionProvider';
// import { SessionProvider } from './providers/SessionProvider.js';
// import { SessionProvider } from 'next-auth/react';
import ClientLayout from './ClientLayout';
import styles from './style.module.css';

export default async function AdminLayout({ children }) {

    const session = await getServerSession();

    return (

        <html lang="en">
            <body className={styles.customFontFamily} >
                {/* <SessionProvider session={session}> */}
                <ClientLayout session={session}>
                    <main>{children}</main>
                </ClientLayout>
                {/* </SessionProvider> */}
            </body>
        </html>

    );
}
