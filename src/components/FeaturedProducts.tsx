import React from 'react';
import ProductCard from './ProductCard';

// Mock data for featured products
const featuredProducts = [
  {
    id: '1',
    name: 'Curved Sofa',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
    designer: 'Paolo Rossi',
    isNew: true
  },
  {
    id: '2',
    name: 'Pendant Light',
    price: 599,
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    designer: 'Studio Milano',
    isNew: true
  },
  {
    id: '3',
    name: 'Wooden Dining Table',
    price: 1899,
    image: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    designer: 'Artisan Collective'
  },
  {
    id: '4',
    name: 'Lounge Chair',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    designer: 'Design House'
  },
  {
    id: '5',
    name: 'Ceramic Vase Set',
    price: 349,
    image: 'https://images.unsplash.com/photo-1612196808214-b7e239e5f5a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    designer: 'Terra Studios'
  },
  {
    id: '6',
    name: 'Wall Mirror',
    price: 799,
    image: 'https://images.unsplash.com/photo-1618220252344-8ec99ec624b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    designer: 'Glass Artisans'
  },
  {
    id: '7',
    name: 'Bookshelf',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1588279102920-e8631ffaec0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    designer: 'Modern Living'
  },
  {
    id: '8',
    name: 'Floor Lamp',
    price: 459,
    image: 'https://images.unsplash.com/photo-1543198126-a8ad8e47fb22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    designer: 'Illumina'
  }
];

interface FeaturedProductsProps {
  title?: string;
  subtitle?: string;
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ 
  title = "Featured Products", 
  subtitle = "Discover our curated selection of exceptional pieces" 
}) => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              designer={product.designer}
              isNew={product.isNew}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;