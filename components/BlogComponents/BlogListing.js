'use client'; // optional if using interactivity (like menus)
import Image from "next/image";
import Link from 'next/link';
import { motion } from "framer-motion";
import { useGlobalData } from "@/context/GlobalDataContext";

import blogimage from "../../public/blmain.jpg";
import b1 from "../../public/b1.jpg";
import b2 from "../../public/b2.jpg";
import b3 from "../../public/b3.jpg";
import b4 from "../../public/b4.jpg";
import b5 from "../../public/b5.jpg";
import b6 from "../../public/b6.jpg";

export default function BlogListing({ blogs }) {
    const { loadMore, loading, hasMore } = useGlobalData();

    return (
        <div className="BlogListingWrap pd-common bg2">
            <div className="blogLists">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    viewport={{ once: true, amount: 0.5 }}
                                >
                                    <div className="BlogItem FtrItem">
                                        <div className="LatestBlogImage position-relative">
                                            <Image
                                                src="/t2.jpg"
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
                                            <div className="LtT1 nunito-text" style={{ textTransform: 'uppercase' }}>Featured Article</div>
                                            <div className="LtT2">Understanding 2024 — What to expect in 2025: Demystifying Dubai’s off-plan real estate boom</div>
                                            <div className="LtT3 truncate-3-lines">Few markets have captured the global investor’s imagination quite like Dubai’s off-plan real estate sector. In 2024, this segment didn’t just grow — it evolved. The year was marked not by the kind of speculative frenzy that once defined the emirate’s real estate landscape, but by measured, confident strides rooted in transparency, smart planning, and a growing maturity in both buyer behavior and developer offerings.</div>
                                            <div className="text-right">
                                                <a target="_blank" href="https://www.khaleejtimes.com/business-technology-review/understanding-2024-what-to-expect-in-2025-demystifying-dubais-off-plan-real-estate-boom?_refresh=true" className='Link6 hover1'>Read in Khaleej Times</a>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                        </div>
                        {blogs?.map((blog) => (
                            <div className="col-md-4" key={blog?._id}>
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    viewport={{ once: true, amount: 0.5 }}
                                >
                                    <div className="BlogItem">
                                        <div className="LatestBlogImage">
                                            <Image
                                                src={blog?.coverImage}
                                                width={364}
                                                height={253}
                                                layout="responsive"
                                                alt="Takmeel"
                                            />
                                        </div>
                                        <div className="LatestBlogDesc">
                                            <div className="LtT1 nunito-text" style={{ textTransform: 'uppercase' }}>{blog?.date} | {blog?.category}</div>
                                            <div className="LtT2">{blog?.heading}</div>
                                            <div className="LtT3 truncate-3-lines">{blog?.subheading}</div>
                                            <div className="text-right">
                                                <Link href={`/news-updates/${blog._id}`} className='Link6 hover1'>Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                        {/* <div className="col-md-4">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                viewport={{ once: true, amount: 0.5 }}
                            >
                                <div className="BlogItem">
                                    <div className="LatestBlogImage">
                                        <Image
                                            src={b1}
                                            width={364}
                                            height={253}
                                            layout="responsive"
                                            alt="Takmeel"
                                        />
                                    </div>
                                    <div className="LatestBlogDesc">
                                        <div className="LtT1 nunito-text">OCTOBER 23, 2022 | REAL ESTATE</div>
                                        <div className="LtT2">Investments In Financial Future Ten Steps For Independence</div>
                                        <div className="LtT3">Lion View features a shared outdoor relaxation area with sun loungers, wet lounge, braai area, solar-heated saltwater infinity pool.</div>
                                        <div className="text-right">
                                            <Link href="/" className='Link6 hover1'>Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                        <div className="col-md-4">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                viewport={{ once: true, amount: 0.5 }}
                            >
                                <div className="BlogItem">
                                    <div className="LatestBlogImage">
                                        <Image
                                            src={b2}
                                            width={364}
                                            height={253}
                                            layout="responsive"
                                            alt="Takmeel"
                                        />
                                    </div>
                                    <div className="LatestBlogDesc">
                                        <div className="LtT1 nunito-text">OCTOBER 23, 2022 | REAL ESTATE</div>
                                        <div className="LtT2">Investments In Financial Future Ten Steps For Independence</div>
                                        <div className="LtT3">Lion View features a shared outdoor relaxation area with sun loungers, wet lounge, braai area, solar-heated saltwater infinity pool.</div>
                                        <div className="text-right">
                                            <Link href="/" className='Link6 hover1'>Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                        <div className="col-md-4">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                viewport={{ once: true, amount: 0.5 }}
                            >
                                <div className="BlogItem">
                                    <div className="LatestBlogImage">
                                        <Image
                                            src={b3}
                                            width={364}
                                            height={253}
                                            layout="responsive"
                                            alt="Takmeel"
                                        />
                                    </div>
                                    <div className="LatestBlogDesc">
                                        <div className="LtT1 nunito-text">OCTOBER 23, 2022 | REAL ESTATE</div>
                                        <div className="LtT2">Investments In Financial Future Ten Steps For Independence</div>
                                        <div className="LtT3">Lion View features a shared outdoor relaxation area with sun loungers, wet lounge, braai area, solar-heated saltwater infinity pool.</div>
                                        <div className="text-right">
                                            <Link href="/" className='Link6 hover1'>Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                        <div className="col-md-4">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                viewport={{ once: true, amount: 0.5 }}
                            >
                                <div className="BlogItem">
                                    <div className="LatestBlogImage">
                                        <Image
                                            src={b4}
                                            width={364}
                                            height={253}
                                            layout="responsive"
                                            alt="Takmeel"
                                        />
                                    </div>
                                    <div className="LatestBlogDesc">
                                        <div className="LtT1 nunito-text">OCTOBER 23, 2022 | REAL ESTATE</div>
                                        <div className="LtT2">Investments In Financial Future Ten Steps For Independence</div>
                                        <div className="LtT3">Lion View features a shared outdoor relaxation area with sun loungers, wet lounge, braai area, solar-heated saltwater infinity pool.</div>
                                        <div className="text-right">
                                            <Link href="/" className='Link6 hover1'>Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                        <div className="col-md-4">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                viewport={{ once: true, amount: 0.5 }}
                            >
                                <div className="BlogItem">
                                    <div className="LatestBlogImage">
                                        <Image
                                            src={b5}
                                            width={364}
                                            height={253}
                                            layout="responsive"
                                            alt="Takmeel"
                                        />
                                    </div>
                                    <div className="LatestBlogDesc">
                                        <div className="LtT1 nunito-text">OCTOBER 23, 2022 | REAL ESTATE</div>
                                        <div className="LtT2">Investments In Financial Future Ten Steps For Independence</div>
                                        <div className="LtT3">Lion View features a shared outdoor relaxation area with sun loungers, wet lounge, braai area, solar-heated saltwater infinity pool.</div>
                                        <div className="text-right">
                                            <Link href="/" className='Link6 hover1'>Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                        <div className="col-md-4">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                viewport={{ once: true, amount: 0.5 }}
                            >
                                <div className="BlogItem">
                                    <div className="LatestBlogImage">
                                        <Image
                                            src={b6}
                                            width={364}
                                            height={253}
                                            layout="responsive"
                                            alt="Takmeel"
                                        />
                                    </div>
                                    <div className="LatestBlogDesc">
                                        <div className="LtT1 nunito-text">OCTOBER 23, 2022 | REAL ESTATE</div>
                                        <div className="LtT2">Investments In Financial Future Ten Steps For Independence</div>
                                        <div className="LtT3">Lion View features a shared outdoor relaxation area with sun loungers, wet lounge, braai area, solar-heated saltwater infinity pool.</div>
                                        <div className="text-right">
                                            <Link href="/" className='Link6 hover1'>Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div> */}
                    </div>
                </div>
            </div>
            {/* <div className="BlogViewAllBox text-center">
                <div className="ViewAll hover1">View More</div>
            </div> */}

            {hasMore && (
                <div className="BlogViewAllBox text-center">
                    <button
                        className="ViewAll hover1"
                        onClick={loadMore}
                        disabled={loading}
                    >
                        {loading ? "Loading..." : "View More"}
                    </button>
                </div>
            )}

        </div>
    );
}
