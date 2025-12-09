
"use client";
import useMediaQuery from "../../hooks/useMediaQuery";
import Image from "next/image";
import { motion } from "framer-motion";
export default function Component11() {
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
    const isDesktop = useMediaQuery("(min-width: 960px)");
    return (

        <div>
            <div className="LandHeroBanner">
                {isDesktop && (
                    <Image
                        src="/comp11.jpg"
                        width={1428}
                        height={712}
                        alt="Takmeel"
                        priority
                        layout="responsive"
                    />
                )}
                {!isDesktop && (
                    <Image
                        src="/comp11mob.jpg"
                        width={600}
                        height={712}
                        alt="Takmeel"
                        priority
                        layout="responsive"
                    />
                )}
                <div className="LogoBoxHero align-items-center">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.5 }}
                    >
                        <div variants={itemVariants} className="Maxwidthmain">
                            <Image
                                src="/landinglogo1.png"
                                width={382}
                                height={188}
                                alt="Takmeel"
                                priority
                                layout="responsive"

                            />
                        </div>
                    </motion.div>

                </div>
            </div>

        </div>
    );
}