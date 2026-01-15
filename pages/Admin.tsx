
import React, { useState, useEffect } from 'react';
import { ProductService } from '../services/ProductService';
import { Product, Category } from '../types';
import { Plus, Edit2, Trash2, Save, X, Package, DollarSign, Image as ImageIcon, Video } from 'lucide-react';

const Admin: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [currentProduct, setCurrentProduct] = useState<Partial<Product>>({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  useEffect(() => {
    setProducts(ProductService.getProducts());
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') { // Simple simulation, replace with real auth later
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password');
    }
  };

  const handleEdit = (product: Product) => {
    setCurrentProduct(product);
    setIsEditing(true);
  };

  const handleAddNew = () => {
    setCurrentProduct({
      id: Date.now().toString(),
      name: '',
      category: Category.LivingRoom,
      description: '',
      priceStart: 0,
      materials: [],
      dimensions: { l: 0, w: 0, h: 0, unit: 'inches' },
      deliveryWeeks: 2,
      images: [''],
      videoUrl: ''
    });
    setIsEditing(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      ProductService.deleteProduct(id);
      setProducts(ProductService.getProducts());
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    ProductService.saveProduct(currentProduct as Product);
    setProducts(ProductService.getProducts());
    setIsEditing(false);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <form onSubmit={handleLogin} className="bg-white p-8 rounded-2xl shadow-xl border border-stone-100 w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center font-serif">Workshop Admin Access</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-stone-700 mb-2">Admin Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-orange-800/20 outline-none"
                placeholder="Enter password..."
              />
            </div>
            <button type="submit" className="w-full bg-stone-900 text-white py-3 rounded-xl font-bold hover:bg-stone-800 transition">
              Login to Dashboard
            </button>
            <p className="text-center text-xs text-stone-400">Default password is 'admin123'</p>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-stone-900 font-serif">Inventory Manager</h1>
          <p className="text-stone-500">Manage showroom products and prices</p>
        </div>
        <button 
          onClick={handleAddNew}
          className="bg-orange-800 text-white px-6 py-3 rounded-xl font-bold flex items-center space-x-2 hover:bg-orange-900 transition shadow-lg shadow-orange-900/10"
        >
          <Plus size={20} />
          <span>Add New Piece</span>
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-stone-50 border-b border-stone-100">
              <tr>
                <th className="px-6 py-4 text-sm font-bold text-stone-500 uppercase tracking-wider">Product</th>
                <th className="px-6 py-4 text-sm font-bold text-stone-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-4 text-sm font-bold text-stone-500 uppercase tracking-wider">Price (PKR)</th>
                <th className="px-6 py-4 text-sm font-bold text-stone-500 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {products.map(product => (
                <tr key={product.id} className="hover:bg-stone-50/50 transition">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-4">
                      <img src={product.images[0]} alt="" className="w-12 h-12 rounded-lg object-cover bg-stone-100" />
                      <span className="font-bold text-stone-900">{product.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm bg-stone-100 px-2 py-1 rounded text-stone-600">{product.category}</span>
                  </td>
                  <td className="px-6 py-4 font-mono text-orange-800 font-bold">
                    {product.priceStart.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end space-x-2">
                      <button onClick={() => handleEdit(product)} className="p-2 text-stone-400 hover:text-orange-800 transition">
                        <Edit2 size={18} />
                      </button>
                      <button onClick={() => handleDelete(product.id)} className="p-2 text-stone-400 hover:text-red-600 transition">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isEditing && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm" onClick={() => setIsEditing(false)}></div>
          <form onSubmit={handleSave} className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden animate-slide-up">
            <div className="p-6 border-b border-stone-100 flex justify-between items-center bg-stone-50">
              <h2 className="text-xl font-bold font-serif">Edit Furniture Piece</h2>
              <button type="button" onClick={() => setIsEditing(false)} className="text-stone-400 hover:text-stone-900">
                <X size={24} />
              </button>
            </div>
            
            <div className="p-8 space-y-6 max-h-[70vh] overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-2">Product Name</label>
                  <input 
                    type="text"
                    required
                    value={currentProduct.name}
                    onChange={(e) => setCurrentProduct({...currentProduct, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 outline-none focus:bg-white focus:ring-2 focus:ring-orange-800/20 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-2">Category</label>
                  <select 
                    value={currentProduct.category}
                    onChange={(e) => setCurrentProduct({...currentProduct, category: e.target.value as Category})}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 outline-none focus:bg-white focus:ring-2 focus:ring-orange-800/20 transition"
                  >
                    {Object.values(Category).map(cat => <option key={cat} value={cat}>{cat}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-stone-700 mb-2">Description</label>
                <textarea 
                  required
                  rows={3}
                  value={currentProduct.description}
                  onChange={(e) => setCurrentProduct({...currentProduct, description: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 outline-none focus:bg-white focus:ring-2 focus:ring-orange-800/20 transition resize-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-2 flex items-center">
                    <DollarSign size={14} className="mr-1" /> Starting Price (PKR)
                  </label>
                  <input 
                    type="number"
                    required
                    value={currentProduct.priceStart}
                    onChange={(e) => setCurrentProduct({...currentProduct, priceStart: parseInt(e.target.value)})}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 outline-none focus:bg-white focus:ring-2 focus:ring-orange-800/20 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-2 flex items-center">
                    <Package size={14} className="mr-1" /> Delivery Time (Weeks)
                  </label>
                  <input 
                    type="number"
                    required
                    value={currentProduct.deliveryWeeks}
                    onChange={(e) => setCurrentProduct({...currentProduct, deliveryWeeks: parseInt(e.target.value)})}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 outline-none focus:bg-white focus:ring-2 focus:ring-orange-800/20 transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-2 flex items-center">
                    <ImageIcon size={14} className="mr-1" /> Image URL
                  </label>
                  <input 
                    type="text"
                    required
                    value={currentProduct.images?.[0]}
                    onChange={(e) => setCurrentProduct({...currentProduct, images: [e.target.value]})}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 outline-none focus:bg-white focus:ring-2 focus:ring-orange-800/20 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-2 flex items-center">
                    <Video size={14} className="mr-1" /> Video URL (Optional)
                  </label>
                  <input 
                    type="text"
                    value={currentProduct.videoUrl || ''}
                    onChange={(e) => setCurrentProduct({...currentProduct, videoUrl: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 outline-none focus:bg-white focus:ring-2 focus:ring-orange-800/20 transition"
                    placeholder="Direct .mp4 link..."
                  />
                </div>
              </div>
            </div>

            <div className="p-6 bg-stone-50 border-t border-stone-100 flex justify-end space-x-3">
              <button 
                type="button" 
                onClick={() => setIsEditing(false)}
                className="px-6 py-2 text-stone-600 font-bold hover:text-stone-900 transition"
              >
                Cancel
              </button>
              <button 
                type="submit"
                className="bg-orange-800 text-white px-8 py-2 rounded-xl font-bold hover:bg-orange-900 transition shadow-lg shadow-orange-900/10 flex items-center space-x-2"
              >
                <Save size={18} />
                <span>Save Changes</span>
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Admin;
