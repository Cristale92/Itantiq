import React from 'react';
import { Link } from 'react-router-dom';
import Newsletter from '../components/Newsletter';

const AboutPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative">
        <div className="h-[50vh] bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)' }}>
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">About Pamono</h1>
              <p className="text-xl text-white max-w-2xl">
                A marketplace and magazine specializing in distinctive design objects and the stories behind them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
            <p className="text-gray-700 mb-6">
              Founded in 2013, Pamono began with a simple mission: to connect design enthusiasts with exceptional pieces that tell a story. What started as a small team of passionate design lovers has grown into a global community of collectors, designers, and artisans united by a shared appreciation for quality craftsmanship and distinctive aesthetics.
            </p>
            <p className="text-gray-700 mb-6">
              We believe that great design is more than just form and function—it's about the stories, the people, and the passion behind each piece. That's why we work directly with designers, galleries, and vintage dealers to bring you a curated selection of furniture, lighting, and decor that goes beyond the ordinary.
            </p>
            <p className="text-gray-700">
              Today, Pamono continues to evolve, but our core values remain the same: authenticity, quality, and a deep respect for the creative process. We're committed to supporting both established and emerging talents, preserving design heritage, and helping our customers create spaces that reflect their unique personalities and stories.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm h-full">
                <h3 className="text-xl font-semibold mb-4">Quality & Craftsmanship</h3>
                <p className="text-gray-600">
                  We believe in the value of well-made objects that stand the test of time. Each piece in our collection is selected for its exceptional quality and craftsmanship.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm h-full">
                <h3 className="text-xl font-semibold mb-4">Sustainability</h3>
                <p className="text-gray-600">
                  By promoting vintage pieces and supporting designers who use sustainable materials and practices, we're committed to reducing the environmental impact of the design industry.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm h-full">
                <h3 className="text-xl font-semibold mb-4">Cultural Heritage</h3>
                <p className="text-gray-600">
                  We celebrate design history and cultural heritage by preserving and sharing the stories behind each piece, connecting the past with the present.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" 
                alt="Team member" 
                className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold">Elena Rossi</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" 
                alt="Team member" 
                className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold">Marco Bianchi</h3>
              <p className="text-gray-600">Creative Director</p>
            </div>
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80" 
                alt="Team member" 
                className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold">Sofia Conti</h3>
              <p className="text-gray-600">Head of Curation</p>
            </div>
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1774&q=80" 
                alt="Team member" 
                className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold">Alessandro Ricci</h3>
              <p className="text-gray-600">Design Specialist</p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Design Community</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover exceptional design, connect with like-minded enthusiasts, and transform your space with Pamono.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/category/new"
              className="bg-white text-gray-900 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              Shop Now
            </Link>
            <Link
              to="/contact"
              className="bg-transparent text-white border border-white px-8 py-3 rounded-md font-medium hover:bg-white hover:bg-opacity-10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
};

export default AboutPage;