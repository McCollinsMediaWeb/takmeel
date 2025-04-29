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
export default function DivineLiving() {
  const detailHeroData = {
    backgroundImage: "bannerDesktopFirst.jpg",
    backgroundImageMobile: "bannerMobileFirst.jpg",
    text1: "Thoughtfully Designed for Peaceful Living",
    text2: "Divine Living",
    text3: "Arjan, Dubai",
    GalleryMedia: [
      {
        type: "video",
        src: "/Divine-Residencia-Video.mp4",
        poster: "/images/Studio Bespoke_Design Living_24.03.2023_Page_12_Image_0001.jpg",
        width: 1920,
        height: 1080,
        autoPlay: true,
        loop: false,
        controls: true,
      },
      { src: "Studio Bespoke_Design Living_24.03.2023_Page_13_Image_0001.jpg" },
      { src: "Studio Bespoke_Design Living_24.03.2023_Page_14_Image_0001.jpg" },
      { src: "Studio Bespoke_Design Living_24.03.2023_Page_17_Image_0001.jpg" },
      { src: "Studio Bespoke_Design Living_24.03.2023_Page_31_Image_0001.jpg" },
      { src: "Studio Bespoke_Design Living_24.03.2023_Page_32_Image_0001.jpg" },
      { src: "Studio Bespoke_Design Living_24.03.2023_Page_33_Image_0001.jpg" },
      { src: "Studio Bespoke_Design Living_24.03.2023_Page_34_Image_0001.jpg" },
      { src: "Studio Bespoke_Design Living_24.03.2023_Page_36_Image_0001.jpg" },
      { src: "Studio Bespoke_Design Living_24.03.2023_Page_38_Image_0001.jpg" },
      { src: "Studio Bespoke_Design Living_24.03.2023_Page_41_Image_0001.jpg" },
      { src: "Studio Bespoke_Design Living_24.03.2023_Page_42_Image_0001.jpg" },
      { src: "Studio Bespoke_Design Living_24.03.2023_Page_44_Image_0001.jpg" },
      { src: "Studio Bespoke_Design Living_24.03.2023_Page_11_Image_0001.jpg" }
    ],
  };

  const DataProjectDetails1 = {
    text1: "Modern Living in the Heart of Al Zorah",
    text2: "Spectacular Views, Contemporary Comfort",
    text3:
      "Nestled in the heart of Al Zorah, Ajman, Golf View Living offers a unique blend of peace, luxury, and accessibility. Overlooking the lush greens of Al Zorah Golf Course, the serene mangroves, and the Ajman skyline, this new residential development is the perfect escape—without ever leaving the city.",
    GalleryImages: [
      "Studio Bespoke_Design Living_24.03.2023_Page_12_Image_0001.jpg",
      "Studio Bespoke_Design Living_24.03.2023_Page_13_Image_0001.jpg",
      "Studio Bespoke_Design Living_24.03.2023_Page_14_Image_0001.jpg",
      "Studio Bespoke_Design Living_24.03.2023_Page_17_Image_0001.jpg",
      "Studio Bespoke_Design Living_24.03.2023_Page_31_Image_0001.jpg",
      "Studio Bespoke_Design Living_24.03.2023_Page_32_Image_0001.jpg",
      "Studio Bespoke_Design Living_24.03.2023_Page_33_Image_0001.jpg",
      "Studio Bespoke_Design Living_24.03.2023_Page_34_Image_0001.jpg",
      "Studio Bespoke_Design Living_24.03.2023_Page_36_Image_0001.jpg",
      "Studio Bespoke_Design Living_24.03.2023_Page_38_Image_0001.jpg",
      "Studio Bespoke_Design Living_24.03.2023_Page_41_Image_0001.jpg",
      "Studio Bespoke_Design Living_24.03.2023_Page_42_Image_0001.jpg",
      "Studio Bespoke_Design Living_24.03.2023_Page_44_Image_0001.jpg",
      "Studio Bespoke_Design Living_24.03.2023_Page_11_Image_0001.jpg",
    ],
  };
  const DataProjectDetails2 = {
    ThumbImage1: "Studio Bespoke_Design Living_24.03.2023_Page_32_Image_0001.jpg",
    ThumbImage2: "Studio Bespoke_Design Living_24.03.2023_Page_36_Image_0001.jpg",
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
    text1: "Divine Living",
    text2: "EFFORTLESS ACCESS <br/> To All Corners Of The City",
    landmarks: [
      "Central Location",
      "All is at Your Doorstep",
      "Shopping Center — 5 min Walk",
      "Tube Station and Overground — 5 min Walk",
      "Good Schools in the Neighbourhood",
    ],
    mapData: {
      apiKey: "AIzaSyCBtGUl2z4uc5HX9e7eMmzIHalH2a99Oz4",
      center: { lat: 25.067353743761142, lng: 55.236491095762375, place_id: "ChIJQcbW76xvXz4R4Q2vA1Uo5Pg" },
      zoom: 13,
      styles: [
        {
          "featureType": "water",
          "elementType": "geometry.fill",
          "stylers": [
            { "color": "#5fb6c5" }
          ]
        },
        {
          "featureType": "landscape.natural",
          "elementType": "geometry.fill",
          "stylers": [
            { "color": "#dfeee9" }
          ]
        },
        {
          "featureType": "landscape.man_made",
          "elementType": "geometry.fill",
          "stylers": [
            { "color": "#f2f3f2" }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry.fill",
          "stylers": [
            { "color": "#b3d4af" }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry.fill",
          "stylers": [
            { "color": "#ffffff" }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry.stroke",
          "stylers": [
            { "visibility": "off" }
          ]
        },
        {
          "featureType": "transit",
          "elementType": "geometry.fill",
          "stylers": [
            { "color": "#e3e4e2" }
          ]
        },
        {
          "featureType": "poi.business",
          "elementType": "geometry.fill",
          "stylers": [
            { "color": "#f7f7f7" }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "geometry.fill",
          "stylers": [
            { "color": "#f2f3f2" }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "labels.text.fill",
          "stylers": [
            { "color": "#666666" }
          ]
        },
        {
          "featureType": "road",
          "elementType": "labels.text.fill",
          "stylers": [
            { "color": "#444444" }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [
            { "color": "#444444" }
          ]
        },
        {
          "featureType": "transit.station",
          "elementType": "labels.text.fill",
          "stylers": [
            { "color": "#444444" }
          ]
        },
        {
          "featureType": "all",
          "elementType": "labels.icon",
          "stylers": [
            { "visibility": "on" }
          ]
        }
      ],
      nearByPlaces: [
        { name: "King's College Hospital London", place_id: "ChIJ1XhuJe5pXz4RGo-ENO0K6Cs", location: { lat: 25.11347333289849, lng: 55.25492898877556 } },
        { name: "Dunecrest American School", place_id: "ChIJ41AzRntvXz4R-R6A87ZBfYY", location: { lat: 25.091190585103302, lng: 55.30647784609949 } },
        { name: "New Earth Cafe", place_id: "ChIJXzBhucplXz4RxzQ-KfL8szg", location: { lat: 25.099380109303485, lng: 55.31540940176637 } },
        { name: "HideOut Al Barari", place_id: "ChIJtywQsyZlXz4RVBgWuGoZdIk", location: { lat: 25.099574424113847, lng: 55.31581709752857 } },
        { name: "Mediterranean Garden", place_id: "ChIJX3ac7GNvXz4R5gXVIZ1T1j4", location: { lat: 25.096737397233635, lng: 55.31014154332052 } },
        { name: "Global Village", place_id: "ChIJFf7go49vXz4RJ6Q_Tvue2Uc", location: { lat: 25.07341628157727, lng: 55.308393501238776 } },
        { name: "Cityland Mall", place_id: "ChIJMXnawZFvXz4Rtx_7wq9EQjk", location: { lat: 25.06747303267066, lng: 55.31393249409508 } },
        { name: "Dubai Outlet Mall", place_id: "ChIJdcaW4FRjXz4RhKLN6dkFOu0", location: { lat: 25.073070634698052, lng: 55.39959151950052 } },
        { name: "Dubai International Airport", place_id: "ChIJaQ4mkwZdXz4R6e5IegDUleY", location: { lat: 25.259490296989462, lng: 55.364666407765895 } },
        { name: "Dubai Mall", place_id: "ChIJB1zIKShoXz4RnbaTPPup7aU", location: { lat: 25.20253968228783, lng: 55.278712622706365 } },
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
      {/* <ProjectDetails5 panoramaimage="/str1.jpg" /> */}
      {/* <ProjectDetails6 planImage="plan1.jpg" /> */}

      <ProjectDetails7 mapimage="map1.jpg" {...DataProjectDetails7} />
      <CostCalculator />
      <PropertyForm />
    </div>
  );
}
