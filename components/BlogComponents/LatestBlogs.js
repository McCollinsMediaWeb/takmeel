'use client'; // optional if using interactivity (like menus)
import Image from "next/image";
import Link from 'next/link';
import { motion } from "framer-motion";

import blogimage from "../../public/blmain.jpg"
export default function LatestBlog({ blog }) {
  return (
    <div className="BlogPostMainArea pd-common">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="BlT1 nunito-text">LATEST ARTICLE</div>
              <div className="BlT2">News & Updates</div>
              <div className="BlT3">Stay connected with Takmeel Real Estate Development as we share the latest news, project updates, and industry insights. This section is your direct source for everything happening within our company, from groundbreaking announcements and project milestones to market trends and community initiatives. We’re committed to transparency and keeping you informed, ensuring you’re always up-to-date on our progress and the opportunities we’re creating. Follow our news to stay ahead and be part of the Takmeel journey.</div>
            </div>
            <div className="col-md-12  ">
              {/* <div className="LatestBlogImage">
                <Image
                  src={blog?.coverImage}
                  width={478}
                  height={253}
                  layout="responsive"
                  alt="Takmeel"
                />
              </div> */}
              <div className="FeaturedBlogListingBox">
                <div className="row">
                  <div className="col-md-4">
                    <div className="LatestBlogItem bg2">
                      <div className="LatestBlogImage position-relative">
                        <Image
                          src="/Asad-Bashir-min.jpg"
                          width={364}
                          height={253}
                          layout="responsive"
                          alt="Takmeel"
                        />
                        <div className="wrapLogo">
                          <Image
                            src="/klg.jpg"
                            width={900}
                            height={208}
                            layout="responsive"
                            alt="Takmeel"
                            className="LogoKlhaleeg"
                          />
                        </div>
                      </div>
                      <div className="LatestBlogDesc">
                        {/* <div className="LtT1 nunito-text" style={{ textTransform: 'uppercase' }}>{blog?.date} | {blog?.category}</div>
                  <div className="LtT2">{blog?.heading}</div>
                  <div className="LtT3 truncate-3-lines">{blog?.subheading}</div>
                  <div className="text-right">
                    <Link href={`/news-updates/${blog._id}`} className='Link6 hover1'>Read More</Link>
                  </div> */}
                        <div className="LtT1 nunito-text" style={{ textTransform: 'uppercase' }}>Featured Article</div>
                        <div className="LtT2">Understanding 2024 — What to expect in 2025: Demystifying Dubai’s off-plan real estate boom</div>
                        <div className="LtT3 truncate-3-lines">Few markets have captured the global investor’s imagination quite like Dubai’s off-plan real estate sector. In 2024, this segment didn’t just grow — it evolved. The year was marked not by the kind of speculative frenzy that once defined the emirate’s real estate landscape, but by measured, confident strides rooted in transparency, smart planning, and a growing maturity in both buyer behavior and developer offerings.</div>
                        <div className="text-right">
                          <a target="_blank" href="https://www.khaleejtimes.com/business-technology-review/understanding-2024-what-to-expect-in-2025-demystifying-dubais-off-plan-real-estate-boom?_refresh=true" className='Link6 hover1'>Read More</a>
                        </div>
                      </div>
                    </div>
                  </div>
                   <div className="col-md-4">
                    <div className="LatestBlogItem bg2">
                      <div className="LatestBlogImage position-relative">
                        <Image
                          src="/hamza.jpg"
                          width={364}
                          height={253}
                          layout="responsive"
                          alt="Takmeel"
                        />
                        <div className="wrapLogo">
                          <Image
                            src="/klg.jpg"
                            width={900}
                            height={208}
                            layout="responsive"
                            alt="Takmeel"
                            className="LogoKlhaleeg"
                          />
                        </div>
                      </div>
                      <div className="LatestBlogDesc">
                        {/* <div className="LtT1 nunito-text" style={{ textTransform: 'uppercase' }}>{blog?.date} | {blog?.category}</div>
                  <div className="LtT2">{blog?.heading}</div>
                  <div className="LtT3 truncate-3-lines">{blog?.subheading}</div>
                  <div className="text-right">
                    <Link href={`/news-updates/${blog._id}`} className='Link6 hover1'>Read More</Link>
                  </div> */}
                        <div className="LtT1 nunito-text" style={{ textTransform: 'uppercase' }}>Featured Article</div>
                        <div className="LtT2">5 Things to Know Before Investing in Dubai’s Off-Plan Real Estate</div>
                        <div className="LtT3 truncate-3-lines">Dubai’s real estate market has long been a magnet for global investors — and with good reason. Strong returns, tax-free ownership, and a city that never stops reinventing itself make it an exciting playground for property investments. Among the many opportunities available, buying off-plan real estate — properties sold before they’re completed — offers particularly attractive potential</div>
                        <div className="text-right">
                          <a target="_blank" href="https://www.khaleejtimes.com/business-technology-review/understanding-2024-what-to-expect-in-2025-demystifying-dubais-off-plan-real-estate-boom?_refresh=true" className='Link6 hover1'>Read More</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
