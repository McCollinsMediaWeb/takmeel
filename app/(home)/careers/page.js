import CareerFirstBanner from "@/components/CareerComponents/CareerFirstBanner";
import GetInTouchForm from "@/components/CareerComponents/GetInTouchForm";
import WhyWorkTogether from "@/components/CareerComponents/WhyWorkTogether";
import Footer from "@/components/footer/footer";
import FooterBottom from "@/components/footerBottom/footerBottom";
import MetaInjector from "@/components/Meta/MetaInjector";
import { getMetaTags } from "@/lib/getMetaTags";
import JobListing from "./JobListing";

export default async function Careers() {
    const metaTags = await getMetaTags("/careers");
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
                <CareerFirstBanner />
                <JobListing/>
                <WhyWorkTogether />
                <GetInTouchForm />
                <Footer />
                <FooterBottom />
            </div>
        </>
    );
}
