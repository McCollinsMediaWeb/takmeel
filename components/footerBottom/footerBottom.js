'use client'; // optional if using interactivity (like menus)

import Link from 'next/link';

export default function FooterBottom() {
  return (
    <div className='FooterBottom'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-8'>
                © Takmeel Real Estate Development L.L.C 2025. All Rights Reserved. &nbsp;<a href='https://www.mccollinsmedia.com/' target='_blank'>Designed & Developed By Mccollins Media</a>
                </div>
                <div className='col-md-4'>
                    <div className='socialMediaLinks'>
                        <div className='socialMediaLinksFlex'>
                            <a href='#' target='_blank'><span className='ScIcon facebook'>&nbsp;</span></a>
                            <a href='#' target='_blank'><span className='ScIcon instagram'>&nbsp;</span></a>
                            <a href='#' target='_blank'><span className='ScIcon tiktok'>&nbsp;</span></a>
                            <a href='#' target='_blank'><span className='ScIcon youtube'>&nbsp;</span></a>
                            <a href='#' target='_blank'><span className='ScIcon x'>&nbsp;</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}