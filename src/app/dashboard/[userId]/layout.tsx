'use client';

import { ReactNode } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useParams } from 'next/navigation';

interface UserDashboardLayoutProps {
  children: ReactNode;
}

export default function UserDashboardLayout({ children }: UserDashboardLayoutProps) {
  const { user } = useAuth();
  const params = useParams();
  const userId = params.userId as string;

  // If no user or user accessing wrong dashboard
  if (!user || user.id !== userId) {
    return <div className="min-h-screen flex items-center justify-center">
      <div className="text-lg">Unauthorized access</div>
    </div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Simple header */}
      <header className="bg-white shadow-sm border-b">
        <div className="px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold">
              Dashboard - {user.role.replace('_', ' ')}
            </h1>
            <div className="text-sm text-gray-600">
              Welcome, {user.fullName}
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="p-6">
        {children}
      </main>
    </div>
  );
}
