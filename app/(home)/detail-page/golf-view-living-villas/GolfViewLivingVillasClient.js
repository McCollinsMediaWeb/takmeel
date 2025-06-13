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
import Footer from "@/components/footer/footer";
import FooterBottom from "@/components/footerBottom/footerBottom";
import { useTranslations } from "next-intl";

export default function GolfViewLivingVillasClient() {
    const t = useTranslations('Properties');
    
    const detailHeroData = {
        backgroundImage: "Divine golf villas_landscape.mp4",
        placeholderImage: "/cover5.jpg",
        backgroundImageMobile: "vill.jpg",
        text1: t('GolfViewLivingVilla.content'),
        text2: t('GolfViewLivingVilla.title'),
        text3: t('GolfViewLivingVilla.subTitle'),
        brochureLink: null,
        masterPlanLink: null,
        registerInterest: null,
        GalleryMedia: [
            {
                type: "video",
                sources: [
                    {
                        src: "/Golf-View-Living-Villa.mp4",
                        type: "video/mp4",
                    },
                ],
                width: 1920,
                height: 1080,
                autoPlay: true,
                loop: false,
                controls: true,
            },
            { src: "/Golf-View-Living-Villas/divine-golf-villas-Facade 01.jpg" },
            { src: "/Golf-View-Living-Villas/divine-golf-villas-Facade 03.jpg" },
            { src: "/Golf-View-Living-Villas/Golf View Villas 1.jpg" },
            { src: "/Golf-View-Living-Villas/Golf View Villas 2.jpg" },
        ],
    };

    const DataProjectDetails1 = {
        text1: t('GolfViewLivingVilla.amenitiesSection.subTitle'),
        text2: t('GolfViewLivingVilla.amenitiesSection.title'),
        text3: t('GolfViewLivingVilla.amenitiesSection.content'),
        GalleryImages: [

            "gf2.jpg",
            // "golf/3.jpg",
            "gf/1.jpg",
            // "gf/4.jpg",
            // "gf/2.jpg",
            // "gf/3.jpg",

            // "golf/1.jpg",
            // "golf/2.jpg",


            // "Golf-View-Living-Villas/Golf View Villas 1.jpg",
            // "Golf-View-Living-Villas/Golf View Villas 2.jpg",
            "gvv1.jpg",
            "gvv2.jpg",
            "gvv3.jpg",
            "gr2.jpg",
        ],
    };
    const DataProjectDetails2 = {
        ThumbImage1: "vv1.jpg",
        ThumbImage2: "vv2.jpg",
        text1Heading: t('GolfViewLivingVilla.projectDetailsSection.title1'),
        text1Desc: t('GolfViewLivingVilla.projectDetailsSection.content1'),
        text2Heading: t('GolfViewLivingVilla.projectDetailsSection.title2'),
        text2Desc: t('GolfViewLivingVilla.projectDetailsSection.content2'),
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

    // const DataProjectDetails3 = [
    //   {
    //     iconNo: 18,
    //     heading: "Fully Equipped Gym",
    //     subHeading: "Stay fit and active with a state-of-the-art gym right in your building"
    //   },
    //   {
    //     iconNo: 17,
    //     heading: "Swimming Pool",
    //     subHeading: "Enjoy a refreshing swim in a beautifully maintained pool"
    //   },
    //   {
    //     iconNo: 20,
    //     heading: "Children's Pool",
    //     subHeading: "A safe and fun pool space specially designed for kids"
    //   },
    //   {
    //     iconNo: 19,
    //     heading: "Children's Play Area",
    //     subHeading: "Let kids enjoy their playtime in a safe and engaging environment"
    //   },
    //   {
    //     iconNo: 21,
    //     heading: "Landscaped Gardens",
    //     subHeading: "Relax and unwind in beautifully landscaped green spaces"
    //   },
    // ];

    const DataProjectDetails4 = {
        text1: t('GolfViewLivingVilla.interiorSection.subTitle'),
        text2: t('GolfViewLivingVilla.interiorSection.title'),
        text3: t('GolfViewLivingVilla.interiorSection.content'),
        GalleryImagesWithNames: [

            {
                src: "vv3.jpg",
                title: "Living Room Area",
            },
            {
                src: "vv4.jpg",
                title: "Bedroom Area",
            },
            {
                src: "vv5.jpg",
                title: "Bedroom Area",
            },
            {
                src: "vv6.jpg",
                title: "Bedroom Area",
            },
            {
                src: "vv7.jpg",
                title: "Bedroom Area",
            },
            {
                src: "vv8.jpg",
                title: "Living Room Area",
            },
            // {
            //   src: "gf/30.jpg",
            //   title: "Living Room Area",
            // },
            // {
            //   src: "gf/21.jpg",
            //   title: "Living Room Area",
            // },
            // {
            //   src: "gf/23.jpg",
            //   title: "Bed Room",
            // },
            // {
            //   src: "gf/25.jpg",
            //   title: "Bed Room",
            // },
            // {
            //   src: "gf/26.jpg",
            //   title: "Bed Room",
            // },
            // {
            //   src: "gf/27.jpg",
            //   title: "Dining Area",
            // },
            // {
            //   src: "gf/28.jpg",
            //   title: "Kitchen Area",
            // },
        ],
    };

    const DataProjectDetails6 = [
        {
            // amenity: "Indoor",
            values: [
                { iconNo: 19, name: t('amenitiesIcons.items.swimmingPool') },
                { iconNo: 29, name: t('amenitiesIcons.items.childrensPool') },
                { iconNo: 28, name: t('amenitiesIcons.items.childrensPlayArea') },
                { iconNo: 38, name: t('amenitiesIcons.items.landscapedGarden') },
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
        text1: t('GolfViewLivingVilla.mapSection.title'),
        text2: t('GolfViewLivingVilla.mapSection.content'),
        landmarks: [
            "3 MINUTES Hessa Street",
            "5 MINUTES Sheikh Mohammed Bin Zayed Rd",
            "8 MINUTES Dubai Sport City",
            "8 Minutes From Dubai Hills Mall",
            "25 MINUTES DUBAI INTERNATIONAL AIRPORT",
            "20 MINUTES Marina Beach",
            "20 MINUTES Burj Khalifa"
        ],
        // mapData: {
        //     apiKey: "AIzaSyCBtGUl2z4uc5HX9e7eMmzIHalH2a99Oz4",
        //     center: { lat: 25.433922936221826, lng: 55.496197001038354, place_id: "ChIJvxg0xQj49T4Rkz0le3ztig4" },
        //     zoom: 16,
        //     styles: [
        //         {
        //             "featureType": "water",
        //             "elementType": "geometry.fill",
        //             "stylers": [
        //                 { "color": "#5fb6c5" }
        //             ]
        //         },
        //         {
        //             "featureType": "landscape.natural",
        //             "elementType": "geometry.fill",
        //             "stylers": [
        //                 { "color": "#dfeee9" }
        //             ]
        //         },
        //         {
        //             "featureType": "landscape.man_made",
        //             "elementType": "geometry.fill",
        //             "stylers": [
        //                 { "color": "#f2f3f2" }
        //             ]
        //         },
        //         {
        //             "featureType": "poi.park",
        //             "elementType": "geometry.fill",
        //             "stylers": [
        //                 { "color": "#b3d4af" }
        //             ]
        //         },
        //         {
        //             "featureType": "road",
        //             "elementType": "geometry.fill",
        //             "stylers": [
        //                 { "color": "#ffffff" }
        //             ]
        //         },
        //         {
        //             "featureType": "road",
        //             "elementType": "geometry.stroke",
        //             "stylers": [
        //                 { "visibility": "off" }
        //             ]
        //         },
        //         {
        //             "featureType": "transit",
        //             "elementType": "geometry.fill",
        //             "stylers": [
        //                 { "color": "#e3e4e2" }
        //             ]
        //         },
        //         {
        //             "featureType": "poi.business",
        //             "elementType": "geometry.fill",
        //             "stylers": [
        //                 { "color": "#f7f7f7" }
        //             ]
        //         },
        //         {
        //             "featureType": "administrative",
        //             "elementType": "geometry.fill",
        //             "stylers": [
        //                 { "color": "#f2f3f2" }
        //             ]
        //         },
        //         {
        //             "featureType": "administrative",
        //             "elementType": "labels.text.fill",
        //             "stylers": [
        //                 { "color": "#666666" }
        //             ]
        //         },
        //         {
        //             "featureType": "road",
        //             "elementType": "labels.text.fill",
        //             "stylers": [
        //                 { "color": "#444444" }
        //             ]
        //         },
        //         {
        //             "featureType": "poi",
        //             "elementType": "labels.text.fill",
        //             "stylers": [
        //                 { "color": "#444444" }
        //             ]
        //         },
        //         {
        //             "featureType": "transit.station",
        //             "elementType": "labels.text.fill",
        //             "stylers": [
        //                 { "color": "#444444" }
        //             ]
        //         },
        //         {
        //             "featureType": "all",
        //             "elementType": "labels.icon",
        //             "stylers": [
        //                 // { "visibility": "on" }
        //                 { "visibility": "off" }
        //             ]
        //         }
        //     ],
        //     nearByPlaces: [
        //         // { name: "King's College Hospital London", place_id: "ChIJ1XhuJe5pXz4RGo-ENO0K6Cs", location: { lat: 25.11347333289849, lng: 55.25492898877556 } },
        //         // { name: "Dunecrest American School", place_id: "ChIJ41AzRntvXz4R-R6A87ZBfYY", location: { lat: 25.091190585103302, lng: 55.30647784609949 } },
        //         // { name: "New Earth Cafe", place_id: "ChIJXzBhucplXz4RxzQ-KfL8szg", location: { lat: 25.099380109303485, lng: 55.31540940176637 } },
        //         // { name: "HideOut Al Barari", place_id: "ChIJtywQsyZlXz4RVBgWuGoZdIk", location: { lat: 25.099574424113847, lng: 55.31581709752857 } },
        //         // { name: "Mediterranean Garden", place_id: "ChIJX3ac7GNvXz4R5gXVIZ1T1j4", location: { lat: 25.096737397233635, lng: 55.31014154332052 } },
        //         // { name: "Global Village", place_id: "ChIJFf7go49vXz4RJ6Q_Tvue2Uc", location: { lat: 25.07341628157727, lng: 55.308393501238776 } },
        //         // { name: "Cityland Mall", place_id: "ChIJMXnawZFvXz4Rtx_7wq9EQjk", location: { lat: 25.06747303267066, lng: 55.31393249409508 } },
        //         // { name: "Dubai Outlet Mall", place_id: "ChIJdcaW4FRjXz4RhKLN6dkFOu0", location: { lat: 25.073070634698052, lng: 55.39959151950052 } },
        //         // { name: "Dubai International Airport", place_id: "ChIJaQ4mkwZdXz4R6e5IegDUleY", location: { lat: 25.259490296989462, lng: 55.364666407765895 } },
        //         // { name: "Dubai Mall", place_id: "ChIJB1zIKShoXz4RnbaTPPup7aU", location: { lat: 25.20253968228783, lng: 55.278712622706365 } },
        //     ]
        // }
    };

    return (
        <div>
            <DetailHero {...detailHeroData} projectStatus="Sold Out" />
            <ProjectDetails1 {...DataProjectDetails1} />
            <ProjectDetails6 planImage="plan1.jpg" data={DataProjectDetails6} />
            <ProjectDetails2 {...DataProjectDetails2} />
            {/* <ProjectDetails3 mainimage1="ovr4.jpg" data={DataProjectDetails3} /> */}
            <ProjectDetails4 {...DataProjectDetails4} />
            {/* <ProjectDetails5 panoramaimage="/golfstreet.jpg" /> */}

            <ProjectDetails7 mapimage="golf-villa-desktop.jpg" mobileMapImage="golf-villa-mobile.jpg" {...DataProjectDetails7} />
            {/* <CostCalculator /> */}
            <PropertyForm projectName="Golf View Living Villas" />
            <Footer />
            <FooterBottom />
        </div>
    );
}