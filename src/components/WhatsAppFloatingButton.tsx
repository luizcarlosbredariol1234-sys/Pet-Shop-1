import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';

export const WhatsAppFloatingButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const defaultMessage = 'Olá Dupet! Gostaria de tirar uma dúvida ou agendar um horário para meu pet.';
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end pointer-events-auto">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="mb-2 bg-white rounded-2xl p-3 shadow-xl border border-[#D4AF37]/30 max-w-[220px] text-xs relative animate-in fade-in slide-in-from-bottom-2 duration-300">
          <button
            onClick={() => setShowTooltip(false)}
            aria-label="Fechar mensagem"
            className="absolute -top-1.5 -left-1.5 w-5 h-5 bg-neutral-100 hover:bg-neutral-200 text-neutral-600 rounded-full flex items-center justify-center text-[10px]"
          >
            <X className="w-3 h-3" />
          </button>
          <div className="flex items-center gap-1.5 text-emerald-600 font-bold mb-0.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Atendimento Online</span>
          </div>
          <p className="text-[#2C2424] font-medium leading-snug">
            Olá! Precisa de banho, consulta ou ração em Cândido Mota?
          </p>
        </div>
      )}

      {/* Main Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp da Dupet Pet Shop"
        className="group relative flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-lg shadow-emerald-500/35 hover:shadow-xl hover:shadow-emerald-500/50 transition-all duration-300 transform hover:scale-108 active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300"
      >
        {/* Subtle breathing ripple */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-30 group-hover:opacity-50 animate-ping pointer-events-none" />

        <MessageCircle className="w-7 h-7 fill-white stroke-none group-hover:rotate-6 transition-transform" />
      </a>
    </div>
  );
};
