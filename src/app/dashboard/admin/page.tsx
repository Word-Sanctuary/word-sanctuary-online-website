'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { hasPermission } from '@/config/roles';
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

// Mock user data for admin panel
const mockAdminUsers: AdminUser[] = [
  {
    id: 'super-admin-01',
    name: 'Dr. Sarah Johnson',
    email: 'sarah.johnson@wordsanctuary.org',
    role: 'SUPER_ADMIN',
    installation: 'Global Headquarters',
    status: 'active',
    lastActive: '2024-01-15T10:30:00Z'
  },
  {
    id: 'head-installation-01',
    name: 'Pastor Michael Williams',
    email: 'michael.williams@wordsanctuary.org',
    role: 'HEAD_OF_INSTALLATION',
    installation: 'Lagos Installation',
    status: 'active',
    lastActive: '2024-01-15T09:15:00Z'
  },
  {
    id: 'sub-central-01',
    name: 'Rev. Grace Adebayo',
    email: 'grace.adebayo@wordsanctuary.org',
    role: 'SUB_CENTRAL_HEAD',
    installation: 'Lagos Installation',
    status: 'active',
    lastActive: '2024-01-15T08:45:00Z'
  },
  {
    id: 'hod-01',
    name: 'Deacon James Thompson',
    email: 'james.thompson@wordsanctuary.org',
    role: 'HOD',
    installation: 'Lagos Installation',
    status: 'active',
    lastActive: '2024-01-15T07:20:00Z'
  },
  {
    id: 'member-01',
    name: 'Sister Mary Okafor',
    email: 'mary.okafor@wordsanctuary.org',
    role: 'MEMBER',
    installation: 'Lagos Installation',
    status: 'active',
    lastActive: '2024-01-14T19:30:00Z'
  },
  {
    id: 'visitor-01',
    name: 'John Doe',
    email: 'john.doe@gmail.com',
    role: 'VISITOR',
    installation: 'None',
    status: 'active',
    lastActive: '2024-01-14T15:45:00Z'
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

  useEffect(() => {
    if (!user || !hasPermission(user.role, 'manage_users')) {
      router.push('/dashboard');
      return;
    }
  }, [user, router]);

  if (!user || !hasPermission(user.role, 'manage_users')) {
    return null;
  }

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
    <div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Admin Panel</h1>
        <p className="text-gray-600">Manage users and their permissions</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-2xl font-bold text-blue-600">{users.length}</div>
          <div className="text-gray-600">Total Users</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-2xl font-bold text-green-600">
            {users.filter(u => u.status === 'active').length}
          </div>
          <div className="text-gray-600">Active Users</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-2xl font-bold text-yellow-600">
            {users.filter(u => u.role === 'HOD').length}
          </div>
          <div className="text-gray-600">Department Heads</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-2xl font-bold text-purple-600">
            {users.filter(u => u.role === 'MEMBER').length}
          </div>
          <div className="text-gray-600">Members</div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search users by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value as UserRole | 'ALL')}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="ALL">All Roles</option>
              <option value="SUPER_ADMIN">Super Admin</option>
              <option value="HEAD_OF_INSTALLATION">Head of Installation</option>
              <option value="SUB_CENTRAL_HEAD">Sub Central Head</option>
              <option value="HOD">HOD</option>
              <option value="MEMBER">Member</option>
              <option value="VISITOR">Visitor</option>
            </select>
          </div>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Add User
          </button>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
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
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium">
                          {user.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{user.name}</div>
                        <div className="text-sm text-gray-500">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getRoleColor(user.role)}`}>
                      {user.role.replace('_', ' ')}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {user.installation}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(user.status)}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(user.lastActive).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                    <button
                      onClick={() => handleViewUser(user.id)}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      View
                    </button>
                    <button className="text-indigo-600 hover:text-indigo-900">
                      Edit
                    </button>
                    {user.role !== 'SUPER_ADMIN' && (
                      <button className="text-red-600 hover:text-red-900">
                        Suspend
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Empty State */}
      {filteredUsers.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-500 text-lg">No users found matching your criteria</div>
        </div>
      )}
    </div>
  );
}
