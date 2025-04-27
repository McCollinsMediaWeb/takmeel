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
export default function GolfViewLivingApartments() {
  const detailHeroData = {
    backgroundImage: "Divine-Golf-Video.mp4",
    backgroundImageMobile: "bannerMobileFour.jpg",
    text1: "Your Everyday Escape, Overlooking the Greens",
    text2: "Golf View Living Apartments",
    text3: "Al Zorah, Ajman",
    GalleryMedia: [
      {
        type: "video",
        //  src: "/Divine-Golf-Video.mp4",
        sources: [
          {
            src: "/Divine-Golf-Video.mp4",
            type: "video/mp4",
          },
        ],
        width: 1920,
        height: 1080,
        autoPlay: true,
        loop: false,
        controls: true,
      },
      { src: "/Golf-View-Living-Apartments/Golf Apartments 03.jpg" },
      { src: "/Golf-View-Living-Apartments/golf-views-emaar-south-gallery.jpg" },
      { src: "/Golf-View-Living-Apartments/golf-views-emaar-south-gallery-03.jpg" },
      { src: "/Golf-View-Living-Apartments/01.jpg" },
      { src: "/Golf-View-Living-Apartments/DSC08102.jpg" },
      { src: "/Golf-View-Living-Apartments/DSC08109.jpg" },
      { src: "/Golf-View-Living-Apartments/DSC08122.jpg" },
      { src: "/Golf-View-Living-Apartments/IMG_6242.jpg" },
    ],
  };

  const DataProjectDetails1 = {
    text1: "Modern Living in the Heart of Al Zorah",
    text2: "Spectacular Views, Contemporary Comfort",
    text3:
      "Nestled in the heart of Al Zorah, Ajman, Golf View Living offers a unique blend of peace, luxury, and accessibility. Overlooking the lush greens of Al Zorah Golf Course, the serene mangroves, and the Ajman skyline, this new residential development is the perfect escape—without ever leaving the city.",
    GalleryImages: [
      // "Golf-View-Living-Apartments/Golf Apartments 03.jpg",
      // "Golf-View-Living-Apartments/golf-views-emaar-south-gallery.jpg",
      // "Golf-View-Living-Apartments/golf-views-emaar-south-gallery-03.jpg",
      "Golf-View-Living-Apartments/DSC08102.jpg",
      "Golf-View-Living-Apartments/DSC08109.jpg",
      "Golf-View-Living-Apartments/DSC08122.jpg",
    ],
  };
  const DataProjectDetails2 = {
    ThumbImage1: "Golf-View-Living-Apartments/golf-views-emaar-south-gallery-03.jpg",
    ThumbImage2: "Golf-View-Living-Apartments/golf-views-emaar-south-gallery.jpg",
    text1Heading: "Spacious Urban Living in Al Zorah",
    text1Desc: "This thoughtfully designed community features two G+5 buildings with a curated selection of: 1, 2 & 3 Bedroom Apartments, Contemporary layouts, Top-class finishes, Spacious interiors with spectacular views ",
    text2Heading: "A Peaceful, Luxurious Community",
    text2Desc: "Live close to nature and enjoy unmatched connectivity: 1 minute to Al Zorah Golf Club, Near Zorah Beaches & Marina 1, Smooth access to major roads and facilities ",
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
