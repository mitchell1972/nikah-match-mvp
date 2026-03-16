import Link from 'next/link';
import { Heart, Shield, Lock, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Trust Bar */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary-400" />
              <span>Verified Profiles</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-primary-400" />
              <span>Privacy Protected</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-primary-400" />
              <span>2,300+ Successful Matches</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary-600 p-2 rounded-xl">
                <Heart className="w-5 h-5 text-white fill-white" />
              </div>
              <span className="text-lg font-bold text-white">
                Nikah<span className="text-primary-400">Match</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              A trusted platform dedicated to helping Muslim singles find their perfect life partner
              with dignity and respect.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                <span className="text-sm font-bold">f</span>
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                <span className="text-sm font-bold">X</span>
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                <span className="text-sm font-bold">in</span>
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                <span className="text-sm font-bold">ig</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/browse" className="hover:text-primary-400 transition-colors">Browse Profiles</Link></li>
              <li><Link href="/pricing" className="hover:text-primary-400 transition-colors">Premium Plans</Link></li>
              <li><Link href="/auth/register" className="hover:text-primary-400 transition-colors">Register Free</Link></li>
              <li><Link href="/auth/login" className="hover:text-primary-400 transition-colors">Login</Link></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Success Stories</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Safety Tips</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Community Guidelines</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary-400" />
                <span>support@nikahmatch.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary-400" />
                <span>+92 300 1234567</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary-400 mt-0.5" />
                <span>Lahore, Pakistan</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} NikahMatch. All rights reserved. Made with{' '}
            <Heart className="w-3 h-3 inline text-primary-500 fill-primary-500" /> for the Muslim community.
          </p>
        </div>
      </div>
    </footer>
  );
}
