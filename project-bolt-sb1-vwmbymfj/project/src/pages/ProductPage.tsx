import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, Share2, Truck, Shield, ArrowLeft, ArrowRight } from 'lucide-react';
import FeaturedProducts from '../components/FeaturedProducts';

// Mock product data - in a real app, this would come from an API
const product = {
  id: '1',
  name: 'Curved Sofa',
  price: 2499,
  designer: 'Paolo Rossi',
  description: 'This elegant curved sofa combines comfort with sophisticated design. Upholstered in premium Italian fabric, it features a solid wood frame and hand-finished details that showcase exceptional craftsmanship.',
  details: [
    'Dimensions: W220 x D95 x H80 cm',
    'Materials: Solid oak frame, premium Italian fabric',
    'Available in multiple colors',
    'Handcrafted in Italy'
  ],
  images: [
    'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
    'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
  ],
  category: 'Furniture',
  inStock: true
};

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  // In a real app, you would fetch the product data based on the ID
  console.log('Product ID:', id);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQuantity(parseInt(e.target.value));
  };

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <nav className="mb-8">
        <ol className="flex text-sm">
          <li className="mr-2">
            <Link to="/" className="text-gray-500 hover:text-gray-700">Home</Link>
          </li>
          <li className="mx-2 text-gray-500">/</li>
          <li className="mr-2">
            <Link to={`/category/${product.category.toLowerCase()}`} className="text-gray-500 hover:text-gray-700">{product.category}</Link>
          </li>
          <li className="mx-2 text-gray-500">/</li>
          <li className="text-gray-900">{product.name}</li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Images */}
        <div>
          <div className="relative mb-4">
            <img
              src={product.images[activeImage]}
              alt={product.name}
              className="w-full h-auto rounded-lg"
            />
            <button 
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
              aria-label="Previous image"
            >
              <ArrowLeft size={20} />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
              aria-label="Next image"
            >
              <ArrowRight size={20} />
            </button>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`border rounded-md overflow-hidden ${
                  activeImage === index ? 'border-black' : 'border-gray-200'
                }`}
              >
                <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-auto" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
          <p className="text-gray-600 mb-4">Designed by {product.designer}</p>
          <p className="text-2xl font-semibold mb-6">€{product.price.toLocaleString()}</p>
          
          <div className="mb-6">
            <p className="text-gray-700 mb-4">{product.description}</p>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              {product.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <div className="flex items-center mb-4">
              <label htmlFor="quantity" className="mr-4 text-gray-700">Quantity</label>
              <select
                id="quantity"
                value={quantity}
                onChange={handleQuantityChange}
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors flex-grow">
                Add to Cart
              </button>
              <button className="border border-gray-300 text-gray-700 px-4 py-3 rounded-md hover:bg-gray-50 transition-colors">
                <Heart size={20} />
              </button>
              <button className="border border-gray-300 text-gray-700 px-4 py-3 rounded-md hover:bg-gray-50 transition-colors">
                <Share2 size={20} />
              </button>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <div className="flex items-start mb-4">
              <Truck className="mr-3 text-gray-600 flex-shrink-0" size={20} />
              <div>
                <p className="font-medium text-gray-900">Free Shipping</p>
                <p className="text-gray-600 text-sm">On orders over €1000</p>
              </div>
            </div>
            <div className="flex items-start">
              <Shield className="mr-3 text-gray-600 flex-shrink-0" size={20} />
              <div>
                <p className="font-medium text-gray-900">2-Year Warranty</p>
                <p className="text-gray-600 text-sm">On all our products</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product tabs */}
      <div className="mt-16 border-t border-gray-200 pt-10">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8">
            <button className="border-b-2 border-black px-1 py-4 text-sm font-medium text-gray-900">
              Description
            </button>
            <button className="border-b-2 border-transparent px-1 py-4 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
              Specifications
            </button>
            <button className="border-b-2 border-transparent px-1 py-4 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
              Reviews
            </button>
            <button className="border-b-2 border-transparent px-1 py-4 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
              Shipping & Returns
            </button>
          </nav>
        </div>
        <div className="py-6">
          <p className="text-gray-700">
            {product.description} This elegant curved sofa combines comfort with sophisticated design. Upholstered in premium Italian fabric, it features a solid wood frame and hand-finished details that showcase exceptional craftsmanship.
          </p>
          <p className="text-gray-700 mt-4">
            Each piece is made to order by skilled artisans in Italy, ensuring the highest quality and attention to detail. The curved design not only makes a striking visual statement but also creates a more intimate and conversational seating arrangement.
          </p>
        </div>
      </div>

      {/* Related products */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
        <FeaturedProducts />
      </div>
    </div>
  );
};

export default ProductPage;