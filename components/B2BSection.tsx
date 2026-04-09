'use client';

import ContactForm from './ContactForm';

export default function B2BSection() {
  return (
    <section className="py-20 lg:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent text-sm font-semibold uppercase tracking-wider rounded-lg mb-4">
              B2B Wholesale
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Are you a Contractor or Business?
            </h2>
            <p className="text-lg text-text-light mb-8">
              Get special wholesale pricing for bulk orders. We supply to 700+ contractors, landscapers, and retailers across America.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2196f3" strokeWidth="2">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-primary">Volume Discounts</h3>
                  <p className="text-text-light text-sm">Save up to 40% on orders of 10+ units</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2196f3" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-primary">Priority Shipping</h3>
                  <p className="text-text-light text-sm">Dedicated logistics for bulk orders</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2196f3" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-primary">Dedicated Support</h3>
                  <p className="text-text-light text-sm">Personal account manager for large orders</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-primary mb-6">Request Wholesale Quote</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
