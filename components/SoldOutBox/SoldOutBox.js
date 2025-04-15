'use client'; // optional if using interactivity (like menus)

import Link from 'next/link';
import { motion } from "framer-motion";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import useMediaQuery from "../hooks/useMediaQuery";
export default function SoldOutBox() {
    const isDesktop = useMediaQuery("(min-width: 960px)");
   
    return (
        <section className='SoldOutBox pd-common'>
            Test
        </section>
    );
}