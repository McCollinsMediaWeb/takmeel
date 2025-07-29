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
    const GalleryData1 = {
        // text1: "Snapshots of Success: PR Event Gallery",
        text1: t('section3.title'),
        GalleryImages: [
            "pr/1.jpg",
            "pr/2.jpg",
            "pr/3.jpg",
            "pr/4.jpg",
            "pr/.jpg",
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
            "pr/28.jpg",
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
    return (
        <>
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