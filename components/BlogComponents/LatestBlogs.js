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
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="BlT1 nunito-text">LATEST ARTICLE</div>
              <div className="BlT2">News & Updates</div>
              <div className="BlT3">Stay connected with Takmeel Real Estate Development as we share the latest news, project updates, and industry insights. This section is your direct source for everything happening within our company, from groundbreaking announcements and project milestones to market trends and community initiatives. We’re committed to transparency and keeping you informed, ensuring you’re always up-to-date on our progress and the opportunities we’re creating. Follow our news to stay ahead and be part of the Takmeel journey.</div>
            </div>
            <div className="col-md-6 bg2 LatestBlogItem">
              <div className="LatestBlogImage">
                <Image
                  // src={blogimage}
                  src={blog?.coverImage}
                  width={478}
                  height={253}
                  layout="responsive"
                  alt="Takmeel"
                />
              </div>
              <div className="LatestBlogDesc">
                {/* <div className="LtT1 nunito-text">OCTOBER 23, 2022 | REAL ESTATE</div>
                <div className="LtT2">Investments In Financial Future Ten Steps For Independence</div>
                <div className="LtT3">Lion View features a shared outdoor relaxation area with sun loungers, wet lounge, braai area, solar-heated saltwater infinity pool.</div>
                <div className="text-right">
                  <Link href="/" className='Link6 hover1'>Read More</Link>
                </div> */}

                <div className="LtT1 nunito-text" style={{ textTransform: 'uppercase' }}>{blog?.date} | {blog?.category}</div>
                <div className="LtT2">{blog?.heading}</div>
                <div className="LtT3">{blog?.subheading}</div>
                <div className="text-right">
                  <Link href={`/news-updates/${blog._id}`} className='Link6 hover1'>Read More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
