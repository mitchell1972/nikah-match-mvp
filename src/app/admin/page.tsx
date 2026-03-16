'use client';

import { useState } from 'react';
import {
  Users,
  UserCheck,
  Crown,
  Clock,
  DollarSign,
  CheckCircle,
  XCircle,
  Search,
  Settings,
  FileText,
  BarChart3,
  Shield,
  TrendingUp,
  Eye,
} from 'lucide-react';
import { mockAdminStats, mockUsers } from '@/lib/mock-data';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { label: 'Total Users', value: mockAdminStats.totalUsers.toLocaleString(), icon: Users, color: 'bg-blue-100 text-blue-600' },
    { label: 'Active Users', value: mockAdminStats.activeUsers.toLocaleString(), icon: UserCheck, color: 'bg-green-100 text-green-600' },
    { label: 'Premium Users', value: mockAdminStats.premiumUsers.toLocaleString(), icon: Crown, color: 'bg-accent-100 text-accent-600' },
    { label: 'Pending Verifications', value: mockAdminStats.pendingVerifications.toString(), icon: Clock, color: 'bg-orange-100 text-orange-600' },
    { label: 'Revenue', value: `$${mockAdminStats.revenue.toLocaleString()}`, icon: DollarSign, color: 'bg-primary-100 text-primary-600' },
  ];

  const recentRegistrations = mockUsers.map((user, idx) => ({
    ...user,
    email: `${user.name.toLowerCase().replace(' ', '.')}@email.com`,
    status: idx < 2 ? 'Pending' : idx < 5 ? 'Verified' : 'Pending',
  }));

  const quickActions = [
    { label: 'Manage Users', icon: Users, href: '#' },
    { label: 'Review Reports', icon: FileText, href: '#' },
    { label: 'Manage Plans', icon: Crown, href: '#' },
    { label: 'Settings', icon: Settings, href: '#' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-500 text-sm">Manage your platform and users</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-xl hover:bg-primary-700 transition-colors">
              <Shield className="w-4 h-4" />
              Admin Panel
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${stat.color}`}>
                  <stat.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">{stat.label}</p>
                  <p className="text-lg font-bold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Recent Registrations */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="p-5 border-b border-gray-100 flex items-center justify-between">
                <h2 className="font-semibold text-gray-900">Recent Registrations</h2>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search users..."
                    className="pl-9 pr-4 py-1.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-100 bg-gray-50">
                      <th className="text-left py-3 px-5 font-medium text-gray-500">Name</th>
                      <th className="text-left py-3 px-5 font-medium text-gray-500 hidden sm:table-cell">Email</th>
                      <th className="text-left py-3 px-5 font-medium text-gray-500 hidden md:table-cell">City</th>
                      <th className="text-left py-3 px-5 font-medium text-gray-500">Status</th>
                      <th className="text-left py-3 px-5 font-medium text-gray-500">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentRegistrations.map((user) => (
                      <tr key={user.id} className="border-b border-gray-50 hover:bg-gray-50">
                        <td className="py-3 px-5">
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold ${
                                user.gender === 'female'
                                  ? 'bg-gradient-to-br from-primary-400 to-primary-600'
                                  : 'bg-gradient-to-br from-blue-400 to-blue-600'
                              }`}
                            >
                              {user.name.split(' ').map((n) => n[0]).join('').toUpperCase()}
                            </div>
                            <span className="font-medium text-gray-900">{user.name}</span>
                          </div>
                        </td>
                        <td className="py-3 px-5 text-gray-500 hidden sm:table-cell">{user.email}</td>
                        <td className="py-3 px-5 text-gray-500 hidden md:table-cell">{user.city}</td>
                        <td className="py-3 px-5">
                          <span
                            className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ${
                              user.status === 'Verified'
                                ? 'bg-green-100 text-green-700'
                                : user.status === 'Rejected'
                                ? 'bg-red-100 text-red-700'
                                : 'bg-yellow-100 text-yellow-700'
                            }`}
                          >
                            {user.status}
                          </span>
                        </td>
                        <td className="py-3 px-5">
                          <div className="flex items-center gap-1">
                            {user.status === 'Pending' && (
                              <>
                                <button className="p-1.5 text-green-600 hover:bg-green-50 rounded-lg" title="Approve">
                                  <CheckCircle className="w-4 h-4" />
                                </button>
                                <button className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg" title="Reject">
                                  <XCircle className="w-4 h-4" />
                                </button>
                              </>
                            )}
                            <button className="p-1.5 text-gray-400 hover:bg-gray-100 rounded-lg" title="View">
                              <Eye className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Activity Chart Placeholder */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-gray-900">User Activity</h2>
                <select className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 focus:outline-none">
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                  <option>Last 90 days</option>
                </select>
              </div>
              <div className="h-48 bg-gray-50 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="w-12 h-12 text-gray-300 mx-auto mb-2" />
                  <p className="text-sm text-gray-400">Activity chart will appear here</p>
                  <p className="text-xs text-gray-300 mt-1">Connect analytics to view data</p>
                </div>
              </div>
            </div>

            {/* User Reports */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <h2 className="font-semibold text-gray-900 mb-4">User Reports</h2>
              <div className="space-y-3">
                {[
                  { reporter: 'User #1234', reason: 'Inappropriate profile photo', date: '2 hours ago', severity: 'Medium' },
                  { reporter: 'User #5678', reason: 'Fake profile suspected', date: '5 hours ago', severity: 'High' },
                  { reporter: 'User #9012', reason: 'Harassment in messages', date: '1 day ago', severity: 'High' },
                ].map((report, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{report.reason}</p>
                      <p className="text-xs text-gray-400">
                        Reported by {report.reporter} &middot; {report.date}
                      </p>
                    </div>
                    <span
                      className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                        report.severity === 'High' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                      }`}
                    >
                      {report.severity}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <h2 className="font-semibold text-gray-900 mb-4">Quick Actions</h2>
              <div className="space-y-2">
                {quickActions.map((action, i) => (
                  <button
                    key={i}
                    className="w-full flex items-center gap-3 p-3 rounded-xl text-gray-600 hover:bg-primary-50 hover:text-primary-600 transition-colors text-sm font-medium text-left"
                  >
                    <action.icon className="w-5 h-5" />
                    {action.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Platform Overview */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <h2 className="font-semibold text-gray-900 mb-4">Platform Overview</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">New Users Today</span>
                  <span className="text-sm font-semibold text-gray-900 flex items-center gap-1">
                    {mockAdminStats.newUsersToday}
                    <TrendingUp className="w-3.5 h-3.5 text-green-500" />
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Total Messages</span>
                  <span className="text-sm font-semibold text-gray-900">
                    {mockAdminStats.totalMessages.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Total Matches</span>
                  <span className="text-sm font-semibold text-gray-900">
                    {mockAdminStats.totalMatches.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Conversion Rate</span>
                  <span className="text-sm font-semibold text-green-600">18.2%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
