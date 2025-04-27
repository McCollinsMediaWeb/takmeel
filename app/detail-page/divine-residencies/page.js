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
export default function DivineResidencies() {

    const detailHeroData = {
        backgroundImage: "Divine-Residence-Image.jpg",
        backgroundImageMobile: "Divine-Residence-Image.jpg",
        text1: "Smart Spaces Crafted for Modern Lifestyles",
        text2: "Divine Residencies",
        text3: "Dubai",
        GalleryMedia: [
            // {
            //     type: "video",
            //     sources: [
            //         {
            //             src: "/Divine-Residencia-Video.mp4",
            //             type: "video/mp4",
            //         },
            //     ],
            //     width: 1920,
            //     height: 1080,
            //     autoPlay: true,
            //     loop: false,
            //     controls: true,
            // },
            // { src: "/Divine-Residence-Image.jpg" },
            { src: "/Divine-Residencies/Residencies 1st project 03.jpg" },
            { src: "/Divine-Residencies/Residencies 1st project 04.jpg" },
            { src: "/Divine-Residencies/Residencies 1st project 05.jpg" },
        ],
    };

    const DataProjectDetails1 = {
        text1: "Modern Living in a Lush Urban Setting",
        text2: "Spectacular Views, Contemporary Comfort",
        text3:
            "Located in the heart of Arjan and just moments from the world-famous Dubai Miracle Garden and Butterfly Garden, Divine Residencies is a ready-to-move-in residential project crafted for comfort, convenience, and contemporary living. With seamless access to Umm Suqeim Street and major city landmarks, this community strikes the perfect balance between natural serenity and urban vibrance.",
        GalleryImages: [
            "Divine-Residencies/Residencies 1st project 03.jpg",
            "Divine-Residencies/Residencies 1st project 04.jpg",
            "Divine-Residencies/Residencies 1st project 05.jpg"
        ],
    };
    const DataProjectDetails2 = {
        ThumbImage1: "Divine-Residencies/Residencies 1st project 03.jpg",
        ThumbImage2: "Divine-Residencies/Residencies 1st project 04.jpg",
        text1Heading: "A Curated Collection of Residences",
        text1Desc: "Studios, 1 & 2 Bedroom Apartments, Bright, open layouts designed for modern lifestyles, Spacious balconies with community views, Thoughtfully selected color palettes for effortless interior styling",
        text2Heading: "Prime Connectivity & Comfort",
        text2Desc: "Just 20 minutes from Burj Khalifa, Easy access to Dubai Miracle Garden and Butterfly Garden, Close to major roads and community essentials, Vibrant surroundings with schools, clinics, and shops nearby ",

    };
    const DataProjectDetails4 = {
        text1: "Modern Living in the Heart of Al Zorah",
        text2: "Spectacular Views, Contemporary Comfort",
        text3:
            "Nestled in the heart of Al Zorah, Ajman, Golf View Living offers a unique blend of peace, luxury, and accessibility. Overlooking the lush greens of Al Zorah Golf Course, the serene mangroves, and the Ajman skyline, this new residential development is the perfect escape—without ever leaving the city.",
        GalleryImagesWithNames: [
            {
                src: "Studio Bespoke_Design Living_24.03.2023_Page_12_Image_0001.jpg",
                title: "Welcome Lounge",
            },
            {
                src: "Studio Bespoke_Design Living_24.03.2023_Page_13_Image_0001.jpg",
                title: "Lounge",
            },
            {
                src: "Studio Bespoke_Design Living_24.03.2023_Page_14_Image_0001.jpg",
                title: "Gym",
            },
            {
                src: "Studio Bespoke_Design Living_24.03.2023_Page_17_Image_0001.jpg",
                title: "Kitchen Area",
            },
            {
                src: "Studio Bespoke_Design Living_24.03.2023_Page_31_Image_0001.jpg",
                title: "Living Room",
            },
            {
                src: "Studio Bespoke_Design Living_24.03.2023_Page_32_Image_0001.jpg",
                title: "Living Room",
            },
            {
                src: "Studio Bespoke_Design Living_24.03.2023_Page_33_Image_0001.jpg",
                title: "Bathroom",
            },
            {
                src: "Studio Bespoke_Design Living_24.03.2023_Page_34_Image_0001.jpg",
                title: "Bed Room",
            },
            {
                src: "Studio Bespoke_Design Living_24.03.2023_Page_36_Image_0001.jpg",
                title: "Living Room",
            },
            {
                src: "Studio Bespoke_Design Living_24.03.2023_Page_38_Image_0001.jpg",
                title: "Living Room",
            },
            {
                src: "Studio Bespoke_Design Living_24.03.2023_Page_41_Image_0001.jpg",
                title: "Bed Room",
            },
            {
                src: "Studio Bespoke_Design Living_24.03.2023_Page_42_Image_0001.jpg",
                title: "Living Room",
            },
            {
                src: "Studio Bespoke_Design Living_24.03.2023_Page_44_Image_0001.jpg",
                title: "Bed Room",
            },
            {
                src: "Studio Bespoke_Design Living_24.03.2023_Page_11_Image_0001.jpg",
                title: "Lounge",
            },
        ],
    };


    return (
        <div>
            <DetailHero {...detailHeroData} />
            <ProjectDetails1 {...DataProjectDetails1} />
            <ProjectDetails2 {...DataProjectDetails2} />
            <ProjectDetails3 mainimage1="amn1.jpg" />
            <ProjectDetails4 {...DataProjectDetails4} />
            <ProjectDetails5 panoramaimage="/str1.jpg" />
            <ProjectDetails6 planImage="plan1.jpg" />
            <ProjectDetails7 mapimage="map1.jpg" />
            <CostCalculator />
            <PropertyForm />
        </div>
    );
}
