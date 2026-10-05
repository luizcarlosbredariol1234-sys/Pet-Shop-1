import React, { useState } from 'react';
import { Star, Heart, ShoppingBag, ArrowRight, Check } from 'lucide-react';
import { Product } from '../types';

interface ProductShelfProps {
  id: string;
  title: string;
  subtitle: string;
  products: Product[];
  wishlist: { [id: string]: boolean };
  onToggleWishlist: (productId: string) => void;
  onAddToCart: (product: Product) => void;
  onViewAllClick: () => void;
}

export const ProductShelf: React.FC<ProductShelfProps> = ({
  id,
  title,
  subtitle,
  products,
  wishlist,
  onToggleWishlist,
  onAddToCart,
  onViewAllClick,
}) => {
  const [addedIds, setAddedIds] = useState<{ [id: string]: boolean }>({});

  const handleAdd = (product: Product) => {
    onAddToCart(product);
    setAddedIds((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [product.id]: false }));
    }, 1600);
  };

  return (
    <section id={id} className="py-12 bg-white/85 backdrop-blur-2xs border-b border-[#F0EAE4] font-nunito">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Shelf Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-8">
          <div>
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#1A1513]">
              {title}
            </h2>
            <p className="text-xs sm:text-sm text-[#706763] mt-1">
              {subtitle}
            </p>
          </div>

          <button
            onClick={onViewAllClick}
            className="flex items-center gap-1.5 text-xs font-bold text-[#706763] hover:text-[#C5A059] transition-colors group self-start sm:self-auto focus:outline-none cursor-pointer"
          >
            <span>Ver Tudo</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* 5 Product Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {products.map((product) => {
            const isFav = wishlist[product.id];
            const isAdded = addedIds[product.id];

            return (
              <div
                key={product.id}
                className="bg-[#FAF8F5] rounded-xl border border-[#EDE6E1] p-3 sm:p-4 flex flex-col justify-between group hover:border-[#C5A059]/50 hover:shadow-md transition-all duration-300 relative"
              >
                {/* Top Badges & Wishlist Heart */}
                <div className="flex items-center justify-between mb-2">
                  <div>
                    {product.isNew && (
                      <span className="bg-[#B58A46] text-white text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider">
                        Novo
                      </span>
                    )}
                    {product.isBestSeller && (
                      <span className="bg-[#1A1513] text-white text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider">
                        Destaque
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => onToggleWishlist(product.id)}
                    aria-label={isFav ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
                    className="p-1 text-[#A89E99] hover:text-red-500 transition-colors focus:outline-none cursor-pointer"
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        isFav ? 'fill-red-500 text-red-500' : 'text-[#A89E99]'
                      }`}
                    />
                  </button>
                </div>

                {/* Product Image Area */}
                <div className="aspect-square w-full rounded-lg bg-white overflow-hidden p-2 flex items-center justify-center mb-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain group-hover:scale-106 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Info & Pricing */}
                <div>
                  <h3 className="text-xs sm:text-sm font-semibold text-[#241E1C] line-clamp-2 leading-snug group-hover:text-[#C5A059] transition-colors mb-1.5 min-h-[36px]">
                    {product.name}
                  </h3>

                  {/* Rating Stars & Count */}
                  <div className="flex items-center gap-1.5 mb-2.5">
                    <div className="flex text-[#C5A059] gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="text-xs text-[#574E49] font-semibold">
                      ({product.reviewsCount})
                    </span>
                  </div>

                  {/* Price & Cart button */}
                  <div className="flex items-center justify-between pt-1">
                    <span className="font-playfair text-base sm:text-lg font-bold text-[#1A1513]">
                      R$ {product.price.toFixed(2).replace('.', ',')}
                    </span>

                    <button
                      onClick={() => handleAdd(product)}
                      aria-label="Adicionar à sacola"
                      title={isAdded ? 'Adicionado com sucesso!' : 'Adicionar à sacola'}
                      className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all shadow-xs cursor-pointer ${
                        isAdded
                          ? 'bg-emerald-600 text-white scale-105 shadow-sm'
                          : 'bg-[#1A1513] hover:bg-[#C5A059] active:bg-[#9E7D39] text-white'
                      }`}
                    >
                      {isAdded ? (
                        <Check className="w-4 h-4 stroke-[3]" />
                      ) : (
                        <ShoppingBag className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
