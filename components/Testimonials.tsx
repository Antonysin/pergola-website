const testimonials = [
  {
    quote: "This pergola has completely transformed my patio. It's not only functional but also adds a touch of elegance. The installation was straightforward, thanks to the clear instructions provided. Highly recommend!",
    author: 'Sarah M.',
    location: 'Austin, Texas',
    image: '/images/avatar-1.jpg',
    rating: 5,
  },
  {
    quote: "We love our Pergola and the added bonus of putting it up ourselves has given us extra satisfaction. It took my 16 year old daughter and I about 4 hours to assemble it. We literally had dinner under it the day we built it!",
    author: 'Terry',
    location: 'Denver, Colorado',
    image: '/images/avatar-2.jpg',
    rating: 5,
  },
  {
    quote: "I have never seen such a great company. If more were like Hansø this country would be in a lot better shape. Great response time answering questions, and many phone calls to make sure everything is going as expected.",
    author: 'Jacqueline',
    location: 'Florida',
    image: '/images/avatar-3.jpg',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            What Customers Say About Hansø
          </h2>
          <p className="text-lg text-text-light">
            Join thousands of satisfied homeowners
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-secondary p-8 rounded-xl"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} width="20" height="20" viewBox="0 0 20 20" fill="#fbbf24">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
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
    </section>
  );
}
