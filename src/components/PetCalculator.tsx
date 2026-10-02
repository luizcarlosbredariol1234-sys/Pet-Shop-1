import React, { useState } from 'react';
import { Calculator, Check, Sparkles, Send, Car, Scissors, Droplets } from 'lucide-react';
import { BUSINESS_INFO, RITUAL_CARE } from '../data/mockData';

export const PetCalculator: React.FC = () => {
  const [petType, setPetType] = useState<'dog' | 'cat'>('dog');
  const [size, setSize] = useState<'pequeno' | 'medio' | 'grande'>('pequeno');
  const [coat, setCoat] = useState<'curto' | 'medio' | 'longo'>('medio');
  const [hasTosaHigiênica, setHasTosaHigiênica] = useState(true);
  const [hasTosaGeral, setHasTosaGeral] = useState(false);
  const [hasOzonio, setHasOzonio] = useState(false);
  const [hasTaxiDog, setHasTaxiDog] = useState(false);

  // Price calculation logic
  let basePrice = petType === 'dog' ? 50 : 60;
  if (size === 'medio') basePrice += 15;
  if (size === 'grande') basePrice += 30;
  if (coat === 'medio') basePrice += 5;
  if (coat === 'longo') basePrice += 15;

  let extras = 0;
  if (hasTosaHigiênica && !hasTosaGeral) extras += 15;
  if (hasTosaGeral) extras += 35;
  if (hasOzonio) extras += 25;
  if (hasTaxiDog) extras += 15;

  const total = basePrice + extras;

  const handleBooking = () => {
    const sizeLabel = size === 'pequeno' ? 'Porte Pequeno (até 10kg)' : size === 'medio' ? 'Porte Médio (10 a 20kg)' : 'Porte Grande (+20kg)';
    const coatLabel = coat === 'curto' ? 'Pelo Curto' : coat === 'medio' ? 'Pelo Médio' : 'Pelo Longo';
    const petLabel = petType === 'dog' ? 'Cão' : 'Gato';

    let message = `🐾 *SIMULAÇÃO DE BANHO & TOSA - DUPET*\n\n`;
    message += `🐶 *Pet:* ${petLabel} · ${sizeLabel} · ${coatLabel}\n`;
    message += `📋 *Serviços Selecionados:*\n`;
    message += `- Banho Completo com Água Morna & Toalhas Lacradas\n`;
    if (hasTosaGeral) message += `- Tosa Completa / Bebê na Tesoura\n`;
    else if (hasTosaHigiênica) message += `- Tosa Higiênica (patas e região íntima)\n`;
    if (hasOzonio) message += `- Spa & Hidratação com Ozônio\n`;
    if (hasTaxiDog) message += `- Serviço Táxi Dog (Leva & Traz em Cândido Mota)\n`;
    message += `\n💰 *Valor Estimado:* R$ ${total.toFixed(2).replace('.', ',')}\n\n`;
    message += `Olá Dupet! Simulei esse pacote no site e gostaria de agendar um horário para o meu pet. Vocês têm vaga esta semana?`;

    const url = `https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-20 bg-[#FFFDF9] relative border-y border-[#E31837]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs md:text-sm font-bold text-[#E31837] tracking-wider uppercase mb-3">
            <Calculator className="w-4 h-4 text-[#D4AF37]" />
            <span>Simulador Transparente de Banho & Tosa</span>
          </div>

          <h2 className="font-fredoka text-3xl sm:text-4xl md:text-5xl font-bold text-[#2C2424] mb-4 text-balance">
            Quanto custa o dia de príncipe do seu pet?
          </h2>

          <p className="text-base sm:text-lg text-[#6B5E5E] font-nunito leading-relaxed">
            Selecione o porte e os cuidados para ver uma estimativa exata. Sem surpresas na hora de pagar!
          </p>
        </div>

        {/* 2-Column Calculator Box */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border-2 border-[#E31837]/15 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Options Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* 1. Espécie */}
            <div>
              <label className="block text-xs font-bold text-[#2C2424] uppercase tracking-wider mb-2">
                1. Espécie do Pet
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setPetType('dog')}
                  className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl border text-sm font-bold transition-all ${
                    petType === 'dog'
                      ? 'border-[#E31837] bg-[#FDE8EB] text-[#E31837] shadow-xs'
                      : 'border-neutral-200 text-[#6B5E5E] hover:border-neutral-300'
                  }`}
                >
                  <span className="text-lg">🐶</span>
                  <span>Cachorro</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPetType('cat')}
                  className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl border text-sm font-bold transition-all ${
                    petType === 'cat'
                      ? 'border-[#E31837] bg-[#FDE8EB] text-[#E31837] shadow-xs'
                      : 'border-neutral-200 text-[#6B5E5E] hover:border-neutral-300'
                  }`}
                >
                  <span className="text-lg">🐱</span>
                  <span>Gato</span>
                </button>
              </div>
            </div>

            {/* 2. Porte */}
            <div>
              <label className="block text-xs font-bold text-[#2C2424] uppercase tracking-wider mb-2">
                2. Porte do Animal
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: 'pequeno', label: 'Pequeno', detail: 'Até 10kg' },
                  { id: 'medio', label: 'Médio', detail: '10 a 20kg' },
                  { id: 'grande', label: 'Grande', detail: '+20kg' },
                ].map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setSize(s.id as any)}
                    className={`py-2.5 px-3 rounded-xl border text-center transition-all ${
                      size === s.id
                        ? 'border-[#E31837] bg-[#FDE8EB] text-[#E31837] font-bold shadow-xs'
                        : 'border-neutral-200 text-[#6B5E5E] hover:border-neutral-300'
                    }`}
                  >
                    <span className="block text-xs sm:text-sm font-bold">{s.label}</span>
                    <span className="block text-[10px] text-neutral-500 mt-0.5">{s.detail}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Pelagem */}
            <div>
              <label className="block text-xs font-bold text-[#2C2424] uppercase tracking-wider mb-2">
                3. Comprimento do Pelo
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: 'curto', label: 'Pelo Curto' },
                  { id: 'medio', label: 'Pelo Médio' },
                  { id: 'longo', label: 'Pelo Longo' },
                ].map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setCoat(c.id as any)}
                    className={`py-2 px-3 rounded-xl border text-xs sm:text-sm font-bold text-center transition-all ${
                      coat === c.id
                        ? 'border-[#E31837] bg-[#FDE8EB] text-[#E31837] shadow-xs'
                        : 'border-neutral-200 text-[#6B5E5E] hover:border-neutral-300'
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Serviços Adicionais */}
            <div>
              <label className="block text-xs font-bold text-[#2C2424] uppercase tracking-wider mb-2">
                4. Cuidados Extras Opcionais
              </label>
              <div className="space-y-2">
                <label className="flex items-center justify-between p-3 rounded-xl border border-neutral-200 hover:border-[#E31837]/40 cursor-pointer transition-colors">
                  <div className="flex items-center gap-2.5">
                    <input
                      type="checkbox"
                      checked={hasTosaHigiênica}
                      onChange={(e) => setHasTosaHigiênica(e.target.checked)}
                      className="w-4 h-4 text-[#E31837] accent-[#E31837] rounded"
                    />
                    <div>
                      <span className="text-xs sm:text-sm font-bold text-[#2C2424] block">
                        Tosa Higiênica (patas, barriguinha e íntima)
                      </span>
                      <span className="text-[11px] text-[#6B5E5E]">Evita sujeira e mantém a higiene</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#E31837]">+ R$ 15</span>
                </label>

                <label className="flex items-center justify-between p-3 rounded-xl border border-neutral-200 hover:border-[#E31837]/40 cursor-pointer transition-colors">
                  <div className="flex items-center gap-2.5">
                    <input
                      type="checkbox"
                      checked={hasTosaGeral}
                      onChange={(e) => setHasTosaGeral(e.target.checked)}
                      className="w-4 h-4 text-[#E31837] accent-[#E31837] rounded"
                    />
                    <div>
                      <span className="text-xs sm:text-sm font-bold text-[#2C2424] block">
                        Tosa Geral ou Bebê na Tesoura
                      </span>
                      <span className="text-[11px] text-[#6B5E5E]">Corte estilizado e uniforme</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#E31837]">+ R$ 35</span>
                </label>

                <label className="flex items-center justify-between p-3 rounded-xl border border-neutral-200 hover:border-[#E31837]/40 cursor-pointer transition-colors">
                  <div className="flex items-center gap-2.5">
                    <input
                      type="checkbox"
                      checked={hasOzonio}
                      onChange={(e) => setHasOzonio(e.target.checked)}
                      className="w-4 h-4 text-[#E31837] accent-[#E31837] rounded"
                    />
                    <div>
                      <span className="text-xs sm:text-sm font-bold text-[#2C2424] block">
                        Hidratação & Spa de Ozônio
                      </span>
                      <span className="text-[11px] text-[#6B5E5E]">Alívio de dermatites e coceiras</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#D4AF37]">+ R$ 25</span>
                </label>

                <label className="flex items-center justify-between p-3 rounded-xl border border-[#D4AF37]/40 bg-[#FDF9EA]/50 cursor-pointer transition-colors">
                  <div className="flex items-center gap-2.5">
                    <input
                      type="checkbox"
                      checked={hasTaxiDog}
                      onChange={(e) => setHasTaxiDog(e.target.checked)}
                      className="w-4 h-4 text-[#E31837] accent-[#E31837] rounded"
                    />
                    <div className="flex items-center gap-1.5">
                      <Car className="w-4 h-4 text-[#D4AF37]" />
                      <div>
                        <span className="text-xs sm:text-sm font-bold text-[#2C2424] block">
                          Táxi Dog (Leva & Traz em Cândido Mota)
                        </span>
                        <span className="text-[11px] text-[#6B5E5E]">Buscamos e levamos com segurança</span>
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#D4AF37]">+ R$ 15</span>
                </label>
              </div>
            </div>
          </div>

          {/* Result Column (5 cols) */}
          <div className="lg:col-span-5 bg-[#FAF6F0] rounded-2xl p-6 sm:p-7 border border-[#E31837]/15 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#E31837]/10 mb-4">
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
                  Resumo do Pacote
                </span>
                <span className="text-[11px] text-emerald-700 bg-emerald-100 font-bold px-2 py-0.5 rounded-md">
                  Sem taxas ocultas
                </span>
              </div>

              {/* Items included */}
              <ul className="space-y-2 mb-6 text-xs text-[#2C2424]">
                <li className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>Água morna em temperatura monitorada</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>Shampoo vegano neutro e sem sal</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>Corte de unhas seguro & limpeza de ouvidinhos</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>Toalha 100% esterilizada lacrada</span>
                </li>
                <li className="flex items-center gap-2 font-bold text-[#E31837]">
                  <div className="w-4 h-4 rounded-full bg-[#E31837] text-white flex items-center justify-center shrink-0">
                    <Sparkles className="w-2.5 h-2.5" />
                  </div>
                  <span>Lacinho ou gravatinha artesanal de presente</span>
                </li>
                {hasTaxiDog && (
                  <li className="flex items-center gap-2 font-bold text-[#D4AF37]">
                    <div className="w-4 h-4 rounded-full bg-[#D4AF37] text-white flex items-center justify-center shrink-0">
                      <Car className="w-2.5 h-2.5" />
                    </div>
                    <span>Transporte Táxi Dog em Cândido Mota</span>
                  </li>
                )}
              </ul>
            </div>

            {/* Total Display */}
            <div className="pt-4 border-t border-[#E31837]/15">
              <div className="flex items-baseline justify-between mb-4">
                <div>
                  <span className="text-xs text-[#6B5E5E] block">Estimativa Total:</span>
                  <span className="text-[11px] text-[#A89C94] block">Pode variar conforme nó ou embaraço</span>
                </div>
                <div className="text-right">
                  <span className="font-fredoka text-3xl sm:text-4xl font-bold text-[#E31837]">
                    R$ {total.toFixed(2).replace('.', ',')}
                  </span>
                </div>
              </div>

              <button
                onClick={handleBooking}
                className="w-full flex items-center justify-center gap-2 py-4 px-4 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-xl shadow-md shadow-emerald-600/25 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <Send className="w-4 h-4" />
                <span>Agendar com 1 Clique no Zap</span>
              </button>

              <p className="text-[11px] text-center text-[#6B5E5E] mt-2.5">
                Respondemos em menos de 5 minutos com os horários livres!
              </p>
            </div>
          </div>
        </div>

        {/* Ritual de Cuidado em 6 Passos */}
        <div className="mt-16">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h3 className="font-fredoka text-2xl font-bold text-[#2C2424] mb-1">
              O que todo banho na Dupet inclui
            </h3>
            <p className="text-xs sm:text-sm text-[#6B5E5E]">
              Transparência e muito carinho do momento da chegada até o retorno ao lar.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {RITUAL_CARE.map((r, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-4 border border-[#E31837]/10 text-center flex flex-col justify-between shadow-2xs hover:shadow-sm transition-shadow"
              >
                <div className="w-8 h-8 rounded-full bg-[#FDE8EB] text-[#E31837] font-bold text-xs flex items-center justify-center mx-auto mb-2">
                  0{idx + 1}
                </div>
                <div>
                  <h4 className="font-fredoka text-xs sm:text-sm font-bold text-[#2C2424] mb-1">
                    {r.title}
                  </h4>
                  <p className="text-[11px] text-[#6B5E5E] leading-snug">
                    {r.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
