"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InstallationCarousel from "@/components/InstallationCarousel";
import CommunitySection from "@/components/CommunitySection";
import Image from "next/image";

export default function Home() {
  // Installation data for the carousel
  const installations = [
    {
      name: "Ilorin",
      image: "/images/ilorin.png",
      address: "Address in subtext"
    },
    {
      name: "Abuja", 
      image: "/images/abuja.jpg",
      address: "Address in subtext"
    },
    {
      name: "Lagos",
      image: "/images/lagos.png", 
      address: "Address in subtext"
    },
    {
      name: "Ibadan",
      image: "/images/ibadan.png",
      address: "Address in subtext"
    },
    {
      name: "United Kingdom",
      image: "/images/unitedkingdom.png",
      address: "Address in subtext"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero
        useCarousel={true}
        badge={{
          text: "OUR MANDATE",
          showDot: true
        }}
        title={{
          primary: "MAKING A FAMILY FOR GOD",
          secondary: "ON EARTH!"
        }}
        ctaButton={{
          text: "JOIN US ON YOUTUBE",
          onClick: () => {
            // Add your YouTube link logic here
            window.open('https://youtube.com/@wordsanctuaryglobal', '_blank');
          }
        }}
      />

      {/* Welcome to Mount Zion Section */}
      <section className="w-full p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-center gap-4 sm:gap-6 md:gap-8 bg-white">
        <div className="w-full max-w-[702px] flex flex-col justify-start items-center gap-4 sm:gap-6 md:gap-8">
          {/* Welcome Badge */}
          <div className="h-8 sm:h-10 px-4 sm:px-6 py-2 sm:py-2.5 bg-zinc-200 rounded-full backdrop-blur-sm inline-flex justify-center items-center gap-2 sm:gap-4">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-sky-900 rounded-full" />
            <div className="justify-center text-sky-900 text-[10px] sm:text-xs font-bold tracking-wide">WELCOME TO WORD SANCTUARY GLOBAL</div>
          </div>

          {/* Heading and Description */}
          <div className="w-full flex flex-col justify-start items-center gap-3 sm:gap-4">
            <div className="w-full flex flex-col justify-start items-center gap-4 sm:gap-6 md:gap-8">
              <h2 className="w-full text-center text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal font-lato leading-tight">WELCOME TO MOUNT ZION</h2>
              <div className="w-full text-center font-inter">
                <span className="text-stone-500 text-sm sm:text-base font-normal leading-snug">
                  The Heavenly Jerusalem; a Church that is
                </span>
                <span className="text-black text-sm sm:text-base font-bold leading-snug">
                  {" HEAVEN!"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="w-full flex flex-col md:flex-row justify-start items-start gap-4 sm:gap-6">
          {/* About Us Card */}
          <div className="w-full md:flex-1 h-64 sm:h-80 md:h-96 relative bg-zinc-700 rounded-lg overflow-hidden group cursor-pointer">
            {/* Background Image */}
            <Image
              src="/images/image2.png"
              alt="About Us"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-zinc-700/60" />

            {/* Card Content */}
            <div className="w-28 sm:w-32 md:w-36 h-48 sm:h-64 md:h-80 left-[16px] sm:left-[20px] md:left-[24px] top-[16px] sm:top-[20px] md:top-[24px] absolute flex flex-col justify-between items-start">
              <div className="w-full flex flex-col justify-start items-start gap-1 sm:gap-1.5">
                <div className="w-full text-neutral-200 text-[10px] sm:text-xs md:text-sm font-bold tracking-wide font-inter">WHO ARE WE?</div>
                <div className="w-full text-white text-2xl sm:text-3xl md:text-4xl font-bold font-lato">About Us</div>
              </div>
              <div className="flex justify-start items-center gap-1 group-hover:gap-2 transition-all">
                <div className="text-neutral-200 text-[10px] sm:text-xs md:text-sm font-bold tracking-wide font-inter">LEARN MORE</div>
                <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 relative overflow-hidden">
                  <svg className="w-1.5 sm:w-2 h-1 sm:h-1.5 absolute left-[2px] top-[2px] sm:top-[3px] text-neutral-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Community Card */}
          <div className="w-full md:flex-1 h-64 sm:h-80 md:h-96 relative bg-blue-600 rounded-lg overflow-hidden group cursor-pointer">
            {/* Background Image */}
            <Image
              src="/images/image3.png"
              alt="Community"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-blue-600/50" />

            {/* Card Content */}
            <div className="h-48 sm:h-64 md:h-80 left-[16px] sm:left-[20px] md:left-[24px] top-[16px] sm:top-[20px] md:top-[24px] absolute flex flex-col justify-between items-start">
              <div className="flex flex-col justify-start items-start gap-1 sm:gap-1.5">
                <div className="w-full text-neutral-200 text-[10px] sm:text-xs md:text-sm font-bold tracking-wide">JOIN OUR COMMUNITY</div>
                <div className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">Community</div>
              </div>
              <div className="flex justify-start items-center gap-1 group-hover:gap-2 transition-all">
                <div className="text-neutral-200 text-[10px] sm:text-xs md:text-sm font-bold tracking-wide">LEARN MORE</div>
                <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 relative overflow-hidden">
                  <svg className="w-1.5 sm:w-2 h-1 sm:h-1.5 absolute left-[2px] top-[2px] sm:top-[3px] text-neutral-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Celebration Card */}
          <div className="w-full md:flex-1 h-64 sm:h-80 md:h-96 relative bg-blue-600 rounded-lg overflow-hidden group cursor-pointer">
            {/* Background Image */}
            <Image
              src="/images/image4.png"
              alt="Celebration"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-blue-600/50" />

            {/* Card Content */}
            <div className="h-48 sm:h-64 md:h-80 left-[16px] sm:left-[20px] md:left-[24px] top-[16px] sm:top-[20px] md:top-[25px] absolute flex flex-col justify-between items-start">
              <div className="w-full flex flex-col justify-start items-start gap-1 sm:gap-1.5">
                <div className="w-full text-neutral-200 text-[10px] sm:text-xs md:text-sm font-bold tracking-wide">JOIN US SPECIAL SERVICES</div>
                <div className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">Celebration</div>
              </div>
              <div className="flex justify-start items-center gap-1 group-hover:gap-2 transition-all">
                <div className="text-neutral-200 text-[10px] sm:text-xs md:text-sm font-bold tracking-wide">LEARN MORE</div>
                <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 relative overflow-hidden">
                  <svg className="w-1.5 sm:w-2 h-1 sm:h-1.5 absolute left-[2px] top-[2px] sm:top-[3px] text-neutral-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Worship With Us Section */}
      <section className="w-full px-12 py-24 bg-stone-950 flex flex-col justify-start items-center gap-16 overflow-hidden">
        <div className="max-w-[785px] flex flex-col justify-start items-center gap-12">
          <div className="w-full flex flex-col justify-start items-center gap-8">
            {/* Worship Badge */}
            <div className="h-10 px-6 py-2.5 bg-zinc-400/40 rounded-full backdrop-blur-sm inline-flex justify-center items-center gap-4">
              <div className="w-2 h-2 bg-white rounded-full" />
              <div className="justify-center text-white text-[10px] font-bold tracking-wide">WORSHIP WITH US</div>
            </div>

            {/* Heading and Description */}
            <div className="w-full flex flex-col justify-start items-center gap-4">
              <div className="w-full text-center">
                <span className="text-white text-4xl font-bold uppercase leading-tight block font-anton">
                  Experience a new chapter in your
                </span>
                <span className="text-sky-500 text-4xl font-bold uppercase leading-tight block font-anton">
                  spiritual growth journey
                </span>
              </div>
              <div className="w-full text-center text-white text-sm font-medium">
                Find an installation near you
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button className="h-11 px-7 py-2.5 rounded-full outline outline-1 outline-offset-[-1px] outline-white inline-flex justify-center items-center gap-2.5 hover:bg-white/10 transition-colors">
            <div className="justify-center text-white text-sm font-bold">SEE ALL INSTALLATIONS</div>
          </button>
        </div>

        {/* Installation Cards */}
        {/* Desktop Grid - Hidden on mobile */}
        <div className="hidden lg:flex w-full max-w-[1340px] justify-start items-center gap-4">
          {/* Ilorin */}
          <div className="flex-1 h-96 relative rounded overflow-hidden group cursor-pointer">
            {/* Background Image */}
            <Image
              src="/images/ilorin.png"
              alt="Ilorin Installation"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 20vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Location Info */}
            <div className="absolute bottom-4 left-4 flex flex-col">
              <div className="text-white text-2xl font-bold mb-1">Ilorin</div>
              <div className="text-white text-xs font-medium opacity-90">Address in subtext</div>
            </div>
          </div>

          {/* Abuja */}
          <div className="flex-1 h-96 relative rounded overflow-hidden group cursor-pointer">
            {/* Background Image */}
            <Image
              src="/images/abuja.jpg"
              alt="Abuja Installation"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 20vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Location Info */}
            <div className="absolute bottom-4 left-4 flex flex-col">
              <div className="text-white text-2xl font-bold mb-1">Abuja</div>
              <div className="text-white text-xs font-medium opacity-90">Address in subtext</div>
            </div>
          </div>

          {/* Lagos */}
          <div className="flex-1 h-96 relative rounded overflow-hidden group cursor-pointer">
            {/* Background Image */}
            <Image
              src="/images/lagos.png"
              alt="Lagos Installation"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 20vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Location Info */}
            <div className="absolute bottom-4 left-4 flex flex-col">
              <div className="text-white text-2xl font-bold mb-1">Lagos</div>
              <div className="text-white text-xs font-medium opacity-90">Address in subtext</div>
            </div>
          </div>

          {/* Ibadan */}
          <div className="flex-1 h-96 relative rounded overflow-hidden group cursor-pointer">
            {/* Background Image */}
            <Image
              src="/images/ibadan.png"
              alt="Ibadan Installation"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 20vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Location Info */}
            <div className="absolute bottom-4 left-4 flex flex-col">
              <div className="text-white text-2xl font-bold mb-1">Ibadan</div>
              <div className="text-white text-xs font-medium opacity-90">Address in subtext</div>
            </div>
          </div>

          {/* United Kingdom */}
          <div className="flex-1 h-96 relative rounded overflow-hidden group cursor-pointer">
            {/* Background Image */}
            <Image
              src="/images/unitedkingdom.png"
              alt="United Kingdom Installation"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 20vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Location Info */}
            <div className="absolute bottom-4 left-4 flex flex-col">
              <div className="text-white text-2xl font-bold mb-1">United Kingdom</div>
              <div className="text-white text-xs font-medium opacity-90">Address in subtext</div>
            </div>
          </div>
        </div>

        {/* Mobile Carousel - Visible only on mobile */}
        <div className="lg:hidden w-full -mr-12">
          <InstallationCarousel installations={installations} />
        </div>
      </section>

      {/* A Gathering of Achievers Section */}
      <section className="w-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[753px] relative flex justify-center items-end overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/achievers.png"
          alt="A Gathering of Achievers"
          fill
          className="object-cover"
          sizes="100vw"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="w-full max-w-[1440px] h-full p-4 sm:p-6 md:p-8 lg:p-12 inline-flex flex-col justify-end items-start gap-4 sm:gap-6 relative z-10">
          <div className="p-4 sm:p-6 md:p-8 lg:p-12 bg-black/20 rounded-xl outline outline-1 outline-offset-[-1px] outline-white/30 backdrop-blur-md flex flex-col justify-start items-start gap-4 sm:gap-6 w-full max-w-none sm:max-w-[90%] md:max-w-[80%] lg:max-w-none">
            <div className="w-full sm:max-w-[671px] justify-center text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-normal uppercase leading-tight sm:leading-snug md:leading-normal lg:leading-[84px] font-anton">
              A gathering<br />of achievers
            </div>
            <div className="w-full sm:max-w-[640px] justify-center text-white text-sm sm:text-base font-normal leading-relaxed sm:leading-normal">
              At Word Sanctuary, our greatest success story is the grace to effectively evangelize, disciple, and equip those who were once seekers—transforming them into mature disciples and vibrant ministers of the gospel.
            </div>
            <div className="h-8 sm:h-10 px-4 sm:px-7 py-2 sm:py-2.5 bg-sky-500 rounded-[100px] inline-flex justify-center items-center gap-2">
              <div className="justify-center text-white text-xs sm:text-sm font-semibold tracking-wide">LEARN MORE</div>
              <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 relative overflow-hidden">
                <svg className="w-1.5 sm:w-2 h-1 sm:h-1.5 absolute left-[2px] top-[2px] sm:top-[3px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Our Pastor Section */}
      <section className="w-full bg-stone-950">
        <div className="self-stretch p-4 sm:p-6 md:p-8 lg:p-12 inline-flex flex-col justify-start items-start gap-2.5">
          <div className="self-stretch inline-flex flex-col lg:flex-row justify-start items-start gap-8 sm:gap-12 lg:gap-16">
            <div className="w-full lg:w-[571px] h-64 sm:h-80 md:h-96 lg:h-96 relative rounded-xl overflow-hidden flex-shrink-0">
              <Image
                src="/images/ourpastor.png"
                alt="Pastor Temple"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 571px"
              />
            </div>
            <div className="flex-1 self-stretch inline-flex flex-col justify-start items-start">
              <div className="self-stretch flex-1 flex flex-col justify-start items-start gap-4 sm:gap-6">
                <div className="self-stretch text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase leading-tight sm:leading-snug md:leading-tight lg:leading-none font-anton">
                  ABOUT OUR PASTOR
                </div>
                <div className="self-stretch flex-1 text-left sm:text-justify justify-start text-white text-sm sm:text-base font-normal leading-relaxed sm:leading-normal">
                  Pastor Temple embodies a fatherly figure, nurturing nations through Jesus' teachings. As our Good Shepherd, he guides us tirelessly, leading us closer to God. Through his vision, we've seen the birth of Word Sanctuary and Life Class, empowering us with God's Word.
                  <br /><br />
                  His influence radiates Jesus' love, and his unwavering dedication to God's kingdom inspires countless lives. With a rare anointing, he shapes hearts and minds, bringing people to the knowledge of God's Word. Through his servant-leadership, we've witnessed lives transformed, new relationships formed, broken marriages restored, and the Word of God bringing out the best in people. Hearts are mended, souls are saved, and destinies are fulfilled.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Family Section */}
      <CommunitySection />

    </div>
  );
}
