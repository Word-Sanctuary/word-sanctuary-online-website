'use client';

import { ReactNode, useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { canAccessRoute, hasPermission, hasRoleLevel } from '@/config/roles';
import { UserRole, Permission } from '@/types/user';

interface AuthGuardProps {
  children: ReactNode;
  requiredRole?: UserRole;
  requiredPermission?: Permission;
  requiredLevel?: number;
  fallbackRoute?: string;
  showFallback?: boolean;
}

interface RouteGuardProps {
  children: ReactNode;
  allowedRoles?: UserRole[];
  requiredPermissions?: Permission[];
  minimumLevel?: number;
}

// Main Auth Guard Component
export function AuthGuard({ 
  children, 
  requiredRole, 
  requiredPermission, 
  requiredLevel,
  fallbackRoute = '/dashboard',
  showFallback = false
}: AuthGuardProps) {
  const { user, isLoading } = useAuth();
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const checkAuthorization = () => {
      if (isLoading) return;

      // Not authenticated
      if (!user || !user.isAuthenticated) {
        router.push('/signin');
        return;
      }

      let authorized = true;

      // Check specific role requirement
      if (requiredRole && user.role !== requiredRole) {
        authorized = false;
      }

      // Check permission requirement
      if (requiredPermission && !hasPermission(user.role, requiredPermission)) {
        authorized = false;
      }

      // Check role level requirement
      if (requiredLevel && !hasRoleLevel(user.role, requiredLevel)) {
        authorized = false;
      }

      if (!authorized) {
        if (showFallback) {
          setIsAuthorized(false);
        } else {
          router.push(fallbackRoute);
          return;
        }
      } else {
        setIsAuthorized(true);
      }
      
      setIsChecking(false);
    };

    checkAuthorization();
  }, [user, isLoading, requiredRole, requiredPermission, requiredLevel, router, fallbackRoute, showFallback]);

  // Show loading state
  if (isLoading || isChecking) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-gray-200 rounded-full animate-spin mx-auto mb-4" style={{ borderTopColor: '#001856' }}></div>
          <p className="text-gray-600">Verifying access...</p>
        </div>
      </div>
    );
  }

  // Show unauthorized message if fallback is enabled
  if (!isAuthorized && showFallback) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <svg className="w-12 h-12 text-red-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Access Denied</h2>
            <p className="text-gray-600 mb-4">
              You don&apos;t have the required permissions to access this resource.
            </p>
            <button
              onClick={() => router.push(fallbackRoute)}
              className="inline-flex items-center px-4 py-2 text-white rounded-lg hover:opacity-90 transition-colors"
              style={{ backgroundColor: '#001856' }}
            >
              Go to Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  return isAuthorized ? <>{children}</> : null;
}

// Route-based Guard Component
export function RouteGuard({ 
  children, 
  allowedRoles, 
  requiredPermissions, 
  minimumLevel 
}: RouteGuardProps) {
  const { user, isLoading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const checkRouteAccess = () => {
      if (isLoading) return;

      // Not authenticated
      if (!user || !user.isAuthenticated) {
        router.push('/signin');
        return;
      }

      let authorized = true;

      // Check if route is allowed for user's role
      if (!canAccessRoute(user.role, pathname)) {
        authorized = false;
      }

      // Check specific allowed roles
      if (allowedRoles && !allowedRoles.includes(user.role)) {
        authorized = false;
      }

      // Check required permissions
      if (requiredPermissions) {
        const hasAllPermissions = requiredPermissions.every(permission => 
          hasPermission(user.role, permission)
        );
        if (!hasAllPermissions) {
          authorized = false;
        }
      }

      // Check minimum role level
      if (minimumLevel && !hasRoleLevel(user.role, minimumLevel)) {
        authorized = false;
      }

      if (!authorized) {
        // Redirect to appropriate dashboard based on role
        const redirectRoute = getDashboardRoute(user.role);
        router.push(redirectRoute);
        return;
      }

      setIsAuthorized(true);
      setIsChecking(false);
    };

    checkRouteAccess();
  }, [user, isLoading, pathname, allowedRoles, requiredPermissions, minimumLevel, router]);

  // Show loading state
  if (isLoading || isChecking) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-gray-200 rounded-full animate-spin mx-auto mb-4" style={{ borderTopColor: '#001856' }}></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return isAuthorized ? <>{children}</> : null;
}

// HOC for protecting pages with specific requirements
export function withAuthGuard<P extends object>(
  Component: React.ComponentType<P>,
  guardOptions: Omit<AuthGuardProps, 'children'>
) {
  return function ProtectedComponent(props: P) {
    return (
      <AuthGuard {...guardOptions}>
        <Component {...props} />
      </AuthGuard>
    );
  };
}

// HOC for protecting routes
export function withRouteGuard<P extends object>(
  Component: React.ComponentType<P>,
  guardOptions: Omit<RouteGuardProps, 'children'>
) {
  return function ProtectedRoute(props: P) {
    return (
      <RouteGuard {...guardOptions}>
        <Component {...props} />
      </RouteGuard>
    );
  };
}

// Utility function to get appropriate dashboard route for role
function getDashboardRoute(role: UserRole): string {
  switch (role) {
    case 'SUPER_ADMIN':
      return '/dashboard/admin';
    case 'HEAD_OF_INSTALLATION':
      return '/dashboard/management';
    case 'SUB_CENTRAL_HEAD':
      return '/dashboard/sub-central';
    case 'HOD':
      return '/dashboard/department';
    case 'MEMBER':
      return '/dashboard/profile';
    case 'VISITOR':
      return '/dashboard';
    default:
      return '/dashboard';
  }
}

// Hook for checking permissions in components
export function usePermissionCheck() {
  const { user } = useAuth();

  const checkPermission = (permission: Permission): boolean => {
    if (!user) return false;
    return hasPermission(user.role, permission);
  };

  const checkRole = (role: UserRole): boolean => {
    if (!user) return false;
    return user.role === role;
  };

  const checkLevel = (level: number): boolean => {
    if (!user) return false;
    return hasRoleLevel(user.role, level);
  };

  const canAccess = (route: string): boolean => {
    if (!user) return false;
    return canAccessRoute(user.role, route);
  };

  return {
    checkPermission,
    checkRole,
    checkLevel,
    canAccess,
    user
  };
}

// Component for conditionally rendering content based on permissions
interface ConditionalRenderProps {
  children: ReactNode;
  requiredPermission?: Permission;
  requiredRole?: UserRole;
  requiredLevel?: number;
  fallback?: ReactNode;
}

export function ConditionalRender({ 
  children, 
  requiredPermission, 
  requiredRole, 
  requiredLevel,
  fallback = null 
}: ConditionalRenderProps) {
  const { checkPermission, checkRole, checkLevel } = usePermissionCheck();

  let hasAccess = true;

  if (requiredPermission && !checkPermission(requiredPermission)) {
    hasAccess = false;
  }

  if (requiredRole && !checkRole(requiredRole)) {
    hasAccess = false;
  }

  if (requiredLevel && !checkLevel(requiredLevel)) {
    hasAccess = false;
  }

  return hasAccess ? <>{children}</> : <>{fallback}</>;
} 