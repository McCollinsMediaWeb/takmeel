// 'use client';
import GalleryHeader from "./GalleryHeader";
import PropertyForm from "@/components/DetailPageComponents/PropertyForm"
import GalleryClient from "./GalleryClient";
import { getMetaTags } from "@/lib/getMetaTags";
import MetaInjector from "@/components/Meta/MetaInjector";
import Footer from "@/components/footer/footer";
import FooterBottom from "@/components/footerBottom/footerBottom";

export default async function GalleryPage() {
  const metaTags = await getMetaTags("/gallery");
  if (metaTags.length === 0 || !metaTags[0].metaContent) {
    console.warn("No meta tags found, using default");
  }

  return (
    <>
      {metaTags.length > 0 && metaTags[0].metaContent && (
        <MetaInjector metaContent={metaTags[0].metaContent} />
      )}
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