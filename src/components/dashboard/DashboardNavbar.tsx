'use client';

import { useState } from 'react';
import { AssetLogo } from '@/assets';
import Link from 'next/link';
import { User } from '@/types/user';

interface DashboardNavbarProps {
  user: User;
}

export default function DashboardNavbar({ user }: DashboardNavbarProps) {
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case 'SUPER_ADMIN': return 'bg-red-500';
      case 'HEAD_OF_INSTALLATION': return 'bg-purple-500';
      case 'SUB_CENTRAL_HEAD': return 'bg-blue-500';
      case 'HOD': return 'bg-green-500';
      case 'MEMBER': return 'bg-gray-500';
      case 'VISITOR': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  const formatRoleName = (role: string) => {
    return role.replace(/_/g, ' ').toLowerCase().replace(/\b\w/g, l => l.toUpperCase());
  };

  return (
    <div className="w-full px-6 md:px-8 backdrop-blur-md flex justify-between items-center fixed top-0 z-50 h-16 border-b border-white/10 shadow-lg" style={{ backgroundColor: 'rgba(0, 24, 86, 0.95)', boxShadow: '0 10px 15px -3px rgba(0, 24, 86, 0.2)' }}>
      {/* Logo */}
      <Link href="/" className="transition-transform duration-300 hover:scale-105">
        <div className="w-28 h-10">
          <AssetLogo
            name="hq-and-global-main"
            size={112}
            className="w-full h-full object-cover"
            alt="HQ and Global Ministry Logo"
          />
        </div>
      </Link>

      {/* User Menu */}
      <div className="relative">
        <button
          onClick={() => setUserMenuOpen(!userMenuOpen)}
          className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/10 transition-colors"
        >
          <div className={`w-8 h-8 ${getRoleBadgeColor(user.role)} rounded-full flex items-center justify-center`}>
            <span className="text-white text-sm font-medium">
              {user.fullName.split(' ').map(n => n[0]).join('').toUpperCase()}
            </span>
          </div>
          <div className="hidden md:block text-left">
            <p className="text-sm font-medium text-white">{user.fullName}</p>
            <p className="text-xs text-zinc-300">{formatRoleName(user.role)}</p>
          </div>
          <svg 
            className={`w-4 h-4 text-zinc-300 transition-transform ${userMenuOpen ? 'rotate-180' : ''}`} 
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
