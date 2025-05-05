'use client'; // optional if using interactivity (like menus)

import Link from 'next/link';
import { motion } from "framer-motion";
import Image from "next/image";
import useMediaQuery from "../hooks/useMediaQuery";
import TypingText from '../Animations/TypingText';
export default function ProjectItem({ backgroundImage, backgroundImageMobile, text1, text2, text3, tagline, url, projectStatus }) {
    const bgUrl = `url("/${backgroundImage}")`;
    const isDesktop = useMediaQuery("(min-width: 960px)");
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
    return (
        <div className='FullScreenBanner Projects'>
            <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                viewport={{ once: true, amount: 0.5 }}
            >
                {isDesktop && (
                    <Image
                        src={`/${backgroundImage}`}
                        width={1338}
                        height={714}
                        layout="responsive"
                        alt="Takmeel"
                    />
                )}
                {!isDesktop && (
                    <Image
                        src={`/${backgroundImageMobile}`}
                        width={697}
                        height={768}
                        layout="responsive"
                        alt="Takmeel"
                    />
                )}
            </motion.div>
            <div className='LottieBox'>
            <div className="LottieBox">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1920 1080"
    width="1920"
    height="1080"
    style={{
      width: "100%",
      height: "100%",
      transform: "translate3d(0px, 0px, 0px)",
      contentVisibility: "visible",
    }}
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <clipPath id="lottieClip">
        <rect width="1920" height="1080" x="0" y="0" />
      </clipPath>
    </defs>
    <g clipPath="url(#lottieClip)">
      <g
        transform="matrix(2.067357063293457,0,0,2.067357063293457,372.9828,187.6878)"
        opacity="0.345777"
      >
        <g transform="translate(283.715,279.797)" opacity="1">
          <path
            fill="white"
            fillOpacity="1"
            d="M-301.29593,291.24173 C-301.29593,291.24173 -172.19296,389.69254 -172.19296,389.69254 C-164.36296,334.09653 -57.84375,123.53041 -0.68075,6.07441 C57.26525,123.53041 158.92421,334.09653 166.75421,389.69254 C166.75421,389.69254 298.15762,286.31998 298.15762,286.31998 C260.5726,231.50699 112.98322,-74.07642 0.22322,-312.90442 C-112.53577,-74.07642 -257.44595,236.42873 -301.29593,291.24173z"
          />
        </g>
      </g>
    </g>
  </svg>
</div>

            </div>
            <div className='FsBannerContent'>
                <div className='FsBannerContentFlex centerBlock'>
                    <div className='container'>
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            <div>
                                {projectStatus && (
                                    <motion.div className="Txt1" variants={itemVariants}>
                                        <div>
                                            <span className="PrStatus">{projectStatus}</span>
                                        </div>
                                    </motion.div>
                                )}
                                <motion.div className="Txt1" variants={itemVariants}>
                                    {text1}
                                </motion.div>


                                <motion.div className="Txt2 text-uppercase" variants={itemVariants}>
                                    {/* <TypingText words={[text2, text2, text2]} speed={200} pause={800} /> */}
                                    {text2}
                                </motion.div>
                                <motion.div variants={itemVariants}>
                                    <motion.div
                                        className="Txt3 nunito-text"
                                        animate={{ opacity: [1, 0.3, 1] }}
                                        transition={{
                                            duration: 2,
                                            ease: 'easeInOut',
                                        }}
                                    >
                                        {text3}
                                    </motion.div>
                                </motion.div>
                                <motion.div className="" variants={itemVariants}>
                                    <motion.div
                                        className="Txt17 nunito-text"
                                        animate={{ opacity: [1, 0.3, 1] }}
                                        transition={{
                                            duration: 2,
                                            ease: 'easeInOut',
                                        }}
                                    >
                                        {tagline}
                                    </motion.div>


                                </motion.div>


                                <motion.div variants={itemVariants}>
                                    <Link href={`/detail-page/${url}`} className="Link1 hover1">
                                        Explore Property
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>


                    </div>
                </div>
            </div>
        </div>
    );
}