import React, { useState, useRef, useEffect } from 'react';
import { Search, User, Heart, ShoppingBag, Menu, X, Crown, ArrowRight, Sparkles } from 'lucide-react';
import { BUSINESS_INFO, ALL_PRODUCTS } from '../data/mockData';
import { Product } from '../types';
import logoIcon from '../assets/images/logo_icon_transparent.png';

interface NavbarProps {
  cartCount: number;
  wishlistCount: number;
  searchQuery: string;
  onOpenCart: () => void;
  onSearch: (query: string) => void;
  onAddToCart: (product: Product) => void;
  onCategorySelect: (category: string) => void;
}

const POPULAR_SEARCHES = ['Caminha', 'Ração', 'Petiscos', 'Coleira', 'Arranhador', 'Tigela', 'Shampoo'];

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  wishlistCount,
  searchQuery,
  onOpenCart,
  onSearch,
  onAddToCart,
  onCategorySelect,
}) => {
  const [searchTerm, setSearchTerm] = useState(searchQuery || '');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const mobileSearchRef = useRef<HTMLDivElement>(null);

  // Sync state if searchQuery changes externally
  useEffect(() => {
    setSearchTerm(searchQuery);
  }, [searchQuery]);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(e.target as Node) &&
        mobileSearchRef.current &&
        !mobileSearchRef.current.contains(e.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Filter products live
  const matchingProducts = searchTerm.trim()
    ? ALL_PRODUCTS.filter((p) => {
        const query = searchTerm.toLowerCase();
        return (
          p.name.toLowerCase().includes(query) ||
          p.categoryLabel.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query) ||
          (p.description?.toLowerCase().includes(query) ?? false)
        );
      }).slice(0, 5)
    : [];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsDropdownOpen(false);
    onSearch(searchTerm);
  };

  const handleSelectSuggestion = (term: string) => {
    setSearchTerm(term);
    setIsDropdownOpen(false);
    onSearch(term);
  };

  const handleClearSearch = () => {
    setSearchTerm('');
    onSearch('');
    setIsDropdownOpen(false);
  };

  const navItems = [
    { label: 'Início', id: 'inicio' },
    { label: 'Destaques', id: 'destaques' },
    { label: 'Novidades', id: 'novidades' },
    { label: 'Categorias', id: 'categorias' },
    { label: 'Cães', id: 'caes' },
    { label: 'Gatos', id: 'gatos' },
    { label: 'Camas & Conforto', id: 'camas' },
    { label: 'Acessórios', id: 'moda' },
    { label: 'Banho & Spa', id: 'banho' },
  ];

  return (
    <header className="bg-white border-b border-[#EDE6E1] sticky top-0 z-40 shadow-2xs font-nunito">
      {/* Row 1: Brand Logo, Central Search, User Actions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Logo with Boutique Pet + Logo Icon (No text below) + Slogan - Centered Lockup */}
          <a
            href="#inicio"
            aria-label="Boutique Pet - Início"
            className="flex flex-col items-center text-center group focus-visible:outline-none shrink-0"
          >
            {/* 1. Boutique Pet (do jeito que estava) */}
            <div className="flex items-center justify-center gap-1.5 text-[#C5A059]">
              <Crown className="w-3.5 h-3.5 fill-current" />
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] uppercase text-[#706763]">
                Boutique Pet
              </span>
            </div>

            {/* 2. Aqui a logo (somente a logo, sem frase embaixo - perfeitamente centralizada sem desvios) */}
            <div className="my-1 flex items-center justify-center w-full">
              <img
                src={logoIcon}
                onError={(e) => {
                  e.currentTarget.src = '/assets/images/logo_icon_transparent.png';
                }}
                alt="Logo Pet Care"
                className="h-14 sm:h-16 w-auto object-contain mx-auto block transition-transform group-hover:scale-105 drop-shadow-2xs"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* 3. O cuidado que seu pet merece. */}
            <span className="text-[8px] sm:text-[9.5px] font-semibold tracking-[0.2em] uppercase text-[#A89E99] text-center">
              O Cuidado que seu Pet Merece
            </span>
          </a>

          {/* Search Bar with Live Instant Autocomplete Dropdown (Desktop) */}
          <div ref={searchContainerRef} className="hidden md:flex flex-1 max-w-xl mx-4 lg:mx-6 relative">
            <form onSubmit={handleSearchSubmit} className="w-full relative">
              <input
                type="text"
                placeholder="Buscar rações, caminhas, coleiras, comedouros..."
                value={searchTerm}
                onFocus={() => setIsDropdownOpen(true)}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setIsDropdownOpen(true);
                  // Live search as user types
                  onSearch(e.target.value);
                }}
                className="w-full bg-[#FAF8F5] text-xs sm:text-sm text-[#241E1C] placeholder:text-[#9C938E] pl-4 pr-20 py-2.5 rounded-full border border-[#E5DFD9] focus:outline-none focus:border-[#C5A059] focus:bg-white transition-all shadow-2xs"
              />

              <div className="absolute right-1.5 top-1/2 -translate-y-1/2 flex items-center gap-1">
                {searchTerm && (
                  <button
                    type="button"
                    onClick={handleClearSearch}
                    aria-label="Limpar busca"
                    className="p-1 text-[#9C938E] hover:text-[#241E1C] transition-colors rounded-full"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
                <button
                  type="submit"
                  aria-label="Buscar"
                  className="w-8 h-8 rounded-full bg-[#1A1513] text-white flex items-center justify-center hover:bg-[#C5A059] active:bg-[#9E7D39] transition-colors cursor-pointer shadow-xs"
                >
                  <Search className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>

            {/* Live Autocomplete Dropdown Results */}
            {isDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-[#EDE6E1] overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                {matchingProducts.length > 0 ? (
                  <div className="p-3">
                    <div className="text-[11px] font-bold text-[#706763] uppercase tracking-wider px-2 py-1 mb-1 flex items-center justify-between">
                      <span>Produtos encontrados ({matchingProducts.length})</span>
                      <span className="text-[10px] text-[#A89E99]">Pressione Enter para ver todos</span>
                    </div>

                    <div className="divide-y divide-[#F5F1EB]">
                      {matchingProducts.map((product) => (
                        <div
                          key={product.id}
                          className="flex items-center justify-between p-2 hover:bg-[#FAF8F5] rounded-xl transition-colors group cursor-pointer"
                          onClick={() => {
                            setIsDropdownOpen(false);
                            onSearch(product.name);
                          }}
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-11 h-11 rounded-lg object-contain bg-white border border-[#EDE6E1] p-1 shrink-0"
                            />
                            <div className="min-w-0">
                              <h4 className="text-xs font-bold text-[#1A1513] group-hover:text-[#C5A059] transition-colors truncate">
                                {product.name}
                              </h4>
                              <p className="text-[10px] text-[#706763] truncate">
                                {product.categoryLabel}
                              </p>
                              <span className="text-xs font-bold text-[#1A1513]">
                                R$ {product.price.toFixed(2).replace('.', ',')}
                              </span>
                            </div>
                          </div>

                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              onAddToCart(product);
                            }}
                            className="text-xs bg-[#1A1513] hover:bg-[#C5A059] text-white px-3 py-1.5 rounded-lg font-bold shrink-0 transition-colors cursor-pointer ml-2 flex items-center gap-1"
                          >
                            <ShoppingBag className="w-3 h-3" />
                            <span>Comprar</span>
                          </button>
                        </div>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={handleSearchSubmit}
                      className="w-full mt-2 py-2 bg-[#FAF8F5] hover:bg-[#F5F1EB] text-center text-xs font-bold text-[#1A1513] rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>Ver todos os resultados para "{searchTerm}"</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#C5A059]" />
                    </button>
                  </div>
                ) : searchTerm.trim() ? (
                  <div className="p-5 text-center">
                    <p className="text-xs font-semibold text-[#706763] mb-3">
                      Nenhum produto encontrado para "{searchTerm}".
                    </p>
                    <p className="text-[11px] text-[#A89E99] mb-2 font-bold uppercase tracking-wider">
                      Sugestões populares:
                    </p>
                    <div className="flex flex-wrap justify-center gap-1.5">
                      {POPULAR_SEARCHES.map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => handleSelectSuggestion(item)}
                          className="text-xs bg-[#FAF8F5] hover:bg-[#C5A059] hover:text-white text-[#241E1C] px-3 py-1 rounded-full border border-[#EDE6E1] transition-colors cursor-pointer"
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="p-4">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#706763] mb-2.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>Buscas Populares</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {POPULAR_SEARCHES.map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => handleSelectSuggestion(item)}
                          className="text-xs bg-[#FAF8F5] hover:bg-[#C5A059] hover:text-white text-[#241E1C] px-3 py-1.5 rounded-full border border-[#EDE6E1] transition-colors cursor-pointer"
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* User Actions (Right) */}
          <div className="flex items-center gap-4 sm:gap-6 shrink-0">
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

        {/* Mobile Search Bar with Interactive Submit and Suggestions */}
        <div ref={mobileSearchRef} className="md:hidden mt-3 relative">
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="text"
              placeholder="Buscar rações, caminhas, coleiras..."
              value={searchTerm}
              onFocus={() => setIsDropdownOpen(true)}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setIsDropdownOpen(true);
                onSearch(e.target.value);
              }}
              className="w-full bg-[#FAF8F5] text-xs text-[#241E1C] placeholder:text-[#9C938E] pl-4 pr-18 py-2.5 rounded-full border border-[#E5DFD9] focus:outline-none focus:border-[#C5A059]"
            />
            <div className="absolute right-1 top-1/2 -translate-y-1/2 flex items-center gap-1">
              {searchTerm && (
                <button
                  type="button"
                  onClick={handleClearSearch}
                  className="p-1 text-[#9C938E] hover:text-[#241E1C]"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
              <button
                type="submit"
                aria-label="Buscar"
                className="w-7 h-7 rounded-full bg-[#1A1513] text-white flex items-center justify-center"
              >
                <Search className="w-3 h-3" />
              </button>
            </div>
          </form>

          {/* Mobile Search Results Dropdown */}
          {isDropdownOpen && matchingProducts.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-[#EDE6E1] overflow-hidden z-50 p-2 divide-y divide-[#F5F1EB]">
              {matchingProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between py-2 px-1 cursor-pointer"
                  onClick={() => {
                    setIsDropdownOpen(false);
                    onSearch(product.name);
                  }}
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-9 h-9 rounded object-contain bg-white border border-[#EDE6E1] p-0.5 shrink-0"
                    />
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-[#1A1513] truncate">{product.name}</p>
                      <p className="text-[10px] text-[#C5A059] font-bold">
                        R$ {product.price.toFixed(2).replace('.', ',')}
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddToCart(product);
                    }}
                    className="text-[10px] bg-[#1A1513] text-white px-2 py-1 rounded font-bold"
                  >
                    + Sacola
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
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
