
import React from 'react';
import { CartItem } from '../types';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, q: number) => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose, items, onRemove, onUpdateQuantity }) => {
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col">
        <div className="p-6 border-b flex items-center justify-between">
          <h2 className="text-xl font-serif">Your Bag ({items.length})</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center opacity-40">
              <svg className="w-16 h-16 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <p className="text-lg">Your bag is empty.</p>
              <button onClick={onClose} className="mt-4 text-royal-gold underline font-bold text-sm tracking-widest uppercase">Start Shopping</button>
            </div>
          ) : (
            items.map(item => (
              <div key={item.id} className="flex gap-4">
                <img src={item.image} alt={item.name} className="w-20 h-28 object-cover bg-gray-50" />
                <div className="flex-1 flex flex-col">
                  <div className="flex justify-between mb-1">
                    <h4 className="font-serif">{item.name}</h4>
                    <button onClick={() => onRemove(item.id)} className="text-gray-400 hover:text-red-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                  <p className="text-xs text-royal-gold uppercase tracking-widest mb-2">{item.category}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center border border-gray-200">
                      <button 
                        onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        className="px-2 py-1 hover:bg-gray-100"
                      >-</button>
                      <span className="px-3 py-1 text-sm border-x border-gray-200">{item.quantity}</span>
                      <button 
                         onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="px-2 py-1 hover:bg-gray-100"
                      >+</button>
                    </div>
                    <p className="font-bold">₹{(item.price * item.quantity).toLocaleString('en-IN')}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t bg-gray-50">
            <div className="flex justify-between items-center mb-6">
              <span className="text-gray-500 uppercase tracking-widest text-sm">Total</span>
              <span className="text-2xl font-serif">₹{total.toLocaleString('en-IN')}</span>
            </div>
            <button className="w-full bg-deep-maroon text-white py-4 font-bold tracking-[0.2em] hover:bg-red-900 transition-all flex items-center justify-center gap-3">
              CHECKOUT NOW
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;
