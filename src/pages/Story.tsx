import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';

const Story: React.FC = () => {
  return (
    <div className="pt-32 md:pt-48 pb-24 md:pb-48 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-4xl mb-24 md:mb-48">
          <span className="font-sans text-[10px] tracking-[0.2em] uppercase font-bold opacity-40">The Narrative</span>
          <h1 className="font-serif text-5xl md:text-8xl mt-6 tracking-tight leading-tight">
            Crafting the <span className="italic">Invisible</span>.
          </h1>
          <p className="font-sans text-lg md:text-2xl leading-relaxed opacity-60 mt-12 max-w-2xl">
            The Curated Breath is an artisanal fragrance house dedicated to the exploration of scent as a medium for storytelling, memory, and emotional architecture.
          </p>
        </div>

        {/* Editorial Layout 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center mb-48">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="aspect-[4/5] overflow-hidden bg-surface-container-low"
          >
            <img
              src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=1000"
              alt="Story Image 1"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="flex flex-col gap-12">
            <h2 className="font-serif text-4xl md:text-6xl tracking-tight leading-tight">
              Our <span className="italic">Origins</span>.
            </h2>
            <p className="font-sans text-lg leading-relaxed opacity-60 italic">
              Founded in 2022, The Curated Breath began as a small experimental laboratory in the heart of London. Our mission was simple: to create fragrances that don't just smell good, but evoke a sense of place, time, and emotion.
            </p>
            <p className="font-sans text-lg leading-relaxed opacity-60">
              We draw inspiration from the natural world, ancient alchemy, and modern olfactive science. Each scent is a careful balance of tradition and innovation, meticulously blended in small batches to ensure the highest quality and artistic integrity.
            </p>
          </div>
        </div>

        {/* Editorial Layout 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center mb-48">
          <div className="flex flex-col gap-12 order-2 md:order-1">
            <h2 className="font-serif text-4xl md:text-6xl tracking-tight leading-tight">
              The <span className="italic">Craft</span>.
            </h2>
            <p className="font-sans text-lg leading-relaxed opacity-60">
              We believe in the power of slow perfumery. Our process begins with the sourcing of the finest raw materials from around the globe—from the jasmine fields of Grasse to the sandalwood forests of Mysore.
            </p>
            <p className="font-sans text-lg leading-relaxed opacity-60 italic">
              Each fragrance undergoes a rigorous aging process, allowing the complex molecules to harmonize and develop their full olfactive potential. The result is a collection of scents that are deep, nuanced, and uniquely personal.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="aspect-[4/5] overflow-hidden bg-surface-container-low order-1 md:order-2"
          >
            <img
              src="https://images.unsplash.com/photo-1583467875263-d50dec37a88c?auto=format&fit=crop&q=80&w=1000"
              alt="Story Image 2"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        {/* Contact Section */}
        <div className="mt-48 pt-48 border-t border-outline-variant grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div className="flex flex-col gap-12">
            <span className="font-sans text-[10px] tracking-[0.2em] uppercase font-bold opacity-40">Get in Touch</span>
            <h2 className="font-serif text-4xl md:text-6xl tracking-tight leading-tight">
              Connect with <span className="italic">Us</span>.
            </h2>
            <p className="font-sans text-lg leading-relaxed opacity-60">
              Whether you have a question about our collection, or simply want to share your olfactive experience, we'd love to hear from you.
            </p>

            <div className="flex flex-col gap-8 mt-8">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center group-hover:bg-on-surface group-hover:text-surface transition-all">
                  <Mail size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-sans text-[10px] tracking-widest uppercase opacity-40">Email</p>
                  <p className="font-serif text-xl tracking-tight">hello@thecuratedbreath.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center group-hover:bg-on-surface group-hover:text-surface transition-all">
                  <MapPin size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-sans text-[10px] tracking-widest uppercase opacity-40">Atelier</p>
                  <p className="font-serif text-xl tracking-tight">12 Curated Lane, London, UK</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center group-hover:bg-on-surface group-hover:text-surface transition-all">
                  <Phone size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-sans text-[10px] tracking-widest uppercase opacity-40">Phone</p>
                  <p className="font-serif text-xl tracking-tight">+44 (0) 20 1234 5678</p>
                </div>
              </div>
            </div>
          </div>

          <form className="flex flex-col gap-8 bg-surface-container-low p-12 md:p-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-4">
                <label className="font-sans text-[10px] tracking-widest uppercase opacity-40">First Name</label>
                <input type="text" className="bg-transparent border-b border-outline-variant py-4 focus:outline-none focus:border-on-surface transition-colors" />
              </div>
              <div className="flex flex-col gap-4">
                <label className="font-sans text-[10px] tracking-widest uppercase opacity-40">Last Name</label>
                <input type="text" className="bg-transparent border-b border-outline-variant py-4 focus:outline-none focus:border-on-surface transition-colors" />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <label className="font-sans text-[10px] tracking-widest uppercase opacity-40">Email Address</label>
              <input type="email" className="bg-transparent border-b border-outline-variant py-4 focus:outline-none focus:border-on-surface transition-colors" />
            </div>
            <div className="flex flex-col gap-4">
              <label className="font-sans text-[10px] tracking-widest uppercase opacity-40">Message</label>
              <textarea rows={4} className="bg-transparent border-b border-outline-variant py-4 focus:outline-none focus:border-on-surface transition-colors resize-none" />
            </div>
            <button type="submit" className="btn-primary w-full mt-8 flex items-center justify-center gap-4">
              Send Message <ArrowUpRight size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Story;
