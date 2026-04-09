import Link from 'next/link';

const features = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/>
      </svg>
    ),
    title: '72-120 MPH',
    description: 'Up to 5x stronger than similar alternatives on the market. Tested for extreme weather conditions.',
    fullDescription: 'Our pergolas are engineered to withstand the harshest weather conditions. With wind resistance ratings from 72 to 120 MPH, you can rest assured that your investment is protected against storms and high winds.'
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="12" y1="1" x2="12" y2="23"></line>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    ),
    title: '8x Lower Price',
    description: 'Direct-to-consumer model eliminates middlemen. Premium quality without the premium price tag.',
    fullDescription: 'By selling directly to consumers, we eliminate the middleman markup that typically adds 200-300% to retail prices. This means you get the same premium quality at a fraction of the cost.'
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    ),
    title: '10-Year Warranty',
    description: 'Industry-leading warranty coverage. Built to last 30+ years with minimal maintenance.',
    fullDescription: 'We stand behind our products with a comprehensive 10-year warranty. Our pergolas are built to last 30+ years with minimal maintenance, so you can enjoy your outdoor space for decades to come.'
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    ),
    title: '4-Hour Assembly',
    description: 'DIY-friendly installation with clear instructions. Most customers complete setup in one afternoon.',
    fullDescription: 'Our pergolas are designed for easy DIY assembly. With clear step-by-step instructions and pre-drilled holes, most customers can complete installation in just 4 hours with 2-3 people.'
  },
];

const comparisonData = [
  { feature: 'Material', ATLAS: 'Premium Aluminum', Competitor: 'Steel or Wood' },
  { feature: 'Wind Resistance', ATLAS: '72-120 MPH', Competitor: '30-60 MPH' },
  { feature: 'Warranty', ATLAS: '10 Years', Competitor: '1-3 Years' },
  { feature: 'Assembly Time', ATLAS: '4 Hours', Competitor: '8-12 Hours' },
  { feature: 'Maintenance', ATLAS: 'Minimal', Competitor: 'High' },
  { feature: 'Price', ATLAS: '8x Lower', Competitor: 'Premium' },
];

export default function FeaturesPage() {
  return (
    <div className="py-12 lg:py-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <nav className="flex items-center gap-2 text-sm text-text-light">
          <Link href="/" className="hover:text-accent transition-colors">Home</Link>
          <span>/</span>
          <span className="text-text-main font-medium">Features</span>
        </nav>
      </div>

      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
            Features & Benefits
          </h1>
          <p className="text-xl text-text-light max-w-2xl mx-auto">
            Discover what makes ATLAS pergolas the best choice for your outdoor space.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-secondary rounded-xl p-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full text-accent shadow-md flex-shrink-0">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-primary mb-3">{feature.title}</h3>
                  <p className="text-text-light mb-4">{feature.description}</p>
                  <p className="text-text-light text-sm leading-relaxed">{feature.fullDescription}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Comparison Table */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            See the Difference
          </h2>
          <p className="text-xl text-text-light">
            Compare ATLAS pergolas with the competition
          </p>
        </div>

        <div className="bg-secondary rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-6 py-4 text-left font-semibold">Feature</th>
                  <th className="px-6 py-4 text-center font-semibold">ATLAS</th>
                  <th className="px-6 py-4 text-center font-semibold">Competitors</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="border-t border-gray-200">
                    <td className="px-6 py-4 font-medium">{row.feature}</td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center justify-center px-3 py-1 bg-accent text-white text-sm font-medium rounded-full">
                        {row.ATLAS}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-text-light">
                      {row.Competitor}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Material Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-secondary rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Premium Aluminum Construction
              </h2>
              <p className="text-text-light mb-6 leading-relaxed">
                Our pergolas are built with premium-grade aluminum, offering the perfect balance of strength, durability, and aesthetics.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                      <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Rust & Corrosion Resistant</h3>
                    <p className="text-text-light text-sm">Unlike steel, our aluminum won't rust or corrode, even in harsh coastal environments.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                      <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Lightweight & Strong</h3>
                    <p className="text-text-light text-sm">Aluminum is 1/3 the weight of steel but equally strong, making installation easy.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                      <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Powder-Coated Finish</h3>
                    <p className="text-text-light text-sm">Our premium powder coating provides a beautiful, durable finish that won't fade or peel.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="aspect-square bg-gray-200">
              <img 
                src="/images/hero-bg.jpg" 
                alt="Aluminum pergola detail" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary text-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Experience the ATLAS Difference?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Browse our collection of premium pergolas and transform your outdoor space today.
          </p>
          <Link 
            href="/products" 
            className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-semibold text-lg rounded-lg hover:bg-accent/90 transition-colors"
          >
            View Our Products
          </Link>
        </div>
      </div>
    </div>
  );
}
