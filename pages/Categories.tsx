
import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Category, Product } from '../types';
import { PRODUCTS } from '../constants';
// Fixed: Removed unused MessageCircle import
import { Search, Filter } from 'lucide-react';

const Categories: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialFilter = searchParams.get('filter') as Category || 'All';
  
  const [activeCategory, setActiveCategory] = useState<string>(initialFilter);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', ...Object.values(Category)];

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesCat = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-stone-800 mb-4">Furniture Showroom</h1>
        <p className="text-stone-600 max-w-2xl">Browse our standard collections or use them as inspiration for your custom pieces.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="lg:w-64 flex-shrink-0">
          <div className="sticky top-24 space-y-8">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-stone-400 mb-4 flex items-center">
                <Filter size={16} className="mr-2" /> Categories
              </h3>
              <div className="space-y-2">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`block w-full text-left px-3 py-2 rounded-md transition ${
                      activeCategory === cat 
                        ? 'bg-orange-800 text-white font-medium' 
                        : 'text-stone-600 hover:bg-stone-100'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-stone-100 p-6 rounded-xl">
              <h4 className="font-bold mb-2">Can't find what you need?</h4>
              <p className="text-sm text-stone-600 mb-4">We make custom furniture to fit your exact space and style.</p>
              <Link to="/custom-order" className="text-orange-800 font-bold text-sm hover:underline">
                Request Custom Piece →
              </Link>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-grow">
          <div className="relative mb-8">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-orange-800/20"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={20} />
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map(product => (
                <div key={product.id} className="group bg-white rounded-xl shadow-sm border border-stone-100 overflow-hidden hover:shadow-xl transition-shadow">
                  <Link to={`/product/${product.id}`} className="block relative aspect-square overflow-hidden">
                    <img 
                      src={product.images[0]} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-2 py-1 rounded text-xs font-bold text-stone-800">
                      {product.category}
                    </div>
                  </Link>
                  <div className="p-5">
                    <Link to={`/product/${product.id}`}>
                      <h3 className="text-lg font-bold text-stone-800 mb-1 group-hover:text-orange-800 transition-colors">
                        {product.name}
                      </h3>
                    </Link>
                    <p className="text-stone-500 text-sm mb-4 line-clamp-2">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-orange-800 font-bold">
                        From PKR {product.priceStart.toLocaleString()}
                      </p>
                      <Link 
                        to={`/product/${product.id}`}
                        className="text-stone-400 hover:text-stone-900 transition"
                      >
                        <ArrowRight size={20} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-stone-50 rounded-2xl border-2 border-dashed border-stone-200">
              <p className="text-stone-500">No products found matching your search.</p>
              <button 
                onClick={() => {setActiveCategory('All'); setSearchQuery('');}}
                className="text-orange-800 font-bold mt-2 hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ArrowRight = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export default Categories;
