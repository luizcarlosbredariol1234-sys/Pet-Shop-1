import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock, MessageSquare, Send, CheckCircle2, Navigation, Heart, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService }) => {
  const [tutorName, setTutorName] = useState('');
  const [tutorPhone, setTutorPhone] = useState('');
  const [petName, setPetName] = useState('');
  const [petType, setPetType] = useState('Cachorro');
  const [service, setService] = useState(initialService || 'Banho & Tosa Especializada');
  const [preferredDate, setPreferredDate] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let message = `🐾 *NOVO AGENDAMENTO / CONTATO - DUPET*\n\n`;
    message += `👤 *Tutor(a):* ${tutorName || 'Não informado'}\n`;
    message += `📱 *Telefone:* ${tutorPhone || 'Não informado'}\n`;
    message += `🐶 *Pet:* ${petName || 'Não informado'} (${petType})\n`;
    message += `✂️ *Serviço/Interesse:* ${service}\n`;
    if (preferredDate) message += `📅 *Data/Horário Preferencial:* ${preferredDate}\n`;
    if (notes) message += `📝 *Observações:* ${notes}\n\n`;
    message += `Enviado através do site da Dupet Pet Shop em Cândido Mota.`;

    const url = `https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <section id="contato" className="py-20 bg-[#FAF6F0]/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs md:text-sm font-bold text-[#E31837] tracking-wider uppercase mb-3">
            <MapPin className="w-4 h-4 text-[#D4AF37]" />
            <span>Fácil Acesso no Centro</span>
          </div>

          <h2 className="font-fredoka text-3xl sm:text-4xl md:text-5xl font-bold text-[#2C2424] mb-4 text-balance">
            Venha nos visitar ou mande uma mensagem
          </h2>

          <p className="text-base sm:text-lg text-[#6B5E5E] font-nunito leading-relaxed">
            Estamos de portas abertas na região central de Cândido Mota, prontos para receber você e seu pet com carinho e respeito.
          </p>
        </div>

        {/* 2-Column Layout: Contact Details & Map vs Interactive Booking Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Column 1: Info Cards & Location (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Address Card */}
            <div className="bg-white rounded-3xl p-6 border border-[#E31837]/15 shadow-xs hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FDE8EB] text-[#E31837] flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-fredoka text-lg font-bold text-[#2C2424] mb-1">
                    Nosso Endereço
                  </h3>
                  <p className="text-sm text-[#2C2424] font-medium leading-snug">
                    {BUSINESS_INFO.address}
                  </p>
                  <p className="text-xs text-[#6B5E5E] mt-0.5">
                    {BUSINESS_INFO.city}, CEP {BUSINESS_INFO.cep}
                  </p>
                  <p className="text-xs text-[#D4AF37] font-semibold mt-2">
                    Região central, fácil estacionamento
                  </p>

                  <a
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 text-xs font-bold text-[#E31837] hover:underline"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Abrir rota no Google Maps</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="bg-white rounded-3xl p-6 border border-[#E31837]/15 shadow-xs hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FDF9EA] text-[#D4AF37] flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-fredoka text-lg font-bold text-[#2C2424] mb-1">
                    Telefone & WhatsApp
                  </h3>
                  <p className="font-fredoka text-xl font-bold text-[#E31837]">
                    {BUSINESS_INFO.phone}
                  </p>
                  <p className="text-xs text-[#6B5E5E] mt-1">
                    Atendimento ágil para agendamentos, dúvidas clínicas e pedidos expressos de farmácia.
                  </p>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-white rounded-3xl p-6 border border-[#E31837]/15 shadow-xs hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FAF6F0] text-[#2C2424] flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-[#E31837]" />
                </div>
                <div>
                  <h3 className="font-fredoka text-lg font-bold text-[#2C2424] mb-1">
                    Horário de Atendimento
                  </h3>
                  <p className="text-xs text-[#2C2424] font-medium leading-relaxed">
                    {BUSINESS_INFO.openingHours}
                  </p>
                  <p className="text-[11px] text-emerald-600 font-semibold mt-1">
                    ✓ Consultório e Banho com horário marcado para evitar espera
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Interactive Scheduling / Order Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-[#E31837]/15 shadow-xl relative">
            <div className="mb-6">
              <h3 className="font-fredoka text-2xl font-bold text-[#2C2424] mb-2">
                Agende um serviço ou faça um pedido
              </h3>
              <p className="text-xs sm:text-sm text-[#6B5E5E]">
                Preencha os dados abaixo para adiantar o atendimento do seu pet. Ao clicar, sua mensagem será formatada e enviada diretamente para o nosso WhatsApp.
              </p>
            </div>

            {submitted && (
              <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <div className="text-xs">
                  <strong className="font-bold block">Mensagem preparada com sucesso!</strong>
                  Se a conversa não abriu automaticamente,{' '}
                  <a
                    href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline font-bold"
                  >
                    clique aqui para falar conosco no WhatsApp
                  </a>.
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#2C2424] mb-1.5">
                    Seu Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Ana Clara Martins"
                    value={tutorName}
                    onChange={(e) => setTutorName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#E31837] focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#2C2424] mb-1.5">
                    Telefone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(18) 99999-9999"
                    value={tutorPhone}
                    onChange={(e) => setTutorPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#E31837] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-[#2C2424] mb-1.5">
                    Nome e Raça do Pet
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Thor (Shih Tzu de 2 anos)"
                    value={petName}
                    onChange={(e) => setPetName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#E31837] focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#2C2424] mb-1.5">
                    Espécie
                  </label>
                  <select
                    value={petType}
                    onChange={(e) => setPetType(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#E31837] bg-white transition-all"
                  >
                    <option value="Cachorro">Cachorro</option>
                    <option value="Gato">Gato</option>
                    <option value="Outro Pet">Outro Pet</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#2C2424] mb-1.5">
                    Serviço ou Pedido Desejado
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#E31837] bg-white transition-all"
                  >
                    <option value="Banho & Tosa Especializada">Banho & Tosa Especializada</option>
                    <option value="Consultório Veterinário">Consultório Veterinário Preventivo</option>
                    <option value="Spa & Banho de Ozônio">Spa & Banho de Ozônio</option>
                    <option value="Creche & Daycare">Creche & Daycare</option>
                    <option value="Entrega de Ração e Petiscos">Entrega de Ração & Petiscos</option>
                    <option value="Farmácia e Antipulgas">Farmácia e Antipulgas</option>
                    <option value="Outro assunto">Outro assunto</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#2C2424] mb-1.5">
                    Data ou Turno Preferencial
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Próxima terça pela manhã"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#E31837] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#2C2424] mb-1.5">
                  Alguma recomendação de saúde ou comportamento?
                </label>
                <textarea
                  rows={3}
                  placeholder="Ex: Ele tem medo de soprador / pele alérgica / precisa de tosa na tesoura..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#E31837] focus:border-transparent transition-all"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 py-4 px-6 text-base font-bold text-white bg-[#E31837] hover:bg-[#C5112D] active:bg-[#A80B22] rounded-2xl shadow-lg shadow-[#E31837]/25 hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#E31837]"
              >
                <Send className="w-5 h-5" />
                <span>Entrar em contato</span>
              </button>

              <div className="flex items-center justify-center gap-2 pt-2 text-[11px] text-[#6B5E5E]">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Seus dados são confidenciais e protegidos. Atendimento sem compromisso.</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
