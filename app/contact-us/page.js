'use client';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import Image from "next/image";
import b1 from "../../public/cnt.jpg";
export default function ContactUs() {

  useEffect(() => {
    const screenWidth = window.innerWidth;

    // Set width on all elements with the class 'screenWidth'
    const elements = document.querySelectorAll('.screenWidth');
    elements.forEach((el) => {
      el.style.width = `${screenWidth}px`;
    });
  }, []);

  useEffect(() => {
    const updateHeights = () => {
      const header = document.querySelector('header');
      const headerHeight = header?.offsetHeight || 0;
      const windowHeight = window.innerHeight;
      const availableHeight = windowHeight - headerHeight;

      const elements = document.querySelectorAll('.ScreenHeight');
      elements.forEach((el) => {
        el.style.height = `${availableHeight}px`;
      });
    };

    updateHeights();
    window.addEventListener('resize', updateHeights);

    return () => window.removeEventListener('resize', updateHeights);
  }, []);

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
            Hello, How Can We Help You Today?
          </motion.div>
        </div>
      </section>
      <section className="CntMiddleBox pd-common">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="row MidRow1">
              <div className="col-md-6">
                <div className="Ct2 nunito-text">Contact us</div>
                <div className="Ct3">Get in Touch with Us</div>
              </div>
              <div className="col-md-6">
                <div className="Ct4 nunito-text">Need to sell or buy a property? Just get in touch and we will deal with everything else. You’ve made a great choice getting in touch with us.</div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="row">
              <div className="col-md-6">
                <div className='FormBox'>
                  <div className='row'>
                    <div className='col-md-12'>
                      <input type="text" placeholder='First Name' />
                    </div>
                    <div className='col-md-12'>
                      <input type="text" placeholder='Last Name' />
                    </div>
                    <div className='col-md-12'>
                      <input type="text" placeholder='Phone Number' />
                    </div>
                    <div className='col-md-12'>
                      <input type="text" placeholder='Email Address' />
                    </div>
                    <div className='col-md-12'>
                      <textarea placeholder='Message'></textarea>
                    </div>
                    <div className='col-md-12'>
                      <button className='hover1'>Send Enquiry</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 PadBox1">
                <div className='contactDetailBox ConPage'>
                  <div className='CRow whatsapp a1'>
                    <a href='#' title='Whatsapp Us'>+971 523749615</a>
                  </div>
                  <div className='CRow call a2'>
                    <a href='#' title='Call Us'>+971 45531916</a>&nbsp;,&nbsp;
                    <a href='#' title='Call Us'>+971 45655099</a>
                  </div>
                  <div className='CRow email a3'>
                    <a href='#' title='Call Us'>info@takmeeluae.com</a>
                  </div>
                  <div className='CRow location a4'>
                    <div className="LcBox">
                      <div className="LcBoxT1">Dubai</div>
                      <div className="LcBoxT2">814, Burlington Tower, Business Bay, Dubai.</div>
                      <a href="#">Get Direction</a>
                    </div>
                    <div className="Spacer">&nbsp;</div>
                    <div className="LcBox">
                      <div className="LcBoxT1">Ajman</div>
                      <div className="LcBoxT2">G01, Sheikh Ammar Bin Humaid St. Al Mowaihat 02, Ajman, UAE.</div>
                      <a href="#">Get Direction</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}