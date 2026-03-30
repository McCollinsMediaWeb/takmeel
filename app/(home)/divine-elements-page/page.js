export const metadata = {
    title: "Divine Elements | Takmeel Development",
    description:
        "Discover Divine Elements, a premier residential project by Takmeel Development. Explore luxury villas and townhouses in Dubai South, designed with purposeful living in mind.",
    alternates: {
        canonical: "https://www.takmeeldevelopment.com/divine-elements-page",
    }
};


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
import Component14 from "@/components/LandingPage/Component14/Component14";

export default async function DivineElementsPage() {
    const metaTags = await getMetaTags("/divine-elements-page");
    if (metaTags.length === 0 || !metaTags[0].metaContent) {
        // Add fallback if meta tags are not found
        console.warn("No meta tags found, using default");
    }
    const DataProjectDetails1 = {
        GalleryImages: [
            "divine/1.jpg",
            "divine/2.jpg",
            "divine/3.jpg",
            "divine/4.jpg",
            "divine/5.jpg",
            "divine/6.jpg",
            "divine/7.jpg",
            "divine/8.jpg",
            "divine/9.jpg",
            "divine/10.jpg",
            "divine/11.jpg",
            "divine/12.jpg",
            "divine/13.jpg",
            "divine/14.jpg",
            "divine/15.jpg",
            "divine/16.jpg",
            "divine/17.jpg",
            "divine/18.jpg",
            "divine/19.jpg",
            "divine/20.jpg",
            "divine/21.jpg",
            "divine/22.jpg",
            "divine/23.jpg",
            "divine/24.jpg",
            "divine/25.jpg",
            "divine/26.jpg",
            "divine/27.jpg",
            "divine/28.jpg",
            "divine/29.jpg",
            // "l1.jpg",
            // "l2.jpg",
            // "l3.jpg",
            // "l4.jpg",

            // "test6.png",
            // "test7.png",
            // "test8.png",
            // "test9.png",
            // "test10.png",
            // "test11.png",
            // "test12.png",
            // "test13.png"
            // "https://res.cloudinary.com/dje8fshak/image/upload/v1769768950/Screenshot_2026-01-30_at_3.44.41_PM_yiw5pt.png",
            // "https://res.cloudinary.com/dje8fshak/image/upload/v1769768950/Screenshot_2026-01-30_at_3.44.21_PM_kgaefq.png",
            // "https://res.cloudinary.com/dje8fshak/image/upload/v1769768950/Screenshot_2026-01-30_at_3.43.45_PM_q12uc6.png",
            // "https://res.cloudinary.com/dje8fshak/image/upload/v1769768950/Screenshot_2026-01-30_at_3.44.36_PM_rodh7p.png",
            // "https://res.cloudinary.com/dje8fshak/image/upload/v1769768950/Screenshot_2026-01-30_at_3.43.32_PM_vhwpde.png",
            // "https://res.cloudinary.com/dje8fshak/image/upload/v1769768950/Screenshot_2026-01-30_at_3.44.02_PM_i1c2q4.png"
        ],
    };

    const detailHeroData = {
        backgroundImage: "divine-elements-video.mp4",
        backgroundImageMobile: "divine-elements-video.mp4",
        brochureLink: "/Divine-Residencia/Brochure/Divine Residencia Studio City Brochure.pdf",
        placeholderImage: "/divine-element-frame.png",
    };


    return (
        <>
            {metaTags.length > 0 && metaTags[0].metaContent && (
                <MetaInjector metaContent={metaTags[0].metaContent} />
            )}
            <div className="DvnLnd">
                <Component14 {...detailHeroData} />
                {/* <Component1 /> */}
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