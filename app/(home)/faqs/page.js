// 'use client';
import FAQbox from "@/components/FAQbox/FAQbox";
import ContactForm from "@/components/ContactForm/ContactForm";
import Image from "next/image";
import { motion } from "framer-motion";
import b1 from "../../../public/main4.jpg";
import { getMetaTags } from "@/lib/getMetaTags";
import MetaInjector from "@/components/Meta/MetaInjector";
import FAQBanner from "@/components/FAQbox/FAQBanner";
import Footer from "@/components/footer/footer";
import FooterBottom from "@/components/footerBottom/footerBottom";

export default async function Faqs() {
  const metaTags = await getMetaTags("/faqs");
  if (metaTags.length === 0 || !metaTags[0].metaContent) {
    console.warn("No meta tags found, using default");
  }

  return (
    <>
      <MetaInjector metaContent={metaTags[0].metaContent} />
      <div>
        <FAQBanner />
        <FAQbox />
        <ContactForm />
        <Footer />
        <FooterBottom />
      </div>
    </>
  );
}
