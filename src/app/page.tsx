'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Heart,
  Search,
  UserPlus,
  FileText,
  MessageCircle,
  Shield,
  Star,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Users,
  Award,
  ArrowRight,
} from 'lucide-react';
import { mockUsers } from '@/lib/mock-data';

export default function HomePage() {
  const [searchGender, setSearchGender] = useState('');
  const [searchAge, setSearchAge] = useState('');
  const [searchCity, setSearchCity] = useState('');
  const [carouselIndex, setCarouselIndex] = useState(0);

  const featuredUsers = mockUsers.slice(0, 4);

  const steps = [
    { icon: UserPlus, title: 'Register', description: 'Create your free account in minutes' },
    { icon: FileText, title: 'Create Profile', description: 'Add your details and preferences' },
    { icon: Search, title: 'Search', description: 'Browse verified profiles with filters' },
    { icon: MessageCircle, title: 'Connect', description: 'Express interest and start chatting' },
  ];

  const testimonials = [
    {
      name: 'Sana & Usman',
      city: 'Lahore',
      text: 'We found each other on NikahMatch and are happily married now. The platform made it so easy to find someone who shared our values.',
    },
    {
      name: 'Hira & Faisal',
      city: 'Karachi',
      text: 'After months of searching, NikahMatch connected us. The verification process gave our families confidence in the platform.',
    },
    {
      name: 'Amina & Tariq',
      city: 'Islamabad',
      text: 'The privacy features and respectful community made all the difference. We are grateful for this platform.',
    },
  ];

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-hero text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Find Your Perfect
              <br />
              Life Partner
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Join thousands of Muslim singles who have found their soulmate on NikahMatch.
              Your journey to a blessed union starts here.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-4 md:p-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">I&apos;m looking for</label>
                <select
                  value={searchGender}
                  onChange={(e) => setSearchGender(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="">Select Gender</option>
                  <option value="female">Bride</option>
                  <option value="male">Groom</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">Age Range</label>
                <select
                  value={searchAge}
                  onChange={(e) => setSearchAge(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="">Any Age</option>
                  <option value="20-25">20 - 25</option>
                  <option value="26-30">26 - 30</option>
                  <option value="31-35">31 - 35</option>
                  <option value="36+">36+</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">City</label>
                <input
                  type="text"
                  value={searchCity}
                  onChange={(e) => setSearchCity(e.target.value)}
                  placeholder="Enter city"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div className="flex items-end">
                <Link
                  href="/browse"
                  className="w-full bg-primary-600 text-white py-2.5 rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Search className="w-4 h-4" />
                  Search
                </Link>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="max-w-3xl mx-auto mt-10 grid grid-cols-3 gap-4 text-center">
            <div className="animate-fade-in-up">
              <div className="flex items-center justify-center gap-2">
                <Users className="w-5 h-5 text-white/80" />
                <span className="text-2xl md:text-3xl font-bold">12,000+</span>
              </div>
              <p className="text-white/80 text-sm mt-1">Verified Profiles</p>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center justify-center gap-2">
                <Heart className="w-5 h-5 text-white/80" />
                <span className="text-2xl md:text-3xl font-bold">2,300+</span>
              </div>
              <p className="text-white/80 text-sm mt-1">Successful Matches</p>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center justify-center gap-2">
                <Award className="w-5 h-5 text-white/80" />
                <span className="text-2xl md:text-3xl font-bold">98%</span>
              </div>
              <p className="text-white/80 text-sm mt-1">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">How It Works</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Finding your life partner is simple with NikahMatch. Follow four easy steps.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-2xl flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-primary-600" />
                </div>
                <div className="text-sm font-bold text-primary-600 mb-1">Step {i + 1}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Profiles */}
      <section className="py-16 md:py-20 gradient-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Featured Profiles</h2>
              <p className="text-gray-500">Meet some of our verified members</p>
            </div>
            <div className="hidden md:flex gap-2">
              <button
                onClick={() => setCarouselIndex(Math.max(0, carouselIndex - 1))}
                className="p-2 rounded-full border border-gray-200 hover:bg-primary-50 hover:border-primary-300 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <button
                onClick={() => setCarouselIndex(Math.min(featuredUsers.length - 1, carouselIndex + 1))}
                className="p-2 rounded-full border border-gray-200 hover:bg-primary-50 hover:border-primary-300 transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredUsers.map((user) => (
              <Link href={`/profile/${user.id}`} key={user.id}>
                <div className="profile-card bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 cursor-pointer">
                  <div className="p-6 text-center">
                    <div className="relative inline-block mb-4">
                      <div
                        className={`w-20 h-20 rounded-full flex items-center justify-center text-white text-xl font-bold ${
                          user.gender === 'female'
                            ? 'bg-gradient-to-br from-primary-400 to-primary-600'
                            : 'bg-gradient-to-br from-blue-400 to-blue-600'
                        }`}
                      >
                        {getInitials(user.name)}
                      </div>
                      {user.isOnline && <div className="online-dot" />}
                    </div>
                    <h3 className="font-semibold text-gray-900 text-lg">{user.name}</h3>
                    <p className="text-gray-500 text-sm">
                      {user.age} yrs &middot; {user.city}
                    </p>
                    <p className="text-gray-400 text-sm mt-1">{user.profession}</p>
                    <div className="flex items-center justify-center gap-2 mt-3">
                      {user.isVerified && (
                        <span className="verified-badge">
                          <CheckCircle className="w-3 h-3" /> Verified
                        </span>
                      )}
                      {user.isPremium && (
                        <span className="premium-badge">
                          <Star className="w-3 h-3" /> Premium
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/browse"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors"
            >
              View All Profiles
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Success Stories</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Hear from couples who found their life partner on NikahMatch.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-primary-50 rounded-2xl p-6 border border-primary-100">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-accent-500 fill-accent-500" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-200 rounded-full flex items-center justify-center">
                    <Heart className="w-5 h-5 text-primary-600 fill-primary-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs">{t.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 gradient-hero text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Find Your Life Partner?</h2>
          <p className="text-lg text-white/90 mb-8">
            Join NikahMatch today and take the first step towards a blessed union. Registration is free.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/auth/register"
              className="px-8 py-3 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-50 transition-colors flex items-center gap-2"
            >
              <Shield className="w-5 h-5" />
              Register Free
            </Link>
            <Link
              href="/browse"
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
            >
              Browse Profiles
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
