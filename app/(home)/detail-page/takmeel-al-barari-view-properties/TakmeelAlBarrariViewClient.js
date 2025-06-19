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
import ProjectDetails8 from "@/components/DetailPageComponents/ProjectDetails8";
import ProjectDetails44 from "@/components/DetailPageComponents/projectdetails44";
import ProjectDetails45 from "@/components/DetailPageComponents/projectdetails45";
import { useTranslations } from "next-intl";
import ProjectDetails9 from "@/components/DetailPageComponents/ProjectDetails9";
import ProjectDetails10 from "@/components/DetailPageComponents/ProjectDetails10";
import CtaBroker from "@/components/DetailPageComponents/CtaBroker";

export default function TakmeelAlBarariViewClient() {
    const t = useTranslations('Properties');

    const detailHeroData = {
        // backgroundImage: "main1.jpg",
        // backgroundImageMobile: "main1mobile.jpg",
        backgroundImage: "tkdesk1.mp4",
        // backgroundImageMobile: "Takmeel-Al-Barrari-View/Mobile Majan 03.jpg",
        backgroundImageMobile: "tkdesk1.mp4",
        text1: t('DivineAlBarari.content'),
        text2: t('DivineAlBarari.title'),
        text3: t('DivineAlBarari.subTitle'),
        brochureLink: null,
        masterPlanLink: null,
        registerInterest: null,
        videoPosterDesktop: "/Takmeel-Al-Barrari-View/Majan 03.jpg",
        videoPosterMobile: "/Takmeel-Al-Barrari-View/Mobile Majan 03.jpg",
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
        text1: t('DivineAlBarari.amenitiesSection.subTitle'),
        text2: t('DivineAlBarari.amenitiesSection.title'),
        text3: t('DivineAlBarari.amenitiesSection.content'),
        imageSection1Title: t('DivineAlBarari.amenitiesSection.imageSection1.title'),
        imageSection2Title: t('DivineAlBarari.amenitiesSection.imageSection2.title'),
        GalleryImages: [
            "newlanding/amenities/a1.jpg",
            "newlanding/amenities/a2.jpg",
            "newlanding/amenities/a3.jpg",
            "newlanding/amenities/a4.jpg",
            "newlanding/amenities/1.jpg",
            "newlanding/amenities/2.jpg",
            "newlanding/amenities/3.jpg",
            "newlanding/amenities/4.jpg",
            "newlanding/amenities/5.jpg",
            "newlanding/amenities/6.jpg",
            "newlanding/amenities/7.jpg",
            "newlanding/amenities/8.jpg",
            "newlanding/amenities/9.jpg",
            "newlanding/amenities/10.jpg",

        ],
        GalleryImages1: [
            "newlanding/interior/i1.jpg",
            "newlanding/interior/i2.jpg",
            "newlanding/interior/i4.jpg",
            "newlanding/interior/8.jpg",
            "newlanding/interior/10.jpg",
            "newlanding/amenities/13.jpg",
            "newlanding/interior/g1.jpg",
            "newlanding/interior/g2.jpg",
            "newlanding/interior/g3.jpg",
            "newlanding/interior/g4.jpg",
            "newlanding/interior/p1.jpg",
            "newlanding/interior/p2.jpg",
            "newlanding/interior/p3.jpg",
            "newlanding/interior/p4.jpg",
            "newlanding/interior/p5.jpg",
            "newlanding/interior/c1.jpg",
            

        ]
    };
    const DataProjectDetails2 = {
        ThumbImage1: "grd2.jpg",
        ThumbImage2: "grd3.jpg",
        text1Heading: "Spacious Urban Living in Majan",
        text1Desc: "This exclusive development features a curated selection of: Studio, 1, 2 & 3 Bedroom Apartments , Meticulously planned layouts , High-quality finishing & sanitary ware World-class materials throughout",
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
        text1: t('DivineAlBarari.interiorSection.subTitle'),
        text2: t('DivineAlBarari.interiorSection.title'),
        text3: t('DivineAlBarari.interiorSection.content'),
        interiorTitle1: t('DivineAlBarari.interiorSection.studioApartment.title'),
        interiorTitle2: t('DivineAlBarari.interiorSection.oneBedroomApartment.title'),
        GalleryImagesWithNames: [

            {
                src: "newlanding/interior/b1.jpg",
                title: "Kitchen Area",
            },
            {
                src: "newlanding/interior/b2.jpg",
                title: "Kitchen Area",
            },
            {
                src: "newlanding/interior/b3.jpg",
                title: "Kitchen Area",
            },
            {
                src: "newlanding/interior/b4.jpg",
                title: "Kitchen Area",
            },
            {
                src: "newlanding/interior/b5.jpg",
                title: "Kitchen Area",
            },
            {
                src: "newlanding/interior/b6.jpg",
                title: "Kitchen Area",
            },

        ],
        GalleryImagesWithNames1: [
            {
                src: "newlanding/studio/1.jpg",
                title: "Kitchen Area",
            },
            {
                src: "newlanding/studio/2.jpg",
                title: "Living Area",
            },
            {
                src: "newlanding/studio/4.jpg",
                title: "Living Area",
            },
            {
                src: "newlanding/studio/5.jpg",
                title: "Living Area",
            },

        ],
    };




    const DataPaymentBlock = {
        title: t('DivineAlBarari.paymentSection.title'),
        subTitle: t('DivineAlBarari.paymentSection.subTitle'),
        item1: t('DivineAlBarari.paymentSection.item1'),
        item2: t('DivineAlBarari.paymentSection.item2'),
        item3: t('DivineAlBarari.paymentSection.item3'),
        item4: t('DivineAlBarari.paymentSection.item4'),
        item5: t('DivineAlBarari.paymentSection.item5'),
    }


    const DataProjectDetails6 = [
        {
            amenity: t('amenitiesIcons.subLabel1'),
            values: [
                { iconNo: 25, name: t('amenitiesIcons.items.coWorkingSpace') },
                { iconNo: 43, name: t('amenitiesIcons.items.partyArea') },
                { iconNo: 44, name: t('amenitiesIcons.items.stateOfTheArtGymFacility') }
            ]
        },
        {
            amenity: t('amenitiesIcons.subLabel2'),
            values: [
                { iconNo: 39, name: t('amenitiesIcons.items.outdoorShowers') },
                // { iconNo: 22, name: t('amenitiesIcons.items.beachEntryPool') },
                { iconNo: 45, name: t('amenitiesIcons.items.beachEntryPool') },
                { iconNo: 19, name: t('amenitiesIcons.items.adultPool') },
                { iconNo: 46, name: t('amenitiesIcons.items.dryDeckingArea') },
                { iconNo: 47, name: t('amenitiesIcons.items.wetDeckingArea') },
                // { iconNo: 5, name: "Dry Decking Area" },
                // { iconNo: 6, name: "Wet Decking Area" },
                { iconNo: 27, name: t('amenitiesIcons.items.jacuzzi') },
                { iconNo: 48, name: t('amenitiesIcons.items.sunkenSetting') },
                // { iconNo: 1, name: "Sunken Setting" },
                { iconNo: 24, name: t('amenitiesIcons.items.cabanas') },
                { iconNo: 49, name: t('amenitiesIcons.items.aquaGym') },
                // { iconNo: 3, name: "Aqua Gym" },
                { iconNo: 29, name: t('amenitiesIcons.items.kidsPool') },
                { iconNo: 50, name: t('amenitiesIcons.items.kidsSplashPad') },
                // { iconNo: 5, name: "Kids Splash Pad" },
                { iconNo: 28, name: t('amenitiesIcons.items.kidsPlayArea') },
                { iconNo: 32, name: t('amenitiesIcons.items.outdoorGym') },
                // { iconNo: 1, name: "Family Seating Area" },
                // { iconNo: 2, name: "Casual Setting Area" },
                { iconNo: 26, name: t('amenitiesIcons.items.indoorGym') },
                { iconNo: 43, name: t('amenitiesIcons.items.partyArea') },
                // { iconNo: 4, name: "Party Area" },
                { iconNo: 35, name: t('amenitiesIcons.items.steamAndSaunaArea') },
                { iconNo: 51, name: t('amenitiesIcons.items.zenGarden') },
                { iconNo: 52, name: t('amenitiesIcons.items.electricParking') },
                // { iconNo: 6, name: "Zen Garden" },
            ]
        },
        {
            amenity: t('amenitiesIcons.subLabel3'),
            values: [
                { iconNo: 31, name: t('amenitiesIcons.items.outdoorCinema') },
                // { iconNo: 33, name: t('amenitiesIcons.items.outdoorShadedSeating') },
                { iconNo: 34, name: t('amenitiesIcons.items.smokingLounge') },
                { iconNo: 21, name: t('amenitiesIcons.items.bbqArea') },
                { iconNo: 37, name: t('amenitiesIcons.items.yogaArea') },
                { iconNo: 53, name: t('amenitiesIcons.items.seatingArea') },
                { iconNo: 54, name: t('amenitiesIcons.items.multiPurposeCourt') },
                // { iconNo: 6, name: "Seating Area" },
                // { iconNo: 7, name: "Multi Pourpose Court" },
                { iconNo: 30, name: t('amenitiesIcons.items.miniGolf') },
                { iconNo: 23, name: t('amenitiesIcons.items.boardGamesArea') },
                { iconNo: 36, name: t('amenitiesIcons.items.tableTennisCourt') },
                { iconNo: 20, name: t('amenitiesIcons.items.archeryArea') },
                { iconNo: 55, name: t('amenitiesIcons.items.observatoryPoint') },
                // { iconNo: 5, name: "Observatory Point" },
            ]
        }
    ];

    const DataProjectDetails7 = {
        text1: t('DivineAlBarari.mapSection.title'),
        text2: t('DivineAlBarari.mapSection.content'),
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

    const DataProjectDetails8 = [
        {
            image: "Takmeel-Al-Barrari-View/1 BHK Layout Copy.png",
            pdfFile: "Takmeel-Al-Barrari-View/1 BHK- Al Barari Layout_compressed.pdf"
        },
        {
            image: "Takmeel-Al-Barrari-View/2 BHK Layout Copy.png",
            pdfFile: "Takmeel-Al-Barrari-View//2 BHK- Al Barari Layout_compressed.pdf"
        },
        {
            image: "Takmeel-Al-Barrari-View/3 BHK Layout Copy.png",
            pdfFile: "Takmeel-Al-Barrari-View/3 BHK- Al Barari Layout_compressed.pdf"
        },
        {
            image: "Takmeel-Al-Barrari-View/Studio Layout Copy.png",
            pdfFile: "Takmeel-Al-Barrari-View/Studio- Al Barari Layout_compressed.pdf"
        }
    ]

    return (
        <div>
            <div className="BrariBox">
                <DetailHero {...detailHeroData} />
            </div>
            <ProjectDetails9 data={DataProjectDetails6} />
            <div className="FxdHgtImage">

                <ProjectDetails45 {...DataProjectDetails1} />
            </div>
            {/* <ProjectDetails2 {...DataProjectDetails2} /> */}
            {/* <ProjectDetails6 planImage="plan1.jpg" data={DataProjectDetails6} /> */}

            {/* <ProjectDetails8 data={DataProjectDetails8} /> */}
            <div className="FxdHgtImage">
                <ProjectDetails44  {...DataProjectDetails4} />
            </div>
            {/* <ProjectDetails8 planData={DataProjectDetails8} data={DataProjectDetails6} /> */}
            <ProjectDetails10 planData={DataProjectDetails8} />
            {/* <PaymentPlanBlock {...DataPaymentBlock} /> */}
            {/* <div className="FxdHgtImage">
                <ProjectDetails44  {...DataProjectDetails4} />
            </div> */}
            <ProjectDetails7 mapimage="r2.jpg" mobileMapImage="mapmobilenew.jpg" {...DataProjectDetails7} />
            {/* <ProjectDetails3 mainimage1="ak2.jpg" data={DataProjectDetails3} /> */}
            {/* <ProjectDetails5 panoramaimage="/albararistreet.jpg" /> */}
            {/* <ProjectDetails7 mapimage="mapalb.jpg" {...DataProjectDetails7} /> */}
            <CostCalculator />
            <CtaBroker/>
           
            <PropertyForm projectName="Divine Al Barari" />
            <Footer />
            <FooterBottom />
        </div>
    );
}