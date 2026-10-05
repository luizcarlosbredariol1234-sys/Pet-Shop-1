import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CATEGORIES_DATA } from '../data/mockData';

interface ShopByCategoryProps {
  onSelectCategory: (categoryId: string) => void;
}

export const ShopByCategory: React.FC<ShopByCategoryProps> = ({ onSelectCategory }) => {
  return (
    <section id="categorias" className="py-12 bg-white/80 backdrop-blur-2xs border-b border-[#F0EAE4] font-nunito">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header row */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#1A1513]">
            Compre por Categoria
          </h2>
          <button
            onClick={() => onSelectCategory('todos')}
            className="flex items-center gap-1.5 text-xs font-bold text-[#706763] hover:text-[#C5A059] transition-colors group focus:outline-none cursor-pointer"
          >
            <span>Ver Tudo</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* 9 Circular Category Items */}
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-4 sm:gap-3">
          {CATEGORIES_DATA.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className="flex flex-col items-center text-center group cursor-pointer focus:outline-none"
            >
              {/* Circular image with warm beige background container */}
              <div className="w-18 h-18 sm:w-20 sm:h-20 lg:w-22 lg:h-22 rounded-full overflow-hidden bg-[#FAF6F0] p-1 border-2 border-transparent group-hover:border-[#C5A059] transition-all duration-300 shadow-2xs group-hover:shadow-md mb-2.5 flex items-center justify-center">
                <img
                  src={cat.image}
                  alt={cat.name}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                  className="w-full h-full object-cover rounded-full group-hover:scale-108 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Category label */}
              <span className="text-[11px] sm:text-xs font-semibold text-[#3D3531] group-hover:text-[#C5A059] transition-colors leading-tight max-w-[90px]">
                {cat.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
