
"use client";
import useMediaQuery from "../../hooks/useMediaQuery";
import Image from "next/image";
import { motion } from "framer-motion";
export default function Component9() {
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
                        // src="/bn1.jpg"
                        src="/test4.jpg"
                        width={1428}
                        height={784}
                        alt="Takmeel"
                        priority
                        layout="responsive"
                    />
                )}
                {!isDesktop && (
                    <Image
                        src="/bn1mob.jpg"
                        width={708}
                        height={940}
                        alt="Takmeel"
                        priority
                        layout="responsive"
                    />
                )}
            </div>

        </div>
    );
}