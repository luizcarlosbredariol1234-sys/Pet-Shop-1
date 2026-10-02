import React from 'react';
import { Gem, Leaf, Truck, Heart } from 'lucide-react';

export const ValueProps: React.FC = () => {
  const values = [
    {
      icon: <Gem className="w-5 h-5 text-[#C5A059]" />,
      title: 'Qualidade Premium',
      desc: 'Apenas o melhor para o seu melhor amigo.',
    },
    {
      icon: <Leaf className="w-5 h-5 text-[#C5A059]" />,
      title: 'Seguro & Sustentável',
      desc: 'Cuidados pensados para o pet e o planeta.',
    },
    {
      icon: <Truck className="w-5 h-5 text-[#C5A059]" />,
      title: 'Entrega Rápida & Confiável',
      desc: 'Alegria entregue com pontualidade na sua porta.',
    },
    {
      icon: <Heart className="w-5 h-5 text-[#C5A059]" />,
      title: 'Comunidade Apaixonada',
      desc: 'Porque os pets tornam a vida muito melhor.',
    },
  ];

  return (
    <section className="py-10 bg-white border-b border-[#F0EAE4] font-nunito">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {values.map((v, i) => (
            <div key={i} className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#EDE6E1] flex items-center justify-center shrink-0">
                {v.icon}
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-[#1A1513] mb-0.5">
                  {v.title}
                </h4>
                <p className="text-[11px] sm:text-xs text-[#706763] leading-snug">
                  {v.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
