
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (p: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="group flex flex-col bg-white">
      <div className="relative overflow-hidden aspect-[3/4]">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
          <button 
            onClick={() => onAddToCart(product)}
            className="w-full bg-white py-3 text-xs font-bold tracking-widest text-black hover:bg-black hover:text-white transition-all uppercase"
          >
            Add to Bag
          </button>
        </div>
        {product.isFeatured && (
          <span className="absolute top-4 left-4 bg-deep-maroon text-white text-[10px] font-bold px-3 py-1 tracking-widest uppercase">
            Exclusive
          </span>
        )}
      </div>
      <div className="pt-4 pb-6 flex flex-col items-center text-center">
        <p className="text-[10px] text-royal-gold font-bold uppercase tracking-widest mb-1">{product.category}</p>
        <h3 className="text-lg font-serif mb-1 group-hover:text-deep-maroon transition-colors">{product.name}</h3>
        <p className="text-sm text-gray-500 font-light">₹{product.price.toLocaleString('en-IN')}</p>
      </div>
    </div>
  );
};

export default ProductCard;
