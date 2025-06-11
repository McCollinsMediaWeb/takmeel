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

export default function MeydanRacecourseMansionClient() {
    const t = useTranslations('Properties');

    const detailHeroData = {
        backgroundImage: "maydan.jpg",
        backgroundImageMobile: "maydan.jpg",
        text1: t('MeydanMansion.content'),
        text2: t('MeydanMansion.title'),
        text3: t('MeydanMansion.subTitle'),
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
        text1: t('MeydanMansion.amenitiesSection.subTitle'),
        text2: t('MeydanMansion.amenitiesSection.title'),
        text3: t('MeydanMansion.amenitiesSection.content'),
        GalleryImages: [
            "mk1.jpg",
            "mk2.jpg",
            "mk3.jpg",
            "mk4.jpg",
            "my1.jpg",
            "my2.jpg",
            "my3.jpg",
        ],
    };
    const DataProjectDetails2 = {
        ThumbImage1: "Meydan-Racecourse-Mansion/Maydan 01.jpg",
        ThumbImage2: "md1.jpg",
        text1Heading: t('MeydanMansion.projectDetailsSection.title1'),
        text1Desc: t('MeydanMansion.projectDetailsSection.content1'),
        text2Heading: t('MeydanMansion.projectDetailsSection.title2'),
        text2Desc: t('MeydanMansion.projectDetailsSection.content2'),

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
        text1: t('MeydanMansion.interiorSection.subTitle'),
        text2: t('MeydanMansion.interiorSection.title'),
        text3: t('MeydanMansion.interiorSection.content'),
        GalleryImagesWithNames: [
            {
                src: "Meydan-Racecourse-Mansion/Maydan 06.jpg",
                title: "Swimming Pool"
            },
            // {
            //   src: "Meydan-Racecourse-Mansion/Maydan 07.jpg",
            //   title: ""
            // },
            // {
            //   src: "Meydan-Racecourse-Mansion/Maydan 08.jpg",
            //   title: ""
            // },
            {
                src: "Meydan-Racecourse-Mansion/Maydan 04.jpg",
                title: "Swimming Pool",
            },
            {
                src: "Meydan-Racecourse-Mansion/Maydan 07.jpg",
                title: "Swimming Pool",
            },
            // {
            //   src: "Meydan-Racecourse-Mansion/Maydan 10.jpg",
            //   title: "Parking bay/slot",
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
                { iconNo: 26, name: t('amenitiesIcons.items.indoorGym') },
                { iconNo: 38, name: t('amenitiesIcons.items.landscapedGarden') },
                { iconNo: 40, name: t('amenitiesIcons.items.cinema') },
                { iconNo: 41, name: t('amenitiesIcons.items.snooker') },
                { iconNo: 42, name: t('amenitiesIcons.items.spa') },
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
        text1: t('MeydanMansion.mapSection.title'),
        text2: t('MeydanMansion.mapSection.content'),
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
            <ProjectDetails6 planImage="plan1.jpg" data={DataProjectDetails6} />
            <ProjectDetails2  {...DataProjectDetails2} />
            {/* <ProjectDetails3 mainimage1="ovr7.jpg" data={DataProjectDetails3} /> */}
            <ProjectDetails4  {...DataProjectDetails4} />
            {/* <ProjectDetails5 panoramaimage="/str1.jpg" /> */}
            <ProjectDetails7 mapimage="new5.jpg" mobileMapImage="new5m.jpg"  {...DataProjectDetails7} />
            {/* /<CostCalculator /> */}
            <PropertyForm projectName="Meydan Racecourse Mansion" />
            <Footer />
            <FooterBottom />
        </div>
    );
}
