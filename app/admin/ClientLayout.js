// ClientLayout.js
"use client";

import { SessionProvider } from 'next-auth/react';

export default function ClientLayout({ children, session }) {
    return (
        <SessionProvider session={session}>
            <main>{children}</main>
        </SessionProvider>
    );
}
