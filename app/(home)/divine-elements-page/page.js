import { getMetaTags } from "@/lib/getMetaTags";
import MetaInjector from "@/components/Meta/MetaInjector";

export default async function DivineElementsPage() {
    const metaTags = await getMetaTags("/divine-elements-page");
    if (metaTags.length === 0 || !metaTags[0].metaContent) {
        // Add fallback if meta tags are not found
        console.warn("No meta tags found, using default");
    }

    return (
        <>
            {metaTags.length > 0 && metaTags[0].metaContent && (
                <MetaInjector metaContent={metaTags[0].metaContent} />
            )}
            <div>
                <h2>Divine Elements Page</h2>
            </div>
        </>
    );
}