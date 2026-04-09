'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[70px]">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-primary">
            ATLAS
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              <li><Link href="/products" className="text-[15px] font-medium text-text-main hover:text-accent transition-colors">Products</Link></li>
              <li><Link href="/features" className="text-[15px] font-medium text-text-main hover:text-accent transition-colors">Features</Link></li>
              <li><Link href="/reviews" className="text-[15px] font-medium text-text-main hover:text-accent transition-colors">Reviews</Link></li>
              <li><Link href="/b2b" className="text-[15px] font-medium text-text-main hover:text-accent transition-colors">B2B</Link></li>
              <li><Link href="/about-us" className="text-[15px] font-medium text-text-main hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/contact-us" className="text-[15px] font-medium text-text-main hover:text-accent transition-colors">Contact Us</Link></li>
            </ul>
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-2">
            {/* Search */}
            <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-secondary transition-colors" aria-label="Search">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </button>

            {/* Cart */}
            <Link href="/cart" className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-secondary transition-colors relative" aria-label="Cart">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              <span className="absolute top-1 right-1 w-[18px] h-[18px] bg-accent text-white text-[11px] font-semibold rounded-full flex items-center justify-center">0</span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-[5px]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              <span className="w-6 h-0.5 bg-primary"></span>
              <span className="w-6 h-0.5 bg-primary"></span>
              <span className="w-6 h-0.5 bg-primary"></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col gap-4">
              <Link href="/products" className="text-lg font-medium text-text-main" onClick={() => setMobileMenuOpen(false)}>Products</Link>
              <Link href="/features" className="text-lg font-medium text-text-main" onClick={() => setMobileMenuOpen(false)}>Features</Link>
              <Link href="/reviews" className="text-lg font-medium text-text-main" onClick={() => setMobileMenuOpen(false)}>Reviews</Link>
              <Link href="/b2b" className="text-lg font-medium text-text-main" onClick={() => setMobileMenuOpen(false)}>B2B Wholesale</Link>
              <Link href="/about-us" className="text-lg font-medium text-text-main" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
              <Link href="/contact-us" className="text-lg font-medium text-text-main" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
