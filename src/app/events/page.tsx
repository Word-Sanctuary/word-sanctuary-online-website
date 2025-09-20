"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui";
import EventCard from "@/components/ui/EventCard";

export default function Events() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <Hero
        useCarousel={false}
        title={{
          primary: "JOIN US FOR ANY OF OUR UPCOMING EVENTS ",
        }}
        staticImage={"/images/optimized/hero-carousel/08Artboard 1 (2).webp"}
      />
      
      {/* Events Section */}
      <section className="w-full bg-white">
        <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-center items-center gap-8 sm:gap-10 md:gap-12">
          {/* Events Badge */}
          <div className="h-8 sm:h-10 px-4 sm:px-6 py-2 sm:py-2.5 bg-zinc-200 rounded-full backdrop-blur-sm inline-flex justify-center items-center gap-2 sm:gap-4">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full" style={{ backgroundColor: '#001856' }} />
            <div className="justify-center text-[10px] sm:text-xs font-bold tracking-wide font-['Lato']" style={{ color: '#001856' }}>EVENTS</div>
          </div>

          {/* Heading and Description */}
          <div className="w-full max-w-4xl flex flex-col justify-center items-center gap-4 sm:gap-6">
            <h2 className="w-full text-center text-black text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-normal font-['Anton'] leading-tight uppercase">Join Us for Upcoming Events</h2>
            <div className="w-full text-center max-w-3xl">
              <span className="text-stone-500 text-sm sm:text-base font-normal font-['Lato'] leading-snug">
                Stay connected, grow in faith, and be part of what God is doing at Word Sanctuary. From weekly services to special gatherings, there's always a place for you.
              </span>
            </div>
          </div>

          {/* Events Cards Grid */}
          <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 sm:gap-6 justify-items-center">
            <EventCard
              title="Sunday Service"
              date="Every Sunday"
              time="9:00 AM GMT"
              image="/images/optimized/image2.webp"
              imageAlt="Sunday Service"
            />
            <EventCard
              title="Prayer Meeting"
              date="Every Wednesday"
              time="6:00 PM GMT"
              image="/images/optimized/image3.webp"
              imageAlt="Prayer Meeting"
            />
            <EventCard
              title="Life Class"
              date="Every Saturday"
              time="4:00 PM GMT"
              image="/images/optimized/image4.webp"
              imageAlt="Life Class"
            />
            <EventCard
              title="Bible Study"
              date="Every Tuesday"
              time="7:00 PM GMT"
              image="/images/optimized/community1.webp"
              imageAlt="Bible Study"
            />
            <EventCard
              title="Revival Night"
              date="First Friday of Month"
              time="7:00 PM GMT"
              image="/images/optimized/communityimage2.webp"
              imageAlt="Revival Night"
            />
            <EventCard
              title="Youth Service"
              date="Every Friday"
              time="7:00 PM GMT"
              image="/images/optimized/communityimage3.webp"
              imageAlt="Youth Service"
            />
            <EventCard
              title="Marriage Seminar"
              date="Monthly Workshop"
              time="2:00 PM GMT"
              image="/images/optimized/ourpastor.webp"
              imageAlt="Marriage Seminar"
            />
            <EventCard
              title="Children's Service"
              date="Every Sunday"
              time="10:00 AM GMT"
              image="/images/optimized/signup.webp"
              imageAlt="Children's Service"
            />
            <EventCard
              title="Healing Service"
              date="Last Sunday of Month"
              time="6:00 PM GMT"
              image="/images/optimized/webelieve.webp"
              imageAlt="Healing Service"
            />
          </div>
        </div>
      </section>
      
    </div>
  );
}
