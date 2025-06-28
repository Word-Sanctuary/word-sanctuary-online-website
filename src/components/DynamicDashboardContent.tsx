'use client';

import { useState, useEffect } from 'react';
import { User, DashboardConfig, DashboardWidget } from '@/types/user';
import { ROLE_PERMISSIONS } from '@/config/roles';

interface DynamicDashboardContentProps {
  user: User;
  config: DashboardConfig;
  currentUser: User;
}

interface WelcomeStats {
  upcomingEvents: number;
  completedClasses: number;
  communityMembers: number;
  resourcesAvailable: number;
  [key: string]: number;
}

export default function DynamicDashboardContent({ user, config, currentUser }: DynamicDashboardContentProps) {
  const [stats, setStats] = useState<WelcomeStats>({
    upcomingEvents: 0,
    completedClasses: 0,
    communityMembers: 0,
    resourcesAvailable: 0
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching role-specific stats
    const fetchStats = async () => {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock different stats based on user role
      let mockStats: WelcomeStats;
      
      switch (user.role) {
        case 'SUPER_ADMIN':
          mockStats = {
            upcomingEvents: 15,
            completedClasses: 145,
            communityMembers: 2847,
            resourcesAvailable: 125,
            totalUsers: 2847,
            activeInstallations: 12,
            systemHealth: 98
          };
          break;
        case 'ADMIN':
          mockStats = {
            upcomingEvents: 8,
            completedClasses: 89,
            communityMembers: 1456,
            resourcesAvailable: 78,
            managedEvents: 34,
            activeModerations: 3
          };
          break;
        case 'PASTOR':
          mockStats = {
            upcomingEvents: 5,
            completedClasses: 67,
            communityMembers: 789,
            resourcesAvailable: 56,
            congregationSize: 789,
            scheduledMeetings: 12
          };
          break;
        case 'LIFE_CLASS_TEACHER':
          mockStats = {
            upcomingEvents: 3,
            completedClasses: 45,
            communityMembers: 234,
            resourcesAvailable: 89,
            studentsEnrolled: 234,
            lessonsCompleted: 45,
            averageAttendance: 87
          };
          break;
        case 'LEADER':
          mockStats = {
            upcomingEvents: 4,
            completedClasses: 23,
            communityMembers: 156,
            resourcesAvailable: 34,
            teamMembers: 156,
            completedProjects: 8
          };
          break;
        case 'MEMBER':
          mockStats = {
            upcomingEvents: 3,
            completedClasses: 12,
            communityMembers: 1247,
            resourcesAvailable: 45,
            progressPoints: 245,
            certificatesEarned: 2
          };
          break;
        default:
          mockStats = {
            upcomingEvents: 2,
            completedClasses: 0,
            communityMembers: 1247,
            resourcesAvailable: 15
          };
      }
      
      setStats(mockStats);
      setIsLoading(false);
    };

    fetchStats();
  }, [user.role]);

  const getRoleSpecificGreeting = () => {
    const timeOfDay = new Date().getHours() < 12 ? 'Good Morning' : 
                     new Date().getHours() < 17 ? 'Good Afternoon' : 'Good Evening';
    
    switch (user.role) {
      case 'SUPER_ADMIN':
        return `${timeOfDay}, Administrator`;
      case 'ADMIN':
        return `${timeOfDay}, ${user.fullName}`;
      case 'PASTOR':
        return `${timeOfDay}, Pastor ${user.fullName.split(' ').pop()}`;
      case 'LIFE_CLASS_TEACHER':
        return `${timeOfDay}, Teacher ${user.fullName.split(' ').pop()}`;
      case 'LEADER':
        return `${timeOfDay}, Leader ${user.fullName.split(' ')[0]}`;
      case 'MEMBER':
        return `${timeOfDay}, ${user.fullName.split(' ')[0]}`;
      default:
        return `Welcome, ${user.fullName.split(' ')[0]}`;
    }
  };

  const getRoleSpecificSubtitle = () => {
    switch (user.role) {
      case 'SUPER_ADMIN':
        return 'System overview and administration tools at your fingertips';
      case 'ADMIN':
        return 'Manage your ministry operations and community growth';
      case 'PASTOR':
        return 'Lead your congregation with wisdom and compassion';
      case 'LIFE_CLASS_TEACHER':
        return 'Inspire and educate the next generation of believers';
      case 'LEADER':
        return 'Guide your team towards excellence in ministry';
      case 'MEMBER':
        return 'Continue your spiritual journey with our community';
      default:
        return 'Explore and discover the Word Sanctuary community';
    }
  };

  const getStatCards = () => {
    const allStats = Object.entries(stats);
    const rolePriority = {
      'SUPER_ADMIN': ['totalUsers', 'activeInstallations', 'systemHealth', 'upcomingEvents'],
      'ADMIN': ['communityMembers', 'managedEvents', 'activeModerations', 'upcomingEvents'],
      'PASTOR': ['congregationSize', 'scheduledMeetings', 'upcomingEvents', 'completedClasses'],
      'LIFE_CLASS_TEACHER': ['studentsEnrolled', 'lessonsCompleted', 'averageAttendance', 'upcomingEvents'],
      'LEADER': ['teamMembers', 'completedProjects', 'upcomingEvents', 'completedClasses'],
      'MEMBER': ['progressPoints', 'certificatesEarned', 'completedClasses', 'upcomingEvents'],
      'VISITOR': ['communityMembers', 'resourcesAvailable', 'upcomingEvents']
    };

    const priorityKeys = rolePriority[user.role] || ['upcomingEvents', 'completedClasses', 'communityMembers', 'resourcesAvailable'];
    const priorityStats = priorityKeys.map(key => [key, stats[key]]).filter(([_, value]) => value !== undefined);
    const otherStats = allStats.filter(([key]) => !priorityKeys.includes(key));
    
    return [...priorityStats, ...otherStats].slice(0, 4);
  };

  const formatStatKey = (key: string) => {
    return key.replace(/([A-Z])/g, ' $1')
              .replace(/^./, str => str.toUpperCase())
              .replace(/([a-z])([A-Z])/g, '$1 $2');
  };

  const getStatIcon = (key: string) => {
    const iconMap: Record<string, string> = {
      upcomingEvents: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
      completedClasses: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
      communityMembers: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
      resourcesAvailable: 'M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z'
    };
    
    return iconMap[key] || 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z';
  };

  const getStatColor = (index: number) => {
    const colors = ['blue', 'green', 'purple', 'orange'];
    return colors[index % colors.length];
  };

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="bg-gradient-to-r from-sky-900 to-sky-700 rounded-xl p-6 text-white animate-pulse">
          <div className="h-8 bg-sky-600 rounded w-1/3 mb-2"></div>
          <div className="h-4 bg-sky-600 rounded w-1/2"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 animate-pulse">
              <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
              <div className="h-8 bg-gray-200 rounded w-1/3"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const isViewingOtherUser = currentUser.id !== user.id;

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-sky-900 to-sky-700 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold font-anton mb-2">
              {getRoleSpecificGreeting()}
            </h1>
            <p className="text-sky-100 font-lato">
              {getRoleSpecificSubtitle()}
            </p>
          </div>
          {isViewingOtherUser && (
            <div className="bg-white/10 px-4 py-2 rounded-lg">
              <p className="text-xs text-sky-200">Viewing as:</p>
              <p className="text-sm font-medium">{currentUser.fullName}</p>
            </div>
          )}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {getStatCards().map(([key, value], index) => (
          <div key={key} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{formatStatKey(String(key))}</p>
                <p className="text-3xl font-bold text-gray-900">
                  {typeof value === 'number' ? (key === 'averageAttendance' || key === 'systemHealth' ? `${value}%` : value.toLocaleString()) : value}
                </p>
              </div>
              <div className={`w-12 h-12 bg-${getStatColor(index)}-100 rounded-xl flex items-center justify-center`}>
                <svg className={`w-6 h-6 text-${getStatColor(index)}-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={getStatIcon(String(key))} />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 font-lato">Quick Actions</h2>
          </div>
          <div className="p-6 space-y-4">
            {config.quickActions.slice(0, 3).map((action, index) => (
              <div
                key={index}
                className="p-4 rounded-lg border border-gray-200 hover:border-gray-300 cursor-pointer transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 ${action.bgColor} rounded-lg flex items-center justify-center text-white`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{action.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{action.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Role-specific content */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 font-lato">
              {user.role === 'SUPER_ADMIN' ? 'System Status' :
               user.role === 'ADMIN' ? 'Management Overview' :
               user.role === 'PASTOR' ? 'Ministry Updates' :
               user.role === 'LIFE_CLASS_TEACHER' ? 'Teaching Schedule' :
               user.role === 'LEADER' ? 'Team Activities' :
               user.role === 'MEMBER' ? 'My Progress' : 'Getting Started'}
            </h2>
          </div>
          <div className="p-6">
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {user.role === 'VISITOR' ? 'Welcome to the Community!' : 'Everything is up to date!'}
              </h3>
              <p className="text-gray-600">
                {user.role === 'VISITOR' 
                  ? 'Explore our community and discover amazing resources.'
                  : 'Your dashboard is current and all systems are running smoothly.'
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
