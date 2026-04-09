import { getProduct, formatPrice } from '@/lib/shopify';
import { notFound } from 'next/navigation';

interface ProductPageProps {
  params: {
    handle: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct(params.handle);

  if (!product) {
    notFound();
  }

  return (
    <div className="py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-secondary">
              <img 
                src={product.image} 
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((img, index) => (
                <div key={index} className="aspect-square rounded-lg overflow-hidden bg-secondary cursor-pointer hover:opacity-80 transition-opacity">
                  <img src={img} alt={`${product.title} ${index + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              {product.title}
            </h1>
            
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl font-bold text-primary">
                {formatPrice(product.price)}
              </span>
              {product.compareAtPrice > product.price && (
                <span className="text-xl text-text-light line-through">
                  {formatPrice(product.compareAtPrice)}
                </span>
              )}
              {product.compareAtPrice > product.price && (
                <span className="px-3 py-1 bg-red-100 text-red-700 text-sm font-semibold rounded-full">
                  Save {formatPrice(product.compareAtPrice - product.price)}
                </span>
              )}
            </div>

            <p className="text-text-light text-lg mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Variants */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Color
              </label>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    className="px-4 py-2 border-2 border-gray-300 rounded-lg hover:border-accent focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                  >
                    {variant.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Quantity
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg w-fit">
                <button className="px-4 py-3 hover:bg-secondary transition-colors">-</button>
                <input 
                  type="number" 
                  defaultValue={1} 
                  min={1}
                  className="w-16 text-center py-3 border-x border-gray-300 focus:outline-none"
                />
                <button className="px-4 py-3 hover:bg-secondary transition-colors">+</button>
              </div>
            </div>

            {/* Add to Cart */}
            <button 
              className="w-full py-4 bg-primary text-white font-semibold text-lg rounded-lg hover:bg-accent transition-colors mb-6"
              onClick={() => alert(`Added ${product.title} to cart!`)}
            >
              Add to Cart - {formatPrice(product.price)}
            </button>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-2 text-sm text-text-light">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                10-Year Warranty
              </div>
              <div className="flex items-center gap-2 text-sm text-text-light">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
                Free Shipping
              </div>
              <div className="flex items-center gap-2 text-sm text-text-light">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
                30-Day Returns
              </div>
            </div>
          </div>
        </div>

        {/* Product Specifications */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-primary mb-8">Product Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-secondary rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-2">Dimensions</h3>
              <p className="text-text-light">{product.title.includes('10') ? '10\' x 10\'' : product.title.includes('13') ? '10\' x 13\'' : product.title.includes('16') ? '12\' x 16\'' : '13\' x 20\''}</p>
            </div>
            <div className="bg-secondary rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-2">Material</h3>
              <p className="text-text-light">Aluminum</p>
            </div>
            <div className="bg-secondary rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-2">Wind Resistance</h3>
              <p className="text-text-light">72-120 MPH</p>
            </div>
            <div className="bg-secondary rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-2">Assembly Time</h3>
              <p className="text-text-light">4 hours</p>
            </div>
          </div>
        </div>

        {/* Material Information */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-primary mb-8">Material Information</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-secondary">
              <img 
                src={product.image} 
                alt="Material detail" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Premium Aluminum Construction</h3>
              <p className="text-text-light mb-4 leading-relaxed">
                Our pergolas are constructed from high-quality aluminum that is lightweight yet durable. The material is resistant to rust, corrosion, and fading, ensuring your pergola will look great for years to come.
              </p>
              <p className="text-text-light mb-4 leading-relaxed">
                The aluminum frame is powder-coated for added protection and comes in a variety of colors to match your outdoor decor. The material is also environmentally friendly and 100% recyclable.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                      <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                  </div>
                  <span className="text-text-light">Rust Resistant</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                      <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                  </div>
                  <span className="text-text-light">Weatherproof</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                      <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                  </div>
                  <span className="text-text-light">Low Maintenance</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                      <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                  </div>
                  <span className="text-text-light">Eco-Friendly</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Installation Instructions */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-primary mb-8">Installation Instructions</h2>
          <div className="bg-secondary rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-4">Easy DIY Assembly</h3>
            <p className="text-text-light mb-6 leading-relaxed">
              Our pergolas are designed for easy DIY assembly with clear step-by-step instructions. No special tools are required, and most installations can be completed in 4-6 hours with 2-3 people.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Prepare the Area</h4>
                <p className="text-text-light text-sm">Choose a level surface and mark the placement of your pergola.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Assemble the Frame</h4>
                <p className="text-text-light text-sm">Follow the instructions to assemble the aluminum frame pieces.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Secure in Place</h4>
                <p className="text-text-light text-sm">Secure the pergola to the ground using the provided hardware.</p>
              </div>
            </div>
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Tools Needed</h4>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-white rounded-full text-text-light">Drill</span>
                <span className="px-4 py-2 bg-white rounded-full text-text-light">Level</span>
                <span className="px-4 py-2 bg-white rounded-full text-text-light">Tape Measure</span>
                <span className="px-4 py-2 bg-white rounded-full text-text-light">Socket Wrench</span>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-primary mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="bg-secondary rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">How long does it take to assemble?</h3>
              <p className="text-text-light">Most pergolas can be assembled in 4-6 hours with 2-3 people. The exact time will depend on the size of the pergola and your level of experience.</p>
            </div>
            <div className="bg-secondary rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">Do I need a foundation?</h3>
              <p className="text-text-light">Our pergolas can be installed on a variety of surfaces including concrete, pavers, or grass. For permanent installations, we recommend a concrete foundation.</p>
            </div>
            <div className="bg-secondary rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">Is the pergola weatherproof?</h3>
              <p className="text-text-light">Yes, our aluminum pergolas are weatherproof and designed to withstand harsh weather conditions including heavy rain, snow, and high winds.</p>
            </div>
            <div className="bg-secondary rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">What is the warranty?</h3>
              <p className="text-text-light">We offer a 10-year warranty on all our pergolas, covering defects in materials and workmanship.</p>
            </div>
            <div className="bg-secondary rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">Can I customize the color?</h3>
              <p className="text-text-light">Yes, our pergolas come in a variety of colors including white, black, and gray. Contact us for custom color options.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
