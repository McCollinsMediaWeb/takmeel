'use client';
import Image from "next/image";
import { motion } from "framer-motion";
import b1 from '../../public/main4.jpg';

export default async function FAQBanner() {

    return (

        <section className='CntPageHead screenWidth ScreenHeight'>
            <Image
                src={b1}
                width={1464}
                height={768}
                layout="responsive"
                alt="Takmeel"
            />
            <div className="CT1">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    Frequently Asked Questions
                </motion.div>
            </div>
        </section>
    );
}
