'use client';

import { use } from 'react';
import Link from 'next/link';
import {
  Heart,
  MessageCircle,
  Bookmark,
  CheckCircle,
  Star,
  MapPin,
  Briefcase,
  GraduationCap,
  Ruler,
  Users,
  BookOpen,
  Shield,
  ArrowLeft,
  Clock,
  Lock,
} from 'lucide-react';
import { mockUsers } from '@/lib/mock-data';

export default function ProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const user = mockUsers.find((u) => u.id === id);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Profile Not Found</h2>
          <p className="text-gray-500 mb-4">The profile you are looking for does not exist.</p>
          <Link href="/browse" className="text-primary-600 font-medium hover:underline">
            Browse Profiles
          </Link>
        </div>
      </div>
    );
  }

  const getInitials = (name: string) =>
    name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Link href="/browse" className="inline-flex items-center gap-2 text-gray-500 hover:text-primary-600 text-sm">
          <ArrowLeft className="w-4 h-4" />
          Back to Browse
        </Link>
      </div>

      {/* Profile Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="gradient-hero p-8">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="relative">
                <div
                  className={`w-28 h-28 rounded-full flex items-center justify-center text-white text-3xl font-bold border-4 border-white/30 ${
                    user.gender === 'female'
                      ? 'bg-gradient-to-br from-primary-300 to-primary-500'
                      : 'bg-gradient-to-br from-blue-300 to-blue-500'
                  }`}
                >
                  {getInitials(user.name)}
                </div>
                {user.isOnline && (
                  <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-400 border-2 border-white rounded-full" />
                )}
              </div>
              <div className="text-center sm:text-left text-white">
                <h1 className="text-2xl md:text-3xl font-bold">{user.name}</h1>
                <p className="text-white/80 mt-1">
                  {user.age} years &middot; {user.city}, {user.country}
                </p>
                <div className="flex items-center justify-center sm:justify-start gap-2 mt-3">
                  {user.isVerified && (
                    <span className="inline-flex items-center gap-1 bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      <CheckCircle className="w-3.5 h-3.5" /> Verified
                    </span>
                  )}
                  {user.isPremium && (
                    <span className="inline-flex items-center gap-1 bg-accent-500/80 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      <Star className="w-3.5 h-3.5" /> Premium
                    </span>
                  )}
                </div>
                <p className="text-white/60 text-sm mt-2 flex items-center justify-center sm:justify-start gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {user.isOnline ? 'Online now' : `Last active ${user.lastActive}`}
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="px-8 py-4 border-b border-gray-100 flex flex-wrap gap-3">
            <button className="flex items-center gap-2 px-6 py-2.5 bg-primary-600 text-white font-medium rounded-xl hover:bg-primary-700 transition-colors">
              <Heart className="w-4 h-4" />
              Express Interest
            </button>
            <button className="flex items-center gap-2 px-6 py-2.5 border border-primary-200 text-primary-600 font-medium rounded-xl hover:bg-primary-50 transition-colors">
              <MessageCircle className="w-4 h-4" />
              Send Message
            </button>
            <button className="flex items-center gap-2 px-6 py-2.5 border border-gray-200 text-gray-600 font-medium rounded-xl hover:bg-gray-50 transition-colors">
              <Bookmark className="w-4 h-4" />
              Add to Favorites
            </button>
          </div>

          {/* Profile Content */}
          <div className="p-8 space-y-8">
            {/* About */}
            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary-600" />
                About
              </h2>
              <p className="text-gray-600 leading-relaxed">{user.bio}</p>
            </section>

            {/* Personal Details */}
            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Users className="w-5 h-5 text-primary-600" />
                Personal Details
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <Ruler className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-xs text-gray-400">Height</p>
                    <p className="text-sm font-medium text-gray-700">{user.height}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <Heart className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-xs text-gray-400">Marital Status</p>
                    <p className="text-sm font-medium text-gray-700">{user.maritalStatus}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <BookOpen className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-xs text-gray-400">Religion</p>
                    <p className="text-sm font-medium text-gray-700">{user.religion}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <Shield className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-xs text-gray-400">Sect</p>
                    <p className="text-sm font-medium text-gray-700">{user.sect}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Education & Career */}
            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-primary-600" />
                Education & Career
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <GraduationCap className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-xs text-gray-400">Education</p>
                    <p className="text-sm font-medium text-gray-700">{user.education}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <Briefcase className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-xs text-gray-400">Profession</p>
                    <p className="text-sm font-medium text-gray-700">{user.profession}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-xs text-gray-400">Location</p>
                    <p className="text-sm font-medium text-gray-700">
                      {user.city}, {user.country}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Family Values */}
            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Users className="w-5 h-5 text-primary-600" />
                Family Values
              </h2>
              <p className="text-gray-600">{user.familyValues}</p>
            </section>

            {/* Interests */}
            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Star className="w-5 h-5 text-primary-600" />
                Interests
              </h2>
              <div className="flex flex-wrap gap-2">
                {user.interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-4 py-1.5 bg-primary-50 text-primary-700 text-sm font-medium rounded-full border border-primary-100"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </section>

            {/* Looking For */}
            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Heart className="w-5 h-5 text-primary-600" />
                What I&apos;m Looking For
              </h2>
              <p className="text-gray-600">{user.lookingFor}</p>
            </section>

            {/* Privacy Notice */}
            <div className="bg-accent-50 border border-accent-200 rounded-xl p-4 flex items-start gap-3">
              <Lock className="w-5 h-5 text-accent-600 mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-medium text-accent-800">Privacy Notice</p>
                <p className="text-sm text-accent-700 mt-1">
                  Some details are hidden until both parties express mutual interest. Contact information
                  and additional photos will be shared after a mutual match.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
