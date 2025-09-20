'use client';

import { ReactNode } from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

interface DashboardLayoutRootProps {
  children: ReactNode;
}

export default function DashboardLayoutRoot({ children }: DashboardLayoutRootProps) {
  return (
    <DashboardLayout>
      {children}
    </DashboardLayout>
  );
}
