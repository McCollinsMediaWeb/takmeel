"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Lightbox from "yet-another-react-lightbox"
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails"
import Video from "yet-another-react-lightbox/plugins/video"
import Zoom from "yet-another-react-lightbox/plugins/zoom"

import "yet-another-react-lightbox/styles.css"
import "yet-another-react-lightbox/plugins/thumbnails.css"

const VISIBLE_IMAGES = 3

export default function GalleryRow({ t, text1, subTitle, GalleryImages = [], reverse = false, focusTop = false }) {
    const [activeIndex, setActiveIndex] = useState(0)
    const [lightboxIndex, setLightboxIndex] = useState(-1)
    const imageCount = GalleryImages.length
    const visibleImages = Array.from({ length: Math.min(VISIBLE_IMAGES, imageCount) }, (_, offset) => {
        const index = (activeIndex + offset) % imageCount
        return { src: GalleryImages[index], index }
    })

    const changeSlide = (direction) => {
        if (!imageCount) return
        setActiveIndex((current) => (current + direction + imageCount) % imageCount)
    }

    return (
        <section className={`galleryChapter ${reverse ? "galleryChapterReverse" : ""} ${focusTop ? "galleryChapterFocusTop" : ""}`}>
            <motion.div
                className="galleryChapterInner"
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className="galleryChapterImages">
                    {visibleImages.map(({ src, index }, position) => (
                        <button
                            type="button"
                            className={`galleryChapterImage galleryChapterImage${position + 1}`}
                            key={`${src}-${index}`}
                            onClick={() => setLightboxIndex(index)}
                            aria-label={`Open image ${index + 1} of ${imageCount}`}
                        >
                            <Image
                                src={`/${src}`}
                                fill
                                sizes={position === 0 ? "(min-width: 1024px) 56vw, 100vw" : "(min-width: 1024px) 22vw, 50vw"}
                                alt={`${text1} — image ${index + 1}`}
                                loading="lazy"
                            />
                        </button>
                    ))}

                    <div className="galleryChapterOverlay">
                        <div className="galleryChapterEyebrow">{subTitle || t("section1.subTitle")}</div>
                        <h2>{text1}</h2>
                        <div className="galleryChapterMeta">
                            <span>{imageCount} Images</span>
                            <button type="button" onClick={() => setLightboxIndex(activeIndex)}>View gallery</button>
                        </div>
                    </div>

                    <div className="galleryChapterControls" aria-label={`${text1} gallery controls`}>
                        <button type="button" onClick={() => changeSlide(-1)} aria-label="Previous images">
                            <Image src="/next.png" width={18} height={18} alt="" className="galleryChapterArrow galleryChapterArrowPrevious" />
                        </button>
                        <button type="button" onClick={() => changeSlide(1)} aria-label="Next images">
                            <Image src="/next.png" width={18} height={18} alt="" className="galleryChapterArrow" />
                        </button>
                    </div>
                </div>
            </motion.div>

            <Lightbox
                open={lightboxIndex >= 0}
                index={Math.max(lightboxIndex, 0)}
                close={() => setLightboxIndex(-1)}
                plugins={[Video, Thumbnails, Zoom]}
                slides={GalleryImages.map((img) => ({ src: `/${img}` }))}
            />
        </section>
    )
}
