import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/mockData';

export const RealStories: React.FC = () => {
  return (
    <section id="depoimentos" className="py-16 sm:py-20 bg-[#FAF8F5]/85 backdrop-blur-2xs border-b border-[#F0EAE4] font-nunito">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A1513]">
            Histórias Reais, Amor de Verdade
          </h2>
          <p className="text-sm sm:text-base text-[#574E49] mt-2">
            Avaliações e depoimentos da nossa comunidade apaixonada por pets em Cândido Mota e região.
          </p>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-[#EDE6E1] shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars and Quote icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-[#C5A059] gap-0.5">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#C5A059]/25 shrink-0" />
                </div>

                {/* Quote Text - Enhanced legibility & font size */}
                <p className="text-base sm:text-[17px] text-[#241E1C] leading-relaxed mb-6 font-nunito font-normal">
                  "{item.quote}"
                </p>
              </div>

              {/* Author & Avatar */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-[#F5F1EB]">
                {/* Circular Avatar */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden shrink-0 border-2 border-[#C5A059]/50 bg-[#FAF8F5] shadow-xs">
                  <img
                    src={item.avatar}
                    alt={item.author}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div>
                  <h3 className="text-sm sm:text-base font-bold text-[#1A1513] leading-snug">
                    {item.author}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#706763] font-medium mt-0.5">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
