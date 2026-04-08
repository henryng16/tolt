import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-container-low pt-24 pb-12 border-t border-outline-variant/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-24">
        {/* Brand Column */}
        <div className="md:col-span-1">
          <Link to="/" className="font-serif text-2xl tracking-[0.3em] uppercase font-light">
            The Curated Breath
          </Link>
          <p className="font-sans text-sm leading-relaxed mt-8 opacity-60">
            Artisanal fragrances crafted with intention, blending ancient wisdom with modern olfactive artistry.
          </p>
          <div className="flex gap-6 mt-12">
            <a href="#" className="hover:opacity-60 transition-opacity"><Instagram size={20} strokeWidth={1.5} /></a>
            <a href="#" className="hover:opacity-60 transition-opacity"><Facebook size={20} strokeWidth={1.5} /></a>
            <a href="#" className="hover:opacity-60 transition-opacity"><Twitter size={20} strokeWidth={1.5} /></a>
          </div>
        </div>

        {/* Navigation Column */}
        <div className="flex flex-col gap-6">
          <h4 className="font-sans text-[10px] tracking-[0.2em] uppercase font-bold opacity-40">Explore</h4>
          <Link to="/collection" className="editorial-link self-start">Collection</Link>
          <Link to="/story" className="editorial-link self-start">The Story</Link>
          <Link to="/journal" className="editorial-link self-start">Journal</Link>
          <Link to="/stockists" className="editorial-link self-start">Stockists</Link>
        </div>

        {/* Support Column */}
        <div className="flex flex-col gap-6">
          <h4 className="font-sans text-[10px] tracking-[0.2em] uppercase font-bold opacity-40">Support</h4>
          <Link to="/contact" className="editorial-link self-start">Contact Us</Link>
          <Link to="/shipping" className="editorial-link self-start">Shipping & Returns</Link>
          <Link to="/faq" className="editorial-link self-start">FAQ</Link>
          <Link to="/privacy" className="editorial-link self-start">Privacy Policy</Link>
        </div>

        {/* Newsletter Column */}
        <div className="md:col-span-1">
          <h4 className="font-sans text-[10px] tracking-[0.2em] uppercase font-bold opacity-40">Newsletter</h4>
          <p className="font-serif text-lg italic mt-6">Join the inner circle for exclusive releases and olfactive insights.</p>
          <form className="mt-8 flex flex-col gap-4">
            <div className="relative">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-transparent border-b border-outline-variant py-4 pr-12 font-sans text-sm focus:outline-none focus:border-on-surface transition-colors"
              />
              <button type="submit" className="absolute right-0 top-1/2 -translate-y-1/2 p-2 hover:opacity-60 transition-opacity">
                <ArrowUpRight size={20} strokeWidth={1.5} />
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-24 pt-12 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="font-sans text-[10px] tracking-widest uppercase opacity-40">
          © {currentYear} The Curated Breath. All Rights Reserved.
        </p>
        <div className="flex gap-12">
          <span className="font-sans text-[10px] tracking-widest uppercase opacity-40">Crafted in Grasse</span>
          <span className="font-sans text-[10px] tracking-widest uppercase opacity-40">Bottled in London</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
