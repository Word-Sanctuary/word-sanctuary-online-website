'use client';

import { AssetLogo } from '@/assets';
import Link from 'next/link';

export default function SignupNavbar() {
  return (
    <div className="w-full px-8 md:px-12 bg-sky-900/95 backdrop-blur-md flex justify-start items-center fixed top-0 z-50 h-20 border-b border-white/10 shadow-lg shadow-sky-900/20">
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
