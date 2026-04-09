'use client';

import Link from 'next/link';
import { useState } from 'react';
import { formatPrice } from '@/lib/shopify';

// Demo cart items
const demoCartItems = [
  {
    id: '1',
    title: 'PRO+ Pergola 10\' x 10\'',
    variant: 'White',
    price: 1999,
    quantity: 1,
    image: '/images/product-1.jpg',
  },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(demoCartItems);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(items => 
      items.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 mx-auto mb-6 text-gray-300">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-primary mb-4">Your cart is empty</h1>
          <p className="text-text-light mb-8">Looks like you haven&apos;t added anything to your cart yet.</p>
          <Link 
            href="/#products" 
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold text-lg rounded-lg hover:bg-accent transition-colors"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-primary mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex gap-4 p-4 bg-white rounded-xl border border-gray-200">
                <div className="w-24 h-24 rounded-lg overflow-hidden bg-secondary flex-shrink-0">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-primary mb-1">
                    <Link href={`/products/${item.id}`} className="hover:text-accent transition-colors">
                      {item.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-text-light mb-2">{item.variant}</p>
                  <p className="font-semibold text-primary">{formatPrice(item.price)}</p>
                </div>
                <div className="flex flex-col items-end justify-between">
                  <button 
                    onClick={() => removeItem(item.id)}
                    className="text-text-light hover:text-red-500 transition-colors"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 6L6 18M6 6l12 12"/>
                    </svg>
                  </button>
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-3 py-1 hover:bg-secondary transition-colors"
                    >
                      -
                    </button>
                    <span className="px-3 py-1 border-x border-gray-300 min-w-[40px] text-center">
                      {item.quantity}
                    </span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-3 py-1 hover:bg-secondary transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-secondary p-6 rounded-xl h-fit lg:sticky lg:top-24">
            <h2 className="text-xl font-bold text-primary mb-6">Order Summary</h2>
            
            <div className="flex justify-between py-3 border-b border-gray-200">
              <span className="text-text-light">Subtotal</span>
              <span className="font-semibold">{formatPrice(subtotal)}</span>
            </div>
            
            <div className="flex justify-between py-3 border-b border-gray-200">
              <span className="text-text-light">Shipping</span>
              <span className="text-green-600">Free</span>
            </div>
            
            <div className="flex justify-between py-4 text-lg font-bold">
              <span>Total</span>
              <span>{formatPrice(subtotal)}</span>
            </div>

            <p className="text-sm text-text-light mb-4">
              Shipping & taxes calculated at checkout
            </p>

            <button 
              className="w-full py-4 bg-primary text-white font-semibold rounded-lg hover:bg-accent transition-colors mb-3"
              onClick={() => alert('Redirecting to checkout...')}
            >
              Proceed to Checkout
            </button>
            
            <Link 
              href="/#products" 
              className="block w-full py-4 border-2 border-primary text-primary font-semibold text-center rounded-lg hover:bg-primary hover:text-white transition-colors"
            >
              Continue Shopping
            </Link>

            {/* Trust Badges */}
            <div className="flex gap-4 mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-2 text-sm text-text-light">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                Secure
              </div>
              <div className="flex items-center gap-2 text-sm text-text-light">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="2">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Warranty
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
