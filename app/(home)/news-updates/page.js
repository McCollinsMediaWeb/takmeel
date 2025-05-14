// "use client";

import { getMetaTags } from "@/lib/getMetaTags";
import NewsAndUpdatesClient from "./NewsUpdatesClient";
import MetaInjector from "@/components/Meta/MetaInjector";
import Footer from "@/components/footer/footer";
import FooterBottom from "@/components/footerBottom/footerBottom";

export default async function NewsAndUpdates() {
  const metaTags = await getMetaTags("/news-updates");
  if (metaTags.length === 0 || !metaTags[0].metaContent) {
    console.warn("No meta tags found, using default");
  }

  return (
    <>
      <MetaInjector metaContent={metaTags[0].metaContent} />
      <NewsAndUpdatesClient />
      <Footer />
      <FooterBottom />
    </>
  );
}
