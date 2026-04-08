import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../context/CartContext';

const TopNavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Collection', path: '/collection' },
    { name: 'The Story', path: '/story' },
    { name: 'Journal', path: '/journal' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-surface/80 backdrop-blur-md py-4 border-b border-outline-variant/30' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-on-surface p-2"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={20} strokeWidth={1.5} />
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="editorial-link"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Brand Logo */}
        <Link
          to="/"
          className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <span className="font-serif text-xl md:text-2xl tracking-[0.3em] uppercase font-light">
            The Curated Breath
          </span>
          <span className="font-sans text-[8px] md:text-[10px] tracking-[0.5em] uppercase mt-1 opacity-60">
            Artisanal Fragrance
          </span>
        </Link>

        {/* Icons */}
        <div className="flex items-center gap-4 md:gap-8">
          <button className="text-on-surface p-2 hover:opacity-60 transition-opacity">
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button
            className="text-on-surface p-2 hover:opacity-60 transition-opacity relative"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingBag size={20} strokeWidth={1.5} />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-surface z-[60] flex flex-col p-12"
          >
            <button
              className="absolute top-8 left-6 p-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={24} strokeWidth={1.5} />
            </button>

            <div className="mt-24 flex flex-col gap-12">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="font-serif text-4xl tracking-tight hover:italic transition-all"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="mt-auto pt-12 border-t border-outline-variant">
              <p className="font-sans text-xs tracking-widest uppercase opacity-60 mb-4">Support</p>
              <div className="flex flex-col gap-4">
                <Link to="/contact" className="editorial-link self-start">Contact Us</Link>
                <Link to="/shipping" className="editorial-link self-start">Shipping & Returns</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default TopNavBar;
