'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="contact" className="bg-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="text-2xl font-bold">
              ATLAS
            </Link>
            <p className="mt-4 text-white/70 leading-relaxed">
              Redefining outdoor living with Scandinavian design and American quality. Transform your backyard into an oasis.
            </p>
            <div className="flex gap-3 mt-6">
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors" aria-label="Facebook">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors" aria-label="Instagram">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Shop</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-white/70 hover:text-white transition-colors">PRO+ Pergolas</Link></li>
              <li><Link href="/" className="text-white/70 hover:text-white transition-colors">Master+ Series</Link></li>
              <li><Link href="/" className="text-white/70 hover:text-white transition-colors">Accessories</Link></li>
              <li><Link href="/" className="text-white/70 hover:text-white transition-colors">LED Lighting</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Support</h3>
            <ul className="space-y-3">
              <li><Link href="/#contact" className="text-white/70 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/" className="text-white/70 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/" className="text-white/70 hover:text-white transition-colors">Installation Guide</Link></li>
              <li><Link href="/" className="text-white/70 hover:text-white transition-colors">Warranty</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Join the ATLAS Family</h3>
            <p className="text-white/70 mb-4">Subscribe for exclusive offers and outdoor living tips.</p>
            <form className="flex gap-2" onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing!'); }}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:border-accent"
                required
              />
              <button 
                type="submit" 
                className="px-5 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/50">&copy; 2024 ATLAS. All rights reserved.</p>
          <div className="flex gap-4">
            <svg height="24" viewBox="0 0 48 24" className="text-white/50"><path fill="currentColor" d="M45 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.3 3 3 3h42c1.7 0 3-1.3 3-3V3c0-1.7-1.3-3-3-3z" opacity=".3"/><path fill="#fff" d="M45 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h42"/><path fill="#1434CB" d="M18.7 16.3l1.8-11h2.8l-1.8 11h-2.8zm11.1-7.3c-.5-.2-1-.3-1.5-.3-1.7 0-2.8.9-2.8 2.1 0 .7.6 1.2 1.4 1.5.6.2.8.4.8.6 0 .3-.3.5-.8.5-.6 0-1.3-.2-1.8-.5l-.3-.2-.3 1.8c.5.2 1.3.4 2.2.4 1.8 0 3-.9 3-2.2 0-.7-.5-1.2-1.4-1.5-.5-.2-.9-.4-.9-.6 0-.2.2-.4.7-.4.5 0 1 .2 1.3.3l.2.1.3-1.7-.1.1zm4.7-.7c-.7 0-1.3.2-1.7 1l-.1.1-.2-1h-2.4l-.1.1-.2 1-.1.1h1.8l-1.2 7.3h2.5l.6-3.7c.2-1.2.9-1.9 1.8-1.9.5 0 .9.2 1.1.5l.1.1.9-2.2-.1-.1c-.4-.3-.9-.4-1.5-.4l.3-.1zm-10.3.1h-2.4l-.1.1-.2 1-.1.1h1.8l-.6 3.8h2.5l.8-4.8-.2.1v.7zm12.8 0l-.1.1-.1.5-.1-.1c-.3-.4-.8-.6-1.4-.6-1.4 0-2.6 1.2-2.6 2.8 0 1.2.7 1.9 1.9 1.9.6 0 1-.2 1.4-.6l-.1.6v.1h2.3l.1-.1 1.2-7.2-2.4.1v2.5zm.4 1.9c0 .6-.4 1.1-1 1.1-.4 0-.7-.2-.7-.7 0-.6.4-1.1 1-1.1.4 0 .7.3.7.7zM15 5.3h-2.4l-.1.1-2.4 5.7-.1.1-.1-.1-1-5.7-.1-.1H6.3l-.1.1-.2 1-.1.1h1.4L5.8 16.3h2.6l.1-.1 1.6-4 .1-.1.1.1 1 4 .1.1h2.6l.1-.1-1.8-7.3h1.4l.2-1.1-.1-.6h-.7z"/></svg>
          </div>
        </div>
      </div>
    </footer>
  );
}
