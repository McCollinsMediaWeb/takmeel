'use client';
import { useEffect } from 'react';
import GalleryRow from "./GalleryRow";
import { useTranslations } from 'next-intl';
export default function GalleryClient() {
    const t = useTranslations('Gallery');

    useEffect(() => {
        const screenWidth = window.innerWidth;

        // Set width on all elements with the class 'screenWidth'
        const elements = document.querySelectorAll('.screenWidth');
        elements.forEach((el) => {
            el.style.width = `${screenWidth}px`;
        });
    }, []);

    useEffect(() => {
        const updateHeights = () => {
            const header = document.querySelector('header');
            const headerHeight = header?.offsetHeight || 0;
            const windowHeight = window.innerHeight;
            const availableHeight = windowHeight - headerHeight;

            const elements = document.querySelectorAll('.ScreenHeight');
            elements.forEach((el) => {
                el.style.height = `${availableHeight}px`;
            });
        };

        updateHeights();
        window.addEventListener('resize', updateHeights);

        return () => window.removeEventListener('resize', updateHeights);
    }, []);

    const constructionGalleryJuly = {
        text1: "Construction Update, Divine Al Barari - 23 July 2026",
        GalleryImages: [
            "constructionJuly/1.jpg",
            "constructionJuly/2.jpg",
            "constructionJuly/3.jpg",
            "constructionJuly/4.jpg",
            "constructionJuly/5.jpg",
            "constructionJuly/6.jpg",
            "constructionJuly/7.jpg",
            "constructionJuly/8.jpg",
            "constructionJuly/9.jpg",
            "constructionJuly/10.jpg",
            "constructionJuly/11.jpg",
            "constructionJuly/12.jpg",
            "constructionJuly/13.jpg",
            "constructionJuly/14.jpg",
            "constructionJuly/15.jpg",
            "constructionJuly/16.jpg",
            "constructionJuly/17.jpg",
            "constructionJuly/18.jpg",
            "constructionJuly/19.jpg",
            "constructionJuly/20.jpg",
            "constructionJuly/21.jpg",
            "constructionJuly/22.jpg",
            "constructionJuly/23.jpg",
            "constructionJuly/24.jpg",
            "constructionJuly/25.jpg",
            "constructionJuly/26.jpg",
        ]
    }


    const latestConstructionGallery = {
        text1: "Construction Update, Divine Al Barari - 19 May 2026",
        GalleryImages: [
            "construction1/DSC_3318.jpg",
            "construction1/DSC_3327.jpg",
            "construction1/DSC_3329.jpg",
            "construction1/DSC_3331.jpg",
            "construction1/DSC_3335.jpg",
            "construction1/DSC_3341.jpg",
            "construction1/DSC_3345.jpg",
            "construction1/DSC_3375.jpg",
            "construction1/DSC_3402.jpg",
            "construction1/DSC_3404.jpg",
            "construction1/DSC_3424.jpg",
            "construction1/DSC_3430.jpg",
            "construction1/DSC_3431.jpg",
            "construction1/DSC_3437.jpg",
            "construction1/DSC_3439.jpg",
            "construction1/DSC_3442.jpg",
            "construction1/DSC_3447.jpg",
            "construction1/DSC_3450.jpg",
            "construction1/DSC_3454.jpg",
        ]
    };
    const constructionGallery = {
        text1: "Construction Update, Divine Al Barari - 17 April 2026",
        GalleryImages: [
            "construction/111.jpg",
            "construction/22.jpg",
            "construction/1.jpg",
            "construction/2.jpg",
            "construction/3.jpg",
            "construction/4.jpg",
            "construction/5.jpg",
            "construction/6.jpg",
            "construction/7.jpg",
            "construction/8.jpg",
            "construction/9.jpg",
            "construction/10.jpg",
            "construction/11.jpg",
            "construction/12.jpg",
            "construction/13.jpg",
            "construction/14.jpg",

        ]
    };
    const EventGalley = {
        text1: "Takmeel Broker's Breakfast - April",
        GalleryImages: [
            "event/15.jpg",
            "event/14.jpg",
            "event/13.jpg",
            "event/12.jpg",
            "event/11.jpg",
            "event/10.jpg",
            "event/9.jpg",
            "event/8.jpg",
            "event/7.jpg",
            "event/6.jpg",
            "event/5.jpg",
            "event/4.jpg",
            "event/3.jpg",
            "event/2.jpg",
            "event/1.jpg",

        ]
    };

    const GalleryData12 = {
        text1: t('section7.title'),
        GalleryImages: [
            "ifthar/1.jpg",
            "ifthar/2.jpg",
            "ifthar/3.jpg",
            "ifthar/4.jpg",
            "ifthar/5.jpg",
            "ifthar/6.jpg",
            "ifthar/7.jpg",
            "ifthar/8.jpg",
            "ifthar/9.jpg",
            "ifthar/10.jpg",
            "ifthar/11.jpg",
            "ifthar/12.jpg",
            "ifthar/13.jpg",
            "ifthar/14.jpg",
            "ifthar/15.jpg",
            "ifthar/16.jpg",
            "ifthar/17.jpg",
            "ifthar/18.jpg",
            "ifthar/19.jpg",
            "ifthar/20.jpg",
            "ifthar/21.jpg",
            "ifthar/22.jpg",
            // "ifthar/23.jpg",
            "ifthar/232.jpeg",
            "ifthar/24.jpg",
            "ifthar/25.jpg",
            "ifthar/26.jpg",
            "ifthar/27.jpg"

        ]
    };

    const GalleryData11 = {
        // text1: "A Glimpse Of Our Sales Centre",
        text1: t('section6.title'),
        GalleryImages: [
            "sales/1.jpg",
            "sales/2.jpg",
            "sales/3.jpg",
            "sales/4.jpg",
            "sales/5.jpg",
            "sales/6.jpg",
            "sales/7.jpg",
            "sales/8.jpg",
            "sales/9.jpg",
            "sales/10.jpg",
            "sales/11.jpg",
            "sales/12.jpg",
            "sales/13.jpg",
            "sales/14.jpg",
            "sales/15.jpg",
            "sales/16.jpg",
            "sales/17.jpg",
            "sales/18.jpg",
            "sales/19.jpg",
            "sales/20.jpg",
            "sales/21.jpg",
            "sales/22.jpg",
            "sales/23.jpg",
            "sales/24.jpg",
            "sales/25.jpg",
            "sales/26.jpg",
            "sales/27.jpg",
            "sales/28.jpg",
            "sales/29.jpg",
            "sales/30.jpg",
            "sales/31.jpg",

        ]
    };
    const GalleryData22 = {
        // text1: "A Glimpse Of Our Sales Centre",
        text1: t('section5.title'),
        GalleryImages: [
            "divine/1.jpg",
            "divine/2.jpg",
            "divine/3.jpg",
            "divine/4.jpg",
            "divine/5.jpg",
            "divine/6.jpg",
            "divine/7.jpg",
            "divine/8.jpg",
            "divine/9.jpg",
            "divine/10.jpg",
            "divine/11.jpg",
            "divine/12.jpg",
            "divine/13.jpg",
            "divine/14.jpg",
            "divine/15.jpg",
            "divine/16.jpg",
            "divine/17.jpg",
            "divine/18.jpg",
            "divine/19.jpg",
            "divine/20.jpg",
            "divine/21.jpg",
            "divine/22.jpg",
            "divine/23.jpg",
            "divine/24.jpg",
            "divine/25.jpg",
            "divine/26.jpg",
            "divine/27.jpg",
            "divine/28.jpg",
            "divine/29.jpg",

        ]
    };
    const GalleryData1 = {
        // text1: "Snapshots of Success: PR Event Gallery",
        text1: t('section3.title'),
        GalleryImages: [
            "pr/1.jpg",
            "pr/2.jpg",
            "pr/3.jpg",
            "pr/4.jpg",
            "pr/5.jpg",
            "pr/6.jpg",
            "pr/7.jpg",
            "pr/8.jpg",
            "pr/9.jpg",
            "pr/10.jpg",
            "pr/11.jpg",
            "pr/12.jpg",
            "pr/13.jpg",
            "pr/14.jpg",
            "pr/15.jpg",
            "pr/16.jpg",
            "pr/17.jpg",
            "pr/18.jpg",
            "pr/19.jpg",
            "pr/20.jpg",
            "pr/21.jpg",
            "pr/22.jpg",
            "pr/23.jpg",
            "pr/24.jpg",
            "pr/25.jpg",
            "pr/26.jpg",
            "pr/27.jpg",
            // "pr/28.jpg",
            "pr/29.jpg",
            "pr/30.jpg",
            "pr/31.jpg",
            "pr/32.jpg",
            "pr/33.jpg",
            "pr/34.jpg",
            "pr/35.jpg",

        ]
    };
    const GalleryData = {
        text1: t('section1.title'),
        GalleryImages: [
            "gallery/1.jpg",
            "gallery/2.jpg",
            "gallery/3.jpg",
            "gallery/4.jpg",
            "gallery/5.jpg",
            "gallery/6.jpg",
            "gallery/7.jpg",
            "gallery/8.jpg",
            "gallery/9.jpg",
            "gallery/10.jpg",
            "gallery/11.jpg",
            "gallery/12.jpg",
            "gallery/13.jpg",
            "gallery/14.jpg",
            "gallery/15.jpg",
            "gallery/16.jpg",
            "gallery/17.jpg",
            "gallery/18.jpg",

        ]
    };
    const GalleryData2 = {
        text1: t('section2.title'),
        GalleryImages: [
            "gallery2/1.jpg",
            "gallery2/2.jpg",
            "gallery2/3.jpg",
            "gallery2/4.jpg",
            "gallery2/5.jpg",
            "gallery2/6.jpg",
            "gallery2/7.jpg",
            "gallery2/8.jpg",
            "gallery2/9.jpg",
            "gallery2/10.jpg",
            "gallery2/11.jpg",
            "gallery2/12.jpg",
            "gallery2/13.jpg",
            "gallery2/14.jpg",
            "gallery2/15.jpg",
            "gallery2/16.jpg",
            "gallery2/17.jpg",
            "gallery2/18.jpg",

        ]

    };

    const GalleryData3 = {
        text1: t('section4.title'),
        GalleryImages: [
            "gallery4/McCO (16 of 160).jpg",
            "gallery4/McCO (1 of 160).jpg",
            "gallery4/McCO (3 of 160).jpg",
            "gallery4/McCO (14 of 160).jpg",
            "gallery4/McCO (15 of 160).jpg",

            "gallery4/McCO (25 of 160).jpg",
            "gallery4/McCO (13 of 160).jpg",
            "gallery4/McCO (30 of 160).jpg",
            "gallery4/McCO (36 of 160).jpg",

            "gallery4/McCO (39 of 160).jpg",
            // "gallery4/McCO (46 of 160).jpg",
            // "gallery4/McCO (47 of 160).jpg",
            "gallery4/McCO (63 of 160).jpg",
            "gallery4/McCO (65 of 160).jpg",

            "gallery4/McCO (66 of 160).jpg",
            "gallery4/McCO (74 of 160).jpg",
            "gallery4/McCO (90 of 160).jpg",
            "gallery4/McCO (91 of 160).jpg",
            "gallery4/McCO (92 of 160).jpg",

            "gallery4/McCO (94 of 160).jpg",
            "gallery4/McCO (95 of 160).jpg",
            "gallery4/McCO (100 of 160).jpg",
            "gallery4/McCO (101 of 160).jpg",
            "gallery4/McCO (102 of 160).jpg",

            "gallery4/McCO (103 of 160).jpg",
            "gallery4/McCO (105 of 160).jpg",
            "gallery4/McCO (106 of 160).jpg",
            "gallery4/McCO (111 of 160).jpg",
            "gallery4/McCO (112 of 160).jpg",

            "gallery4/McCO (114 of 160).jpg",
            "gallery4/McCO (115 of 160).jpg",
            "gallery4/McCO (116 of 160).jpg",
            "gallery4/McCO (118 of 160).jpg",
            "gallery4/McCO (121 of 160).jpg",

            "gallery4/McCO (124 of 160).jpg",
            "gallery4/McCO (126 of 160).jpg",
            "gallery4/McCO (127 of 160).jpg",
            "gallery4/McCO (128 of 160).jpg",
            "gallery4/McCO (130 of 160).jpg",

            "gallery4/McCO (132 of 160).jpg",
            "gallery4/McCO (133 of 160).jpg",
            "gallery4/McCO (134 of 160).jpg",
            "gallery4/McCO (135 of 160).jpg",
            "gallery4/McCO (136 of 160).jpg",

            "gallery4/McCO (137 of 160).jpg",
            "gallery4/McCO (138 of 160).jpg",
            "gallery4/McCO (139 of 160).jpg",
            "gallery4/McCO (141 of 160).jpg",
            "gallery4/McCO (147 of 160).jpg",

            // "gallery4/McCO (148 of 160).jpg",
            "gallery4/5.jpg",
            // "gallery4/McCO (150 of 160).jpg",
            "gallery4/ARJ04824.jpg",
            "gallery4/McCO (158 of 160).jpg",
        ]

    };

    return (
        <>

            <div className="bg2 NoPagination FixedImageHeight ImagePositionTop">
                <GalleryRow t={t} {...constructionGalleryJuly} />
            </div>
            <div className="bg2 NoPagination FixedImageHeight ImagePositionTop">
                <GalleryRow t={t} {...latestConstructionGallery} />
            </div>
            <div className="bg2 NoPagination FixedImageHeight ImagePositionTop">
                <GalleryRow t={t}  {...EventGalley} />
            </div>
            <div className="bg2 NoPagination FixedImageHeight ImagePositionTop">
                <GalleryRow t={t}  {...constructionGallery} />
            </div>
            <div className="bg2 NoPagination FixedImageHeight ImagePositionTop">
                <GalleryRow t={t}  {...GalleryData12} />
            </div>
            <div className="bg2 NoPagination">
                <GalleryRow t={t}  {...GalleryData11} />
            </div>
            <div className="bg2 NoPagination FixedImageHeight">
                <GalleryRow t={t}  {...GalleryData22} />
            </div>
            <div className="bg2 NoPagination">
                <GalleryRow t={t}  {...GalleryData3} />
            </div>
            <div className="bg2 NoPagination">
                <GalleryRow t={t}  {...GalleryData1} />
            </div>
            <GalleryRow t={t}  {...GalleryData} />
            <div className="bg2">
                <GalleryRow t={t}  {...GalleryData2} />
            </div>
        </>
    );
}
