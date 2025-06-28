'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { AssetLogo } from '@/assets';
import { Button } from '@/components/ui';
import Image from 'next/image';

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navItems = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '/about' },
    { name: 'INSTALLATIONS', href: '/installations' },
    { name: 'CONTACT US', href: '/contact' }
  ];

  // Determine active tab based on current pathname
  const getActiveTab = () => {
    const currentItem = navItems.find(item => item.href === pathname);
    return currentItem ? currentItem.name : 'HOME';
  };

  const activeTab = getActiveTab();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Update background state based on scroll position
      setIsScrolled(currentScrollY > 50);
      
      // Handle navbar visibility based on scroll direction
      if (currentScrollY === 0) {
        // At the top, always show navbar
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px, hide navbar
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up, show navbar
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu when navbar becomes hidden
  useEffect(() => {
    if (!isVisible && isMobileMenuOpen) {
      closeMobileMenu();
    }
  }, [isVisible, isMobileMenuOpen]);

  return (
    <>
      <div className={`w-full px-8 md:px-12 bg-sky-900/95 backdrop-blur-md flex justify-between items-center overflow-hidden fixed top-0 z-50 transition-all duration-300 ease-in-out border-b border-white/10 ${
        isScrolled ? 'h-16 shadow-lg shadow-sky-900/20' : 'h-20'
      } ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
        {/* Logo */}
        <div className={`transition-all duration-300 ${
          isScrolled ? 'w-28 h-10' : 'w-32 h-12'
        }`}>
          <AssetLogo
            name="hq-and-global-main"
            size={isScrolled ? 112 : 144}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            alt="HQ and Global Ministry Logo"
          />
        </div>
        
        {/* Navigation Items - Desktop (Centered) */}
        <div className="hidden md:flex justify-center items-center gap-8 lg:gap-12 flex-1">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className={`relative justify-start text-xs font-bold font-['Inter'] tracking-widest transition-all duration-300 ease-in-out hover:text-white hover:scale-105 transform group px-3 py-2 rounded-lg hover:bg-white/10 ${
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
        
        {/* Desktop Join Us Button and Mobile Menu Button */}
        <div className="flex items-center">
          {/* Join Us Button - Desktop Only */}
          <Button 
            variant="secondary"
            size="md"
            href="/signup"
            as="a"
            className="hidden md:block"
          >
            JOIN US
          </Button>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden w-6 h-6 relative transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-sky-900 rounded"
          >
            <div className={`transition-all duration-300 ${isMobileMenuOpen ? 'rotate-90' : 'rotate-0'}`}>
              <Image
                src="/icons/menu-04.svg"
                alt="Menu"
                width={25}
                height={25}
                className="w-full h-full filter brightness-0 invert"
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 md:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu */}
      <div className={`fixed top-4 right-4 left-4 z-50 md:hidden transition-all duration-300 ease-in-out ${
        isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}>
        <div className="w-full p-4 xs:p-6 sm:p-8 bg-sky-900 rounded-lg shadow-[0px_4px_30px_0px_rgba(255,255,255,0.12)] flex flex-col justify-start items-end gap-3 xs:gap-4 sm:gap-6">
          {/* Close Button */}
          <button 
            onClick={closeMobileMenu}
            className="w-6 h-6 relative overflow-hidden self-end transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/50 rounded hover:bg-white/10 p-1"
          >
            <Image
              src="/icons/x-close.svg"
              alt="Close"
              width={25}
              height={24}
              className="w-full h-full filter brightness-0 invert"
            />
          </button>
          
          {/* Navigation Items */}
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              onClick={closeMobileMenu}
              className={`w-full text-left transition-all duration-300 transform hover:scale-105 hover:translate-x-2 ${
                activeTab === item.name 
                  ? "text-white text-base xs:text-lg sm:text-2xl font-normal font-['Anton'] tracking-[2px] xs:tracking-[3px] sm:tracking-[4.80px]" 
                  : "text-zinc-400 text-base xs:text-lg sm:text-2xl font-normal font-['Anton'] tracking-[2px] xs:tracking-[3px] sm:tracking-[4.80px] hover:text-white"
              }`}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {item.name}
            </a>
          ))}
          
          {/* Join Us Button - Mobile */}
          <Button 
            variant="secondary"
            fullWidth
            href="/signup"
            as="a"
            onClick={closeMobileMenu}
            className="mt-2 xs:mt-2 sm:mt-4"
          >
            JOIN US
          </Button>
        </div>
      </div>
    </>
  );
}