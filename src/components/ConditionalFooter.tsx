'use client';

import { usePathname } from 'next/navigation';
import Footer from '@/components/Footer';

export default function ConditionalFooter() {
  const pathname = usePathname();
  
  // Don't render footer on signin, signup pages or dashboard pages
  if (pathname === '/signin' || pathname === '/signup' || pathname.startsWith('/dashboard')) {
    return null;
  }
  
  return <Footer />;
}
