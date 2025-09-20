'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';

interface DashboardStats {
  upcomingEvents: number;
  completedClasses: number;
  communityMembers: number;
  resourcesAvailable: number;
}

export default function DashboardPage() {
  const { user } = useAuth();
  const [stats, setStats] = useState<DashboardStats>({
    upcomingEvents: 0,
    completedClasses: 0,
    communityMembers: 0,
    resourcesAvailable: 0
  });

  useEffect(() => {
    // Simulate fetching stats
    setTimeout(() => {
      setStats({
        upcomingEvents: 3,
        completedClasses: 12,
        communityMembers: 1247,
        resourcesAvailable: 45
      });
    }, 1000);
  }, []);

  const getRoleGreeting = () => {
    switch (user?.role) {
      case 'SUPER_ADMIN':
        return 'Welcome, Administrator';
      case 'HEAD_OF_INSTALLATION':
        return `Welcome, Installation Head`;
      case 'SUB_CENTRAL_HEAD':
        return `Welcome, Sub Central Head`;
      case 'HOD':
        return `Welcome, Department Head`;
      case 'MEMBER':
        return `Welcome, ${user.fullName.split(' ')[0]}`;
      default:
        return 'Welcome to Word Sanctuary';
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-xl p-6 text-white">
        <h1 className="text-2xl md:text-3xl font-bold font-anton mb-2">
          {getRoleGreeting()}
        </h1>
        <p className="text-sky-100 font-lato">
          Continue your spiritual journey with our community
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Upcoming Events</p>
              <p className="text-3xl font-bold text-gray-900">{stats.upcomingEvents}</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#001856' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Completed Classes</p>
              <p className="text-3xl font-bold text-gray-900">{stats.completedClasses}</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Community Members</p>
              <p className="text-3xl font-bold text-gray-900">{stats.communityMembers.toLocaleString()}</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Resources Available</p>
              <p className="text-3xl font-bold text-gray-900">{stats.resourcesAvailable}</p>
            </div>
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Role-specific content */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 font-lato">
            {user?.role === 'SUPER_ADMIN' ? 'System Overview' :
             user?.role === 'HEAD_OF_INSTALLATION' ? 'Installation Management' :
             user?.role === 'SUB_CENTRAL_HEAD' ? 'Sub Central Overview' :
             user?.role === 'HOD' ? 'Department Management' :
             'My Dashboard'}
          </h2>
        </div>
        <div className="p-6">
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Welcome to the Community!</h3>
            <p className="text-gray-600">
              {user?.role === 'SUPER_ADMIN' 
                ? 'Manage the entire system and oversee all installations.'
                : user?.role === 'HEAD_OF_INSTALLATION'
                ? 'Lead your installation and manage sub-centrals and departments.'
                : user?.role === 'SUB_CENTRAL_HEAD'
                ? 'Coordinate activities in your sub-central region.'
                : user?.role === 'HOD'
                ? 'Manage your department and team members.'
                : 'Explore life classes and connect with other members.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
