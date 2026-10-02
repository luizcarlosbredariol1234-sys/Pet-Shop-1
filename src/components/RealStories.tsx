import React from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/mockData';

export const RealStories: React.FC = () => {
  return (
    <section id="depoimentos" className="py-14 sm:py-18 bg-[#FAF8F5] border-b border-[#F0EAE4] font-nunito">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#1A1513]">
            Histórias Reais, Amor de Verdade
          </h2>
          <p className="text-xs sm:text-sm text-[#706763] mt-1.5">
            Da nossa comunidade apaixonada por pets em Cândido Mota e região.
          </p>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#EDE6E1] shadow-2xs hover:shadow-md transition-shadow flex items-start gap-4"
            >
              {/* Circular Avatar */}
              <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-[#C5A059]/40 bg-[#FAF8F5]">
                <img
                  src={item.avatar}
                  alt={item.author}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Quote & Stars */}
              <div className="flex-1">
                <p className="text-xs sm:text-sm text-[#3D3531] italic leading-relaxed mb-3 font-serif">
                  "{item.quote}"
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xs font-bold text-[#1A1513]">
                      — {item.author}
                    </h3>
                    <p className="text-[10px] text-[#A89E99]">
                      {item.role}
                    </p>
                  </div>

                  <div className="flex text-[#C5A059]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
