'use client';
import FAQbox from "@/components/FAQbox/FAQbox";
import ContactForm from "@/components/ContactForm/ContactForm";
import Image from "next/image";
import { motion } from "framer-motion";
import b1 from "../../public/main4.jpg";
import DetailHero from "@/components/DetailPageComponents/DetailHero";
export default function DetailPage() {
    return (
      <div>
        <DetailHero  backgroundImage="main1.jpg" backgroundImageMobile="main1mobile.jpg" text1="Now Unveiling"  text2="Takmeel Al Barari Properties" text3="Majan"/>
        <FAQbox/>
        <ContactForm/>
      </div>
    );
  }
  