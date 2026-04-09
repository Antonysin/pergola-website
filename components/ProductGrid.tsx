import { getProducts } from '@/lib/shopify';
import ProductCard from './ProductCard';

export default async function ProductGrid() {
  const products = await getProducts();

  return (
    <section id="products" className="py-20 lg:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            ATLAS Aluminum Pergola Kit
          </h2>
          <p className="text-lg text-text-light">
            10,000+ Happy Customers | Top 1% Highest-Rated Company in Pergolas
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary text-lg font-medium rounded-lg hover:bg-primary hover:text-white transition-colors"
          >
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
}
