
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import CartSidebar from './components/CartSidebar';
import StyleAssistant from './components/StyleAssistant';
import AboutUs from './components/AboutUs';
import { PRODUCTS } from './constants';
import { Product, CartItem } from './types';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'about'>('home');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isStylistOpen, setIsStylistOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(PRODUCTS.map(p => p.category)))];

  const handleAddToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, q: number) => {
    setCartItems(prev => prev.map(item => item.id === id ? { ...item, quantity: q } : item));
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const filteredProducts = selectedCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === selectedCategory);

  const navigateTo = (newView: 'home' | 'about') => {
    setView(newView);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        onCartToggle={() => setIsCartOpen(!isCartOpen)} 
        onStylistToggle={() => setIsStylistOpen(!isStylistOpen)}
        cartCount={cartItems.reduce((acc, curr) => acc + curr.quantity, 0)}
        onNavigate={navigateTo}
        currentView={view}
      />

      <main className="flex-grow">
        {view === 'home' ? (
          <>
            <Hero onNavigate={navigateTo} />

            {/* Categories Section */}
            <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl mb-4">The Curator's Selection</h2>
                <div className="w-24 h-1 bg-royal-gold mx-auto mb-8"></div>
                <div className="flex flex-wrap justify-center gap-4 text-xs font-bold tracking-widest uppercase">
                  {categories.map(cat => (
                    <button 
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-6 py-2 border rounded-full transition-all ${
                        selectedCategory === cat 
                          ? 'bg-deep-maroon text-white border-deep-maroon' 
                          : 'border-gray-200 text-gray-500 hover:border-royal-gold hover:text-royal-gold'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                {filteredProducts.map(product => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    onAddToCart={handleAddToCart} 
                  />
                ))}
              </div>
            </section>

            {/* Features Section */}
            <section className="bg-gray-50 py-20 px-4">
              <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                <div className="space-y-4">
                  <div className="text-royal-gold flex justify-center">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-serif">Cultural Heritage</h3>
                  <p className="text-gray-500 text-sm font-light">Supporting local artisans and handloom weavers across India since generations.</p>
                </div>
                <div className="space-y-4">
                  <div className="text-royal-gold flex justify-center">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-serif">Smart Styling</h3>
                  <p className="text-gray-500 text-sm font-light">Personalized wardrobe recommendations powered by our specialized AI Stylist.</p>
                </div>
                <div className="space-y-4">
                  <div className="text-royal-gold flex justify-center">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-serif">Global Luxury</h3>
                  <p className="text-gray-500 text-sm font-light">Insured international shipping to over 150 countries with royal packaging.</p>
                </div>
              </div>
            </section>
          </>
        ) : (
          <AboutUs onNavigate={navigateTo} />
        )}
      </main>

      <footer className="bg-white border-t border-gray-100 pt-20 pb-10 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1 cursor-pointer" onClick={() => navigateTo('home')}>
             <h2 className="text-2xl font-bold tracking-tighter text-deep-maroon mb-6">
              HARSH <span className="text-royal-gold">FASHION</span>
            </h2>
            <p className="text-gray-500 text-sm font-light leading-relaxed">
              We bring you the heartbeat of India's textile heritage, reimagined for the contemporary global citizen.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold tracking-[0.3em] uppercase mb-6">Shop</h4>
            <ul className="space-y-3 text-sm text-gray-500 font-light">
              <li onClick={() => { navigateTo('home'); setSelectedCategory('Saree'); }} className="hover:text-royal-gold transition-colors cursor-pointer">Sarees</li>
              <li onClick={() => { navigateTo('home'); setSelectedCategory('Lehenga'); }} className="hover:text-royal-gold transition-colors cursor-pointer">Lehengas</li>
              <li onClick={() => { navigateTo('home'); setSelectedCategory('Kurta'); }} className="hover:text-royal-gold transition-colors cursor-pointer">Kurtas</li>
              <li onClick={() => { navigateTo('home'); setSelectedCategory('Menswear'); }} className="hover:text-royal-gold transition-colors cursor-pointer">Bridal Wear</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold tracking-[0.3em] uppercase mb-6">Support</h4>
            <ul className="space-y-3 text-sm text-gray-500 font-light">
              <li onClick={() => navigateTo('about')} className="hover:text-royal-gold transition-colors cursor-pointer">Our Legacy</li>
              <li className="hover:text-royal-gold transition-colors cursor-pointer">Shipping Policy</li>
              <li className="hover:text-royal-gold transition-colors cursor-pointer">Size Guide</li>
              <li className="hover:text-royal-gold transition-colors cursor-pointer">Contact Us</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold tracking-[0.3em] uppercase mb-6">Newsletter</h4>
            <p className="text-sm text-gray-500 mb-4">Subscribe for exclusive preview access.</p>
            <div className="flex border-b border-gray-300 pb-2">
              <input type="email" placeholder="Your Email" className="bg-transparent text-sm w-full focus:outline-none" />
              <button className="text-royal-gold uppercase text-[10px] font-bold tracking-widest">Join</button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-gray-400 uppercase tracking-widest">© 2024 Harsh Fashion. All Rights Reserved.</p>
          <div className="flex gap-6">
            <span className="text-[10px] text-gray-400 uppercase tracking-widest hover:text-black transition-colors cursor-pointer">Instagram</span>
            <span className="text-[10px] text-gray-400 uppercase tracking-widest hover:text-black transition-colors cursor-pointer">Pinterest</span>
            <span className="text-[10px] text-gray-400 uppercase tracking-widest hover:text-black transition-colors cursor-pointer">Vogue</span>
          </div>
        </div>
      </footer>

      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemove={handleRemoveFromCart}
        onUpdateQuantity={handleUpdateQuantity}
      />

      <StyleAssistant 
        isOpen={isStylistOpen}
        onClose={() => setIsStylistOpen(false)}
        availableProducts={PRODUCTS}
      />

      {/* Floating Stylist Button for Mobile */}
      {!isStylistOpen && (
        <button 
          onClick={() => setIsStylistOpen(true)}
          className="sm:hidden fixed bottom-6 left-6 z-40 w-12 h-12 bg-deep-maroon text-white rounded-full flex items-center justify-center shadow-2xl animate-bounce"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default App;
