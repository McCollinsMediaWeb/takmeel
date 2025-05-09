"use client";

import LatestBlog from "@/components/BlogComponents/LatestBlogs";
import BlogListing from "@/components/BlogComponents/BlogListing";
import { useGlobalData } from "@/context/GlobalDataContext";

export default function NewsAndUpdatesClient() {
    const { news } = useGlobalData();
    const latest = news?.[0];
    const rest = news?.slice(1);

    return (
        <section className="BlogPostWrap">
            {latest && <LatestBlog blog={latest} />}
            {rest && rest.length > 0 && <BlogListing blogs={rest} />}
        </section>
    );
}
