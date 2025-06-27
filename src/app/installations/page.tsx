import Navbar from "@/components/Navbar";

export default function Installations() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-sky-800 to-blue-700 flex items-end justify-center pb-16 pt-20">
        {/* Background overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Background pattern effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 inline-flex flex-col justify-start items-center gap-9 px-6 text-center">
          <div className="flex flex-col justify-start items-center gap-6">
            {/* Main Heading */}
            <div className="text-center justify-center max-w-4xl">
              <span className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight block font-sans">
                Step into a community in Heaven 
              </span>
              <span className="text-sky-400 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight block font-sans">
                and every soul matters.
              </span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Installations Section */}
      <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="h-10 px-6 py-2.5 bg-zinc-400/40 rounded-[100px] backdrop-blur-[2px] inline-flex justify-center items-center gap-4 mb-8">
              <div className="w-2 h-2 bg-sky-900 rounded-full" />
              <div className="justify-center text-sky-900 text-[10px] font-bold font-['Inter']">INSTALLATIONS</div>
            </div>
            <h2 className="text-black text-4xl sm:text-5xl font-normal font-['Anton'] leading-tight mb-6">
              JOIN US IN OVER 70 INSTALLATIONS <br/>WORLD WIDE
            </h2>
            <p className="text-center max-w-2xl mx-auto">
              <span className="text-stone-500 text-sm font-normal font-['Lato'] leading-snug">The Heavenly Jerusalem; a Church that is </span>
              <span className="text-black text-sm font-bold font-['Lato'] leading-snug">HEAVEN!</span>
            </p>
          </div>

          {/* Installation Cards Grid */}
          <div className="space-y-8">
            {/* First Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="h-80 sm:h-96 relative bg-gradient-to-br from-amber-600 via-orange-500 to-red-600 rounded-lg overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="text-white text-2xl sm:text-3xl font-bold font-['Lato'] mb-1">Ilorin</div>
                  <div className="text-white text-xs sm:text-sm font-normal font-['Lato'] opacity-90">Address in subtext</div>
                </div>
              </div>
              <div className="h-80 sm:h-96 relative bg-gradient-to-br from-blue-600 via-indigo-500 to-purple-600 rounded-lg overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="text-white text-2xl sm:text-3xl font-bold font-['Lato'] mb-1">Abuja</div>
                  <div className="text-white text-xs sm:text-sm font-normal font-['Lato'] opacity-90">Address in subtext</div>
                </div>
              </div>
              <div className="h-80 sm:h-96 relative bg-gradient-to-br from-cyan-500 via-blue-500 to-blue-700 rounded-lg overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="text-white text-2xl sm:text-3xl font-bold font-['Lato'] mb-1">Lagos</div>
                  <div className="text-white text-xs sm:text-sm font-normal font-['Lato'] opacity-90">Address in subtext</div>
                </div>
              </div>
              <div className="h-80 sm:h-96 relative bg-gradient-to-br from-green-600 via-emerald-500 to-teal-600 rounded-lg overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="text-white text-2xl sm:text-3xl font-bold font-['Lato'] mb-1">Ibadan</div>
                  <div className="text-white text-xs sm:text-sm font-normal font-['Lato'] opacity-90">Address in subtext</div>
                </div>
              </div>
            </div>
            
            {/* Second Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="h-80 sm:h-96 relative bg-gradient-to-br from-slate-600 via-gray-500 to-zinc-600 rounded-lg overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="text-white text-2xl sm:text-3xl font-bold font-['Lato'] mb-1">United Kingdom</div>
                  <div className="text-white text-xs sm:text-sm font-normal font-['Lato'] opacity-90">Address in subtext</div>
                </div>
              </div>
              <div className="h-80 sm:h-96 relative bg-gradient-to-br from-purple-600 via-pink-500 to-rose-600 rounded-lg overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="text-white text-2xl sm:text-3xl font-bold font-['Lato'] mb-1">Osogbo</div>
                  <div className="text-white text-xs sm:text-sm font-normal font-['Lato'] opacity-90">Address in subtext</div>
                </div>
              </div>
              <div className="h-80 sm:h-96 relative bg-gradient-to-br from-yellow-600 via-orange-500 to-red-500 rounded-lg overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="text-white text-2xl sm:text-3xl font-bold font-['Lato'] mb-1">Kano</div>
                  <div className="text-white text-xs sm:text-sm font-normal font-['Lato'] opacity-90">Address in subtext</div>
                </div>
              </div>
              <div className="h-80 sm:h-96 relative bg-gradient-to-br from-indigo-600 via-blue-500 to-cyan-500 rounded-lg overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="text-white text-2xl sm:text-3xl font-bold font-['Lato'] mb-1">Kaduna</div>
                  <div className="text-white text-xs sm:text-sm font-normal font-['Lato'] opacity-90">Address in subtext</div>
                </div>
              </div>
            </div>
            
            {/* Third Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="h-80 sm:h-96 relative bg-gradient-to-br from-emerald-600 via-green-500 to-lime-600 rounded-lg overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="text-white text-2xl sm:text-3xl font-bold font-['Lato'] mb-1">Oyo</div>
                  <div className="text-white text-xs sm:text-sm font-normal font-['Lato'] opacity-90">Address in subtext</div>
                </div>
              </div>
              <div className="h-80 sm:h-96 relative bg-gradient-to-br from-teal-600 via-cyan-500 to-blue-500 rounded-lg overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="text-white text-2xl sm:text-3xl font-bold font-['Lato'] mb-1">Ado-Ekiti</div>
                  <div className="text-white text-xs sm:text-sm font-normal font-['Lato'] opacity-90">Address in subtext</div>
                </div>
              </div>
              <div className="h-80 sm:h-96 relative bg-gradient-to-br from-rose-600 via-pink-500 to-purple-600 rounded-lg overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="text-white text-2xl sm:text-3xl font-bold font-['Lato'] mb-1">Lokoja</div>
                  <div className="text-white text-xs sm:text-sm font-normal font-['Lato'] opacity-90">Address in subtext</div>
                </div>
              </div>
              <div className="h-80 sm:h-96 relative bg-gradient-to-br from-orange-600 via-amber-500 to-yellow-500 rounded-lg overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="text-white text-2xl sm:text-3xl font-bold font-['Lato'] mb-1">Abeokuta</div>
                  <div className="text-white text-xs sm:text-sm font-normal font-['Lato'] opacity-90">Address in subtext</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* See More Button */}
          <div className="text-center mt-12">
            <button className="w-44 h-10 py-2.5 bg-sky-500 rounded-[100px] inline-flex justify-center items-center gap-2 hover:bg-sky-600 transition-colors">
              <div className="justify-center text-white text-sm font-semibold font-['Lato'] tracking-wide">SEE MORE</div>
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
