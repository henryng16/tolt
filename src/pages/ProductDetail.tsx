import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Plus, Minus, Info, Share2, Heart } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { useCart } from '../context/CartContext';
import ScentPyramid from '../components/ScentPyramid';

const ProductDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = PRODUCTS.find(p => p.slug === slug);
  const { addToCart } = useCart();

  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (product) {
      setSelectedSize(product.sizes[0]);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="h-screen flex flex-col items-center justify-center text-center p-6">
        <h1 className="font-serif text-4xl mb-8">Scent not found.</h1>
        <Link to="/collection" className="editorial-link">Back to Collection</Link>
      </div>
    );
  }

  return (
    <div className="pt-32 md:pt-48 pb-24 md:pb-48 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Breadcrumbs */}
        <Link to="/collection" className="editorial-link flex items-center gap-4 mb-16 md:mb-24 opacity-60 hover:opacity-100">
          <ArrowLeft size={14} /> Back to Collection
        </Link>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          {/* Gallery */}
          <div className="flex flex-col gap-8">
            <div className="aspect-[4/5] overflow-hidden bg-surface-container-low relative group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  src={product.images[activeImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>
              <button className="absolute top-6 right-6 p-3 bg-surface/80 backdrop-blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <Heart size={18} strokeWidth={1.5} />
              </button>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`aspect-square overflow-hidden bg-surface-container-low border-2 transition-all ${activeImage === idx ? 'border-primary' : 'border-transparent opacity-60 hover:opacity-100'}`}
                >
                  <img src={img} alt={`${product.name} ${idx + 1}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-4">
              <span className="font-sans text-[10px] tracking-[0.2em] uppercase font-bold opacity-40">
                {product.concentration} · {product.scentFamily.join(', ')}
              </span>
              <h1 className="font-serif text-5xl md:text-7xl tracking-tight leading-tight">
                {product.name}
              </h1>
              <p className="font-serif text-3xl md:text-4xl tracking-tight mt-4 italic">
                ${product.price}
              </p>
            </div>

            <p className="font-sans text-lg leading-relaxed opacity-60 max-w-xl">
              {product.description}
            </p>

            <div className="flex flex-col gap-8 py-12 border-y border-outline-variant/30">
              {/* Size Selector */}
              <div className="flex flex-col gap-6">
                <h4 className="font-sans text-[10px] tracking-[0.2em] uppercase font-bold opacity-40">Select Size</h4>
                <div className="flex gap-4">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-8 py-3 font-sans text-xs tracking-widest uppercase border transition-all ${selectedSize === size ? 'bg-on-surface text-surface border-on-surface' : 'border-outline-variant hover:border-on-surface'}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="flex flex-col gap-6">
                <h4 className="font-sans text-[10px] tracking-[0.2em] uppercase font-bold opacity-40">Quantity</h4>
                <div className="flex items-center border border-outline-variant w-fit">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-4 hover:bg-surface-container-low transition-colors"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="w-12 text-center font-sans text-sm">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-4 hover:bg-surface-container-low transition-colors"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <button
                onClick={() => addToCart(product.id, selectedSize, quantity)}
                className="btn-primary w-full md:w-fit"
              >
                Add to Vessel
              </button>
            </div>

            {/* Extra Info */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 text-xs tracking-widest uppercase opacity-60">
                <Info size={14} />
                <span>Complimentary shipping on all orders</span>
              </div>
              <div className="flex items-center gap-4 text-xs tracking-widest uppercase opacity-60">
                <Share2 size={14} />
                <span>Share this olfactive experience</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scent Pyramid Section */}
        <div className="mt-48 pt-48 border-t border-outline-variant">
          <div className="max-w-4xl mb-24">
            <span className="font-sans text-[10px] tracking-[0.2em] uppercase font-bold opacity-40">The Anatomy</span>
            <h2 className="font-serif text-4xl md:text-6xl mt-6 tracking-tight leading-tight">
              A <span className="italic">Detailed</span> Olfactive Breakdown.
            </h2>
          </div>
          <ScentPyramid pyramid={product.pyramid} />
        </div>

        {/* Story Section */}
        <div className="mt-48 pt-48 border-t border-outline-variant grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="flex flex-col gap-12 order-2 md:order-1">
            <span className="font-sans text-[10px] tracking-[0.2em] uppercase font-bold opacity-40">The Narrative</span>
            <h2 className="font-serif text-4xl md:text-6xl tracking-tight leading-tight">
              Behind the <span className="italic">Scent</span>.
            </h2>
            <p className="font-sans text-lg leading-relaxed opacity-60 italic">
              {product.story}
            </p>
          </div>
          <div className="aspect-square overflow-hidden bg-surface-container-low order-1 md:order-2">
            <img
              src={product.images[1]}
              alt="Story Image"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
