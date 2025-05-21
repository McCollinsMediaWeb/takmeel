'use client'; // optional if using interactivity (like menus)
import Image from "next/image";
import Link from 'next/link';
import { motion } from "framer-motion";
import { useState } from "react";


export default function FAQbox() {
    const [activeIndex, setActiveIndex] = useState(0); // Start with the first item open

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    const accordionItems = [
        {
            question: "What types of properties does Takmeel Development Properties offer?",
            answer:
                "Takmeel Development Properties offers a wide range of real estate options including residential apartments, villas, commercial spaces, off-plan projects, and investment properties across the UAE.",
        },
        {
            question: "Is Takmeel Development Properties licensed to operate in the UAE?",
            answer:
                "Yes, Takmeel Development Properties is a fully licensed and RERA-registered real estate agency, operating legally and ethically within the UAE market.",
        },
        {
            question: "How can I schedule a property viewing with Takmeel?",
            answer:
                "You can schedule a viewing by contacting us via phone, WhatsApp, email, or by filling out a request form on our website. Our agents will coordinate a convenient time based on your availability.",
        },
        {
            question: "Does Takmeel Development Properties assist with property management services?",
            answer:
                "Yes, we provide end-to-end property management services including tenant placement, rent collection, maintenance coordination, and legal compliance.",
        },
        {
            question: "Can international buyers purchase property through Takmeel?",
            answer:
                "Absolutely. We assist international clients with buying property in designated freehold areas in the UAE and guide them through the entire legal and financial process.",
        },
        {
            question: "What are the payment plan options for off-plan properties?",
            answer:
                "Off-plan properties often come with flexible post-handover payment plans. We work directly with top developers to offer installment options that fit your budget.",
        },
        {
            question: "Does Takmeel provide legal or mortgage assistance for property purchases?",
            answer:
                "Yes, we work with a network of trusted mortgage brokers and legal advisors to ensure a smooth and secure property purchase experience.",
        },
        {
            question: "How does Takmeel help landlords rent out their properties?",
            answer:
                "We market your property across major platforms, screen tenants, handle documentation, and manage the lease process to ensure timely occupancy and rental income.",
        },
        {
            question: "What areas in the UAE does Takmeel specialize in?",
            answer:
                "We specialize in key real estate markets across Dubai, Abu Dhabi, Sharjah, and Ajman, including popular communities like Downtown Dubai, Dubai Marina, JVC, Business Bay, and more.",
        },
        {
            question: "How can I get in touch with a Takmeel property advisor?",
            answer:
                "You can reach us via our official website, call us directly, or visit our office. Our property consultants are ready to assist you with expert guidance and support.",
        },
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
                        <div className="Ft1">Frequently Asked Questions</div>
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
                                style={{ cursor: "pointer" }}
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
