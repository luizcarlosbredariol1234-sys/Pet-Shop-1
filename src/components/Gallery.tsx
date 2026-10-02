import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Sparkles, X, Heart, Eye } from 'lucide-react';
import { GALLERY_DATA } from '../data/mockData';
import { GalleryItem } from '../types';

export const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('todos');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const filters = [
    { id: 'todos', label: 'Todos os Pets' },
    { id: 'banho', label: 'Banhos Relaxantes' },
    { id: 'tosa', label: 'Tosa Artística' },
    { id: 'spa', label: 'Spa & Ozônio' },
    { id: 'felinos', label: 'Mundo Felino' },
  ];

  const filteredItems = activeFilter === 'todos'
    ? GALLERY_DATA
    : GALLERY_DATA.filter((item) => item.category === activeFilter);

  return (
    <section id="galeria" className="py-20 bg-[#FAF6F0]/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs md:text-sm font-bold text-[#E31837] tracking-wider uppercase mb-3">
            <Camera className="w-4 h-4 text-[#D4AF37]" />
            <span>Galeria de Clientes Felizes</span>
          </div>

          <h2 className="font-fredoka text-3xl sm:text-4xl md:text-5xl font-bold text-[#2C2424] mb-4 text-balance">
            Sorrisos, rabinhos abanando e peles saudáveis
          </h2>

          <p className="text-base sm:text-lg text-[#6B5E5E] font-nunito leading-relaxed">
            Veja um pouco do dia a dia e das transformações carinhosas realizadas aqui na Dupet em Cândido Mota.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E31837] ${
                activeFilter === f.id
                  ? 'bg-[#E31837] text-white shadow-md shadow-[#E31837]/20 scale-102'
                  : 'bg-white text-[#6B5E5E] hover:text-[#2C2424] hover:bg-[#F5EFEB] border border-[#E31837]/10'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedPhoto(item)}
                className="group relative cursor-pointer bg-white rounded-3xl overflow-hidden border border-[#E31837]/15 shadow-xs hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-square overflow-hidden bg-[#FAF6F0] relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />

                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                  {/* Hover icon */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-xs text-[#2C2424] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-1 group-hover:translate-y-0">
                    <Eye className="w-4 h-4" />
                  </div>

                  {/* Info Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center gap-1.5 text-xs text-[#D4AF37] font-bold mb-1">
                      <Heart className="w-3.5 h-3.5 fill-current" />
                      <span>{item.petName} ({item.breed})</span>
                    </div>
                    <h4 className="font-fredoka text-base font-bold leading-tight drop-shadow-sm">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-neutral-200 mt-1 line-clamp-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Modal Lightbox */}
        {selectedPhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200">
            <div
              className="absolute inset-0"
              onClick={() => setSelectedPhoto(null)}
            />
            <div className="relative bg-white rounded-3xl overflow-hidden max-w-lg w-full shadow-2xl z-10 border border-[#D4AF37]/30">
              <button
                onClick={() => setSelectedPhoto(null)}
                aria-label="Fechar foto ampliada"
                className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-square bg-black overflow-hidden">
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
                    {selectedPhoto.breed}
                  </span>
                  <span className="text-xs font-bold text-[#E31837] flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    Dupet Cândido Mota
                  </span>
                </div>
                <h3 className="font-fredoka text-xl font-bold text-[#2C2424] mb-2">
                  {selectedPhoto.title} — {selectedPhoto.petName}
                </h3>
                <p className="text-sm text-[#6B5E5E] font-nunito leading-relaxed">
                  {selectedPhoto.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
