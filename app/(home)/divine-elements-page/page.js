import { getMetaTags } from "@/lib/getMetaTags";
import MetaInjector from "@/components/Meta/MetaInjector";
import Component1 from "@/components/LandingPage/Component1/Component1";
import Component2 from "@/components/LandingPage/Component2/Component2";
import Component3 from "@/components/LandingPage/Component3/Component3";
import Component4 from "@/components/LandingPage/Component4/Component4";
import Component5 from "@/components/LandingPage/Component5/Component5";
import Component6 from "@/components/LandingPage/Component6/Component6";
import Component7 from "@/components/LandingPage/Component7/Component7";
import Component8 from "@/components/LandingPage/Component8/Component8";
import Component9 from "@/components/LandingPage/Component9/Component9";
import Component10 from "@/components/LandingPage/Component10/Component10";
import Component11 from "@/components/LandingPage/Component11/Component11";
import Component12 from "@/components/LandingPage/Component12/Component12";
import Component13 from "@/components/LandingPage/Component13/Component13";

export default async function DivineElementsPage() {
    const metaTags = await getMetaTags("/divine-elements-page");
    if (metaTags.length === 0 || !metaTags[0].metaContent) {
        // Add fallback if meta tags are not found
        console.warn("No meta tags found, using default");
    }
    const DataProjectDetails1 = {
        GalleryImages: [
            // "l1.jpg",
            // "l2.jpg",
            // "l3.jpg",
            // "l4.jpg",

            "test6.png",
            "test7.png",
            "test8.png",
            "test9.png",
            "test10.png",
            "test11.png",
            "test12.png",
            "test13.png"
            // "https://res.cloudinary.com/dje8fshak/image/upload/v1769768950/Screenshot_2026-01-30_at_3.44.41_PM_yiw5pt.png",
            // "https://res.cloudinary.com/dje8fshak/image/upload/v1769768950/Screenshot_2026-01-30_at_3.44.21_PM_kgaefq.png",
            // "https://res.cloudinary.com/dje8fshak/image/upload/v1769768950/Screenshot_2026-01-30_at_3.43.45_PM_q12uc6.png",
            // "https://res.cloudinary.com/dje8fshak/image/upload/v1769768950/Screenshot_2026-01-30_at_3.44.36_PM_rodh7p.png",
            // "https://res.cloudinary.com/dje8fshak/image/upload/v1769768950/Screenshot_2026-01-30_at_3.43.32_PM_vhwpde.png",
            // "https://res.cloudinary.com/dje8fshak/image/upload/v1769768950/Screenshot_2026-01-30_at_3.44.02_PM_i1c2q4.png"
        ],
    };
    return (
        <>
            {metaTags.length > 0 && metaTags[0].metaContent && (
                <MetaInjector metaContent={metaTags[0].metaContent} />
            )}
            <div className="DvnLnd">
                <Component1 />
                <Component2 />
                <Component3 />
                <Component4 />
                <Component5 />
                <Component6 {...DataProjectDetails1} />
                <Component7 />
                <Component8 />
                <Component9 />
                <Component10 />
                <Component13 />
                <Component11 />
                <Component12 />
            </div>
        </>
    );
}