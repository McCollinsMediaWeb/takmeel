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
        text1: "Inside the Event: A PR Evening to Remember",
        GalleryImages: [
            "pr/pr2.jpg",
            "pr/pr3.jpg",
            "pr/pr4.jpg",
            "pr/pr5.jpg",
            "pr/pr6.jpg",
            "pr/pr7.jpg",
            "pr/pr8.jpg",
            "pr/pr9.jpg",
            "pr/pr10.jpg",
            "pr/pr11.jpg",
            "pr/pr12.jpg",
            "pr/pr13.jpg",
            "pr/pr14.jpg",
            "pr/pr15.jpg",
            "pr/pr16.jpg",
            "pr/pr17.jpg",
            "pr/pr18.jpg",
            "pr/pr19.jpg",
            "pr/pr20.jpg",
            "pr/pr21.jpg",
            "pr/pr22.jpg",
            "pr/pr23.jpg",
            "pr/pr24.jpg",
            "pr/pr25.jpg",
            "pr/pr26.jpg",
            "pr/pr27.jpg",
            "pr/pr28.jpg",
            "pr/pr29.jpg",
            "pr/pr30.jpg",
            "pr/pr31.jpg",
            "pr/pr32.jpg",
            "pr/pr33.jpg",
            "pr/pr34.jpg",
            "pr/pr35.jpg",
            "pr/pr36.jpg",
            "pr/pr37.jpg",

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
            <div className="bg2">
                <GalleryRow t={t}  {...GalleryData1} />
            </div>
            <GalleryRow t={t}  {...GalleryData} />
            <div className="bg2">
                <GalleryRow t={t}  {...GalleryData2} />
            </div>
        </>
    );
}