
"use client";
import useMediaQuery from "../../hooks/useMediaQuery";
import Image from "next/image";
export default function Component1() {
    const isDesktop = useMediaQuery("(min-width: 960px)");
    return (

        <div>
            <div className="LandHeroBanner">
                {isDesktop && (
                    <Image
                        src="/landing1.jpg"
                        width={1440}
                        height={775}
                        alt="Takmeel"
                        priority
                        layout="responsive"
                    />
                )}
                {!isDesktop && (
                    <Image
                        src="/landing1mob.jpg"
                        width={549}
                        height={775}
                        alt="Takmeel"
                        priority
                        layout="responsive"
                    />
                )}
            </div>

        </div>
    );
}