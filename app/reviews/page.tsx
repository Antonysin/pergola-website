import Link from 'next/link';

const testimonials = [
  {
    quote: "This pergola has completely transformed my patio. It's not only functional but also adds a touch of elegance. The installation was straightforward, thanks to the clear instructions provided. Highly recommend!",
    author: 'Sarah M.',
    location: 'Austin, Texas',
    image: '/images/avatar-1.jpg',
    rating: 5,
    date: '2 weeks ago',
    product: 'PRO+ Pergola 10\' x 10\'',
  },
  {
    quote: "We love our Pergola and the added bonus of putting it up ourselves has given us extra satisfaction. It took my 16 year old daughter and I about 4 hours to assemble it. We literally had dinner under it the day we built it!",
    author: 'Terry',
    location: 'Denver, Colorado',
    image: '/images/avatar-2.jpg',
    rating: 5,
    date: '1 month ago',
    product: 'PRO+ Pergola 10\' x 13\'',
  },
  {
    quote: "I have never seen such a great company. If more were like ATLAS this country would be in a lot better shape. Great response time answering questions, and many phone calls to make sure everything is going as expected.",
    author: 'Jacqueline',
    location: 'Florida',
    image: '/images/avatar-3.jpg',
    rating: 5,
    date: '3 months ago',
    product: 'PRO+ Pergola 12\' x 16\'',
  },
  {
    quote: "The quality exceeded my expectations. The aluminum frame is solid and the finish is beautiful. We've had several storms and it held up perfectly!",
    author: 'Michael R.',
    location: 'Phoenix, Arizona',
    image: '/images/avatar-1.jpg',
    rating: 5,
    date: '4 months ago',
    product: 'PRO+ Pergola 13\' x 20\'',
  },
  {
    quote: "Customer service was exceptional. They helped me choose the right size and answered all my questions. Installation was a breeze!",
    author: 'Emily K.',
    location: 'Seattle, Washington',
    image: '/images/avatar-2.jpg',
    rating: 5,
    date: '6 months ago',
    product: 'PRO+ Pergola 10\' x 10\'',
  },
  {
    quote: "Best investment for our backyard! We use it every weekend for family gatherings. The price was great for the quality we received.",
    author: 'David L.',
    location: 'Chicago, Illinois',
    image: '/images/avatar-3.jpg',
    rating: 4,
    date: '8 months ago',
    product: 'PRO+ Pergola 12\' x 16\'',
  },
];

const ratingsBreakdown = [
  { stars: 5, percentage: 85, count: 850 },
  { stars: 4, percentage: 10, count: 100 },
  { stars: 3, percentage: 3, count: 30 },
  { stars: 2, percentage: 1, count: 10 },
  { stars: 1, percentage: 1, count: 10 },
];

export default function ReviewsPage() {
  const averageRating = 4.8;
  const totalReviews = 1000;

  return (
    <div className="py-12 lg:py-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <nav className="flex items-center gap-2 text-sm text-text-light">
          <Link href="/" className="hover:text-accent transition-colors">Home</Link>
          <span>/</span>
          <span className="text-text-main font-medium">Reviews</span>
        </nav>
      </div>

      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
            Customer Reviews
          </h1>
          <p className="text-xl text-text-light max-w-2xl mx-auto">
            See what our customers are saying about ATLAS pergolas
          </p>
        </div>
      </div>

      {/* Ratings Summary */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-secondary rounded-xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Average Rating */}
            <div className="text-center lg:text-left">
              <div className="text-6xl font-bold text-primary mb-2">{averageRating}</div>
              <div className="flex items-center justify-center lg:justify-start gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="24" height="24" viewBox="0 0 20 20" fill={i < Math.floor(averageRating) ? "#fbbf24" : (i < averageRating ? "#fbbf24" : "#d1d5db")}>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-text-light">{totalReviews.toLocaleString()} reviews</p>
            </div>

            {/* Ratings Breakdown */}
            <div className="lg:col-span-2">
              <h3 className="font-semibold mb-4">Rating Breakdown</h3>
              <div className="space-y-3">
                {ratingsBreakdown.map((item) => (
                  <div key={item.stars} className="flex items-center gap-4">
                    <div className="flex items-center gap-1 w-20">
                      <span className="text-sm font-medium">{item.stars}</span>
                      <svg width="16" height="16" viewBox="0 0 20 20" fill="#fbbf24">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    </div>
                    <div className="flex-1 bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-accent h-3 rounded-full" 
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-text-light text-sm w-12">{item.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-primary">All Reviews</h2>
          <button className="px-6 py-2 bg-accent text-white font-medium rounded-lg hover:bg-accent/90 transition-colors">
            Write a Review
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-secondary p-8 rounded-xl">
              {/* Rating */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} width="20" height="20" viewBox="0 0 20 20" fill="#fbbf24">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <span className="text-text-light text-sm">{testimonial.date}</span>
              </div>
              
              {/* Product */}
              <div className="text-sm text-accent font-medium mb-3">
                {testimonial.product}
              </div>
              
              {/* Quote */}
              <blockquote className="text-lg italic text-text-main mb-6 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-primary">{testimonial.author}</div>
                  <div className="text-sm text-text-light">{testimonial.location}</div>
                  <div className="flex items-center gap-1 text-sm text-green-600 mt-0.5">
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Verified Buyer
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary text-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Join Our Happy Customers?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Browse our collection and experience the ATLAS difference for yourself.
          </p>
          <Link 
            href="/products" 
            className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-semibold text-lg rounded-lg hover:bg-accent/90 transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
}
