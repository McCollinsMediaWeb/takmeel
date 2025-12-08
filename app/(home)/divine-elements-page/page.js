import { getMetaTags } from "@/lib/getMetaTags";
import MetaInjector from "@/components/Meta/MetaInjector";
import Component1 from "@/components/LandingPage/Component1/Component1";
import Component2 from "@/components/LandingPage/Component2/Component2";
import Component3 from "@/components/LandingPage/Component3/Component3";
import Component4 from "@/components/LandingPage/Component4/Component4";
import Component5 from "@/components/LandingPage/Component5/Component5";
import Component6 from "@/components/LandingPage/Component6/Component6";

export default async function DivineElementsPage() {
    const metaTags = await getMetaTags("/divine-elements-page");
    if (metaTags.length === 0 || !metaTags[0].metaContent) {
        // Add fallback if meta tags are not found
        console.warn("No meta tags found, using default");
    }
    const DataProjectDetails1 = {
        GalleryImages: [
            "l1.jpg",
            "l2.jpg",
            "l3.jpg",
            "l4.jpg",
        ],
    };
    return (
        <>
            {metaTags.length > 0 && metaTags[0].metaContent && (
                <MetaInjector metaContent={metaTags[0].metaContent} />
            )}
            <Component1/>
            <Component2/>
            <Component3/>
            <Component4/>
            <Component5/>
            <Component6 {...DataProjectDetails1}/>
        </>
    );
}