import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(/images/hero-bg.jpg)' 
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-[650px]">
          <span className="inline-block px-4 py-2 bg-accent text-white text-sm font-semibold uppercase tracking-wider rounded-lg mb-6">
            NEW 3RD GEN PRO+
          </span>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            America's Most Popular Pergola Brand
          </h1>
          
          <p className="text-lg sm:text-xl text-white/85 leading-relaxed mb-8 max-w-[550px]">
            Transform your outdoor space with our Scandinavian-inspired aluminum pergolas. Engineered for American weather, designed for modern living.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <Link 
              href="/#products" 
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white text-lg font-medium rounded-lg hover:bg-accent/90 transition-colors"
            >
              Shop Pergolas
            </Link>
            <Link 
              href="/#gallery" 
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white text-lg font-medium border-2 border-white rounded-lg hover:bg-white hover:text-primary transition-colors"
            >
              View Gallery
            </Link>
          </div>
          
          {/* Stats */}
          <div className="flex flex-wrap gap-8 sm:gap-16 pt-8 border-t border-white/20">
            <div>
              <div className="text-2xl sm:text-4xl font-bold text-white">10,000+</div>
              <div className="text-sm text-white/70">Happy Customers</div>
            </div>
            <div>
              <div className="text-2xl sm:text-4xl font-bold text-white">10-Year</div>
              <div className="text-sm text-white/70">Warranty</div>
            </div>
            <div>
              <div className="text-2xl sm:text-4xl font-bold text-white">72-120</div>
              <div className="text-sm text-white/70">MPH Wind Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
