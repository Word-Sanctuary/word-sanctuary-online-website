import { UserRole, Permission } from '@/types/user';

// Role hierarchy levels (higher number = higher privilege)
export const ROLE_HIERARCHY: Record<UserRole, number> = {
  SUPER_ADMIN: 5,
  HEAD_OF_INSTALLATION: 4,
  SUB_CENTRAL_HEAD: 3,
  HOD: 2,
  MEMBER: 1,
  VISITOR: 0
};

// Enhanced role-based permissions with hierarchical access
export const ROLE_PERMISSIONS: Record<UserRole, Permission[]> = {
  SUPER_ADMIN: [
    // System Administration
    'manage_users',
    'manage_content',
    'manage_events',
    'manage_life_classes',
    'manage_installations',
    'access_admin_panel',
    'view_analytics',
    'manage_finances',
    'send_notifications',
    'assign_roles',
    
    // Global oversight
    'view_global_reports',
    'manage_system_settings',
    'backup_data',
    'audit_logs',
    'moderate_community'
  ],
  
  HEAD_OF_INSTALLATION: [
    // Installation Management
    'manage_content',
    'manage_events',
    'manage_life_classes',
    'view_member_directory',
    'moderate_community',
    'manage_departments',
    'oversee_hods',
    'view_installation_reports',
    'manage_sub_central',
    
    // Local administration
    'create_departments',
    'assign_hods',
    'view_installation_analytics',
    'manage_installation_finances',
    'approve_events',
    'send_installation_notifications'
  ],
  
  SUB_CENTRAL_HEAD: [
    // Regional Management
    'manage_events',
    'manage_life_classes',
    'view_member_directory',
    'moderate_community',
    'manage_sub_central',
    'regional_administration',
    
    // Sub-central specific
    'coordinate_departments',
    'view_sub_central_reports',
    'manage_local_events',
    'oversee_local_hods',
    'send_regional_notifications'
  ],
  
  HOD: [
    // Department Management
    'create_events',
    'manage_life_classes',
    'view_member_directory',
    'manage_departments',
    
    // Department specific
    'teach_life_classes',
    'manage_department_members',
    'create_department_content',
    'view_department_reports',
    'coordinate_department_activities'
  ],
  
  MEMBER: [
    // Basic Member Access
    'join_classes',
    'view_resources',
    'download_resources',
    'participate_community',
    
    // Member activities
    'attend_events',
    'access_member_portal',
    'view_personal_progress',
    'submit_testimonies',
    'access_devotionals'
  ],
  
  VISITOR: [
    // Limited access
    'view_resources',
    'participate_community',
    'view_public_events',
    'access_basic_content'
  ]
};

// Helper function to check if user has permission
export function hasPermission(userRole: UserRole, permission: Permission): boolean {
  return ROLE_PERMISSIONS[userRole]?.includes(permission) || false;
}

// Helper function to check if user has higher or equal role level
export function hasRoleLevel(userRole: UserRole, requiredLevel: number): boolean {
  return ROLE_HIERARCHY[userRole] >= requiredLevel;
}

// Helper function to check if user can access another user's data
export function canAccessUser(currentUserRole: UserRole, targetUserRole: UserRole): boolean {
  return ROLE_HIERARCHY[currentUserRole] >= ROLE_HIERARCHY[targetUserRole];
}

// Get all permissions for roles at or below a certain level
export function getPermissionsForLevel(maxLevel: number): Permission[] {
  const permissions = new Set<Permission>();
  
  Object.entries(ROLE_HIERARCHY).forEach(([role, level]) => {
    if (level <= maxLevel) {
      ROLE_PERMISSIONS[role as UserRole].forEach(permission => 
        permissions.add(permission)
      );
    }
  });
  
  return Array.from(permissions);
}

// Role-specific route access patterns
export const ROLE_ROUTES: Record<UserRole, string[]> = {
  SUPER_ADMIN: [
    '/dashboard',
    '/dashboard/admin',
    '/dashboard/admin/users',
    '/dashboard/analytics',
    '/dashboard/system',
    '/dashboard/online-church',
    '/dashboard/global-reports',
    '/dashboard/**' // Full access
  ],
  
  HEAD_OF_INSTALLATION: [
    '/dashboard',
    '/dashboard/management',
    '/dashboard/installation',
    '/dashboard/departments',
    '/dashboard/reports',
    '/dashboard/life-classes',
    '/dashboard/events',
    '/dashboard/community',
    '/dashboard/resources'
  ],
  
  SUB_CENTRAL_HEAD: [
    '/dashboard',
    '/dashboard/sub-central',
    '/dashboard/regional',
    '/dashboard/local-management',
    '/dashboard/life-classes',
    '/dashboard/events',
    '/dashboard/community',
    '/dashboard/resources'
  ],
  
  HOD: [
    '/dashboard',
    '/dashboard/department',
    '/dashboard/department-management',
    '/dashboard/life-classes',
    '/dashboard/events',
    '/dashboard/community',
    '/dashboard/resources'
  ],
  
  MEMBER: [
    '/dashboard',
    '/dashboard/life-classes',
    '/dashboard/events',
    '/dashboard/community',
    '/dashboard/resources',
    '/dashboard/profile'
  ],
  
  VISITOR: [
    '/dashboard',
    '/dashboard/resources',
    '/dashboard/community',
    '/dashboard/events'
  ]
};

// Check if user can access specific route
export function canAccessRoute(userRole: UserRole, route: string): boolean {
  const allowedRoutes = ROLE_ROUTES[userRole];
  
  return allowedRoutes.some(allowedRoute => {
    if (allowedRoute.endsWith('/**')) {
      return route.startsWith(allowedRoute.slice(0, -3));
    }
    return route === allowedRoute || route.startsWith(allowedRoute + '/');
  });
}
