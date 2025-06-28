"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Installations() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <Hero
        useCarousel={true}
        title={{
          primary: "STEP INTO A COMMUNITY IN HEAVEN ",
          secondary: "AND EVERY SOUL MATTERS."
        }}
        ctaButton={{
          text: "JOIN US",
          onClick: () => {
            window.location.href = '/signup';
          }
        }}
      />
      
      {/* Installations Section */}
      <section className="w-full bg-white p-4 sm:p-6 md:p-8 lg:p-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="h-8 sm:h-10 px-4 sm:px-6 py-2 sm:py-2.5 bg-zinc-400/40 rounded-[100px] backdrop-blur-[2px] inline-flex justify-center items-center gap-4 mb-6 sm:mb-8">
              <div className="w-2 h-2 bg-sky-900 rounded-full" />
              <div className="justify-center text-sky-900 text-[10px] font-bold font-['Inter']">INSTALLATIONS</div>
            </div>
            <h2 className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal font-anton leading-tight mb-4 sm:mb-6">
              JOIN US IN OVER 70 INSTALLATIONS <br className="hidden sm:block"/>
              <span className="sm:hidden">WORLD WIDE</span>
              <span className="hidden sm:inline">WORLD WIDE</span>
            </h2>
            <p className="text-center max-w-2xl mx-auto">
              <span className="text-stone-500 text-sm sm:text-base font-normal font-['Lato'] leading-snug">The Heavenly Jerusalem; a Church that is </span>
              <span className="text-black text-sm sm:text-base font-bold font-['Lato'] leading-snug">HEAVEN!</span>
            </p>
          </div>

          {/* Installation Cards Grid */}
          <div className="space-y-6 sm:space-y-8">
            {/* First Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="h-64 sm:h-80 lg:h-96 relative bg-gradient-to-br from-amber-600 via-orange-500 to-red-600 rounded-lg overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                  <div className="text-white text-xl sm:text-2xl lg:text-3xl font-bold font-['Lato'] mb-1">Ilorin</div>
                  <div className="text-white text-xs sm:text-sm font-normal font-['Lato'] opacity-90">Address in subtext</div>
                </div>
              </div>
              <div className="h-64 sm:h-80 lg:h-96 relative bg-gradient-to-br from-blue-600 via-indigo-500 to-purple-600 rounded-lg overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                  <div className="text-white text-xl sm:text-2xl lg:text-3xl font-bold font-['Lato'] mb-1">Abuja</div>
                  <div className="text-white text-xs sm:text-sm font-normal font-['Lato'] opacity-90">Address in subtext</div>
                </div>
              </div>
              <div className="h-64 sm:h-80 lg:h-96 relative bg-gradient-to-br from-cyan-500 via-blue-500 to-blue-700 rounded-lg overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                  <div className="text-white text-xl sm:text-2xl lg:text-3xl font-bold font-['Lato'] mb-1">Lagos</div>
                  <div className="text-white text-xs sm:text-sm font-normal font-['Lato'] opacity-90">Address in subtext</div>
                </div>
              </div>
              <div className="h-64 sm:h-80 lg:h-96 relative bg-gradient-to-br from-green-600 via-emerald-500 to-teal-600 rounded-lg overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                  <div className="text-white text-xl sm:text-2xl lg:text-3xl font-bold font-['Lato'] mb-1">Ibadan</div>
                  <div className="text-white text-xs sm:text-sm font-normal font-['Lato'] opacity-90">Address in subtext</div>
                </div>
              </div>
            </div>
            
            {/* Second Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="h-64 sm:h-80 lg:h-96 relative bg-gradient-to-br from-slate-600 via-gray-500 to-zinc-600 rounded-lg overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                  <div className="text-white text-xl sm:text-2xl lg:text-3xl font-bold font-['Lato'] mb-1">United Kingdom</div>
                  <div className="text-white text-xs sm:text-sm font-normal font-['Lato'] opacity-90">Address in subtext</div>
                </div>
              </div>
              <div className="h-64 sm:h-80 lg:h-96 relative bg-gradient-to-br from-purple-600 via-pink-500 to-rose-600 rounded-lg overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                  <div className="text-white text-xl sm:text-2xl lg:text-3xl font-bold font-['Lato'] mb-1">Osogbo</div>
                  <div className="text-white text-xs sm:text-sm font-normal font-['Lato'] opacity-90">Address in subtext</div>
                </div>
              </div>
              <div className="h-64 sm:h-80 lg:h-96 relative bg-gradient-to-br from-yellow-600 via-orange-500 to-red-500 rounded-lg overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                  <div className="text-white text-xl sm:text-2xl lg:text-3xl font-bold font-['Lato'] mb-1">Kano</div>
                  <div className="text-white text-xs sm:text-sm font-normal font-['Lato'] opacity-90">Address in subtext</div>
                </div>
              </div>
              <div className="h-64 sm:h-80 lg:h-96 relative bg-gradient-to-br from-indigo-600 via-blue-500 to-cyan-500 rounded-lg overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                  <div className="text-white text-xl sm:text-2xl lg:text-3xl font-bold font-['Lato'] mb-1">Kaduna</div>
                  <div className="text-white text-xs sm:text-sm font-normal font-['Lato'] opacity-90">Address in subtext</div>
                </div>
              </div>
            </div>
            
            {/* Third Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="h-64 sm:h-80 lg:h-96 relative bg-gradient-to-br from-emerald-600 via-green-500 to-lime-600 rounded-lg overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                  <div className="text-white text-xl sm:text-2xl lg:text-3xl font-bold font-['Lato'] mb-1">Oyo</div>
                  <div className="text-white text-xs sm:text-sm font-normal font-['Lato'] opacity-90">Address in subtext</div>
                </div>
              </div>
              <div className="h-64 sm:h-80 lg:h-96 relative bg-gradient-to-br from-teal-600 via-cyan-500 to-blue-500 rounded-lg overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                  <div className="text-white text-xl sm:text-2xl lg:text-3xl font-bold font-['Lato'] mb-1">Ado-Ekiti</div>
                  <div className="text-white text-xs sm:text-sm font-normal font-['Lato'] opacity-90">Address in subtext</div>
                </div>
              </div>
              <div className="h-64 sm:h-80 lg:h-96 relative bg-gradient-to-br from-rose-600 via-pink-500 to-purple-600 rounded-lg overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                  <div className="text-white text-xl sm:text-2xl lg:text-3xl font-bold font-['Lato'] mb-1">Lokoja</div>
                  <div className="text-white text-xs sm:text-sm font-normal font-['Lato'] opacity-90">Address in subtext</div>
                </div>
              </div>
              <div className="h-64 sm:h-80 lg:h-96 relative bg-gradient-to-br from-orange-600 via-amber-500 to-yellow-500 rounded-lg overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                  <div className="text-white text-xl sm:text-2xl lg:text-3xl font-bold font-['Lato'] mb-1">Abeokuta</div>
                  <div className="text-white text-xs sm:text-sm font-normal font-['Lato'] opacity-90">Address in subtext</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* See More Button */}
          <div className="text-center mt-8 sm:mt-10 lg:mt-12">
            <button className="w-36 sm:w-44 h-9 sm:h-10 py-2 sm:py-2.5 bg-sky-500 rounded-[100px] inline-flex justify-center items-center gap-2 hover:bg-sky-600 transition-colors">
              <div className="justify-center text-white text-xs sm:text-sm font-semibold font-['Lato'] tracking-wide">SEE MORE</div>
              <div className="w-3 h-3 relative overflow-hidden">
                <svg className="w-2 h-1.5 absolute left-[2px] top-[3px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </section>
      
    </div>
  );
}
