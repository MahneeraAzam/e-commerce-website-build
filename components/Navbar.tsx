'use client';

import Link from 'next/link';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import CartSidebar from './CartSidebar';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <>
      <nav className="sticky top-0 z-40 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <span className="text-2xl font-bold text-foreground">StyleHub</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-8">
              <Link
                href="/"
                className="text-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                Home
              </Link>
              <Link
                href="/products"
                className="text-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                Shop
              </Link>
              <Link
                href="/about"
                className="text-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                Contact
              </Link>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              {/* Cart Icon */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 hover:bg-muted rounded-lg transition-colors"
              >
                <ShoppingCart className="w-6 h-6 text-foreground" />
                {totalItems > 0 && (
                  <span className="absolute top-1 right-1 bg-destructive text-destructive-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              <Link
                href="/"
                className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors"
              >
                Home
              </Link>
              <Link
                href="/products"
                className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors"
              >
                Shop
              </Link>
              <Link
                href="/about"
                className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors"
              >
                Contact
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Cart Sidebar */}
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
