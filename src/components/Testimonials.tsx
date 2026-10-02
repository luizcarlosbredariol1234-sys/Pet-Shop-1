import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, Heart, MapPin, CheckCircle } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/mockData';

export const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-20 bg-[#FFFDF9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs md:text-sm font-bold text-[#E31837] tracking-wider uppercase mb-3">
            <span>Avaliações Verificadas</span>
            <span aria-hidden="true" className="text-[#D4AF37]">·</span>
            <span>Cândido Mota e Região</span>
          </div>

          <h2 className="font-fredoka text-3xl sm:text-4xl md:text-5xl font-bold text-[#2C2424] mb-4 text-balance">
            A tranquilidade de quem confia seu amor à Dupet
          </h2>

          <p className="text-base sm:text-lg text-[#6B5E5E] font-nunito leading-relaxed">
            Nada nos deixa mais realizados do que ver tutores tranquilos e pets voltando para casa cheirosos, saudáveis e radiantes de alegria.
          </p>
        </div>

        {/* 3 Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((depo, idx) => (
            <motion.div
              key={depo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-8 border border-[#E31837]/15 shadow-xs hover:shadow-xl hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div className="absolute top-6 right-6 text-[#D4AF37]/20 group-hover:text-[#D4AF37]/40 transition-colors">
                <Quote className="w-10 h-10" />
              </div>

              <div>
                {/* 5 Stars */}
                <div className="flex text-[#D4AF37] mb-4">
                  {[...Array(depo.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Service Tag unboxed */}
                <div className="text-xs font-bold text-[#E31837] uppercase tracking-wider mb-3">
                  {depo.serviceUsed}
                </div>

                {/* Comment Text */}
                <p className="text-sm text-[#2C2424] leading-relaxed mb-6 font-nunito italic">
                  "{depo.comment}"
                </p>
              </div>

              {/* Author & Pet */}
              <div className="pt-4 border-t border-[#FAF6F0] flex items-center gap-3">
                <img
                  src={depo.avatar}
                  alt={depo.tutorName}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#D4AF37]"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-fredoka text-base font-bold text-[#2C2424] flex items-center gap-1.5">
                    {depo.tutorName}
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                  </h4>
                  <p className="text-xs font-semibold text-[#D4AF37]">
                    Tutor(a) do {depo.petName}
                  </p>
                  <p className="text-[11px] text-[#6B5E5E]">
                    {depo.petBreed} · Cândido Mota
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Reviews Trust Strip */}
        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-[#6B5E5E]">
          <div className="flex items-center gap-1 text-[#D4AF37] font-bold">
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
          </div>
          <span className="font-bold text-[#2C2424]">4.9 de 5 estrelas</span>
          <span>·</span>
          <span>Baseado em centenas de atendimentos com amor e responsabilidade</span>
        </div>
      </div>
    </section>
  );
};
