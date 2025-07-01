'use client'; // optional if using interactivity (like menus)
import Image from "next/image";
import Link from 'next/link';
import { motion } from "framer-motion";
import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";


export default function FAQbox() {
    const t = useTranslations('FAQS');
    const locale = useLocale();
    const [activeIndex, setActiveIndex] = useState(0); // Start with the first item open

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    const accordionItems = [
        // {
        //     question: t('item1.question'),
        //     answer: t('item1.answer'),
        // },
        // {
        //     question: t('item2.question'),
        //     answer: t('item2.answer'),
        // },
        // {
        //     question: t('item3.question'),
        //     answer: t('item3.answer'),
        // },
        // {
        //     question: t('item5.question'),
        //     answer: t('item5.answer'),
        // },
        // {
        //     question: t('item6.question'),
        //     answer: t('item6.answer'),
        // },
        // {
        //     question: t('item9.question'),
        //     answer: t('item9.answer'),
        // },
        // {
        //     question: t('item10.question'),
        //     answer: t('item10.answer'),
        // },

        {
            question: t('item11.question'),
            answer: t('item11.answer'),
        },
        {
            question: t('item12.question'),
            answer: t('item12.answer'),
        },
        {
            question: t('item13.question'),
            answer: t('item13.answer'),
        },
        {
            question: t('item14.question'),
            answer: t('item14.answer'),
        },
        {
            question: t('item15.question'),
            answer: t('item15.answer'),
        },
        {
            question: t('item16.question'),
            answer: t('item16.answer'),
        },
        {
            question: t('item17.question'),
            answer: t('item17.answer'),
        },
        {
            question: t('item18.question'),
            answer: t('item18.answer'),
        },
        {
            question: t('item19.question'),
            answer: t('item19.answer'),
        },
        {
            question: t('item20.question'),
            answer: t('item20.answer'),
        },
        {
            question: t('item21.question'),
            answer: t('item21.answer'),
        },
        {
            question: t('item22.question'),
            answer: t('item22.answer'),
        }
    ];
    return (
        <div className="FaqBoxWrp pd-common bg2">
            <div className="container">
                <div className="text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <div className="Ft1">{t('title')}</div>
                    </motion.div>
                </div>
                <div className="Accordionitems">
                    {accordionItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            <div
                                key={index}
                                className={`Accordion ${activeIndex === index ? "active" : ""}`}
                                onClick={() => toggleAccordion(index)}
                                style={{
                                    cursor: 'pointer',
                                    textAlign: locale === 'ar' ? 'right' : 'left'
                                }}
                            >
                                <div className="AccordionQuestion">{item.question}</div>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 15 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8, ease: "easeOut" }}
                                        viewport={{ once: true, amount: 0.5 }}
                                    >
                                        <div className="AccordionAnswer nunito-text">{item.answer}</div>
                                    </motion.div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
