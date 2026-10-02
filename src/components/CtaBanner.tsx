import React from 'react';
import { motion } from 'motion/react';
import { Phone, Sparkles, Heart } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';

interface CtaBannerProps {
  onContactClick: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onContactClick }) => {
  return (
    <section className="py-16 md:py-20 bg-[#FFFDF9] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl md:rounded-[2.5rem] bg-gradient-to-r from-[#E31837] via-[#D11531] to-[#B30F28] text-white p-8 sm:p-12 md:p-16 overflow-hidden shadow-2xl">
          {/* Subtle floating paw decorations in SVG */}
          <div className="absolute top-6 left-10 opacity-10 text-white pointer-events-none transform -rotate-12">
            <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 11.5c-2.4 0-4.5 1.8-4.5 4.3 0 1.8 1.2 3.2 2.7 3.8.4.2.9.4 1.8.4s1.4-.2 1.8-.4c1.5-.6 2.7-2 2.7-3.8 0-2.5-2.1-4.3-4.5-4.3zM5.5 11c1.4 0 2.5-1.3 2.5-3s-1.1-3-2.5-3S3 6.3 3 8s1.1 3 2.5 3zm13 0c1.4 0 2.5-1.3 2.5-3s-1.1-3-2.5-3S16 6.3 16 8s1.1 3 2.5 3zm-9.5-2c1.4 0 2.5-1.3 2.5-3S10.4 3 9 3 6.5 4.3 6.5 6s1.1 3 2.5 3zm6 0c1.4 0 2.5-1.3 2.5-3S14.4 3 13 3s-2.5 1.3-2.5 3 1.1 3 2.5 3z" />
            </svg>
          </div>
          <div className="absolute -bottom-8 -right-8 opacity-10 text-white pointer-events-none transform rotate-15">
            <svg className="w-48 h-48" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 11.5c-2.4 0-4.5 1.8-4.5 4.3 0 1.8 1.2 3.2 2.7 3.8.4.2.9.4 1.8.4s1.4-.2 1.8-.4c1.5-.6 2.7-2 2.7-3.8 0-2.5-2.1-4.3-4.5-4.3zM5.5 11c1.4 0 2.5-1.3 2.5-3s-1.1-3-2.5-3S3 6.3 3 8s1.1 3 2.5 3zm13 0c1.4 0 2.5-1.3 2.5-3s-1.1-3-2.5-3S16 6.3 16 8s1.1 3 2.5 3zm-9.5-2c1.4 0 2.5-1.3 2.5-3S10.4 3 9 3 6.5 4.3 6.5 6s1.1 3 2.5 3zm6 0c1.4 0 2.5-1.3 2.5-3S14.4 3 13 3s-2.5 1.3-2.5 3 1.1 3 2.5 3z" />
            </svg>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-xs text-xs font-bold text-white mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>O dia favorito do seu melhor amigo começa aqui</span>
            </div>

            {/* Headline */}
            <h2 className="font-fredoka text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
              Pronto para proporcionar o melhor cuidado para seu pet em Cândido Mota?
            </h2>

            <p className="text-base sm:text-lg text-white/90 font-nunito leading-relaxed mb-8 max-w-2xl mx-auto">
              Agende o banho e tosa, marque a consulta preventiva ou solicite a entrega da ração favorita direto pelo nosso WhatsApp.
            </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onContactClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-[#2C2424] bg-white hover:bg-[#FAF6F0] rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <Phone className="w-5 h-5 text-[#E31837]" />
                <span>Entrar em contato</span>
              </button>

              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent('Olá Dupet! Gostaria de agendar um horário para o meu pet.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-bold text-white bg-black/20 hover:bg-black/30 border border-white/30 rounded-2xl transition-all"
              >
                <span>Falar no WhatsApp: {BUSINESS_INFO.phone}</span>
              </a>
            </div>

            {/* Micro reassurance */}
            <p className="mt-6 text-xs text-white/80 font-medium">
              📍 R. Joaquim Galvão de França, 04 - Centro, Cândido Mota - SP · Resposta média em menos de 5 minutos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
