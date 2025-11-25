'use client'; // optional if using interactivity (like menus)

import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import Script from 'next/script';


export default function Footer() {
  const t = useTranslations('Footer');
  const locale = useLocale();

  return (
    <footer className='pd-common bg1' style={{ padding: '70px 0 20px 0' }}>
      <div className='container'>
        <div className='text-center container'>
          <img className='FooterLogo' src="/footerlogonew.png" />
          <div className='FtrT1 text-uppercase'>
            {/* Urban Living, Reimagined by Nature */}&nbsp;
          </div>
        </div>
        <div className='FtrRow'>
          <div className='row' style={{ textAlign: locale === 'ar' ? 'right' : undefined }} >
            <div className='col-md-4'>
              <div className='contactDetailBox'>
                <div className='LinkTitle'>{t('info.option1')}</div>
                <div className='CRow call'>
                  <a href='tel:08008335' style={{ direction: 'ltr', unicodeBidi: 'bidi-override' }} title='Call Us'>0800 8335</a>
                </div>
                <div className='CRow email'>
                  <a href='mailto:agency@takmeeldevelopment.com' style={{ direction: 'ltr', unicodeBidi: 'bidi-override' }} title='Email Us'>agency@takmeeldevelopment.com</a>
                </div>

                <div className='LinkTitle'>{t('info.option2')}</div>
                <div className='CRow call'>
                  <a href='tel:045531916' style={{ direction: 'ltr', unicodeBidi: 'bidi-override' }} title='Call Us'>045 531916</a>{" / "}
                  <a href='tel:045655099' style={{ direction: 'ltr', unicodeBidi: 'bidi-override' }} title='Call Us'>045 655099</a>
                </div>
                <div className='CRow email'>
                  <a href='mailto:info@takmeeldevelopment.com' style={{ direction: 'ltr', unicodeBidi: 'bidi-override' }} title='Email Us'>info@takmeeldevelopment.com</a>
                </div>

                <div className='CRow whatsapp'>
                  <a target="_blank" style={{ direction: 'ltr', unicodeBidi: 'bidi-override' }} href='https://wa.me/+971581389773?text=Hi%20Takmeel%2C%0AI%20would%20like%20to%20know%20more%20about%20your%20properties' title='Whatsapp Us'>+971 58 138 9773</a>
                </div>
                {/* <div className='CRow call'>
                  <a href='tel:08008335' style={{ direction: 'ltr', unicodeBidi: 'bidi-override' }} title='Call Us'>0800-8335</a>
                </div>
                <div className='CRow email'>
                  <a href='mailto:info@takmeeldevelopment.com' style={{ direction: 'ltr', unicodeBidi: 'bidi-override' }} title='Call Us'>info@takmeeldevelopment.com</a>
                </div> */}
                <div className='CRow location'>
                  <a href='https://maps.app.goo.gl/UtBJrv8Qw1DjwXsi9' target='_blank' title='Locate Us'>{t('info.address')}</a>
                </div>
              </div>
            </div>
            <div className='col-md-2'>
              <div className='LinkBox'>
                <div className='LinkTitle'>{t('quickLinks.title')}</div>
                <Link className='FtrLnk1' href="/">{t('quickLinks.option1')}</Link>
                <Link className='FtrLnk1' href="/about-us">{t('quickLinks.option2')}</Link>
                <Link className='FtrLnk1' href="/projects">{t('quickLinks.option3')}</Link>
                <Link className='FtrLnk1' href="/news-updates">{t('quickLinks.option4')}</Link>
              </div>
            </div>
            <div className='col-md-2'>
              <div className='LinkBox'>
                <div className='LinkTitle'>{t('help.title')}</div>
                <Link className='FtrLnk1' href="/contact-us">{t('help.option1')}</Link>
                <Link className='FtrLnk1' href="/faqs">{t('help.option2')}</Link>
                <Link className='FtrLnk1' href="/privacy-policy">{t('help.option3')}</Link>
                <Link className='FtrLnk1' href="/terms-of-use">{t('help.option4')}</Link>
              </div>
            </div>
            <div className='col-md-4 NewsletterBox'>
              <div className='LinkBox'>
                <div className='LinkTitle'>{t('newsLetter.title')}</div>
                <div className='NewsletterBox'>
                  <input type="text" placeholder={t('newsLetter.placeholder')} />
                  <button>{t('newsLetter.submitText')}</button>
                </div>
                <div className='NewsTxt'>{t('newsLetter.content')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='FixedCallBackLayout d-only'>

        <a href='tel:08008335'>
          <span className='IconF ca'>&nbsp;</span>
        </a>

        <a style={{visibility: "hidden"}} href='https://wa.me/+971581389773?text=Hi%20Takmeel%2C%0AI%20would%20like%20to%20know%20more%20about%20your%20properties'>
          <span className='IconF wa'>&nbsp;</span>
        </a>

      </div>

      {/* <Script
        id="gallabox-whatsapp-widget"
        strategy="lazyOnload"
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
      /> */}
    </footer>
  );
}