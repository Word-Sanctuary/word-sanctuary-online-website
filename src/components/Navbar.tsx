'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('HOME');

  const navItems = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '/about' },
    { name: 'INSTALLATIONS', href: '/installations' },
    { name: 'CONTACT US', href: '/contact' }
  ];

  return (
    <div className="w-full h-24 px-12 bg-sky-900 flex justify-between items-center overflow-hidden">
      {/* Logo */}
      <div className="w-36 h-16 shadow-[4.821428298950195px_4.821428298950195px_16.151784896850586px_0px_rgba(58,45,74,1.00)] shadow-[2.4107141494750977px_2.4107141494750977px_4.901785373687744px_0px_rgba(58,45,74,1.00)]">
        <Image
          src="/logo-placeholder.svg"
          alt="Word Sanctuary Logo"
          width={144}
          height={62}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Navigation Items */}
      <div className="flex justify-start items-center gap-12">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={() => setActiveTab(item.name)}
            className={`justify-start text-xs font-bold font-['Inter'] tracking-widest transition-colors hover:text-white ${
              activeTab === item.name ? 'text-white font-black' : 'text-zinc-400'
            }`}
          >
            {item.name}
          </a>
        ))}
      </div>
      
      {/* Menu Icon */}
      <div className="w-6 h-6 relative overflow-hidden">
        <div className="w-4 h-3 left-[3px] top-[6px] absolute outline outline-2 outline-offset-[-1px] outline-blue-200" />
      </div>
    </div>
  );
}