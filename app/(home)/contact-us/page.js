'use client';
import { motion } from "framer-motion";
import { useEffect, useState } from 'react';
import Image from "next/image";
import FAQbox from "@/components/FAQbox/FAQbox";
import b1 from "../../../public/cnt.jpg";
export default function ContactUs() {

  const initialForm = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  };

  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    for (let field in formData) {
      if (!formData[field]?.trim()) {
        newErrors[field] = 'This field is required';
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(false);

    if (!validate()) return;

    setLoading(true);
    try {
      const response = await fetch('/api/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData(initialForm);
      } else {
        alert("Failed to submit the form.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  const errorStyle = {
    color: 'red',
    fontSize: '13px',
    marginTop: '4px',
    marginBottom: '10px',
  };

  const infoStyle = {
    fontSize: '14px',
    marginTop: '10px',
  };

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
            Hello, How Can We Help You Today?
          </motion.div>
        </div>
      </section>



      <section className='ContactForm pd-common' style={{ backgroundColor: '#1A1A1A' }} >
        <div className='container'>
          <div className='text-center'>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }} // triggers when 50% of it is in view
            >
              <div className='CfT1'>CONTACT US</div>
              <div className='CfT2' style={{ color: "#F7F7F7" }} >Get in Touch with Us</div>
              <div className='CfT3' style={{ color: "#F7F7F7" }} >Need to sell or buy a property? Just get in touch and we will deal with everything else. You’ve made a great choice getting in touch with us.</div>

              {/* <div className='FormBox'> */}
              <form className='FormBox' onSubmit={handleSubmit}>
                <div className='row'>
                  {[
                    { label: 'First Name', name: 'firstName' },
                    { label: 'Last Name', name: 'lastName' },
                    { label: 'Phone Number', name: 'phone' },
                    { label: 'Email Address', name: 'email' },
                  ].map(({ label, name }) => (
                    <div className='col-md-6' key={name}>
                      <input
                        type="text"
                        name={name}
                        placeholder={label}
                        value={formData[name]}
                        onChange={handleChange}
                      />
                      {errors[name] && <div style={errorStyle}>{errors[name]}</div>}
                    </div>
                  ))}
                  {/* <div className='col-md-6'>
                    <input type="text" placeholder='First Name' />
                  </div>
                  <div className='col-md-6'>
                    <input type="text" placeholder='Last Name' />
                  </div>
                  <div className='col-md-6'>
                    <input type="text" placeholder='Phone Number' />
                  </div>
                  <div className='col-md-6'>
                    <input type="text" placeholder='Email Address' />
                  </div> */}
                  {/* <div className='col-md-12'>
                    <textarea rows={6} placeholder='Message'></textarea>
                  </div> */}

                  <div className='col-md-12'>
                    <textarea
                      rows={5}
                      name="message"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                    />
                    {errors.message && <div style={errorStyle}>{errors.message}</div>}
                  </div>

                  {/* <div className='col-md-12'>
                    <button className='hover1'>Send Enquiry</button>
                  </div> */}

                  <div className='col-md-12'>
                    <button className='hover1' type="submit" disabled={loading}>
                      {loading ? 'Submitting...' : 'Send Enquiry'}
                    </button>

                    {submitted && (
                      <div style={{ ...infoStyle, color: 'green' }}>
                        ✅ Form submitted successfully!
                      </div>
                    )}
                    {loading && (
                      <div style={{ ...infoStyle, color: '#007bff' }}>
                        Please wait while we submit your request...
                      </div>
                    )}
                  </div>

                </div>
              </form>
              {/* </div> */}
            </motion.div>
          </div>
        </div>
      </section>


      <section className="CntMiddleBox pd-common">
        <style>
          {`
            @media (max-width: 768px) {
              .responsive-call-box {
                width: 100% !important;
                margin-bottom: 15px;
            }
              .contact-team-header{
                margin: 0 auto;
              }
            }
          `}
        </style>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >

            <div className="row">
              <div className='CfT2 contact-team-header'>Contact Our Team</div>
              {/* <div className="col-md-12 PadBox1"> */}
              <div className="col-md-12" style={{ marginTop: '40px' }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "30px",
                  }}
                >
                  {/* Timings Section */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      borderBottom: "1px solid #eaeaea",
                      paddingBottom: "20px",
                      flexWrap: "wrap",
                    }}
                  >
                    <div
                      className="responsive-call-box"
                      style={{
                        width: "50%",
                        minWidth: "150px",
                        paddingRight: "20px",
                      }}
                    >
                      <div
                        style={{
                          color: "#333",
                          fontSize: "18px"
                        }}
                        className="CfT1"
                      >
                        TIMINGS
                      </div>
                    </div>
                    <div
                      style={{
                        flex: "1",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <div>
                        <p style={{ margin: "0", fontWeight: "500" }}>Monday - Friday</p>
                        <p style={{ margin: "0", color: "#666" }}>8:30 AM to 5:30 PM</p>
                      </div>
                      <div>
                        <p style={{ margin: "0", fontWeight: "500" }}>Saturday</p>
                        <p style={{ margin: "0", color: "#666" }}>8:30 AM to 12:30 PM</p>
                      </div>
                    </div>
                  </div>

                  {/* Call Us Section */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      borderBottom: "1px solid #eaeaea",
                      paddingBottom: "20px",
                      flexWrap: "wrap",
                    }}
                  >
                    <div
                      className="responsive-call-box"
                      style={{
                        width: "50%",
                        minWidth: "150px",
                        paddingRight: "20px",
                      }}
                    >
                      <div
                        style={{
                          color: "#333",
                          fontSize: "18px"
                        }}
                        className="CfT1"
                      >
                        CALL US
                      </div>
                    </div>
                    <div
                      style={{
                        flex: "1",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <span style={{ fontSize: "20px" }}>
                          <img src="/whatsapp-black-icon.png" />
                        </span>
                        <a href="tel:+971523749615" style={{ color: "#333", textDecoration: "none" }}>
                          +971 523749615
                        </a>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <span style={{ fontSize: "20px" }}>
                          <img src="/call-black-icon.png" />
                        </span>
                        <a href="tel:+97145531916" style={{ color: "#333", textDecoration: "none" }}>
                          +971 45531916
                        </a>
                        <span style={{ color: "#666" }}>|</span>
                        <a href="tel:+97145655099" style={{ color: "#333", textDecoration: "none" }}>
                          +971 45655099
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Email Section */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      borderBottom: "1px solid #eaeaea",
                      paddingBottom: "20px",
                      flexWrap: "wrap",
                    }}
                  >
                    <div
                      className="responsive-call-box"
                      style={{
                        width: "50%",
                        minWidth: "150px",
                        paddingRight: "20px",
                      }}
                    >
                      <div
                        style={{
                          color: "#333",
                          fontSize: "18px"
                        }}
                        className="CfT1"
                      >
                        EMAIL
                      </div>
                    </div>
                    <div
                      style={{
                        flex: "1",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <a href="mailto:info@takmeeluae.com" style={{ color: "#333", textDecoration: "none" }}>
                        Info@Takmeeluae.Com
                      </a>
                    </div>
                  </div>

                  {/* Visit Us Section */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      paddingBottom: "20px",
                      flexWrap: "wrap",
                    }}
                  >
                    <div
                      className="responsive-call-box"
                      style={{
                        width: "50%",
                        minWidth: "150px",
                        paddingRight: "20px",
                      }}
                    >
                      <div
                        style={{
                          color: "#333",
                          fontSize: "18px"
                        }}
                        className="CfT1"
                      >
                        VISIT US
                      </div>
                    </div>
                    <div
                      style={{
                        flex: "1",
                        display: "flex",
                        flexDirection: "row",
                        gap: "40px",
                        flexWrap: "wrap",
                      }}
                    >
                      <div style={{ flex: "1", minWidth: "250px" }}>
                        <h4 style={{ margin: "0 0 10px 0", fontSize: "18px", fontWeight: "600" }}>Dubai</h4>
                        <p style={{ margin: "0 0 10px 0", color: "#666", lineHeight: "1.5" }}>
                          814, Burlington Tower,
                          <br />
                          Business Bay, Dubai.
                        </p>
                        <a href="#" style={{ color: "#333", textDecoration: "none", fontWeight: "500" }}>
                          Get Direction
                        </a>
                      </div>
                      <div style={{ flex: "1", minWidth: "250px" }}>
                        <h4 style={{ margin: "0 0 10px 0", fontSize: "18px", fontWeight: "600" }}>Ajman</h4>
                        <p style={{ margin: "0 0 10px 0", color: "#666", lineHeight: "1.5" }}>
                          G01, Sheikh Ammar Bin Humaid St.
                          <br />
                          Al Mowaihat 02, Ajman, UAE.
                        </p>
                        <a href="#" style={{ color: "#333", textDecoration: "none", fontWeight: "500" }}>
                          Get Direction
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>





      {/* <section className="CntMiddleBox pd-common">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
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
    </div>
  );
}