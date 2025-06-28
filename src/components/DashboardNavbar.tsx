'use client';

import { useState } from 'react';
import { AssetLogo } from '@/assets';
import Link from 'next/link';

export default function DashboardNavbar() {
  const [userMenuOpen, setUserMenuOpen] = useState(false);

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

      {/* User Menu */}
      <div className="relative">
        <button
          onClick={() => setUserMenuOpen(!userMenuOpen)}
          className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <div className="w-8 h-8 bg-sky-900 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-medium">U</span>
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
