"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { Button, AccountSection, AccountCard } from "@/components/ui";
import Image from "next/image";
import { useState } from "react";

export default function Givings() {
  const [copiedAccount, setCopiedAccount] = useState<{[key: string]: boolean}>({});

  const handleCopy = async (accountNumber: string, section: string) => {
    const uniqueKey = `${section}-${accountNumber}`;
    try {
      await navigator.clipboard.writeText(accountNumber);
      setCopiedAccount(prev => ({ ...prev, [uniqueKey]: true }));
      // Reset the copied state after 2 seconds
      setTimeout(() => setCopiedAccount(prev => ({ ...prev, [uniqueKey]: false })), 2000);
    } catch (err) {
      console.error('Failed to copy account number:', err);
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = accountNumber;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopiedAccount(prev => ({ ...prev, [uniqueKey]: true }));
      setTimeout(() => setCopiedAccount(prev => ({ ...prev, [uniqueKey]: false })), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <Hero
        useCarousel={false}
        title={{
          primary: "BE A PART OF SHARING JESUS WITH THE WORLD.",
        }}
        staticImage={"/images/optimized/hero-carousel/10Artboard 1 (2).webp"}
      />
      
      {/* Giving Options Section */}
      <section className="w-full bg-white px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-12 lg:px-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center gap-6 sm:gap-8 md:gap-10">
            <div className="flex flex-col items-center gap-4 sm:gap-6">
              <div className="h-8 sm:h-10 px-4 sm:px-6 py-2 sm:py-2.5 bg-zinc-400/40 rounded-[100px] backdrop-blur-[2px] inline-flex justify-center items-center gap-3 sm:gap-4">
                <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-sky-900 rounded-full" />
                <div className="justify-center text-sky-900 text-[9px] sm:text-[10px] font-bold font-['Lato']">GIVING</div>
              </div>
              <div className="text-center text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal font-['Anton'] uppercase leading-tight sm:leading-[1.2] md:leading-[1.1] lg:leading-[59px] px-2">How You Can Give</div>
              <div className="text-center max-w-2xl px-4">
                <span className="text-stone-500 text-sm sm:text-base font-normal font-['Lato'] leading-relaxed">Faith in action, resources with purpose — </span>
                <span className="text-stone-500 text-sm sm:text-base font-bold font-['Lato'] leading-relaxed">Partnering with God to spread His word.</span>
              </div>
            </div>
            <div className="w-full space-y-6 sm:space-y-8">
                {/* Naira Account Section */}
                <div className="relative w-full">
                  <div className="bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-sky-900/30 p-4 sm:p-6 md:p-8 w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                      <div className="p-3 sm:p-4 rounded-lg outline outline-1 outline-offset-[-1px] outline-sky-900/30 flex justify-between items-center gap-3 sm:gap-4">
                        <div className="flex flex-col gap-1 flex-1 min-w-0">
                          <div className="text-zinc-400 text-xs sm:text-sm font-normal font-['Lato']">ACCESS BANK</div>
                          <div className="text-black text-lg sm:text-xl md:text-2xl lg:text-4xl font-medium font-['Lato'] break-all">1234567890</div>
                        </div>
                        <div className="w-8 h-8 sm:w-9 sm:h-9 cursor-pointer hover:opacity-70 transition-opacity flex-shrink-0 relative group" onClick={() => handleCopy("1234567890", "naira")}>
                          <Image 
                            src="/icons/copy-01.svg" 
                            alt="Copy" 
                            width={36}
                            height={36}
                            className="w-full h-full"
                          />
                          {copiedAccount["naira-1234567890"] && (
                            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                              Copied!
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="p-3 sm:p-4 rounded-lg outline outline-1 outline-offset-[-1px] outline-sky-900/30 flex justify-between items-center gap-3 sm:gap-4">
                        <div className="flex flex-col gap-1 flex-1 min-w-0">
                          <div className="text-zinc-400 text-xs sm:text-sm font-normal font-['Lato']">GTBANK</div>
                          <div className="text-black text-lg sm:text-xl md:text-2xl lg:text-4xl font-medium font-['Lato'] break-all">0987654321</div>
                        </div>
                        <div className="w-8 h-8 sm:w-9 sm:h-9 cursor-pointer hover:opacity-70 transition-opacity flex-shrink-0 relative group" onClick={() => handleCopy("0987654321", "naira")}>
                          <Image 
                            src="/icons/copy-01.svg" 
                            alt="Copy" 
                            width={36}
                            height={36}
                            className="w-full h-full"
                          />
                          {copiedAccount["naira-0987654321"] && (
                            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                              Copied!
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="p-3 sm:p-4 rounded-lg outline outline-1 outline-offset-[-1px] outline-sky-900/30 flex justify-between items-center gap-3 sm:gap-4 sm:col-span-2 lg:col-span-1">
                        <div className="flex flex-col gap-1 flex-1 min-w-0">
                          <div className="text-zinc-400 text-xs sm:text-sm font-normal font-['Lato']">ZENITH BANK</div>
                          <div className="text-black text-lg sm:text-xl md:text-2xl lg:text-4xl font-medium font-['Lato'] break-all">1122334455</div>
                        </div>
                        <div className="w-8 h-8 sm:w-9 sm:h-9 cursor-pointer hover:opacity-70 transition-opacity flex-shrink-0 relative group" onClick={() => handleCopy("1122334455", "naira")}>
                          <Image 
                            src="/icons/copy-01.svg" 
                            alt="Copy" 
                            width={36}
                            height={36}
                            className="w-full h-full"
                          />
                          {copiedAccount["naira-1122334455"] && (
                            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                              Copied!
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-2 sm:-top-3 left-4 sm:left-6 px-4 sm:px-7 py-1.5 sm:py-2 bg-white rounded-[50px] outline outline-1 outline-offset-[-1px] outline-sky-900/30">
                    <div className="text-black text-xs sm:text-sm font-bold font-['Lato']">NAIRA ACCOUNT</div>
                  </div>
                </div>

                {/* Domiciliary Account Section */}
                <div className="relative w-full">
                  <div className="bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-sky-900/30 p-4 sm:p-6 md:p-8 w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                      <div className="p-3 sm:p-4 rounded-lg outline outline-1 outline-offset-[-1px] outline-sky-900/30 flex justify-between items-center gap-3 sm:gap-4">
                        <div className="flex flex-col gap-1 flex-1 min-w-0">
                          <div className="text-zinc-400 text-xs sm:text-sm font-normal font-['Lato']">ACCESS BANK</div>
                          <div className="text-black text-lg sm:text-xl md:text-2xl lg:text-4xl font-medium font-['Lato'] break-all">1234567890</div>
                        </div>
                        <div className="w-8 h-8 sm:w-9 sm:h-9 cursor-pointer hover:opacity-70 transition-opacity flex-shrink-0 relative group" onClick={() => handleCopy("1234567890", "domiciliary")}>
                          <Image 
                            src="/icons/copy-01.svg" 
                            alt="Copy" 
                            width={36}
                            height={36}
                            className="w-full h-full"
                          />
                          {copiedAccount["domiciliary-1234567890"] && (
                            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                              Copied!
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="p-3 sm:p-4 rounded-lg outline outline-1 outline-offset-[-1px] outline-sky-900/30 flex justify-between items-center gap-3 sm:gap-4">
                        <div className="flex flex-col gap-1 flex-1 min-w-0">
                          <div className="text-zinc-400 text-xs sm:text-sm font-normal font-['Lato']">GTBANK</div>
                          <div className="text-black text-lg sm:text-xl md:text-2xl lg:text-4xl font-medium font-['Lato'] break-all">0987654321</div>
                        </div>
                        <div className="w-8 h-8 sm:w-9 sm:h-9 cursor-pointer hover:opacity-70 transition-opacity flex-shrink-0 relative group" onClick={() => handleCopy("0987654321", "domiciliary")}>
                          <Image 
                            src="/icons/copy-01.svg" 
                            alt="Copy" 
                            width={36}
                            height={36}
                            className="w-full h-full"
                          />
                          {copiedAccount["domiciliary-0987654321"] && (
                            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                              Copied!
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="p-3 sm:p-4 rounded-lg outline outline-1 outline-offset-[-1px] outline-sky-900/30 flex justify-between items-center gap-3 sm:gap-4 sm:col-span-2 lg:col-span-1">
                        <div className="flex flex-col gap-1 flex-1 min-w-0">
                          <div className="text-zinc-400 text-xs sm:text-sm font-normal font-['Lato']">ZENITH BANK</div>
                          <div className="text-black text-lg sm:text-xl md:text-2xl lg:text-4xl font-medium font-['Lato'] break-all">1122334455</div>
                        </div>
                        <div className="w-8 h-8 sm:w-9 sm:h-9 cursor-pointer hover:opacity-70 transition-opacity flex-shrink-0 relative group" onClick={() => handleCopy("1122334455", "domiciliary")}>
                          <Image 
                            src="/icons/copy-01.svg" 
                            alt="Copy" 
                            width={36}
                            height={36}
                            className="w-full h-full"
                          />
                          {copiedAccount["domiciliary-1122334455"] && (
                            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                              Copied!
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-2 sm:-top-3 left-4 sm:left-6 px-4 sm:px-7 py-1.5 sm:py-2 bg-white rounded-[50px] outline outline-1 outline-offset-[-1px] outline-sky-900/30">
                    <div className="text-black text-xs sm:text-sm font-bold font-['Lato']">DOMICILIARY ACCOUNT</div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
