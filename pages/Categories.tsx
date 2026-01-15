
import React, { useState, useEffect } from 'react';
// @ts-ignore
import { useSearchParams, Link } from 'react-router-dom';
import { Category, Product } from '../types';
import { ProductService } from '../services/ProductService';
import { WHATSAPP_NUMBER } from '../constants';
// Added Hammer to imports to fix "Cannot find name Hammer" error.
import { Search, Filter, Eye, X, MessageCircle, ArrowRight, Grid, List, Hammer } from 'lucide-react';

const Categories: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialFilter = searchParams.get('filter') as Category || 'All';
  
  const [products, setProducts] = useState<Product[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>(initialFilter);
  const [searchQuery, setSearchQuery] = useState('');
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  useEffect(() => {
    const loadProducts = () => setProducts(ProductService.getProducts());
    loadProducts();
    window.addEventListener('productsUpdated', loadProducts);
    return () => window.removeEventListener('productsUpdated', loadProducts);
  }, []);

  const categories = ['All', ...Object.values(Category)];

  const filteredProducts = products.filter(p => {
    const matchesCat = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const closeQuickView = () => setQuickViewProduct(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold text-stone-800 dark:text-stone-100 mb-4 font-serif">Showroom</h1>
        <p className="text-stone-600 dark:text-stone-400 max-w-2xl font-light">Explore our artisanal collection of ready-made pieces, crafted with the same precision as our custom orders.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Sidebar Filters with Glassmorphism */}
        <aside className="lg:w-72 flex-shrink-0">
          <div className="sticky top-24 space-y-8 animate-fade-in-up">
            <div className="glass p-8 rounded-3xl shadow-sm border border-stone-200 dark:border-stone-800">
              <h3 className="text-xs font-bold uppercase tracking-widest text-stone-400 dark:text-stone-500 mb-6 flex items-center">
                <Filter size={14} className="mr-2" /> Filter by Collection
              </h3>
              <div className="space-y-2">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`group block w-full text-left px-4 py-3 rounded-xl transition-all duration-300 ${
                      activeCategory === cat 
                        ? 'bg-orange-800 text-white font-bold shadow-lg shadow-orange-950/20 translate-x-1' 
                        : 'text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800/50 hover:text-stone-900 dark:hover:text-stone-200'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span>{cat}</span>
                      {activeCategory === cat && <div className="w-1.5 h-1.5 rounded-full bg-white"></div>}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-stone-900 dark:bg-stone-800 text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition-transform duration-500">
                <Hammer size={80} />
              </div>
              <h4 className="font-bold text-xl mb-3 relative z-10">Bespoke Design</h4>
              <p className="text-xs text-stone-400 mb-6 leading-relaxed relative z-10">Can't find the perfect piece? We'll craft it specifically for your home dimensions.</p>
              <Link to="/custom-order" className="bg-orange-800 hover:bg-orange-700 text-white text-xs px-6 py-3 rounded-xl font-bold transition-all inline-flex items-center relative z-10 active:scale-95 shadow-lg">
                Start Custom Request <ArrowRight size={14} className="ml-2" />
              </Link>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-grow">
          <div className="flex flex-col sm:flex-row gap-4 mb-10 items-center justify-between">
            <div className="relative w-full max-w-lg">
              <input
                type="text"
                placeholder="Search showroom..."
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-orange-800/20 shadow-sm transition-all hover:shadow-md"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={20} />
            </div>
            
            <div className="flex items-center space-x-2 bg-stone-100 dark:bg-stone-900 p-1.5 rounded-xl border border-stone-200 dark:border-stone-800">
               <button className="p-2 rounded-lg bg-white dark:bg-stone-800 shadow-sm text-orange-800 dark:text-orange-400"><Grid size={18} /></button>
               <button className="p-2 rounded-lg text-stone-400 hover:bg-white dark:hover:bg-stone-800 transition-all"><List size={18} /></button>
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, idx) => (
                <div 
                  key={product.id} 
                  className="group bg-white dark:bg-stone-900 rounded-[2rem] shadow-sm border border-stone-100 dark:border-stone-800 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="relative aspect-[10/11] overflow-hidden bg-stone-50 dark:bg-stone-800">
                    <img 
                      src={product.images[0]} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute top-5 left-5 z-10">
                      <span className="bg-white/90 dark:bg-stone-900/90 backdrop-blur px-3 py-1.5 rounded-xl text-[10px] font-bold text-stone-800 dark:text-stone-100 shadow-sm border border-stone-100/50 dark:border-stone-700/50 uppercase tracking-widest">
                        {product.category}
                      </span>
                    </div>
                    
                    <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <button 
                        onClick={() => setQuickViewProduct(product)}
                        className="bg-white text-stone-950 px-6 py-3 rounded-2xl font-bold flex items-center space-x-2 transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 shadow-2xl active:scale-95"
                      >
                        <Eye size={18} />
                        <span>Quick View</span>
                      </button>
                    </div>
                  </div>
                  <div className="p-8">
                    <Link to={`/product/${product.id}`}>
                      <h3 className="text-xl font-bold text-stone-900 dark:text-white mb-2 group-hover:text-orange-800 dark:group-hover:text-orange-400 transition-colors line-clamp-1 font-serif">
                        {product.name}
                      </h3>
                    </Link>
                    <p className="text-stone-500 dark:text-stone-400 text-sm mb-6 line-clamp-2 h-10 font-light leading-relaxed">{product.description}</p>
                    <div className="flex items-center justify-between pt-6 border-t border-stone-50 dark:border-stone-800">
                      <div>
                        <p className="text-[10px] text-stone-400 dark:text-stone-500 uppercase tracking-tighter font-bold">Starts at</p>
                        <p className="text-orange-800 dark:text-orange-400 font-bold text-lg">
                          PKR {product.priceStart.toLocaleString()}
                        </p>
                      </div>
                      <Link 
                        to={`/product/${product.id}`}
                        className="bg-stone-100 dark:bg-stone-800 hover:bg-orange-800 dark:hover:bg-orange-700 text-stone-500 dark:text-stone-400 hover:text-white transition-all p-3 rounded-2xl"
                        aria-label="View Details"
                      >
                        <ArrowRight size={20} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-24 bg-stone-50 dark:bg-stone-900/30 rounded-[3rem] border-2 border-dashed border-stone-200 dark:border-stone-800">
              <div className="bg-stone-100 dark:bg-stone-800 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                 <Search size={32} className="text-stone-400" />
              </div>
              <p className="text-stone-500 dark:text-stone-400 mb-4 font-bold">We couldn't find any products matching those criteria.</p>
              <button 
                onClick={() => {setActiveCategory('All'); setSearchQuery('');}}
                className="text-orange-800 dark:text-orange-400 font-bold hover:underline"
              >
                Reset Search Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Enhanced Quick View Modal with Glassmorphism */}
      {quickViewProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-stone-950/80 backdrop-blur-md animate-fade-in"
            onClick={closeQuickView}
          ></div>
          <div className="relative bg-white dark:bg-stone-900 w-full max-w-5xl max-h-[90vh] rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row animate-slide-up border border-stone-200 dark:border-stone-800">
            <button 
              onClick={closeQuickView}
              className="absolute top-6 right-6 z-20 glass dark:bg-stone-800/80 hover:bg-white dark:hover:bg-stone-700 p-2.5 rounded-2xl text-stone-800 dark:text-stone-100 transition-all shadow-lg active:scale-90"
              aria-label="Close"
            >
              <X size={24} />
            </button>
            
            <div className="w-full md:w-1/2 h-[40vh] md:h-auto relative">
              <img 
                src={quickViewProduct.images[0]} 
                alt={quickViewProduct.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/50 via-transparent to-transparent md:hidden"></div>
            </div>
            
            <div className="w-full md:w-1/2 p-10 sm:p-14 flex flex-col overflow-y-auto">
              <div className="flex-grow">
                <span className="text-[10px] font-bold text-orange-800 dark:text-orange-400 uppercase tracking-widest bg-orange-50 dark:bg-orange-950/30 px-3 py-1.5 rounded-xl border border-orange-100 dark:border-orange-900/30">{quickViewProduct.category}</span>
                <h2 className="text-3xl sm:text-5xl font-bold text-stone-900 dark:text-white mt-6 mb-4 font-serif">{quickViewProduct.name}</h2>
                <p className="text-2xl sm:text-3xl font-light text-stone-600 dark:text-stone-400 mb-8">PKR {quickViewProduct.priceStart.toLocaleString()}</p>
                <p className="text-stone-500 dark:text-stone-400 leading-relaxed mb-10 text-base sm:text-lg font-light">{quickViewProduct.description}</p>
                
                <div className="grid grid-cols-2 gap-6 mb-10">
                   <div className="p-5 bg-stone-50 dark:bg-stone-800 rounded-[1.5rem] border border-stone-100 dark:border-stone-700 shadow-sm">
                      <p className="text-[10px] uppercase text-stone-400 dark:text-stone-500 font-bold tracking-widest mb-2">Lead Time</p>
                      <p className="text-lg font-bold text-stone-800 dark:text-stone-100">{quickViewProduct.deliveryWeeks} Weeks</p>
                   </div>
                   <div className="p-5 bg-stone-50 dark:bg-stone-800 rounded-[1.5rem] border border-stone-100 dark:border-stone-700 shadow-sm">
                      <p className="text-[10px] uppercase text-stone-400 dark:text-stone-500 font-bold tracking-widest mb-2">Guarantee</p>
                      <p className="text-lg font-bold text-stone-800 dark:text-stone-100">5 Years</p>
                   </div>
                </div>
              </div>
              
              <div className="space-y-4 pt-8 border-t border-stone-100 dark:border-stone-800">
                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${encodeURIComponent(`Hi, I'm interested in the ${quickViewProduct.name} from your showroom.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-5 rounded-[1.5rem] font-bold text-center flex items-center justify-center space-x-3 transition-all shadow-xl shadow-green-900/10 active:scale-[0.98]"
                >
                  <MessageCircle size={22} />
                  <span>Inquire on WhatsApp</span>
                </a>
                <Link 
                  to={`/product/${quickViewProduct.id}`}
                  onClick={closeQuickView}
                  className="w-full bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 py-5 rounded-[1.5rem] font-bold text-center block hover:bg-stone-200 dark:hover:bg-stone-700 transition-all active:scale-[0.98]"
                >
                  Full Product Page
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { transform: translateY(50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-fade-in { animation: fade-in 0.6s ease-out forwards; }
        .animate-fade-in-up { animation: slide-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-slide-up { animation: slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}} />
    </div>
  );
};

export default Categories;
