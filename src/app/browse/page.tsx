'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Search,
  SlidersHorizontal,
  CheckCircle,
  Star,
  Heart,
  Eye,
  MapPin,
  Briefcase,
  GraduationCap,
  X,
} from 'lucide-react';
import { mockUsers } from '@/lib/mock-data';

export default function BrowsePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    gender: '',
    ageMin: 18,
    ageMax: 50,
    city: '',
    religion: '',
    education: '',
    maritalStatus: '',
  });

  const filteredUsers = useMemo(() => {
    let users = [...mockUsers];

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      users = users.filter(
        (u) =>
          u.name.toLowerCase().includes(q) ||
          u.city.toLowerCase().includes(q) ||
          u.profession.toLowerCase().includes(q)
      );
    }
    if (filters.gender) users = users.filter((u) => u.gender === filters.gender);
    if (filters.city) users = users.filter((u) => u.city.toLowerCase().includes(filters.city.toLowerCase()));
    if (filters.religion) users = users.filter((u) => u.religion === filters.religion);
    if (filters.maritalStatus) users = users.filter((u) => u.maritalStatus === filters.maritalStatus);
    users = users.filter((u) => u.age >= filters.ageMin && u.age <= filters.ageMax);

    if (sortBy === 'age') users.sort((a, b) => a.age - b.age);
    if (sortBy === 'newest') users.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    return users;
  }, [searchQuery, sortBy, filters]);

  const getInitials = (name: string) =>
    name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();

  const resetFilters = () => {
    setFilters({ gender: '', ageMin: 18, ageMax: 50, city: '', religion: '', education: '', maritalStatus: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Search Bar */}
      <div className="bg-white border-b border-gray-100 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name, city, or profession..."
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="hidden sm:block border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="newest">Newest First</option>
              <option value="active">Recently Active</option>
              <option value="age">Age</option>
            </select>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center gap-2 px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-600 hover:bg-gray-50"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex gap-6">
          {/* Sidebar Filters */}
          <aside
            className={`${
              showFilters ? 'fixed inset-0 z-50 bg-white p-6 overflow-y-auto' : 'hidden'
            } lg:block lg:static lg:bg-transparent lg:p-0 lg:w-64 shrink-0`}
          >
            <div className="bg-white rounded-2xl border border-gray-100 p-5 lg:sticky lg:top-36">
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-semibold text-gray-900">Filters</h3>
                <div className="flex items-center gap-2">
                  <button onClick={resetFilters} className="text-xs text-primary-600 hover:underline">
                    Reset
                  </button>
                  <button onClick={() => setShowFilters(false)} className="lg:hidden p-1">
                    <X className="w-5 h-5 text-gray-400" />
                  </button>
                </div>
              </div>

              <div className="space-y-5">
                {/* Gender */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                  <select
                    value={filters.gender}
                    onChange={(e) => setFilters({ ...filters, gender: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">All</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>

                {/* Age Range */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Age: {filters.ageMin} - {filters.ageMax}
                  </label>
                  <div className="space-y-2">
                    <input
                      type="range"
                      min={18}
                      max={50}
                      value={filters.ageMin}
                      onChange={(e) => setFilters({ ...filters, ageMin: Number(e.target.value) })}
                      className="w-full accent-primary-600"
                    />
                    <input
                      type="range"
                      min={18}
                      max={50}
                      value={filters.ageMax}
                      onChange={(e) => setFilters({ ...filters, ageMax: Number(e.target.value) })}
                      className="w-full accent-primary-600"
                    />
                  </div>
                </div>

                {/* City */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                  <input
                    type="text"
                    value={filters.city}
                    onChange={(e) => setFilters({ ...filters, city: e.target.value })}
                    placeholder="Enter city"
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                {/* Religion */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Religion</label>
                  <select
                    value={filters.religion}
                    onChange={(e) => setFilters({ ...filters, religion: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">All</option>
                    <option value="Islam">Islam</option>
                  </select>
                </div>

                {/* Education */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Education</label>
                  <select
                    value={filters.education}
                    onChange={(e) => setFilters({ ...filters, education: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">All</option>
                    <option value="bachelors">Bachelors</option>
                    <option value="masters">Masters</option>
                    <option value="phd">PhD</option>
                    <option value="medical">Medical</option>
                  </select>
                </div>

                {/* Marital Status */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Marital Status</label>
                  <select
                    value={filters.maritalStatus}
                    onChange={(e) => setFilters({ ...filters, maritalStatus: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">All</option>
                    <option value="Never Married">Never Married</option>
                    <option value="Divorced">Divorced</option>
                    <option value="Widowed">Widowed</option>
                  </select>
                </div>
              </div>

              <button
                onClick={() => setShowFilters(false)}
                className="lg:hidden w-full mt-5 bg-primary-600 text-white py-2.5 rounded-xl font-medium"
              >
                Apply Filters
              </button>
            </div>
          </aside>

          {/* Profile Grid */}
          <div className="flex-1">
            <div className="mb-4 text-sm text-gray-500">
              Showing {filteredUsers.length} profile{filteredUsers.length !== 1 ? 's' : ''}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {filteredUsers.map((user) => (
                <div
                  key={user.id}
                  className="profile-card bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
                >
                  <div className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="relative">
                        <div
                          className={`w-16 h-16 rounded-full flex items-center justify-center text-white text-lg font-bold shrink-0 ${
                            user.gender === 'female'
                              ? 'bg-gradient-to-br from-primary-400 to-primary-600'
                              : 'bg-gradient-to-br from-blue-400 to-blue-600'
                          }`}
                        >
                          {getInitials(user.name)}
                        </div>
                        {user.isOnline && <div className="online-dot" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 truncate">{user.name}</h3>
                        <p className="text-sm text-gray-500">{user.age} years old</p>
                        <div className="flex items-center gap-2 mt-1.5 flex-wrap">
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

                    <div className="mt-4 space-y-2">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <MapPin className="w-3.5 h-3.5 text-gray-400" />
                        <span>{user.city}, {user.country}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Briefcase className="w-3.5 h-3.5 text-gray-400" />
                        <span className="truncate">{user.profession}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <GraduationCap className="w-3.5 h-3.5 text-gray-400" />
                        <span className="truncate">{user.education}</span>
                      </div>
                    </div>

                    <div className="mt-4 flex gap-2">
                      <button className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors">
                        <Heart className="w-3.5 h-3.5" />
                        Express Interest
                      </button>
                      <Link
                        href={`/profile/${user.id}`}
                        className="flex items-center justify-center gap-1.5 px-4 py-2 border border-gray-200 text-gray-600 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        View
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredUsers.length === 0 && (
              <div className="text-center py-16">
                <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No profiles found</h3>
                <p className="text-gray-500">Try adjusting your search filters</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
