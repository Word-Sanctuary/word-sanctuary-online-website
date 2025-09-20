'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { User } from '@/types/user';
import { getSidebarConfig } from '@/config/sidebar-config';
import { useAuth } from '@/contexts/AuthContext';

interface DashboardSidebarProps {
  user: User;
}

export default function DashboardSidebar({ user }: DashboardSidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['overview']));
  const [showSignOutModal, setShowSignOutModal] = useState(false);
  const pathname = usePathname();
  const { logout } = useAuth();
  
  const sidebarConfig = getSidebarConfig(user.role);

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  const handleSignOutClick = () => {
    setShowSignOutModal(true);
  };

  const handleConfirmSignOut = () => {
    setShowSignOutModal(false);
    logout();
  };

  const handleCancelSignOut = () => {
    setShowSignOutModal(false);
  };

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && showSignOutModal) {
        handleCancelSignOut();
      }
    };

    if (showSignOutModal) {
      document.addEventListener('keydown', handleEscapeKey);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    };
  }, [showSignOutModal]);

  const getRoleDisplayName = (role: string) => {
    return role
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  };

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case 'SUPER_ADMIN': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'HEAD_OF_INSTALLATION': return 'bg-red-100 text-red-800 border-red-200';
      case 'SUB_CENTRAL_HEAD': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'HOD': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'MEMBER': return 'bg-green-100 text-green-800 border-green-200';
      case 'VISITOR': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white shadow-md border border-gray-200 hover:bg-gray-50 transition-colors"
        aria-label="Toggle sidebar"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
        </svg>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed top-16 left-0 h-[calc(100vh-4rem)] w-72 bg-white border-r border-gray-200 z-40 transform transition-transform duration-300 ease-in-out overflow-y-auto
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0
      `}>
        <div className="flex flex-col h-full">
          {/* User Profile Section */}
          <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-blue-50">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-lg shadow-md">
                  {user.fullName.split(' ').map(n => n[0]).join('').toUpperCase()}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-1">
                  <p className="text-sm font-semibold text-gray-900 truncate">
                    {user.fullName}
                  </p>
                </div>
                <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getRoleBadgeColor(user.role)}`}>
                  {getRoleDisplayName(user.role)}
                </div>
                {user.installation && (
                  <p className="text-xs text-gray-600 mt-1 truncate">
                    {user.installation.name}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Navigation Sections */}
          <div className="flex-1 p-4 space-y-6">
            {/* Quick Actions */}
            {sidebarConfig.quickActions && sidebarConfig.quickActions.length > 0 && (
              <div className="space-y-2">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-2">
                  Quick Actions
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {sidebarConfig.quickActions.map((action) => (
                    <Link
                      key={action.id}
                      href={action.href}
                      onClick={() => setIsOpen(false)}
                      className="flex flex-col items-center p-3 text-center bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors border border-gray-200 hover:border-gray-300"
                    >
                      <span className="text-gray-600 mb-1">{action.icon()}</span>
                      <span className="text-xs font-medium text-gray-900">{action.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Menu Sections */}
            {sidebarConfig.sections.map((section) => (
              <div key={section.id} className="space-y-2">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="flex items-center justify-between w-full px-2 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wider hover:text-gray-700 transition-colors"
                >
                  <span>{section.title}</span>
                  <svg
                    className={`w-4 h-4 transform transition-transform ${
                      expandedSections.has(section.id) ? 'rotate-90' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {expandedSections.has(section.id) && (
                  <div className="space-y-1">
                    {section.items.map((item) => {
                      const isActive = pathname === item.href;
                      return (
                        <Link
                          key={item.id}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={`
                            group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200
                            ${isActive 
                              ? 'border shadow-sm' 
                              : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                            }
                          `}
                          style={isActive ? { backgroundColor: 'rgba(0, 24, 86, 0.1)', borderColor: '#001856', color: '#001856' } : {}}
                          title={item.description}
                        >
                          <span className={`mr-3 flex-shrink-0 ${isActive ? '' : 'text-gray-400 group-hover:text-gray-600'}`} style={isActive ? { color: '#001856' } : {}}>
                            {item.icon()}
                          </span>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <span className="truncate">{item.label}</span>
                              {item.badge && (
                                <span className="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            {item.description && !isActive && (
                              <p className="text-xs text-gray-500 mt-1 truncate group-hover:text-gray-600">
                                {item.description}
                              </p>
                            )}
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="p-4 border-t border-gray-200 space-y-2">
            <Link
              href="/dashboard/settings"
              className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Settings
            </Link>
            
            <button
              onClick={handleSignOutClick}
              className="flex items-center w-full px-3 py-2 text-sm font-medium text-red-700 rounded-lg hover:bg-red-50 transition-colors"
            >
              <svg className="w-5 h-5 mr-3 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Sign Out
            </button>
          </div>
        </div>
      </div>

      {/* Sign Out Modal */}
      {showSignOutModal && (
        <div 
          className="fixed inset-0 z-50 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="sign-out-title"
        >
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            {/* Background overlay */}
            <div 
              className="fixed inset-0 transition-opacity bg-black bg-opacity-30"
              onClick={handleCancelSignOut}
              aria-hidden="true"
            />

            {/* Modal panel */}
            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-lg relative z-10">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-red-100 rounded-full">
                <svg 
                  className="w-6 h-6 text-red-600" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
              </div>

              <div className="text-center">
                <h3 
                  id="sign-out-title"
                  className="text-lg font-medium leading-6 text-gray-900 mb-2"
                >
                  Sign Out
                </h3>
                <p className="text-sm text-gray-500 mb-6">
                  Are you sure you want to sign out? You'll need to sign in again to access your dashboard.
                </p>
              </div>

              <div className="flex space-x-3">
                <button
                  type="button"
                  onClick={handleCancelSignOut}
                  className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleConfirmSignOut}
                  className="flex-1 px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
