
/**
 * Artisan Woodworks Web App
 * Version: 1.0.2
 * Added: Custom reference image upload support on Order Page.
 * Improved: Mobile-first responsive optimizations.
 */
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle, Phone, MapPin, Hammer } from 'lucide-react';
import Home from './pages/Home';
import Categories from './pages/Categories';
import ProductDetail from './pages/ProductDetail';
import CustomOrder from './pages/CustomOrder';
import About from './pages/About';
import Contact from './pages/Contact';
import { BUSINESS_NAME, WHATSAPP_LINK } from './constants';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Navbar = () => {
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
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-stone-200 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Hammer className="text-orange-800" size={24} />
            <span className="text-xl font-bold tracking-tight text-stone-800">{BUSINESS_NAME}</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-orange-800 ${
                  location.pathname === link.path ? 'text-orange-800' : 'text-stone-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-stone-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-stone-100 py-4 px-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block text-lg font-medium text-stone-700 hover:text-orange-800"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-stone-900 text-stone-300 py-12 px-4 mt-20">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
      <div className="col-span-1 md:col-span-2">
        <h2 className="text-white text-xl font-bold mb-4">{BUSINESS_NAME}</h2>
        <p className="max-w-md text-stone-400">
          Handcrafting the finest furniture in Pakistan. From traditional Sheesham pieces to modern minimal designs, 
          we bring quality and craftsmanship to every home and office.
        </p>
      </div>
      <div>
        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
        <ul className="space-y-2">
          <li><Link to="/categories" className="hover:text-white transition">Showroom</Link></li>
          <li><Link to="/custom-order" className="hover:text-white transition">Custom Design</Link></li>
          <li><Link to="/about" className="hover:text-white transition">Our Story</Link></li>
          <li><Link to="/contact" className="hover:text-white transition">Contact Us</Link></li>
        </ul>
      </div>
      <div>
        <h3 className="text-white font-semibold mb-4">Contact</h3>
        <ul className="space-y-2 text-stone-400">
          <li className="flex items-center space-x-2"><Phone size={16} /> <span>+92 300 1234567</span></li>
          <li className="flex items-center space-x-2"><MessageCircle size={16} /> <span>WhatsApp Inquiry</span></li>
          <li className="flex items-center space-x-2"><MapPin size={16} /> <span>Gujrat, Pakistan</span></li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-stone-800 text-center text-sm">
      <p>&copy; {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.</p>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/custom-order" element={<CustomOrder />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        
        {/* Floating WhatsApp Button */}
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-transform hover:scale-110 z-50 flex items-center justify-center"
          title="Chat with us on WhatsApp"
        >
          <MessageCircle size={32} />
        </a>
      </div>
    </Router>
  );
};

export default App;
