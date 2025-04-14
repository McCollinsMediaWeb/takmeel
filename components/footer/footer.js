'use client'; // optional if using interactivity (like menus)

import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ padding: '1rem', background: '#000' }}>
        <h1>Footer</h1>
      <nav>
        <Link href="/" style={{ marginRight: 10 }}>Home</Link>
        <Link href="/about-us" style={{ marginRight: 10 }}>About Us</Link>
        <Link href="/projects" style={{ marginRight: 10 }}>Projects</Link>
        <Link href="/news-updates" style={{ marginRight: 10 }}>News</Link>
        <Link href="/contact-us" style={{ marginRight: 10 }}>Contact</Link>
        <Link href="/faq" style={{ marginRight: 10 }}>FAQ</Link>
        <Link href="/privacy-policy" style={{ marginRight: 10 }}>Privacy</Link>
        <Link href="/terms-of-use">Terms</Link>
      </nav>
    </footer>
  );
}