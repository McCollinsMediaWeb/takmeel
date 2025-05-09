import CareerFirstBanner from "@/components/CareerComponents/CareerFirstBanner";
import GetInTouchForm from "@/components/CareerComponents/GetInTouchForm";
import WhyWorkTogether from "@/components/CareerComponents/WhyWorkTogether";
import MetaInjector from "@/components/Meta/MetaInjector";
import { getMetaTags } from "@/lib/getMetaTags";

export default async function Careers() {
    const metaTags = await getMetaTags("/careers");
    if (metaTags.length === 0 || !metaTags[0].metaContent) {
        // Add fallback if meta tags are not found
        console.warn("No meta tags found, using default");
    }

    return (
        <>
            <MetaInjector metaContent={metaTags[0].metaContent} />
            <div>
                <CareerFirstBanner />
                <WhyWorkTogether />
                <GetInTouchForm />
            </div>
        </>
    );
}
