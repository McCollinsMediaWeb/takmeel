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
    backgroundImage: "albararidesk.mp4",
    backgroundImageMobile: "Takmeel-Al-Barrari-View/Mobile Majan 03.jpg",
    text1: "Urban Living, Reimagined by Nature",
    text2: "Takmeel Al Barari View",
    text3: "Majan, Dubai",
    videoPosterDesktop: "Takmeel-Al-Barrari-View/Majan 03.jpg",
    videoPosterMobile: "Takmeel-Al-Barrari-View/Mobile Majan 03.jpg",
    GalleryMedia: [
      // {
      // type: "video",
      // sources: [
      // {
      // src: "/Divine-Residencia-Video.mp4",
      // type: "video/mp4",
      // },
      // ],
      // width: 1920,
      // height: 1080,
      // autoPlay: true,
      // loop: false,
      // controls: true,
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
      "m1.jpg",
      "m2.jpg",
      "Takmeel-Al-Barrari-View/AL Barari Majan Building Model_3 2.jpg",
    ],
    GalleryImages: [],
  };
  const DataProjectDetails2 = {
    ThumbImage1: "Takmeel-Al-Barrari-View/Majan 02.jpg",
    ThumbImage2: "Takmeel-Al-Barrari-View/Majan 04.jpg",
    text1Heading: "Spacious Urban Living in Majan",
    text1Desc: "This exclusive development features a curated selection of: 1, 2 & 3 Bedroom Apartments , Meticulously planned layouts , High-quality finishing & sanitary ware World-class materials throughout",
    text2Heading: "A Family-Friendly Community with Everything You Need",
    text2Desc: "Enjoy a peaceful lifestyle with convenient access to key destinations: Close to Dubai Miracle Garden & Butterfly Garden , Easy access to Sheikh Zayed Road & Umm Suqeim Street Tranquil , surroundings with minimal noise and traffic",

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
    text1: "Modern Living in the Heart of Majan",
    text2: "Spectacular Views, Contemporary Comfort",
    text3:
      "Takmeel’s Al Barari project reimagines luxury living—where smart design meets natural beauty. Surrounded by greenery and water features, these 1, 2 & 3-bedroom apartments offer modern layouts, premium finishes, and sustainable living. Just minutes from Dubai Miracle Garden with easy access to Sheikh Zayed Road, this is where peace and connectivity come together in perfect harmony.",
    GalleryImagesWithNames: [
      {
        src: "Takmeel-Al-Barrari-View/AL Barari Majan Building Model_2.jpg",
        title: "Exterior",
      },
      {
        src: "Takmeel-Al-Barrari-View/Majan Slide 04.jpg",
        title: "Rooftop",
      },
      {
        src: "Takmeel-Al-Barrari-View/AL Barari Majan Building Model_3 2.jpg",
        title: "Parking Area",
      },
    ],
    // GalleryImagesWithNames: []
  };

  const DataProjectDetails6 = [
    {
      amenity: "Ground Floor",
      values: [
        { iconNo: 25, name: "Co-working space" }
      ]
    },
    {
      amenity: "Indoor",
      values: [
        // { iconNo: 1, name: "Outdoor Showers" },
        { iconNo: 22, name: "Beach Entry Pool" },
        { iconNo: 19, name: "Adult Pool" },
        // { iconNo: 5, name: "Dry Decking Area" },
        // { iconNo: 6, name: "Wet Decking Area" },
        { iconNo: 27, name: "Jacuzzi" },
        // { iconNo: 1, name: "Sunken Setting" },
        { iconNo: 24, name: "Cabanas" },
        // { iconNo: 3, name: "Aqua Gym" },
        { iconNo: 29, name: "Kids Pool" },
        // { iconNo: 5, name: "Kids Splash Pad" },
        { iconNo: 28, name: "Kids Play Area" },
        { iconNo: 32, name: "Outdoor Gym" },
        // { iconNo: 1, name: "Family Seating Area" },
        // { iconNo: 2, name: "Casual Setting Area" },
        { iconNo: 26, name: "Indoor Gym" },
        // { iconNo: 4, name: "Party Area" },
        { iconNo: 35, name: "Steam and Sauna Area" },
        // { iconNo: 6, name: "Zen Garden" },
      ]
    },
    {
      amenity: "Roof Top",
      values: [
        { iconNo: 31, name: "Outdoor Cinema" },
        { iconNo: 33, name: "Outdoor Shaded Seating" },
        { iconNo: 34, name: "Smoking Lounge" },
        { iconNo: 21, name: "BBQ Area" },
        { iconNo: 37, name: "Yoga Area" },
        // { iconNo: 6, name: "Seating Area" },
        // { iconNo: 7, name: "Multi Pourpose Court" },
        { iconNo: 30, name: "Mini Golf" },
        { iconNo: 23, name: "Board Games Area" },
        { iconNo: 36, name: "Table Tennis Court" },
        { iconNo: 20, name: "Archery Area" },
        // { iconNo: 5, name: "Observatory Point" },
      ]
    }
  ];

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
      center: { lat: 25.09870186724474, lng: 55.31477376221619, place_id: "ChIJ12G_-IllXz4RKnVgYcSWR5M" },
      zoom: 16,
      styles: [
        {
          "featureType": "water",
          "elementType": "geometry.fill",
          "stylers": [
            { "color": "#7bc4c4" }
          ]
        },
        {
          "featureType": "landscape.natural",
          "elementType": "geometry.fill",
          "stylers": [
            { "color": "#e2ece6" }
          ]
        },
        {
          "featureType": "landscape.man_made",
          "elementType": "geometry.fill",
          "stylers": [
            { "color": "#f5f5f5" }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry.fill",
          "stylers": [
            { "color": "#b6d6b6" }
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
            { "color": "#e6e6e6" }
          ]
        },
        {
          "featureType": "poi.business",
          "elementType": "geometry.fill",
          "stylers": [
            { "color": "#f0f0f0" }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "geometry.fill",
          "stylers": [
            { "color": "#eeeeee" }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "labels.text.fill",
          "stylers": [
            { "color": "#777777" }
          ]
        },
        {
          "featureType": "road",
          "elementType": "labels.text.fill",
          "stylers": [
            { "color": "#5a5a5a" }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [
            { "color": "#555555" }
          ]
        },
        {
          "featureType": "transit.station",
          "elementType": "labels.text.fill",
          "stylers": [
            { "color": "#555555" }
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
      <ProjectDetails1 {...DataProjectDetails1} />
      <ProjectDetails2 {...DataProjectDetails2} />
      <ProjectDetails3 mainimage1="ovr3.jpg" data={DataProjectDetails3} />
      <ProjectDetails4 {...DataProjectDetails4} />
      {/* <ProjectDetails5 panoramaimage="/albararistreet.jpg" /> */}
      <ProjectDetails6 planImage="plan1.jpg" data={DataProjectDetails6} />

      <ProjectDetails7 mapimage="map1.jpg" {...DataProjectDetails7} />
      <CostCalculator />
      <PropertyForm />
    </div>
  );
}