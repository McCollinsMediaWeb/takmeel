export const metadata = {
    title: "Careers at Takmeel | Join a Leading UAE Real Estate Developer",
    description:
        "Build your future with Takmeel. Explore career opportunities in one of the UAE’s most innovative and fast-growing real estate development firms.",
    alternates: {
        canonical: "https://www.takmeeldevelopment.com/careers",
    }
};


import CareerFirstBanner from "@/components/CareerComponents/CareerFirstBanner";
import GetInTouchForm from "@/components/CareerComponents/GetInTouchForm";
import WhyWorkTogether from "@/components/CareerComponents/WhyWorkTogether";
import Footer from "@/components/footer/footer";
import FooterBottom from "@/components/footerBottom/footerBottom";
import MetaInjector from "@/components/Meta/MetaInjector";
import { getMetaTags } from "@/lib/getMetaTags";
import JobListing from "./JobListing";

// export async function generateMetadata() {
//     const metaTags = await getMetaTags("/careers");
//     const metaContent = metaTags?.[0]?.metaContent || "";

//     // Parse title
//     const titleMatch = metaContent.match(/<title[^>]*>(.*?)<\/title>/i);
//     const title = titleMatch?.[1] || "Careers | Takmeel Development";

//     // Parse description
//     const descMatch = metaContent.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i);
//     const description = descMatch?.[1] || "";

//     return {
//         title,
//         description,
//         alternates: {
//             canonical: "https://www.takmeeldevelopment.com/careers",
//         },
//     };
// }

export default async function Careers() {
    // const metaTags = await getMetaTags("/careers");
    // if (metaTags.length === 0 || !metaTags[0].metaContent) {
    //     // Add fallback if meta tags are not found
    //     console.warn("No meta tags found, using default");
    // }

    return (
        <>
            {/* {metaTags.length > 0 && metaTags[0].metaContent && (
                <MetaInjector metaContent={metaTags[0].metaContent} />
            )} */}
            <div>
                <CareerFirstBanner />
                <JobListing />
                <WhyWorkTogether />
                <GetInTouchForm />
                <Footer />
                <FooterBottom />
            </div>
        </>
    );
}
