import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Phone, Heart, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onContactClick,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Produtos', href: '#produtos' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FFFDF9]/95 backdrop-blur-md shadow-sm border-b border-[#E31837]/10 py-3'
          : 'bg-[#FFFDF9]/80 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#inicio');
            }}
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E31837] rounded-lg"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#E31837] to-[#C5112D] flex items-center justify-center text-white shadow-md shadow-[#E31837]/20 group-hover:scale-105 transition-transform duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
                aria-hidden="true"
              >
                <path d="M12 11.5c-2.4 0-4.5 1.8-4.5 4.3 0 1.8 1.2 3.2 2.7 3.8.4.2.9.4 1.8.4s1.4-.2 1.8-.4c1.5-.6 2.7-2 2.7-3.8 0-2.5-2.1-4.3-4.5-4.3zM5.5 11c1.4 0 2.5-1.3 2.5-3s-1.1-3-2.5-3S3 6.3 3 8s1.1 3 2.5 3zm13 0c1.4 0 2.5-1.3 2.5-3s-1.1-3-2.5-3S16 6.3 16 8s1.1 3 2.5 3zm-9.5-2c1.4 0 2.5-1.3 2.5-3S10.4 3 9 3 6.5 4.3 6.5 6s1.1 3 2.5 3zm6 0c1.4 0 2.5-1.3 2.5-3S14.4 3 13 3s-2.5 1.3-2.5 3 1.1 3 2.5 3z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-fredoka text-2xl font-bold tracking-tight text-[#2C2424]">
                  Dupet
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#E31837]"></span>
              </div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#D4AF37] -mt-1">
                Pet Shop & Spa
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-sm font-semibold text-[#6B5E5E] hover:text-[#E31837] transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E31837] rounded"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Actions (Sacola + CTA Entrar em Contato) */}
          <div className="flex items-center gap-3">
            {/* Cart Trigger */}
            <button
              onClick={onOpenCart}
              aria-label="Abrir sacola de compras"
              className="relative p-2.5 text-[#2C2424] hover:text-[#E31837] bg-white border border-[#E31837]/15 rounded-xl shadow-xs transition-all duration-200 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E31837]"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-[#E31837] text-white text-[11px] font-bold rounded-full flex items-center justify-center shadow-xs animate-scale-in">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Primary CTA: "Entrar em contato" */}
            <button
              onClick={onContactClick}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-[#E31837] hover:bg-[#C5112D] active:bg-[#A80B22] rounded-xl shadow-md shadow-[#E31837]/20 hover:shadow-lg hover:shadow-[#E31837]/30 transition-all duration-200 transform hover:-translate-y-0.5 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#E31837]"
            >
              <Phone className="w-4 h-4" />
              <span>Entrar em contato</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              className="md:hidden p-2 text-[#2C2424] hover:text-[#E31837] rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E31837]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFFDF9] border-b border-[#E31837]/15 shadow-xl px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-base font-semibold text-[#2C2424] hover:text-[#E31837] px-3 py-2 rounded-lg hover:bg-[#FAF6F0] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-[#E31837]/10 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onContactClick();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-bold text-white bg-[#E31837] hover:bg-[#C5112D] rounded-xl shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>Entrar em contato</span>
              </button>
              <p className="text-xs text-center text-[#6B5E5E] pt-1">
                {BUSINESS_INFO.address}, Cândido Mota - SP
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
