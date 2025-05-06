'use client';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import Image from "next/image";
import b1 from "../../../public/cnt.jpg";
import GalleryHeader from "./GalleryHeader";
import GalleryRow from "./GalleryRow";
import ContactForm from "@/components/ContactForm/ContactForm";
import HomeAbout from "@/components/HomeAbout/HomeAbout";
export default function GalleryPage() {

  useEffect(() => {
    const screenWidth = window.innerWidth;

    // Set width on all elements with the class 'screenWidth'
    const elements = document.querySelectorAll('.screenWidth');
    elements.forEach((el) => {
      el.style.width = `${screenWidth}px`;
    });
  }, []);

  useEffect(() => {
    const updateHeights = () => {
      const header = document.querySelector('header');
      const headerHeight = header?.offsetHeight || 0;
      const windowHeight = window.innerHeight;
      const availableHeight = windowHeight - headerHeight;

      const elements = document.querySelectorAll('.ScreenHeight');
      elements.forEach((el) => {
        el.style.height = `${availableHeight}px`;
      });
    };

    updateHeights();
    window.addEventListener('resize', updateHeights);

    return () => window.removeEventListener('resize', updateHeights);
  }, []);
  const GalleryData = {
    text1: "Ajman Exhibition", 
    GalleryImages: [
      "gallery/1.jpg",
      "gallery/2.jpg",
      "gallery/3.jpg",
      "gallery/4.jpg",
      "gallery/5.jpg",
      "gallery/6.jpg",
      "gallery/7.jpg",
      "gallery/8.jpg",
      "gallery/9.jpg",
      "gallery/10.jpg",
      "gallery/11.jpg",
      "gallery/12.jpg",
      "gallery/13.jpg",
      "gallery/14.jpg",
      "gallery/15.jpg",
      "gallery/16.jpg",
      "gallery/17.jpg",
      "gallery/18.jpg",
     
    ]
  };
  const GalleryData2 = {
    text1: "International Proprietary Show(IPS) Dubai Exibition", 
    GalleryImages: [
      "gallery2/1.jpg",
      "gallery2/2.jpg",
      "gallery2/3.jpg",
      "gallery2/4.jpg",
      "gallery2/5.jpg",
      "gallery2/6.jpg",
      "gallery2/7.jpg",
      "gallery2/8.jpg",
      "gallery2/9.jpg",
      "gallery2/10.jpg",
      "gallery2/11.jpg",
      "gallery2/12.jpg",
      "gallery2/13.jpg",
      "gallery2/14.jpg",
      "gallery2/15.jpg",
      "gallery2/16.jpg",
      "gallery2/17.jpg",
      "gallery2/18.jpg",
     
    ]
  };
  return (
    <div>
      <GalleryHeader  backgroundImage="Takmeel-Al-Barrari-View/Majan 03.jpg" backgroundImageMobile="Takmeel-Al-Barrari-View/Mobile Majan 03.jpg"  backgroundVideo="Takmeel Main Banner Video.mp4" />
      <GalleryRow  {...GalleryData}/>
      <div className="bg2">
      <GalleryRow  {...GalleryData2}/>
      </div>
      <ContactForm/>
    </div>
  );
}