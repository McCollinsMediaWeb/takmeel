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
import Footer from "@/components/footer/footer";
import FooterBottom from "@/components/footerBottom/footerBottom";
import { useTranslations } from "next-intl";

export default function DivineResidencesClient() {
    const t = useTranslations('Properties');
    const detailHeroData = {
        backgroundImage: "ti01.jpg",
        backgroundImageMobile: "t21.jpg",
        text1: t('DivineResidences.content'),
        text2: t('DivineResidences.title'),
        text3: t('DivineResidences.subTitle'),
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
            { src: "Divine-Residences/Interior/Main-picture.jpg" },
            { src: "Divine-Residences/Interior/2.jpg" },
            { src: "Divine-Residences/Interior/10.jpg" },
        ],
    };

    const DataProjectDetails1 = {
        text1: t('DivineResidences.amenitiesSection.subTitle'),
        text2: t('DivineResidences.amenitiesSection.title'),
        text3: t('DivineResidences.amenitiesSection.content'),
        GalleryImages: [
            // "Divine-Residences/Interior/Main-picture.jpg",
            "rd1.jpg",
            "rd2.jpg",
            "rd3.jpg",
            "Divine-Residences/Interior/2.jpg",

            "Divine-Residences/Interior/1.jpg",
        ],
    };
    const DataProjectDetails2 = {
        ThumbImage1: "res1.jpg",
        ThumbImage2: "sv1.jpg",
        text1Heading: t('DivineResidences.projectDetailsSection.title1'),
        text1Desc: t('DivineResidences.projectDetailsSection.content1'),
        text2Heading: t('DivineResidences.projectDetailsSection.title2'),
        text2Desc: t('DivineResidences.projectDetailsSection.content2'),

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
        text1: t('DivineResidences.interiorSection.subTitle'),
        text2: t('DivineResidences.interiorSection.title'),
        text3: t('DivineResidences.interiorSection.content'),
        GalleryImagesWithNames: [

            {
                src: "Divine-Residences/Interior/3-1.jpg",
                title: "Living Room",
            },
            {
                src: "Divine-Residences/Interior/4.jpg",
                title: "Living Room",
            },
            {
                src: "Divine-Residences/Interior/5-1.jpg",
                title: "Living Room",
            },
            {
                src: "Divine-Residences/Interior/6-1.jpg",
                title: "Kitchen Area",
            },
            {
                src: "Divine-Residences/Interior/8.jpg",
                title: "Bedroom",
            },
            // {
            //   src: "Divine-Residences/Interior/9.jpg",
            //   title: "Living Room",
            // },
            {
                src: "Divine-Residences/Interior/10.jpg",
                title: "Apartment Hallway",
            },
            {
                src: "Divine-Residences/Interior/11.jpg",
                title: "Living Room",
            },
            {
                src: "Divine-Residences/Interior/12.jpg",
                title: "Dining Area",
            },
            {
                src: "Divine-Residences/Interior/13.jpg",
                title: "Bedroom",
            },
        ],
    };

    const DataProjectDetails6 = [
        {
            // amenity: "Indoor",
            values: [
                { iconNo: 19, name: t('amenitiesIcons.items.swimmingPool') },
                { iconNo: 29, name: t('amenitiesIcons.items.childrensPool') },
                { iconNo: 28, name: t('amenitiesIcons.items.childrensPlayArea') },
                { iconNo: 26, name: t('amenitiesIcons.items.indoorGym') },
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
        text1: t('DivineResidences.mapSection.title'),
        text2: t('DivineResidences.mapSection.content'),
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
        <div>
            <DetailHero {...detailHeroData} projectStatus="Sold Out" />
            <ProjectDetails1 {...DataProjectDetails1} />
            <ProjectDetails6 planImage="plan1.jpg" data={DataProjectDetails6} />
            <ProjectDetails2 {...DataProjectDetails2} />
            {/* <ProjectDetails3 mainimage1="ovr5.jpg" data={DataProjectDetails3} /> */}
            <ProjectDetails4 {...DataProjectDetails4} />
            {/* <ProjectDetails5 panoramaimage="/str1.jpg" /> */}

            <ProjectDetails7 mapimage="new3.jpg" mobileMapImage="new3m.jpg" {...DataProjectDetails7} />
            {/* <CostCalculator /> */}
            <PropertyForm projectName="Divine Residencies" />
            <Footer />
            <FooterBottom />
        </div>
    );
}
