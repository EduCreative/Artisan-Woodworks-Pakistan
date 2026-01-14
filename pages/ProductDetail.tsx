
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS, WHATSAPP_NUMBER } from '../constants';
import { MessageCircle, ArrowLeft, Truck, Shield, Ruler, Box } from 'lucide-react';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find(p => p.id === id);
  const [activeImage, setActiveImage] = useState(product?.images[0] || '');

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <Link to="/categories" className="text-orange-800 hover:underline">Return to showroom</Link>
      </div>
    );
  }

  const whatsappMessage = encodeURIComponent(`Hi, I'm interested in the ${product.name} (Ref: ${product.id}). Could you provide more details?`);
  const inquiryLink = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${whatsappMessage}`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link to="/categories" className="inline-flex items-center text-stone-500 hover:text-orange-800 mb-8 transition">
        <ArrowLeft size={16} className="mr-2" /> Back to Catalog
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Images */}
        <div className="space-y-4">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-stone-100">
            <img 
              src={activeImage} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((img, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveImage(img)}
                className={`aspect-square rounded-lg overflow-hidden border-2 transition ${
                  activeImage === img ? 'border-orange-800' : 'border-transparent'
                }`}
              >
                <img src={img} alt={`${product.name} ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="space-y-8">
          <div>
            <span className="text-sm font-bold text-orange-800 uppercase tracking-widest">{product.category}</span>
            <h1 className="text-4xl font-bold text-stone-900 mt-2">{product.name}</h1>
            <p className="text-3xl font-light text-stone-600 mt-4">Starting from PKR {product.priceStart.toLocaleString()}</p>
          </div>

          <p className="text-stone-600 leading-relaxed text-lg">{product.description}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-8 border-y border-stone-100">
            <div className="flex items-start space-x-4">
              <div className="text-orange-800 mt-1"><Box size={20} /></div>
              <div>
                <h4 className="font-bold text-stone-800">Materials</h4>
                <p className="text-sm text-stone-500">{product.materials.join(', ')}</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-orange-800 mt-1"><Ruler size={20} /></div>
              <div>
                <h4 className="font-bold text-stone-800">Dimensions</h4>
                <p className="text-sm text-stone-500">
                  {product.dimensions.l}L x {product.dimensions.w}W x {product.dimensions.h}H {product.dimensions.unit}
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-orange-800 mt-1"><Truck size={20} /></div>
              <div>
                <h4 className="font-bold text-stone-800">Delivery Time</h4>
                <p className="text-sm text-stone-500">Approx. {product.deliveryWeeks} weeks after order</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-orange-800 mt-1"><Shield size={20} /></div>
              <div>
                <h4 className="font-bold text-stone-800">Guarantee</h4>
                <p className="text-sm text-stone-500">5 Year Structural Warranty</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href={inquiryLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-grow bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-bold text-center flex items-center justify-center space-x-3 transition shadow-lg shadow-green-100"
            >
              <MessageCircle size={24} />
              <span>Inquire on WhatsApp</span>
            </a>
            <Link 
              to="/custom-order"
              className="px-8 py-4 border-2 border-stone-200 rounded-xl font-bold text-stone-700 hover:bg-stone-50 transition text-center"
            >
              Customize This
            </Link>
          </div>
          
          <p className="text-xs text-stone-400 italic text-center sm:text-left">
            * Prices may vary based on chosen materials and customizations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
