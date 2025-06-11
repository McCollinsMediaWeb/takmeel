"use client";

import LatestBlog from "@/components/BlogComponents/LatestBlogs";
import BlogListing from "@/components/BlogComponents/BlogListing";
import { useGlobalData } from "@/context/GlobalDataContext";
import { useTranslations } from "next-intl";

export default function NewsAndUpdatesClient() {
    const { news } = useGlobalData();
    const t = useTranslations('NewsAndUpdates');
    // const latest = news?.[0];
    // const rest = news?.slice(1);

    return (
        <>
            <section className="BlogPostWrap">
                {/* {latest && <LatestBlog blog={latest} />} */}
                {/* {rest && rest.length > 0 && <BlogListing blogs={rest} />} */}
                <LatestBlog t={t} />
                {news && news.length > 0 && <BlogListing t={t} blogs={news} />}
            </section>
            <section className="BlogPostWrap pd-common" dir="ltr">
                <div className="container1">
                    <script src="https://static.elfsight.com/platform/platform.js" async></script>
                    <div class="elfsight-app-7659e170-6a8a-44ef-8efb-c398b7349c05" data-elfsight-app-lazy></div>
                </div>
            </section>
        </>

    );
}
