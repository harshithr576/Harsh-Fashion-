
import React from 'react';

interface AboutUsProps {
  onNavigate: (view: 'home' | 'about') => void;
}

const AboutUs: React.FC<AboutUsProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-gray-900">
        <img 
          src="https://images.unsplash.com/photo-1590736704728-f4730bb3c3af?q=80&w=2000&auto=format&fit=crop" 
          alt="Artisan Weaving" 
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative text-center px-4">
          <h1 className="text-5xl md:text-7xl text-white mb-4">Our Legacy</h1>
          <p className="text-royal-gold uppercase tracking-[0.4em] font-bold text-sm">Since 1984</p>
        </div>
      </section>

      {/* The Story */}
      <section className="py-24 px-4 md:px-8 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl text-deep-maroon mb-6 leading-tight">
              A Journey Through the Golden Threads of India
            </h2>
            <div className="w-20 h-1 bg-royal-gold mb-8"></div>
            <div className="space-y-6 text-gray-600 font-light leading-relaxed">
              <p>
                Harsh Fashion was born from a singular vision: to preserve and celebrate the unparalleled textile heritage of India. Our story began in a small atelier in Banaras, where we were captivated by the rhythmic sound of the handloom and the intricate dance of gold zari.
              </p>
              <p>
                For over three decades, we have traversed the length and breadth of the subcontinent, from the vibrant block-printing clusters of Jaipur to the master weavers of Kanchipuram. Our mission is to bridge the gap between ancient craftsmanship and contemporary luxury.
              </p>
              <p>
                Every piece at Harsh Fashion is more than just a garment; it is a canvas of history, hand-woven with patience and infused with the soul of the artisan.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 border border-royal-gold/20 translate-x-4 translate-y-4"></div>
            <img 
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop" 
              alt="Brand Founder" 
              className="relative w-full aspect-[4/5] object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Artisan Spotlight */}
      <section id="artisans" className="bg-gray-50 py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-royal-gold uppercase tracking-widest text-xs font-bold mb-4">The Human Touch</p>
            <h2 className="text-4xl font-serif">The Hands Behind the Luxury</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 shadow-sm">
              <img src="https://images.unsplash.com/photo-1534073828943-f801091bb28f?q=80&w=600&auto=format&fit=crop" className="w-full aspect-square object-cover mb-6" alt="Weaver" />
              <h3 className="text-xl font-serif mb-3">Master Weavers</h3>
              <p className="text-sm text-gray-500 font-light">Supporting over 500 weaver families across Banaras and Bengal, ensuring fair wages and sustainable livelihoods.</p>
            </div>
            <div className="bg-white p-8 shadow-sm">
              <img src="https://images.unsplash.com/photo-1605647540924-852290f6b0d5?q=80&w=600&auto=format&fit=crop" className="w-full aspect-square object-cover mb-6" alt="Embroidery" />
              <h3 className="text-xl font-serif mb-3">Intricate Zardosi</h3>
              <p className="text-sm text-gray-500 font-light">Our embroidery specialists in Lucknow and Surat spend hundreds of hours on a single lehenga, perfecting every stitch.</p>
            </div>
            <div className="bg-white p-8 shadow-sm">
              <img src="https://images.unsplash.com/photo-1591824438708-ce405f36ba3d?q=80&w=600&auto=format&fit=crop" className="w-full aspect-square object-cover mb-6" alt="Quality" />
              <h3 className="text-xl font-serif mb-3">Conscious Luxury</h3>
              <p className="text-sm text-gray-500 font-light">We use only natural dyes and high-grade silks, committed to a zero-waste philosophy in our production cycles.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values CTA */}
      <section className="py-24 text-center px-4">
        <h2 className="text-3xl md:text-5xl font-serif mb-8 text-deep-maroon">Wear a Story, Own a Heritage</h2>
        <button 
          onClick={() => onNavigate('home')}
          className="px-10 py-4 bg-deep-maroon text-white font-bold tracking-widest hover:bg-red-900 transition-all"
        >
          EXPLORE THE COLLECTION
        </button>
      </section>
    </div>
  );
};

export default AboutUs;
