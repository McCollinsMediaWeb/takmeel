// 'use client';
import FAQbox from "@/components/FAQbox/FAQbox";
import GetInTouchForm from "./GetInTouchForm";
import OurOffice from "./OurOffice";
import ContactUsBanner from "./ContactUsBanner";
import MetaInjector from "@/components/Meta/MetaInjector";
import { getMetaTags } from "@/lib/getMetaTags";
import Footer from "@/components/footer/footer";
import FooterBottom from "@/components/footerBottom/footerBottom";

export default async function ContactUs() {
  const metaTags = await getMetaTags("/contact-us");
  if (metaTags.length === 0 || !metaTags[0].metaContent) {
    console.warn("No meta tags found, using default");
  }

  return (
    <>
      {metaTags.length > 0 && metaTags[0].metaContent && (
        <MetaInjector metaContent={metaTags[0].metaContent} />
      )}
      <div>
        <ContactUsBanner />
        <GetInTouchForm />
        <OurOffice />
        {/* <section className="CntMiddleBox pd-common">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="row MidRow1">
              <div className="col-md-6">
                <div className="Ct2">Contact us</div>
                <div className="Ct3">Get in Touch with Us</div>
              </div>
              <div className="col-md-6">
                <div className="Ct4">Need to sell or buy a property? Just get in touch and we will deal with everything else. You’ve made a great choice getting in touch with us.</div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
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
                      <div className="LcBoxT2">Office no 706, Building no 8, Bay Square Business bay Dubai, UAE                      </div>
                      <a href="#">Get Direction</a>
                    </div>
                    <div className="Spacer">&nbsp;</div>
                    <div className="LcBox">
                      <div className="LcBoxT1">Ajman</div>
                      <div className="LcBoxT2">G01, Sheikh Ammar Bin Humaid St. Al Mowaihat 02, Ajman, UAE.</div>
                      <a href="#">Get Direction</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section> */}
        <FAQbox />
        <Footer />
        <FooterBottom />
      </div>
    </>
  );
}