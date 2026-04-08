import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Filter, X, ChevronDown } from 'lucide-react';
import { PRODUCTS } from '../constants';

const Shop: React.FC = () => {
  const [activeFamily, setActiveFamily] = useState<string | null>(null);
  const [activeConcentration, setActiveConcentration] = useState<string | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const families = Array.from(new Set(PRODUCTS.flatMap(p => p.scentFamily)));
  const concentrations = Array.from(new Set(PRODUCTS.map(p => p.concentration)));

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const familyMatch = !activeFamily || p.scentFamily.includes(activeFamily);
      const concentrationMatch = !activeConcentration || p.concentration === activeConcentration;
      return familyMatch && concentrationMatch;
    });
  }, [activeFamily, activeConcentration]);

  return (
    <div className="pt-32 md:pt-48 pb-24 md:pb-48 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="font-sans text-[10px] tracking-[0.2em] uppercase font-bold opacity-40">The Collection</span>
            <h1 className="font-serif text-5xl md:text-7xl mt-6 tracking-tight leading-tight">
              Olfactive <span className="italic">Library</span>.
            </h1>
          </div>
          <div className="flex items-center gap-8">
            <span className="font-sans text-[10px] tracking-widest uppercase opacity-40">
              {filteredProducts.length} Scents
            </span>
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-4 editorial-link"
            >
              Filter <Filter size={14} />
            </button>
          </div>
        </div>

        {/* Filters Overlay */}
        <AnimatePresence>
          {isFilterOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-b border-outline-variant mb-16"
            >
              <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-16">
                <div>
                  <h4 className="font-sans text-[10px] tracking-[0.2em] uppercase font-bold opacity-40 mb-8">Scent Family</h4>
                  <div className="flex flex-wrap gap-4">
                    <button
                      onClick={() => setActiveFamily(null)}
                      className={`px-4 py-2 font-sans text-xs tracking-widest uppercase border transition-all ${!activeFamily ? 'bg-on-surface text-surface border-on-surface' : 'border-outline-variant hover:border-on-surface'}`}
                    >
                      All
                    </button>
                    {families.map(family => (
                      <button
                        key={family}
                        onClick={() => setActiveFamily(family)}
                        className={`px-4 py-2 font-sans text-xs tracking-widest uppercase border transition-all ${activeFamily === family ? 'bg-on-surface text-surface border-on-surface' : 'border-outline-variant hover:border-on-surface'}`}
                      >
                        {family}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-sans text-[10px] tracking-[0.2em] uppercase font-bold opacity-40 mb-8">Concentration</h4>
                  <div className="flex flex-wrap gap-4">
                    <button
                      onClick={() => setActiveConcentration(null)}
                      className={`px-4 py-2 font-sans text-xs tracking-widest uppercase border transition-all ${!activeConcentration ? 'bg-on-surface text-surface border-on-surface' : 'border-outline-variant hover:border-on-surface'}`}
                    >
                      All
                    </button>
                    {concentrations.map(conc => (
                      <button
                        key={conc}
                        onClick={() => setActiveConcentration(conc)}
                        className={`px-4 py-2 font-sans text-xs tracking-widest uppercase border transition-all ${activeConcentration === conc ? 'bg-on-surface text-surface border-on-surface' : 'border-outline-variant hover:border-on-surface'}`}
                      >
                        {conc}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-end justify-end">
                  <button
                    onClick={() => {
                      setActiveFamily(null);
                      setActiveConcentration(null);
                    }}
                    className="editorial-link text-primary"
                  >
                    Reset Filters
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
          {filteredProducts.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <Link to={`/product/${product.slug}`}>
                <div className="aspect-[3/4] overflow-hidden bg-surface-container-low mb-8 relative">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-on-surface/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-serif text-2xl tracking-tight">{product.name}</h3>
                    <p className="font-sans text-[10px] tracking-widest uppercase opacity-60 mt-2">
                      {product.concentration} · {product.scentFamily.join(', ')}
                    </p>
                  </div>
                  <span className="font-sans text-sm font-medium">${product.price}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="py-48 text-center">
            <p className="font-serif text-2xl italic opacity-40">No scents match your current selection.</p>
            <button
              onClick={() => {
                setActiveFamily(null);
                setActiveConcentration(null);
              }}
              className="editorial-link mt-8"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
