import React from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles, ShieldCheck, ArrowRight, Phone, Star, Car, Scissors, Droplets } from 'lucide-react';
import { BUSINESS_INFO, STATS_DATA } from '../data/mockData';

interface HeroProps {
  onContactClick: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick, onExploreServices }) => {
  return (
    <section
      id="inicio"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden paw-pattern"
    >
      {/* Decorative ambient gradients */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-[#E31837]/10 via-[#D4AF37]/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Column 1: Copywriting & CTAs (7 cols on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Clean unboxed kicker metadata with authentic pet shop trust signals */}
            <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm font-bold text-[#E31837] tracking-wider uppercase mb-4">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                Pet Shop & Estética Canina e Felina
              </span>
              <span aria-hidden="true" className="text-[#D4AF37]">·</span>
              <span>Centro de Cândido Mota - SP</span>
            </div>

            {/* Giant Display Headline */}
            <h1 className="font-fredoka text-[42px] sm:text-[56px] lg:text-[68px] xl:text-[76px] font-bold text-[#2C2424] leading-[1.06] tracking-tight mb-6 text-balance">
              O amor que seu pet sente{' '}
              <span className="text-[#E31837] relative inline-block">
                no pelo
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-[#D4AF37]"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                  fill="currentColor"
                >
                  <path d="M0,15 Q50,0 100,15" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>{' '}
              e no coração.
            </h1>

            {/* Subtitle / Value proposition */}
            <p className="text-base sm:text-lg md:text-xl text-[#6B5E5E] leading-relaxed mb-8 max-w-2xl font-nunito">
              Banho relaxante com água morninha e toalhas lacradas, tosa com tesouras suaves, consultório veterinário preventivo, rações nobres e o carinho que todo bichinho merece.
            </p>

            {/* Pet Shop Quick Tags */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#E31837]/20 text-xs font-bold text-[#2C2424] shadow-2xs">
                <Car className="w-3.5 h-3.5 text-[#E31837]" />
                <span>Táxi Dog Leva & Traz</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#D4AF37]/30 text-xs font-bold text-[#2C2424] shadow-2xs">
                <Droplets className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Banho c/ Água Morna</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#E31837]/20 text-xs font-bold text-[#2C2424] shadow-2xs">
                <Scissors className="w-3.5 h-3.5 text-[#E31837]" />
                <span>Tosa na Tesoura sem Estresse</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <button
                onClick={onContactClick}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-white bg-[#E31837] hover:bg-[#C5112D] active:bg-[#A80B22] rounded-2xl shadow-lg shadow-[#E31837]/25 hover:shadow-xl hover:shadow-[#E31837]/35 transition-all duration-200 transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#E31837]"
              >
                <Phone className="w-5 h-5" />
                <span>Entrar em contato</span>
              </button>

              <button
                onClick={onExploreServices}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-bold text-[#2C2424] bg-white hover:bg-[#FAF6F0] border-2 border-[#D4AF37]/40 hover:border-[#D4AF37] rounded-2xl shadow-xs transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              >
                <span>Ver Serviços & Simulador</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
              </button>
            </div>

            {/* Proof indicators inline */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-[#E31837]/10">
              <div className="flex flex-col">
                <span className="font-fredoka text-2xl sm:text-3xl font-bold text-[#2C2424] tabular-nums">
                  +4.800
                </span>
                <span className="text-xs text-[#6B5E5E] font-medium">Banhos & cuidados com amor</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1 font-fredoka text-2xl sm:text-3xl font-bold text-[#D4AF37] tabular-nums">
                  <span>4.9</span>
                  <Star className="w-5 h-5 fill-current text-[#D4AF37]" />
                </div>
                <span className="text-xs text-[#6B5E5E] font-medium">Avaliações de tutores de CM</span>
              </div>
              <div className="flex flex-col col-span-2 sm:col-span-1">
                <span className="font-fredoka text-2xl sm:text-3xl font-bold text-[#E31837] tabular-nums">
                  100%
                </span>
                <span className="text-xs text-[#6B5E5E] font-medium">Toalhas limpas e esterilizadas</span>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Media Asset with Realistic Pet Photo & Badges (5 cols on desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-[500px] lg:max-w-none">
              {/* Backing shape */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-[#E31837]/20 via-[#D4AF37]/20 to-transparent rounded-[2.5rem] transform rotate-2 blur-xs -z-10" />

              {/* Main Realistic Image Container */}
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img
                  src="/src/assets/images/dupet_real_hero_dog_1790943537133.jpg"
                  alt="Cachorro feliz atendido com carinho na loja da Dupet Pet Shop em Cândido Mota"
                  className="w-full h-[420px] sm:h-[480px] lg:h-[500px] object-cover object-center transform hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />

                {/* Bottom live status inside photo */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-bold drop-shadow-md">
                      Equipe Atendendo com Carinho Agora
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-[#D4AF37] drop-shadow-md">
                    Cândido Mota
                  </span>
                </div>
              </div>

              {/* Floating Badge 1: Banho com Espuminha & Ozônio */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -top-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-[#D4AF37]/40 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FDF9EA] text-[#D4AF37] flex items-center justify-center">
                  <Droplets className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#2C2424]">Banho c/ Água Quentinha</p>
                  <p className="text-[11px] text-[#6B5E5E]">Shampoo neutro & toalha lacrada</p>
                </div>
              </motion.div>

              {/* Floating Badge 2: Táxi Dog Leva & Traz */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -bottom-5 -right-3 sm:-right-4 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-[#E31837]/25 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FDE8EB] text-[#E31837] flex items-center justify-center">
                  <Car className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#2C2424]">Táxi Dog Dupet</p>
                  <p className="text-[11px] text-[#6B5E5E]">Buscamos e levamos em casa</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
