import Hero from '@/components/Hero';
import Features from '@/components/Features';
import ProductGrid from '@/components/ProductGrid';
import Testimonials from '@/components/Testimonials';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* Quick Links */}
      <section className="py-12 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/products" className="bg-white rounded-xl p-6 text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2196f3" strokeWidth="2">
                  <path d="M20 7h-3V3H7v4H4v13h16V7zM9 5h6v2H9V5zM6 18v-5h12v5H6z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-primary mb-1">Browse Products</h3>
              <p className="text-text-light text-sm">View our complete collection</p>
            </Link>
            
            <Link href="/features" className="bg-white rounded-xl p-6 text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2196f3" strokeWidth="2">
                  <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/>
                </svg>
              </div>
              <h3 className="font-semibold text-primary mb-1">Features</h3>
              <p className="text-text-light text-sm">See what makes us different</p>
            </Link>
            
            <Link href="/reviews" className="bg-white rounded-xl p-6 text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2196f3" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10 9 9 9 8 9"/>
                </svg>
              </div>
              <h3 className="font-semibold text-primary mb-1">Customer Reviews</h3>
              <p className="text-text-light text-sm">See what our customers say</p>
            </Link>
            
            <Link href="/b2b" className="bg-white rounded-xl p-6 text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2196f3" strokeWidth="2">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
              <h3 className="font-semibold text-primary mb-1">B2B Wholesale</h3>
              <p className="text-text-light text-sm">For contractors & businesses</p>
            </Link>
          </div>
        </div>
      </section>
      
      <Features />
      <ProductGrid />
      <Testimonials />
      
      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-primary text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Transform Your Outdoor Space?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Join over 10,000 happy customers who have elevated their outdoor living with ATLAS pergolas.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/products" 
              className="px-8 py-4 bg-accent text-white font-semibold text-lg rounded-lg hover:bg-accent/90 transition-colors"
            >
              Shop Now
            </Link>
            <Link 
              href="/contact-us" 
              className="px-8 py-4 border-2 border-white text-white font-semibold text-lg rounded-lg hover:bg-white hover:text-primary transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
