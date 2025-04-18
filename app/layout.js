import { Geist, Geist_Mono } from "next/font/google";
import { Nunito_Sans } from "next/font/google";
import Head from "next/head";

import "@/styles/bootstrap.css";
import "@/styles/slick-slider/slick/slick.css";
import "@/styles/slick-slider/slick/slick-theme.css";
import "@/styles/globals.css";
import "@/styles/responsive.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import FooterBottom from "@/components/footerBottom/footerBottom";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  display: "swap",
});



export const metadata = {
  title: "Takmeel",
  description: "Exceeding Expectations About Takmeel Discover Takmeel Real Estate Development, where your dream home awaits its grand unveiling. Welcome to Takmeel Real Estate Development L.L.C, where your dream home becomes a breathtaking reality. Established in 2017, we set out with a single goal: to design and build extraordinary residences and stunning apartments that transcend the ordinary,...",
  themeColor: "#1D1D1B",
  viewport: "width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0",
  applicationName: "Takmeel",
  manifest: "/manifest.json",
  other: {
    "msapplication-TileColor": "#1D1D1B",
    "msapplication-navbutton-color": "#1D1D1B",
  }
};



export default function RootLayout({ children }) {
  return (
    

    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${nunitoSans.variable}`}>
      
      <body>
        
        <Header />
        <main>{children}</main>
        <Footer />
        <FooterBottom/>
      </body>
    </html>
  );
}
