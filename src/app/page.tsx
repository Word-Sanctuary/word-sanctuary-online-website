import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-sky-800 to-blue-700 flex items-end justify-center pb-32">
        {/* Background overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Background pattern effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 inline-flex flex-col justify-start items-center gap-9 px-6 text-center">
          <div className="flex flex-col justify-start items-center gap-6">
            {/* Our Mandate Badge */}
            <div className="h-10 px-6 py-2.5 bg-white/40 rounded-full outline outline-1 outline-offset-[-1px] outline-white backdrop-blur-sm inline-flex justify-center items-center gap-4">
              <div className="w-2 h-2 bg-sky-900 rounded-full" />
              <div className="justify-center text-white text-xs font-bold tracking-wide">OUR MANDATE</div>
            </div>
            
            {/* Main Heading */}
            <div className="text-center justify-center max-w-4xl">
              <span className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight block font-sans">
                MAKING A FAMILY FOR GOD
              </span>
              <span className="text-sky-400 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight block font-sans">
                ON EARTH!
              </span>
            </div>
          </div>
          
          {/* CTA Button */}
          <button className="h-11 px-8 py-2.5 bg-white rounded-full inline-flex justify-center items-center gap-2.5 hover:bg-gray-100 transition-colors shadow-lg">
            <div className="justify-center text-black text-sm font-bold tracking-wide">JOIN US ON YOUTUBE</div>
          </button>
        </div>
      </section>
      
      {/* Welcome to Mount Zion Section */}
      <section className="w-full p-12 flex flex-col justify-start items-start gap-4 bg-white">
        <div className="max-w-[702px] flex flex-col justify-start items-start gap-8">
          {/* Welcome Badge */}
          <div className="h-10 px-6 py-2.5 bg-zinc-200 rounded-full backdrop-blur-sm inline-flex justify-center items-center gap-4">
            <div className="w-2 h-2 bg-sky-900 rounded-full" />
            <div className="justify-center text-sky-900 text-[10px] font-bold tracking-wide">WELCOME TO WORD SANCTUARY GLOBAL</div>
          </div>
          
          {/* Heading and Description */}
          <div className="w-full flex flex-col justify-start items-start gap-4">
            <div className="w-full flex flex-col justify-start items-start gap-8">
              <h2 className="w-full text-black text-5xl font-normal">WELCOME TO MOUNT ZION</h2>
              <div className="w-full">
                <span className="text-stone-500 text-sm font-normal leading-snug">
                  The Heavenly Jerusalem; a Church that is 
                </span>
                <span className="text-black text-sm font-bold leading-snug">
                  {" HEAVEN!"}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Feature Cards */}
        <div className="w-full flex justify-start items-start gap-6">
          {/* About Us Card */}
          <div className="flex-1 h-96 relative bg-zinc-700 rounded-lg overflow-hidden group cursor-pointer">
            {/* Background Image Placeholder */}
            <div className="w-full h-full absolute bg-gradient-to-br from-zinc-600 to-zinc-800" />
            <div className="absolute inset-0 bg-zinc-700/60" />
            
            {/* Card Content */}
            <div className="w-36 h-80 left-[24px] top-[24px] absolute flex flex-col justify-between items-start">
              <div className="w-full flex flex-col justify-start items-start gap-1.5">
                <div className="w-full text-neutral-200 text-[10px] font-bold tracking-wide">WHO ARE WE?</div>
                <div className="w-full text-white text-3xl font-bold">About Us</div>
              </div>
              <div className="flex justify-start items-center gap-1 group-hover:gap-2 transition-all">
                <div className="text-neutral-200 text-[10px] font-bold tracking-wide">LEARN MORE</div>
                <div className="w-3 h-3 relative overflow-hidden">
                  <svg className="w-2 h-1.5 absolute left-[2px] top-[3px] text-neutral-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Community Card */}
          <div className="flex-1 h-96 relative bg-blue-600 rounded-lg overflow-hidden group cursor-pointer">
            {/* Background Image Placeholder */}
            <div className="w-full h-full absolute bg-gradient-to-br from-blue-500 to-blue-700" />
            <div className="absolute inset-0 bg-blue-600/50" />
            
            {/* Card Content */}
            <div className="h-80 left-[24px] top-[24px] absolute flex flex-col justify-between items-start">
              <div className="flex flex-col justify-start items-start gap-1.5">
                <div className="w-full text-neutral-200 text-[10px] font-bold tracking-wide">JOIN OUR COMMUNITY</div>
                <div className="text-white text-3xl font-bold">Community</div>
              </div>
              <div className="flex justify-start items-center gap-1 group-hover:gap-2 transition-all">
                <div className="text-neutral-200 text-[10px] font-bold tracking-wide">LEARN MORE</div>
                <div className="w-3 h-3 relative overflow-hidden">
                  <svg className="w-2 h-1.5 absolute left-[2px] top-[3px] text-neutral-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Celebration Card */}
          <div className="flex-1 h-96 relative bg-blue-600 rounded-lg overflow-hidden group cursor-pointer">
            {/* Background Image Placeholder */}
            <div className="w-full h-full absolute bg-gradient-to-br from-blue-500 to-blue-700" />
            <div className="absolute inset-0 bg-blue-600/50" />
            
            {/* Card Content */}
            <div className="h-80 left-[24px] top-[25px] absolute flex flex-col justify-between items-start">
              <div className="w-full flex flex-col justify-start items-start gap-1.5">
                <div className="w-full text-neutral-200 text-[10px] font-bold tracking-wide">JOIN US SPECIAL SERVICES</div>
                <div className="text-white text-3xl font-bold">Celebration</div>
              </div>
              <div className="flex justify-start items-center gap-1 group-hover:gap-2 transition-all">
                <div className="text-neutral-200 text-[10px] font-bold tracking-wide">LEARN MORE</div>
                <div className="w-3 h-3 relative overflow-hidden">
                  <svg className="w-2 h-1.5 absolute left-[2px] top-[3px] text-neutral-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
