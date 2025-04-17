import Image from "next/image";
import Link from 'next/link';
import LatestBlog from "@/components/BlogComponents/LatestBlogs";
import BlogListing from "@/components/BlogComponents/BlogListing";

import blogimage from "../../public/blmain.jpg"
export default function NewsAndUpdates() {
  return (
    <section className="BlogPostWrap">
      <LatestBlog/>
      <BlogListing/>
     
    </section>
  );
}
