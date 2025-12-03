import { Geist, Geist_Mono, Nunito_Sans, Cairo } from "next/font/google";
import { headers } from "next/headers";
import Header from "@/components/header/header";
import { GlobalDataProvider } from "@/context/GlobalDataContext";
import "@/styles/bootstrap.css";
import "@/styles/globals.css";
import "@/styles/responsive.css";
import "@/styles/slick-slider/slick/slick-theme.css";
import "@/styles/slick-slider/slick/slick.css";
import Script from "next/script";
import { getLocale } from 'next-intl/server';
import { NextIntlClientProvider } from "next-intl";


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

const cairo = Cairo({
  variable: "--font-cairo",
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



export default async function RootLayout({ children }) {

  const locale = await getLocale();
  const pathname = headers().get("x-pathname") || "";
  const showHeader = pathname !== "/divine-elements-page";

  return (


    <html lang={locale}
      dir={locale === 'ar' ? 'rtl' : 'ltr'}
      className={`${geistSans.variable} ${geistMono.variable} ${nunitoSans.variable} ${cairo.variable}`}>
      <head>
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-TPGZG3YCQ7"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-TPGZG3YCQ7');
      `,
          }}
        />
        {/* Meta Pixel Code */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1615923146464008');
              fbq('track', 'PageView');
            `,
          }}
        />
      </head>
      <body>
        {/* Meta Pixel <noscript> fallback */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1615923146464008&ev=PageView&noscript=1"
          />
        </noscript>
        <div className="vibe-stack">
          <GlobalDataProvider>
            <NextIntlClientProvider>
              {/* <Script id="zsiq-init" strategy="beforeInteractive">
                {`
        window.$zoho = window.$zoho || {};
        $zoho.salesiq = $zoho.salesiq || { ready: function() {} };
      `}
              </Script>

              <Script
                id="zsiqscript"
                src="https://salesiq.zohopublic.com/widget?wc=siq56336b532438deb7cfdbff018b021175034a777a0a32d17bd7c230a43c106fbf"
                strategy="lazyOnload"
                defer
                dangerouslySetInnerHTML={{
                  __html: `
      (function(){
        let attempts = 0;
        const checkZoho = setInterval(function(){
          if (window.$zoho && window.$zoho.salesiq && window.$zoho.salesiq.widget && typeof window.$zoho.salesiq.widget.open === "function") {
            clearInterval(checkZoho);
            window.$zoho.salesiq.widget.open();
          }
          attempts++;
          if (attempts > 20) clearInterval(checkZoho);
        }, 500);
      })();
    `,
                }}
              /> */}

              {/* <Script
                id="zsiq-init"
                strategy="beforeInteractive"
                dangerouslySetInnerHTML={{
                  __html: `
      window.$zoho = window.$zoho || {};
      $zoho.salesiq = $zoho.salesiq || {
        ready: function() {
          // Open chat as soon as it's ready
          if ($zoho.salesiq.widget && typeof $zoho.salesiq.widget.open === "function") {
            $zoho.salesiq.widget.open();
          }
        }
      };
    `,
                }}
              />

              <Script
                id="zsiqscript"
                src="https://salesiq.zohopublic.com/widget?wc=siq56336b532438deb7cfdbff018b021175034a777a0a32d17bd7c230a43c106fbf"
                strategy="lazyOnload"
                defer
              /> */}


              <Script
                id="zsiq-init"
                strategy="beforeInteractive"
                dangerouslySetInnerHTML={{
                  __html: `
      // Utility: Clear all Zoho chat-related localStorage/sessionStorage items
      function clearZohoStorage() {
        try {
          for (const key in localStorage) {
            if (key.startsWith('ZSIQ_') || key.startsWith('siq_')) {
              localStorage.removeItem(key);
            }
          }
          for (const key in sessionStorage) {
            if (key.startsWith('ZSIQ_') || key.startsWith('siq_')) {
              sessionStorage.removeItem(key);
            }
          }
        } catch (err) {
          console.warn("Zoho storage clear failed:", err);
        }
      }

      // Run immediately (before widget loads)
      clearZohoStorage();

      window.$zoho = window.$zoho || {};
      $zoho.salesiq = $zoho.salesiq || {
        ready: function() {
          try {
            clearZohoStorage();
            // Force open chat after ensuring session is cleared
            setTimeout(() => {
              if ($zoho.salesiq.widget && typeof $zoho.salesiq.widget.open === "function") {
                $zoho.salesiq.widget.open();
              }
            }, 1500);
          } catch (err) {
            console.error("Zoho SalesIQ auto open failed:", err);
          }
        }
      };
    `,
                }}
              />

              <Script
                id="zsiqscript"
                src="https://salesiq.zohopublic.com/widget?wc=siq56336b532438deb7cfdbff018b021175034a777a0a32d17bd7c230a43c106fbf"
                strategy="lazyOnload"
                defer
              />



              {/* <Header /> */}
              {showHeader && <Header />}
              <main>{children}</main>
              {/* <Footer /> */}
              {/* <FooterBottom /> */}
            </NextIntlClientProvider>
          </GlobalDataProvider>
        </div>

        <Script
          src="https://crm.zoho.com/crm/javascript/zcga.js"
          strategy="afterInteractive"
        />


        <Script
          id="gallabox-whatsapp-widget"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function (w, d, s, u) {
              w.gbwawc = {
                url: u,
                options: {
                  waId: "971581389773",
                  siteName: "Takmeel Developments",
                  siteTag: "Usually replies within 10 minutes",
                  siteLogo: "https://files.gallabox.com/68b577d0420ef0daa15c42d9/886e4805-59c4-4b18-a9ad-e25ff166d802-Untitleddesign.png",
                  widgetPosition: "LEFT",
                  welcomeMessage: "Welcome to Takmeel Development",
                  brandColor: "#25D366",
                  customQuestion: "Hi, I would like to know more about you? ",
                  startChatBtnTxt: "Send a Message",
                  version: "v2",
                  widgetPositionMarginX: 0,
                  widgetPositionMarginY: 0,
                },
              };
              var h = d.getElementsByTagName(s)[0],
              j = d.createElement(s);
              j.async = true;
              j.src = u + "/whatsapp-widget.min.js?_=" + Date.now();
              h.parentNode.insertBefore(j, h);
            })(window, document, "script", "https://waw.gallabox.com");
          `,
          }}
        />
      </body>
    </html>
  );
}
