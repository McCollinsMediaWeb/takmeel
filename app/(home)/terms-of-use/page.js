import { getMetaTags } from "@/lib/getMetaTags";
import TermsOfUseClient from "./TermsOfUseClient";
import MetaInjector from "@/components/Meta/MetaInjector";

export async function generateMetadata() {
  const metaTags = await getMetaTags("/terms-of-use");
  const metaContent = metaTags?.[0]?.metaContent || "";

  // Parse title
  const titleMatch = metaContent.match(/<title[^>]*>(.*?)<\/title>/i);
  const title = titleMatch?.[1] || "Terms of Use | Takmeel Development";

  // Parse description
  const descMatch = metaContent.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i);
  const description = descMatch?.[1] || "";

  return {
    title,
    description,
    alternates: {
      canonical: "https://www.takmeeldevelopment.com/terms-of-use",
    },
  };
}

export default async function TermsOfUse() {
  // const metaTags = await getMetaTags("/terms-of-use");
  // if (metaTags.length === 0 || !metaTags[0].metaContent) {
  //   console.warn("No meta tags found, using default");
  // }

  return (
    <>
      {/* {metaTags.length > 0 && metaTags[0].metaContent && (
        <MetaInjector metaContent={metaTags[0].metaContent} />
      )} */}
      <TermsOfUseClient />
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
    //             <div className="PolicyBoxT1">{t('effectiveDate')}</div>
    //           </motion.div>
    //           <motion.div variants={itemVariants}>
    //             <div className="PolicyBoxT2">{t('introduction')}</div>
    //           </motion.div>
    //           <motion.div variants={itemVariants}>
    //             <div className="PolicyBoxT3">{t('sections.section1.title')}</div>
    //           </motion.div>
    //           <motion.div variants={itemVariants}>
    //             <div className="PolicyBoxT2">{t('sections.section1.content')}</div>
    //           </motion.div>
    //           <motion.div variants={itemVariants}>
    //             <ul className="PPUl">
    //               <li>{t('sections.section1.listItems.0')}</li>
    //               <li>{t('sections.section1.listItems.1')}</li>
    //               <li>{t('sections.section1.listItems.2')}</li>
    //               <li>{t('sections.section1.listItems.3')}</li>
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
    //             <div className="PolicyBoxT3">{t('sections.section2.title')}</div>
    //           </motion.div>
    //           <motion.div variants={itemVariants}>
    //             <div className="PolicyBoxT2">{t('sections.section2.content')}</div>
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
    //             <div className="PolicyBoxT3">{t('sections.section3.title')}</div>
    //           </motion.div>
    //           <motion.div variants={itemVariants}>
    //             <div className="PolicyBoxT2">{t('sections.section3.content')}</div>
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
    //             <div className="PolicyBoxT3">{t('sections.section4.title')}</div>
    //           </motion.div>
    //           <motion.div variants={itemVariants}>
    //             <div className="PolicyBoxT2">{t('sections.section4.content')}</div>
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
    //             <div className="PolicyBoxT3">{t('sections.section5.title')}</div>
    //           </motion.div>
    //           <motion.div variants={itemVariants}>
    //             <div className="PolicyBoxT2">{t('sections.section5.content')}</div>
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
    //             <div className="PolicyBoxT3">{t('sections.section6.title')}</div>
    //           </motion.div>
    //           <motion.div variants={itemVariants}>
    //             <div className="PolicyBoxT2">{t('sections.section6.content')}</div>
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
    //             <div className="PolicyBoxT3">{t('sections.section7.title')}</div>
    //           </motion.div>
    //           <motion.div variants={itemVariants}>
    //             <div className="PolicyBoxT2">{t('sections.section7.content.0')}</div>
    //           </motion.div>
    //           <motion.div variants={itemVariants}>
    //             <div className="PolicyBoxT2">{t('sections.section7.content.1')}</div>
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
    //             <div className="PolicyBoxT3">{t('sections.section8.title')}</div>
    //           </motion.div>
    //           <motion.div variants={itemVariants}>
    //             <div className="PolicyBoxT2">{t('sections.section8.content')}</div>
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
    //             <div className="PolicyBoxT3">{t('sections.section9.title')}</div>
    //           </motion.div>
    //           <motion.div variants={itemVariants}>
    //             <div className="PolicyBoxT2">{t('sections.section9.content')}</div>
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
    //             <div className="PolicyBoxT3">{t('sections.section10.title')}</div>
    //           </motion.div>
    //           <motion.div variants={itemVariants}>
    //             <div className="PolicyBoxT2">{t('sections.section10.content')}</div>
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
    //             <div className="PolicyBoxT3">{t('sections.contact.title')}</div>
    //           </motion.div>
    //           <motion.div variants={itemVariants}>
    //             <div className="PolicyBoxT2">{t('sections.contact.content')}</div>
    //           </motion.div>
    //           <motion.div variants={itemVariants}>
    //             <div className="PolicyBoxT2">{t('sections.contact.email')}</div>
    //           </motion.div>
    //           <motion.div variants={itemVariants}>
    //             <div className="PolicyBoxT2" dir="ltr">{t('sections.contact.phone')}</div>
    //           </motion.div>
    //         </motion.div>
    //       </div>
    //     </div>
    //   </section>
    //   {/* <HomeAbout /> */}
    //   <PropertyForm projectName="Golf View Living Apartments" />
    //   <Footer />
    //   <FooterBottom />
    // </div>
  );
}
