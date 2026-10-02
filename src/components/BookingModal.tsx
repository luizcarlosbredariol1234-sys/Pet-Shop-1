import React, { useState } from 'react';
import { X, Calendar, Clock, Sparkles, Send, Check } from 'lucide-react';
import { Service } from '../types';
import { BUSINESS_INFO } from '../data/mockData';

interface BookingModalProps {
  service: Service | null;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ service, onClose }) => {
  if (!service) return null;

  const [tutorName, setTutorName] = useState('');
  const [petName, setPetName] = useState('');
  const [petBreed, setPetBreed] = useState('');
  const [dayPreference, setDayPreference] = useState('');

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();

    let message = `🐾 *AGENDAMENTO DE SERVIÇO - DUPET*\n\n`;
    message += `✂️ *Serviço Escolhido:* ${service.title}\n`;
    message += `💰 *Valor Estimado:* ${service.priceFrom}\n`;
    message += `👤 *Tutor(a):* ${tutorName || 'Cliente'}\n`;
    message += `🐶 *Pet:* ${petName || 'Meu pet'} (${petBreed || 'Raça não informada'})\n`;
    if (dayPreference) message += `📅 *Previsão de Data:* ${dayPreference}\n\n`;
    message += `Olá! Gostaria de verificar os horários disponíveis para este agendamento na Dupet.`;

    const url = `https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#E31837]/20 z-10 animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          aria-label="Fechar janela"
          className="absolute top-5 right-5 p-2 text-[#6B5E5E] hover:text-[#2C2424] rounded-xl hover:bg-[#FAF6F0]"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-2">
          <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          <span>Agendamento Rápido</span>
        </div>

        <h3 className="font-fredoka text-2xl font-bold text-[#2C2424] mb-1">
          {service.title}
        </h3>

        <p className="text-xs text-[#6B5E5E] mb-6">
          {service.subtitle} · Duração média: {service.duration} · A partir de {service.priceFrom}
        </p>

        <form onSubmit={handleConfirm} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-[#2C2424] mb-1">
              Seu Nome *
            </label>
            <input
              type="text"
              required
              placeholder="Ex: Luiza Souza"
              value={tutorName}
              onChange={(e) => setTutorName(e.target.value)}
              className="w-full text-sm px-4 py-2.5 rounded-xl border border-neutral-200 focus:border-[#E31837] focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-[#2C2424] mb-1">
                Nome do Pet *
              </label>
              <input
                type="text"
                required
                placeholder="Ex: Bidu"
                value={petName}
                onChange={(e) => setPetName(e.target.value)}
                className="w-full text-sm px-4 py-2.5 rounded-xl border border-neutral-200 focus:border-[#E31837] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#2C2424] mb-1">
                Raça / Porte
              </label>
              <input
                type="text"
                placeholder="Ex: Poodle / Pequeno"
                value={petBreed}
                onChange={(e) => setPetBreed(e.target.value)}
                className="w-full text-sm px-4 py-2.5 rounded-xl border border-neutral-200 focus:border-[#E31837] focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#2C2424] mb-1">
              Preferência de Dia ou Horário
            </label>
            <input
              type="text"
              placeholder="Ex: Esta quinta-feira à tarde"
              value={dayPreference}
              onChange={(e) => setDayPreference(e.target.value)}
              className="w-full text-sm px-4 py-2.5 rounded-xl border border-neutral-200 focus:border-[#E31837] focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-2 flex items-center justify-center gap-2 py-3.5 px-4 text-sm font-bold text-white bg-[#E31837] hover:bg-[#C5112D] active:bg-[#A80B22] rounded-xl shadow-md shadow-[#E31837]/25 transition-all"
          >
            <Send className="w-4 h-4" />
            <span>Confirmar e Chamar no WhatsApp</span>
          </button>
        </form>
      </div>
    </div>
  );
};
