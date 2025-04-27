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
export default function GolfViewLivingVillas() {
    const detailHeroData = {
        backgroundImage: "Golf-View-Living-Villa.mp4",
        backgroundImageMobile: "bannerMobileFirst.jpg",
        text1: "Private Villas Surrounded by Nature’s Calm",
        text2: "Golf View Living Villas",
        text3: "Ajman",
        GalleryMedia: [
            {
                type: "video",
                sources: [
                    {
                        src: "/Golf-View-Living-Villa.mp4",
                        type: "video/mp4",
                    },
                ],
                width: 1920,
                height: 1080,
                autoPlay: true,
                loop: false,
                controls: true,
            },
            { src: "/Golf-View-Living-Villas/divine-golf-villas-Facade 01.jpg" },
            { src: "/Golf-View-Living-Villas/divine-golf-villas-Facade 03.jpg" },
            { src: "/Golf-View-Living-Villas/Golf View Villas 1.jpg" },
            { src: "/Golf-View-Living-Villas/Golf View Villas 2.jpg" },
        ],
    };

    const DataProjectDetails1 = {
        text1: "Modern Living in the Heart of Ajman’s prestigious Al Zorah Golf Course",
        text2: "Live Where Serenity Meets Sophistication",
        text3:
            "Discover a lifestyle of peace and privacy in the heart of Ajman’s prestigious Al Zorah Golf Course. Surrounded by panoramic fairways and lush mangroves, Divine Golf Villas is a limited collection of 20 high-end residences offering spacious interiors, modern architecture, and nature-integrated design—just 25 minutes from Dubai International Airport.",
        GalleryImages: [
            "Golf-View-Living-Villas/divine-golf-villas-Facade 01.jpg",
            "Golf-View-Living-Villas/divine-golf-villas-Facade 03.jpg",
            // "Golf-View-Living-Villas/Golf View Villas 1.jpg",
            // "Golf-View-Living-Villas/Golf View Villas 2.jpg",
        ],
    };
    const DataProjectDetails2 = {
        ThumbImage1: "Golf-View-Living-Villas/Golf View Villas 1.jpg",
        ThumbImage2: "Golf-View-Living-Villas/Golf View Villas 2.jpg",
        text1Heading: "Villas Crafted for Modern Family Living",
        text1Desc: "Elegant double-height entrances, Expansive ground floor living and dining areas with direct golf course views, Large kitchens with pantry and service access, Private landscaped gardens and shaded rooftop terraces, Study/office space, maid’s room, guest bathroom, Upstairs: Master suite + 2 ensuite bedrooms + family lounge, Private pool with deck area, Covered garage with attached driver’s room",
        text2Heading: "Project Highlights",
        text2Desc: "20 Limited-Edition Villas, Panoramic Golf Course & Mangrove Views, Minutes from Sandy Beaches, 25 Minutes from Dubai, 20 from Sharjah",

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
