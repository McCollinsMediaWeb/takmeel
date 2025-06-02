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

export default async function GolfViewLivingApartments() {
  const metaTags = await getMetaTags("/detail-page/golf-view-living-apartments");
  if (metaTags.length === 0 || !metaTags[0].metaContent) {
    console.warn("No meta tags found, using default");
  }
  const detailHeroData = {
    backgroundImage: "Divine golf apartments_landscape.mp4",
    placeholderImage: "/cover4.jpg",
    backgroundImageMobile: "k5.jpg",
    text1: "Your Everyday Escape, Overlooking the Greens",
    text2: "Golf View Living Apartments",
    text3: "Al Zorah, Ajman",
    brochureLink: null,
    masterPlanLink: null,
    registerInterest: null,
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
      // "gl1.jpg",
      // "gl2.jpg",
      // "Golf-View-Living-Apartments/Golf-View-Living-Apartment-Image01.jpg",
      // "Golf-View-Living-Apartments/Golf-View-Living-Apartment-Image02.jpg",
      // "glf1.jpg",
      // "gl3.jpg",
      // "gg2.jpg",
      // "gv2.jpg",

      "gg1.jpg",
      "gr1.jpg",
      "gv3.jpg",
      "gv4.jpg",
    ],
  };
  const DataProjectDetails2 = {
    ThumbImage1: "Golf-View-Living-Apartments/gl2.jpg",
    ThumbImage2: "Golf-View-Living-Apartments/gl1.jpg",
    text1Heading: "Spacious Urban Living in Al Zorah",
    text1Desc: "This thoughtfully designed community features two G+5 buildings with a curated selection of: 1, 2 & 3 Bedroom Apartments, Contemporary layouts, Top-class finishes, Spacious interiors with spectacular views ",
    text2Heading: "A Peaceful, Luxurious Community",
    text2Desc: "Live close to nature and enjoy unmatched connectivity: 1 minute to Al Zorah Golf Club, Near Zorah Beaches & Marina 1, Smooth access to major roads and facilities ",
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
    text1: "Modern Living in the Heart of Al Zorah",
    text2: "Spectacular Views, Contemporary Comfort",
    text3:
      "Nestled in the heart of Al Zorah, Ajman, Golf View Living offers a unique blend of peace, luxury, and accessibility. Overlooking the lush greens of Al Zorah Golf Course, the serene mangroves, and the Ajman skyline, this new residential development is the perfect escape—without ever leaving the city.",
    GalleryImagesWithNames: [

      // {
      //   src: "Golf-View-Living-Apartments/DSC08109.jpg",
      //   title: "Living Room",
      // },
      // {
      //   src: "Golf-View-Living-Apartments/DSC08122.jpg",
      //   title: "Living Room",
      // },
      // {
      //   src: "Golf-View-Living-Apartments/DSC08102.jpg",
      //   title: "Kitchen Area",
      // },
      // {
      //   src: "Golf-View-Living-Apartments/Image01.jpg",
      //   title: "Kitchen Area",
      // },
      // {
      //   src: "Golf-View-Living-Apartments/Image02.jpg",
      //   title: "Kitchen Area",
      // },
      // {
      //   src: "Golf-View-Living-Apartments/Image03.jpg",
      //   title: "Kitchen Area",
      // },
      {
        src: "Golf-View-Living-Apartments/gl3.jpg",
        title: "Living Area",
      },
      {
        src: "Golf-View-Living-Apartments/gl4.jpg",
        title: "Living Area",
      },
      {
        src: "Golf-View-Living-Apartments/gl5.jpg",
        title: "Bedroom Area",
      },
      {
        src: "Golf-View-Living-Apartments/gl6.jpg",
        title: "Kitchen Area",
      },

      {
        src: "Golf-View-Living-Apartments/Golf View Apartment 01 (2).jpg",
        title: "Kitchen Area",
      },
      {
        src: "Golf-View-Living-Apartments/Golf View Apartment 01 (3).jpg",
        title: "Kitchen Area",
      },
      {
        src: "Golf-View-Living-Apartments/Golf View Apartment 02.jpg",
        title: "Kitchen Area",
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
        // { iconNo: 26, name: "Indoor Gym" },
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
    text1: "Golf View Living Apartments",
    text2: "EFFORTLESS ACCESS <br/> To All Corners Of The City",
    landmarks: [
      "Al Zorah Ajman",
      "Contemporary Designs With Top Class Finishing",
      "Peaceful And Luxiourious Community",
      "7 MINUTES to Marina 1 Al Zorah",
      "Top Facilities And Amenities",
      "10 MINUTES to Al Zohra Beach",
      "1 MINUTE to Al Zohra Golf Club"
    ],
    mapData: {
      apiKey: "AIzaSyCBtGUl2z4uc5HX9e7eMmzIHalH2a99Oz4",
      // center: { lat: 25.435623597666495, lng: 55.485490181419905, place_id: "ChIJlx5vQQBXXz4RDephFNMrJhI" },
      center: { lat: 25.43498638833699, lng: 55.48557042956523, place_id: "ChIJlx5vQQBXXz4RDephFNMrJhI" },
      zoom: 17,
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
            // { "visibility": "off" }
          ]
        }
      ],
      nearByPlaces: [
        // { name: "Al Zorah Beach", place_id: "ChIJzSHSI55XXz4RMbtHzzcwmAo", location: { lat: 25.42588643843721, lng: 55.44740583620454 } },
        // { name: "Al Zorah Marina 1", place_id: "ChIJH8nugJRXXz4RamkfN_vI-k4", location: { lat: 25.430400966073893, lng: 55.46565267858057 } },
        // { name: "Al Zorah Golf Club", place_id: "ChIJXVH71Qv49T4RH9YdVVZijGc", location: { lat: 25.43284120991059, lng: 55.48761781743727 } },
      ]
    }
  };


  return (
    <>
      {metaTags.length > 0 && metaTags[0].metaContent && (
        <MetaInjector metaContent={metaTags[0].metaContent} />
      )}
      <div>
        <DetailHero {...detailHeroData} projectStatus="Sold Out" />
        <ProjectDetails1  {...DataProjectDetails1} />
        <ProjectDetails6 planImage="plan1.jpg" data={DataProjectDetails6} />
        <ProjectDetails2  {...DataProjectDetails2} />
        {/* <ProjectDetails3 mainimage1="ovr6.jpg" data={DataProjectDetails3} /> */}
        <ProjectDetails4  {...DataProjectDetails4} />
        {/* <ProjectDetails5 panoramaimage="/str1.jpg" /> */}


        <ProjectDetails7 {...DataProjectDetails7} />
        {/* <CostCalculator /> */}
        <PropertyForm projectName="Golf View Living Apartments" />
        <Footer />
        <FooterBottom />
      </div>
    </>
  );
}
