import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Pointer as Pinterest, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">PAMONO</h3>
            <p className="text-gray-300 mb-4">
              Pamono is a marketplace and magazine specializing in distinctive design objects and the stories behind them.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-300 hover:text-white" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-300 hover:text-white" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://pinterest.com" className="text-gray-300 hover:text-white" aria-label="Pinterest">
                <Pinterest size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-300 hover:text-white" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white">About Us</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white">Blog</Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-white">FAQ</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-white">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/category/furniture" className="text-gray-300 hover:text-white">Furniture</Link>
              </li>
              <li>
                <Link to="/category/lighting" className="text-gray-300 hover:text-white">Lighting</Link>
              </li>
              <li>
                <Link to="/category/decor" className="text-gray-300 hover:text-white">Decor</Link>
              </li>
              <li>
                <Link to="/category/vintage" className="text-gray-300 hover:text-white">Vintage</Link>
              </li>
              <li>
                <Link to="/category/new" className="text-gray-300 hover:text-white">New Arrivals</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">123 Design Street, Milan, Italy</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <span className="text-gray-300">+39 123 456 7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <span className="text-gray-300">info@pamono.it</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Pamono.it. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;