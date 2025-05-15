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
import Script from "next/script";
import { GlobalDataProvider } from "@/context/GlobalDataContext";


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



// export const metadata = {
//   title: "Takmeel",
//   description: "Exceeding Expectations About Takmeel Discover Takmeel Real Estate Development, where your dream home awaits its grand unveiling. Welcome to Takmeel Real Estate Development L.L.C, where your dream home becomes a breathtaking reality. Established in 2017, we set out with a single goal: to design and build extraordinary residences and stunning apartments that transcend the ordinary,...",
//   themeColor: "#1D1D1B",
//   viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
//   applicationName: "Takmeel",
//   manifest: "/manifest.json",
//   other: {
//     "msapplication-TileColor": "#1D1D1B",
//     "msapplication-navbutton-color": "#1D1D1B",
//   }
// };



export default function RootLayout({ children }) {
  return (


    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${nunitoSans.variable}`}>

      <body>
        <div className="vibe-stack">
          <GlobalDataProvider>
            <Script
              id="zsiq-init"
              strategy="beforeInteractive"
            >
              {`
          window.$zoho = window.$zoho || {};
          $zoho.salesiq = $zoho.salesiq || { ready: function() {} };
        `}
            </Script>

            <Script
              id="zsiqscript"
              src="https://salesiq.zohopublic.in/widget?wc=siqd42e964546372063eb47c76bbf42497379120a2771308eb2d1ca6165301d5e33"
              strategy="lazyOnload"
              defer
            />

            <Header />
            <main>{children}</main>
            {/* <Footer /> */}
            {/* <FooterBottom /> */}

          </GlobalDataProvider>
        </div>
      </body>
    </html>
  );
}
