'use client';
import FAQbox from "@/components/FAQbox/FAQbox";
import ContactForm from "@/components/ContactForm/ContactForm";
import Image from "next/image";
import { motion } from "framer-motion";
import b1 from "../../public/main4.jpg";
import DetailHero from "@/components/DetailPageComponents/DetailHero";
import ProjectDetails1 from "@/components/DetailPageComponents/ProjectDetails1";
import ProjectDetails2 from "@/components/DetailPageComponents/ProjectDetails2";
export default function DetailPage() {
    return (
      <div>
        <DetailHero  backgroundImage="main1.jpg" backgroundImageMobile="main1mobile.jpg" text1="Now Unveiling"  text2="Takmeel Al Barari Properties" text3="Majan"/>
        <ProjectDetails1/>
        <ProjectDetails2 mainimage1="prd1.jpg" mainimage2="prd2.jpg"/>
        <FAQbox/>
        <ContactForm/>
 
      </div>
    );
  }
  