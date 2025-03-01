import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronDown, Filter, X } from 'lucide-react';
import ProductCard from '../components/ProductCard';

// Mock data for products
const allProducts = [
  {
    id: '1',
    name: 'Curved Sofa',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
    designer: 'Paolo Rossi',
    category: 'furniture',
    isNew: true
  },
  {
    id: '2',
    name: 'Pendant Light',
    price: 599,
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    designer: 'Studio Milano',
    category: 'lighting',
    isNew: true
  },
  {
    id: '3',
    name: 'Wooden Dining Table',
    price: 1899,
    image: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    designer: 'Artisan Collective',
    category: 'furniture'
  },
  {
    id: '4',
    name: 'Lounge Chair',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    designer: 'Design House',
    category: 'furniture'
  },
  {
    id: '5',
    name: 'Ceramic Vase Set',
    price: 349,
    image: 'https://images.unsplash.com/photo-1612196808214-b7e239e5f5a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    designer: 'Terra Studios',
    category: 'decor'
  },
  {
    id: '6',
    name: 'Wall Mirror',
    price: 799,
    image: 'https://images.unsplash.com/photo-1618220252344-8ec99ec624b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    designer: 'Glass Artisans',
    category: 'decor'
  },
  {
    id: '7',
    name: 'Bookshelf',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1588279102920-e8631ffaec0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    designer: 'Modern Living',
    category: 'furniture'
  },
  {
    id: '8',
    name: 'Floor Lamp',
    price: 459,
    image: 'https://images.unsplash.com/photo-1543198126-a8ad8e47fb22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    designer: 'Illumina',
    category: 'lighting'
  },
  {
    id: '9',
    name: 'Vintage Armchair',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1519947486511-46149fa0a254?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
    designer: 'Retro Designs',
    category: 'vintage'
  },
  {
    id: '10',
    name: 'Vintage Table Lamp',
    price: 350,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    designer: 'Antique Lighting',
    category: 'vintage'
  },
  {
    id: '11',
    name: 'Vintage Cabinet',
    price: 1800,
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    designer: 'Heritage Collection',
    category: 'vintage'
  },
  {
    id: '12',
    name: 'Modern Coffee Table',
    price: 899,
    image: 'https://images.unsplash.com/photo-1532372576444-dda954194ad0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    designer: 'Contemporary Design',
    category: 'furniture'
  }
];

// Category titles mapping
const categoryTitles: { [key: string]: string } = {
  furniture: 'Furniture',
  lighting: 'Lighting',
  decor: 'Home Decor',
  vintage: 'Vintage Collection',
  new: 'New Arrivals'
};

// Category descriptions
const categoryDescriptions: { [key: string]: string } = {
  furniture: 'Discover our curated collection of exceptional furniture pieces, from sofas and chairs to tables and storage solutions.',
  lighting: 'Illuminate your space with our selection of designer lighting, including pendant lights, floor lamps, and table lamps.',
  decor: 'Add the finishing touches to your home with our carefully selected decor items, from vases and mirrors to textiles and art.',
  vintage: 'Explore our collection of unique vintage pieces with character and history, carefully restored to their former glory.',
  new: 'Be the first to discover our latest arrivals, featuring the newest designs and collections from renowned and emerging designers.'
};

const CategoryPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [sortBy, setSortBy] = useState('featured');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [selectedDesigners, setSelectedDesigners] = useState<string[]>([]);

  // Get all unique designers
  const designers = [...new Set(allProducts.map(product => product.designer))];

  // Filter products by category
  const products = id 
    ? (id === 'new' 
        ? allProducts.filter(product => product.isNew) 
        : allProducts.filter(product => product.category === id))
    : allProducts;

  // Sort products
  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === 'price-low') {
      return a.price - b.price;
    } else if (sortBy === 'price-high') {
      return b.price - a.price;
    }
    // Default: featured
    return 0;
  });

  const toggleDesigner = (designer: string) => {
    if (selectedDesigners.includes(designer)) {
      setSelectedDesigners(selectedDesigners.filter(d => d !== designer));
    } else {
      setSelectedDesigners([...selectedDesigners, designer]);
    }
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = parseInt(e.target.value);
    const newRange = [...priceRange] as [number, number];
    newRange[index] = value;
    setPriceRange(newRange);
  };

  const clearFilters = () => {
    setPriceRange([0, 5000]);
    setSelectedDesigners([]);
  };

  const categoryTitle = id ? categoryTitles[id] || 'Products' : 'All Products';
  const categoryDescription = id ? categoryDescriptions[id] || '' : '';

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <nav className="mb-8">
        <ol className="flex text-sm">
          <li className="mr-2">
            <Link to="/" className="text-gray-500 hover:text-gray-700">Home</Link>
          </li>
          <li className="mx-2 text-gray-500">/</li>
          <li className="text-gray-900">{categoryTitle}</li>
        </ol>
      </nav>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{categoryTitle}</h1>
        {categoryDescription && (
          <p className="text-gray-600 max-w-3xl">{categoryDescription}</p>
        )}
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters - Desktop */}
        <div className="hidden lg:block w-64 flex-shrink-0">
          <div className="sticky top-24">
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-3">Price Range</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">€{priceRange[0]}</span>
                  <span className="text-sm text-gray-600">€{priceRange[1]}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="5000"
                  value={priceRange[0]}
                  onChange={(e) => handlePriceChange(e, 0)}
                  className="w-full"
                />
                <input
                  type="range"
                  min="0"
                  max="5000"
                  value={priceRange[1]}
                  onChange={(e) => handlePriceChange(e, 1)}
                  className="w-full"
                />
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-medium mb-3">Designer</h3>
              <div className="space-y-2">
                {designers.map((designer) => (
                  <div key={designer} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`designer-${designer}`}
                      checked={selectedDesigners.includes(designer)}
                      onChange={() => toggleDesigner(designer)}
                      className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                    />
                    <label htmlFor={`designer-${designer}`} className="ml-2 text-sm text-gray-600">
                      {designer}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={clearFilters}
              className="text-sm text-gray-600 hover:text-gray-900 underline"
            >
              Clear all filters
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-grow">
          {/* Sort and Filter Controls */}
          <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
            <button
              onClick={() => setFiltersOpen(true)}
              className="lg:hidden flex items-center text-gray-700"
            >
              <Filter size={18} className="mr-2" />
              Filters
            </button>

            <div className="flex items-center">
              <span className="text-sm text-gray-600 mr-2">Sort by:</span>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-md py-1.5 pl-3 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
                <ChevronDown size={16} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
            {sortedProducts.map((product) => (
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

          {/* Empty state */}
          {sortedProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 mb-4">No products found matching your criteria.</p>
              <button
                onClick={clearFilters}
                className="text-black underline hover:text-gray-700"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Filters Drawer */}
      {filtersOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setFiltersOpen(false)}></div>
          <div className="absolute inset-y-0 right-0 max-w-full flex">
            <div className="relative w-screen max-w-md">
              <div className="h-full flex flex-col bg-white shadow-xl overflow-y-auto">
                <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
                  <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                  <button
                    onClick={() => setFiltersOpen(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="p-4">
                  <div className="mb-6">
                    <h3 className="text-lg font-medium mb-3">Price Range</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">€{priceRange[0]}</span>
                        <span className="text-sm text-gray-600">€{priceRange[1]}</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="5000"
                        value={priceRange[0]}
                        onChange={(e) => handlePriceChange(e, 0)}
                        className="w-full"
                      />
                      <input
                        type="range"
                        min="0"
                        max="5000"
                        value={priceRange[1]}
                        onChange={(e) => handlePriceChange(e, 1)}
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-medium mb-3">Designer</h3>
                    <div className="space-y-2">
                      {designers.map((designer) => (
                        <div key={designer} className="flex items-center">
                          <input
                            type="checkbox"
                            id={`mobile-designer-${designer}`}
                            checked={selectedDesigners.includes(designer)}
                            onChange={() => toggleDesigner(designer)}
                            className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                          />
                          <label htmlFor={`mobile-designer-${designer}`} className="ml-2 text-sm text-gray-600">
                            {designer}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between pt-4 border-t border-gray-200">
                    <button
                      onClick={clearFilters}
                      className="text-sm text-gray-600 hover:text-gray-900 underline"
                    >
                      Clear all
                    </button>
                    <button
                      onClick={() => setFiltersOpen(false)}
                      className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
                    >
                      Apply Filters
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;