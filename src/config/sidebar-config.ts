import { UserRole } from '@/types/user';
import React from 'react';

export interface SidebarItem {
  id: string;
  label: string;
  href: string;
  icon: () => React.ReactElement;
  description?: string;
  badge?: string | number;
  children?: SidebarItem[];
}

export interface SidebarSection {
  id: string;
  title: string;
  items: SidebarItem[];
}

export interface SidebarConfig {
  sections: SidebarSection[];
  quickActions?: SidebarItem[];
}

// Icon components for reuse
export const Icons = {
  Dashboard: () => React.createElement('svg', {
    className: 'w-5 h-5',
    fill: 'none',
    stroke: 'currentColor',
    viewBox: '0 0 24 24'
  }, React.createElement('path', {
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeWidth: 2,
    d: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z'
  })),
  
  Users: () => React.createElement('svg', {
    className: 'w-5 h-5',
    fill: 'none',
    stroke: 'currentColor',
    viewBox: '0 0 24 24'
  }, React.createElement('path', {
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeWidth: 2,
    d: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z'
  })),
  
  Analytics: () => React.createElement('svg', {
    className: 'w-5 h-5',
    fill: 'none',
    stroke: 'currentColor',
    viewBox: '0 0 24 24'
  }, React.createElement('path', {
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeWidth: 2,
    d: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
  })),
  
  Settings: () => React.createElement('svg', {
    className: 'w-5 h-5',
    fill: 'none',
    stroke: 'currentColor',
    viewBox: '0 0 24 24'
  }, React.createElement('path', {
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeWidth: 2,
    d: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
  }), React.createElement('path', {
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeWidth: 2,
    d: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z'
  })),
  
  LifeClasses: () => React.createElement('svg', {
    className: 'w-5 h-5',
    fill: 'none',
    stroke: 'currentColor',
    viewBox: '0 0 24 24'
  }, React.createElement('path', {
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeWidth: 2,
    d: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
  })),
  
  Events: () => React.createElement('svg', {
    className: 'w-5 h-5',
    fill: 'none',
    stroke: 'currentColor',
    viewBox: '0 0 24 24'
  }, React.createElement('path', {
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeWidth: 2,
    d: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
  })),
  
  Community: () => React.createElement('svg', {
    className: 'w-5 h-5',
    fill: 'none',
    stroke: 'currentColor',
    viewBox: '0 0 24 24'
  }, React.createElement('path', {
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeWidth: 2,
    d: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
  })),
  
  Resources: () => React.createElement('svg', {
    className: 'w-5 h-5',
    fill: 'none',
    stroke: 'currentColor',
    viewBox: '0 0 24 24'
  }, React.createElement('path', {
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeWidth: 2,
    d: 'M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z'
  })),
  
  Management: () => React.createElement('svg', {
    className: 'w-5 h-5',
    fill: 'none',
    stroke: 'currentColor',
    viewBox: '0 0 24 24'
  }, React.createElement('path', {
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeWidth: 2,
    d: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
  })),
  
  Reports: () => React.createElement('svg', {
    className: 'w-5 h-5',
    fill: 'none',
    stroke: 'currentColor',
    viewBox: '0 0 24 24'
  }, React.createElement('path', {
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeWidth: 2,
    d: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
  })),
  
  Installations: () => React.createElement('svg', {
    className: 'w-5 h-5',
    fill: 'none',
    stroke: 'currentColor',
    viewBox: '0 0 24 24'
  }, React.createElement('path', {
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeWidth: 2,
    d: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
  })),
  
  System: () => React.createElement('svg', {
    className: 'w-5 h-5',
    fill: 'none',
    stroke: 'currentColor',
    viewBox: '0 0 24 24'
  }, React.createElement('path', {
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeWidth: 2,
    d: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
  })),
  
  Departments: () => React.createElement('svg', {
    className: 'w-5 h-5',
    fill: 'none',
    stroke: 'currentColor',
    viewBox: '0 0 24 24'
  }, React.createElement('path', {
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeWidth: 2,
    d: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
  })),
  
  Profile: () => React.createElement('svg', {
    className: 'w-5 h-5',
    fill: 'none',
    stroke: 'currentColor',
    viewBox: '0 0 24 24'
  }, React.createElement('path', {
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeWidth: 2,
    d: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
  }))
};

// Super Admin Configuration
const SUPER_ADMIN_CONFIG: SidebarConfig = {
  sections: [
    {
      id: 'overview',
      title: 'Overview',
      items: [
        {
          id: 'dashboard',
          label: 'Dashboard',
          href: '/dashboard',
          icon: Icons.Dashboard,
          description: 'System overview and metrics'
        }
      ]
    },
    {
      id: 'system',
      title: 'System Administration',
      items: [
        {
          id: 'admin-panel',
          label: 'Admin Panel',
          href: '/dashboard/admin',
          icon: Icons.Settings,
          description: 'User management and system settings'
        },
        {
          id: 'analytics',
          label: 'Global Analytics',
          href: '/dashboard/analytics',
          icon: Icons.Analytics,
          description: 'System-wide analytics and insights'
        },
        {
          id: 'online-church',
          label: 'Online Church',
          href: '/dashboard/online-church',
          icon: Icons.Community,
          description: 'Manage online church services and streaming'
        },
        {
          id: 'system-settings',
          label: 'System Settings',
          href: '/dashboard/system',
          icon: Icons.System,
          description: 'Configure system-wide settings'
        }
      ]
    },
    {
      id: 'content',
      title: 'Content Management',
      items: [
        {
          id: 'life-classes',
          label: 'Life Classes',
          href: '/dashboard/life-classes',
          icon: Icons.LifeClasses,
          description: 'Manage all life classes globally'
        },
        {
          id: 'events',
          label: 'Events',
          href: '/dashboard/events',
          icon: Icons.Events,
          description: 'Global event management'
        },
        {
          id: 'resources',
          label: 'Resources',
          href: '/dashboard/resources',
          icon: Icons.Resources,
          description: 'Content and resource library'
        }
      ]
    },
    {
      id: 'community',
      title: 'Community',
      items: [
        {
          id: 'community',
          label: 'Community Hub',
          href: '/dashboard/community',
          icon: Icons.Community,
          description: 'Community management and moderation'
        }
      ]
    }
  ],
  quickActions: [
    {
      id: 'add-user',
      label: 'Add User',
      href: '/dashboard/admin/users/new',
      icon: Icons.Users
    },
    {
      id: 'view-reports',
      label: 'Reports',
      href: '/dashboard/global-reports',
      icon: Icons.Reports
    }
  ]
};

// Head of Installation Configuration
const HEAD_OF_INSTALLATION_CONFIG: SidebarConfig = {
  sections: [
    {
      id: 'overview',
      title: 'Overview',
      items: [
        {
          id: 'dashboard',
          label: 'Dashboard',
          href: '/dashboard',
          icon: Icons.Dashboard,
          description: 'Installation overview'
        }
      ]
    },
    {
      id: 'management',
      title: 'Installation Management',
      items: [
        {
          id: 'installation-management',
          label: 'Management Hub',
          href: '/dashboard/management',
          icon: Icons.Management,
          description: 'Installation oversight and control'
        },
        {
          id: 'departments',
          label: 'Departments',
          href: '/dashboard/departments',
          icon: Icons.Departments,
          description: 'Manage installation departments'
        },
        {
          id: 'reports',
          label: 'Reports & Analytics',
          href: '/dashboard/reports',
          icon: Icons.Reports,
          description: 'Installation performance metrics'
        }
      ]
    },
    {
      id: 'activities',
      title: 'Activities',
      items: [
        {
          id: 'life-classes',
          label: 'Life Classes',
          href: '/dashboard/life-classes',
          icon: Icons.LifeClasses,
          description: 'Manage installation life classes'
        },
        {
          id: 'events',
          label: 'Events',
          href: '/dashboard/events',
          icon: Icons.Events,
          description: 'Installation event management'
        },
        {
          id: 'community',
          label: 'Community',
          href: '/dashboard/community',
          icon: Icons.Community,
          description: 'Community engagement and activities'
        }
      ]
    },
    {
      id: 'resources',
      title: 'Resources',
      items: [
        {
          id: 'resources',
          label: 'Resource Library',
          href: '/dashboard/resources',
          icon: Icons.Resources,
          description: 'Installation resources and materials'
        }
      ]
    }
  ],
  quickActions: [
    {
      id: 'create-event',
      label: 'Create Event',
      href: '/dashboard/events/new',
      icon: Icons.Events
    },
    {
      id: 'add-department',
      label: 'Add Department',
      href: '/dashboard/departments/new',
      icon: Icons.Departments
    }
  ]
};

// Sub Central Head Configuration
const SUB_CENTRAL_HEAD_CONFIG: SidebarConfig = {
  sections: [
    {
      id: 'overview',
      title: 'Overview',
      items: [
        {
          id: 'dashboard',
          label: 'Dashboard',
          href: '/dashboard',
          icon: Icons.Dashboard,
          description: 'Sub-central overview'
        }
      ]
    },
    {
      id: 'management',
      title: 'Regional Management',
      items: [
        {
          id: 'sub-central',
          label: 'Sub-Central Hub',
          href: '/dashboard/sub-central',
          icon: Icons.Management,
          description: 'Regional coordination center'
        },
        {
          id: 'local-management',
          label: 'Local Management',
          href: '/dashboard/local-management',
          icon: Icons.Departments,
          description: 'Oversee local departments and HODs'
        }
      ]
    },
    {
      id: 'activities',
      title: 'Regional Activities',
      items: [
        {
          id: 'life-classes',
          label: 'Life Classes',
          href: '/dashboard/life-classes',
          icon: Icons.LifeClasses,
          description: 'Regional life class coordination'
        },
        {
          id: 'events',
          label: 'Events',
          href: '/dashboard/events',
          icon: Icons.Events,
          description: 'Regional event management'
        },
        {
          id: 'community',
          label: 'Community',
          href: '/dashboard/community',
          icon: Icons.Community,
          description: 'Regional community engagement'
        }
      ]
    },
    {
      id: 'resources',
      title: 'Resources',
      items: [
        {
          id: 'resources',
          label: 'Resource Center',
          href: '/dashboard/resources',
          icon: Icons.Resources,
          description: 'Regional resources and materials'
        }
      ]
    }
  ],
  quickActions: [
    {
      id: 'coordinate-event',
      label: 'Coordinate Event',
      href: '/dashboard/events/regional',
      icon: Icons.Events
    },
    {
      id: 'send-notification',
      label: 'Send Notification',
      href: '/dashboard/notifications/regional',
      icon: Icons.Settings
    }
  ]
};

// Head of Department (HOD) Configuration
const HOD_CONFIG: SidebarConfig = {
  sections: [
    {
      id: 'overview',
      title: 'Overview',
      items: [
        {
          id: 'dashboard',
          label: 'Dashboard',
          href: '/dashboard',
          icon: Icons.Dashboard,
          description: 'Department overview'
        }
      ]
    },
    {
      id: 'department',
      title: 'Department Management',
      items: [
        {
          id: 'department-hub',
          label: 'Department Hub',
          href: '/dashboard/department',
          icon: Icons.Management,
          description: 'Department control center'
        },
        {
          id: 'department-management',
          label: 'Team Management',
          href: '/dashboard/department-management',
          icon: Icons.Users,
          description: 'Manage department members'
        }
      ]
    },
    {
      id: 'activities',
      title: 'Department Activities',
      items: [
        {
          id: 'life-classes',
          label: 'Life Classes',
          href: '/dashboard/life-classes',
          icon: Icons.LifeClasses,
          description: 'Department life classes'
        },
        {
          id: 'events',
          label: 'Events',
          href: '/dashboard/events',
          icon: Icons.Events,
          description: 'Department events and activities'
        },
        {
          id: 'community',
          label: 'Community',
          href: '/dashboard/community',
          icon: Icons.Community,
          description: 'Department community engagement'
        }
      ]
    },
    {
      id: 'resources',
      title: 'Resources',
      items: [
        {
          id: 'resources',
          label: 'Resources',
          href: '/dashboard/resources',
          icon: Icons.Resources,
          description: 'Department resources'
        }
      ]
    }
  ],
  quickActions: [
    {
      id: 'create-class',
      label: 'Create Class',
      href: '/dashboard/life-classes/new',
      icon: Icons.LifeClasses
    },
    {
      id: 'department-event',
      label: 'Department Event',
      href: '/dashboard/events/department',
      icon: Icons.Events
    }
  ]
};

// Member Configuration
const MEMBER_CONFIG: SidebarConfig = {
  sections: [
    {
      id: 'overview',
      title: 'Overview',
      items: [
        {
          id: 'dashboard',
          label: 'Dashboard',
          href: '/dashboard',
          icon: Icons.Dashboard,
          description: 'Your personal dashboard'
        }
      ]
    },
    {
      id: 'activities',
      title: 'My Activities',
      items: [
        {
          id: 'life-classes',
          label: 'Life Classes',
          href: '/dashboard/life-classes',
          icon: Icons.LifeClasses,
          description: 'Join and attend life classes'
        },
        {
          id: 'events',
          label: 'Events',
          href: '/dashboard/events',
          icon: Icons.Events,
          description: 'Browse and register for events'
        },
        {
          id: 'community',
          label: 'Community',
          href: '/dashboard/community',
          icon: Icons.Community,
          description: 'Connect with the community'
        }
      ]
    },
    {
      id: 'resources',
      title: 'Resources',
      items: [
        {
          id: 'resources',
          label: 'Resource Library',
          href: '/dashboard/resources',
          icon: Icons.Resources,
          description: 'Access resources and materials'
        }
      ]
    },
    {
      id: 'personal',
      title: 'Personal',
      items: [
        {
          id: 'profile',
          label: 'My Profile',
          href: '/dashboard/profile',
          icon: Icons.Profile,
          description: 'Manage your profile and settings'
        }
      ]
    }
  ],
  quickActions: [
    {
      id: 'join-class',
      label: 'Join Class',
      href: '/dashboard/life-classes/browse',
      icon: Icons.LifeClasses
    },
    {
      id: 'register-event',
      label: 'Register Event',
      href: '/dashboard/events/browse',
      icon: Icons.Events
    }
  ]
};

// Visitor Configuration
const VISITOR_CONFIG: SidebarConfig = {
  sections: [
    {
      id: 'overview',
      title: 'Welcome',
      items: [
        {
          id: 'dashboard',
          label: 'Dashboard',
          href: '/dashboard',
          icon: Icons.Dashboard,
          description: 'Welcome to Word Sanctuary'
        }
      ]
    },
    {
      id: 'explore',
      title: 'Explore',
      items: [
        {
          id: 'events',
          label: 'Public Events',
          href: '/dashboard/events',
          icon: Icons.Events,
          description: 'View upcoming public events'
        },
        {
          id: 'community',
          label: 'Community',
          href: '/dashboard/community',
          icon: Icons.Community,
          description: 'Connect with the community'
        },
        {
          id: 'resources',
          label: 'Resources',
          href: '/dashboard/resources',
          icon: Icons.Resources,
          description: 'Access public resources'
        }
      ]
    }
  ]
};

// Main configuration mapping
export const SIDEBAR_CONFIGS: Record<UserRole, SidebarConfig> = {
  SUPER_ADMIN: SUPER_ADMIN_CONFIG,
  HEAD_OF_INSTALLATION: HEAD_OF_INSTALLATION_CONFIG,
  SUB_CENTRAL_HEAD: SUB_CENTRAL_HEAD_CONFIG,
  HOD: HOD_CONFIG,
  MEMBER: MEMBER_CONFIG,
  VISITOR: VISITOR_CONFIG
};

// Helper function to get sidebar config for a role
export function getSidebarConfig(role: UserRole): SidebarConfig {
  return SIDEBAR_CONFIGS[role] || VISITOR_CONFIG;
} 