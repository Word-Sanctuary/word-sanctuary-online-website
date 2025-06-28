'use client';

import { usePathname } from 'next/navigation';
import Footer from '@/components/Footer';

export default function ConditionalFooter() {
  const pathname = usePathname();
  
  // Don't render footer on signup page
  if (pathname === '/signup') {
    return null;
  }
  
  return <Footer />;
}
