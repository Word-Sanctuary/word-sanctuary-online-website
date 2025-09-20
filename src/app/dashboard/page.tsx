'use client';

import { useAuth } from '@/contexts/AuthContext';
import RoleBasedDashboard from '@/components/dashboard/RoleBasedDashboard';
import { RouteGuard } from '@/middleware/auth-guard';

export default function DashboardPage() {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-gray-200 rounded-full animate-spin mx-auto mb-4" style={{ borderTopColor: '#001856' }}></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <RouteGuard>
      <div className="min-h-screen bg-gray-50">
        <RoleBasedDashboard user={user} />
      </div>
    </RouteGuard>
  );
}
