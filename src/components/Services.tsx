import React from 'react';
import { motion } from 'motion/react';
import { Check, Clock, Calendar, Sparkles, Scissors, Stethoscope, HeartHandshake, Utensils, Pill } from 'lucide-react';
import { Service } from '../types';
import { SERVICES_DATA, BUSINESS_INFO } from '../data/mockData';

interface ServicesProps {
  onSelectService: (service: Service) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'banho-tosa':
        return <Scissors className="w-5 h-5 text-[#E31837]" />;
      case 'consultorio-vet':
        return <Stethoscope className="w-5 h-5 text-[#E31837]" />;
      case 'spa-ozonioterapia':
        return <Sparkles className="w-5 h-5 text-[#D4AF37]" />;
      case 'daycare-hotel':
        return <HeartHandshake className="w-5 h-5 text-[#E31837]" />;
      case 'nutricao-consultoria':
        return <Utensils className="w-5 h-5 text-[#D4AF37]" />;
      case 'farmacia-entrega':
        return <Pill className="w-5 h-5 text-[#E31837]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#E31837]" />;
    }
  };

  return (
    <section id="servicos" className="py-20 bg-[#FAF6F0]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs md:text-sm font-bold text-[#E31837] tracking-wider uppercase mb-3">
            <span>Cuidados Especiais</span>
            <span aria-hidden="true" className="text-[#D4AF37]">·</span>
            <span>Estrutura Completa</span>
          </div>

          <h2 className="font-fredoka text-3xl sm:text-4xl md:text-5xl font-bold text-[#2C2424] mb-4 text-balance">
            Serviços pensados para o conforto e a alegria do seu pet
          </h2>

          <p className="text-base sm:text-lg text-[#6B5E5E] font-nunito leading-relaxed">
            Profissionais dedicados, ambiente climatizado e produtos selecionados. Cada atendimento é feito no tempo do seu animal, sem estresse nem correria.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white rounded-3xl border border-[#E31837]/15 overflow-hidden shadow-xs hover:shadow-xl hover:border-[#E31837]/30 transition-all duration-300 flex flex-col group"
            >
              {/* Optional Service Image Header if available */}
              {service.image ? (
                <div className="relative h-48 overflow-hidden bg-[#FAF6F0]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-xl text-xs font-bold text-[#E31837] shadow-xs">
                    {service.badge || 'Dupet Cuidado'}
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-medium">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                      {service.duration}
                    </span>
                    <span className="font-fredoka text-sm font-bold text-[#D4AF37]">
                      A partir de {service.priceFrom}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="p-6 pb-0 flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#FDE8EB] flex items-center justify-center shadow-xs">
                    {getServiceIcon(service.id)}
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-[#6B5E5E] block">A partir de</span>
                    <span className="font-fredoka text-lg font-bold text-[#E31837]">
                      {service.priceFrom}
                    </span>
                  </div>
                </div>
              )}

              {/* Service Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-fredoka text-xl font-bold text-[#2C2424] mb-2 group-hover:text-[#E31837] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs font-bold text-[#D4AF37] mb-3">
                    {service.subtitle}
                  </p>

                  <p className="text-sm text-[#6B5E5E] leading-relaxed mb-6 font-nunito">
                    {service.description}
                  </p>

                  {/* Bullet features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-[#2C2424]">
                        <div className="w-4 h-4 rounded-full bg-[#FDE8EB] text-[#E31837] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA */}
                <div className="pt-4 border-t border-[#FAF6F0]">
                  <button
                    onClick={() => onSelectService(service)}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-sm font-bold text-[#E31837] bg-[#FDE8EB] hover:bg-[#E31837] hover:text-white rounded-xl transition-all duration-200 group-hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E31837]"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Agendar este serviço</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Informative reassurance bar */}
        <div className="mt-14 bg-white rounded-2xl p-6 border border-[#D4AF37]/30 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-[#FDF9EA] text-[#D4AF37] flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <p className="font-fredoka text-lg font-bold text-[#2C2424]">
                Tem alguma dúvida sobre o porte ou necessidade do seu pet?
              </p>
              <p className="text-xs sm:text-sm text-[#6B5E5E]">
                Nossa equipe veterinária e de estética responde prontamente pelo WhatsApp em Cândido Mota.
              </p>
            </div>
          </div>
          <a
            href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent('Olá Dupet! Gostaria de tirar uma dúvida sobre os serviços para o meu pet.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-[#2C2424] bg-[#FAF6F0] hover:bg-[#F5EFEB] border border-[#D4AF37] rounded-xl transition-colors whitespace-nowrap"
          >
            Falar com especialista
          </a>
        </div>
      </div>
    </section>
  );
};
