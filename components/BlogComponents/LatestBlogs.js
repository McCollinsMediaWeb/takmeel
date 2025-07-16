'use client'; // optional if using interactivity (like menus)
import Image from "next/image";
import Link from 'next/link';
import { motion } from "framer-motion";

import blogimage from "../../public/blmain.jpg"
import { useLocale } from "next-intl";
export default function LatestBlog({ t, blog }) {
  const locale = useLocale();
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
            <div className="col-md-12" style={{ textAlign: locale === "ar" ? "right" : undefined }}>
              <div className="BlT1 nunito-text">{t('subTitle')}</div>
              <div className="BlT2">{t('title')}</div>
              <div className="BlT3">{t('content')}</div>
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
                      <div className="LatestBlogDesc" style={{ textAlign: locale === "ar" ? "right" : undefined }}>
                        {/* <div className="LtT1 nunito-text" style={{ textTransform: 'uppercase' }}>{blog?.date} | {blog?.category}</div>
                  <div className="LtT2">{blog?.heading}</div>
                  <div className="LtT3 truncate-3-lines">{blog?.subheading}</div>
                  <div className="text-right">
                    <Link href={`/news-updates/${blog._id}`} className='Link6 hover1'>Read More</Link>
                  </div> */}
                        <div className="LtT1 nunito-text" style={{ textTransform: 'uppercase' }}>{t('latestBlog.blog1.subTitle')}</div>
                        <div className="LtT2">{t('latestBlog.blog1.title')}</div>
                        <div className="LtT3 truncate-3-lines">{t('latestBlog.blog1.content')}</div>
                        <div className="text-right">
                          <a target="_blank" href="https://www.khaleejtimes.com/business-technology-review/understanding-2024-what-to-expect-in-2025-demystifying-dubais-off-plan-real-estate-boom?_refresh=true" className='Link6 hover1'>{t('readMore')}</a>
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
                            src="/dntv-logo.jpg"
                            width={900}
                            height={208}
                            layout="responsive"
                            alt="Takmeel"
                            className="LogoKlhaleeg"
                          />
                        </div>
                      </div>
                      <div className="LatestBlogDesc" style={{ textAlign: locale === "ar" ? "right" : undefined }}>
                        {/* <div className="LtT1 nunito-text" style={{ textTransform: 'uppercase' }}>{blog?.date} | {blog?.category}</div>
                  <div className="LtT2">{blog?.heading}</div>
                  <div className="LtT3 truncate-3-lines">{blog?.subheading}</div>
                  <div className="text-right">
                    <Link href={`/news-updates/${blog._id}`} className='Link6 hover1'>Read More</Link>
                  </div> */}
                        <div className="LtT1 nunito-text" style={{ textTransform: 'uppercase' }}>{t('latestBlog.blog2.subTitle')}</div>
                        <div className="LtT2">{t('latestBlog.blog2.title')}</div>
                        <div className="LtT3 truncate-3-lines">{t('latestBlog.blog2.content')}</div>
                        <div className="text-right">
                          <a target="_blank" href="https://www.khaleejtimes.com/business-technology-review/understanding-2024-what-to-expect-in-2025-demystifying-dubais-off-plan-real-estate-boom?_refresh=true" className='Link6 hover1'>{t('readMore')}</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="LatestBlogItem bg2">
                      <div className="LatestBlogImage position-relative">
                        <Image
                          src="/pr22.jpg"
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
                      <div className="LatestBlogDesc" style={{ textAlign: locale === "ar" ? "right" : undefined }}>
                        
                        <div className="LtT1 nunito-text" style={{ textTransform: 'uppercase' }}>{t('latestBlog.blog1.subTitle')}</div>
                        <div className="LtT2">Dubai realtor announces project pipeline worth Dh1.5 billion for 2025</div>
                        <div className="LtT3 truncate-3-lines">Takmeel Real Estate Development, a UAE-based developer unveiled its development roadmap for 2025 with a dynamic pipeline valued at Dh1.5 billion, with Dh550 million dedicated to upcoming flagship projects in Dubai South and Al Barari.</div>
                        <div className="text-right">
                          <a target="_blank" href="https://www.khaleejtimes.com/business/dubai-realtor-announces-project-pipeline-worth-dh15-billion-for-2025" className='Link6 hover1'>{t('readMore')}</a>
                        </div>
                      </div>
                    </div>
                  </div>
                   <div className="col-md-4">
                    <div className="LatestBlogItem bg2">
                      <div className="LatestBlogImage position-relative">
                        <Image
                          src="/pr33.jpg"
                          width={364}
                          height={253}
                          layout="responsive"
                          alt="Takmeel"
                        />
                        <div className="wrapLogo">
                          <Image
                            src="/gulftimepmg.png"
                            width={900}
                            height={208}
                            layout="responsive"
                            alt="Takmeel"
                            className="LogoKlhaleeg"
                          />
                        </div>
                      </div>
                      <div className="LatestBlogDesc" style={{ textAlign: locale === "ar" ? "right" : undefined }}>
                        <div className="LtT1 nunito-text" style={{ textTransform: 'uppercase' }}>{t('latestBlog.blog2.subTitle')}</div>
                        <div className="LtT2">Takmeel Real Estate Development Announces Bold Vision for the Future with AED 1.5 Billion in Pipeline for 2025</div>
                        <div className="LtT3 truncate-3-lines">After nearly two decades of shaping thoughtfully designed communities, Takmeel Real Estate Development L.L.C. is entering a transformative new era. With a proven track record of over 100 completed projects across the UAE, this homegrown developer is now unveiling its ambitious development roadmap for 2025 a dynamic pipeline valued at AED 1.5 billion, with AED 550 million dedicated to upcoming flagship projects in Dubai South and Al Barari.
Built on a foundation of timely delivery, lifestyle-driven design, and unwavering transparency, Takmeel is positioning itself as a next-generation developer committed to crafting communities that go beyond architecture offering environments that inspire belonging, well-being, and long-term value.
Takmeel’s upcoming developments will span over 350,000 sq. ft. of built-up area, strategically located in high-growth areas such as Majan, Al Barari, and Dubai South. These districts are recognized for their connectivity, natural landscapes,</div>
                        <div className="text-right">
                          <a target="_blank" href="https://www.khaleejtimes.com/business-technology-review/understanding-2024-what-to-expect-in-2025-demystifying-dubais-off-plan-real-estate-boom?_refresh=true" className='Link6 hover1'>{t('readMore')}</a>
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
