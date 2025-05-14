'use client';
import FAQbox from "@/components/FAQbox/FAQbox";
import ContactForm from "@/components/ContactForm/ContactForm";
import Image from "next/image";
import { motion } from "framer-motion";
import b1 from "../../../public/main3.jpg";
import Footer from "@/components/footer/footer";
import FooterBottom from "@/components/footerBottom/footerBottom";
export default function PrivacyPolicy() {
  return (
    <div>
      <section className='CntPageHead screenWidth ScreenHeight'>
        <Image
          src={b1}
          width={1464}
          height={768}
          layout="responsive"
          alt="Takmeel"
        />
        <div className="CT1">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Privacy Policy
          </motion.div>
        </div>
      </section>
      <ContactForm />
      <Footer />
      <FooterBottom />
    </div>
  );
}
