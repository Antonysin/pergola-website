'use client';

import Link from 'next/link';
import { Product, formatPrice } from '@/lib/shopify';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
      <Link href={`/products/${product.handle}`} className="block relative aspect-[4/3] overflow-hidden bg-secondary">
        <img 
          src={product.image} 
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.compareAtPrice > product.price && (
          <span className="absolute top-4 left-4 px-3 py-1 bg-accent text-white text-xs font-semibold rounded-md">
            Sale
          </span>
        )}
      </Link>
      
      <div className="p-5">
        <h3 className="text-lg font-semibold mb-2">
          <Link href={`/products/${product.handle}`} className="text-text-main hover:text-accent transition-colors">
            {product.title}
          </Link>
        </h3>
        
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xl font-bold text-primary">
            {formatPrice(product.price)}
          </span>
          {product.compareAtPrice > product.price && (
            <span className="text-text-light line-through">
              {formatPrice(product.compareAtPrice)}
            </span>
          )}
        </div>
        
        <button 
          className="w-full py-3 bg-primary text-white font-medium rounded-lg hover:bg-accent transition-colors"
          onClick={() => alert(`Added ${product.title} to cart!`)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
