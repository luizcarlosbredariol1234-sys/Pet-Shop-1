import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import heritagePlaidImg from '../assets/images/dupet_heritage_plaid_pets_1790954033131.jpg';

interface HeritageBannerProps {
  onExploreClick: () => void;
}

export const HeritageBanner: React.FC<HeritageBannerProps> = ({ onExploreClick }) => {
  return (
    <section className="bg-[#1A1513] text-white py-12 sm:py-16 relative overflow-hidden font-nunito">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Media Asset: Dog & Cat in Plaid Sweaters (6 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group min-h-[320px] bg-[#26201D]">
              <img
                src={heritagePlaidImg}
                onError={(e) => {
                  e.currentTarget.src = '/assets/images/dupet_heritage_plaid_pets_1790954033131.jpg';
                }}
                alt="Cachorro e gato usando roupinhas xadrez da Coleção Heritage Dupet"
                className="w-full h-[320px] sm:h-[400px] object-cover group-hover:scale-103 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 text-xs font-semibold text-[#C5A059] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Malha Térmica Macia & Antialérgica</span>
              </div>
            </div>
          </div>

          {/* Right Copywriting & CTA (6 cols) */}
          <div className="lg:col-span-6 lg:pl-6 text-center lg:text-left relative">
            {/* Circular badge on top right */}
            <div className="hidden lg:flex absolute -top-4 right-4 w-20 h-20 rounded-full border border-[#C5A059]/40 bg-[#241E1C]/80 backdrop-blur-xs flex-col items-center justify-center text-center p-2">
              <span className="text-[9px] font-bold uppercase tracking-wider text-[#C5A059] leading-tight">
                Últimas
              </span>
              <span className="text-[9px] font-bold uppercase tracking-wider text-white leading-tight">
                Unidades
              </span>
            </div>

            <span className="text-xs font-bold tracking-[0.25em] text-[#C5A059] uppercase block mb-3">
              Edição Limitada
            </span>

            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white mb-4">
              A Coleção Heritage Dupet
            </h2>

            <p className="text-sm sm:text-base text-[#D0C6C0] leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              Estilo atemporal e proteção térmica com tecidos respiráveis para companheiros extraordinários aproveitarem os dias frescos com o máximo de conforto.
            </p>

            <button
              onClick={onExploreClick}
              className="inline-flex items-center gap-3 px-8 py-3.5 text-xs sm:text-sm font-bold text-[#1A1513] bg-white hover:bg-[#C5A059] hover:text-white rounded-md transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg group cursor-pointer"
            >
              <span>Conferir Edição Limitada</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
