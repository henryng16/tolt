import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import { PRODUCTS } from '../constants';

const Home: React.FC = () => {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden flex items-center justify-center">
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0 z-0"
        >
          <img
            src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=2000"
            alt="Hero Background"
            className="w-full h-full object-cover brightness-[0.8]"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-sans text-xs md:text-sm tracking-[0.5em] uppercase text-surface mb-8 block"
          >
            Artisanal Fragrance House
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="font-serif text-5xl md:text-8xl text-surface leading-[1.1] tracking-tight mb-12"
          >
            The Art of <br /> <span className="italic">Curated Breath</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-center gap-8"
          >
            <Link to="/collection" className="btn-primary bg-surface text-on-surface hover:bg-primary hover:text-surface">
              Explore Collection
            </Link>
            <button className="flex items-center gap-4 text-surface editorial-link after:bg-surface">
              <Play size={16} fill="currentColor" />
              Watch the Story
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-surface opacity-60">Scroll</span>
          <div className="w-[1px] h-12 bg-surface/30 relative overflow-hidden">
            <motion.div
              animate={{ y: [0, 48] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-0 left-0 w-full h-1/2 bg-surface"
            />
          </div>
        </motion.div>
      </section>

      {/* New Arrivals Section */}
      <section className="py-24 md:py-48 bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
            <div className="max-w-2xl">
              <span className="font-sans text-[10px] tracking-[0.2em] uppercase font-bold opacity-40">New Arrivals</span>
              <h2 className="font-serif text-4xl md:text-6xl mt-6 tracking-tight leading-tight">
                Olfactive <span className="italic">Innovations</span> for the Modern Soul.
              </h2>
            </div>
            <Link to="/collection" className="editorial-link flex items-center gap-4">
              View All <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {PRODUCTS.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className="group cursor-pointer"
              >
                <Link to={`/product/${product.slug}`}>
                  <div className="aspect-[3/4] overflow-hidden bg-surface-container-low mb-8">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
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
        </div>
      </section>

      {/* Editorial Section */}
      <section className="py-24 md:py-48 bg-surface-container-low overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=1000"
                alt="Editorial Image"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-surface p-8 hidden md:flex items-center justify-center text-center">
              <p className="font-serif text-sm italic tracking-tight">
                "Fragrance is the most intense form of memory."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col gap-12"
          >
            <span className="font-sans text-[10px] tracking-[0.2em] uppercase font-bold opacity-40">The Philosophy</span>
            <h2 className="font-serif text-4xl md:text-6xl tracking-tight leading-tight">
              A <span className="italic">Conscious</span> Approach to Scent.
            </h2>
            <p className="font-sans text-lg leading-relaxed opacity-60">
              We believe that fragrance is more than just a scent—it's an invisible architecture that shapes our experiences and memories. Our collection is meticulously curated using the finest natural ingredients and sustainable practices.
            </p>
            <Link to="/story" className="btn-outline self-start">
              Our Story
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Scent Anatomy Section */}
      <section className="py-24 md:py-48 bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-24">
          <span className="font-sans text-[10px] tracking-[0.2em] uppercase font-bold opacity-40">The Anatomy</span>
          <h2 className="font-serif text-4xl md:text-6xl mt-6 tracking-tight">
            Understanding the <span className="italic">Pyramid</span>.
          </h2>
        </div>

        <div className="max-w-5xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="flex flex-col items-center text-center gap-8">
            <div className="w-16 h-16 rounded-full border border-outline-variant flex items-center justify-center font-serif text-xl italic">1</div>
            <h3 className="font-serif text-2xl tracking-tight">Top Notes</h3>
            <p className="font-sans text-sm leading-relaxed opacity-60">
              The initial impression. Volatile and bright, these notes introduce the fragrance and fade within the first 15-30 minutes.
            </p>
          </div>
          <div className="flex flex-col items-center text-center gap-8">
            <div className="w-16 h-16 rounded-full border border-outline-variant flex items-center justify-center font-serif text-xl italic">2</div>
            <h3 className="font-serif text-2xl tracking-tight">Heart Notes</h3>
            <p className="font-sans text-sm leading-relaxed opacity-60">
              The soul of the scent. These notes emerge as the top notes fade, providing the core character and lasting for several hours.
            </p>
          </div>
          <div className="flex flex-col items-center text-center gap-8">
            <div className="w-16 h-16 rounded-full border border-outline-variant flex items-center justify-center font-serif text-xl italic">3</div>
            <h3 className="font-serif text-2xl tracking-tight">Base Notes</h3>
            <p className="font-sans text-sm leading-relaxed opacity-60">
              The lasting memory. These heavy molecules provide depth and longevity, anchoring the fragrance to the skin for the entire day.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
