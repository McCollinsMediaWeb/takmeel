'use client';
import FAQbox from "@/components/FAQbox/FAQbox";
import ContactForm from "@/components/ContactForm/ContactForm";
import Image from "next/image";
import { motion } from "framer-motion";
import b1 from "../../../public/main3.jpg";
import Footer from "@/components/footer/footer";
import FooterBottom from "@/components/footerBottom/footerBottom";
import HomeAbout from "@/components/HomeAbout/HomeAbout";
export default function PrivacyPolicy() {
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
          <h2 className="HedrT1">Privacy Policy</h2>
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
                <div className="PolicyBoxT1">Privacy Policy</div>
              </motion.div>
              <motion.div variants={itemVariants}>
                <div className="PolicyBoxT1">Effective Date: 20-05-2025</div>
              </motion.div>
              <motion.div variants={itemVariants}>
                <div className="PolicyBoxT2">Takmeel Development (“we”, “our”, or “us”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services related to property management.</div>
              </motion.div>
              <motion.div variants={itemVariants}>
                <div className="PolicyBoxT3">1. Information We Collect</div>
              </motion.div>
              <motion.div variants={itemVariants}>
                <div className="PolicyBoxT2">We may collect personal information that you provide directly to us, including:</div>
              </motion.div>
              <motion.div variants={itemVariants}>
                <ul className="PPUl">
                  <li>Contact Information: Name, email address, phone number, and mailing address.</li>
                  <li>Property Details: Information about properties you own, lease, or inquire about.</li>
                  <li>Payment Information: Billing details for rent or service payments (processed securely).</li>
                  <li>Usage Data: Information automatically collected when you use our website, including IP address, browser type, and usage patterns.</li>
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
                <div className="PolicyBoxT3">2. How We Use Your Information</div>
              </motion.div>
              <motion.div variants={itemVariants}>
                <div className="PolicyBoxT2">We use the collected information to:</div>
              </motion.div>
              <motion.div variants={itemVariants}>
                <ul className="PPUl">
                  <li>Manage and maintain properties and tenant relationships.</li>
                  <li>Respond to inquiries and provide customer support.</li>
                  <li>Process payments and manage accounts.</li>
                  <li>Improve our website, services, and communication.</li>
                  <li>Comply with legal obligations.</li>
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
                <div className="PolicyBoxT3">3. Sharing Your Information</div>
              </motion.div>
              <motion.div variants={itemVariants}>
                <div className="PolicyBoxT2">We do not sell your personal data. We may share information with:</div>
              </motion.div>
              <motion.div variants={itemVariants}>
                <ul className="PPUl">
                  <li>Service Providers: Vendors who perform services on our behalf (e.g., maintenance contractors, payment processors).</li>
                  <li>Legal Authorities: When required by law or to protect our rights.</li>
                  <li>Affiliated Entities: As part of a business merger, sale, or reorganization.</li>
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
                <div className="PolicyBoxT3">4. Data Security</div>
              </motion.div>
              <motion.div variants={itemVariants}>
                <div className="PolicyBoxT2">We implement appropriate security measures to protect your personal data. However, no method of transmission over the internet or method of storage is 100% secure.</div>
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
                <div className="PolicyBoxT3">5. Your Rights</div>
              </motion.div>
              <motion.div variants={itemVariants}>
                <div className="PolicyBoxT2">Depending on your location, you may have rights regarding your personal information, such as:</div>
              </motion.div>
              <motion.div variants={itemVariants}>
                <ul className="PPUl">
                  <li>Accessing the data we hold about you</li>
                  <li>Requesting corrections or deletions</li>
                  <li>Process payments and manage accounts.</li>
                  <li>Opting out of marketing communications</li>
                </ul>
              </motion.div>
               <motion.div variants={itemVariants}>
                <div className="PolicyBoxT2">To exercise these rights, contact us at [Insert Contact Email].</div>
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
                <div className="PolicyBoxT3">6. Cookies and Tracking</div>
              </motion.div>
              <motion.div variants={itemVariants}>
                <div className="PolicyBoxT2">We may use cookies and similar technologies to enhance your experience on our website. You can modify your browser settings to manage cookies.</div>
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
                <div className="PolicyBoxT3">7. Third-Party Links</div>
              </motion.div>
              <motion.div variants={itemVariants}>
                <div className="PolicyBoxT2">Our website may contain links to third-party websites. We are not responsible for their privacy practices.</div>
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
                <div className="PolicyBoxT3">8. Changes to This Privacy Policy</div>
              </motion.div>
              <motion.div variants={itemVariants}>
                <div className="PolicyBoxT2">We may update this Privacy Policy periodically. Any changes will be posted on this page with a revised effective date.</div>
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
                <div className="PolicyBoxT2">For questions or concerns about this policy, contact:</div>
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
