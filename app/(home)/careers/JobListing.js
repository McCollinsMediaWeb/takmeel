'use client';
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function JobListing() {
    const t = useTranslations('Careers');
    const animationVariants = [
        { initial: { opacity: 0, y: 50 }, whileInView: { opacity: 1, y: 0 } },
        { initial: { opacity: 0, x: -50 }, whileInView: { opacity: 1, x: 0 } },
        { initial: { opacity: 0, x: 50 }, whileInView: { opacity: 1, x: 0 } },
        { initial: { opacity: 0, scale: 0.8 }, whileInView: { opacity: 1, scale: 1 } },
        { initial: { opacity: 0, rotate: -10 }, whileInView: { opacity: 1, rotate: 0 } },
        { initial: { opacity: 0 }, whileInView: { opacity: 1 }, transition: { duration: 1.5 } }
    ];

    const [visibleIndexes, setVisibleIndexes] = useState([]);

    const toggleVisibility = (index) => {
        setVisibleIndexes((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
    };

    return (
        <section className="pd-common bg">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <div className="text-center">
                        <div className="CfT1 nunito-text">{t('vacancies.subTitle')}</div>
                        <div className="CfT2">
                            {t('vacancies.title')}<br />
                            {t('vacancies.titleLine2')}
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <div className="StageBox">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="StageItemBox text-center">
                                    <motion.div
                                        initial={animationVariants[0].initial}
                                        whileInView={animationVariants[0].whileInView}
                                        transition={{ duration: 0.8, ease: "easeOut" }}
                                        viewport={{ once: true, amount: 0.5 }}
                                    >
                                        <div className="JobBox bg2">
                                            <div className="JobBoxT1">{t('vacancies.role1.position')}</div>
                                            <div className="JobBoxT2">{t('vacancies.role1.content')}</div>
                                            <div className="ReadMoreBox" style={{ display: visibleIndexes.includes(1) ? 'block' : 'none' }}>
                                                <div className="JobBoxT3">{t('vacancies.role1.duties.title')}</div>
                                                <ul className="JobulLi">
                                                    <li>{t('vacancies.role1.duties.item1')}</li>
                                                    <li>{t('vacancies.role1.duties.item2')}</li>
                                                    <li>{t('vacancies.role1.duties.item3')}</li>
                                                    <li>{t('vacancies.role1.duties.item4')}</li>
                                                    <li>{t('vacancies.role1.duties.item5')}</li>
                                                    <li>{t('vacancies.role1.duties.item6')}</li>
                                                    <li>{t('vacancies.role1.duties.item7')}</li>
                                                    <li>{t('vacancies.role1.duties.item8')}</li>
                                                    <li>{t('vacancies.role1.duties.item9')}</li>
                                                </ul>
                                                <div className="JobBoxT3"><li>{t('vacancies.role1.duties2.title')}</li></div>
                                                <ul className="JobulLi">
                                                    <li>{t('vacancies.role1.duties2.item1')}</li>
                                                    <li>{t('vacancies.role1.duties2.item2')}</li>
                                                    <li>{t('vacancies.role1.duties2.item3')}</li>
                                                    <li>{t('vacancies.role1.duties2.item4')}</li>
                                                    <li>{t('vacancies.role1.duties2.item5')}</li>
                                                    <li>{t('vacancies.role1.duties2.item6')}</li>
                                                    <li>{t('vacancies.role1.duties2.item7')}</li>
                                                    <li>{t('vacancies.role1.duties2.item8')}</li>
                                                    <li>{t('vacancies.role1.duties2.item9')}</li>
                                                </ul>
                                                <div className="JobBoxT3"><li>{t('vacancies.role1.qualification.title')}</li></div>
                                                <ul className="JobulLi">
                                                    <li>{t('vacancies.role1.qualification.item1')}</li>
                                                    <li>{t('vacancies.role1.qualification.item2')}</li>
                                                    <li>{t('vacancies.role1.qualification.item3')}</li>
                                                    <li>{t('vacancies.role1.qualification.item4')}</li>
                                                    <li>{t('vacancies.role1.qualification.item5')}</li>
                                                    <li>{t('vacancies.role1.qualification.item6')}</li>
                                                    <li>{t('vacancies.role1.qualification.item7')}</li>
                                                    <li>{t('vacancies.role1.qualification.item8')}</li>
                                                    <li>{t('vacancies.role1.qualification.item9')}</li>
                                                </ul>
                                                <div className="JobNote"><li>{t('vacancies.note')}</li></div>
                                            </div>
                                            <div className="JobButtons">
                                                {/* <span className="ViewAlldetails Link6 hover1" >View All Details</span> */}
                                                <span className="ViewAlldetails Link6 hover1" onClick={() => toggleVisibility(1)} >{visibleIndexes.includes(1) ? t('vacancies.hideDetails') : t('vacancies.showDetails')}</span>
                                                <a href="#careerform" className="Link6 hover1">{t('vacancies.applyNow')}</a>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="StageItemBox text-center">
                                    <motion.div
                                        initial={animationVariants[1].initial}
                                        whileInView={animationVariants[1].whileInView}
                                        transition={{ duration: 0.8, ease: "easeOut" }}
                                        viewport={{ once: true, amount: 0.5 }}
                                    >

                                        <div className="JobBox bg2">
                                            <div className="JobBoxT1">{t('vacancies.role2.position')}</div>
                                            <div className="JobBoxT2">{t('vacancies.role2.content')}</div>
                                            <div className="ReadMoreBox" style={{ display: visibleIndexes.includes(2) ? 'block' : 'none' }}>
                                                <div className="JobBoxT3">{t('vacancies.role2.duties.title')}</div>
                                                <ul className="JobulLi">
                                                    <li>{t('vacancies.role2.duties.item1')}</li>
                                                    <li>{t('vacancies.role2.duties.item2')}</li>
                                                    <li>{t('vacancies.role2.duties.item3')}</li>
                                                    <li>{t('vacancies.role2.duties.item4')}</li>
                                                    <li>{t('vacancies.role2.duties.item5')}</li>
                                                    <li>{t('vacancies.role2.duties.item6')}</li>
                                                    <li>{t('vacancies.role2.duties.item7')}</li>
                                                    <li>{t('vacancies.role2.duties.item8')}</li>
                                                    <li>{t('vacancies.role2.duties.item9')}</li>
                                                    <li>{t('vacancies.role2.duties.item10')}</li>
                                                    <li>{t('vacancies.role2.duties.item11')}</li>
                                                    <li>{t('vacancies.role2.duties.item12')}</li>
                                                </ul>
                                                <div className="JobBoxT3">{t('vacancies.role2.qualification.title')}</div>
                                                <ul className="JobulLi">
                                                    <li>{t('vacancies.role2.qualification.item1')}</li>
                                                    <li>{t('vacancies.role2.qualification.item2')}</li>
                                                    <li>{t('vacancies.role2.qualification.item3')}</li>
                                                    <li>{t('vacancies.role2.qualification.item4')}</li>
                                                    <li>{t('vacancies.role2.qualification.item5')}</li>
                                                    <li>{t('vacancies.role2.qualification.item6')}</li>
                                                    <li>{t('vacancies.role2.qualification.item7')}</li>
                                                    <li>{t('vacancies.role2.qualification.item8')}</li>
                                                    <li>{t('vacancies.role2.qualification.item9')}</li>
                                                </ul>
                                                <div className="JobNote">{t('vacancies.note')}</div>
                                            </div>
                                            <div className="JobButtons">
                                                {/* <span className="ViewAlldetails Link6 hover1">View All Details</span> */}
                                                <span className="ViewAlldetails Link6 hover1" onClick={() => toggleVisibility(2)} >{visibleIndexes.includes(2) ? t('vacancies.hideDetails') : t('vacancies.showDetails')}</span>
                                                <a href="#careerform" className="Link6 hover1">{t('vacancies.applyNow')}</a>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
