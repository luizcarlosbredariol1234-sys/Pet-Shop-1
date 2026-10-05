import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, MapPin, MessageCircle } from 'lucide-react';
import { CartItem } from '../types';
import { BUSINESS_INFO } from '../data/mockData';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [tutorName, setTutorName] = useState('');
  const [petName, setPetName] = useState('');
  const [deliveryType, setDeliveryType] = useState<'entrega' | 'retirada'>('entrega');
  const [neighborhood, setNeighborhood] = useState('');

  if (!isOpen) return null;

  const subtotal = items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );
  const deliveryFee = deliveryType === 'entrega' && subtotal < 100 && items.length > 0 ? 5.00 : 0.00;
  const total = subtotal + deliveryFee;

  const handleCheckoutWhatsApp = () => {
    if (items.length === 0) return;

    let message = `🐾 *NOVO PEDIDO - BOUTIQUE PET*\n\n`;
    message += `👤 *Tutor(a):* ${tutorName || 'Cliente'}\n`;
    if (petName) message += `🐶 *Pet:* ${petName}\n`;
    message += `🚚 *Modalidade:* ${deliveryType === 'entrega' ? `Entrega em Cândido Mota (${neighborhood || 'Centro'})` : 'Retirada na Loja'}\n\n`;
    message += `📦 *ITENS DA SACOLA:*\n`;

    items.forEach((item, index) => {
      message += `${index + 1}. ${item.product.name} (x${item.quantity}) - R$ ${(item.product.price * item.quantity).toFixed(2).replace('.', ',')}\n`;
    });

    message += `\n💰 *Subtotal:* R$ ${subtotal.toFixed(2).replace('.', ',')}\n`;
    if (deliveryType === 'entrega') {
      message += `🛵 *Taxa de entrega:* ${deliveryFee === 0 ? 'Grátis' : `R$ ${deliveryFee.toFixed(2).replace('.', ',')}`}\n`;
    }
    message += `✨ *TOTAL FINAL:* R$ ${total.toFixed(2).replace('.', ',')}\n\n`;
    message += `Gostaria de confirmar a disponibilidade e a forma de pagamento (PIX ou Cartão). Obrigado!`;

    const url = `https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity duration-300"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FFFDF9] shadow-2xl flex flex-col border-l border-[#E31837]/15">
          {/* Header */}
          <div className="p-5 border-b border-[#FAF6F0] flex items-center justify-between bg-white">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#FDE8EB] text-[#E31837] flex items-center justify-center">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-fredoka text-lg font-bold text-[#2C2424]">
                  Sua Sacola Dupet
                </h3>
                <p className="text-xs text-[#6B5E5E]">
                  {items.length} {items.length === 1 ? 'item selecionado' : 'itens selecionados'}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              aria-label="Fechar sacola"
              className="p-2 text-[#6B5E5E] hover:text-[#2C2424] rounded-lg hover:bg-[#FAF6F0]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 rounded-full bg-[#FAF6F0] text-[#6B5E5E] flex items-center justify-center mx-auto mb-4">
                  <ShoppingBag className="w-8 h-8 stroke-1" />
                </div>
                <h4 className="font-fredoka text-lg font-bold text-[#2C2424] mb-1">
                  Sua sacola está vazia
                </h4>
                <p className="text-xs text-[#6B5E5E] max-w-xs mx-auto mb-6">
                  Dê uma olhada em nossas rações nobres, petiscos e mimos na vitrine!
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 text-xs font-bold text-white bg-[#E31837] hover:bg-[#C5112D] rounded-xl shadow-xs"
                >
                  Explorar Produtos
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.product.id}
                  className="p-3 bg-white rounded-2xl border border-[#E31837]/10 flex gap-3 shadow-2xs"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-16 object-cover rounded-xl bg-[#FAF6F0] shrink-0"
                    referrerPolicy="no-referrer"
                  />

                  <div className="flex-1 min-w-0">
                    <h5 className="font-fredoka text-sm font-bold text-[#2C2424] truncate">
                      {item.product.name}
                    </h5>
                    <p className="text-xs font-bold text-[#E31837] mb-2">
                      R$ {item.product.price.toFixed(2).replace('.', ',')}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-[#FAF6F0] bg-[#FAF6F0] rounded-lg">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, -1)}
                          className="p-1 hover:text-[#E31837] text-[#6B5E5E]"
                          aria-label="Diminuir quantidade"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-2 text-xs font-bold text-[#2C2424] tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, 1)}
                          className="p-1 hover:text-[#E31837] text-[#6B5E5E]"
                          aria-label="Aumentar quantidade"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.product.id)}
                        className="text-xs text-red-500 hover:text-red-700 p-1"
                        aria-label="Remover item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Checkout Info & Actions (when items exist) */}
          {items.length > 0 && (
            <div className="p-5 border-t border-[#FAF6F0] bg-white space-y-4">
              {/* Quick Details for WhatsApp Message */}
              <div className="space-y-2.5">
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="Seu nome"
                    value={tutorName}
                    onChange={(e) => setTutorName(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-xl border border-neutral-200 focus:border-[#E31837] focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Nome do seu pet"
                    value={petName}
                    onChange={(e) => setPetName(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-xl border border-neutral-200 focus:border-[#E31837] focus:outline-none"
                  />
                </div>

                {/* Delivery options */}
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setDeliveryType('entrega')}
                    className={`flex-1 text-xs py-2 px-3 rounded-lg border font-bold transition-colors ${
                      deliveryType === 'entrega'
                        ? 'border-[#E31837] bg-[#FDE8EB] text-[#E31837]'
                        : 'border-neutral-200 text-[#6B5E5E]'
                    }`}
                  >
                    Entrega em Cândido Mota
                  </button>
                  <button
                    type="button"
                    onClick={() => setDeliveryType('retirada')}
                    className={`flex-1 text-xs py-2 px-3 rounded-lg border font-bold transition-colors ${
                      deliveryType === 'retirada'
                        ? 'border-[#E31837] bg-[#FDE8EB] text-[#E31837]'
                        : 'border-neutral-200 text-[#6B5E5E]'
                    }`}
                  >
                    Retirar na Loja
                  </button>
                </div>

                {deliveryType === 'entrega' && (
                  <input
                    type="text"
                    placeholder="Bairro ou endereço em Cândido Mota"
                    value={neighborhood}
                    onChange={(e) => setNeighborhood(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-xl border border-neutral-200 focus:border-[#E31837] focus:outline-none"
                  />
                )}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-1.5 pt-2 border-t border-[#FAF6F0] text-xs">
                <div className="flex justify-between text-[#6B5E5E]">
                  <span>Subtotal dos produtos</span>
                  <span className="font-semibold text-[#2C2424]">
                    R$ {subtotal.toFixed(2).replace('.', ',')}
                  </span>
                </div>
                {deliveryType === 'entrega' && (
                  <div className="flex justify-between text-[#6B5E5E]">
                    <span>Entrega local</span>
                    <span className="font-semibold text-emerald-600">
                      {deliveryFee === 0 ? 'Grátis (acima de R$ 100)' : `R$ ${deliveryFee.toFixed(2).replace('.', ',')}`}
                    </span>
                  </div>
                )}
                <div className="flex justify-between text-base font-bold text-[#2C2424] pt-1">
                  <span>Total</span>
                  <span className="font-fredoka text-xl text-[#E31837]">
                    R$ {total.toFixed(2).replace('.', ',')}
                  </span>
                </div>
              </div>

              {/* WhatsApp Checkout Button */}
              <button
                onClick={handleCheckoutWhatsApp}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-xl shadow-md shadow-emerald-600/20 transition-all hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Finalizar Pedido pelo WhatsApp</span>
              </button>

              <p className="text-[11px] text-center text-[#6B5E5E]">
                Aceitamos PIX, Cartão de Crédito e Débito no ato da entrega!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
