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
        <div className="w-full max-w-7xl mx-auto px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-12 lg:px-12 lg:py-16 flex flex-col justify-center items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* Events Badge */}
          <div className="h-8 sm:h-10 px-4 sm:px-6 py-2 sm:py-2.5 bg-zinc-200 rounded-full backdrop-blur-sm inline-flex justify-center items-center gap-2 sm:gap-4">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full" style={{ backgroundColor: '#001856' }} />
            <div className="justify-center text-[9px] sm:text-[10px] font-bold tracking-wide font-['Lato']" style={{ color: '#001856' }}>EVENTS</div>
          </div>

          {/* Heading and Description */}
          <div className="w-full max-w-4xl flex flex-col justify-center items-center gap-4 sm:gap-6">
            <h2 className="w-full text-center text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal font-['Anton'] leading-tight uppercase px-2">Join Us for Upcoming Events</h2>
            <div className="w-full text-center max-w-3xl px-4">
              <span className="text-stone-500 text-sm sm:text-base font-normal font-['Lato'] leading-relaxed">
                Stay connected, grow in faith, and be part of what God is doing at Word Sanctuary. From weekly services to special gatherings, there&apos;s always a place for you.
              </span>
            </div>
          </div>

          {/* Events Cards Grid */}
          <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 justify-items-center">
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

          {/* Call to Action Section */}
          <div className="w-full flex flex-col justify-center items-center gap-4 sm:gap-6 mt-8 sm:mt-12">
            <div className="w-full text-center max-w-2xl px-4">
              <h3 className="text-black text-lg sm:text-xl md:text-2xl font-bold font-['Anton'] uppercase mb-2 sm:mb-4">
                Can&apos;t Find What You&apos;re Looking For?
              </h3>
              <p className="text-stone-500 text-sm sm:text-base font-normal font-['Lato'] leading-relaxed mb-4 sm:mb-6">
                Contact us for more information about our events or to suggest new ones that would benefit our community.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <Button
                variant="primary"
                size="md"
                href="/contact"
                as="a"
                className="w-full sm:w-auto"
              >
                Contact Us
              </Button>
              <Button
                variant="secondary"
                size="md"
                href="/online-church"
                as="a"
                className="w-full sm:w-auto"
              >
                Join Online Service
              </Button>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
