import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative">
      <div className="h-[70vh] bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Discover Exceptional Design</h1>
          <p className="text-xl text-white mb-8 max-w-2xl">
            Curated furniture, lighting, and decor from the world's finest designers and artisans.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/category/new"
              className="bg-white text-gray-900 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              Shop New Arrivals
            </Link>
            <Link
              to="/category/vintage"
              className="bg-transparent text-white border border-white px-8 py-3 rounded-md font-medium hover:bg-white hover:bg-opacity-10 transition-colors"
            >
              Explore Vintage
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;