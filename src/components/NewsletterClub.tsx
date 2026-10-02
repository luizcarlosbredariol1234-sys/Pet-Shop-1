import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export const NewsletterClub: React.FC = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailOrPhone.trim()) {
      setSubmitted(true);
      setEmailOrPhone('');
    }
  };

  return (
    <section className="py-14 sm:py-18 bg-[#F5F1EB]/60 font-nunito border-b border-[#EDE6E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Sleeping Cuddled Pets photo (4 cols) */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
            <div className="w-full max-w-sm rounded-2xl overflow-hidden shadow-lg border border-[#E0D8D0] bg-white">
              <img
                src="/src/assets/images/dupet_cuddle_sleep_pets_1790954047568.jpg"
                alt="Filhote de cachorro e gatinho dormindo abraçados na Dupet"
                className="w-full h-56 object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Center: Subscription Form (5 cols) */}
          <div className="lg:col-span-5 text-center lg:text-left">
            <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-[#1A1513] mb-2">
              Faça Parte da Família Dupet
            </h3>
            <p className="text-xs sm:text-sm text-[#706763] mb-6">
              Receba mimos exclusivos, avisos de novidades da boutique e dicas veterinárias selecionadas.
            </p>

            {submitted ? (
              <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Obrigado! Você já faz parte do Clube VIP Dupet.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto lg:mx-0">
                <input
                  type="text"
                  required
                  placeholder="Seu melhor e-mail ou WhatsApp..."
                  value={emailOrPhone}
                  onChange={(e) => setEmailOrPhone(e.target.value)}
                  className="flex-1 bg-white text-xs sm:text-sm px-4 py-3 rounded-lg border border-[#D5CDC5] focus:outline-none focus:border-[#C5A059] shadow-2xs"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#1A1513] hover:bg-[#C5A059] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors shadow-sm"
                >
                  Cadastrar
                </button>
              </form>
            )}
          </div>

          {/* Right: Elegant Calligraphy & Foliage (3 cols) */}
          <div className="lg:col-span-3 hidden lg:flex flex-col items-center justify-center text-center p-4">
            <div className="font-serif italic text-2xl text-[#8C7A70] leading-snug">
              Bons Momentos <br />
              <span className="text-3xl font-bold text-[#C5A059]">Acontecem</span> <br />
              Juntos ♡
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
