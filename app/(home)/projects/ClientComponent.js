import ProjectItem from "@/components/ProjectItem/ProjectItem";
import { useTranslations } from "next-intl";

export default function ClientComponent() {
    const t = useTranslations('HomePage');

    return (
        <>
            {/* 1. Divine Al Barari */}
            <ProjectItem
                backgroundImage="Takmeel-Al-Barrari-View/Majan 03.jpg"
                backgroundImageMobile="Takmeel-Al-Barrari-View/Mobile Majan 03.jpg"
                text1={t('slider2.preTitle')}
                text2={t('slider2.title')}
                text3={t('slider2.subTitle')}
                tagline={t('slider2.content')}
                url="takmeel-al-barari-view-properties"
                backgroundVideo="Takmeel-Al-Barrari-View/Al-Barari-Video-3.mp4"
                placeholderImage="Takmeel-Al-Barrari-View/Al-Barari-Cover-2.png"
            />

            {/* 2. Divine Elements */}
            <ProjectItem
                backgroundImage="Takmeel-Al-Barrari-View/Majan 03.jpg"
                backgroundImageMobile="Takmeel-Al-Barrari-View/Mobile Majan 03.jpg"
                text1={t('slider10.preTitle')}
                text2={t('slider10.title')}
                text3={t('slider10.subTitle')}
                tagline={t('slider10.content')}
                url="divine-elements-page"
                backgroundVideo="divine-elements-video-2.mp4"
                placeholderImage="divine-element-frame.png"
            />

            {/* 3. The Meydan Villa project */}
            <ProjectItem
                backgroundImage="maydan.jpg"
                backgroundImageMobile="maydan.jpg"
                text1={t('slider6.preTitle')}
                text2={t('slider6.title')}
                text3={t('slider6.subTitle')}
                tagline={t('slider6.content')}
                url="meydan-racecourse-mansion"
            />

            {/* 4. New Dubai South Project (Blurred Façade & Name Concealed) */}
            <ProjectItem
                backgroundImage="new-project.jpg"
                backgroundImageMobile="new-project.jpg"
                text1={t('slider12.preTitle')}
                text2={t('slider12.title')}
                text3={t('slider12.subTitle')}
                tagline={t('slider12.content')}
                url="#"
                isBlurred={true}
            />

            {/* 5. Divine Villas (in JVC) – SOLD OUT */}
            <ProjectItem
                backgroundImage="Golf-View-Living-Villas/divine-golf-villas-Facade 03.jpg"
                backgroundImageMobile="vill.jpg"
                text1={t('slider11.preTitle')}
                text2={t('slider11.title')}
                text3={t('slider11.subTitle')}
                tagline={t('slider11.content')}
                url="#"
                projectStatus={t('soldOut')}
            />

            {/* 6. Older Projects */}
            <ProjectItem
                backgroundImage="Divine-Residencia/Divine residencia main facade.jpg"
                backgroundImageMobile="k1.jpg"
                text1={t('slider3.preTitle')}
                text2={t('slider3.title')}
                text3={t('slider3.subTitle')}
                tagline={t('slider3.content')}
                url="divine-residencia"
                projectStatus={t('soldOut')}
            />
            <ProjectItem
                backgroundImage="bannerDesktopFirst.jpg"
                backgroundImageMobile="bannerMobileFirst.jpg"
                text1={t('slider4.preTitle')}
                text2={t('slider4.title')}
                text3={t('slider4.subTitle')}
                tagline={t('slider4.content')}
                url="divine-living"
                projectStatus={t('soldOut')}
            />
            <ProjectItem
                backgroundImage="ti011.jpg"
                backgroundImageMobile="t211.jpg"
                text1={t('slider5.preTitle')}
                text2={t('slider5.title')}
                text3={t('slider5.subTitle')}
                tagline={t('slider5.content')}
                url="divine-residences"
                projectStatus={t('soldOut')}
            />
            <ProjectItem
                backgroundImage="Golf-View-Living-Apartments/Golf Apartments 03.jpg"
                backgroundImageMobile="k5.jpg"
                text1={t('slider7.preTitle')}
                text2={t('slider7.title')}
                text3={t('slider7.subTitle')}
                tagline={t('slider7.content')}
                url="golf-view-living-apartments"
                projectStatus={t('soldOut')}
            />
            <ProjectItem
                backgroundImage="Golf-View-Living-Villas/divine-golf-villas-Facade 03.jpg"
                backgroundImageMobile="vill.jpg"
                text1={t('slider8.preTitle')}
                text2={t('slider8.title')}
                text3={t('slider8.subTitle')}
                tagline={t('slider8.content')}
                url="golf-view-living-villas"
                projectStatus={t('soldOut')}
            />
        </>
    );
}
