'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { UserRole } from '@/types/user';
import { hasPermission } from '@/config/roles';

interface UserDashboardProps {
  params: {
    userId: string;
  };
}

// Mock user data - in real app this would come from API
const mockUsers = {
  'super-admin-01': {
    id: 'super-admin-01',
    name: 'Dr. Sarah Johnson',
    email: 'sarah.johnson@wordsanctuary.org',
    role: 'SUPER_ADMIN' as UserRole,
    installation: 'Global Headquarters',
    department: 'Administration',
    joinDate: '2020-01-15',
    lastActive: '2024-01-15T10:30:00Z'
  },
  'head-installation-01': {
    id: 'head-installation-01',
    name: 'Pastor Michael Williams',
    email: 'michael.williams@wordsanctuary.org',
    role: 'HEAD_OF_INSTALLATION' as UserRole,
    installation: 'Lagos Installation',
    department: 'Leadership',
    joinDate: '2021-03-20',
    lastActive: '2024-01-15T09:15:00Z'
  },
  'sub-central-01': {
    id: 'sub-central-01',
    name: 'Rev. Grace Adebayo',
    email: 'grace.adebayo@wordsanctuary.org',
    role: 'SUB_CENTRAL_HEAD' as UserRole,
    installation: 'Lagos Installation',
    department: 'Sub-Central Operations',
    joinDate: '2021-08-10',
    lastActive: '2024-01-15T08:45:00Z'
  },
  'hod-01': {
    id: 'hod-01',
    name: 'Deacon James Thompson',
    email: 'james.thompson@wordsanctuary.org',
    role: 'HOD' as UserRole,
    installation: 'Lagos Installation',
    department: 'Youth Ministry',
    joinDate: '2022-01-15',
    lastActive: '2024-01-15T07:20:00Z'
  },
  'member-01': {
    id: 'member-01',
    name: 'Sister Mary Okafor',
    email: 'mary.okafor@wordsanctuary.org',
    role: 'MEMBER' as UserRole,
    installation: 'Lagos Installation',
    department: 'Choir',
    joinDate: '2022-06-01',
    lastActive: '2024-01-14T19:30:00Z'
  },
  'visitor-01': {
    id: 'visitor-01',
    name: 'John Doe',
    email: 'john.doe@gmail.com',
    role: 'VISITOR' as UserRole,
    installation: 'None',
    department: 'None',
    joinDate: '2024-01-10',
    lastActive: '2024-01-14T15:45:00Z'
  }
};

export default function UserDashboard({ params }: UserDashboardProps) {
  const { user: currentUser } = useAuth();
  const router = useRouter();
  const [targetUser, setTargetUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Check if current user has permission to view other users
    if (!currentUser) {
      router.push('/signin');
      return;
    }

    // Get target user data
    const userData = mockUsers[params.userId as keyof typeof mockUsers];
    
    if (!userData) {
      setError('User not found');
      setLoading(false);
      return;
    }

    // Check if current user can view this user's profile
    const canViewUser = 
      currentUser.id === params.userId || // Own profile
      hasPermission(currentUser.role, 'manage_users') || // Admin permissions
      (hasPermission(currentUser.role, 'view_member_directory') && 
       (currentUser.installation?.name === userData.installation || 
        currentUser.installationId === userData.installation)); // Same installation

    if (!canViewUser) {
      setError('You do not have permission to view this user profile');
      setLoading(false);
      return;
    }

    setTargetUser(userData);
    setLoading(false);
  }, [currentUser, params.userId, router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="text-red-600 text-xl mb-4">{error}</div>
        <button
          onClick={() => router.back()}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Go Back
        </button>
      </div>
    );
  }

  const isOwnProfile = currentUser?.id === params.userId;
  const canEditUser = hasPermission(currentUser?.role || 'VISITOR', 'manage_users');

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
              {targetUser.name.split(' ').map((n: string) => n[0]).join('')}
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{targetUser.name}</h1>
              <p className="text-gray-600">{targetUser.email}</p>
              <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                targetUser.role === 'SUPER_ADMIN' ? 'bg-purple-100 text-purple-800' :
                targetUser.role === 'HEAD_OF_INSTALLATION' ? 'bg-red-100 text-red-800' :
                targetUser.role === 'SUB_CENTRAL_HEAD' ? 'bg-orange-100 text-orange-800' :
                targetUser.role === 'HOD' ? 'bg-yellow-100 text-yellow-800' :
                targetUser.role === 'MEMBER' ? 'bg-green-100 text-green-800' :
                'bg-gray-100 text-gray-800'
              }`}>
                {targetUser.role.replace('_', ' ')}
              </span>
            </div>
          </div>
          {(isOwnProfile || canEditUser) && (
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              {isOwnProfile ? 'Edit Profile' : 'Edit User'}
            </button>
          )}
        </div>
      </div>

      {/* User Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Basic Information */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Basic Information</h2>
          <div className="space-y-3">
            <div>
              <label className="text-sm font-medium text-gray-500">Installation</label>
              <p className="text-gray-900">{targetUser.installation}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">Department</label>
              <p className="text-gray-900">{targetUser.department}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">Join Date</label>
              <p className="text-gray-900">{new Date(targetUser.joinDate).toLocaleDateString()}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">Last Active</label>
              <p className="text-gray-900">{new Date(targetUser.lastActive).toLocaleString()}</p>
            </div>
          </div>
        </div>

        {/* Activity Summary */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Activity Summary</h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Events Attended</span>
              <span className="font-medium">24</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Life Classes</span>
              <span className="font-medium">12</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Resources Downloaded</span>
              <span className="font-medium">8</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Community Posts</span>
              <span className="font-medium">15</span>
            </div>
          </div>
        </div>
      </div>

      {/* Role-Specific Information */}
      {targetUser.role !== 'VISITOR' && (
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Role Information</h2>
          
          {targetUser.role === 'SUPER_ADMIN' && (
            <div className="space-y-2">
              <p className="text-gray-600">• Full system administration access</p>
              <p className="text-gray-600">• User management capabilities</p>
              <p className="text-gray-600">• Financial oversight authority</p>
              <p className="text-gray-600">• Global content management</p>
            </div>
          )}
          
          {targetUser.role === 'HEAD_OF_INSTALLATION' && (
            <div className="space-y-2">
              <p className="text-gray-600">• Installation leadership authority</p>
              <p className="text-gray-600">• Department oversight responsibilities</p>
              <p className="text-gray-600">• Event and content management</p>
              <p className="text-gray-600">• Member directory access</p>
            </div>
          )}
          
          {targetUser.role === 'SUB_CENTRAL_HEAD' && (
            <div className="space-y-2">
              <p className="text-gray-600">• Sub-central area management</p>
              <p className="text-gray-600">• Regional administration duties</p>
              <p className="text-gray-600">• Community moderation rights</p>
              <p className="text-gray-600">• Event coordination capabilities</p>
            </div>
          )}
          
          {targetUser.role === 'HOD' && (
            <div className="space-y-2">
              <p className="text-gray-600">• Department leadership</p>
              <p className="text-gray-600">• Event creation and management</p>
              <p className="text-gray-600">• Life class organization</p>
              <p className="text-gray-600">• Member directory access</p>
            </div>
          )}
          
          {targetUser.role === 'MEMBER' && (
            <div className="space-y-2">
              <p className="text-gray-600">• Active church participation</p>
              <p className="text-gray-600">• Life class enrollment</p>
              <p className="text-gray-600">• Resource access and download</p>
              <p className="text-gray-600">• Community engagement</p>
            </div>
          )}
        </div>
      )}

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
        <div className="space-y-3">
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <div>
              <p className="text-sm text-gray-900">Attended Sunday Service</p>
              <p className="text-xs text-gray-500">2 days ago</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded">
            <div className="w-2 h-2 bg-green-600 rounded-full"></div>
            <div>
              <p className="text-sm text-gray-900">Completed Life Class Module 3</p>
              <p className="text-xs text-gray-500">1 week ago</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded">
            <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
            <div>
              <p className="text-sm text-gray-900">Downloaded Resource: Prayer Guide</p>
              <p className="text-xs text-gray-500">2 weeks ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
