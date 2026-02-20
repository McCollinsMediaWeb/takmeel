// 'use client';

export const metadata = {
  title: "Takmeel Real Estate Portfolio | Explore Luxury Homes in UAE",
  description:
    "View our gallery of premium apartments, villas, and commercial spaces developed across Dubai, Ajman, and GCC. See what luxury living looks like.",
  alternates: {
    canonical: "https://www.takmeeldevelopment.com/gallery",
  }
};

import GalleryHeader from "./GalleryHeader";
import PropertyForm from "@/components/DetailPageComponents/PropertyForm"
import GalleryClient from "./GalleryClient";
import { getMetaTags } from "@/lib/getMetaTags";
import MetaInjector from "@/components/Meta/MetaInjector";
import Footer from "@/components/footer/footer";
import FooterBottom from "@/components/footerBottom/footerBottom";


// export async function generateMetadata() {
//   const metaTags = await getMetaTags("/gallery");
//   const metaContent = metaTags?.[0]?.metaContent || "";

//   // Parse title
//   const titleMatch = metaContent.match(/<title[^>]*>(.*?)<\/title>/i);
//   const title = titleMatch?.[1] || "Gallery | Takmeel Development";

//   // Parse description
//   const descMatch = metaContent.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i);
//   const description = descMatch?.[1] || "";

//   return {
//     title,
//     description,
//     alternates: {
//       canonical: "https://www.takmeeldevelopment.com/gallery",
//     },
//   };
// }

export default async function GalleryPage() {
  // const metaTags = await getMetaTags("/gallery");
  // if (metaTags.length === 0 || !metaTags[0].metaContent) {
  //   console.warn("No meta tags found, using default");
  // }

  return (
    <>
      {/* {metaTags.length > 0 && metaTags[0].metaContent && (
        <MetaInjector metaContent={metaTags[0].metaContent} pageUrl={metaTags[0].metaPageUrl} />
      )} */}
      <div>
        <GalleryHeader backgroundImage="Takmeel-Al-Barrari-View/Majan 03.jpg" backgroundImageMobile="Takmeel-Al-Barrari-View/Mobile Majan 03.jpg" backgroundVideo="tt21.mp4" />
        <GalleryClient />
        <PropertyForm projectName="Golf View Living Apartments" />
        <Footer />
        <FooterBottom />
      </div>
    </>
  );
}