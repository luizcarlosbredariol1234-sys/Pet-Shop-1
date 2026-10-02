import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Gem, Scissors, Heart } from 'lucide-react';
import heroFamilyImg from '../assets/images/dupet_luxury_hero_family_1790954018577.jpg';

interface HeroProps {
  onShopClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onShopClick }) => {
  return (
    <section id="inicio" className="bg-[#FAF8F5] pt-6 sm:pt-10 pb-12 sm:pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Column 1: Copywriting & Value Propositions (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            {/* Kicker */}
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#706763] uppercase mb-2">
              Mais que Pets
            </span>

            {/* Giant Serif Display Headline */}
            <h1 className="font-playfair text-[44px] sm:text-[58px] lg:text-[64px] font-bold text-[#1A1513] leading-[1.05] tracking-tight mb-5">
              Eles são Família
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-[#574E49] leading-relaxed mb-8 max-w-md font-nunito">
              Curadoria de luxo, nutrição nobre e carinho de verdade para aqueles que iluminam a sua vida todos os dias.
            </p>

            {/* CTA Button */}
            <div className="mb-10">
              <button
                onClick={onShopClick}
                className="inline-flex items-center gap-3 px-7 py-3.5 text-xs sm:text-sm font-bold text-white bg-[#1A1513] hover:bg-[#C5A059] active:bg-[#9E7D39] rounded-md transition-all duration-200 transform hover:-translate-y-0.5 shadow-md group cursor-pointer"
              >
                <span>Conferir a Coleção</span>
                <ArrowRight className="w-4 h-4 text-white/80 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* 3 Trust Signals Icons below CTA */}
            <div className="flex items-center gap-6 sm:gap-8 pt-6 border-t border-[#E5DFD9]">
              <div className="flex flex-col items-start gap-1">
                <div className="w-8 h-8 rounded-full bg-[#F5F1EB] text-[#C5A059] flex items-center justify-center">
                  <Gem className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-bold text-[#1A1513]">Qualidade Premium</span>
              </div>

              <div className="flex flex-col items-start gap-1">
                <div className="w-8 h-8 rounded-full bg-[#F5F1EB] text-[#C5A059] flex items-center justify-center">
                  <Scissors className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-bold text-[#1A1513]">Design Cuidadoso</span>
              </div>

              <div className="flex flex-col items-start gap-1">
                <div className="w-8 h-8 rounded-full bg-[#F5F1EB] text-[#C5A059] flex items-center justify-center">
                  <Heart className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-bold text-[#1A1513]">Pets Mais Felizes</span>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Big Visual Asset (7 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-7 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#E5DFD9] bg-white group min-h-[360px]">
              <img
                src={heroFamilyImg}
                onError={(e) => {
                  e.currentTarget.src = '/assets/images/dupet_luxury_hero_family_1790954018577.jpg';
                }}
                alt="Golden Retriever de gravata borboleta e gatinho persa em caminha de luxo na Dupet Pet Shop"
                className="w-full h-[360px] sm:h-[460px] lg:h-[500px] object-cover object-center group-hover:scale-102 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />

              {/* Ambient overlay subtle gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />

              {/* Top right wall art text badge matching reference */}
              <div className="absolute top-4 right-4 bg-[#F2EDE6]/90 backdrop-blur-xs px-3.5 py-2.5 rounded-lg border border-[#D5CCC3] text-right shadow-xs">
                <p className="font-playfair text-[10px] tracking-[0.2em] font-bold text-[#3D3531] uppercase">
                  Bons Pets
                </p>
                <p className="font-playfair text-[10px] tracking-[0.2em] font-bold text-[#C5A059] uppercase">
                  Pessoas Mais
                </p>
                <p className="font-playfair text-[10px] tracking-[0.2em] font-bold text-[#3D3531] uppercase">
                  Felizes
                </p>
              </div>

              {/* Bottom pet quote banner matching reference */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white/95 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] animate-pulse"></span>
                  <span className="font-playfair tracking-wider uppercase text-[11px] drop-shadow-sm">
                    Um mundo mais feliz para quem tem patinhas
                  </span>
                </div>
                <span className="hidden sm:inline text-[10px] tracking-widest text-[#E5DFD9] uppercase font-bold">
                  Dupet Boutique
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
