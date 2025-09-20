'use client';

import { useState, useEffect } from 'react';
import { User, UserRole } from '@/types/user';
import { usePermissionCheck } from '@/middleware/auth-guard';

interface DashboardStats {
  upcomingEvents: number;
  completedClasses: number;
  communityMembers: number;
  resourcesAvailable: number;
  totalUsers?: number;
  activeInstallations?: number;
  departmentMembers?: number;
  managedDepartments?: number;
  regionalEvents?: number;
  subCentralMembers?: number;
}

interface RoleBasedDashboardProps {
  user: User;
}

export default function RoleBasedDashboard({ user }: RoleBasedDashboardProps) {
  const [stats, setStats] = useState<DashboardStats>({
    upcomingEvents: 0,
    completedClasses: 0,
    communityMembers: 0,
    resourcesAvailable: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching role-specific stats
    const fetchStats = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock data based on role
      const mockStats = getRoleMockStats(user.role);
      setStats(mockStats);
      setLoading(false);
    };

    fetchStats();
  }, [user.role]);

  const renderDashboard = () => {
    switch (user.role) {
      case 'SUPER_ADMIN':
        return <SuperAdminDashboard user={user} stats={stats} loading={loading} />;
      case 'HEAD_OF_INSTALLATION':
        return <HeadOfInstallationDashboard user={user} stats={stats} loading={loading} />;
      case 'SUB_CENTRAL_HEAD':
        return <SubCentralHeadDashboard user={user} stats={stats} loading={loading} />;
      case 'HOD':
        return <HODDashboard user={user} stats={stats} loading={loading} />;
      case 'MEMBER':
        return <MemberDashboard user={user} stats={stats} loading={loading} />;
      case 'VISITOR':
        return <VisitorDashboard user={user} stats={stats} loading={loading} />;
      default:
        return <DefaultDashboard user={user} stats={stats} loading={loading} />;
    }
  };

  return renderDashboard();
}

// Super Admin Dashboard
function SuperAdminDashboard({ user, stats, loading }: { user: User; stats: DashboardStats; loading: boolean }) {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Welcome back, {user.fullName.split(' ')[0]}!</h1>
        <p className="text-purple-100">System Administrator Dashboard</p>
      </div>

      {/* Global Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Users"
          value={stats.totalUsers || 0}
          icon="👥"
          loading={loading}
          color="purple"
        />
        <StatCard
          title="Active Installations"
          value={stats.activeInstallations || 0}
          icon="🏢"
          loading={loading}
          color="blue"
        />
        <StatCard
          title="Global Events"
          value={stats.upcomingEvents}
          icon="📅"
          loading={loading}
          color="green"
        />
        <StatCard
          title="System Resources"
          value={stats.resourcesAvailable}
          icon="📚"
          loading={loading}
          color="orange"
        />
      </div>

      {/* Admin Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ActionCard
          title="System Management"
          description="Manage global system settings and configurations"
          actions={[
            { label: "User Management", href: "/dashboard/admin/users", primary: true },
            { label: "System Settings", href: "/dashboard/system" },
            { label: "Global Analytics", href: "/dashboard/analytics" }
          ]}
        />
        <ActionCard
          title="Content Oversight"
          description="Oversee global content and installation management"
          actions={[
            { label: "Online Church", href: "/dashboard/online-church", primary: true },
            { label: "Global Reports", href: "/dashboard/global-reports" },
            { label: "Audit Logs", href: "/dashboard/audit" }
          ]}
        />
      </div>

      {/* Recent Activity */}
      <ActivityFeed title="System Activity" activities={getMockActivities('SUPER_ADMIN')} />
    </div>
  );
}

// Head of Installation Dashboard
function HeadOfInstallationDashboard({ user, stats, loading }: { user: User; stats: DashboardStats; loading: boolean }) {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-red-600 to-pink-600 rounded-lg p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Welcome, {user.fullName.split(' ')[0]}!</h1>
        <p className="text-red-100">Installation Head - {user.installation?.name}</p>
      </div>

      {/* Installation Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Departments"
          value={stats.managedDepartments || 0}
          icon="🏛️"
          loading={loading}
          color="red"
        />
        <StatCard
          title="Installation Members"
          value={stats.communityMembers}
          icon="👥"
          loading={loading}
          color="blue"
        />
        <StatCard
          title="Installation Events"
          value={stats.upcomingEvents}
          icon="📅"
          loading={loading}
          color="green"
        />
        <StatCard
          title="Life Classes"
          value={stats.completedClasses}
          icon="📖"
          loading={loading}
          color="purple"
        />
      </div>

      {/* Installation Management */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ActionCard
          title="Department Management"
          description="Oversee all departments within your installation"
          actions={[
            { label: "Manage Departments", href: "/dashboard/departments", primary: true },
            { label: "HOD Oversight", href: "/dashboard/hods" },
            { label: "Department Reports", href: "/dashboard/reports/departments" }
          ]}
        />
        <ActionCard
          title="Installation Operations"
          description="Manage installation-wide activities and events"
          actions={[
            { label: "Event Management", href: "/dashboard/events", primary: true },
            { label: "Installation Analytics", href: "/dashboard/reports" },
            { label: "Member Directory", href: "/dashboard/members" }
          ]}
        />
      </div>

      {/* Recent Activity */}
      <ActivityFeed title="Installation Activity" activities={getMockActivities('HEAD_OF_INSTALLATION')} />
    </div>
  );
}

// Sub Central Head Dashboard
function SubCentralHeadDashboard({ user, stats, loading }: { user: User; stats: DashboardStats; loading: boolean }) {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-orange-600 to-yellow-600 rounded-lg p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Welcome, {user.fullName.split(' ')[0]}!</h1>
        <p className="text-orange-100">Sub Central Head - {user.subCentral}</p>
      </div>

      {/* Regional Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Regional Members"
          value={stats.subCentralMembers || 0}
          icon="👥"
          loading={loading}
          color="orange"
        />
        <StatCard
          title="Regional Events"
          value={stats.regionalEvents || 0}
          icon="📅"
          loading={loading}
          color="blue"
        />
        <StatCard
          title="Local HODs"
          value={stats.managedDepartments || 0}
          icon="👤"
          loading={loading}
          color="green"
        />
        <StatCard
          title="Life Classes"
          value={stats.completedClasses}
          icon="📖"
          loading={loading}
          color="purple"
        />
      </div>

      {/* Regional Management */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ActionCard
          title="Regional Coordination"
          description="Coordinate activities across your sub-central region"
          actions={[
            { label: "Regional Management", href: "/dashboard/sub-central", primary: true },
            { label: "Local HOD Oversight", href: "/dashboard/local-management" },
            { label: "Regional Reports", href: "/dashboard/reports/regional" }
          ]}
        />
        <ActionCard
          title="Community Engagement"
          description="Manage regional community activities and events"
          actions={[
            { label: "Regional Events", href: "/dashboard/events/regional", primary: true },
            { label: "Community Hub", href: "/dashboard/community" },
            { label: "Regional Notifications", href: "/dashboard/notifications" }
          ]}
        />
      </div>

      {/* Recent Activity */}
      <ActivityFeed title="Regional Activity" activities={getMockActivities('SUB_CENTRAL_HEAD')} />
    </div>
  );
}

// HOD Dashboard
function HODDashboard({ user, stats, loading }: { user: User; stats: DashboardStats; loading: boolean }) {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Welcome, {user.fullName.split(' ')[0]}!</h1>
        <p className="text-blue-100">Head of {user.department} Department</p>
      </div>

      {/* Department Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Department Members"
          value={stats.departmentMembers || 0}
          icon="👥"
          loading={loading}
          color="blue"
        />
        <StatCard
          title="Department Events"
          value={stats.upcomingEvents}
          icon="📅"
          loading={loading}
          color="green"
        />
        <StatCard
          title="Classes Taught"
          value={stats.completedClasses}
          icon="📚"
          loading={loading}
          color="purple"
        />
        <StatCard
          title="Resources"
          value={stats.resourcesAvailable}
          icon="📄"
          loading={loading}
          color="orange"
        />
      </div>

      {/* Department Management */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ActionCard
          title="Department Operations"
          description="Manage your department's daily operations and activities"
          actions={[
            { label: "Department Hub", href: "/dashboard/department", primary: true },
            { label: "Team Management", href: "/dashboard/department-management" },
            { label: "Department Reports", href: "/dashboard/reports/department" }
          ]}
        />
        <ActionCard
          title="Teaching & Events"
          description="Organize life classes and department events"
          actions={[
            { label: "Life Classes", href: "/dashboard/life-classes", primary: true },
            { label: "Department Events", href: "/dashboard/events/department" },
            { label: "Create Content", href: "/dashboard/content/create" }
          ]}
        />
      </div>

      {/* Recent Activity */}
      <ActivityFeed title="Department Activity" activities={getMockActivities('HOD')} />
    </div>
  );
}

// Member Dashboard
function MemberDashboard({ user, stats, loading }: { user: User; stats: DashboardStats; loading: boolean }) {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-lg p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Welcome, {user.fullName.split(' ')[0]}!</h1>
        <p className="text-green-100">Member - {user.department} Department</p>
      </div>

      {/* Personal Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Classes Joined"
          value={stats.completedClasses}
          icon="📚"
          loading={loading}
          color="green"
        />
        <StatCard
          title="Events Attended"
          value={stats.upcomingEvents}
          icon="🎉"
          loading={loading}
          color="blue"
        />
        <StatCard
          title="Resources Downloaded"
          value={stats.resourcesAvailable}
          icon="📥"
          loading={loading}
          color="purple"
        />
        <StatCard
          title="Community Posts"
          value={12}
          icon="💬"
          loading={loading}
          color="orange"
        />
      </div>

      {/* Member Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ActionCard
          title="Learning & Growth"
          description="Continue your spiritual journey and learning"
          actions={[
            { label: "Join Life Classes", href: "/dashboard/life-classes", primary: true },
            { label: "Browse Resources", href: "/dashboard/resources" },
            { label: "My Progress", href: "/dashboard/progress" }
          ]}
        />
        <ActionCard
          title="Community & Events"
          description="Engage with the community and attend events"
          actions={[
            { label: "Upcoming Events", href: "/dashboard/events", primary: true },
            { label: "Community Hub", href: "/dashboard/community" },
            { label: "Submit Testimony", href: "/dashboard/testimony" }
          ]}
        />
      </div>

      {/* Recent Activity */}
      <ActivityFeed title="My Activity" activities={getMockActivities('MEMBER')} />
    </div>
  );
}

// Visitor Dashboard
function VisitorDashboard({ user, stats, loading }: { user: User; stats: DashboardStats; loading: boolean }) {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-gray-600 to-gray-800 rounded-lg p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Welcome to Word Sanctuary!</h1>
        <p className="text-gray-200">Explore our community and resources</p>
      </div>

      {/* Visitor Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard
          title="Public Events"
          value={stats.upcomingEvents}
          icon="📅"
          loading={loading}
          color="gray"
        />
        <StatCard
          title="Free Resources"
          value={stats.resourcesAvailable}
          icon="📚"
          loading={loading}
          color="blue"
        />
        <StatCard
          title="Community Members"
          value={stats.communityMembers}
          icon="👥"
          loading={loading}
          color="green"
        />
      </div>

      {/* Visitor Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ActionCard
          title="Explore Our Community"
          description="Discover what Word Sanctuary has to offer"
          actions={[
            { label: "Browse Events", href: "/dashboard/events", primary: true },
            { label: "View Resources", href: "/dashboard/resources" },
            { label: "Community Forum", href: "/dashboard/community" }
          ]}
        />
        <ActionCard
          title="Join Our Family"
          description="Become a member and unlock full access"
          actions={[
            { label: "Join Now", href: "/signup", primary: true },
            { label: "Learn More", href: "/about" },
            { label: "Contact Us", href: "/contact" }
          ]}
        />
      </div>

      {/* Welcome Message */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-900 mb-2">New to Word Sanctuary?</h3>
        <p className="text-blue-700 mb-4">
          We're excited to have you explore our community! As a visitor, you can browse public events, 
          view selected resources, and participate in community discussions.
        </p>
        <div className="flex space-x-4">
          <a 
            href="/signup" 
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Become a Member
          </a>
          <a 
            href="/about" 
            className="inline-flex items-center px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}

// Default Dashboard
function DefaultDashboard({ user, stats, loading }: { user: User; stats: DashboardStats; loading: boolean }) {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-blue-600 to-blue-600 rounded-lg p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Welcome, {user.fullName}!</h1>
        <p className="text-sky-100">Word Sanctuary Dashboard</p>
      </div>

      <div className="text-center py-12">
        <p className="text-gray-600">Dashboard configuration for your role is being set up.</p>
      </div>
    </div>
  );
}

// Utility Components
function StatCard({ title, value, icon, loading, color }: {
  title: string;
  value: number;
  icon: string;
  loading: boolean;
  color: string;
}) {
  const colorClasses = {
    purple: 'bg-purple-50 border-purple-200 text-purple-800',
    blue: 'bg-blue-50 border-blue-200 text-blue-800',
    green: 'bg-green-50 border-green-200 text-green-800',
    orange: 'bg-orange-50 border-orange-200 text-orange-800',
    red: 'bg-red-50 border-red-200 text-red-800',
    gray: 'bg-gray-50 border-gray-200 text-gray-800',
  };

  return (
    <div className={`${colorClasses[color as keyof typeof colorClasses]} border rounded-lg p-6`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium opacity-80">{title}</p>
          {loading ? (
            <div className="w-8 h-8 bg-current opacity-20 rounded mt-2 animate-pulse"></div>
          ) : (
            <p className="text-2xl font-bold mt-2">{value.toLocaleString()}</p>
          )}
        </div>
        <div className="text-2xl opacity-60">{icon}</div>
      </div>
    </div>
  );
}

function ActionCard({ title, description, actions }: {
  title: string;
  description: string;
  actions: Array<{ label: string; href: string; primary?: boolean }>;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="space-y-2">
        {actions.map((action, index) => (
          <a
            key={index}
            href={action.href}
            className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors mr-2 mb-2 ${
              action.primary
                ? 'text-white hover:opacity-90'
                : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}
            style={action.primary ? { backgroundColor: '#001856' } : {}}
          >
            {action.label}
          </a>
        ))}
      </div>
    </div>
  );
}

function ActivityFeed({ title, activities }: {
  title: string;
  activities: Array<{ id: string; message: string; time: string; type: string }>;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-3">
            <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#001856' }}></div>
            <div className="flex-1">
              <p className="text-sm text-gray-900">{activity.message}</p>
              <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Helper Functions
function getRoleMockStats(role: UserRole): DashboardStats {
  switch (role) {
    case 'SUPER_ADMIN':
      return {
        upcomingEvents: 25,
        completedClasses: 150,
        communityMembers: 5420,
        resourcesAvailable: 89,
        totalUsers: 5420,
        activeInstallations: 12
      };
    case 'HEAD_OF_INSTALLATION':
      return {
        upcomingEvents: 8,
        completedClasses: 35,
        communityMembers: 850,
        resourcesAvailable: 45,
        managedDepartments: 8
      };
    case 'SUB_CENTRAL_HEAD':
      return {
        upcomingEvents: 5,
        completedClasses: 20,
        communityMembers: 320,
        resourcesAvailable: 25,
        subCentralMembers: 320,
        regionalEvents: 5,
        managedDepartments: 4
      };
    case 'HOD':
      return {
        upcomingEvents: 3,
        completedClasses: 12,
        communityMembers: 85,
        resourcesAvailable: 15,
        departmentMembers: 85
      };
    case 'MEMBER':
      return {
        upcomingEvents: 3,
        completedClasses: 8,
        communityMembers: 850,
        resourcesAvailable: 25
      };
    case 'VISITOR':
      return {
        upcomingEvents: 5,
        completedClasses: 0,
        communityMembers: 850,
        resourcesAvailable: 10
      };
    default:
      return {
        upcomingEvents: 0,
        completedClasses: 0,
        communityMembers: 0,
        resourcesAvailable: 0
      };
  }
}

function getMockActivities(role: UserRole) {
  const activities = {
    SUPER_ADMIN: [
      { id: '1', message: 'New installation added: Abuja Branch', time: '2 hours ago', type: 'system' },
      { id: '2', message: 'System backup completed successfully', time: '6 hours ago', type: 'system' },
      { id: '3', message: 'User role updated for 5 members', time: '1 day ago', type: 'user' }
    ],
    HEAD_OF_INSTALLATION: [
      { id: '1', message: 'New department head appointed for Youth Ministry', time: '3 hours ago', type: 'management' },
      { id: '2', message: 'Installation event "Unity Conference" approved', time: '1 day ago', type: 'event' },
      { id: '3', message: 'Monthly installation report generated', time: '2 days ago', type: 'report' }
    ],
    SUB_CENTRAL_HEAD: [
      { id: '1', message: 'Regional coordination meeting scheduled', time: '1 hour ago', type: 'meeting' },
      { id: '2', message: 'Local HOD performance review completed', time: '4 hours ago', type: 'review' },
      { id: '3', message: 'Regional event planning session held', time: '1 day ago', type: 'planning' }
    ],
    HOD: [
      { id: '1', message: 'New life class "Faith Foundations" created', time: '2 hours ago', type: 'class' },
      { id: '2', message: 'Department member promoted to assistant', time: '1 day ago', type: 'promotion' },
      { id: '3', message: 'Weekly department meeting conducted', time: '3 days ago', type: 'meeting' }
    ],
    MEMBER: [
      { id: '1', message: 'Completed life class: "Prayer & Meditation"', time: '1 hour ago', type: 'achievement' },
      { id: '2', message: 'Registered for upcoming community event', time: '1 day ago', type: 'registration' },
      { id: '3', message: 'Downloaded resource: "Daily Devotions"', time: '2 days ago', type: 'download' }
    ],
    VISITOR: [
      { id: '1', message: 'Viewed resource: "Welcome Guide"', time: '30 minutes ago', type: 'view' },
      { id: '2', message: 'Browsed community forum', time: '2 hours ago', type: 'browse' },
      { id: '3', message: 'Registered as visitor', time: '1 day ago', type: 'registration' }
    ]
  };

  return activities[role] || [];
} 