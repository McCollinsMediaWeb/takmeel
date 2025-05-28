'use client';
import { motion } from "framer-motion";

export default function JobListing() {
    const animationVariants = [
        { initial: { opacity: 0, y: 50 }, whileInView: { opacity: 1, y: 0 } },
        { initial: { opacity: 0, x: -50 }, whileInView: { opacity: 1, x: 0 } },
        { initial: { opacity: 0, x: 50 }, whileInView: { opacity: 1, x: 0 } },
        { initial: { opacity: 0, scale: 0.8 }, whileInView: { opacity: 1, scale: 1 } },
        { initial: { opacity: 0, rotate: -10 }, whileInView: { opacity: 1, rotate: 0 } },
        { initial: { opacity: 0 }, whileInView: { opacity: 1 }, transition: { duration: 1.5 } }
    ];

    return (
        <section className="pd-common bg">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <div className="text-center">
                        <div className="CfT1 nunito-text">Join Our Mission to Build the Future</div>
                        <div className="CfT2">
                            Explore current opportunities at Takmeel<br />
                            and be part of a team that's transforming ideas into impactful solutions
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <div className="StageBox">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="StageItemBox text-center">
                                    <motion.div
                                        initial={animationVariants[0].initial}
                                        whileInView={animationVariants[0].whileInView}
                                        transition={{ duration: 0.8, ease: "easeOut" }}
                                        viewport={{ once: true, amount: 0.5 }}
                                    >
                                        <div className="JobBox bg2">
                                            <div className="JobBoxT1">Administrative Assistant</div>
                                            <div className="JobBoxT2">The Administrative Assistant plays a key role in ensuring smooth day-to-day office operations. This position is responsible for general administrative support, including document preparation, supply management, equipment maintenance, and vendor coordination. The role also involves handling purchase orders through ERP systems, maintaining filing systems, and assisting with reports and presentations. Ideal candidates are organized, detail-oriented, and capable of supporting teams with various tasks and ongoing projects.</div>
                                            <div className="ReadMoreBox">
                                                <div className="JobBoxT3">Administrative Assistant Duties:</div>
                                                <ul className="JobulLi">
                                                    <li>Provide general administrative support on day-to-day office tasks</li>
                                                    <li>Prepare and modify documents including correspondence, reports, drafts, memos, and emails.</li>
                                                    <li>Manage and maintain office supplies inventory.</li>
                                                    <li>Maintenance and repair of office equipment, building, furniture & fixtures. </li>
                                                    <li>Coordinate and negotiate with different vendors/suppliers</li>
                                                    <li>Generate purchase requisitions and purchase order in ERP as per agreed terms and conditions</li>
                                                    <li>Organize and maintain electronic and paper filing systems.</li>
                                                    <li>Assist in the preparation of presentations and reports.</li>
                                                    <li>Support the team with various administrative tasks and projects as needed.</li>
                                                </ul>
                                                <div className="JobBoxT3">Public Relations Officer (PRO) Duties:</div>
                                                <ul className="JobulLi">
                                                    <li>Manage and process all visa applications, renewals, and cancellations for employees.</li>
                                                    <li>Liaise with government authorities, ministries, and departments to ensure compliance with regulations.</li>
                                                    <li>Prepare and submit documents required for various government transactions (e.g., trade licenses, permits, certifications).</li>
                                                    <li>Stay updated on changes in government laws and procedures and advise the company on any necessary actions.</li>
                                                    <li>Handle employee relations matters pertaining to government regulations and documentation.</li>
                                                    <li>Assist with the attestation of documents as required.</li>
                                                    <li>Maintain accurate records of all PRO-related activities and documentation.</li>
                                                    <li>Facilitate the renewal of company licenses and registrations.</li>
                                                    <li>Manage the company's relationship with relevant government entities.</li>
                                                </ul>
                                                <div className="JobBoxT3">Qualifications:</div>
                                                <ul className="JobulLi">
                                                    <li>Bachelor's degree in Marketing, Business Administration, or a related field. A Master's degree is a plus.   </li>
                                                    <li>3-5 years of proven experience in marketing within the real estate development industry.</li>
                                                    <li>Strong understanding of the real estate market dynamics, customer segments, and sales processes.</li>
                                                    <li>Demonstrated success in developing and executing effective multi-channel marketing strategies.</li>
                                                    <li>Proficiency in digital marketing tools and platforms, including SEO/SEM, social media marketing, email marketing, CRM systems, and website analytics.</li>
                                                    <li>Excellent written and verbal communication skills, with the ability to create compelling marketing content.</li>
                                                    <li>Strong project management and organizational skills, with the ability to manage multiple projects simultaneously and meet deadlines.   </li>
                                                    <li>Analytical and data-driven mindset, with the ability to interpret marketing performance data and make informed decisions.</li>
                                                    <li>Strong negotiation and vendor management skills.</li>
                                                </ul>
                                                <div className="JobNote">Interested candidates are invited to submit their resume to hr@takmeeluae.com</div>
                                            </div>
                                            <div className="JobButtons">
                                                <span className="ViewAlldetails Link6 hover1">View All Details</span>
                                                <a href="#careerform" className="Link6 hover1">Apply Now</a>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="StageItemBox text-center">
                                    <motion.div
                                        initial={animationVariants[1].initial}
                                        whileInView={animationVariants[1].whileInView}
                                        transition={{ duration: 0.8, ease: "easeOut" }}
                                        viewport={{ once: true, amount: 0.5 }}
                                    >
                                        
                                        <div className="JobBox bg2">
                                            <div className="JobBoxT1">Marketing Manager</div>
                                            <div className="JobBoxT2">Takmeel is seeking a dynamic and results-oriented Marketing Manager to lead and execute marketing strategies that drive brand awareness, generate leads, and support the successful sales of our real estate projects. The ideal candidate will be a creative thinker with a strong understanding of the real estate market, digital marketing trends, and traditional marketing channels. You will be responsible for developing and implementing comprehensive marketing plans, managing budgets, and collaborating with internal teams and external agencies to achieve marketing objectives.</div>
                                            <div className="ReadMoreBox">
                                                <div className="JobBoxT3">Responsibilities:</div>
                                                <ul className="JobulLi">
                                                    <li>Develop and implement comprehensive marketing strategies and plans for current and upcoming real estate projects, aligning with overall business goals and sales targets.</li>
                                                    <li>Manage and execute multi-channel marketing campaigns, including digital marketing (SEO, SEM, social media, email marketing), content marketing, print advertising, public relations, events, and partnerships.</li>
                                                    <li>Conduct thorough market research and competitor analysis to identify opportunities and trends, informing marketing strategies and messaging.</li>
                                                    <li>Oversee the creation of compelling marketing materials, including brochures, website content, social media posts, videos, and presentations, ensuring brand consistency and accuracy.</li>
                                                    <li>Manage and optimize the company website and online presence to enhance user experience and lead generation.</li>
                                                    <li>Plan and execute successful property launches, open houses, and other promotional events.</li>
                                                    <li>Develop and manage the marketing budget, ensuring cost-effectiveness and maximizing ROI.</li>
                                                    <li>Track, analyze, and report on the performance of marketing campaigns, providing insights and recommendations for optimization.</li>
                                                    <li>Build and maintain strong relationships with media outlets, advertising agencies, and other external vendors.</li>
                                                    <li>Collaborate closely with the sales team to ensure alignment of marketing and sales efforts and provide them with necessary marketing support and tools.</li>
                                                    <li>Stay up-to-date with the latest trends and best practices in real estate marketing and digital technologies.</li>
                                                    <li>Ensure all marketing activities comply with relevant regulations and ethical standards.</li>
                                                </ul>
                                                <div className="JobBoxT3">Qualifications:</div>
                                                <ul className="JobulLi">
                                                    <li>Bachelor's degree in Marketing, Business Administration, or a related field. A Master's degree is a plus.   </li>
                                                    <li>3-5 years of proven experience in marketing within the real estate development industry.</li>
                                                    <li>Strong understanding of the real estate market dynamics, customer segments, and sales processes.</li>
                                                    <li>Demonstrated success in developing and executing effective multi-channel marketing strategies.</li>
                                                    <li>Proficiency in digital marketing tools and platforms, including SEO/SEM, social media marketing, email marketing, CRM systems, and website analytics.</li>
                                                    <li>Excellent written and verbal communication skills, with the ability to create compelling marketing content.</li>
                                                    <li>Strong project management and organizational skills, with the ability to manage multiple projects simultaneously and meet deadlines.   </li>
                                                    <li>Analytical and data-driven mindset, with the ability to interpret marketing performance data and make informed decisions.</li>
                                                    <li>Strong negotiation and vendor management skills.</li>
                                                </ul>
                                                <div className="JobNote">Interested candidates are invited to submit their resume to hr@takmeeluae.com</div>
                                            </div>
                                            <div className="JobButtons">
                                                <span className="ViewAlldetails Link6 hover1">View All Details</span>
                                                <a href="#careerform" className="Link6 hover1">Apply Now</a>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
