'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Heart, Search, MessageCircle, Bell, Menu, X, User, Crown } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-primary-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-primary-600 p-2 rounded-xl">
              <Heart className="w-6 h-6 text-white fill-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">
              Nikah<span className="text-primary-600">Match</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <Link
              href="/browse"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-colors"
            >
              <Search className="w-4 h-4" />
              <span>Browse</span>
            </Link>
            <Link
              href="/messages"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-colors relative"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Messages</span>
              <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                3
              </span>
            </Link>
            <Link
              href="/browse"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-colors relative"
            >
              <Bell className="w-4 h-4" />
              <span>Notifications</span>
              <span className="absolute -top-1 -right-1 bg-accent-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                5
              </span>
            </Link>
            <Link
              href="/pricing"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-accent-600 hover:bg-accent-50 transition-colors font-medium"
            >
              <Crown className="w-4 h-4" />
              <span>Premium</span>
            </Link>
          </nav>

          {/* User Area */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/auth/login"
              className="px-4 py-2 text-primary-600 font-medium hover:bg-primary-50 rounded-lg transition-colors"
            >
              Login
            </Link>
            <Link
              href="/auth/register"
              className="px-5 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
            >
              Register
            </Link>
            <Link href="/profile/1" className="ml-2">
              <div className="w-9 h-9 bg-primary-100 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-primary-600" />
              </div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-primary-50"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-primary-100 bg-white animate-slide-in">
          <div className="px-4 py-3 space-y-1">
            <Link
              href="/browse"
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-primary-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Search className="w-5 h-5" />
              <span>Browse Profiles</span>
            </Link>
            <Link
              href="/messages"
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-primary-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              <MessageCircle className="w-5 h-5" />
              <span>Messages</span>
              <span className="ml-auto bg-primary-600 text-white text-xs px-2 py-0.5 rounded-full">3</span>
            </Link>
            <Link
              href="/browse"
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-primary-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Bell className="w-5 h-5" />
              <span>Notifications</span>
              <span className="ml-auto bg-accent-500 text-white text-xs px-2 py-0.5 rounded-full">5</span>
            </Link>
            <Link
              href="/pricing"
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-accent-600 hover:bg-accent-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Crown className="w-5 h-5" />
              <span>Premium</span>
            </Link>
            <hr className="my-2 border-gray-100" />
            <Link
              href="/auth/login"
              className="block px-4 py-3 text-center text-primary-600 font-medium rounded-lg hover:bg-primary-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Login
            </Link>
            <Link
              href="/auth/register"
              className="block px-4 py-3 text-center bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Register Free
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
