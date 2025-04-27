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
export default function DivineResidencia() {
  const detailHeroData = {
    backgroundImage: "Divine-Residencia-Video.mp4",
    backgroundImageMobile: "bannerMobileThird.jpg",
    text1: "Where Comfort Meets Contemporary Elegance",
    text2: "Divine Residencia",
    text3: "Studio City, Dubai",
    brochureLink:"/Divine-Residencia/Brochure/Divine Residencia Studio City Brochure.pdf",
    GalleryMedia: [
      {
        type: "video",
        // src: "/Divine-Residencia-Video.mp4",
        // poster: "/images/Studio Bespoke_Design Living_24.03.2023_Page_12_Image_0001.jpg",
        width: 1920,
        height: 1080,
        sources: [
          {
            src: "/Divine-Residencia-Video.mp4",
            type: "video/mp4",
          },
        ],
        autoPlay: true,
        loop: false,
        controls: true,
      },
      { src: "/Divine-Residencia/Divine residencia main facade.jpg" },
      { src: "/Divine-Residencia/Divine Residencia Studio City 01.jpg" },
      { src: "/Divine-Residencia/Divine Residencia Studio City 02.jpg" },
      { src: "/Divine-Residencia/Divine Residencia Studio City 03.jpg" },
      { src: "/Divine-Residencia/Divine Residencia Studio City 04.jpg" },
      { src: "/Divine-Residencia/Divine-Residencia 06.jpg" },
      { src: "/Divine-Residencia/Divine-Residencia 07.jpg" }
    ],
  };

  const DataProjectDetails1 = {
    text1: "Modern Living in the Heart of Dubai Studio City",
    text2: "Designed for a Well-Rounded Lifestyle",
    text3:
      "At Divine Residencia, every element has been thoughtfully designed to enhance your everyday living experience. Located in the heart of Dubai Studio City, this project blends comfort, nature, and functionality—offering a vibrant lifestyle for individuals, couples, and families.",
    GalleryImages: [
      "Divine-Residencia/Divine residencia main facade.jpg",
      "Divine-Residencia/Divine Residencia Studio City 01.jpg",
      "Divine-Residencia/Divine Residencia Studio City 02.jpg",
      "Divine-Residencia/Divine Residencia Studio City 03.jpg",
      "Divine-Residencia/Divine Residencia Studio City 04.jpg",
      "Divine-Residencia/Divine-Residencia 06.jpg",
      // "Divine-Residencia/Divine-Residencia 07.jpg"
    ],
  };
  const DataProjectDetails2 = {
    ThumbImage1: "Divine-Residencia/Divine-Residencia 06.jpg",
    ThumbImage2: "Divine-Residencia/Divine-Residencia 07.jpg",
    text1Heading: "Residences That Reflect You",
    text1Desc: "A curated collection of 1, 2 & 3-bedroom apartments crafted for a modern, balanced lifestyle: Thoughtful layouts with dedicated study rooms, Natural light & cross ventilation, Elegant interiors using premium materials, Sophisticated finishes for a timeless design ",
    text2Heading: "Live Close to Nature",
    text2Desc: "Lush green surroundings ,Abundant natural light, Fresh air circulation, A calming environment that encourages well-being ",

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
      <ProjectDetails1  {...DataProjectDetails1} />
      <ProjectDetails2  {...DataProjectDetails2} />
      <ProjectDetails3 mainimage1="ovr1.jpg" />
      <ProjectDetails4  {...DataProjectDetails4} />
      <ProjectDetails5 panoramaimage="/str1.jpg" />
      <ProjectDetails6 planImage="plan1.jpg" />

      <ProjectDetails7 mapimage="map1.jpg" />
      <CostCalculator />
      <PropertyForm />
    </div>
  );
}
