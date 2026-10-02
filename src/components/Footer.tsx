import React from 'react';
import { Phone, MapPin, Clock, Heart, Sparkles, CreditCard, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A1414] text-[#E5DCD6] pt-16 pb-12 border-t border-[#E31837]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Column 1: Brand & Identity (4 cols) */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#E31837] to-[#C5112D] flex items-center justify-center text-white shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M12 11.5c-2.4 0-4.5 1.8-4.5 4.3 0 1.8 1.2 3.2 2.7 3.8.4.2.9.4 1.8.4s1.4-.2 1.8-.4c1.5-.6 2.7-2 2.7-3.8 0-2.5-2.1-4.3-4.5-4.3zM5.5 11c1.4 0 2.5-1.3 2.5-3s-1.1-3-2.5-3S3 6.3 3 8s1.1 3 2.5 3zm13 0c1.4 0 2.5-1.3 2.5-3s-1.1-3-2.5-3S16 6.3 16 8s1.1 3 2.5 3zm-9.5-2c1.4 0 2.5-1.3 2.5-3S10.4 3 9 3 6.5 4.3 6.5 6s1.1 3 2.5 3zm6 0c1.4 0 2.5-1.3 2.5-3S14.4 3 13 3s-2.5 1.3-2.5 3 1.1 3 2.5 3z" />
                </svg>
              </div>
              <div>
                <span className="font-fredoka text-2xl font-bold tracking-tight text-white block">
                  Dupet
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#D4AF37] block -mt-1">
                  Pet Shop & Cuidado Especial
                </span>
              </div>
            </div>

            <p className="text-xs text-[#A89C94] leading-relaxed mb-6 font-nunito max-w-sm">
              Dedicados ao amor, bem-estar e conforto dos animais de estimação em Cândido Mota. Cada banho, tosa e consulta é realizado com paciência e respeito absoluto.
            </p>

            <div className="flex items-center gap-3 text-xs text-[#D4AF37] font-semibold">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span>Ambiente climatizado e esterilizado</span>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-fredoka text-base font-bold text-white mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A89C94]">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">Início</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">Serviços</a>
              </li>
              <li>
                <a href="#produtos" className="hover:text-white transition-colors">Produtos</a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-white transition-colors">Galeria de Pets</a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-white transition-colors">Depoimentos</a>
              </li>
              <li>
                <a href="#contato" className="hover:text-white transition-colors">Contato</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Specialties (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-fredoka text-base font-bold text-white mb-4">
              Especialidades
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A89C94]">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E31837]" />
                <span>Banho com Ozonioterapia</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E31837]" />
                <span>Tosa na Tesoura e da Raça</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E31837]" />
                <span>Consultório Veterinário Preventivo</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E31837]" />
                <span>Farmácia e Antipulgas Express</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E31837]" />
                <span>Rações Super Premium Grain Free</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Local Info (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-fredoka text-base font-bold text-white mb-4">
              Localização & Contato
            </h4>
            <div className="space-y-3 text-xs text-[#A89C94]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E31837] shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}, Cândido Mota - SP</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span className="font-bold text-white">{BUSINESS_INFO.phone}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#A89C94] shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.openingHours}</span>
              </div>

              {/* Payment methods */}
              <div className="pt-2">
                <span className="block text-[11px] text-[#A89C94] mb-1.5 font-semibold">
                  Formas de Pagamento:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] text-white">PIX</span>
                  <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] text-white">Cartão de Crédito</span>
                  <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] text-white">Débito</span>
                  <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] text-white">Dinheiro</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A89C94]">
          <p>© {new Date().getFullYear()} Dupet - Pet Shop. Todos os direitos reservados. Cândido Mota - SP.</p>
          <div className="flex items-center gap-1 text-[#E31837]">
            <span>Cuidado feito com amor por quem ama animais</span>
            <Heart className="w-3.5 h-3.5 fill-current" />
          </div>
        </div>
      </div>
    </footer>
  );
};
