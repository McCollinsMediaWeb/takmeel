"use client";

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import ProjectDetails1 from '@/components/DetailPageComponents/ProjectDetails1';
import { useGlobalData } from '@/context/GlobalDataContext';
import DetailHero from '@/components/DetailPageComponents/DetailHero';
import useMediaQuery from '@/components/hooks/useMediaQuery';
import { motion } from 'framer-motion';
import Image from 'next/image';

const NewsDetails = () => {
    const { id } = useParams();
    const { news } = useGlobalData();
    const [currentNews, setCurrentNews] = useState(null);
    const isDesktop = useMediaQuery('(min-width: 960px)');

    useEffect(() => {
        if (!id) return;

        const found = news?.find((n) => n._id === id);
        if (found) {
            setCurrentNews(found);
        } else {
            // fallback: fetch from backend
            fetch(`/api/news/${id}`)
                .then(res => res.json())
                .then(data => setCurrentNews(data.data))
                .catch(err => console.error(err));
        }
    }, [id, news]);

    if (!id || !currentNews) return <div>Loading...</div>;

    const dataProps = {
        text1: `${currentNews.date} | ${currentNews.category}`,
        text2: currentNews.heading,
        text3: currentNews.content,
        GalleryImages: [],
    };


    return (
        <div>
            <div className="FullScreenBanner DetHero position-relative">
                <div>
                    {isDesktop ? (
                        <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            <Image
                                src={currentNews.coverImage}
                                width={1338}
                                height={714}
                                layout="responsive"
                                alt="Takmeel"
                                loading="lazy"
                            />
                        </motion.div>
                    ) : (
                        <Image
                            src={currentNews.coverImage}
                            width={697}
                            height={768}
                            layout="responsive"
                            alt="Takmeel"
                            loading="lazy"
                        />
                    )}
                </div>
                <div className="DetSlContentBox">
                    <div className="container">

                    </div>
                </div>
            </div>
            <ProjectDetails1 {...dataProps} />
        </div>
    );
};

export default NewsDetails;
