/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CheckCircle2, ShoppingBag, X } from 'lucide-react';
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
import { NEW_ARRIVALS, BEST_SELLERS } from './data/mockData';
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
    const el = document.getElementById('novidades');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCategorySelect = (categoryId: string) => {
    const el = document.getElementById('mais-vendidos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalWishlistCount = Object.values(wishlist).filter(Boolean).length;

  // Filter products by search term if active
  const filteredNewArrivals = searchQuery
    ? NEW_ARRIVALS.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : NEW_ARRIVALS;

  const filteredBestSellers = searchQuery
    ? BEST_SELLERS.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : BEST_SELLERS;

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#241E1C] font-nunito selection:bg-[#C5A059]/20 selection:text-[#1A1513]">
      {/* 1. Top Announcement Bar */}
      <TopBar />

      {/* 2. Main Luxury Header */}
      <Navbar
        cartCount={totalCartCount}
        wishlistCount={totalWishlistCount}
        onOpenCart={() => setIsCartOpen(true)}
        onSearch={setSearchQuery}
        onCategorySelect={handleCategorySelect}
      />

      {/* Notification Toast when item is added */}
      {toastMessage && (
        <div className="fixed top-20 right-4 sm:right-8 z-50 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="bg-[#1A1513] text-white px-4 py-3 rounded-xl shadow-xl border border-[#C5A059]/30 flex items-center gap-3 text-xs sm:text-sm">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="max-w-[240px] sm:max-w-xs truncate">{toastMessage}</span>
            <button
              onClick={() => {
                setToastMessage(null);
                setIsCartOpen(true);
              }}
              className="text-[#C5A059] hover:underline font-bold whitespace-nowrap ml-1 flex items-center gap-1 cursor-pointer"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Ver Sacola</span>
            </button>
            <button
              onClick={() => setToastMessage(null)}
              aria-label="Fechar aviso"
              className="text-white/60 hover:text-white ml-1 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Main Content Flow matching Reference Layout */}
      <main className="flex-1">
        {/* 3. Hero Section: "Eles são Família" + Dog & Cat in Bed */}
        <Hero onShopClick={scrollToShelf} />

        {/* 4. Shop by Category: 9 Circular Avatars */}
        <ShopByCategory onSelectCategory={handleCategorySelect} />

        {/* 5. New Arrivals (5 products row) */}
        <ProductShelf
          id="novidades"
          title="Novidades da Boutique"
          subtitle="Achados elegantes e exclusivos para pets com estilo."
          products={filteredNewArrivals}
          wishlist={wishlist}
          onToggleWishlist={handleToggleWishlist}
          onAddToCart={handleAddToCart}
          onViewAllClick={scrollToShelf}
        />

        {/* 6. Best Sellers (5 products row) */}
        <ProductShelf
          id="mais-vendidos"
          title="Os Mais Vendidos"
          subtitle="Amados pelos pets e recomendados pelos tutores mais exigentes."
          products={filteredBestSellers}
          wishlist={wishlist}
          onToggleWishlist={handleToggleWishlist}
          onAddToCart={handleAddToCart}
          onViewAllClick={scrollToShelf}
        />

        {/* 7. Featured Banner: The Heritage Collection */}
        <HeritageBanner onExploreClick={scrollToShelf} />

        {/* 8. Real Stories, Real Love (Testimonials with circular avatars) */}
        <RealStories />

        {/* 9. 4-Column Value Proposition Bar */}
        <ValueProps />

        {/* 10. Newsletter / Club Dupet */}
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
