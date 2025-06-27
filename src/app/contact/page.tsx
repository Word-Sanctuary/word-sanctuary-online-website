import Navbar from "@/components/Navbar";

export default function Contact() {
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
                Where Help Meets Hope — 
              </span>
              <span className="text-sky-400 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight block font-sans">
                Get in Touch
              </span>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
