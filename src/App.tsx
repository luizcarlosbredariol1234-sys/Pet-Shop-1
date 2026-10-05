/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CheckCircle2, ShoppingBag, X, Search, Heart, Star } from 'lucide-react';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ShopByCategory } from './components/ShopByCategory';
import { ProductShelf } from './components/ProductShelf';
import { HeritageBanner } from './components/HeritageBanner';
import { RealStories } from './components/RealStories';
import { ValueProps } from './components/ValueProps';
import { NewsletterClub } from './components/NewsletterClub';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { AnimatedPawBackground } from './components/AnimatedPawBackground';
import { NEW_ARRIVALS, BEST_SELLERS, ALL_PRODUCTS } from './data/mockData';
import { CartItem, Product } from './types';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [wishlist, setWishlist] = useState<{ [id: string]: boolean }>({});
  const [searchQuery, setSearchQuery] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Cart operations: add to cart WITHOUT opening the drawer
  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });

    // Show temporary feedback toast without opening the cart drawer
    setToastMessage(`"${product.name}" foi adicionado à sua sacola.`);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCartItems((prev) => {
      return prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleToggleWishlist = (productId: string) => {
    setWishlist((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  const scrollToShelf = () => {
    const el = document.getElementById('destaques');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCategorySelect = (categoryId: string) => {
    const el = document.getElementById('destaques');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Robust Search handler
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      setTimeout(() => {
        const el = document.getElementById('busca-resultados');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 50);
    }
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalWishlistCount = Object.values(wishlist).filter(Boolean).length;

  // Search Results across all products in catalog
  const searchResults = searchQuery.trim()
    ? ALL_PRODUCTS.filter((p) => {
        const q = searchQuery.toLowerCase().trim();
        return (
          p.name.toLowerCase().includes(q) ||
          p.categoryLabel.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          (p.description?.toLowerCase().includes(q) ?? false)
        );
      })
    : [];

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] relative text-[#241E1C] font-nunito selection:bg-[#C5A059]/20 selection:text-[#1A1513]">
      {/* Animated Subtle Paw Background Layer across entire site */}
      <AnimatedPawBackground />

      {/* 1. Top Announcement Bar */}
      <TopBar />

      {/* 2. Main Luxury Header with Instant Search */}
      <Navbar
        cartCount={totalCartCount}
        wishlistCount={totalWishlistCount}
        searchQuery={searchQuery}
        onOpenCart={() => setIsCartOpen(true)}
        onSearch={handleSearch}
        onAddToCart={handleAddToCart}
        onCategorySelect={handleCategorySelect}
      />

      {/* Notification Toast when item is added */}
      {toastMessage && (
        <div className="fixed top-20 right-4 sm:right-8 z-50 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="bg-[#1A1513] text-white px-5 py-3.5 rounded-xl shadow-2xl border border-[#C5A059]/40 flex items-center gap-3 text-sm sm:text-base font-medium">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <span className="max-w-[260px] sm:max-w-sm truncate">{toastMessage}</span>
            <button
              onClick={() => {
                setToastMessage(null);
                setIsCartOpen(true);
              }}
              className="text-[#C5A059] hover:underline font-bold whitespace-nowrap ml-2 flex items-center gap-1.5 cursor-pointer text-sm sm:text-base"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Ver Sacola</span>
            </button>
            <button
              onClick={() => setToastMessage(null)}
              aria-label="Fechar aviso"
              className="text-white/60 hover:text-white ml-1 cursor-pointer p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Main Content Flow: Destaques first, followed by Novidades, then Categorias */}
      <main className="flex-1 relative z-10">
        {/* Active Search Results Section */}
        {searchQuery.trim() && (
          <section id="busca-resultados" className="py-10 bg-white/95 border-b border-[#EDE6E1] font-nunito shadow-xs">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Search Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#F0EAE4]">
                <div>
                  <div className="flex items-center gap-2">
                    <Search className="w-5 h-5 text-[#C5A059]" />
                    <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#1A1513]">
                      Resultados para "{searchQuery}"
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm text-[#706763] mt-1">
                    {searchResults.length === 1
                      ? '1 produto encontrado na boutique'
                      : `${searchResults.length} produtos encontrados na boutique`}
                  </p>
                </div>

                <button
                  onClick={() => setSearchQuery('')}
                  className="flex items-center gap-1.5 text-xs font-bold text-[#706763] hover:text-[#1A1513] bg-[#FAF8F5] hover:bg-[#F5F1EB] px-4 py-2 rounded-full border border-[#EDE6E1] transition-colors cursor-pointer self-start sm:self-auto shadow-2xs"
                >
                  <X className="w-4 h-4" />
                  <span>Limpar busca e ver tudo</span>
                </button>
              </div>

              {/* Grid of Results */}
              {searchResults.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
                  {searchResults.map((product) => {
                    const isFav = wishlist[product.id];
                    return (
                      <div
                        key={product.id}
                        className="bg-[#FAF8F5] rounded-xl border border-[#EDE6E1] p-3 sm:p-4 flex flex-col justify-between group hover:border-[#C5A059]/50 hover:shadow-md transition-all duration-300 relative"
                      >
                        {/* Top badges & Heart */}
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-bold text-[#706763] uppercase tracking-wider">
                            {product.categoryLabel}
                          </span>
                          <button
                            onClick={() => handleToggleWishlist(product.id)}
                            className="p-1 text-[#A89E99] hover:text-red-500 transition-colors cursor-pointer"
                          >
                            <Heart className={`w-4 h-4 ${isFav ? 'fill-red-500 text-red-500' : ''}`} />
                          </button>
                        </div>

                        {/* Image */}
                        <div className="aspect-square w-full rounded-lg bg-white overflow-hidden p-2 flex items-center justify-center mb-3">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
                          />
                        </div>

                        {/* Details */}
                        <div>
                          <h3 className="text-xs sm:text-sm font-semibold text-[#241E1C] line-clamp-2 leading-snug group-hover:text-[#C5A059] transition-colors mb-1.5 min-h-[36px]">
                            {product.name}
                          </h3>

                          {/* Star rating */}
                          <div className="flex items-center gap-1 mb-2">
                            <div className="flex text-[#C5A059]">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-3 h-3 fill-current" />
                              ))}
                            </div>
                            <span className="text-[11px] text-[#706763]">({product.reviewsCount})</span>
                          </div>

                          <div className="flex items-center justify-between pt-1">
                            <span className="font-playfair text-base sm:text-lg font-bold text-[#1A1513]">
                              R$ {product.price.toFixed(2).replace('.', ',')}
                            </span>
                            <button
                              onClick={() => handleAddToCart(product)}
                              className="w-8 h-8 rounded-lg bg-[#1A1513] hover:bg-[#C5A059] text-white flex items-center justify-center transition-colors cursor-pointer shadow-xs"
                              title="Adicionar à sacola"
                            >
                              <ShoppingBag className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-12 px-4 bg-[#FAF8F5] rounded-2xl border border-dashed border-[#EDE6E1]">
                  <p className="text-base font-bold text-[#241E1C] mb-2">
                    Nenhum produto encontrado para "{searchQuery}"
                  </p>
                  <p className="text-xs text-[#706763] mb-6 max-w-md mx-auto">
                    Não encontramos itens exatos com esse termo. Tente uma das opções populares abaixo para ver produtos em destaque:
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {['Caminha', 'Ração', 'Petiscos', 'Coleira', 'Arranhador', 'Tigela', 'Shampoo'].map((tag) => (
                      <button
                        key={tag}
                        onClick={() => handleSearch(tag)}
                        className="text-xs bg-white hover:bg-[#C5A059] hover:text-white text-[#241E1C] px-3.5 py-1.5 rounded-full border border-[#EDE6E1] font-semibold transition-colors cursor-pointer shadow-2xs"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* 3. Hero Section: "Eles são Família" + Dog & Cat in Bed */}
        <Hero onShopClick={scrollToShelf} />

        {/* 4. Destaques da Boutique (Primeiro os produtos em destaque!) */}
        <ProductShelf
          id="destaques"
          title="Produtos em Destaque"
          subtitle="Os favoritos mais desejados e recomendados pelos tutores mais exigentes."
          products={BEST_SELLERS}
          wishlist={wishlist}
          onToggleWishlist={handleToggleWishlist}
          onAddToCart={handleAddToCart}
          onViewAllClick={scrollToShelf}
        />

        {/* 5. Novidades da Boutique */}
        <ProductShelf
          id="novidades"
          title="Novidades da Boutique"
          subtitle="Achados elegantes e exclusivos para pets com estilo."
          products={NEW_ARRIVALS}
          wishlist={wishlist}
          onToggleWishlist={handleToggleWishlist}
          onAddToCart={handleAddToCart}
          onViewAllClick={scrollToShelf}
        />

        {/* 6. Compre por Categoria (Catálogo completo por setor) */}
        <ShopByCategory onSelectCategory={handleCategorySelect} />

        {/* 7. Featured Banner: The Heritage Collection */}
        <HeritageBanner onExploreClick={scrollToShelf} />

        {/* 8. Real Stories, Real Love (Testimonials with circular avatars) */}
        <RealStories />

        {/* 9. 4-Column Value Proposition Bar */}
        <ValueProps />

        {/* 10. Newsletter / Club */}
        <NewsletterClub />
      </main>

      {/* 11. Dark Luxury Footer */}
      <Footer />

      {/* 12. Slide-over Cart Drawer with WhatsApp Order */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* 13. Discreet WhatsApp Floating Button */}
      <WhatsAppFloatingButton />
    </div>
  );
}
