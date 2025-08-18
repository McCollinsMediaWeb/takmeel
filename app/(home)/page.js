
// import FullpageWrapper from "@/components/Animations/FullPageScroll";

export const metadata = {
  title: "Top Real Estate Developers in UAE | Takmeel Development",
  description:
    "Discover premium residential and commercial real estate with one of the leading property developers in UAE. Explore luxury homes, smart investments, and innovative housing projects with Takmeel Development.",
};

import HomePageItem from "@/components/Home/HomePageItem";
import MetaInjector from "@/components/Meta/MetaInjector";
import { getMetaTags } from "@/lib/getMetaTags";

export default async function Home() {
  const metaTags = await getMetaTags("/");

  if (metaTags.length === 0 || !metaTags[0].metaContent) {
    console.warn("No meta tags found, using default");
  }

  return (
    <>
      {/* {metaTags.length > 0 && metaTags[0].metaContent && (
        <MetaInjector metaContent={metaTags[0].metaContent} />
      )} */}
      <HomePageItem />
    </>
  );
}
