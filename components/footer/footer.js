'use client'; // optional if using interactivity (like menus)

import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';


export default function Footer() {
  const t = useTranslations('Footer');
  const locale = useLocale();

  return (
    <footer className='pd-common bg1'>
      <div className='container'>
        <div className='text-center container'>
          <img className='FooterLogo' src="/footerlogo.png" />
          <div className='FtrT1 text-uppercase'>
            {/* Urban Living, Reimagined by Nature */}&nbsp;
          </div>
        </div>
        <div className='FtrRow'>
          <div className='row' style={{ textAlign: locale === 'ar' ? 'right' : undefined }} >
            <div className='col-md-4'>
              <div className='contactDetailBox'>
                <div className='CRow whatsapp'>
                  <a target="_blank" style={{ direction: 'ltr', unicodeBidi: 'bidi-override' }} href='https://wa.me/971523749615?text=Hi%20Takmeel%2C%0AI%20would%20like%20to%20know%20more%20about%20your%20properties' title='Whatsapp Us'>+971 523749615</a>
                </div>
                <div className='CRow call'>
                  <a href='tel:+971 45531916' style={{ direction: 'ltr', unicodeBidi: 'bidi-override' }} title='Call Us'>+971 45531916</a>&nbsp;,&nbsp;
                  <a href='tel:+971 45655099' style={{ direction: 'ltr', unicodeBidi: 'bidi-override' }} title='Call Us'>+971 45655099</a>
                </div>
                <div className='CRow email'>
                  <a href='mailto:info@takmeeluae.com' style={{ direction: 'ltr', unicodeBidi: 'bidi-override' }} title='Call Us'>info@takmeeluae.com</a>
                </div>
                <div className='CRow location'>
                  <a href='https://maps.app.goo.gl/UtBJrv8Qw1DjwXsi9' target='_blank' title='Call Us'>{t('info.address')}</a>
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

    </footer>
  );
}