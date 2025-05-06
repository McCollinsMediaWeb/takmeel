'use client';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import Image from "next/image";
import b1 from "../../../public/cnt.jpg";
import GalleryHeader from "./GalleryHeader";
import GalleryRow from "./GalleryRow";
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

  return (
    <div>
      <GalleryHeader  backgroundImage="Takmeel-Al-Barrari-View/Majan 03.jpg" backgroundImageMobile="Takmeel-Al-Barrari-View/Mobile Majan 03.jpg"  backgroundVideo="Takmeel Main Banner Video.mp4" />
      <GalleryRow/>
    </div>
  );
}