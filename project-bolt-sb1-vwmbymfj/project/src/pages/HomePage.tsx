import React from 'react';
import Hero from '../components/Hero';
import FeaturedCategories from '../components/FeaturedCategories';
import FeaturedProducts from '../components/FeaturedProducts';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <FeaturedCategories />
      <FeaturedProducts />
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Curated Design for Your Home</h2>
              <p className="text-gray-600 mb-6">
                At Pamono, we believe that great design tells a story. Our curated collection brings together exceptional furniture, lighting, and decor from renowned designers and emerging talents alike.
              </p>
              <p className="text-gray-600 mb-6">
                Each piece in our collection is selected for its quality, craftsmanship, and unique character, ensuring that you find items that not only enhance your space but also reflect your personal style.
              </p>
              <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors">
                Learn More About Us
              </button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" 
                alt="Interior design" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <Testimonials />
      <FeaturedProducts 
        title="New Arrivals" 
        subtitle="The latest additions to our curated collection"
      />
      <Newsletter />
    </div>
  );
};

export default HomePage;