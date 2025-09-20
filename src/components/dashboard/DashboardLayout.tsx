'use client';

import { ReactNode } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { RouteGuard } from '@/middleware/auth-guard';
import DashboardNavbar from './DashboardNavbar';
import DashboardSidebar from './DashboardSidebar';

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const { user, isLoading } = useAuth();

  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-gray-200 rounded-full animate-spin mx-auto mb-4" style={{ borderTopColor: '#001856' }}></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  // Redirect to signin if not authenticated
  if (!user) {
    window.location.href = '/signin';
    return null;
  }

  return (
    <RouteGuard>
      <div className="min-h-screen bg-gray-50">
        {/* Dashboard Navigation */}
        <DashboardNavbar user={user} />
        
        {/* Dashboard Sidebar */}
        <DashboardSidebar user={user} />
        
        {/* Main Content with proper spacing for sidebar */}
        <main className="pt-16 lg:ml-72 min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </div>
        </main>
      </div>
    </RouteGuard>
  );
}
