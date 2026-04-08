import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../constants';

const CartDrawer: React.FC = () => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity } = useCart();

  const subtotal = cart.reduce((acc, item) => {
    const product = PRODUCTS.find(p => p.id === item.productId);
    return acc + (product?.price || 0) * item.quantity;
  }, 0);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-on-surface/20 backdrop-blur-sm z-[100]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-surface z-[110] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-8 border-b border-outline-variant flex items-center justify-between">
              <div className="flex flex-col">
                <h2 className="font-serif text-2xl tracking-tight">The Vessel</h2>
                <p className="font-sans text-[10px] tracking-widest uppercase opacity-60 mt-1">Your Curated Selection</p>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:opacity-60 transition-opacity"
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-8 flex flex-col gap-8">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center opacity-40">
                  <p className="font-serif text-xl italic">The vessel is empty.</p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="editorial-link mt-6"
                  >
                    Explore the Collection
                  </button>
                </div>
              ) : (
                cart.map((item) => {
                  const product = PRODUCTS.find(p => p.id === item.productId);
                  if (!product) return null;

                  return (
                    <div key={`${item.productId}-${item.size}`} className="flex gap-6 group">
                      <div className="w-24 h-32 bg-surface-container-low overflow-hidden">
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="flex-1 flex flex-col">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-serif text-lg tracking-tight">{product.name}</h3>
                            <p className="font-sans text-[10px] tracking-widest uppercase opacity-60 mt-1">
                              {product.concentration} · {item.size}
                            </p>
                          </div>
                          <p className="font-sans text-sm font-medium">${product.price}</p>
                        </div>

                        <div className="mt-auto flex items-center justify-between">
                          <div className="flex items-center border border-outline-variant">
                            <button
                              onClick={() => updateQuantity(item.productId, item.size, item.quantity - 1)}
                              className="p-2 hover:bg-surface-container-low transition-colors"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="w-8 text-center font-sans text-xs">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.productId, item.size, item.quantity + 1)}
                              className="p-2 hover:bg-surface-container-low transition-colors"
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.productId, item.size)}
                            className="text-on-surface/40 hover:text-on-surface transition-colors p-2"
                          >
                            <Trash2 size={16} strokeWidth={1.5} />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-8 border-t border-outline-variant bg-surface-container-low/30">
                <div className="flex justify-between items-center mb-8">
                  <span className="font-sans text-xs tracking-widest uppercase opacity-60">Subtotal</span>
                  <span className="font-serif text-2xl tracking-tight">${subtotal}</span>
                </div>
                <button className="w-full btn-primary flex items-center justify-center gap-4">
                  Proceed to Checkout
                </button>
                <p className="text-center font-sans text-[10px] tracking-widest uppercase opacity-40 mt-6">
                  Complimentary shipping on all orders over $150
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
