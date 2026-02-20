// 'use client';

export const metadata = {
  title: "Privacy Policy | Takmeel Development",
  description:
    "Read Takmeel Development’s Privacy Policy to understand how we collect, use, and protect your personal information across our real estate projects in the UAE.",
  alternates: {
    canonical: "https://www.takmeeldevelopment.com/privacy-policy",
  }
};

import PrivacyPolicyClient from "./PrivacyPolicyClient";
import MetaInjector from "@/components/Meta/MetaInjector";
import { getMetaTags } from "@/lib/getMetaTags";

// export async function generateMetadata() {
//   const metaTags = await getMetaTags("/privacy-policy");
//   const metaContent = metaTags?.[0]?.metaContent || "";

//   // Parse title
//   const titleMatch = metaContent.match(/<title[^>]*>(.*?)<\/title>/i);
//   const title = titleMatch?.[1] || "Privacy Policy | Takmeel Development";

//   // Parse description
//   const descMatch = metaContent.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i);
//   const description = descMatch?.[1] || "";

//   return {
//     title,
//     description,
//     alternates: {
//       canonical: "https://www.takmeeldevelopment.com/privacy-policy",
//     },
//   };
// }

export default async function PrivacyPolicy() {
  // const metaTags = await getMetaTags("/privacy-policy");
  // if (metaTags.length === 0 || !metaTags[0].metaContent) {
  //   console.warn("No meta tags found, using default");
  // }

  return (
    <>
      {/* {metaTags.length > 0 && metaTags[0].metaContent && (
        <MetaInjector metaContent={metaTags[0].metaContent} />
      )} */}
      <PrivacyPolicyClient />
    </>
    // <div>
    //   <section className='HdTpHd1 bg2 pd-common'>
    //     <div className="text-center">
    //       <h2 className="HedrT1">{t('title')}</h2>
    //     </div>
    //   </section>
    //   <section className="pd-common">
    //     <div className="container">
    //       <div className="PolicyBox">
    //         <motion.div
    //           variants={containerVariants}
    //           initial="hidden"
    //           whileInView="visible"
    //           viewport={{ once: false, amount: 0.5 }}
    //         >

    //           <motion.div variants={itemVariants}>
    //             <div className="PolicyBoxT1">{t('title')}</div>
    //           </motion.div>
    //           <motion.div variants={itemVariants}>
    //             <div className="PolicyBoxT1">{t('effective_date')}</div>
    //           </motion.div>
    //           <motion.div variants={itemVariants}>
    //             <div className="PolicyBoxT2">{t('introduction')}</div>
    //           </motion.div>
    //           <motion.div variants={itemVariants}>
    //             <div className="PolicyBoxT3">{t('sections.section_1.title')}</div>
    //           </motion.div>
    //           <motion.div variants={itemVariants}>
    //             <div className="PolicyBoxT2">{t('sections.section_1.description')}</div>
    //           </motion.div>
    //           <motion.div variants={itemVariants}>
    //             <ul className="PPUl">
    //               <li>{t('sections.section_1.items.0')}</li>
    //               <li>{t('sections.section_1.items.1')}</li>
    //               <li>{t('sections.section_1.items.2')}</li>
    //               <li>{t('sections.section_1.items.3')}</li>
    //             </ul>
    //           </motion.div>
    //         </motion.div>
    //       </div>


    //       <div className="PolicyBox">
    //         <motion.div
    //           variants={containerVariants}
    //           initial="hidden"
    //           whileInView="visible"
    //           viewport={{ once: false, amount: 0.5 }}
    //         >
    //           <motion.div variants={itemVariants}>
    //             <div className="PolicyBoxT3">{t('sections.section_2.title')}</div>
    //           </motion.div>
    //           <motion.div variants={itemVariants}>
    //             <div className="PolicyBoxT2">{t('sections.section_2.description')}</div>
    //           </motion.div>
    //           <motion.div variants={itemVariants}>
    //             <ul className="PPUl">
    //               <li>{t('sections.section_2.items.0')}</li>
    //               <li>{t('sections.section_2.items.1')}</li>
    //               <li>{t('sections.section_2.items.2')}</li>
    //               <li>{t('sections.section_2.items.3')}</li>
    //               <li>{t('sections.section_2.items.4')}</li>
    //             </ul>
    //           </motion.div>
    //         </motion.div>
    //       </div>

    //       <div className="PolicyBox">
    //         <motion.div
    //           variants={containerVariants}
    //           initial="hidden"
    //           whileInView="visible"
    //           viewport={{ once: false, amount: 0.5 }}
    //         >
    //           <motion.div variants={itemVariants}>
    //             <div className="PolicyBoxT3">{t('sections.section_3.title')}</div>
    //           </motion.div>
    //           <motion.div variants={itemVariants}>
    //             <div className="PolicyBoxT2">{t('sections.section_3.description')}</div>
    //           </motion.div>
    //           <motion.div variants={itemVariants}>
    //             <ul className="PPUl">
    //               <li>{t('sections.section_3.items.0')}</li>
    //               <li>{t('sections.section_3.items.1')}</li>
    //               <li>{t('sections.section_3.items.2')}</li>
    //             </ul>
    //           </motion.div>
    //         </motion.div>
    //       </div>
    //       <div className="PolicyBox">
    //         <motion.div
    //           variants={containerVariants}
    //           initial="hidden"
    //           whileInView="visible"
    //           viewport={{ once: false, amount: 0.5 }}
    //         >
    //           <motion.div variants={itemVariants}>
    //             <div className="PolicyBoxT3">{t('sections.section_4.title')}</div>
    //           </motion.div>
    //           <motion.div variants={itemVariants}>
    //             <div className="PolicyBoxT2">{t('sections.section_4.description')}</div>
    //           </motion.div>
    //         </motion.div>
    //       </div>
    //       <div className="PolicyBox">
    //         <motion.div
    //           variants={containerVariants}
    //           initial="hidden"
    //           whileInView="visible"
    //           viewport={{ once: false, amount: 0.5 }}
    //         >
    //           <motion.div variants={itemVariants}>
    //             <div className="PolicyBoxT3">{t('sections.section_5.title')}</div>
    //           </motion.div>
    //           <motion.div variants={itemVariants}>
    //             <div className="PolicyBoxT2">{t('sections.section_5.description')}</div>
    //           </motion.div>
    //           <motion.div variants={itemVariants}>
    //             <ul className="PPUl">
    //               <li>{t('sections.section_5.items.0')}</li>
    //               <li>{t('sections.section_5.items.1')}</li>
    //               <li>{t('sections.section_5.items.2')}</li>
    //               <li>{t('sections.section_5.items.3')}</li>
    //             </ul>
    //           </motion.div>
    //           <motion.div variants={itemVariants}>
    //             <div className="PolicyBoxT2">{t('sections.section_5.contact_note')}</div>
    //           </motion.div>
    //         </motion.div>
    //       </div>
    //       <div className="PolicyBox">
    //         <motion.div
    //           variants={containerVariants}
    //           initial="hidden"
    //           whileInView="visible"
    //           viewport={{ once: false, amount: 0.5 }}
    //         >
    //           <motion.div variants={itemVariants}>
    //             <div className="PolicyBoxT3">{t('sections.section_6.title')}</div>
    //           </motion.div>
    //           <motion.div variants={itemVariants}>
    //             <div className="PolicyBoxT2">{t('sections.section_6.description')}</div>
    //           </motion.div>
    //         </motion.div>
    //       </div>
    //       <div className="PolicyBox">
    //         <motion.div
    //           variants={containerVariants}
    //           initial="hidden"
    //           whileInView="visible"
    //           viewport={{ once: false, amount: 0.5 }}
    //         >
    //           <motion.div variants={itemVariants}>
    //             <div className="PolicyBoxT3">{t('sections.section_7.title')}</div>
    //           </motion.div>
    //           <motion.div variants={itemVariants}>
    //             <div className="PolicyBoxT2">{t('sections.section_7.description')}</div>
    //           </motion.div>
    //         </motion.div>
    //       </div>
    //       <div className="PolicyBox">
    //         <motion.div
    //           variants={containerVariants}
    //           initial="hidden"
    //           whileInView="visible"
    //           viewport={{ once: false, amount: 0.5 }}
    //         >
    //           <motion.div variants={itemVariants}>
    //             <div className="PolicyBoxT3">{t('sections.section_8.title')}</div>
    //           </motion.div>
    //           <motion.div variants={itemVariants}>
    //             <div className="PolicyBoxT2">{t('sections.section_8.description')}</div>
    //           </motion.div>
    //         </motion.div>
    //       </div>
    //       <div className="PolicyBox">
    //         <motion.div
    //           variants={containerVariants}
    //           initial="hidden"
    //           whileInView="visible"
    //           viewport={{ once: false, amount: 0.5 }}
    //         >
    //           <motion.div variants={itemVariants}>
    //             <div className="PolicyBoxT3">{t('sections.section_9.title')}</div>
    //           </motion.div>
    //           <motion.div variants={itemVariants}>
    //             <div className="PolicyBoxT2">{t('sections.section_9.description')}</div>
    //           </motion.div>
    //           <motion.div variants={itemVariants}>
    //             <div className="PolicyBoxT2">{t('sections.section_9.contact_info.email')}</div>
    //           </motion.div>
    //           <motion.div variants={itemVariants}>
    //             <div className="PolicyBoxT2" dir="ltr">{t('sections.section_9.contact_info.phone')}</div>
    //           </motion.div>
    //         </motion.div>
    //       </div>
    //     </div>
    //   </section>
    //   <PropertyForm projectName="Golf View Living Apartments" />
    //   <Footer />
    //   <FooterBottom />
    // </div>
  );
}
