// 'use client';

// import Link from 'next/link';
// import { useState, useRef, useEffect } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import useMediaQuery from "../hooks/useMediaQuery";

// import Lightbox from "yet-another-react-lightbox";
// import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
// import Video from "yet-another-react-lightbox/plugins/video";
// import Zoom from "yet-another-react-lightbox/plugins/zoom";

// import "yet-another-react-lightbox/styles.css";
// import "yet-another-react-lightbox/plugins/thumbnails.css";
// import Slider from "react-slick";
// import image1 from "../../public/view.jpg"

// export default function ProjectDetails5() {
//     const isDesktop = useMediaQuery("(min-width: 960px)");
//     const [open, setOpen] = useState(false);

//     return (
//         <div className='position-relative pd-common ProductDetail5 bg2'>

//             <div className='container'>
//                 <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6, ease: "easeOut" }}
//                     viewport={{ once: true, amount: 0.5 }}
//                 >
//                     <div className='text-center PrdTxt1 nunito-text text-uppercase'>Experience a 360° Virtual Property Tour</div>
//                     <div className='text-center PrdTxt2'>Discover a Fully Interactive 360° Panorama</div>
//                     <div className='View360Box'>
//                         <div className='ViewBlock position-relative'>
//                             <Image
//                                 src={image1}
//                                 width={1240}
//                                 height={614}
//                                 layout="responsive"
//                                 alt="Takmeel"
//                             />
//                             <div className='ViewBlockContent'>
//                                 <div>
//                                     <div className='ViewBlockIcon'>&nbsp;</div>
//                                     <div className='ViewBlockTxt'>360 View</div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </motion.div>

//             </div>

//         </div>
//     );
// }

'use client';

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";

import { Viewer } from '@photo-sphere-viewer/core';
import '@photo-sphere-viewer/core/index.css';

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

export default function ProjectDetails5() {
    const isDesktop = useMediaQuery("(min-width: 960px)");
    const viewerRef = useRef(null);
    const [viewer, setViewer] = useState(null);

    useEffect(() => {
        if (viewerRef.current && !viewer) {
            const newViewer = new Viewer({
                container: viewerRef.current,
                panorama: '/360-video.jpg', // ✅ Use path relative to /public
                navbar: ['zoom', 'fullscreen'],
                defaultYaw: 0,
                defaultPitch: 0,
            });
            setViewer(newViewer);
        }
    }, [viewer]);

    return (
        <div className='position-relative pd-common ProductDetail5 bg2'>
            <div className='container'>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <div className='text-center PrdTxt1 nunito-text text-uppercase'>
                        Experience a 360° Virtual Property Tour
                    </div>
                    <div className='text-center PrdTxt2'>
                        Discover a Fully Interactive 360° Panorama
                    </div>
                    <div className='View360Box'>
                        <div className='ViewBlock position-relative'>
                            <div
                                ref={viewerRef}
                                id="viewer"
                                style={{ width: '100%', height: '500px' }}
                            ></div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

