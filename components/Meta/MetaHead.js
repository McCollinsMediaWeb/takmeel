'use client';

import Head from 'next/head';

export default function MetaHead({ metaContent }) {
    return (
        <Head>
            <div dangerouslySetInnerHTML={{ __html: metaContent }} />
        </Head>
    );
}
