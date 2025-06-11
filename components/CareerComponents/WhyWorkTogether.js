'use client'; // optional if using interactivity (like menus)

import Link from 'next/link';
import { motion } from "framer-motion";
import React from "react";
import Image from 'next/image';
import { useTranslations } from 'next-intl';
export default function WhyWorkTogether() {
    const t = useTranslations('Careers');

    return (
        <div className="BlogPostMainArea pd-common bg2">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.5 }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 centerBlock">
                            <div className="BlT2" style={{ margin: '20px' }}>{t('team.title')}</div>
                            <Image
                                src="/team-photo.jpg"
                                width={478}
                                height={253}
                                layout="responsive"
                                alt="Takmeel"
                            />
                            <div className="BlT3" style={{ margin: '20px' }}>{t('team.content')}</div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}