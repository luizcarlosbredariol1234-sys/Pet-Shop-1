import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Star, Check, Sparkles, MessageCircle } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS_DATA, BUSINESS_INFO } from '../data/mockData';

interface ProductsProps {
  onAddToCart: (product: Product) => void;
}

export const Products: React.FC<ProductsProps> = ({ onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [addedIds, setAddedIds] = useState<{ [id: string]: boolean }>({});

  const categories = [
    { id: 'todos', label: 'Todos os Itens' },
    { id: 'racao', label: 'Rações Super Premium' },
    { id: 'petiscos', label: 'Petiscos Naturais' },
    { id: 'farmacia', label: 'Farmácia Pet' },
    { id: 'higiene', label: 'Higiene & Cosméticos' },
    { id: 'brinquedos', label: 'Acessórios & Camas' },
  ];

  const filteredProducts = activeCategory === 'todos'
    ? PRODUCTS_DATA
    : PRODUCTS_DATA.filter((p) => p.category === activeCategory);

  const handleAdd = (product: Product) => {
    onAddToCart(product);
    setAddedIds((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [product.id]: false }));
    }, 1800);
  };

  const handleQuickWhatsApp = (product: Product) => {
    const text = `Olá Dupet! Tenho interesse no produto: *${product.name}* (R$ ${product.price.toFixed(2).replace('.', ',')}). Vocês têm disponível para entrega em Cândido Mota?`;
    const url = `https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="produtos" className="py-20 bg-[#FFFDF9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs md:text-sm font-bold text-[#E31837] tracking-wider uppercase mb-3">
            <span>Boutique Selecionada</span>
            <span aria-hidden="true" className="text-[#D4AF37]">·</span>
            <span>Entrega Rápida</span>
          </div>

          <h2 className="font-fredoka text-3xl sm:text-4xl md:text-5xl font-bold text-[#2C2424] mb-4 text-balance">
            Produtos nobres para a nutrição e diversão do seu pet
          </h2>

          <p className="text-base sm:text-lg text-[#6B5E5E] font-nunito leading-relaxed">
            Curadoria criteriosa de marcas livres de corantes, petiscos mastigáveis funcionais e medicamentos com selo de garantia de procedência.
          </p>
        </div>

        {/* Interactive Segmented Filter Controls */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E31837] ${
                activeCategory === cat.id
                  ? 'bg-[#E31837] text-white shadow-md shadow-[#E31837]/20 scale-102'
                  : 'bg-[#FAF6F0] text-[#6B5E5E] hover:text-[#2C2424] hover:bg-[#F5EFEB]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl border border-[#E31837]/15 overflow-hidden shadow-xs hover:shadow-xl hover:border-[#E31837]/30 transition-all duration-300 flex flex-col group"
              >
                {/* Product Image Area */}
                <div className="relative h-56 bg-[#FAF6F0] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />

                  {/* Highlight pill */}
                  {product.highlight && (
                    <div className="absolute top-3 left-3 bg-[#D4AF37] text-white text-[11px] font-bold px-3 py-1 rounded-xl shadow-xs">
                      {product.highlight}
                    </div>
                  )}

                  {/* Stock indicator */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs text-emerald-700 text-[11px] font-bold px-2.5 py-0.5 rounded-lg flex items-center gap-1 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    Em Estoque
                  </div>

                  {/* Volume/Weight bottom pill */}
                  {product.weightOrVolume && (
                    <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-0.5 rounded-md">
                      {product.weightOrVolume}
                    </div>
                  )}
                </div>

                {/* Product Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Category unboxed text */}
                    <div className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-1.5">
                      {product.categoryLabel}
                    </div>

                    <h3 className="font-fredoka text-lg font-bold text-[#2C2424] leading-snug mb-2 group-hover:text-[#E31837] transition-colors line-clamp-2">
                      {product.name}
                    </h3>

                    {/* Star ratings */}
                    <div className="flex items-center gap-1.5 mb-3 text-xs text-[#6B5E5E]">
                      <div className="flex text-[#D4AF37]">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3.5 h-3.5 ${
                              i < Math.floor(product.rating)
                                ? 'fill-current'
                                : 'text-[#D4AF37]/30'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="font-bold text-[#2C2424]">{product.rating}</span>
                      <span>({product.reviewsCount} avaliações)</span>
                    </div>

                    <p className="text-xs text-[#6B5E5E] leading-relaxed mb-6 font-nunito line-clamp-2">
                      {product.description}
                    </p>
                  </div>

                  {/* Pricing and Actions */}
                  <div>
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="font-fredoka text-2xl font-bold text-[#E31837]">
                        R$ {product.price.toFixed(2).replace('.', ',')}
                      </span>
                      {product.originalPrice && (
                        <span className="text-xs text-[#6B5E5E] line-through">
                          R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                        </span>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      {/* Add to Bag */}
                      <button
                        onClick={() => handleAdd(product)}
                        className={`flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-bold rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E31837] ${
                          addedIds[product.id]
                            ? 'bg-emerald-600 text-white shadow-xs'
                            : 'bg-[#FDE8EB] text-[#E31837] hover:bg-[#E31837] hover:text-white'
                        }`}
                      >
                        {addedIds[product.id] ? (
                          <>
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                            <span>Adicionado!</span>
                          </>
                        ) : (
                          <>
                            <ShoppingBag className="w-3.5 h-3.5" />
                            <span>Colocar na Sacola</span>
                          </>
                        )}
                      </button>

                      {/* WhatsApp 1-Click order */}
                      <button
                        onClick={() => handleQuickWhatsApp(product)}
                        title="Pedir direto no WhatsApp da loja"
                        className="flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-xl transition-colors shadow-xs"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Pedir no Zap</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Tele-entrega Banner */}
        <div className="mt-14 bg-gradient-to-r from-[#FAF6F0] via-white to-[#FDF9EA] rounded-2xl p-6 border border-[#E31837]/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#E31837] text-white flex items-center justify-center shrink-0 shadow-md shadow-[#E31837]/20">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <div>
              <p className="font-fredoka text-lg font-bold text-[#2C2424]">
                Precisando de um produto urgente que não viu aqui?
              </p>
              <p className="text-xs sm:text-sm text-[#6B5E5E]">
                Trabalhamos com mais de 1.200 itens em estoque físico na loja de Cândido Mota. Fale agora com nossa equipe!
              </p>
            </div>
          </div>
          <a
            href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent('Olá Dupet! Estou procurando um produto específico para o meu pet. Vocês têm em estoque?')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-[#E31837] hover:bg-[#C5112D] rounded-xl shadow-md shadow-[#E31837]/20 transition-all hover:-translate-y-0.5 whitespace-nowrap"
          >
            Consultar Estoque Completo
          </a>
        </div>
      </div>
    </section>
  );
};
