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
import PaymentPlanBlock from "@/components/PaymentPlanBlock/PaymentPlanBlock";
import { getMetaTags } from "@/lib/getMetaTags";
import MetaInjector from "@/components/Meta/MetaInjector";
import Footer from "@/components/footer/footer";
import FooterBottom from "@/components/footerBottom/footerBottom";

export default async function DivineLiving() {
  const metaTags = await getMetaTags("/detail-page/divine-living");
  if (metaTags.length === 0 || !metaTags[0].metaContent) {
    console.warn("No meta tags found, using default");
  }
  const detailHeroData = {
    backgroundImage: "bannerDesktopFirst.jpg",
    backgroundImageMobile: "bannerMobileFirst.jpg",
    text1: "Thoughtfully Designed for Peaceful Living",
    text2: "Divine Living",
    text3: "Arjan, Dubai",
    brochureLink: "/Divine-Living/Brochure/Divine Living Arjan Brochure.pdf",
    masterPlanLink: null,
    registerInterest: null,
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
    text1: "Modern Living in the Heart of Arjan",
    text2: "Timeless Elegance, Modern Comfort",
    text3:
      "Tucked away in the vibrant district of Arjan, Divine Living offers a perfect balance of luxury and tranquility. Developed by Takmeel Real Estate, this refined residential project is designed for those who seek spacious living, sophisticated interiors, and a peaceful lifestyle—without compromising on urban connectivity.",
    GalleryImages: [
      "s1.jpg",
      "s2.jpg",
      "s3.jpg",
      "Divine-Living/Divine-Living-Image01.jpg",
      "pool.jpg",
      
      // "Divine-Living/Divine-Living-Image03.jpg",
      // "Divine-Living/Divine-Living-Image04.jpg",
      // "Divine-Living/Divine-Living-Image05.jpg",
      // "Divine-Living/Divine-Living-Image06.jpg",
    ],
  };
  const DataProjectDetails2 = {
    ThumbImage1: "Studio Bespoke_Design Living_24.03.2023_Page_32_Image_0001.jpg",
    ThumbImage2: "Studio Bespoke_Design Living_24.03.2023_Page_36_Image_0001.jpg",
    text1Heading: "Spacious Urban Living in Arjan",
    text1Desc: "This exclusive development features a curated selection of 1, 2, and 3-bedroom apartments. Each residence offers meticulously planned layouts, high-quality finishing and sanitary ware, and world-class materials throughout, ensuring both comfort and elegance.",
    text2Heading: "A Family-Friendly Community with Everything You Need",
    text2Desc: "Located in a central area with everything at your doorstep, the development boasts an award-winning design by Lucy De Vito. Apartments are equipped with smart home technology and modern automation, and feature bright, spacious interiors with spectacular views of the community.",

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
    text1: "Spacious Urban Living in Arjan",
    text2: "Spectacular Views, Contemporary Comfort",
    text3:
      "Welcome to Divine Living, where elegance meets everyday comfort in one of Dubai’s most promising neighborhoods—Arjan. Brought to life by Takmeel Real Estate, this exclusive residential development redefines urban living with thoughtfully designed spaces, premium finishes, and a serene environment that offers a welcome escape from the city’s hustle.",
    GalleryImagesWithNames: [
      {
        src: "dl3.jpg",
        title: "Living Area",
      },
      {
        src: "dl4.jpg",
        title: "Living Area",
      },
      // {
      //   src: "dl5.jpg",
      //   title: "Lounge Area",
      // },
      {
        src: "dl6.jpg",
        title: "Living Area",
      },
      {
        src: "dl7.jpg",
        title: "Bedroom Area",
      },
      {
        src: "ds2.jpg",
        title: "Washroom Area",
      },
      {
        src: "ds3.jpg",
        title: "Washroom Area",
      },
      {
        src: "ds1.jpg",
        title: "Corridor",
      },
      {
        src: "ds4.jpg",
        title: "Washroom Area",
      },
      {
        src: "ds5.jpg",
        title: "Washroom Area",
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
    text1: "EFFORTLESS ACCESS TO ALL CORNERS OF THE CITY",
    text2: "The community features residential complexes, commercial buildings and retail developments. Although residential and peaceful, the luxurious residences offer direct and quick access to Sheikh Zayed Road and Umm Suqeim Street allowing fast reach to the whole city.",
    landmarks: [
      // "Central Location",
      // "All is at Your Doorstep",
      // "Shopping Center — 5 min Walk",
      // "Tube Station and Overground — 5 min Walk",
      // "Good Schools in the Neighbourhood",
      "2 MINUTES To Barsha City Centre",
      "5 MINUTES To Umm Suqeim Road",
      "20 MINUTES To Burj Khalifa",
      "20 MINUTES To Dubai Marina",
      "20 MINUTES To Al Sufouh Beach",
      "25 MINUTES Dubai International Airport",
    ],
    // mapData: {
    //   apiKey: "AIzaSyCBtGUl2z4uc5HX9e7eMmzIHalH2a99Oz4",
    //   center: { lat: 25.067353743761142, lng: 55.236491095762375, place_id: "ChIJQcbW76xvXz4R4Q2vA1Uo5Pg" },
    //   zoom: 16,
    //   styles: [
    //     {
    //       "featureType": "water",
    //       "elementType": "geometry.fill",
    //       "stylers": [
    //         { "color": "#5fb6c5" }
    //       ]
    //     },
    //     {
    //       "featureType": "landscape.natural",
    //       "elementType": "geometry.fill",
    //       "stylers": [
    //         { "color": "#dfeee9" }
    //       ]
    //     },
    //     {
    //       "featureType": "landscape.man_made",
    //       "elementType": "geometry.fill",
    //       "stylers": [
    //         { "color": "#f2f3f2" }
    //       ]
    //     },
    //     {
    //       "featureType": "poi.park",
    //       "elementType": "geometry.fill",
    //       "stylers": [
    //         { "color": "#b3d4af" }
    //       ]
    //     },
    //     {
    //       "featureType": "road",
    //       "elementType": "geometry.fill",
    //       "stylers": [
    //         { "color": "#ffffff" }
    //       ]
    //     },
    //     {
    //       "featureType": "road",
    //       "elementType": "geometry.stroke",
    //       "stylers": [
    //         { "visibility": "off" }
    //       ]
    //     },
    //     {
    //       "featureType": "transit",
    //       "elementType": "geometry.fill",
    //       "stylers": [
    //         { "color": "#e3e4e2" }
    //       ]
    //     },
    //     {
    //       "featureType": "poi.business",
    //       "elementType": "geometry.fill",
    //       "stylers": [
    //         { "color": "#f7f7f7" }
    //       ]
    //     },
    //     {
    //       "featureType": "administrative",
    //       "elementType": "geometry.fill",
    //       "stylers": [
    //         { "color": "#f2f3f2" }
    //       ]
    //     },
    //     {
    //       "featureType": "administrative",
    //       "elementType": "labels.text.fill",
    //       "stylers": [
    //         { "color": "#666666" }
    //       ]
    //     },
    //     {
    //       "featureType": "road",
    //       "elementType": "labels.text.fill",
    //       "stylers": [
    //         { "color": "#444444" }
    //       ]
    //     },
    //     {
    //       "featureType": "poi",
    //       "elementType": "labels.text.fill",
    //       "stylers": [
    //         { "color": "#444444" }
    //       ]
    //     },
    //     {
    //       "featureType": "transit.station",
    //       "elementType": "labels.text.fill",
    //       "stylers": [
    //         { "color": "#444444" }
    //       ]
    //     },
    //     {
    //       "featureType": "all",
    //       "elementType": "labels.icon",
    //       "stylers": [
    //         { "visibility": "on" }
    //       ]
    //     }
    //   ],
    //   nearByPlaces: [

    //     { name: "Barsha City Center", place_id: "ChIJu2gGpY5uXz4RaPjzAPdrM-w", location: { lat: 25.06991148244221, lng: 55.24194821389252 } },
    //     { name: "Umm Suqeim Road", place_id: "EixVbW0gU3VxZWltIFN0IC0gRHViYWkgLSBVbml0ZWQgQXJhYiBFbWlyYXRlcyIuKiwKFAoSCYU73_Xka18-Ebew3JRiWt-qEhQKEglFxtlqSUNfPhHpKQArv9DOdA", location: { lat: 25.103562986245, lng: 55.23136628227125 } },
    //     { name: "Burj Khalifa", place_id: "ChIJS-JnijRDXz4R4rfO4QLlRf8", location: { lat: 25.197420260687153, lng: 55.274419311110236 } },
    //     { name: "Dubai Marina", place_id: "ChIJY2IG66kUXz4RZOB_j8cWtjk", location: { lat: 25.078073420017596, lng: 55.13170118543625 } },
    //     { name: "Dubai International Airport", place_id: "ChIJaQ4mkwZdXz4R6e5IegDUleY", location: { lat: 25.259490296989462, lng: 55.364666407765895 } },


    //     // { name: "King's College Hospital London", place_id: "ChIJ1XhuJe5pXz4RGo-ENO0K6Cs", location: { lat: 25.11347333289849, lng: 55.25492898877556 } },
    //     // { name: "Dunecrest American School", place_id: "ChIJ41AzRntvXz4R-R6A87ZBfYY", location: { lat: 25.091190585103302, lng: 55.30647784609949 } },
    //     // { name: "New Earth Cafe", place_id: "ChIJXzBhucplXz4RxzQ-KfL8szg", location: { lat: 25.099380109303485, lng: 55.31540940176637 } },
    //     // { name: "HideOut Al Barari", place_id: "ChIJtywQsyZlXz4RVBgWuGoZdIk", location: { lat: 25.099574424113847, lng: 55.31581709752857 } },
    //     // { name: "Mediterranean Garden", place_id: "ChIJX3ac7GNvXz4R5gXVIZ1T1j4", location: { lat: 25.096737397233635, lng: 55.31014154332052 } },
    //     // { name: "Global Village", place_id: "ChIJFf7go49vXz4RJ6Q_Tvue2Uc", location: { lat: 25.07341628157727, lng: 55.308393501238776 } },
    //     // { name: "Cityland Mall", place_id: "ChIJMXnawZFvXz4Rtx_7wq9EQjk", location: { lat: 25.06747303267066, lng: 55.31393249409508 } },
    //     // { name: "Dubai Outlet Mall", place_id: "ChIJdcaW4FRjXz4RhKLN6dkFOu0", location: { lat: 25.073070634698052, lng: 55.39959151950052 } },
    //     // { name: "Dubai International Airport", place_id: "ChIJaQ4mkwZdXz4R6e5IegDUleY", location: { lat: 25.259490296989462, lng: 55.364666407765895 } },
    //     // { name: "Dubai Mall", place_id: "ChIJB1zIKShoXz4RnbaTPPup7aU", location: { lat: 25.20253968228783, lng: 55.278712622706365 } },
    //   ]
    // }
  };


  return (
    <>
      <MetaInjector metaContent={metaTags[0].metaContent} />
      <div>
        <DetailHero {...detailHeroData} projectStatus="Sold Out" />
        <ProjectDetails1  {...DataProjectDetails1} />
        <ProjectDetails6 planImage="plan1.jpg" data={DataProjectDetails6} />
        <PaymentPlanBlock />
        <ProjectDetails2  {...DataProjectDetails2} />
        {/* <ProjectDetails3 mainimage1="ovr2.jpg" data={DataProjectDetails3} /> */}

        <ProjectDetails4  {...DataProjectDetails4} />
        {/* <ProjectDetails5 panoramaimage="/str1.jpg" /> */}


        <ProjectDetails7 mapimage="new2.jpg" mobileMapImage="new2m.jpg" {...DataProjectDetails7} />
        <CostCalculator />
        <PropertyForm projectName="Divine Living" />
        <Footer />
        <FooterBottom />
      </div>
    </>
  );
}
