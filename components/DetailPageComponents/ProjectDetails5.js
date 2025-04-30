'use client';

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";

import { Viewer } from '@photo-sphere-viewer/core';
import '@photo-sphere-viewer/core/index.css';

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

export default function ProjectDetails5({ panoramaimage }) {
    const isDesktop = useMediaQuery("(min-width: 960px)");
    const viewerRef = useRef(null);
    const [viewer, setViewer] = useState(null);
    const [isFullScreen, setIsFullScreen] = useState(false);

    // useEffect(() => {
    //     if (viewerRef.current && !viewer) {
    //         const newViewer = new Viewer({
    //             container: viewerRef.current,
    //             panorama: '/360-video.jpg', // ✅ Use path relative to /public
    //             navbar: ['zoom', 'fullscreen'],
    //             defaultYaw: 0,
    //             defaultPitch: 0,
    //         });

    //         setViewer(newViewer);
    //     }
    // }, [viewer]);

    useEffect(() => {
        let newViewer;

        if (viewerRef.current) {
            newViewer = new Viewer({
                container: viewerRef.current,
                panorama: panoramaimage ,
                navbar: ['zoom', 'fullscreen'],
                defaultYaw: 0,
                defaultPitch: 0,
            });

            setViewer(newViewer);
        }

        return () => {
            if (newViewer) {
                newViewer.destroy();
            }
        };
    }, []);




    return (
        <div className='position-relative pd-common ProductDetail5 bg2'>
            <div className='container'>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
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
                    <div className='View360Box position-relative'>
                        <div
                            className="boxC1"
                            ref={viewerRef}
                            id="viewer"
                            style={{
                                width: '100%',
                                height: isDesktop ? '500px' : '300px',
                            }}
                        ></div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}