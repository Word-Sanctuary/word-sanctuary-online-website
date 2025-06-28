'use client';

import { usePathname } from 'next/navigation';
import Footer from '@/components/Footer';

export default function ConditionalFooter() {
  const pathname = usePathname();
  
  // Don't render footer on signup page or dashboard pages
  if (pathname === '/signup' || pathname.startsWith('/dashboard')) {
    return null;
  }
  
  return <Footer />;
}
