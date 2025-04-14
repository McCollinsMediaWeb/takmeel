import Image from "next/image";
import styles from "./page.module.css";
import FullScreenBanner from "../components/fullscreen-banner/fullScreenBanner";

export default function Home() {
  return (
    <div>
      <div>
        <FullScreenBanner backgroundImage="main1.jpg" text1="Now Unveiling"  text2="Takmeel Al Barari Properties" text3="Majan"/>
        <FullScreenBanner backgroundImage="main2.jpg" text1="Featured Properties"  text2="Divine Residencia" text3="Dubai Studio City"/>
        <FullScreenBanner backgroundImage="main3.jpg" text1="Featured Properties"  text2="Divine living" text3="Arjan"/>
        <FullScreenBanner backgroundImage="main4.jpg" text1="Featured Properties"  text2="Golf View Living Apartments" text3="Al Zorah, Ajman"/>
      </div>
    </div>
  );
}
