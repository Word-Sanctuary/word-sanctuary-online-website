/**
 * User types and authentication-related type definitions
 */

// User role hierarchy
export type UserRole = 
  | 'SUPER_ADMIN'           // System administrators with full access to entire webapp
  | 'HEAD_OF_INSTALLATION'  // Leaders of entire installations/locations
  | 'SUB_CENTRAL_HEAD'      // Regional leaders under installation heads
  | 'HOD'                   // Heads of departments within installations
  | 'MEMBER'                // Regular community members
  | 'VISITOR';              // Guests and new visitors

// User permissions for different actions
export type Permission = 
  | 'manage_users'
  | 'manage_content'
  | 'manage_events'
  | 'manage_life_classes'
  | 'teach_life_classes'
  | 'view_analytics'
  | 'manage_finances'
  | 'moderate_community'
  | 'send_notifications'
  | 'manage_installations'
  | 'access_admin_panel'
  | 'view_member_directory'
  | 'create_events'
  | 'edit_events'
  | 'join_classes'
  | 'view_resources'
  | 'download_resources'
  | 'participate_community'
  | 'manage_departments'
  | 'assign_roles'
  | 'view_installation_reports'
  | 'manage_sub_central'
  | 'oversee_hods'
  | 'regional_administration';

// User status
export type UserStatus = 'ACTIVE' | 'INACTIVE' | 'SUSPENDED' | 'PENDING';

// Installation/Location data
export interface Installation {
  id: string;
  name: string;
  location: string;
  country: string;
  timezone: string;
  active: boolean;
}

// User profile interface
export interface User {
  id: string;
  fullName: string;
  email: string;
  phone?: string;
  avatar?: string;
  role: UserRole;
  status: UserStatus;
  permissions: Permission[];
  installationId?: string;
  installation?: Installation;
  dateJoined: Date;
  lastActive?: Date;
  
  // Life class specific fields
  lifeClassTeacher?: string;
  lifeClassTopics?: string[];
  
  // Profile data
  dateOfBirth?: Date;
  gender?: 'male' | 'female';
  homeAddress?: string;
  
  // Organizational structure
  department?: string;        // For HODs and members
  subCentral?: string;       // For Sub Central Heads and below
  reportsTo?: string;        // ID of supervisor/manager
  subordinates?: string[];   // IDs of direct reports
  
  // Settings
  preferences: {
    notifications: boolean;
    emailUpdates: boolean;
    theme: 'light' | 'dark' | 'system';
    language: string;
  };
}

// Authentication context
export interface AuthUser extends User {
  isAuthenticated: boolean;
  accessToken?: string;
  refreshToken?: string;
}

// Dashboard configuration based on user role
export interface DashboardConfig {
  layout: 'standard' | 'admin' | 'teacher' | 'minimal';
  sidebar: SidebarConfig;
  quickActions: QuickAction[];
  widgets: DashboardWidget[];
  permissions: Permission[];
}

// Sidebar configuration
export interface SidebarConfig {
  sections: SidebarSection[];
  collapsible: boolean;
  defaultCollapsed: boolean;
}

export interface SidebarSection {
  title?: string;
  items: SidebarItem[];
  requiresPermission?: Permission[];
  roleRestriction?: UserRole[];
}

export interface SidebarItem {
  label: string;
  href: string;
  icon: string;
  badge?: string | number;
  active?: boolean;
  requiresPermission?: Permission[];
  roleRestriction?: UserRole[];
  children?: SidebarItem[];
}

// Quick actions configuration
export interface QuickAction {
  title: string;
  description: string;
  icon: string;
  href: string;
  bgColor: string;
  available: boolean;
  requiresPermission?: Permission[];
  roleRestriction?: UserRole[];
}

// Dashboard widgets
export interface DashboardWidget {
  id: string;
  title: string;
  type: 'stats' | 'chart' | 'list' | 'calendar' | 'activity' | 'custom';
  size: 'small' | 'medium' | 'large' | 'full';
  position: { row: number; col: number };
  data?: any;
  requiresPermission?: Permission[];
  roleRestriction?: UserRole[];
}

// Role-based access control
export interface RolePermissions {
  role: UserRole;
  permissions: Permission[];
  description: string;
  level: number; // Higher number = higher privilege
}
