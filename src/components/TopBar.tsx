import React from 'react';
import { Truck, Sparkles, MessageCircle, Heart } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-[#1A1513] text-[#D8CFCA] text-[11px] sm:text-xs py-2 px-4 border-b border-white/5 font-nunito">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-4 text-center sm:text-left">
        {/* Left */}
        <div className="flex items-center gap-1.5 justify-center sm:justify-start">
          <Truck className="w-3.5 h-3.5 text-[#C5A059]" />
          <span>Frete Grátis em Pedidos Acima de R$ 99 em Cândido Mota</span>
        </div>

        {/* Center */}
        <div className="hidden md:flex items-center gap-1.5 text-[#EDE6E1] font-medium tracking-wide">
          <span>Cuidado Exclusivo para um Amanhã Mais Feliz</span>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3 justify-center sm:justify-end">
          <a
            href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>Suporte WhatsApp: {BUSINESS_INFO.phone}</span>
          </a>
          <span className="hidden sm:inline text-white/20">|</span>
          <span className="hidden sm:inline flex items-center gap-1 text-[#C5A059]">
            <Heart className="w-3 h-3 fill-current" />
            <span>Troca Fácil & Garantida</span>
          </span>
        </div>
      </div>
    </div>
  );
};
