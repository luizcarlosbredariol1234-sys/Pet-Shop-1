import React, { useState } from 'react';
import { Search, User, Heart, ShoppingBag, Menu, X, Crown } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';
import logoIcon from '../assets/images/logo_icon_transparent.png';

interface NavbarProps {
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onSearch: (query: string) => void;
  onCategorySelect: (category: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  wishlistCount,
  onOpenCart,
  onSearch,
  onCategorySelect,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const navItems = [
    { label: 'Início', id: 'inicio' },
    { label: 'Cães', id: 'caes' },
    { label: 'Gatos', id: 'gatos' },
    { label: 'Pequenos Pets', id: 'pequenos' },
    { label: 'Camas & Conforto', id: 'camas' },
    { label: 'Acessórios', id: 'moda' },
    { label: 'Bem-Estar & Spa', id: 'banho' },
    { label: 'Presentes', id: 'kits' },
    { label: 'Nossa História', id: 'historia' },
  ];

  return (
    <header className="bg-white border-b border-[#EDE6E1] sticky top-0 z-40 shadow-2xs font-nunito">
      {/* Row 1: Brand Logo, Central Search, User Actions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Logo with Boutique Pet + Logo Icon (No text below) + Slogan */}
          <a
            href="#inicio"
            aria-label="Boutique Pet - Início"
            className="flex flex-col items-center sm:items-start group focus-visible:outline-none"
          >
            {/* 1. Boutique Pet (do jeito que estava) */}
            <div className="flex items-center gap-1.5 text-[#C5A059]">
              <Crown className="w-3.5 h-3.5 fill-current" />
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#706763]">
                Boutique Pet
              </span>
            </div>

            {/* 2. Aqui a logo (somente a logo, sem frase embaixo) */}
            <div className="my-1 flex items-center justify-center">
              <img
                src={logoIcon}
                onError={(e) => {
                  e.currentTarget.src = '/assets/images/logo_icon_transparent.png';
                }}
                alt="Logo Pet Care"
                className="h-12 sm:h-14 w-auto object-contain transition-transform group-hover:scale-105 drop-shadow-2xs"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* 3. O cuidado que seu pet merece. */}
            <span className="text-[8px] sm:text-[9px] font-semibold tracking-[0.2em] uppercase text-[#A89E99]">
              O Cuidado que seu Pet Merece
            </span>
          </a>

          {/* Search Bar (Center) */}
          <form
            onSubmit={handleSearchSubmit}
            className="hidden md:flex flex-1 max-w-xl mx-6 relative"
          >
            <input
              type="text"
              placeholder="Buscar produtos premium para cães e gatos..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                onSearch(e.target.value);
              }}
              className="w-full bg-[#FAF8F5] text-xs sm:text-sm text-[#241E1C] placeholder:text-[#9C938E] pl-4 pr-12 py-2.5 rounded-full border border-[#E5DFD9] focus:outline-none focus:border-[#C5A059] focus:bg-white transition-all shadow-2xs"
            />
            <button
              type="submit"
              aria-label="Buscar"
              className="absolute right-1.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#1A1513] text-white flex items-center justify-center hover:bg-[#C5A059] transition-colors cursor-pointer"
            >
              <Search className="w-3.5 h-3.5" />
            </button>
          </form>

          {/* User Actions (Right) */}
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Account / Support */}
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-1.5 text-xs font-semibold text-[#4A403B] hover:text-[#C5A059] transition-colors"
            >
              <User className="w-4 h-4" />
              <span>Minha Conta</span>
            </a>

            {/* Wishlist */}
            <div className="relative cursor-pointer text-[#4A403B] hover:text-[#C5A059] transition-colors">
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-[#C5A059] text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </div>

            {/* Cart Trigger */}
            <button
              onClick={onOpenCart}
              aria-label="Abrir sacola de compras"
              className="flex items-center gap-1.5 text-[#1A1513] hover:text-[#C5A059] transition-colors relative cursor-pointer"
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute -top-1.5 -right-2 bg-[#1A1513] text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center shadow-xs">
                  {cartCount}
                </span>
              </div>
              <span className="hidden sm:inline text-xs font-bold uppercase tracking-wider ml-1">
                Sacola
              </span>
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir menu"
              className="md:hidden p-1.5 text-[#1A1513] hover:text-[#C5A059] cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <form onSubmit={handleSearchSubmit} className="md:hidden mt-3 relative">
          <input
            type="text"
            placeholder="Buscar rações, caminhas, coleiras..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              onSearch(e.target.value);
            }}
            className="w-full bg-[#FAF8F5] text-xs text-[#241E1C] placeholder:text-[#9C938E] pl-4 pr-10 py-2 rounded-full border border-[#E5DFD9] focus:outline-none focus:border-[#C5A059]"
          />
          <button
            type="submit"
            aria-label="Buscar"
            className="absolute right-1 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-[#1A1513] text-white flex items-center justify-center"
          >
            <Search className="w-3 h-3" />
          </button>
        </form>
      </div>

      {/* Row 2: Category Navigation Menu */}
      <div className="hidden md:block border-t border-[#EDE6E1] bg-[#FAF8F5]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-center gap-7 lg:gap-9 py-2.5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onCategorySelect(item.id)}
                className="text-xs font-semibold text-[#574E49] hover:text-[#C5A059] transition-colors relative py-0.5 whitespace-nowrap focus:outline-none cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-[#EDE6E1] py-4 px-6 space-y-2 animate-in slide-in-from-top duration-200">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onCategorySelect(item.id);
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 text-sm font-semibold text-[#3D3531] hover:text-[#C5A059] border-b border-[#F5F1EB] last:border-none cursor-pointer"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 text-xs text-[#706763]">
            {BUSINESS_INFO.address}, Cândido Mota - SP
          </div>
        </div>
      )}
    </header>
  );
};
