// Shopify Storefront API 封装
// 使用 Demo 数据，后续可替换为真实 API

export interface Product {
  id: string;
  title: string;
  handle: string;
  description: string;
  price: number;
  compareAtPrice: number;
  image: string;
  images: string[];
  variants: Variant[];
}

export interface Variant {
  id: string;
  title: string;
  price: number;
  available: boolean;
}

// Demo 产品数据
const demoProducts: Product[] = [
  {
    id: '1',
    title: 'PRO+ Pergola 10\' x 10\'',
    handle: 'pro-pergola-10x10',
    description: 'Transform your outdoor space with our Scandinavian-inspired aluminum pergola. Engineered for 72-120 MPH wind resistance.',
    price: 1999,
    compareAtPrice: 3499,
    image: '/images/product-1.jpg',
    images: [
      '/images/product-1.jpg',
      '/images/product-2.jpg',
    ],
    variants: [
      { id: 'v1', title: 'White', price: 1999, available: true },
      { id: 'v2', title: 'Black', price: 1999, available: true },
      { id: 'v3', title: 'Gray', price: 1999, available: true },
    ],
  },
  {
    id: '2',
    title: 'PRO+ Pergola 10\' x 13\'',
    handle: 'pro-pergola-10x13',
    description: 'Perfect for medium-sized patios. Easy 4-hour DIY assembly with clear instructions.',
    price: 2499,
    compareAtPrice: 4299,
    image: '/images/product-2.jpg',
    images: [
      '/images/product-2.jpg',
    ],
    variants: [
      { id: 'v4', title: 'White', price: 2499, available: true },
      { id: 'v5', title: 'Black', price: 2499, available: true },
      { id: 'v6', title: 'Gray', price: 2499, available: true },
    ],
  },
  {
    id: '3',
    title: 'PRO+ Pergola 12\' x 16\'',
    handle: 'pro-pergola-12x16',
    description: 'Our most popular size. Fits most family patios with room for outdoor dining.',
    price: 3299,
    compareAtPrice: 5499,
    image: '/images/product-3.jpg',
    images: [
      '/images/product-3.jpg',
    ],
    variants: [
      { id: 'v7', title: 'White', price: 3299, available: true },
      { id: 'v8', title: 'Black', price: 3299, available: true },
      { id: 'v9', title: 'Gray', price: 3299, available: true },
    ],
  },
  {
    id: '4',
    title: 'PRO+ Pergola 13\' x 20\'',
    handle: 'pro-pergola-13x20',
    description: 'The ultimate outdoor living space. Perfect for large gatherings and entertainment.',
    price: 4199,
    compareAtPrice: 6999,
    image: '/images/product-4.jpg',
    images: [
      '/images/product-4.jpg',
    ],
    variants: [
      { id: 'v10', title: 'White', price: 4199, available: true },
      { id: 'v11', title: 'Black', price: 4199, available: true },
      { id: 'v12', title: 'Gray', price: 4199, available: true },
    ],
  },
];

// 获取所有产品
export async function getProducts(): Promise<Product[]> {
  // 实际项目中这里调用 Shopify API
  // const response = await fetch(`${SHOPIFY_STORE}/products.json`);
  // return response.json();
  return new Promise((resolve) => {
    setTimeout(() => resolve(demoProducts), 100);
  });
}

// 获取单个产品
export async function getProduct(handle: string): Promise<Product | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = demoProducts.find((p) => p.handle === handle);
      resolve(product || null);
    }, 100);
  });
}

// 格式化价格
export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
}
