
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
export default function Component12() {
    const containerVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                when: "beforeChildren",
                staggerChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    }
    return (

        <div>
            <div className="pd-common comp2 comp12">
                <div className="container">
                    <div className="ContectForm">
                        <div className="Contheader">
                            <div className="row">
                                <div className="col-md-5">
                                        <div className="ct1">WE ARE HERE TO HELP</div>
                                        <div className="ct2">CONTACT US</div>
                                </div>
                                <div className="col-md-7">
                                    <div className="ct3">Contact us today to begin your registration. Our team is ready to guide you through a smooth and seamless process.</div>
                                </div>
                            </div>
                        </div>
                        <div className="FormBx1">
                            <div className="row">
                                <div className="col-md-6">
                                    <input type="text" placeholder="Name*"/>
                                </div>
                                <div className="col-md-6">
                                    <input type="text" placeholder="email*"/>
                                </div>
                                <div className="col-md-6">
                                    <input type="text" placeholder="phone number*"/>
                                </div>
                                <div className="col-md-6">
                                    <select>
                                        <option>Iam *</option>
                                    </select>
                                </div>
                                <div className="col-md-12">
                                    <textarea placeholder="Message"></textarea>
                                </div>
                                <div className="col-md-3">
                                    <button className="BtnSt1p">Send Inquiry</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="ForMr text-center">For more information, you can easily connect with us via WhatsApp.</div>
                    <div className="text-center">
                        <a href="https://wa.me/971523749615?text=I%20would%20like%20to%20know%20more%20about%20your%20properties" className="WhatsappLink">
                            <div className="LinkIcon">+971 523749615</div>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
}