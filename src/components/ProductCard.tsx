import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  designer?: string;
  isNew?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, image, designer, isNew }) => {
  return (
    <div className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-100">
        <Link to={`/product/${id}`}>
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover object-center transition-opacity group-hover:opacity-75"
          />
        </Link>
        {isNew && (
          <div className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1">
            NEW
          </div>
        )}
        <button className="absolute top-2 right-2 p-1.5 bg-white rounded-full shadow-md hover:bg-gray-100 focus:outline-none" aria-label="Add to wishlist">
          <Heart size={18} className="text-gray-600" />
        </button>
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <Link to={`/product/${id}`}>
              {name}
            </Link>
          </h3>
          {designer && (
            <p className="mt-1 text-sm text-gray-500">{designer}</p>
          )}
        </div>
        <p className="text-sm font-medium text-gray-900">€{price.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default ProductCard;