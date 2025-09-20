'use client';

import { useState } from 'react';
import { AssetLogo } from '@/assets';
import Link from 'next/link';
import { User, DashboardConfig } from '@/types/user';

interface DynamicDashboardNavbarProps {
  user: User;
  config: DashboardConfig;
  isViewingOtherUser?: boolean;
}

export default function DynamicDashboardNavbar({ 
  user, 
  config, 
  isViewingOtherUser = false 
}: DynamicDashboardNavbarProps) {
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case 'SUPER_ADMIN': return 'bg-red-500';
      case 'ADMIN': return 'bg-orange-500';
      case 'PASTOR': return 'bg-purple-500';
      case 'LIFE_CLASS_TEACHER': return 'bg-blue-500';
      case 'LEADER': return 'bg-green-500';
      case 'MEMBER': return 'bg-gray-500';
      case 'VISITOR': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  const formatRoleName = (role: string) => {
    return role.replace(/_/g, ' ').toLowerCase().replace(/\b\w/g, l => l.toUpperCase());
  };

  return (
    <div className="w-full px-6 md:px-8 bg-white/95 backdrop-blur-md flex justify-between items-center fixed top-0 z-50 h-16 border-b border-gray-200 shadow-sm">
      {/* Logo */}
      <Link href="/dashboard" className="transition-transform duration-300 hover:scale-105">
        <div className="w-28 h-10">
          <AssetLogo
            name="hq-and-global-main"
            size={120}
            className="w-full h-full object-cover"
            alt="HQ and Global Ministry Logo"
          />
        </div>
      </Link>

      {/* Center - User Info (when viewing other user) */}
      {isViewingOtherUser && (
        <div className="flex items-center gap-3 px-4 py-2 bg-sky-50 rounded-lg border border-sky-200">
          <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center">
            <span className="text-sm font-medium" style={{ color: '#001856' }}>
              {user.fullName.split(' ').map(n => n[0]).join('').toUpperCase()}
            </span>
          </div>
          <div>
            <p className="text-sm font-medium" style={{ color: '#001856' }}>{user.fullName}</p>
            <span className={`inline-block px-2 py-0.5 text-xs font-medium text-white rounded-full ${getRoleBadgeColor(user.role)}`}>
              {formatRoleName(user.role)}
            </span>
          </div>
        </div>
      )}

      {/* User Menu */}
      <div className="relative">
        <button
          onClick={() => setUserMenuOpen(!userMenuOpen)}
          className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <div className={`w-8 h-8 ${getRoleBadgeColor(user.role)} rounded-full flex items-center justify-center`}>
            <span className="text-white text-sm font-medium">
              {user.fullName.split(' ').map(n => n[0]).join('').toUpperCase()}
            </span>
          </div>
          <div className="hidden md:block text-left">
            <p className="text-sm font-medium text-gray-900">{user.fullName}</p>
            <p className="text-xs text-gray-500">{formatRoleName(user.role)}</p>
          </div>
          <svg 
            className={`w-4 h-4 text-gray-500 transition-transform ${userMenuOpen ? 'rotate-180' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Dropdown Menu */}
        {userMenuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-10">
            <Link href="/dashboard/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              Profile
            </Link>
            <Link href="/dashboard/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              Settings
            </Link>
            {user.role === 'SUPER_ADMIN' && (
              <>
                <hr className="my-2 border-gray-200" />
                <Link href="/dashboard/admin" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Admin Panel
                </Link>
              </>
            )}
            <hr className="my-2 border-gray-200" />
            <button className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
