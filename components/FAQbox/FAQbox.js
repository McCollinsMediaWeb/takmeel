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
            question: "By Law, Can You Buy Properties In Dubai?",
            answer:
                "I Purchased An Off-Plan Unit, But I’m Interested In Upgrading To A Larger One.I Purchased An Off-Plan Unit, But I’m Interested In Upgrading To A Larger One.I Purchased An Off-Plan Unit, But I’m Interested In Upgrading To A Larger One.",
        },
        {
            question: "Can Foreigners/Expats Buy Houses In Dubai?",
            answer:
                "I Purchased An Off-Plan Unit, But I’m Interested In Upgrading To A Larger One.I Purchased An Off-Plan Unit, But I’m Interested In Upgrading To A Larger One.I Purchased An Off-Plan Unit, But I’m Interested In Upgrading To A Larger One.",
        },
        {
            question: "I Purchased An Off-Plan Unit, But I’m Interested In Upgrading To A Larger One. Is This Possible?",
            answer:
                "I Purchased An Off-Plan Unit, But I’m Interested In Upgrading To A Larger One.I Purchased An Off-Plan Unit, But I’m Interested In Upgrading To A Larger One.I Purchased An Off-Plan Unit, But I’m Interested In Upgrading To A Larger One.",
        },
        {
            question: "Can I Rent A Unit In One Of DP/Meraas Projects?",
            answer:
                "I Purchased An Off-Plan Unit, But I’m Interested In Upgrading To A Larger One.I Purchased An Off-Plan Unit, But I’m Interested In Upgrading To A Larger One.I Purchased An Off-Plan Unit, But I’m Interested In Upgrading To A Larger One.",
        },
        {
            question: "What Documents Are Required To Register The Property With DLD?",
            answer:
                "I Purchased An Off-Plan Unit, But I’m Interested In Upgrading To A Larger One.I Purchased An Off-Plan Unit, But I’m Interested In Upgrading To A Larger One.I Purchased An Off-Plan Unit, But I’m Interested In Upgrading To A Larger One.",
        },
        {
            question: "What Is Oqood/Initial Agreement Of Property Sale?",
            answer:
                "I Purchased An Off-Plan Unit, But I’m Interested In Upgrading To A Larger One.I Purchased An Off-Plan Unit, But I’m Interested In Upgrading To A Larger One.I Purchased An Off-Plan Unit, But I’m Interested In Upgrading To A Larger One.",
        },
        {
            question: "The Property Is Mortgaged. Will I Still Receive My Title Deed?",
            answer:
                "I Purchased An Off-Plan Unit, But I’m Interested In Upgrading To A Larger One.I Purchased An Off-Plan Unit, But I’m Interested In Upgrading To A Larger One.I Purchased An Off-Plan Unit, But I’m Interested In Upgrading To A Larger One.",
        },
        {
            question: "The Property Is Mortgaged. Will I Still Receive My Title Deed?",
            answer:
                "I Purchased An Off-Plan Unit, But I’m Interested In Upgrading To A Larger One.I Purchased An Off-Plan Unit, But I’m Interested In Upgrading To A Larger One.I Purchased An Off-Plan Unit, But I’m Interested In Upgrading To A Larger One.",
        },
        {
            question: "I’d Like To Carry Out Some Modifications To The Unit. Is An NOC Required?",
            answer:
                "I Purchased An Off-Plan Unit, But I’m Interested In Upgrading To A Larger One.I Purchased An Off-Plan Unit, But I’m Interested In Upgrading To A Larger One.I Purchased An Off-Plan Unit, But I’m Interested In Upgrading To A Larger One.",
        },
        {
            question: "How To Apply For A Modification NOC?",
            answer:
                "I Purchased An Off-Plan Unit, But I’m Interested In Upgrading To A Larger One.I Purchased An Off-Plan Unit, But I’m Interested In Upgrading To A Larger One.I Purchased An Off-Plan Unit, But I’m Interested In Upgrading To A Larger One.",
        },
        {
            question: "I’m Planning To Resell My Property. Do I, As The Seller, Need A No Objection Certificate (NOC)?",
            answer:
                "I Purchased An Off-Plan Unit, But I’m Interested In Upgrading To A Larger One.I Purchased An Off-Plan Unit, But I’m Interested In Upgrading To A Larger One.I Purchased An Off-Plan Unit, But I’m Interested In Upgrading To A Larger One.",
        },
    ];
    return (
        <div className="FaqBoxWrp pd-common bg2">
            <div className="container">
                <div className="text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
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
                            transition={{ duration: 0.6, ease: "easeOut" }}
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
                                        transition={{ duration: 0.6, ease: "easeOut" }}
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
