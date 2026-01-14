
import React from 'react';

interface NavbarProps {
  onCartToggle: () => void;
  onStylistToggle: () => void;
  cartCount: number;
  onNavigate: (view: 'home' | 'about') => void;
  currentView: 'home' | 'about';
}

const Navbar: React.FC<NavbarProps> = ({ onCartToggle, onStylistToggle, cartCount, onNavigate, currentView }) => {
  const handleArtisanClick = () => {
    onNavigate('about');
    setTimeout(() => {
      const el = document.getElementById('artisans');
      el?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-4 md:px-8 py-4 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-8">
        <h1 
          onClick={() => onNavigate('home')}
          className="text-2xl md:text-3xl font-bold tracking-tighter text-deep-maroon cursor-pointer hover:opacity-80 transition-opacity"
        >
          HARSH <span className="text-royal-gold">FASHION</span>
        </h1>
        <div className="hidden md:flex gap-6 text-sm font-medium uppercase tracking-widest text-gray-600">
          <button 
            onClick={() => onNavigate('home')}
            className={`hover:text-royal-gold transition-colors ${currentView === 'home' ? 'text-royal-gold font-bold' : ''}`}
          >
            Shop
          </button>
          <button 
            onClick={() => onNavigate('about')}
            className={`hover:text-royal-gold transition-colors ${currentView === 'about' ? 'text-royal-gold font-bold' : ''}`}
          >
            Legacy
          </button>
          <button 
            onClick={handleArtisanClick}
            className="hover:text-royal-gold transition-colors"
          >
            Artisans
          </button>
        </div>
      </div>

      <div className="flex items-center gap-4 md:gap-6">
        <button 
          onClick={onStylistToggle}
          className="hidden sm:flex items-center gap-2 px-4 py-2 bg-deep-maroon text-white text-xs font-bold rounded-full hover:bg-red-900 transition-all shadow-lg active:scale-95"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          AI STYLIST
        </button>
        
        <button className="text-gray-600 hover:text-royal-gold transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>

        <button onClick={onCartToggle} className="relative text-gray-600 hover:text-royal-gold transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-royal-gold text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold animate-in zoom-in">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
