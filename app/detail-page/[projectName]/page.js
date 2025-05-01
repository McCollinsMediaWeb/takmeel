'use client';
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

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

export default function ProjectDetailPage() {
    const params = useParams();
    const projectName = params.projectName;

    const [currentProject, setCurrentProject] = useState(null);

    const projectsData = {
        "takmeel-al-barari-view-properties": {
            first: {
                subHeading: "Now Unveiling",
                heading: "Divine Al Barari",
                bannerImage: "",
                location: "Majan, Dubai",
                tagline: "Urban Living, Reimagined by Nature"
            },
            second: {
                subHeading: "Now Unveiling",
                heading: "Divine Al Barari",
                content: "Takmeel’s upcoming project at Al Barari is a tribute to visionary transformation — where untouched wilderness evolves into a luxurious smart living community. Enveloped in nature, yet rooted in innovation, this sanctuary redefines opulence through sustainability and harmony. Wake up to greenery, water, and serenity, just minutes away from the city’s hustle. Barari is not just a place to live — it’s where nature and modern living exist in perfect balance."
            }
        },
        "divine-residencia": {
            first: {
                subHeading: "Featured Properties​",
                bannerImage: "",

                heading: "Divine Residencia",
                location: "Studio City, Dubai",
                tagline: "Where Comfort Meets Contemporary Elegance",
                media: [
                    {
                        type: "video",
                        width: 1920,
                        height: 1080,
                        poster: "/main2.jpg",
                        autoPlay: true,
                        loop: false,
                        controls: true,
                        sources: [
                            {
                                src: "Divine-Residencia-Video.mp4",
                                type: "video",
                            },
                        ],
                    },
                    { src: "/main2.jpg" },
                    { src: "/abslider2.jpg" },
                    { src: "/abslider3.jpg" },
                    { src: "/abslider4.jpg" },
                    { src: "/main1.jpg" },
                    { src: "/main2.jpg" },
                    { src: "/main3.jpg" },
                    { src: "/main4.jpg" },
                ]
            },
            second: {
                subHeading: "Upcoming Properties​",
                heading: "Divine Residencia",
                content: "At Divine Residencia, every element has been thoughtfully designed to enhance your everyday living experience. Located in the heart of Dubai Studio City, this project blends comfort, nature, and functionality—offering a vibrant lifestyle for individuals, couples, and families."
            },
            apartmentFeatures: {
                lineOne: ""
            },
            locatioHighLights: [
                "3 minutes to Hessa Street",
                "5 minutes to Sheikh Mohammed Bin Zayed Road",
                "8 minutes to Dubai Sports City",
                "8 minutes to Dubai Hills Mall",
                "20 minutes to Marina Beach",
                "25 minutes to Dubai International Airport",
            ]
        },

        "divine-living": {
            first: {
                subHeading: "Featured Properties​",
                bannerImage: "",
                heading: "Divine Living",
                location: "Arjan, Dubai",
                tagline: "Thoughtfully Designed for Peaceful Living",
                media: [
                    {
                        type: "video",
                        width: 1920,
                        height: 1080,
                        poster: "/main2.jpg",
                        autoPlay: true,
                        loop: false,
                        controls: true,
                        sources: [
                            {
                                src: "Divine-Residencia-Video.mp4",
                                type: "video",
                            },
                        ],
                    },
                    { src: "/main2.jpg" },
                    { src: "/abslider2.jpg" },
                    { src: "/abslider3.jpg" },
                    { src: "/abslider4.jpg" },
                    { src: "/main1.jpg" },
                    { src: "/main2.jpg" },
                    { src: "/main3.jpg" },
                    { src: "/main4.jpg" },
                ]
            },
            second: {
                subHeading: "Featured Properties​",
                heading: "Divine Living",
                content: "Tucked away in the vibrant district of Arjan, Divine Living offers a perfect balance of luxury and tranquility. Developed by Takmeel Real Estate, this refined residential project is designed for those who seek spacious living, sophisticated interiors, and a peaceful lifestyle—without compromising on urban connectivity."
            },
            apartmentFeatures: {
                lineOne: ""
            },
            locatioHighLights: [
                "Close to Dubai Miracle Garden & Butterfly Garden",
                "Easy access to Sheikh Zayed Road & Umm Suqeim Street",
                "Tranquil surroundings with minimal noise and traffic",
            ]
        }
    };

    useEffect(() => {
        if (projectName && projectsData[projectName]) {
            setCurrentProject(projectsData[projectName]);
        } else {
            setCurrentProject(null);
        }
    }, [projectName]);

    if (!currentProject) return <div>Project not found</div>;

    return (
        <div>
            <DetailHero
                backgroundImage="main1.jpg"
                backgroundImageMobile="main1mobile.jpg"
                text1="Now Unveiling" text2="Takmeel Al Barari Properties" text3="Majan"
                data={currentProject.first}
            />
            <ProjectDetails1 data={currentProject.second} />
            <ProjectDetails2 mainimage1="prd1.jpg" mainimage2="prd2.jpg" />
            <ProjectDetails3 mainimage1="amn1.jpg" />
            <ProjectDetails4 />
            <ProjectDetails5 />
            <ProjectDetails6 planImage="plan1.jpg" />
            <ProjectDetails7 mapimage="map1.jpg" data={currentProject.locatioHighLights} />
            <CostCalculator />
            <PropertyForm />
        </div>
    );
}
