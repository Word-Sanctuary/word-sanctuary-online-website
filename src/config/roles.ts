import { UserRole, Permission } from '@/types/user';

// Simple role-based permissions
export const ROLE_PERMISSIONS: Record<UserRole, Permission[]> = {
  SUPER_ADMIN: [
    'manage_users',
    'manage_content',
    'manage_events',
    'manage_life_classes',
    'manage_installations',
    'access_admin_panel',
    'view_analytics',
    'manage_finances',
    'send_notifications'
  ],
  HEAD_OF_INSTALLATION: [
    'manage_content',
    'manage_events',
    'manage_life_classes',
    'view_member_directory',
    'moderate_community',
    'manage_departments',
    'oversee_hods',
    'view_installation_reports'
  ],
  SUB_CENTRAL_HEAD: [
    'manage_events',
    'manage_life_classes',
    'view_member_directory',
    'moderate_community',
    'manage_sub_central',
    'regional_administration'
  ],
  HOD: [
    'create_events',
    'manage_life_classes',
    'view_member_directory',
    'manage_departments'
  ],
  MEMBER: [
    'join_classes',
    'view_resources',
    'download_resources',
    'participate_community'
  ],
  VISITOR: [
    'view_resources',
    'participate_community'
  ]
};

// Helper function to check if user has permission
export function hasPermission(userRole: UserRole, permission: Permission): boolean {
  return ROLE_PERMISSIONS[userRole]?.includes(permission) || false;
}
