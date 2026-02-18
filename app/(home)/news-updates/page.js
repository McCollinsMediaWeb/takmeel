// "use client";

import { getMetaTags } from "@/lib/getMetaTags";
import NewsAndUpdatesClient from "./NewsUpdatesClient";
import MetaInjector from "@/components/Meta/MetaInjector";
import Footer from "@/components/footer/footer";
import FooterBottom from "@/components/footerBottom/footerBottom";

export async function generateMetadata() {
  const metaTags = await getMetaTags("/news-updates");
  const metaContent = metaTags?.[0]?.metaContent || "";

  // Parse title
  const titleMatch = metaContent.match(/<title[^>]*>(.*?)<\/title>/i);
  const title = titleMatch?.[1] || "News & Updates | Takmeel Development";

  // Parse description
  const descMatch = metaContent.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i);
  const description = descMatch?.[1] || "";

  return {
    title,
    description,
    alternates: {
      canonical: "https://www.takmeeldevelopment.com/news-updates",
    },
  };
}

export default async function NewsAndUpdates() {
  // const metaTags = await getMetaTags("/news-updates");
  // if (metaTags.length === 0 || !metaTags[0].metaContent) {
  //   console.warn("No meta tags found, using default");
  // }

  return (
    <>
      {/* {metaTags.length > 0 && metaTags[0].metaContent && (
        <MetaInjector metaContent={metaTags[0].metaContent} />
      )} */}
      <NewsAndUpdatesClient />
      <Footer />
      <FooterBottom />
    </>
  );
}
