'use client';
import FAQbox from "@/components/FAQbox/FAQbox";
import ContactForm from "@/components/ContactForm/ContactForm";
import Image from "next/image";
import { motion } from "framer-motion";
import b1 from "../../public/main4.jpg";
export default function Faqs() {
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Freaquently Asked Questions
          </motion.div>
        </div>
      </section>
        <FAQbox/>
        <ContactForm/>
      </div>
    );
  }
  