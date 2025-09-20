"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InstallationCarousel from "@/components/InstallationCarousel";
import CommunitySection from "@/components/CommunitySection";
import UpcomingEvents from "@/components/UpcomingEvents";
import { Button, ActionLink, FeatureCard } from "@/components/ui";
import { getHeroConfig } from "@/assets/data";
import Image from "next/image";

export default function Home() {
  // Get hero configuration
  const heroConfig = getHeroConfig();
  
  // Event data for the carousel
  const events = [
    {
      name: "Ilorin",
      image: "/images/optimized/ilorin.webp",
      address: "Address in subtext"
    },
    {
      name: "Abuja", 
      image: "/images/optimized/abuja.webp",
      address: "Address in subtext"
    },
    {
      name: "Lagos",
      image: "/images/optimized/lagos.webp", 
      address: "Address in subtext"
    },
    {
      name: "Ibadan",
      image: "/images/optimized/ibadan.webp",
      address: "Address in subtext"
    },
    {
      name: "United Kingdom",
      image: "/images/optimized/unitedkingdom.webp",
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
        showNavigation={true}
      />

      {/* Welcome to Mount Zion Section */}
      <section className="w-full bg-white">
        <div className="w-full p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-center gap-4 sm:gap-6 md:gap-8">
          <div className="w-full max-w-[702px] lg:max-w-none flex flex-col justify-start items-center lg:items-center gap-4 sm:gap-6 md:gap-8">
            {/* Welcome Badge */}
            <div className="h-8 sm:h-10 px-4 sm:px-6 py-2 sm:py-2.5 bg-zinc-200 rounded-full backdrop-blur-sm inline-flex justify-center items-center gap-2 sm:gap-4">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full" style={{ backgroundColor: '#001856' }} />
              <div className="justify-center text-[10px] sm:text-xs font-bold tracking-wide font-['Lato']" style={{ color: '#001856' }}>WELCOME TO WORD SANCTUARY GLOBAL</div>
            </div>

            {/* Heading and Description */}
            <div className="w-full flex flex-col justify-center items-center gap-3 sm:gap-4">
              <div className="w-full flex flex-col justify-center items-center gap-4 sm:gap-6 md:gap-8">
                <h2 className="w-full text-center text-black text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-normal font-['Anton'] leading-tight uppercase">WELCOME TO MOUNT ZION</h2>
                <div className="w-full text-center">
                  <span className="text-stone-500 text-sm sm:text-base font-normal font-['Lato'] leading-snug">
                    The Heavenly Jerusalem; a Church that is{" "}
                  </span>
                  <span className="text-black text-sm sm:text-base font-bold font-['Lato'] leading-snug">
                    HEAVEN!
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <FeatureCard
              title="Online Church"
              image="/images/optimized/image2.webp"
              imageAlt="Online Church"
              href="/online-church"
            />
            <FeatureCard
              title="Start Life Class"
              image="/images/optimized/image3.webp"
              imageAlt="Start Life Class"
              href="https://forms.google.com/life-class"
            />
            <FeatureCard
              title="Find Nearest"
              image="/images/optimized/image4.webp"
              imageAlt="Find Nearest Installation"
              href="/about#installations"
            />
            <FeatureCard
              title="Take a Lead"
              image="/images/optimized/community1.webp"
              imageAlt="Take a Lead"
              href="https://facebook.com/wordsanctuary"
            />
            <FeatureCard
              title="Take a Training"
              image="/images/optimized/communityimage2.webp"
              imageAlt="Take a Training"
              href="https://training.wordsanctuary.com"
            />
            <FeatureCard
              title="Join a Prayer Group"
              image="/images/optimized/communityimage3.webp"
              imageAlt="Join a Prayer Group"
              href="https://forms.google.com/prayer-group"
            />
          </div>


          {/* View Key Contact Button */}
          <div className="w-full flex justify-center items-center">
            <a
              href="/contact"
              className="h-11 px-8 py-2.5 rounded-[100px] inline-flex justify-center items-center gap-2.5 cursor-pointer hover:opacity-90 transition-opacity duration-200"
              style={{ backgroundColor: '#001856' }}
            >
              <div className="justify-center text-white text-sm font-bold font-['Lato'] uppercase">
                View Key Contact
              </div>
              <div className="w-6 h-6 relative flex items-center justify-center">
                <svg 
                  className="w-5 h-5 text-white" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <UpcomingEvents />

      {/* Family Section */}
      {/* <CommunitySection /> */}

    </div>
  );
}
