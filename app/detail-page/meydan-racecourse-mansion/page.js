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
export default function MeydanRacecourseMansion() {

  const detailHeroData = {
    backgroundImage: "meydan.webp",
    backgroundImageMobile: "meydan-mobile.jpg",
    text1: "Where Grandeur Meets Precision",
    text2: "Meydan Racecourse Mansion",
    text3: "Dubai",
    brochureLink: null,
    masterPlanLink: null,
    registerInterest: null,
    GalleryMedia: [
      // {
      //     type: "video",
      //     width: 1920,
      //     height: 1080,
      //     sources: [
      //         {
      //             src: "/Divine-Residencia-Video.mp4",
      //             type: "video/mp4",
      //         },
      //     ],
      //     autoPlay: true,
      //     loop: false,
      //     controls: true,
      // },
      { src: "/meydan.webp" },
      { src: "/Meydan-Racecourse-Mansion/Maydan 01.jpg" },
      { src: "/Meydan-Racecourse-Mansion/Maydan 02.jpg" },
      { src: "/Meydan-Racecourse-Mansion/Maydan 03.jpg" },
      { src: "/Meydan-Racecourse-Mansion/Maydan 04.jpg" },
      { src: "/Meydan-Racecourse-Mansion/Maydan 05.jpg" },
      { src: "/Meydan-Racecourse-Mansion/Maydan 06.jpg" },
      { src: "/Meydan-Racecourse-Mansion/Maydan 07.jpg" },
      { src: "/Meydan-Racecourse-Mansion/Maydan 08.jpg" },
      { src: "/Meydan-Racecourse-Mansion/Maydan 09.jpg" },
      { src: "/Meydan-Racecourse-Mansion/Maydan 10.jpg" },
    ],
  };

  const DataProjectDetails1 = {
    text1: "Modern Living in the Heart of Dubai",
    text2: "Unmatched Views, Unparalleled Luxury",
    text3:
      "Overlooking the iconic Meydan Racecourse, this architectural gem by Takmeel Real Estate defines the pinnacle of bespoke living. The Meydan Racecourse Mansion is more than a home—it’s a statement of timeless elegance, curated for those who desire privacy, prestige, and panoramic views in the heart of Dubai.",
    GalleryImages: [
      // "Meydan-Racecourse-Mansion/Maydan 01.jpg",
      "Meydan-Racecourse-Mansion/Maydan 02.jpg",
      "Meydan-Racecourse-Mansion/Maydan 03.jpg",
      "Meydan-Racecourse-Mansion/Maydan 04.jpg",
      // "Meydan-Racecourse-Mansion/Maydan 05.jpg",
      "Meydan-Racecourse-Mansion/Maydan 06.jpg",
      "Meydan-Racecourse-Mansion/Maydan 07.jpg",
      "Meydan-Racecourse-Mansion/Maydan 08.jpg",
      "Meydan-Racecourse-Mansion/Maydan 09.jpg",
      "Meydan-Racecourse-Mansion/Maydan 10.jpg",
    ],
  };
  const DataProjectDetails2 = {
    ThumbImage1: "Meydan-Racecourse-Mansion/Maydan 01.jpg",
    ThumbImage2: "Meydan-Racecourse-Mansion/Maydan 05.jpg",
    text1Heading: "Features That Redefine Opulence",
    text1Desc: "Central Location – Nestled in Meydan, with seamless city access, Award-Winning Design – European aesthetics with a blend of Russian elegance and Italian grace, Spectacular Views – Uninterrupted racecourse panoramas from every room, Smart Home Features – Intelligent systems for lighting, security, and comfort",
    text2Heading: "A Mansion that Embodies “The Art of Living”",
    text2Desc: "Surrounded by lush landscapes and crafted with natural cut stone, this residence is a tranquil sanctuary in a vibrant city. From serene mornings overlooking the turf to intimate evenings in your private cinema—every moment here is extraordinary.",

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
      "Nestled in the heart of Dubai’s most sought-after enclave, this exquisite mansion by Takmeel Real Estate is a masterpiece of modern opulence and architectural grace. Designed with a seamless blend of contemporary aesthetics and timeless detail, the residence offers expansive living spaces, sun-drenched interiors, and unobstructed skyline views. Whether you're hosting grand soirées under the stars or enjoying quiet reflection beside the infinity pool, every corner of this home is crafted to elevate your lifestyle. Here, luxury isn't just experienced—it's lived.",
    GalleryImagesWithNames: [
      {
        src: "Meydan-Racecourse-Mansion/Maydan 04.jpg",
        title: "Exterior",
      },
      {
        src: "Meydan-Racecourse-Mansion/Maydan 07.jpg",
        title: "Swimming Pool",
      },
      {
        src: "Meydan-Racecourse-Mansion/Maydan 10.jpg",
        title: "Parking bay/slot",
      },
    ],
  };

  const DataProjectDetails6 = [
    {
      amenity: "Indoor",
      values: [
        { iconNo: 19, name: "Swimming Pool" },
        { iconNo: 29, name: "Children's Pool" },
        { iconNo: 28, name: "Children's Play Area" },
        { iconNo: 26, name: "Indoor Gym" },
      ]
    },
    {
      amenity: "Outdoor",
      values: [
        { iconNo: 38, name: "Landscaped Garden" },
      ]
    }
  ];

  const DataProjectDetails7 = {
    text1: "Meydan Racecourse Mansion",
    text2: "EFFORTLESS ACCESS <br/> To All Corners Of The City",
    landmarks: [
      "Meydan Racecourse Mansion",
      "Contemporary Designs With Top Class Finishing",
      "Peaceful And Luxiourious Community",
      "Top Facilities And Amenities",
      "Close To Beaches And Marina",
    ],
    mapData: {
      apiKey: "AIzaSyCBtGUl2z4uc5HX9e7eMmzIHalH2a99Oz4",
      center: { lat: 25.15800612182485, lng: 55.30082829576547, place_id: "ChIJIbx9lmdoXz4Rv_jGUDj8JOk" },
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
    <div>
      <DetailHero {...detailHeroData} />
      <ProjectDetails1  {...DataProjectDetails1} />
      <ProjectDetails2  {...DataProjectDetails2} />
      {/* <ProjectDetails3 mainimage1="ovr7.jpg" data={DataProjectDetails3} /> */}
      <ProjectDetails4  {...DataProjectDetails4} />
      {/* <ProjectDetails5 panoramaimage="/str1.jpg" /> */}
      <ProjectDetails6 planImage="plan1.jpg" data={DataProjectDetails6} />
      <ProjectDetails7 mapimage="newmap1.jpg" {...DataProjectDetails7} />
      <CostCalculator />
      <PropertyForm />
    </div>
  );
}
