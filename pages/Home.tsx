
import React from 'react';
// @ts-ignore
import { Link } from 'react-router-dom';
import { ArrowRight, Star, PenTool, ShieldCheck, MessageCircle, Quote, Sparkles, Zap, Package } from 'lucide-react';
import { Category } from '../types';
import { WHATSAPP_LINK } from '../constants';

const ArtisanBadgeIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="currentColor" className={className}>
    {/* Hexagonal Shield */}
    <path d="M50 2L91.5 26V74L50 98L8.5 74V26L50 2Z" opacity="0.1" />
    <path d="M50 8L86 28.5V71.5L50 92L14 71.5V28.5L50 8Z" fill="none" stroke="currentColor" strokeWidth="2" />
    {/* Tools Motif */}
    <path d="M40 40L60 60 M60 40L40 60" stroke="currentColor" strokeWidth="6" strokeLinecap="round" opacity="0.4" />
    <rect x="25" y="44" width="50" height="12" rx="1" />
  </svg>
);

const Home: React.FC = () => {
  const categories = [
    { 
      name: Category.LivingRoom, 
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800', 
      desc: 'Comfort & Elegance',
      gridClass: 'md:col-span-2 md:row-span-2'
    },
    { 
      name: Category.Bedroom, 
      image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800', 
      desc: 'Dreamy Sanctuary',
      gridClass: 'md:col-span-1 md:row-span-1'
    },
    { 
      name: Category.Office, 
      image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800', 
      desc: 'Work in Style',
      gridClass: 'md:col-span-1 md:row-span-2'
    },
    { 
      name: Category.Dining, 
      image: 'https://images.unsplash.com/photo-1617806118233-18e167400e61?auto=format&fit=crop&q=80&w=800', 
      desc: 'Shared Moments',
      gridClass: 'md:col-span-1 md:row-span-1'
    },
  ];

  const testimonials = [
    {
      name: "Ahmed Raza",
      location: "Karachi",
      quote: "The Sheesham sofa set exceeded my expectations. Intricate carving and flawless finish.",
      rating: 5
    },
    {
      name: "Sobia Khan",
      location: "Lahore",
      quote: "Found a design on Pinterest and they made it exactly like the photo. Smooth process!",
      rating: 5
    },
    {
      name: "Dr. Faisal",
      location: "Hyderabad",
      quote: "Ordered a walnut desk for my clinic. Sturdy, elegant, and professional delivery.",
      rating: 5
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section with Enhanced Depth */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581539250439-c96689b516dd?auto=format&fit=crop&q=80&w=1920" 
            className="w-full h-full object-cover brightness-[0.4] dark:brightness-[0.3] scale-105 animate-slow-zoom"
            alt="Craftsmanship"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/20 via-transparent to-[#FDFCFB] dark:to-stone-950"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="animate-fade-in-up max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-orange-800/20 backdrop-blur-md px-4 py-1.5 rounded-full text-orange-400 text-xs font-bold uppercase tracking-widest mb-6 border border-orange-800/30">
              <Sparkles size={14} />
              <span>Premium Craftsmanship Since 2008</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black mb-6 leading-[1.1] font-serif">
              Artistry in <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-200">Solid Wood</span>
            </h1>
            <p className="text-base md:text-xl mb-10 text-stone-300 leading-relaxed font-light">
              Where heritage meets modernity. We craft timeless furniture that tells a story, tailored to your vision and built for generations.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <a 
                href={WHATSAPP_LINK} 
                className="group relative bg-orange-900 hover:bg-orange-800 text-white px-10 py-5 rounded-2xl font-black text-center transition-all duration-300 flex items-center justify-center space-x-2 overflow-hidden shadow-2xl shadow-orange-950/30"
              >
                <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
                <MessageCircle size={24} />
                <span>Get Free Consultation</span>
              </a>
              <Link 
                to="/categories" 
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border-2 border-white/30 px-10 py-5 rounded-2xl font-black text-center transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Explore Showroom</span>
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating Decorative Elements */}
        <div className="absolute bottom-20 right-[10%] hidden lg:block animate-float">
          <div className="glass p-8 rounded-[2.5rem] w-72 shadow-2xl relative">
             <div className="flex -space-x-4 mb-5">
               {[1,2,3,4].map(i => <div key={i} className="w-12 h-12 rounded-full border-4 border-white dark:border-stone-800 bg-stone-200 overflow-hidden shadow-lg"><img src={`https://i.pravatar.cc/100?u=${i}`} alt="" /></div>)}
               <div className="w-12 h-12 rounded-full border-4 border-white dark:border-stone-800 bg-orange-900 flex items-center justify-center text-white text-xs font-black shadow-lg">+99</div>
             </div>
             <p className="text-stone-900 dark:text-stone-100 text-base font-black">500+ Custom Projects Delivered</p>
             <div className="mt-3 flex items-center text-orange-600 dark:text-orange-400 space-x-1.5">
               {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
             </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Featured Categories */}
      <section className="py-32 px-4 bg-[#FDFCFB] dark:bg-stone-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-5xl md:text-6xl font-black text-stone-950 dark:text-stone-100 mb-6 font-serif tracking-tighter">Curated Masterpieces</h2>
              <p className="text-stone-500 dark:text-stone-400 text-lg font-light leading-relaxed">Transform your living space with our handcrafted collections designed for the discerning eye.</p>
            </div>
            <Link to="/categories" className="flex items-center text-orange-900 dark:text-orange-400 font-black tracking-widest uppercase text-sm hover:underline group px-6 py-3 rounded-2xl hover:bg-orange-50 dark:hover:bg-orange-950/10 transition-all border-2 border-transparent hover:border-orange-100 dark:hover:border-orange-900/30">
              View Entire Collection <ArrowRight size={20} className="ml-3 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-6 md:h-[1000px]">
            {categories.map((cat) => (
              <Link 
                key={cat.name} 
                to={`/categories?filter=${cat.name}`}
                className={`group relative overflow-hidden rounded-[3rem] bento-item ${cat.gridClass}`}
              >
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute bottom-10 left-10 right-10 text-white">
                  <span className="inline-block px-4 py-2 bg-orange-900/60 backdrop-blur-xl rounded-2xl text-xs font-black uppercase tracking-widest mb-4 border border-orange-800/40">
                    {cat.desc}
                  </span>
                  <h3 className="text-4xl font-black mb-4 font-serif">{cat.name}</h3>
                  <div className="flex items-center text-sm font-black tracking-[0.2em] uppercase text-orange-300 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    Explore Details <ArrowRight size={18} className="ml-3" />
                  </div>
                </div>
              </Link>
            ))}
            
            {/* CTA Bento Box */}
            <div className="md:col-span-1 md:row-span-1 bg-stone-900 dark:bg-stone-900 rounded-[3rem] p-10 flex flex-col justify-center items-center text-center bento-item border-2 border-stone-800 shadow-2xl relative overflow-hidden group">
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-orange-900/30 rounded-full blur-3xl group-hover:bg-orange-900/50 transition-all"></div>
              <Zap size={48} className="text-orange-500 mb-8 group-hover:scale-125 transition-transform" />
              <h4 className="text-2xl font-black text-white mb-3">Need it faster?</h4>
              <p className="text-stone-400 text-base mb-8 font-light">Explore our ready-to-ship inventory in Hyderabad.</p>
              <button className="bg-white text-stone-950 px-8 py-3 rounded-2xl text-sm font-black uppercase tracking-widest hover:bg-orange-900 hover:text-white transition-all shadow-xl">Check Stock</button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Bento Grid Style */}
      <section className="py-32 px-4 bg-stone-50 dark:bg-stone-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black mb-6 font-serif text-stone-950 dark:text-stone-100 tracking-tighter">The Artisan Edge</h2>
            <p className="text-stone-500 dark:text-stone-400 text-lg font-light">Quality without compromise, for every single joint and finish.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-2 bg-white dark:bg-stone-900 p-12 rounded-[3rem] shadow-sm border border-stone-100 dark:border-stone-800 hover:shadow-2xl transition-all group bento-item">
              <div className="w-16 h-16 bg-orange-50 dark:bg-orange-950/30 text-orange-900 dark:text-orange-400 rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform duration-500">
                <Star size={32} />
              </div>
              <h3 className="text-3xl font-black mb-5 text-stone-950 dark:text-white font-serif">Heirloom Quality</h3>
              <p className="text-stone-600 dark:text-stone-400 leading-relaxed text-lg font-light">We use premium solid woods like Sheesham and Walnut, treated for longevity and finished with eco-friendly stains that highlight natural grain patterns.</p>
            </div>
            
            <div className="md:col-span-2 bg-white dark:bg-stone-900 p-12 rounded-[3rem] shadow-sm border border-stone-100 dark:border-stone-800 hover:shadow-2xl transition-all group bento-item">
              <div className="w-16 h-16 bg-orange-50 dark:bg-orange-950/30 text-orange-900 dark:text-orange-400 rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform duration-500">
                <PenTool size={32} />
              </div>
              <h3 className="text-3xl font-black mb-5 text-stone-950 dark:text-white font-serif">Bespoke Design</h3>
              <p className="text-stone-600 dark:text-stone-400 leading-relaxed text-lg font-light">Your home is unique. That's why we offer end-to-end customization, from dimensions to handle styles, ensuring every piece fits your space perfectly.</p>
            </div>

            <div className="md:col-span-1 bg-orange-950 text-white p-10 rounded-[3rem] shadow-2xl bento-item flex flex-col justify-between group">
              <Zap size={40} className="group-hover:scale-110 transition-transform" />
              <div>
                <h4 className="font-black text-xl mb-3 uppercase tracking-widest">Swift Process</h4>
                <p className="text-orange-100 text-sm font-light">Modern efficiency meets traditional craft.</p>
              </div>
            </div>

            <div className="md:col-span-1 bg-white dark:bg-stone-900 p-10 rounded-[3rem] shadow-sm border border-stone-100 dark:border-stone-800 bento-item flex flex-col justify-between">
               <ShieldCheck size={40} className="text-green-600" />
               <div>
                <h4 className="font-black text-stone-950 dark:text-white text-xl mb-3 uppercase tracking-widest">Lifetime Guarantee</h4>
                <p className="text-stone-500 dark:text-stone-400 text-sm font-light">On all structural wood joints.</p>
              </div>
            </div>

            <div className="md:col-span-2 bg-stone-950 text-white p-10 rounded-[3rem] shadow-2xl bento-item flex items-center space-x-8 border-2 border-stone-800">
              <div className="w-20 h-20 rounded-3xl bg-orange-900 flex items-center justify-center flex-shrink-0 shadow-xl">
                <Package size={36} />
              </div>
              <div>
                <h4 className="font-black text-2xl mb-2 font-serif">Local Delivery</h4>
                <p className="text-stone-400 text-base font-light">Professional setup across Hyderabad & Karachi.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials with Glassmorphism */}
      <section className="py-32 px-4 bg-white dark:bg-stone-950 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[800px] bg-orange-900/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-stone-950 dark:text-stone-100 mb-6 font-serif tracking-tighter">Kind Words</h2>
            <div className="w-24 h-1.5 bg-orange-900 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((t, idx) => (
              <div key={idx} className="glass p-12 rounded-[3.5rem] shadow-sm hover:shadow-2xl transition-all duration-700 relative group bento-item border-2 border-transparent hover:border-orange-100/20">
                <div className="text-orange-900/10 dark:text-stone-800/30 absolute -top-8 -right-8 group-hover:scale-110 transition-transform">
                  <Quote size={120} />
                </div>
                <div className="flex mb-8">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-orange-500 fill-orange-500 mr-1.5" />
                  ))}
                </div>
                <p className="text-stone-700 dark:text-stone-300 italic mb-10 leading-relaxed relative z-10 text-xl font-light">"{t.quote}"</p>
                <div className="flex items-center space-x-5">
                  <div className="w-14 h-14 rounded-2xl bg-orange-900 flex items-center justify-center font-black text-white text-xl shadow-lg">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-black text-stone-950 dark:text-white text-lg leading-tight">{t.name}</h4>
                    <p className="text-stone-500 dark:text-stone-400 text-xs uppercase tracking-[0.2em] font-bold mt-1">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern CTA */}
      <section className="py-32 px-4 bg-[#FDFCFB] dark:bg-stone-950">
        <div className="max-w-6xl mx-auto">
          <div className="bg-stone-950 rounded-[4rem] p-16 md:p-28 text-center relative overflow-hidden shadow-2xl border-2 border-stone-800">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
               <div className="grid grid-cols-6 gap-10">
                {[...Array(30)].map((_, i) => <ArtisanBadgeIcon key={i} className="w-24 h-24 rotate-12 text-white" />)}
              </div>
            </div>
            <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-orange-900/40 rounded-full blur-[100px]"></div>
            <div className="absolute -top-32 -right-32 w-80 h-80 bg-orange-900/40 rounded-full blur-[100px]"></div>
            
            <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl font-black mb-10 font-serif text-white tracking-tighter leading-tight">Your vision, <br /> our legacy.</h2>
              <p className="text-2xl text-stone-400 mb-16 max-w-3xl mx-auto font-light leading-relaxed">
                Let's collaborate on your next custom furniture piece. Experience the difference of artisanal woodwork.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-8">
                <Link 
                  to="/custom-order" 
                  className="bg-white text-stone-950 px-12 py-6 rounded-[2rem] font-black uppercase tracking-widest text-sm transition-all shadow-xl hover:scale-105 active:scale-95"
                >
                  Start Custom Order
                </Link>
                <a 
                  href={WHATSAPP_LINK}
                  className="bg-orange-900 text-white px-12 py-6 rounded-[2rem] font-black uppercase tracking-widest text-sm transition-all shadow-xl hover:bg-orange-800 flex items-center justify-center space-x-3 active:scale-95"
                >
                  <MessageCircle size={24} />
                  <span>Direct Inquiry</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
