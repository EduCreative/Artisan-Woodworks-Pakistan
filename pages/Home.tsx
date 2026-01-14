
import React from 'react';
import { Link } from 'react-router-dom';
// Fixed: Added MessageCircle to imports
import { ArrowRight, Star, PenTool, ShieldCheck, Truck, MessageCircle } from 'lucide-react';
import { Category } from '../types';
import { WHATSAPP_LINK } from '../constants';

const Home: React.FC = () => {
  const categories = [
    { name: Category.LivingRoom, image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800', desc: 'Comfort & Style' },
    { name: Category.Bedroom, image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800', desc: 'Restful Sleep' },
    { name: Category.Office, image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800', desc: 'Productive Spaces' },
    { name: Category.Dining, image: 'https://images.unsplash.com/photo-1617806118233-18e167400e61?auto=format&fit=crop&q=80&w=800', desc: 'Family Gatherings' },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581539250439-c96689b516dd?auto=format&fit=crop&q=80&w=1920" 
            className="w-full h-full object-cover brightness-50"
            alt="Craftsmanship"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-7xl font-bold mb-6 animate-fade-in">
            Handcrafted <br />
            <span className="text-orange-400">Timeless Furniture</span>
          </h1>
          <p className="text-base md:text-xl max-w-2xl mb-8 text-stone-200">
            From our workshop in Pakistan to your home. We specialize in custom woodwork that blends traditional Pakistani artistry with modern functionality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={WHATSAPP_LINK} 
              className="bg-orange-700 hover:bg-orange-800 text-white px-6 md:px-8 py-3 md:py-4 rounded-md font-semibold text-center transition flex items-center justify-center space-x-2"
            >
              <MessageCircle size={20} />
              <span>Get Free Quote</span>
            </a>
            <Link 
              to="/categories" 
              className="bg-white hover:bg-stone-100 text-stone-900 px-6 md:px-8 py-3 md:py-4 rounded-md font-semibold text-center transition"
            >
              Explore Showroom
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-stone-800 mb-2">Our Collections</h2>
              <p className="text-stone-500">Curated pieces for every corner of your life.</p>
            </div>
            <Link to="/categories" className="hidden sm:flex items-center text-orange-800 font-semibold hover:underline">
              View All <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <Link 
                key={cat.name} 
                to={`/categories?filter=${cat.name}`}
                className="group relative h-80 overflow-hidden rounded-xl shadow-lg"
              >
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-sm text-orange-300 font-medium mb-1 uppercase tracking-wider">{cat.desc}</p>
                  <h3 className="text-2xl font-bold">{cat.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-stone-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-16">Why Artisan Woodworks?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-orange-100 text-orange-800 rounded-full flex items-center justify-center mb-6">
                <Star size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Quality Material</h3>
              <p className="text-stone-600">We use premium Sheesham, Walnut, and Mahogany wood sourced from sustainable forests.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-orange-100 text-orange-800 rounded-full flex items-center justify-center mb-6">
                <PenTool size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Custom Designs</h3>
              <p className="text-stone-600">Your vision, our hands. We specialize in bespoke furniture tailored to your specific measurements.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-orange-100 text-orange-800 rounded-full flex items-center justify-center mb-6">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Lifetime Promise</h3>
              <p className="text-stone-600">Our joinery is built to last generations. We offer structural warranties on all solid wood items.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-stone-900 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Have a custom idea in mind?</h2>
          <p className="text-lg text-stone-400 mb-10">
            Share your reference images or sketches with us. We'll provide a free consultation and estimate.
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              to="/custom-order" 
              className="bg-orange-700 hover:bg-orange-800 text-white px-10 py-4 rounded-md font-semibold transition"
            >
              Start Custom Inquiry
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
