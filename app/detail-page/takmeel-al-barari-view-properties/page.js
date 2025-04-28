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
export default function TakmeelAlBarariViewPropertiesPage() {
  const detailHeroData = {
    // backgroundImage: "main1.jpg",
    // backgroundImageMobile: "main1mobile.jpg",
    backgroundImage: "/Takmeel-Al-Barrari-View/Majan 03.jpg",
    backgroundImageMobile: "/Takmeel-Al-Barrari-View/Mobile Majan 03.jpg",
    text1: "Urban Living, Reimagined by Nature",
    text2: "Takmeel Al Barari View",
    text3: "Majan, Dubai",
    GalleryMedia: [
      // {
      //   type: "video",
      //   sources: [
      //     {
      //       src: "/Divine-Residencia-Video.mp4",
      //       type: "video/mp4",
      //     },
      //   ],
      //   width: 1920,
      //   height: 1080,
      //   autoPlay: true,
      //   loop: false,
      //   controls: true,
      // },
      { src: "/Takmeel-Al-Barrari-View/Majan 03.jpg" },
      { src: "/Takmeel-Al-Barrari-View/Majan 02.jpg" },
      { src: "/Takmeel-Al-Barrari-View/Majan 04.jpg" },
      { src: "/Takmeel-Al-Barrari-View/AL Barari Majan Building Model_2.jpg" },
      { src: "/Takmeel-Al-Barrari-View/AL Barari Majan Building Model_3 1.jpg" },
      { src: "/Takmeel-Al-Barrari-View/AL Barari Majan Building Model_3 2.jpg" },
    ],
  };

  const DataProjectDetails1 = {
    text1: "Modern Living in the Heart of Majan",
    text2: "From Desert Dreams to a Living Wilderness",
    text3:
      "Takmeel’s upcoming project at Al Barari is a tribute to visionary transformation — where untouched wilderness evolves into a luxurious smart living community. Enveloped in nature, yet rooted in innovation, this sanctuary redefines opulence through sustainability and harmony. Wake up to greenery, water, and serenity, just minutes away from the city’s hustle. Barari is not just a place to live — it’s where nature and modern living exist in perfect balance.",
    GalleryImages: [
      // "Takmeel-Al-Barrari-View/Majan 03.jpg",
      // "Takmeel-Al-Barrari-View/Majan 02.jpg",
      // "Takmeel-Al-Barrari-View/Majan 04.jpg",
      "Takmeel-Al-Barrari-View/AL Barari Majan Building Model_2.jpg",
      "Takmeel-Al-Barrari-View/AL Barari Majan Building Model_3 1.jpg",
      "Takmeel-Al-Barrari-View/AL Barari Majan Building Model_3 2.jpg",
    ],
  };
  const DataProjectDetails2 = {
    ThumbImage1: "Takmeel-Al-Barrari-View/Majan 02.jpg",
    ThumbImage2: "Takmeel-Al-Barrari-View/Majan 04.jpg",
    text1Heading: "Spacious Urban Living in Arjan",
    text1Desc: "This exclusive development features a curated selection of: 1, 2 & 3 Bedroom Apartments ,  Meticulously planned layouts ,  High-quality finishing & sanitary ware World-class materials throughout",
    text2Heading: "A Family-Friendly Community with Everything You Need",
    text2Desc: "Enjoy a peaceful lifestyle with convenient access to key destinations: Close to Dubai Miracle Garden & Butterfly Garden , Easy access to Sheikh Zayed Road & Umm Suqeim Street Tranquil ,  surroundings with minimal noise and traffic",

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

  const DataProjectDetails7 = {
    text1: "Takmeel Al Barari View",
    text2: "EFFORTLESS ACCESS <br/> To All Corners Of The City",
    landmarks: [
      "3 MINUTES Hessa Street",
      "5 MINUTES Sheikh Mohammed Bin Zayed Rd",
      "8 MINUTES Dubai Sport City",
      "8 Minutes From Dubai Hills Mall",
      "25 MINUTES DUBAI INTERNATIONAL AIRPORT",
      "20 MINUTES Marina Beach",
      "20 MINUTES Burj Khalifa"
    ],
    mapData: {
      apiKey: "AIzaSyCBtGUl2z4uc5HX9e7eMmzIHalH2a99Oz4",
      center: { lat: 25.05079, lng: 55.24659 },
      zoom: 12,
      styles: [
        {
          "featureType": "water",
          "elementType": "geometry.fill",
          "stylers": [
            { "color": "#d4f4dd" }  // light greenish water
          ]
        },
        {
          "featureType": "landscape.natural",
          "elementType": "geometry.fill",
          "stylers": [
            { "color": "#e8f7ea" }  // very light green natural areas
          ]
        },
        {
          "featureType": "landscape.man_made",
          "elementType": "geometry.fill",
          "stylers": [
            { "color": "#f0f8f1" }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry.fill",
          "stylers": [
            { "color": "#c0e8c1" }  // soft mint green parks
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry.fill",
          "stylers": [
            { "color": "#fdf2f2" }  // pale pinkish for normal roads
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry.fill",
          "stylers": [
            { "color": "#f8d7da" }  // soft red for highways
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "geometry.fill",
          "stylers": [
            { "color": "#fbe4e6" }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "geometry.fill",
          "stylers": [
            { "color": "#ffffff" }  // clean white local roads
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry.stroke",
          "stylers": [
            { "color": "#ecb5b9" }
          ]
        },
        {
          "featureType": "transit",
          "elementType": "geometry.fill",
          "stylers": [
            { "color": "#f3e8e9" }
          ]
        },
        {
          "featureType": "poi.business",
          "elementType": "geometry.fill",
          "stylers": [
            { "color": "#f9faf9" }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "geometry.fill",
          "stylers": [
            { "color": "#f7d6d9" }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "labels.text.fill",
          "stylers": [
            { "color": "#a94442" }  // deep elegant red for labels
          ]
        },
        {
          "featureType": "road",
          "elementType": "labels.text.fill",
          "stylers": [
            { "color": "#c9302c" }  // stronger red for road labels
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [
            { "color": "#a94442" }
          ]
        },
        {
          "featureType": "transit.station",
          "elementType": "labels.text.fill",
          "stylers": [
            { "color": "#a94442" }
          ]
        },
        {
          "featureType": "all",
          "elementType": "labels.icon",
          "stylers": [
            { "visibility": "off" }
          ]
        }
      ]
    }
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

      <ProjectDetails7 mapimage="map1.jpg" {...DataProjectDetails7} />
      <CostCalculator />
      <PropertyForm />
    </div>
  );
}
