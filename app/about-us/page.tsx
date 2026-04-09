import React from 'react';

export default function AboutUsPage() {
  return (
    <div className="py-12 lg:py-20">
      {/* Hero Section */}
      <div className="bg-secondary rounded-3xl overflow-hidden mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6">About ATLAS</h1>
            <p className="text-xl text-text-light max-w-3xl mx-auto">
              We are dedicated to providing high-quality pergolas that transform outdoor spaces into beautiful, functional living areas.
            </p>
          </div>
        </div>
      </div>

      {/* Company Introduction */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <h2 className="text-3xl font-bold text-primary mb-12">Our Story</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="aspect-[4/3] rounded-xl overflow-hidden bg-secondary">
            <img 
              src="/images/hero-bg.jpg" 
              alt="Company image" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Who We Are</h3>
            <p className="text-text-light mb-6 leading-relaxed">
              ATLAS was founded with a simple mission: to create beautiful, durable pergolas that enhance outdoor living spaces. Our team of experts combines years of experience in design and manufacturing to deliver products that meet the highest standards of quality and craftsmanship.
            </p>
            <p className="text-text-light mb-6 leading-relaxed">
              We believe that everyone deserves to enjoy their outdoor space to the fullest. That's why we design our pergolas to be not only aesthetically pleasing but also functional, durable, and easy to install.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="bg-secondary rounded-xl p-6">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <p className="text-text-light">Years of Experience</p>
              </div>
              <div className="bg-secondary rounded-xl p-6">
                <div className="text-3xl font-bold text-primary mb-2">50k+</div>
                <p className="text-text-light">Happy Customers</p>
              </div>
              <div className="bg-secondary rounded-xl p-6">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <p className="text-text-light">Countries Served</p>
              </div>
              <div className="bg-secondary rounded-xl p-6">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <p className="text-text-light">Satisfaction Guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-secondary rounded-3xl overflow-hidden py-16 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="/images/avatar-1.jpg" 
                  alt="Team member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">John Doe</h3>
                <p className="text-accent mb-3">Founder & CEO</p>
                <p className="text-text-light text-sm">
                  With over 15 years of experience in outdoor living products, John leads our vision for creating high-quality pergolas.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="/images/avatar-2.jpg" 
                  alt="Team member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Jane Smith</h3>
                <p className="text-accent mb-3">Design Director</p>
                <p className="text-text-light text-sm">
                  Jane brings her expertise in industrial design to create beautiful and functional pergola designs.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="/images/avatar-3.jpg" 
                  alt="Team member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Mike Johnson</h3>
                <p className="text-accent mb-3">Production Manager</p>
                <p className="text-text-light text-sm">
                  Mike ensures that every pergola is manufactured to the highest standards of quality and durability.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="/images/avatar-1.jpg" 
                  alt="Team member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Sarah Lee</h3>
                <p className="text-accent mb-3">Customer Service Manager</p>
                <p className="text-text-light text-sm">
                  Sarah leads our customer service team, ensuring that every customer has a positive experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-3xl font-bold text-primary mb-12">Our Journey</h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-accent"></div>
          
          {/* Timeline items */}
          <div className="space-y-12">
            {/* 2016 */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="md:text-right md:pr-12">
                <h3 className="text-2xl font-semibold mb-2">Company Founded</h3>
                <p className="text-accent mb-3">2016</p>
                <p className="text-text-light">
                  ATLAS was founded with a mission to create high-quality pergolas that enhance outdoor living spaces.
                </p>
              </div>
              <div className="hidden md:block"></div>
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-white z-10"></div>
            </div>
            
            {/* 2018 */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="hidden md:block"></div>
              <div className="md:pl-12">
                <h3 className="text-2xl font-semibold mb-2">First Product Launch</h3>
                <p className="text-accent mb-3">2018</p>
                <p className="text-text-light">
                  We launched our first line of aluminum pergolas, designed for durability and easy installation.
                </p>
              </div>
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-white z-10"></div>
            </div>
            
            {/* 2020 */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="md:text-right md:pr-12">
                <h3 className="text-2xl font-semibold mb-2">Expanded Product Line</h3>
                <p className="text-accent mb-3">2020</p>
                <p className="text-text-light">
                  We expanded our product line to include a variety of sizes and styles to meet different customer needs.
                </p>
              </div>
              <div className="hidden md:block"></div>
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-white z-10"></div>
            </div>
            
            {/* 2022 */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="hidden md:block"></div>
              <div className="md:pl-12">
                <h3 className="text-2xl font-semibold mb-2">International Expansion</h3>
                <p className="text-accent mb-3">2022</p>
                <p className="text-text-light">
                  We began selling our products internationally, bringing our high-quality pergolas to customers around the world.
                </p>
              </div>
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-white z-10"></div>
            </div>
            
            {/* 2024 */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="md:text-right md:pr-12">
                <h3 className="text-2xl font-semibold mb-2">Award-Winning Design</h3>
                <p className="text-accent mb-3">2024</p>
                <p className="text-text-light">
                  Our pergola designs received multiple industry awards for innovation and design excellence.
                </p>
              </div>
              <div className="hidden md:block"></div>
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-white z-10"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-secondary rounded-3xl overflow-hidden py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality</h3>
              <p className="text-text-light">
                We are committed to delivering products of the highest quality, using only the best materials and craftsmanship.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer Focus</h3>
              <p className="text-text-light">
                Our customers are at the center of everything we do. We strive to exceed their expectations at every step.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-text-light">
                We are constantly innovating to create better products and improve the customer experience.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
              <p className="text-text-light">
                We are committed to sustainable practices, using eco-friendly materials and reducing our environmental footprint.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
