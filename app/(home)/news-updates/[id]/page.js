import MetaInjector from '@/components/Meta/MetaInjector';
import NewsDetailsClient from './NewsDetailsClient';
import { getMetaTags } from '@/lib/getMetaTags';

export default async function NewsDetails({ params }) {
    const { id } = await params;
    const metaTags = await getMetaTags(`/news-updates/${id}`);
    if (metaTags.length === 0 || !metaTags[0].metaContent) {
        // Add fallback if meta tags are not found
        console.warn("No meta tags found, using default");
    }

    return (
        <>
            {metaTags.length > 0 && metaTags[0].metaContent && (
                <MetaInjector metaContent={metaTags[0].metaContent} />
            )}
            <NewsDetailsClient />
        </>
    );
};
