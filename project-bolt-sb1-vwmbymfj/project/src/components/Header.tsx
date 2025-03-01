import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, Menu, X, User, Heart } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-gray-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-gray-900">
              PAMONO
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/category/furniture" className="text-gray-800 hover:text-gray-600">
              Furniture
            </Link>
            <Link to="/category/lighting" className="text-gray-800 hover:text-gray-600">
              Lighting
            </Link>
            <Link to="/category/decor" className="text-gray-800 hover:text-gray-600">
              Decor
            </Link>
            <Link to="/category/vintage" className="text-gray-800 hover:text-gray-600">
              Vintage
            </Link>
            <Link to="/about" className="text-gray-800 hover:text-gray-600">
              About
            </Link>
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleSearch}
              className="text-gray-800 hover:text-gray-600 focus:outline-none"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <Link to="/wishlist" className="text-gray-800 hover:text-gray-600" aria-label="Wishlist">
              <Heart size={20} />
            </Link>
            <Link to="/account" className="text-gray-800 hover:text-gray-600" aria-label="Account">
              <User size={20} />
            </Link>
            <Link to="/cart" className="text-gray-800 hover:text-gray-600" aria-label="Cart">
              <ShoppingCart size={20} />
            </Link>
          </div>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div className="py-4 border-t border-gray-200">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
              <button className="absolute right-3 top-2 text-gray-600">
                <Search size={20} />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-3">
              <Link to="/category/furniture" className="text-gray-800 hover:text-gray-600 py-2">
                Furniture
              </Link>
              <Link to="/category/lighting" className="text-gray-800 hover:text-gray-600 py-2">
                Lighting
              </Link>
              <Link to="/category/decor" className="text-gray-800 hover:text-gray-600 py-2">
                Decor
              </Link>
              <Link to="/category/vintage" className="text-gray-800 hover:text-gray-600 py-2">
                Vintage
              </Link>
              <Link to="/about" className="text-gray-800 hover:text-gray-600 py-2">
                About
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;