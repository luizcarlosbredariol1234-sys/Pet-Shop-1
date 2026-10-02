import React from 'react';
import { Crown, Instagram, Facebook, Heart, MapPin, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#161311] text-[#E0D8D3] pt-14 pb-10 border-t border-white/5 font-nunito">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Slogan (4 cols) */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-1.5 text-[#C5A059] mb-2">
              <Crown className="w-5 h-5 fill-current" />
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#A89E99]">
                Boutique Pet
              </span>
            </div>

            <h3 className="font-playfair text-3xl font-bold tracking-tight text-white mb-1">
              Dupet
            </h3>
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#C5A059] font-semibold mb-4">
              O Cuidado que seu Pet Merece
            </p>

            <p className="text-xs text-[#9E938D] leading-relaxed mb-4 max-w-sm">
              Inspirados pelo amor e elegância dos nossos companheiros de quatro patas. Banho e tosa de excelência, nutrição nobre e curadoria de mimos em Cândido Mota - SP.
            </p>

            <div className="space-y-1.5 text-xs text-[#C5A059]">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                <span className="text-[#D8CFCA]">{BUSINESS_INFO.address}, Cândido Mota - SP</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                <span className="text-[#D8CFCA]">{BUSINESS_INFO.phone}</span>
              </p>
            </div>
          </div>

          {/* Col 2: Compre (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Compre
            </h4>
            <ul className="space-y-2 text-xs text-[#A89E99]">
              <li><a href="#caes" className="hover:text-white transition-colors">Cães</a></li>
              <li><a href="#gatos" className="hover:text-white transition-colors">Gatos</a></li>
              <li><a href="#pequenos" className="hover:text-white transition-colors">Pequenos Pets</a></li>
              <li><a href="#camas" className="hover:text-white transition-colors">Camas & Conforto</a></li>
              <li><a href="#moda" className="hover:text-white transition-colors">Acessórios</a></li>
              <li><a href="#kits" className="hover:text-white transition-colors">Presentes</a></li>
            </ul>
          </div>

          {/* Col 3: Sobre (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Sobre
            </h4>
            <ul className="space-y-2 text-xs text-[#A89E99]">
              <li><a href="#historia" className="hover:text-white transition-colors">Nossa História</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Banho & Tosa</a></li>
              <li><a href="#depoimentos" className="hover:text-white transition-colors">Avaliações</a></li>
              <li><a href="#contato" className="hover:text-white transition-colors">Táxi Dog</a></li>
              <li><a href="#contato" className="hover:text-white transition-colors">Fale Conosco</a></li>
            </ul>
          </div>

          {/* Col 4: Ajuda (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Ajuda
            </h4>
            <ul className="space-y-2 text-xs text-[#A89E99]">
              <li><span className="text-white/60">Perguntas Frequentes</span></li>
              <li><span className="text-white/60">Envio & Entregas</span></li>
              <li><span className="text-white/60">Guia de Portes</span></li>
              <li><span className="text-white/60">Cuidados com Produtos</span></li>
              <li>
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C5A059] hover:underline"
                >
                  Suporte no WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Redes Sociais & Quote (2 cols) */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
                Siga a Dupet
              </h4>
              <div className="flex items-center gap-3 text-white/80">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C5A059] transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C5A059] transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="pt-6 font-serif italic text-sm text-[#C5A059]">
              Cuidado de luxo para um mundo mais gentil ♡
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#857B75]">
          <p>© {new Date().getFullYear()} Dupet Pet Shop. Todos os direitos reservados. Cândido Mota - SP.</p>
          <div className="flex items-center gap-1.5 text-[#C5A059]">
            <span>Pets. Pessoas. Um Amanhã Mais Feliz.</span>
            <Heart className="w-3 h-3 fill-current" />
          </div>
        </div>
      </div>
    </footer>
  );
};
