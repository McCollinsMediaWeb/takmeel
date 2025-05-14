// 'use client';
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
import MetaInjector from "@/components/Meta/MetaInjector";
import { getMetaTags } from "@/lib/getMetaTags";
import Footer from "@/components/footer/footer";
import FooterBottom from "@/components/footerBottom/footerBottom";

export default async function DivineResidencies() {
  const metaTags = await getMetaTags("/detail-page/divine-residencies");
  if (metaTags.length === 0 || !metaTags[0].metaContent) {
    console.warn("No meta tags found, using default");
  }

  const detailHeroData = {
    backgroundImage: "r.jpg",
    backgroundImageMobile: "Divine-Residence-Image-Mobile.jpg",
    text1: "Smart Spaces Crafted for Modern Lifestyles",
    text2: "Divine Residences",
    text3: "Dubai",
    brochureLink: null,
    masterPlanLink: null,
    registerInterest: null,

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
      { src: "Divine-Residencies/Interior/Main-picture.jpg" },
      { src: "Divine-Residencies/Interior/2.jpg" },
      { src: "Divine-Residencies/Interior/10.jpg" },
    ],
  };

  const DataProjectDetails1 = {
    text1: "Modern Living in a Lush Urban Setting",
    text2: "Spectacular Views, Contemporary Comfort",
    text3:
      "Located in the heart of Arjan and just moments from the world-famous Dubai Miracle Garden and Butterfly Garden, Divine Residences is a ready-to-move-in residential project crafted for comfort, convenience, and contemporary living. With seamless access to Umm Suqeim Street and major city landmarks, this community strikes the perfect balance between natural serenity and urban vibrance.",
    GalleryImages: [
      "Divine-Residencies/Interior/Main-picture.jpg",
      "Divine-Residencies/Interior/2.jpg",

      "Divine-Residencies/Interior/1.jpg",
    ],
  };
  const DataProjectDetails2 = {
    ThumbImage1: "res1.jpg",
    ThumbImage2: "Divine-Residencies/Residencies 1st project 04.jpg",
    text1Heading: "A Curated Collection of Residences",
    text1Desc: "Studios, 1 & 2 Bedroom Apartments, Bright, open layouts designed for modern lifestyles, Spacious balconies with community views, Thoughtfully selected color palettes for effortless interior styling",
    text2Heading: "Prime Connectivity & Comfort",
    text2Desc: "Just 20 minutes from Burj Khalifa, Easy access to Dubai Miracle Garden and Butterfly Garden, Close to major roads and community essentials, Vibrant surroundings with schools, clinics, and shops nearby ",

  };

  const DataProjectDetails3 = [
    {
      iconNo: 1,
      heading: "Spectacular Views",
      subHeading: "The apartment is bright and spacious with spectacular river views"
    },
    {
      iconNo: 2,
      heading: "Central Location",
      subHeading: "All you may need is at your doorstep: central location with all infrastructure"
    },
    {
      iconNo: 3,
      heading: "WELLROUNDED LIFESTYLE",
      subHeading: "Seamlessly Merge Work And Leisure"
    },
    {
      iconNo: 7,
      heading: "Smart Apartment",
      subHeading: "Smart apartment technology designed by famous architecture group"
    },
    {
      iconNo: 4,
      heading: "We Designed Elements",
      subHeading: "EVERY ELEMENT DESIGNED TO FIT A WELL-ROUNDED LIFESTYLE"
    },
    {
      iconNo: 5,
      heading: "Award-Winning Design",
      subHeading: "The apartment was designed by Lucy De Vito with great attention to details"
    },
  ];

  const DataProjectDetails4 = {
    text1: "Modern Living in the Heart of Dubai",
    text2: "Spectacular Views, Contemporary Comfort",
    text3:
      "Set amidst the flourishing neighborhood of Arjan, Divine Residences offers an exceptional lifestyle just steps away from Dubai’s iconic Miracle Garden and Butterfly Garden. Thoughtfully designed and ready for immediate occupancy, this modern residential enclave blends contemporary elegance with everyday convenience. With effortless connectivity to Umm Suqeim Street and key destinations across Dubai, residents enjoy a harmonious fusion of tranquil surroundings and dynamic city living.",
    GalleryImagesWithNames: [

      {
        src: "Divine-Residencies/Interior/3-1.jpg",
        title: "Living Room",
      },
      {
        src: "Divine-Residencies/Interior/4.jpg",
        title: "Living Room",
      },
      {
        src: "Divine-Residencies/Interior/5-1.jpg",
        title: "Living Room",
      },
      {
        src: "Divine-Residencies/Interior/6-1.jpg",
        title: "Kitchen Area",
      },
      {
        src: "Divine-Residencies/Interior/7-1.jpg",
        title: "Living Room",
      },
      {
        src: "Divine-Residencies/Interior/8.jpg",
        title: "Bedroom",
      },
      {
        src: "Divine-Residencies/Interior/9.jpg",
        title: "Living Room",
      },
      {
        src: "Divine-Residencies/Interior/10.jpg",
        title: "Apartment Hallway",
      },
      {
        src: "Divine-Residencies/Interior/11.jpg",
        title: "Living Room",
      },
      {
        src: "Divine-Residencies/Interior/12.jpg",
        title: "Dining Area",
      },
      {
        src: "Divine-Residencies/Interior/13.jpg",
        title: "Bedroom",
      },
    ],
  };

  const DataProjectDetails6 = [
    {
      // amenity: "Indoor",
      values: [
        { iconNo: 19, name: "Swimming Pool" },
        { iconNo: 29, name: "Children's Pool" },
        { iconNo: 28, name: "Children's Play Area" },
        { iconNo: 26, name: "Indoor Gym" },
        { iconNo: 38, name: "Landscaped Garden" },
      ]
    },
    // {
    //   amenity: "Outdoor",
    //   values: [
    //     { iconNo: 38, name: "Landscaped Garden" },
    //   ]
    // }
  ];

  const DataProjectDetails7 = {
    // mapimage: "newmap1.jpg",
    text1: "EFFORTLESS ACCESS TO ALL CORNERS OF THE CITY",
    text2: "The community features residential complexes, commercial buildings and retail developments. Although residential and peaceful, the luxurious residences offer direct and quick access to Sheikh Zayed Road and Umm Suqeim Street allowing fast reach to the whole city.",
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
      center: { lat: 25.071258512674074, lng: 55.24881931267348, place_id: "ChIJ3TVOCABvXz4RzKlmKTHDgnw" },
      zoom: 16,
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
    <>
      <MetaInjector metaContent={metaTags[0].metaContent} />
      <div>
        <DetailHero {...detailHeroData} />
        <ProjectDetails1 {...DataProjectDetails1} />
        <ProjectDetails6 planImage="plan1.jpg" data={DataProjectDetails6} />
        <ProjectDetails2 {...DataProjectDetails2} />
        {/* <ProjectDetails3 mainimage1="ovr5.jpg" data={DataProjectDetails3} /> */}
        <ProjectDetails4 {...DataProjectDetails4} />
        {/* <ProjectDetails5 panoramaimage="/str1.jpg" /> */}

        <ProjectDetails7 mapimage="new3.jpg" mobileMapImage="new3m.jpg" {...DataProjectDetails7} />
        <CostCalculator />
        <PropertyForm projectName="Divine Residencies" />
        <Footer />
        <FooterBottom />
      </div>
    </>
  );
}
