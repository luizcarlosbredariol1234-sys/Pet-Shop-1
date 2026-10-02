/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { PetCalculator } from './components/PetCalculator';
import { Products } from './components/Products';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { CtaBanner } from './components/CtaBanner';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { BookingModal } from './components/BookingModal';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { CartItem, Product, Service } from './types';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<Service | null>(null);

  // Cart operations
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

  const scrollToContact = () => {
    const el = document.getElementById('contato');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const el = document.getElementById('servicos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDF9] text-[#2C2424] font-nunito selection:bg-[#E31837]/20 selection:text-[#E31837]">
      {/* Top Navbar */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onContactClick={scrollToContact}
      />

      {/* Main Page Flow: inicio → servicos → simulador → produtos → galeria → depoimentos → contato */}
      <main className="flex-1">
        <Hero
          onContactClick={scrollToContact}
          onExploreServices={scrollToServices}
        />

        <Services
          onSelectService={(service) => setSelectedServiceForBooking(service)}
        />

        <PetCalculator />

        <Products onAddToCart={handleAddToCart} />

        <Gallery />

        <Testimonials />

        <CtaBanner onContactClick={scrollToContact} />

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Service Booking Modal */}
      <BookingModal
        service={selectedServiceForBooking}
        onClose={() => setSelectedServiceForBooking(null)}
      />

      {/* Discreet Pulsing Floating WhatsApp button */}
      <WhatsAppFloatingButton />
    </div>
  );
}
