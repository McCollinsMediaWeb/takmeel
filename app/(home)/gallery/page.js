// 'use client';
import GalleryHeader from "./GalleryHeader";
import ContactForm from "@/components/ContactForm/ContactForm";
import GalleryClient from "./GalleryClient";
import { getMetaTags } from "@/lib/getMetaTags";
import MetaInjector from "@/components/Meta/MetaInjector";

export default async function GalleryPage() {
  const metaTags = await getMetaTags("/gallery");
  if (metaTags.length === 0 || !metaTags[0].metaContent) {
    console.warn("No meta tags found, using default");
  }

  return (
    <>
      <MetaInjector metaContent={metaTags[0].metaContent} />
      <div>
        <GalleryHeader backgroundImage="Takmeel-Al-Barrari-View/Majan 03.jpg" backgroundImageMobile="Takmeel-Al-Barrari-View/Mobile Majan 03.jpg" backgroundVideo="tt2.mp4" />
        <GalleryClient />
        <ContactForm />
      </div>
    </>
  );
}