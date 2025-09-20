'use client';

import { AssetLogo } from '@/assets';
import Link from 'next/link';

export default function SignupNavbar() {
  return (
    <div className="w-full px-8 md:px-12 backdrop-blur-md flex justify-start items-center fixed top-0 z-50 h-20 border-b border-white/10 shadow-lg" style={{ backgroundColor: 'rgba(0, 24, 86, 0.95)', boxShadow: '0 10px 15px -3px rgba(0, 24, 86, 0.2)' }}>
      {/* Logo - Links to Home Page */}
      <Link href="/" className="transition-transform duration-300 hover:scale-105">
        <div className="w-32 h-12">
          <AssetLogo
            name="hq-and-global-main"
            size={144}
            className="w-full h-full object-cover"
            alt="HQ and Global Ministry Logo"
          />
        </div>
      </Link>
    </div>
  );
}
