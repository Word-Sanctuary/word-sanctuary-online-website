'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('HOME');
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '/about' },
    { name: 'INSTALLATIONS', href: '/installations' },
    { name: 'CONTACT US', href: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`w-full px-8 md:px-12 bg-sky-900/95 backdrop-blur-md flex justify-between items-center overflow-hidden fixed top-0 z-50 transition-all duration-300 ease-in-out ${
      isScrolled ? 'h-16 shadow-lg' : 'h-20'
    }`}>
      {/* Logo */}
      <div className={`shadow-[4.821428298950195px_4.821428298950195px_16.151784896850586px_0px_rgba(58,45,74,1.00)] shadow-[2.4107141494750977px_2.4107141494750977px_4.901785373687744px_0px_rgba(58,45,74,1.00)] transition-all duration-300 ${
        isScrolled ? 'w-28 h-10' : 'w-32 h-12'
      }`}>
        <Image
          src="/logo-placeholder.svg"
          alt="Word Sanctuary Logo"
          width={144}
          height={62}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      
      {/* Navigation Items */}
      <div className="hidden md:flex justify-start items-center gap-8 lg:gap-12">
        {navItems.map((item, index) => (
          <a
            key={item.name}
            href={item.href}
            onClick={() => setActiveTab(item.name)}
            className={`justify-start text-xs font-bold font-['Inter'] tracking-widest transition-all duration-300 ease-in-out hover:text-white hover:scale-105 transform ${
              activeTab === item.name ? 'text-white font-black' : 'text-zinc-400'
            }`}
            style={{
              animationDelay: `${index * 100}ms`
            }}
          >
            {item.name}
          </a>
        ))}
      </div>
      
      {/* Menu Icon */}
      <div className="w-6 h-6 relative overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-110 active:scale-95">
        <div className="w-4 h-3 left-[3px] top-[6px] absolute outline outline-2 outline-offset-[-1px] outline-blue-200 transition-colors duration-300 hover:outline-white" />
      </div>
    </div>
  );
}