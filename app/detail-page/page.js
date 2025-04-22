'use client';
import DetailHero from "@/components/DetailPageComponents/DetailHero";
import ProjectDetails1 from "@/components/DetailPageComponents/ProjectDetails1";
import ProjectDetails2 from "@/components/DetailPageComponents/ProjectDetails2";
import ProjectDetails3 from "@/components/DetailPageComponents/ProjectDetails3";
import ProjectDetails4 from "@/components/DetailPageComponents/ProjectDetails4";
import ProjectDetails5 from "@/components/DetailPageComponents/ProjectDetails5";
import ProjectDetails6 from "@/components/DetailPageComponents/ProjectDetails6";
import ProjectDetails7 from "@/components/DetailPageComponents/ProjectDetails7";
import CostCalculator from "@/components/DetailPageComponents/CostCalculator";
import PropertyForm from "@/components/DetailPageComponents/PropertyForm";
export default function DetailPage() {
    return (
      <div>
        <DetailHero  backgroundImage="main1.jpg" backgroundImageMobile="main1mobile.jpg" text1="Now Unveiling"  text2="Takmeel Al Barari Properties" text3="Majan"/>
        <ProjectDetails1/>
        <ProjectDetails2 mainimage1="prd1.jpg" mainimage2="prd2.jpg"/>
        <ProjectDetails3 mainimage1="amn1.jpg"/>
        <ProjectDetails4/>
        <ProjectDetails5/>
        <ProjectDetails6 planImage="plan1.jpg"/>
        <ProjectDetails7 mapimage="map1.jpg"/>
        <CostCalculator/>
        <PropertyForm/>
      </div>
    );
  }
  