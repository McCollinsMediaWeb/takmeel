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
    backgroundImage: "divinresdesk.mp4",
    backgroundImageMobile: "dvk.jpg",
    text1: "Where Comfort Meets Contemporary Elegance",
    text2: "Divine Residencia",
    text3: "Studio City, Dubai",
    brochureLink: "/Divine-Residencia/Brochure/Divine Residencia Studio City Brochure.pdf",
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

  const DataProjectDetails3 = [
    {
      iconNo: 8,
      heading: "Fully Equipped Gym",
      subHeading: "Stay fit and active with a state-of-the-art gym right in your building"
    },
    {
      iconNo: 9,
      heading: "Swimming Pool",
      subHeading: "Enjoy a refreshing swim in a beautifully maintained pool"
    },
    {
      iconNo: 10,
      heading: "Children's Pool",
      subHeading: "A safe and fun pool space specially designed for kids"
    },
    {
      iconNo: 11,
      heading: "Children Play Area",
      subHeading: "Let kids enjoy their playtime in a safe and engaging environment"
    },
    {
      iconNo: 12,
      heading: "Landscaped Gardens",
      subHeading: "Relax and unwind in beautifully landscaped green spaces"
    },
    {
      iconNo: 13,
      heading: "Covered Parking",
      subHeading: "Secure and shaded parking for residents and visitors"
    },
    {
      iconNo: 14,
      heading: "3 Lifts/ Elevators",
      subHeading: "Quick and convenient access with three modern elevators"
    },
    {
      iconNo: 15,
      heading: "27/7 Security",
      subHeading: "Around-the-clock security services for complete peace of mind"
    },
    {
      iconNo: 16,
      heading: "24/7 CCTV",
      subHeading: "Constant video surveillance to ensure your safety"
    }
  ];
  

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
    text1: "Divine Residencia",
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
      center: { lat: 25.029342402605465, lng: 55.23834719576115, place_id: "ChIJETuoVABvXz4R7nqf-sjl5t8" },
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
        { name: "Hessa Street", place_id: "EidIZXNzYSBTdCAtIER1YmFpIC0gVW5pdGVkIEFyYWIgRW1pcmF0ZXMiLiosChQKEgm1PBCBa2xfPhErJZzKPmWJCxIUChIJRcbZaklDXz4R6SkAK7_QznQ", location: { lat: 25.062050078513835, lng: 55.22125786074282 } },
        { name: "Sheikh Mohammed Bin Zayed Road", place_id: "EjtTaGVpa2ggTW9oYW1tZWQgQmluIFpheWVkIFJkIC0gRHViYWkgLSBVbml0ZWQgQXJhYiBFbWlyYXRlcyIuKiwKFAoSCcPbEmRkXl8-EYXN4_sfeNI1EhQKEglFxtlqSUNfPhHpKQArv9DOdA", location: { lat: 25.311676023444367, lng: 55.44276819992673 } },
        { name: "Dubai Sport City", place_id: "ChIJbzp2Od1tXz4RTEvxuGfM4Fc", location: { lat: 25.041998023044396, lng: 55.2194415534333 } },
        { name: "Dubai Hills Mall", place_id: "ChIJ7d_LEEJvXz4R8oq3hLV_PmQ", location: { lat: 25.102091826396435, lng: 55.239432124599425 } },
        { name: "Dubai International Airport", place_id: "ChIJaQ4mkwZdXz4R6e5IegDUleY", location: { lat: 25.259490296989462, lng: 55.364666407765895 } },
        { name: "Marina Beach", place_id: "ChIJY2IG66kUXz4RZOB_j8cWtjk", location: { lat: 25.078073420017596, lng: 55.13170118543625 } },
        { name: "Burj Khalifa", place_id: "ChIJS-JnijRDXz4R4rfO4QLlRf8", location: { lat: 25.197420260687153, lng: 55.274419311110236 } },
      ]
    }
  };


  return (
    <div>
      <DetailHero {...detailHeroData} />
      <ProjectDetails1  {...DataProjectDetails1} />
      <ProjectDetails2  {...DataProjectDetails2} />
      <ProjectDetails3 mainimage1="ovr1.jpg" data={DataProjectDetails3} />
      <ProjectDetails4  {...DataProjectDetails4} />
      {/* <ProjectDetails5 panoramaimage="/str1.jpg" /> */}
      {/* <ProjectDetails6 planImage="plan1.jpg" /> */}

      <ProjectDetails7 mapimage="map1.jpg" {...DataProjectDetails7} />
      <CostCalculator />
      <PropertyForm />
    </div>
  );
}
