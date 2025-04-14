'use client'; // optional if using interactivity (like menus)

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='pd-common bg1'>
      <div className='container'>
        <div className='text-center'>
            <img className='FooterLogo' src="footerlogo.png"/>
            <div className='FtrT1 text-uppercase'>Urban Living, Reimagined by Nature</div>
        </div>
      </div>
    </footer>
  );
}