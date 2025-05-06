"use client";

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { useGlobalData } from '@/context/GlobalDataContext';
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


            <div className='position-relative pd-common'>

                <div className='container'>
                    {/* <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.5 }}
                    > */}
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className="BlT1 nunito-text text-uppercase">{`${currentNews.date} | ${currentNews.category}`}</div>
                            <div className="BlT2 text-uppercase">{currentNews.heading}​</div>
                            <div className="BlT3">{currentNews.subheading}</div>
                            <div style={{ marginTop: '25px' }} className="BlT3" dangerouslySetInnerHTML={{ __html: currentNews.content }} />
                        </div>
                    </div>
                    {/* </motion.div> */}

                </div>

            </div>

        </div>
    );
};

export default NewsDetails;
