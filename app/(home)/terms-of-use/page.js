'use client';
import FAQbox from "@/components/FAQbox/FAQbox";
import ContactForm from "@/components/ContactForm/ContactForm";
import Image from "next/image";
import { motion } from "framer-motion";
import b1 from "../../../public/main1.jpg";
import Footer from "@/components/footer/footer";
import FooterBottom from "@/components/footerBottom/footerBottom";
import HomeAbout from "@/components/HomeAbout/HomeAbout";
export default function TermsOfUse() {
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
   return (
     <div>
       <section className='HdTpHd1 bg2 pd-common'>
         <div className="text-center">
           <h2 className="HedrT1">Terms Of Use</h2>
         </div>
       </section>
       <section className="pd-common">
         <div className="container">
           <div className="PolicyBox">
             <motion.div
               variants={containerVariants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: false, amount: 0.5 }}
             >
 
               <motion.div variants={itemVariants}>
                 <div className="PolicyBoxT1">Terms Of Use</div>
               </motion.div>
               <motion.div variants={itemVariants}>
                 <div className="PolicyBoxT1">Effective Date: 20-05-2025</div>
               </motion.div>
               <motion.div variants={itemVariants}>
                 <div className="PolicyBoxT2">Welcome to Takmeel Development. These Terms of Use (“Terms”) govern your access to and use of our website and any related services provided by Takmeel Development (“we,” “us,” or “our”). By accessing or using our website or services, you agree to be bound by these Terms.</div>
               </motion.div>
               <motion.div variants={itemVariants}>
                 <div className="PolicyBoxT3">1. Use of Our Services</div>
               </motion.div>
               <motion.div variants={itemVariants}>
                 <div className="PolicyBoxT2">You agree to use our website and services only for lawful purposes and in accordance with these Terms. You must not use the site:</div>
               </motion.div>
               <motion.div variants={itemVariants}>
                 <ul className="PPUl">
                   <li>In any way that violates any applicable local, national, or international law or regulation.</li>
                   <li>To transmit any unsolicited or unauthorized advertising or promotional material.</li>
                   <li>To harm or attempt to harm minors or others in any way.</li>
                   <li>To interfere with or disrupt the operation of the site or servers.</li>
                 </ul>
               </motion.div>
             </motion.div>
           </div>
 
 
           <div className="PolicyBox">
             <motion.div
               variants={containerVariants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: false, amount: 0.5 }}
             >
               <motion.div variants={itemVariants}>
                 <div className="PolicyBoxT3">2. User Accounts</div>
               </motion.div>
               <motion.div variants={itemVariants}>
                 <div className="PolicyBoxT2">Certain services may require you to create an account. You agree to provide accurate and complete information and to keep your login credentials confidential. You are responsible for all activities under your account.</div>
               </motion.div>
             </motion.div>
           </div>
 
           <div className="PolicyBox">
             <motion.div
               variants={containerVariants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: false, amount: 0.5 }}
             >
               <motion.div variants={itemVariants}>
                 <div className="PolicyBoxT3">3. Intellectual Property</div>
               </motion.div>
               <motion.div variants={itemVariants}>
                 <div className="PolicyBoxT2">All content on this website—including text, images, graphics, logos, and software—is the property of Takmeel Development or its licensors and is protected by intellectual property laws. You may not use, reproduce, or distribute any content without our written permission.</div>
               </motion.div>
               
             </motion.div>
           </div>
           <div className="PolicyBox">
             <motion.div
               variants={containerVariants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: false, amount: 0.5 }}
             >
               <motion.div variants={itemVariants}>
                 <div className="PolicyBoxT3">4. Property Listings and Information</div>
               </motion.div>
               <motion.div variants={itemVariants}>
                 <div className="PolicyBoxT2">Information about properties on our website is provided for informational purposes only and is subject to change. We make reasonable efforts to keep property details up to date but do not guarantee their accuracy.</div>
               </motion.div>
             </motion.div>
           </div>
           <div className="PolicyBox">
             <motion.div
               variants={containerVariants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: false, amount: 0.5 }}
             >
               <motion.div variants={itemVariants}>
                 <div className="PolicyBoxT3">5. Payments and Transactions</div>
               </motion.div>
               <motion.div variants={itemVariants}>
                 <div className="PolicyBoxT2">Any payments made through our platform for rent, deposits, or services are subject to our billing terms. All transactions are securely processed through third-party payment processors.</div>
               </motion.div>
             </motion.div>
           </div>
           <div className="PolicyBox">
             <motion.div
               variants={containerVariants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: false, amount: 0.5 }}
             >
               <motion.div variants={itemVariants}>
                 <div className="PolicyBoxT3">6. Termination</div>
               </motion.div>
               <motion.div variants={itemVariants}>
                 <div className="PolicyBoxT2">We reserve the right to suspend or terminate your access to the website or services at any time, without notice, if you violate these Terms or for any other reason deemed necessary.</div>
               </motion.div>
             </motion.div>
           </div>
           <div className="PolicyBox">
             <motion.div
               variants={containerVariants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: false, amount: 0.5 }}
             >
               <motion.div variants={itemVariants}>
                 <div className="PolicyBoxT3">7. Disclaimers</div>
               </motion.div>
               <motion.div variants={itemVariants}>
                 <div className="PolicyBoxT2">Our website and services are provided "as is" without warranties of any kind, either express or implied.</div>
               </motion.div>
               <motion.div variants={itemVariants}>
                 <div className="PolicyBoxT2">We do not guarantee the availability, accuracy, or reliability of the services or information provided.</div>
               </motion.div>
             </motion.div>
           </div>
           <div className="PolicyBox">
             <motion.div
               variants={containerVariants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: false, amount: 0.5 }}
             >
               <motion.div variants={itemVariants}>
                 <div className="PolicyBoxT3">8. Limitation of Liability</div>
               </motion.div>
               <motion.div variants={itemVariants}>
                 <div className="PolicyBoxT2">To the fullest extent permitted by law, Takmeel Development shall not be liable for any indirect, incidental, special, or consequential damages resulting from your use of or inability to use our services.</div>
               </motion.div>
             </motion.div>
           </div>

           <div className="PolicyBox">
             <motion.div
               variants={containerVariants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: false, amount: 0.5 }}
             >
               <motion.div variants={itemVariants}>
                 <div className="PolicyBoxT3">9. Governing Law</div>
               </motion.div>
               <motion.div variants={itemVariants}>
                 <div className="PolicyBoxT2">These Terms are governed by and construed in accordance with the laws of [Insert Jurisdiction]. Any disputes shall be resolved in the courts located in [Insert City/Region].</div>
               </motion.div>
             </motion.div>
           </div>
           <div className="PolicyBox">
             <motion.div
               variants={containerVariants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: false, amount: 0.5 }}
             >
               <motion.div variants={itemVariants}>
                 <div className="PolicyBoxT3">10. Changes to Terms</div>
               </motion.div>
               <motion.div variants={itemVariants}>
                 <div className="PolicyBoxT2">We reserve the right to modify these Terms at any time. Changes will be posted on this page with a revised effective date. Continued use of the site after changes means you accept the new Terms.</div>
               </motion.div>
             </motion.div>
           </div>
           <div className="PolicyBox">
             <motion.div
               variants={containerVariants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: false, amount: 0.5 }}
             >
               <motion.div variants={itemVariants}>
                 <div className="PolicyBoxT3">9. Contact Us</div>
               </motion.div>
               <motion.div variants={itemVariants}>
                 <div className="PolicyBoxT2">For questions about these Terms, contact:</div>
               </motion.div>
               <motion.div variants={itemVariants}>
                 <div className="PolicyBoxT2">info@takmeeluae.com</div>
               </motion.div>
               <motion.div variants={itemVariants}>
                 <div className="PolicyBoxT2">+971 523749615</div>
               </motion.div>
             </motion.div>
           </div>
         </div>
       </section>
       <HomeAbout />
       <ContactForm />
       <Footer />
       <FooterBottom />
     </div>
   );
}
