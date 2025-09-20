'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { User, UserRole } from '@/types/user';
import { ROLE_PERMISSIONS } from '@/config/roles';

export default function AdminUsersPage() {
  const { user: currentUser, hasPermission } = useAuth();
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedRole, setSelectedRole] = useState<UserRole | 'ALL'>('ALL');

  useEffect(() => {
    // Check if user has permission to access this page
    if (!currentUser || !hasPermission('manage_users')) {
      window.location.href = '/dashboard';
      return;
    }

    // Simulate fetching users
    const fetchUsers = async () => {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock users data
      const mockUsers: User[] = [
        {
          id: '1',
          fullName: 'System Administrator',
          email: 'admin@wordsanctuary.com',
          role: 'SUPER_ADMIN',
          status: 'ACTIVE',
          permissions: ROLE_PERMISSIONS.SUPER_ADMIN,
          dateJoined: new Date('2023-01-01'),
          lastActive: new Date(),
          preferences: {
            notifications: true,
            emailUpdates: true,
            theme: 'light',
            language: 'en'
          }
        },
        {
          id: '2',
          fullName: 'Pastor John Smith',
          email: 'pastor@wordsanctuary.com',
          role: 'HEAD_OF_INSTALLATION',
          status: 'ACTIVE',
          permissions: ROLE_PERMISSIONS.HEAD_OF_INSTALLATION,
          dateJoined: new Date('2023-02-01'),
          lastActive: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
          preferences: {
            notifications: true,
            emailUpdates: true,
            theme: 'light',
            language: 'en'
          }
        },
        {
          id: '3',
          fullName: 'Teacher Mary Johnson',
          email: 'teacher@wordsanctuary.com',
          role: 'HOD',
          status: 'ACTIVE',
          permissions: ROLE_PERMISSIONS.HOD,
          dateJoined: new Date('2023-03-01'),
          lastActive: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
          preferences: {
            notifications: true,
            emailUpdates: true,
            theme: 'light',
            language: 'en'
          }
        },
        {
          id: '4',
          fullName: 'Leader Sarah Wilson',
          email: 'leader@wordsanctuary.com',
          role: 'SUB_CENTRAL_HEAD',
          status: 'ACTIVE',
          permissions: ROLE_PERMISSIONS.SUB_CENTRAL_HEAD,
          dateJoined: new Date('2023-04-01'),
          lastActive: new Date(Date.now() - 12 * 60 * 60 * 1000), // 12 hours ago
          preferences: {
            notifications: true,
            emailUpdates: true,
            theme: 'light',
            language: 'en'
          }
        },
        {
          id: '5',
          fullName: 'John Doe',
          email: 'member@wordsanctuary.com',
          role: 'MEMBER',
          status: 'ACTIVE',
          permissions: ROLE_PERMISSIONS.MEMBER,
          dateJoined: new Date('2023-06-01'),
          lastActive: new Date(Date.now() - 3 * 60 * 60 * 1000), // 3 hours ago
          preferences: {
            notifications: true,
            emailUpdates: false,
            theme: 'light',
            language: 'en'
          }
        },
        {
          id: '6',
          fullName: 'Jane Visitor',
          email: 'visitor@wordsanctuary.com',
          role: 'VISITOR',
          status: 'ACTIVE',
          permissions: ROLE_PERMISSIONS.VISITOR,
          dateJoined: new Date('2023-11-01'),
          lastActive: new Date(Date.now() - 30 * 60 * 1000), // 30 minutes ago
          preferences: {
            notifications: false,
            emailUpdates: false,
            theme: 'light',
            language: 'en'
          }
        }
      ];
      
      setUsers(mockUsers);
      setIsLoading(false);
    };

    fetchUsers();
  }, [currentUser, hasPermission]);

  const getRoleBadgeColor = (role: UserRole) => {
    switch (role) {
      case 'SUPER_ADMIN': return 'bg-red-100 text-red-800';
      case 'HEAD_OF_INSTALLATION': return 'bg-orange-100 text-orange-800';
      case 'SUB_CENTRAL_HEAD': return 'bg-purple-100 text-purple-800';
      case 'HOD': return 'bg-blue-100 text-blue-800';
      case 'MEMBER': return 'bg-gray-100 text-gray-800';
      case 'VISITOR': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'ACTIVE': return 'bg-green-100 text-green-800';
      case 'INACTIVE': return 'bg-gray-100 text-gray-800';
      case 'SUSPENDED': return 'bg-red-100 text-red-800';
      case 'PENDING': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatLastActive = (date: Date) => {
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 60) {
      return `${diffInMinutes}m ago`;
    } else if (diffInMinutes < 24 * 60) {
      return `${Math.floor(diffInMinutes / 60)}h ago`;
    } else {
      return `${Math.floor(diffInMinutes / (24 * 60))}d ago`;
    }
  };

  const filteredUsers = selectedRole === 'ALL' 
    ? users 
    : users.filter(user => user.role === selectedRole);

  const roleStats = {
    SUPER_ADMIN: users.filter(u => u.role === 'SUPER_ADMIN').length,
    HEAD_OF_INSTALLATION: users.filter(u => u.role === 'HEAD_OF_INSTALLATION').length,
    SUB_CENTRAL_HEAD: users.filter(u => u.role === 'SUB_CENTRAL_HEAD').length,
    HOD: users.filter(u => u.role === 'HOD').length,
    MEMBER: users.filter(u => u.role === 'MEMBER').length,
    VISITOR: users.filter(u => u.role === 'VISITOR').length,
  };

  if (!currentUser || !hasPermission('manage_users')) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Access Denied</h1>
          <p className="text-gray-600">You don&apos;t have permission to access this page.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h1 className="text-2xl font-bold text-gray-900 font-anton mb-2">User Management</h1>
        <p className="text-gray-600">Manage users, roles, and permissions across the platform</p>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mt-6">
          {Object.entries(roleStats).map(([role, count]) => (
            <div key={role} className="text-center">
              <div className="text-2xl font-bold text-gray-900">{count}</div>
              <div className="text-xs text-gray-500">{role.replace(/_/g, ' ')}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
        <div className="flex items-center gap-4">
          <label className="text-sm font-medium text-gray-700">Filter by Role:</label>
          <select
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value as UserRole | 'ALL')}
            className="px-3 py-1 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:border-transparent"
            style={{ '--tw-ring-color': '#001856' } as React.CSSProperties}
          >
            <option value="ALL">All Roles</option>
            <option value="SUPER_ADMIN">Super Admin</option>
            <option value="ADMIN">Admin</option>
            <option value="PASTOR">Pastor</option>
            <option value="LIFE_CLASS_TEACHER">Life Class Teacher</option>
            <option value="LEADER">Leader</option>
            <option value="MEMBER">Member</option>
            <option value="VISITOR">Visitor</option>
          </select>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Users ({filteredUsers.length})</h2>
        </div>
        
        {isLoading ? (
          <div className="p-8 text-center">
            <div className="w-8 h-8 border-2 border-gray-200 rounded-full animate-spin mx-auto mb-4" style={{ borderTopColor: '#001856' }}></div>
            <p className="text-gray-600">Loading users...</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Active</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Joined</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center">
                          <span className="text-sm font-medium" style={{ color: '#001856' }}>
                            {user.fullName.split(' ').map(n => n[0]).join('').toUpperCase()}
                          </span>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{user.fullName}</div>
                          <div className="text-sm text-gray-500">{user.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getRoleBadgeColor(user.role)}`}>
                        {user.role.replace(/_/g, ' ')}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusBadgeColor(user.status)}`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {user.lastActive ? formatLastActive(user.lastActive) : 'Never'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {user.dateJoined.toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <a
                          href={`/dashboard/${user.id}`}
                          className="font-medium"
                          style={{ color: '#001856' }}
                        >
                          View Dashboard
                        </a>
                        <span className="text-gray-300">|</span>
                        <button className="text-gray-600 hover:text-gray-900">
                          Edit
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
