import ProjectItem from "@/components/ProjectItem/ProjectItem";
import { useTranslations } from "next-intl";

export default function ClientComponent() {
    const t = useTranslations('Projects');

    return (
        <>
            <ProjectItem backgroundImage="Takmeel-Al-Barrari-View/Majan 03.jpg"
                backgroundImageMobile="Takmeel-Al-Barrari-View/Mobile Majan 03.jpg"
                text1={t('slider1.preTitle')}
                text2={t('slider1.title')}
                text3={t('slider1.subTitle')}
                tagline={t('slider1.content')}
                url="takmeel-al-barari-view-properties"
                backgroundVideo="tkdesk1.mp4"
                placeholderImage="/cover2.jpg" />
            <ProjectItem
                backgroundImage="Divine-Residencia/Divine residencia main facade.jpg"
                backgroundImageMobile="k1.jpg"
                text1={t('slider2.preTitle')}
                text2={t('slider2.title')}
                text3={t('slider2.subTitle')}
                tagline={t('slider2.content')}
                url="divine-residencia"
                projectStatus={t('soldOut')}
            />
            <ProjectItem
                backgroundImage="bannerDesktopFirst.jpg"
                backgroundImageMobile="bannerMobileFirst.jpg"
                text1={t('slider3.preTitle')}
                text2={t('slider3.title')}
                text3={t('slider3.subTitle')}
                tagline={t('slider3.content')}
                url="divine-living"
                projectStatus={t('soldOut')}
            />
            <ProjectItem
                backgroundImage="ti01.jpg"
                backgroundImageMobile="t21.jpg"
                text1={t('slider4.preTitle')}
                text2={t('slider4.title')}
                text3={t('slider4.subTitle')}
                tagline={t('slider4.content')}
                url="divine-residences"
                projectStatus={t('soldOut')}
            />
            <ProjectItem
                backgroundImage="maydan.jpg"
                backgroundImageMobile="maydan.jpg"
                text1={t('slider5.preTitle')}
                text2={t('slider5.title')}
                text3={t('slider5.subTitle')}
                tagline={t('slider5.content')}
                url="meydan-racecourse-mansion" />

            <ProjectItem
                backgroundImage="Golf-View-Living-Apartments/Golf Apartments 03.jpg"
                backgroundImageMobile="k5.jpg"
                text1={t('slider6.preTitle')}
                text2={t('slider6.title')}
                text3={t('slider6.subTitle')}
                tagline={t('slider6.content')}
                url="golf-view-living-apartments"
                projectStatus={t('soldOut')} />

            <ProjectItem
                backgroundImage="Golf-View-Living-Villas/divine-golf-villas-Facade 03.jpg"
                backgroundImageMobile="vill.jpg"
                text1={t('slider7.preTitle')}
                text2={t('slider7.title')}
                text3={t('slider7.subTitle')}
                tagline={t('slider7.content')}
                url="golf-view-living-villas"
                projectStatus={t('soldOut')} />
        </>
    );
}
