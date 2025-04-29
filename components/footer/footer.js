'use client'; // optional if using interactivity (like menus)

import Link from 'next/link';


export default function Footer() {
  return (
    <footer className='pd-common bg1'>
      <div className='container'>
        <div className='text-center container'>
            <img className='FooterLogo' src="/footerlogo.png"/>
            <div className='FtrT1 text-uppercase'>Urban Living, Reimagined by Nature</div>
        </div>
        <div className='FtrRow'>
          <div className='row'>
            <div className='col-md-4'>
              <div className='contactDetailBox'>
                <div className='CRow whatsapp'>
                  <a href='#' title='Whatsapp Us'>+971 523749615</a>
                </div>
                <div className='CRow call'>
                  <a href='#' title='Call Us'>+971 45531916</a>&nbsp;,&nbsp;
                  <a href='#' title='Call Us'>+971 45655099</a>
                </div>
                <div className='CRow email'>
                  <a href='#' title='Call Us'>info@takmeeluae.com</a>
                </div>
                <div className='CRow location'>
                  <a href='#' title='Call Us'>Office no 706, Building no 8, Bay Square Business bay Dubai, UAE</a>
                </div>
              </div>
            </div>
            <div className='col-md-2'>
              <div className='LinkBox'>
                <div className='LinkTitle'>Quick Links</div>
                <Link className='FtrLnk1' href="/">Home</Link>
                <Link className='FtrLnk1' href="/about-us">About</Link>
                <Link className='FtrLnk1' href="/projects">Projects</Link>
                <Link className='FtrLnk1' href="/news-updates">News</Link>
              </div>
            </div>
            <div className='col-md-2'>
              <div className='LinkBox'>
                <div className='LinkTitle'>Help</div>
                <Link className='FtrLnk1' href="/contact-us">Contact Us</Link>
                <Link className='FtrLnk1' href="/faqs">FAQs</Link>
                <Link className='FtrLnk1' href="/privacy-policy">Privacy Policies</Link>
                <Link className='FtrLnk1' href="/terms-of-use">Terms of use</Link>
              </div>
            </div>
            <div className='col-md-4 NewsletterBox'>
              <div className='LinkBox'>
                  <div className='LinkTitle'>Stay In The Know</div>
                  <div className='NewsletterBox'>
                    <input type="text" placeholder='Email Address'/>
                    <button>Submit</button>
                  </div>
                  <div className='NewsTxt'>By signing up I want to hear about new updates and masterpieces
                  and agree with the data protection policy of Takmeel.</div>
                </div>
            </div>
          </div>
        </div>
      </div>
     
    </footer>
  );
}