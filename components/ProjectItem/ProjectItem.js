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
            <motion.div
  className="LottieBox"
  initial={{ scale: 0.5, opacity: 0 }}
  whileInView={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.5 }}
>
<motion.svg
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
  initial={{ scale: 0.5, opacity: 0 }}
  whileInView={{ scale: 1, opacity: 1 }}
  transition={{ duration: 1.2, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.5 }}
>
  <defs>
    <clipPath id="__lottie_element_4">
      <rect width="1920" height="1080" x="0" y="0" />
    </clipPath>
  </defs>
  <g clipPath="url(#__lottie_element_4)">
    <g
      style={{ display: "block" }}
      transform="matrix(2.2685699462890625,0,0,2.2685699462890625,315.89569091796875,39.41706085205078)"
      opacity="0.6751911926152834"
    >
      <g
        opacity="1"
        transform="matrix(1,0,0,1,283.7149963378906,279.7969970703125)"
      >
        <path
          fill="rgb(255,255,255)"
          fillOpacity="1"
          d=" M-443.5587463378906,326.24810791015625 C-443.5587463378906,326.24810791015625 -171.9290008544922,480.8274230957031 -171.9290008544922,480.8274230957031 C-164.0989990234375,425.2314147949219 -58.40119552612305,215.11109924316406 -1.238194227218628,97.65538787841797 C56.70780563354492,215.11109924316406 158.38278198242188,425.2314147949219 166.2130889892578,480.8274230957031 C166.2130889892578,480.8274230957031 442.46368408203125,312.55322265625 442.46368408203125,312.55322265625 C404.8786926269531,257.74053955078125 107.8816146850586,-418.8755798339844 -4.878383159637451,-657.7035522460938 C-117.63738250732422,-418.8755798339844 -399.708740234375,271.4353942871094 -443.5587463378906,326.24810791015625z"
        />
      </g>
    </g>
  </g>
</motion.svg>

</motion.div>

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