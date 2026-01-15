
/**
 * Artisan Woodworks Web App
 * Version: 1.9.0
 * Added: 'Craftsman Guild' logo redesign with mallet, chisel, and square for high-fidelity woodworking brand.
 * Added: Enhanced prominence and clarity for brand identity in Navbar and Footer.
 * Added: Dark Mode and Low-Light UI support with global theme toggle.
 * Added: Glassmorphism effects and enhanced depth across navigation and UI cards.
 */
import React, { useState, useEffect } from 'react';
// @ts-ignore
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle, Phone, MapPin, User, Settings, Sun, Moon } from 'lucide-react';
import Home from './pages/Home';
import Categories from './pages/Categories';
import ProductDetail from './pages/ProductDetail';
import CustomOrder from './pages/CustomOrder';
import About from './pages/About';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import { BUSINESS_NAME, WHATSAPP_LINK, WHATSAPP_NUMBER, FOCAL_PERSON } from './constants';

const ArtisanLogo = ({ size = 64, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={`${className} transition-all duration-500 group-hover:scale-105 drop-shadow-xl`}
  >
    {/* Hexagonal Outer Frame (Stability & Quality) */}
    <path 
      d="M50 2L91.5 26V74L50 98L8.5 74V26L50 2Z" 
      className="fill-orange-950 dark:fill-orange-800"
    />
    <path 
      d="M50 8L86 28.5V71.5L50 92L14 71.5V28.5L50 8Z" 
      className="fill-[#FDFCFB] dark:fill-stone-900"
    />
    
    {/* Wood Log Rings (The Material) */}
    <g opacity="0.15" className="stroke-orange-900 dark:stroke-orange-400">
      <circle cx="50" cy="50" r="35" strokeWidth="0.5" />
      <circle cx="50" cy="50" r="28" strokeWidth="1" strokeDasharray="3 5" />
      <circle cx="50" cy="50" r="20" strokeWidth="0.5" />
      <path d="M50 15L50 20 M50 80L50 85 M15 50H20 M80 50H85" strokeWidth="1" />
    </g>

    {/* The Tools (Mallet, Chisel, Square) */}
    <g transform="translate(50, 48) scale(0.9) translate(-50, -50)">
      {/* Carpenter's Square (Precision) */}
      <path d="M35 30H65V35H40V65H35V30Z" className="fill-stone-300 dark:fill-stone-600 opacity-40" />
      
      {/* Joiner's Mallet (Force & Build) */}
      <g transform="rotate(-30 50 50)">
        <rect x="47" y="25" width="6" height="55" rx="1" className="fill-orange-950 dark:fill-stone-100" />
        <rect x="35" y="25" width="30" height="18" rx="2" className="fill-orange-900 dark:fill-stone-300" />
        <path d="M35 25H65L62 20H38L35 25Z" className="fill-orange-800 dark:fill-stone-400" />
      </g>

      {/* Detail Chisel (Refinement) */}
      <g transform="rotate(30 50 50)">
        <rect x="47" y="25" width="6" height="55" rx="1" className="fill-orange-950 dark:fill-stone-200" />
        <rect x="44" y="25" width="12" height="15" rx="1" className="fill-stone-500 dark:fill-stone-400" />
        <rect x="45" y="15" width="10" height="10" rx="0.5" className="fill-stone-400 dark:fill-stone-300" />
      </g>
    </g>

    {/* Center Brand Banner */}
    <rect x="10" y="44" width="80" height="12" rx="1" className="fill-orange-950 dark:fill-orange-800" />
    <text x="50" y="53" textAnchor="middle" className="fill-white font-black text-[8px] tracking-[4px] uppercase font-serif">ARTISAN</text>
    
    {/* Foundation Label */}
    <text x="50" y="65" textAnchor="middle" className="fill-orange-950 dark:fill-orange-400 text-[5px] font-black tracking-widest opacity-80">QUALITY WOODWORKS</text>
  </svg>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);
  return null;
};

const Navbar = ({ theme, toggleTheme }: { theme: string, toggleTheme: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Categories', path: '/categories' },
    { name: 'Custom Order', path: '/custom-order' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-stone-200/50 dark:border-stone-800/50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          <Link to="/" className="flex items-center space-x-6 group" aria-label="Home">
            <ArtisanLogo size={72} />
            <div className="flex flex-col -space-y-1.5">
              <span className="text-3xl sm:text-4xl font-black tracking-tighter text-stone-950 dark:text-stone-100 font-serif leading-none">
                Artisan
              </span>
              <span className="text-[12px] uppercase tracking-[6px] text-orange-800 dark:text-orange-400 font-black">
                Woodworks
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex space-x-12 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-black tracking-[0.15em] uppercase transition-all duration-300 relative group py-2 ${
                  location.pathname === link.path 
                    ? 'text-orange-900 dark:text-orange-400' 
                    : 'text-stone-600 dark:text-stone-400 hover:text-orange-800 dark:hover:text-orange-300'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 h-1 bg-orange-900 dark:bg-orange-400 transition-all duration-300 ${
                  location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
            
            <div className="flex items-center space-x-6 pl-6 border-l-2 border-stone-200 dark:border-stone-800">
              <button 
                onClick={toggleTheme}
                className="p-3 rounded-full hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-500 dark:text-stone-400 transition-all duration-300 active:rotate-90"
                title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
              </button>
              <Link to="/admin" className="text-stone-400 hover:text-orange-800 dark:hover:text-orange-400 transition-colors" title="Admin Panel">
                <Settings size={24} />
              </Link>
            </div>
          </div>

          <div className="lg:hidden flex items-center space-x-4">
            <button onClick={toggleTheme} className="p-2 rounded-lg text-stone-500 dark:text-stone-400">
              {theme === 'dark' ? <Sun size={28} /> : <Moon size={28} />}
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-stone-600 dark:text-stone-300 p-2 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
              aria-expanded={isOpen}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={36} /> : <Menu size={36} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
        isOpen ? 'max-h-96 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-4'
      } bg-white dark:bg-stone-950 border-t border-stone-100 dark:border-stone-900 shadow-2xl`}>
        <div className="px-8 py-8 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-5 py-5 rounded-2xl text-xl font-black tracking-widest uppercase transition-all ${
                location.pathname === link.path 
                  ? 'bg-orange-950 text-white shadow-xl shadow-orange-950/20' 
                  : 'text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-900'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-stone-950 text-stone-300 py-32 px-4 mt-24 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-orange-900 to-transparent opacity-50"></div>
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-20 relative z-10">
      <div className="col-span-1 md:col-span-2">
        <div className="flex items-center space-x-6 mb-10">
          <ArtisanLogo size={96} />
          <div className="flex flex-col -space-y-3">
            <h2 className="text-white text-5xl font-black font-serif tracking-tighter">{BUSINESS_NAME}</h2>
            <span className="text-sm uppercase tracking-[10px] text-orange-500 font-black">Superior Craft Since 2008</span>
          </div>
        </div>
        <p className="max-w-md text-stone-400 leading-relaxed text-lg font-light">
          Handcrafting the finest furniture in Pakistan. Every joint, grain, and finish is a testament to our dedication to the artisan way.
        </p>
        <div className="flex space-x-6 mt-12">
           <a href="#" className="w-14 h-14 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center hover:bg-orange-900 hover:border-orange-900 transition-all duration-300 shadow-2xl"><Phone size={24} /></a>
           <a href="#" className="w-14 h-14 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center hover:bg-orange-900 hover:border-orange-900 transition-all duration-300 shadow-2xl"><MessageCircle size={24} /></a>
        </div>
      </div>
      <div>
        <h3 className="text-white font-black text-xl mb-10 flex items-center uppercase tracking-widest">
          <span className="w-10 h-0.5 bg-orange-800 mr-4"></span> Navigation
        </h3>
        <ul className="space-y-5 text-lg">
          <li><Link to="/categories" className="hover:text-orange-400 transition-colors flex items-center group"><span className="w-0 group-hover:w-4 h-0.5 bg-orange-800 mr-0 group-hover:mr-4 transition-all"></span>Showroom</Link></li>
          <li><Link to="/custom-order" className="hover:text-orange-400 transition-colors flex items-center group"><span className="w-0 group-hover:w-4 h-0.5 bg-orange-800 mr-0 group-hover:mr-4 transition-all"></span>Custom Design</Link></li>
          <li><Link to="/about" className="hover:text-orange-400 transition-colors flex items-center group"><span className="w-0 group-hover:w-4 h-0.5 bg-orange-800 mr-0 group-hover:mr-4 transition-all"></span>Our Story</Link></li>
          <li><Link to="/contact" className="hover:text-orange-400 transition-colors flex items-center group"><span className="w-0 group-hover:w-4 h-0.5 bg-orange-800 mr-0 group-hover:mr-4 transition-all"></span>Contact Us</Link></li>
        </ul>
      </div>
      <div>
        <h3 className="text-white font-black text-xl mb-10 flex items-center uppercase tracking-widest">
          <span className="w-10 h-0.5 bg-orange-800 mr-4"></span> The Workshop
        </h3>
        <ul className="space-y-8 text-base text-stone-400">
          <li className="flex items-start space-x-5">
            <User size={24} className="text-orange-500 mt-1 flex-shrink-0" /> 
            <div>
              <p className="text-white font-black text-xl leading-none mb-1">{FOCAL_PERSON}</p>
              <p className="text-xs uppercase tracking-widest opacity-60">Managing Director</p>
            </div>
          </li>
          <li className="flex items-start space-x-5">
            <Phone size={24} className="text-stone-500 mt-1 flex-shrink-0" /> 
            <span className="text-lg font-medium tracking-wide">{WHATSAPP_NUMBER}</span>
          </li>
          <li className="flex items-start space-x-5">
            <MapPin size={24} className="text-stone-500 mt-1 flex-shrink-0" /> 
            <span className="text-lg">Latifabad, Hyderabad-Sindh</span>
          </li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-24 pt-12 border-t border-stone-900 text-center text-xs text-stone-500 tracking-[5px] uppercase font-black">
      <p>&copy; {new Date().getFullYear()} {BUSINESS_NAME}. Handcrafted Excellence in Pakistan.</p>
    </div>
  </footer>
);

const App: React.FC = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col transition-colors duration-500">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main className="flex-grow pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/custom-order" element={<CustomOrder />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>
        <Footer />
        
        {/* Premium Floating WhatsApp Button */}
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-10 right-10 bg-green-600 text-white p-6 rounded-full shadow-2xl hover:bg-green-700 transition-all hover:scale-110 active:scale-95 z-50 flex items-center justify-center hover:rotate-6 shadow-green-950/40"
          title="Direct Workshop Inquiry"
          aria-label="Contact on WhatsApp"
        >
          <MessageCircle size={40} />
        </a>
      </div>
    </Router>
  );
};

export default App;
