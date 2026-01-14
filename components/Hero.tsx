
import React from 'react';

interface HeroProps {
  onNavigate: (view: 'home' | 'about') => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="relative h-[80vh] w-full overflow-hidden bg-gray-900">
      <img 
        src="https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=2000&auto=format&fit=crop" 
        alt="Heritage Fashion"
        className="w-full h-full object-cover opacity-60"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <p className="text-royal-gold uppercase tracking-[0.3em] font-bold text-sm mb-4">Crafting Indian Heritage</p>
        <h2 className="text-5xl md:text-7xl text-white mb-6 max-w-4xl leading-tight">
          Timeless Elegance, <br/> Modern Tradition
        </h2>
        <p className="text-gray-200 max-w-xl text-lg mb-10 font-light">
          Discover the finest handpicked ethnic collection from every corner of India. 
          From Banaras to Kanchipuram, experience luxury like never before.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            className="px-8 py-4 bg-royal-gold text-white font-bold tracking-widest hover:bg-yellow-600 transition-all"
            onClick={() => {
              const el = document.getElementById('collection');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            SHOP THE COLLECTION
          </button>
          <button 
            onClick={() => onNavigate('about')}
            className="px-8 py-4 border border-white text-white font-bold tracking-widest hover:bg-white hover:text-black transition-all"
          >
            OUR STORY
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
