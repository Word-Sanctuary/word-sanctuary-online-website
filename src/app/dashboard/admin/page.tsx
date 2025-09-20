'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { AuthGuard } from '@/middleware/auth-guard';
import { UserRole } from '@/types/user';
import { useRouter } from 'next/navigation';

interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  installation: string;
  status: 'active' | 'inactive' | 'suspended';
  lastActive: string;
}

const mockAdminUsers: AdminUser[] = [
  {
    id: '1',
    name: 'Gabriel Adetola',
    email: 'gabriel@wordsanctuary.org',
    role: 'SUPER_ADMIN',
    installation: 'Global HQ',
    status: 'active',
    lastActive: '2 hours ago'
  },
  {
    id: '2',
    name: 'Pastor Emmanuel Adebayo',
    email: 'emmanuel@wordsanctuary.org',
    role: 'HEAD_OF_INSTALLATION',
    installation: 'Lagos Installation',
    status: 'active',
    lastActive: '1 hour ago'
  },
  {
    id: '3',
    name: 'Pastor Sarah Johnson',
    email: 'sarah@wordsanctuary.org',
    role: 'SUB_CENTRAL_HEAD',
    installation: 'Lagos Installation',
    status: 'active',
    lastActive: '30 minutes ago'
  },
  {
    id: '4',
    name: 'Dr. Grace Adeleke',
    email: 'grace@wordsanctuary.org',
    role: 'HOD',
    installation: 'Lagos Installation',
    status: 'active',
    lastActive: '45 minutes ago'
  },
  {
    id: '5',
    name: 'David Wilson',
    email: 'david@wordsanctuary.org',
    role: 'MEMBER',
    installation: 'Lagos Installation',
    status: 'active',
    lastActive: '1 day ago'
  }
];

export default function AdminPanel() {
  const { user } = useAuth();
  const router = useRouter();
  const [users, setUsers] = useState<AdminUser[]>(mockAdminUsers);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState<UserRole | 'ALL'>('ALL');
  const [selectedUser, setSelectedUser] = useState<AdminUser | null>(null);
  const [showUserModal, setShowUserModal] = useState(false);

  const filteredUsers = users.filter(u => {
    const matchesSearch = u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         u.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = selectedRole === 'ALL' || u.role === selectedRole;
    return matchesSearch && matchesRole;
  });

  const handleViewUser = (userId: string) => {
    router.push(`/dashboard/${userId}`);
  };

  const getRoleColor = (role: UserRole) => {
    switch (role) {
      case 'SUPER_ADMIN': return 'bg-purple-100 text-purple-800';
      case 'HEAD_OF_INSTALLATION': return 'bg-red-100 text-red-800';
      case 'SUB_CENTRAL_HEAD': return 'bg-orange-100 text-orange-800';
      case 'HOD': return 'bg-yellow-100 text-yellow-800';
      case 'MEMBER': return 'bg-green-100 text-green-800';
      case 'VISITOR': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'inactive': return 'bg-gray-100 text-gray-800';
      case 'suspended': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <AuthGuard requiredRole="SUPER_ADMIN" fallbackRoute="/dashboard">
      <div className="space-y-6">
        {/* Header */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Panel</h1>
              <p className="text-gray-600 mt-1">Manage users and system settings</p>
            </div>
            <div className="mt-4 md:mt-0">
              <button className="inline-flex items-center px-4 py-2 text-white rounded-lg hover:opacity-90 transition-colors" style={{ backgroundColor: '#001856' }}>
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Add User
              </button>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                Search Users
              </label>
              <input
                type="text"
                id="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by name or email..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                style={{ '--tw-ring-color': '#001856' } as React.CSSProperties}
              />
            </div>
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                Filter by Role
              </label>
              <select
                id="role"
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value as UserRole | 'ALL')}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                style={{ '--tw-ring-color': '#001856' } as React.CSSProperties}
              >
                <option value="ALL">All Roles</option>
                <option value="SUPER_ADMIN">Super Admin</option>
                <option value="HEAD_OF_INSTALLATION">Head of Installation</option>
                <option value="SUB_CENTRAL_HEAD">Sub Central Head</option>
                <option value="HOD">Head of Department</option>
                <option value="MEMBER">Member</option>
                <option value="VISITOR">Visitor</option>
              </select>
            </div>
          </div>
        </div>

        {/* User List */}
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">
              Users ({filteredUsers.length})
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    User
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Role
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Installation
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Last Active
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                          {user.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="ml-3">
                          <div className="text-sm font-medium text-gray-900">{user.name}</div>
                          <div className="text-sm text-gray-500">{user.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getRoleColor(user.role)}`}>
                        {user.role.replace(/_/g, ' ')}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {user.installation}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(user.status)}`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {user.lastActive}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => handleViewUser(user.id)}
                        className="mr-3"
                      >
                        View
                      </button>
                      <button className="text-gray-600 hover:text-gray-900">
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AuthGuard>
  );
}
