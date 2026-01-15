import React, { useState, useEffect } from 'react';
// @ts-ignore - Bypassing environment-specific type resolution issues
import { useParams, Link } from 'react-router-dom';
import { ProductService } from '../services/ProductService';
import { WHATSAPP_NUMBER } from '../constants';
import { Product } from '../types';
import { MessageCircle, ArrowLeft, Truck, Shield, Ruler, Box, Share2, Check, Play } from 'lucide-react';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [activeImage, setActiveImage] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const p = ProductService.getProductById(id || '');
    if (p) {
      setProduct(p);
      setActiveImage(p.images[0]);
    }
  }, [id]);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4 font-serif">Product Not Found</h2>
        <Link to="/categories" className="text-orange-800 hover:underline">Return to showroom</Link>
      </div>
    );
  }

  const handleShare = async () => {
    const shareData = {
      title: `${product.name} | Artisan Woodworks`,
      text: `Check out this beautiful ${product.name} from Artisan Woodworks Pakistan!`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy text: ', err);
      }
    }
  };

  const whatsappMessage = encodeURIComponent(`Hi, I'm interested in the ${product.name} (Ref: ${product.id}). Could you provide more details?`);
  const inquiryLink = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${whatsappMessage}`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Link to="/categories" className="inline-flex items-center text-stone-500 hover:text-orange-800 mb-8 transition-colors group">
        <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Catalog
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        {/* Images & Video Container */}
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-stone-50 shadow-inner border border-stone-100">
              <img 
                src={activeImage} 
                alt={product.name} 
                className="w-full h-full object-cover transition-opacity duration-500"
              />
            </div>
            <div className="grid grid-cols-4 gap-3 sm:gap-4">
              {product.images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`aspect-square rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                    activeImage === img ? 'border-orange-800 scale-95 shadow-md' : 'border-stone-100 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`${product.name} ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Video Section */}
          {product.videoUrl && (
            <div className="pt-6 border-t border-stone-100">
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-orange-100 p-2 rounded-lg text-orange-800">
                  <Play size={18} fill="currentColor" />
                </div>
                <h3 className="font-bold text-stone-800 font-serif">Product Showcase</h3>
              </div>
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-stone-900 shadow-xl group border border-stone-100">
                <video 
                  src={product.videoUrl} 
                  controls 
                  className="w-full h-full object-cover"
                  poster={product.images[0]}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <p className="text-xs text-stone-400 mt-2 italic">
                See the fine carving and grain details in motion.
              </p>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="space-y-8 lg:pt-4">
          <div className="flex justify-between items-start gap-4">
            <div className="flex-grow">
              <span className="text-xs font-bold text-orange-800 uppercase tracking-widest bg-orange-50 px-2 py-1 rounded">
                {product.category}
              </span>
              <h1 className="text-3xl sm:text-5xl font-bold text-stone-900 mt-3 font-serif leading-tight">{product.name}</h1>
              <p className="text-2xl sm:text-3xl font-light text-stone-600 mt-4">Starting from <span className="text-stone-900 font-medium">PKR {product.priceStart.toLocaleString()}</span></p>
            </div>
            <button 
              onClick={handleShare}
              className="p-3 rounded-full bg-stone-50 text-stone-500 hover:bg-stone-100 hover:text-stone-900 transition-all relative group shadow-sm active:scale-90"
              aria-label="Share Product"
            >
              {copied ? <Check size={20} className="text-green-600" /> : <Share2 size={20} />}
              <span className={`absolute -top-10 left-1/2 -translate-x-1/2 bg-stone-900 text-white text-[10px] py-1 px-3 rounded-md opacity-0 transition-opacity whitespace-nowrap pointer-events-none ${copied ? 'opacity-100' : ''}`}>
                Link Copied!
              </span>
            </button>
          </div>

          <p className="text-stone-600 leading-relaxed text-base sm:text-lg">{product.description}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-8 border-y border-stone-100">
            <div className="flex items-start space-x-4">
              <div className="text-orange-800 mt-1 bg-orange-50 p-2 rounded-lg"><Box size={20} /></div>
              <div>
                <h4 className="font-bold text-stone-800 text-sm">Materials</h4>
                <p className="text-sm text-stone-500">{product.materials.join(', ')}</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-orange-800 mt-1 bg-orange-50 p-2 rounded-lg"><Ruler size={20} /></div>
              <div>
                <h4 className="font-bold text-stone-800 text-sm">Dimensions</h4>
                <p className="text-sm text-stone-500">
                  {product.dimensions.l}L x {product.dimensions.w}W x {product.dimensions.h}H {product.dimensions.unit}
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-orange-800 mt-1 bg-orange-50 p-2 rounded-lg"><Truck size={20} /></div>
              <div>
                <h4 className="font-bold text-stone-800 text-sm">Delivery Time</h4>
                <p className="text-sm text-stone-500">Approx. {product.deliveryWeeks} weeks</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-orange-800 mt-1 bg-orange-50 p-2 rounded-lg"><Shield size={20} /></div>
              <div>
                <h4 className="font-bold text-stone-800 text-sm">Guarantee</h4>
                <p className="text-sm text-stone-500">5 Year Structural Warranty</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href={inquiryLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-grow bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-bold text-center flex items-center justify-center space-x-3 transition-all shadow-lg shadow-green-100 active:scale-[0.98]"
            >
              <MessageCircle size={24} />
              <span>Inquire on WhatsApp</span>
            </a>
            <Link 
              to="/custom-order"
              className="px-8 py-4 border-2 border-stone-200 rounded-xl font-bold text-stone-700 hover:bg-stone-50 hover:border-stone-300 transition-all text-center"
            >
              Customize This
            </Link>
          </div>
          
          <div className="bg-stone-50 p-4 rounded-xl border border-stone-100">
             <p className="text-xs text-stone-500 leading-relaxed italic">
              * Final prices are subject to material selection and specific finishing requests. We offer free consultation in Hyderabad.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;