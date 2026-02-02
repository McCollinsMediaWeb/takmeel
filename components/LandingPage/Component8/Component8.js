
// "use client";
// import { motion } from "framer-motion";
// import Image from "next/image";

// const plans = [
//     {
//         studio:
//         {
//             level1: '/plans/studio-level-1.png',
//             level2: '/plans/studio-level-2.png',
//             level3: '/plans/studio-level-3.png',
//             level4: '/plans/studio-level-4.png'
//         }
//     }
// ];

// export default function Component8() {
//     const containerVariants = {
//         hidden: { opacity: 0, y: 40 },
//         visible: {
//             opacity: 1,
//             y: 0,
//             transition: {
//                 duration: 0.6,
//                 ease: "easeOut",
//                 when: "beforeChildren",
//                 staggerChildren: 0.2,
//             },
//         },
//     }

//     const itemVariants = {
//         hidden: { opacity: 0, y: 20 },
//         visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
//     }
//     return (

//         <div>
//             <div className="pd-common comp8">
//                 <div className="container">

//                     <div className="row align-items-center">
//                         <div className="col-md-5">
//                             <motion.div
//                                 variants={containerVariants}
//                                 initial="hidden"
//                                 whileInView="visible"
//                                 viewport={{ once: true, amount: 0.5 }}
//                             >
//                                 <div className="com8T1" >Floor Plan</div>
//                                 <div className="com8T2" >Where Smart Layouts
//                                     Meet Stylish Living</div>
//                             </motion.div>
//                         </div>
//                         <div className="col-md-7">
//                             <motion.div
//                                 variants={containerVariants}
//                                 initial="hidden"
//                                 whileInView="visible"
//                                 viewport={{ once: true, amount: 0.5 }}
//                             >
//                                 <div className="com8T3" >Where smart layouts meet stylish living, every space is designed with purpose and clarity. Thoughtfully planned proportions ensure a seamless flow that elevates both comfort and modern lifestyle.</div>
//                             </motion.div>
//                         </div>
//                     </div>
//                     <motion.div
//                         variants={containerVariants}
//                         initial="hidden"
//                         whileInView="visible"
//                         viewport={{ once: true, amount: 0.5 }}
//                     >
//                         <div className="row accordionHGd">

//                             <div className="col-md-2" style={{ marginBottom: '10px' }} >
//                                 <div className="AccordionBtn active" >Studio</div>
//                             </div>
//                             <div className="col-md-2" style={{ marginBottom: '10px' }}>
//                                 <div className="AccordionBtn " >1 BHK TYPE 01</div>
//                             </div>
//                             <div className="col-md-2" style={{ marginBottom: '10px' }}>
//                                 <div className="AccordionBtn " >1 BHK TYPE 02</div>
//                             </div>
//                             <div className="col-md-2" style={{ marginBottom: '10px' }}>
//                                 <div className="AccordionBtn " >2 BHK TYPE 01</div>
//                             </div>
//                             <div className="col-md-2" style={{ marginBottom: '10px' }}>
//                                 <div className="AccordionBtn " >2 BHK TYPE 02</div>
//                             </div>
//                             <div className="col-md-2" style={{ marginBottom: '10px' }}>
//                                 <div className="AccordionBtn " >2 BHK TYPE 03</div>
//                             </div>
//                             <div className="col-md-2" style={{ marginBottom: '10px' }}>
//                                 <div className="AccordionBtn " >2 BHK TYPE 04</div>
//                             </div>
//                         </div>
//                     </motion.div>

//                     <div className="row accordionHGd">

//                         <div className="col-md-3">
//                             <div className="AccordionBtn active" >Level 1</div>
//                         </div>
//                         <div className="col-md-3">
//                             <div className="AccordionBtn " >Level 2</div>
//                         </div>
//                         <div className="col-md-3">
//                             <div className="AccordionBtn " >Level 3</div>
//                         </div>
//                         <div className="col-md-3">
//                             <div className="AccordionBtn " >Level 4</div>
//                         </div>
//                     </div>
//                     <div className="AccordionContentBx">
//                         <motion.div
//                             variants={containerVariants}
//                             initial="hidden"
//                             whileInView="visible"
//                             viewport={{ once: true, amount: 0.5 }}
//                         >
//                             <div className="row">
//                                 <div className="col-md-5">
//                                     <motion.div
//                                         variants={containerVariants}
//                                         initial="hidden"
//                                         whileInView="visible"
//                                         viewport={{ once: true, amount: 0.5 }}
//                                     >
//                                         <div className="CatName" >Studio</div>
//                                         <div className="ButtonBox"  >
//                                             <a href="javascript:void(0);" className="ButtonBoxLnk l1"><b>Starting Price&nbsp;:&nbsp;</b>Contact us for pricing</a>
//                                         </div>
//                                         <div className="ButtonBox"  >
//                                             <a href="javascript:void(0);" className="ButtonBoxLnk l2"><b>Total Area&nbsp;:&nbsp;</b>Available on Request</a>
//                                         </div>
//                                         <div className="ButtonBox"  >
//                                             <a href="#" className="ButtonBoxLnk l3"><b>Get all floor plans</b></a>
//                                         </div>
//                                     </motion.div>
//                                 </div>
//                                 <div className="col-md-7">
//                                     <Image
//                                         src="/studio.jpg"
//                                         width={650}
//                                         height={287}
//                                         alt="Takmeel"
//                                         priority
//                                         layout="responsive"
//                                     />
//                                 </div>
//                             </div>
//                         </motion.div>
//                     </div>


//                 </div>
//             </div>

//         </div>
//     );
// }




"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const plans = {
    studio: {
        label: "Studio",
        types: {
            default: {
                label: "Studio",
                levels: {
                    level1: "/plans/studio-level-1.png",
                    level2: "/plans/studio-level-1.png",
                    level3: "/plans/studio-level-1.png",
                    level4: "/plans/studio-level-1.png",
                },
            },
        },
    },

    oneBhk: {
        label: "1 BHK",
        types: {
            type01: {
                label: "Type 01",
                levels: {
                    level1: "/plans/1bhk-type1-level1.png",
                    level2: "/plans/1bhk-type1-level1.png",
                    level3: "/plans/1bhk-type1-level1.png",
                    level4: "/plans/1bhk-type1-level1.png",
                },
            },
            type02: {
                label: "Type 02",
                levels: {
                    level1: "/plans/1bhk-type2-level4.png",
                    level2: "/plans/1bhk-type2-level4.png",
                    level3: "/plans/1bhk-type2-level4.png",
                    level4: "/plans/1bhk-type2-level4.png",
                },
            },
        },
    },

    twoBhk: {
        label: "2 BHK",
        types: {
            type01: {
                label: "Type 01",
                levels: {
                    level1: "/plans/2bhk-type1-level1.png",
                    level2: "/plans/2bhk-type1-level1.png",
                    level3: "/plans/2bhk-type1-level1.png",
                    level4: "/plans/2bhk-type1-level1.png",
                },
            },
            type02: {
                label: "Type 02",
                levels: {
                    level1: "/plans/2bhk-type2-level1.png",
                    level2: "/plans/2bhk-type2-level1.png",
                    level3: "/plans/2bhk-type2-level1.png",
                    level4: "/plans/2bhk-type2-level1.png",
                },
            },
            type03: {
                label: "Type 03",
                levels: {
                    level1: "/plans/2bhk-type3-level1.png",
                    level2: "/plans/2bhk-type3-level1.png",
                    level3: "/plans/2bhk-type3-level1.png",
                    level4: "/plans/2bhk-type3-level1.png",
                },
            },
            type04: {
                label: "Type 04",
                levels: {
                    level2: "/plans/2bhk-type4-level2.png",
                    level3: "/plans/2bhk-type4-level2.png",
                    level4: "/plans/2bhk-type4-level2.png",
                },
            },
        },
    },
};

export default function Component8() {
    const [unit, setUnit] = useState("studio");
    const [type, setType] = useState("default");
    const [level, setLevel] = useState("level1");

    const currentUnit = plans[unit];
    const currentType = currentUnit.types[type];

    // 🔥 YOUR ORIGINAL VARIANTS (UNCHANGED)
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
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    return (
        <div>
            <div className="pd-common comp8">
                <div className="container">

                    {/* ===== HEADER (UNCHANGED) ===== */}
                    <div className="row align-items-center">
                        <div className="col-md-5">
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                            >
                                <div className="com8T1">Floor Plan</div>
                                <div className="com8T2">
                                    Where Smart Layouts
                                    Meet Stylish Living
                                </div>
                            </motion.div>
                        </div>
                        <div className="col-md-7">
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                            >
                                <div className="com8T3">
                                    Where smart layouts meet stylish living, every space is designed
                                    with purpose and clarity. Thoughtfully planned proportions ensure
                                    a seamless flow that elevates both comfort and modern lifestyle.
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* ===== UNIT BUTTONS ===== */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <div className="row accordionHGd">
                            {Object.entries(plans).map(([key, item]) => (
                                <div className="col-md-2" key={key}>
                                    <div
                                        className={`AccordionBtn ${unit === key ? "active" : ""}`}
                                        onClick={() => {
                                            setUnit(key);
                                            const firstType = Object.keys(item.types)[0];
                                            const firstLevel =
                                                Object.keys(item.types[firstType].levels)[0];
                                            setType(firstType);
                                            setLevel(firstLevel);
                                        }}
                                    >
                                        {item.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* ===== TYPE BUTTONS ===== */}
                    {Object.keys(currentUnit.types).length > 1 && (
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            <div className="row accordionHGd">
                                {Object.entries(currentUnit.types).map(([key, item]) => (
                                    <div className="col-md-2" key={key}>
                                        <div
                                            className={`AccordionBtn ${type === key ? "active" : ""}`}
                                            onClick={() => {
                                                setType(key);
                                                const firstLevel = Object.keys(item.levels)[0];
                                                setLevel(firstLevel);
                                            }}
                                        >
                                            {item.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* ===== LEVEL BUTTONS ===== */}
                    <div className="row accordionHGd">
                        {Object.keys(currentType.levels).map((lvl) => (
                            <div className="col-md-3" key={lvl}>
                                <div
                                    className={`AccordionBtn ${level === lvl ? "active" : ""}`}
                                    onClick={() => setLevel(lvl)}
                                >
                                    {lvl.replace("level", "Level ")}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* ===== CONTENT ===== */}
                    <div className="AccordionContentBx">
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            <div className="row">
                                {/* <div className="col-md-5">
                                    <motion.div variants={itemVariants}>
                                        <div className="CatName">
                                            {currentUnit.label}
                                            {type !== "default" && ` ${currentType.label}`}
                                            {` (${level.replace("level", "Level ")})`}
                                        </div>
                                    </motion.div>
                                </div> */}

                                <div className="col-md-5">
                                    <motion.div
                                        variants={containerVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.5 }}
                                    >
                                        <div className="CatName">
                                            {currentUnit.label}
                                            {type !== "default" && ` ${currentType.label}`}
                                            {` (${level.replace("level", "Level ")})`}
                                        </div>
                                        <div className="ButtonBox"  >
                                            <a href="javascript:void(0);" className="ButtonBoxLnk l1"><b>Starting Price&nbsp;:&nbsp;</b>Contact us for pricing</a>
                                        </div>
                                        <div className="ButtonBox"  >
                                            <a href="javascript:void(0);" className="ButtonBoxLnk l2"><b>Total Area&nbsp;:&nbsp;</b>Available on Request</a>
                                        </div>
                                        <div className="ButtonBox"  >
                                            <a href="/plans/floor-plans.pdf" download className="ButtonBoxLnk l3"><b>Get all floor plans</b></a>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* ===== IMAGE WITH CHANGE ANIMATION ===== */}
                                <div className="col-md-7">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={`${unit}-${type}-${level}`}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            transition={{ duration: 0.4, ease: "easeOut" }}
                                        >
                                            <Image
                                                src={currentType.levels[level]}
                                                width={650}
                                                height={287}
                                                alt="Takmeel"
                                                layout="responsive"
                                                priority
                                            />
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </div>
    );
}
