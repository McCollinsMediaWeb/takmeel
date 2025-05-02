'use client'; // optional if using interactivity (like menus)

import Link from 'next/link';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import Image from "next/image";
import useMediaQuery from "../hooks/useMediaQuery";
import TypingText from '../Animations/TypingText';

export default function MainMapComponent({ MapImageDesk, MapImageMobile , MapURL}) {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const containerVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut',
                when: 'beforeChildren',
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    };
    const bgUrl = `url("/${backgroundImage}")`;
    const isDesktop = useMediaQuery("(min-width: 960px)");

    return (
        <div>
            {isDesktop ? (
                    <Image
                    src={`/${MapImageDesk}`}
                    width={697}
                    height={768}
                    layout="responsive"
                    alt="Takmeel"
                />
                ) : (
                    <Image
                        src={`/${MapImageMobile}`}
                        width={697}
                        height={768}
                        layout="responsive"
                        alt="Takmeel"
                    />
                )}


        </div>
    );
}