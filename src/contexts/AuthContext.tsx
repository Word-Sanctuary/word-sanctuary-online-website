'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, AuthUser, UserRole, Permission } from '@/types/user';
import { ROLE_PERMISSIONS } from '@/config/roles';

interface AuthContextType {
  user: AuthUser | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  updateUser: (userData: Partial<User>) => void;
  isLoading: boolean;
  hasPermission: (permission: string) => boolean;
  hasRole: (role: UserRole) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate checking for existing session
    const checkAuth = async () => {
      try {
        // In a real app, this would check localStorage/sessionStorage or make an API call
        const savedUser = localStorage.getItem('auth_user');
        if (savedUser) {
          const userData = JSON.parse(savedUser) as User;
          setUser({
            ...userData,
            isAuthenticated: true,
            permissions: ROLE_PERMISSIONS[userData.role] || []
          });
        }
      } catch (error) {
        console.error('Error checking authentication:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (email: string, _password: string): Promise<boolean> => { // eslint-disable-line @typescript-eslint/no-unused-vars
    try {
      setIsLoading(true);
      
      // Simulate API call - in real app, this would be an actual authentication request
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock user data based on email for demonstration
      let mockUser: User;
      
      if (email.includes('admin')) {
        mockUser = {
          id: '1',
          fullName: 'Gabriel Adetola',
          email: email,
          role: 'SUPER_ADMIN',
          status: 'ACTIVE',
          permissions: ROLE_PERMISSIONS.SUPER_ADMIN,
          dateJoined: new Date('2023-01-01'),
          preferences: {
            notifications: true,
            emailUpdates: true,
            theme: 'light',
            language: 'en'
          },
          department: 'Administration',
          installationId: 'global-hq',
          installation: {
            id: 'global-hq',
            name: 'Global Headquarters',
            location: 'Lagos, Nigeria',
            country: 'Nigeria',
            timezone: 'Africa/Lagos',
            active: true
          },
          reportsTo: undefined
        };
      } else if (email.includes('head')) {
        mockUser = {
          id: '2',
          fullName: 'Pastor Emmanuel Adebayo',
          email: email,
          role: 'HEAD_OF_INSTALLATION',
          status: 'ACTIVE',
          permissions: ROLE_PERMISSIONS.HEAD_OF_INSTALLATION,
          dateJoined: new Date('2023-01-01'),
          preferences: {
            notifications: true,
            emailUpdates: true,
            theme: 'light',
            language: 'en'
          },
          department: 'Leadership',
          installationId: 'lagos-installation',
          installation: {
            id: 'lagos-installation',
            name: 'Lagos Installation',
            location: 'Lagos, Nigeria',
            country: 'Nigeria',
            timezone: 'Africa/Lagos',
            active: true
          },
          reportsTo: '1'
        };
      } else if (email.includes('subcentral')) {
        mockUser = {
          id: '3',
          fullName: 'Pastor Sarah Johnson',
          email: email,
          role: 'SUB_CENTRAL_HEAD',
          status: 'ACTIVE',
          permissions: ROLE_PERMISSIONS.SUB_CENTRAL_HEAD,
          dateJoined: new Date('2023-03-01'),
          preferences: {
            notifications: true,
            emailUpdates: true,
            theme: 'light',
            language: 'en'
          },
          department: 'Regional Leadership',
          installationId: 'lagos-installation',
          installation: {
            id: 'lagos-installation',
            name: 'Lagos Installation',
            location: 'Lagos, Nigeria',
            country: 'Nigeria',
            timezone: 'Africa/Lagos',
            active: true
          },
          subCentral: 'Lagos Island',
          reportsTo: '2'
        };
      } else if (email.includes('hod')) {
        mockUser = {
          id: '5',
          fullName: 'Dr. Grace Adeleke',
          email: email,
          role: 'HOD',
          status: 'ACTIVE',
          permissions: ROLE_PERMISSIONS.HOD,
          dateJoined: new Date('2023-06-01'),
          preferences: {
            notifications: true,
            emailUpdates: true,
            theme: 'light',
            language: 'en'
          },
          department: 'Education',
          installationId: 'lagos-installation',
          installation: {
            id: 'lagos-installation',
            name: 'Lagos Installation',
            location: 'Lagos, Nigeria',
            country: 'Nigeria',
            timezone: 'Africa/Lagos',
            active: true
          },
          subCentral: 'Lagos Island',
          reportsTo: '3'
        };
      } else {
        mockUser = {
          id: '10',
          fullName: 'David Wilson',
          email: email,
          role: 'MEMBER',
          status: 'ACTIVE',
          permissions: ROLE_PERMISSIONS.MEMBER,
          dateJoined: new Date('2023-10-01'),
          preferences: {
            notifications: true,
            emailUpdates: true,
            theme: 'light',
            language: 'en'
          },
          department: 'Education',
          installationId: 'lagos-installation',
          installation: {
            id: 'lagos-installation',
            name: 'Lagos Installation',
            location: 'Lagos, Nigeria',
            country: 'Nigeria',
            timezone: 'Africa/Lagos',
            active: true
          },
          subCentral: 'Lagos Island',
          reportsTo: '5'
        };
      }

      const authUser: AuthUser = {
        ...mockUser,
        isAuthenticated: true,
        accessToken: 'mock_access_token',
        refreshToken: 'mock_refresh_token'
      };

      setUser(authUser);
      localStorage.setItem('auth_user', JSON.stringify(authUser));
      
      return true;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    try {
      // Clear user state
      setUser(null);
      
      // Clear localStorage
      localStorage.removeItem('auth_user');
      
      // Clear any other auth-related items that might exist
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      
      // Force a brief delay to ensure state is cleared
      setTimeout(() => {
        // Use location.replace to prevent back button issues
        window.location.replace('/signin');
      }, 100);
    } catch (error) {
      console.error('Error during logout:', error);
      // Still redirect even if there's an error
      window.location.replace('/signin');
    }
  };

  const updateUser = (userData: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...userData };
      setUser(updatedUser);
      localStorage.setItem('auth_user', JSON.stringify(updatedUser));
    }
  };

  const hasPermission = (permission: string): boolean => {
    return user?.permissions.includes(permission as Permission) || false;
  };

  const hasRole = (role: UserRole): boolean => {
    return user?.role === role;
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      logout,
      updateUser,
      isLoading,
      hasPermission,
      hasRole
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
