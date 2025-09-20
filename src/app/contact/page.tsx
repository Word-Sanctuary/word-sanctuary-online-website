"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <Hero
        useCarousel={false}
        title={{
          primary: "WHERE HELP MEETS HOPE — GET IN TOUCH ",
        }}
        staticImage={"/images/optimized/hero-carousel/16 (4).webp"}
      />
      
      {/* Contact Form Section */}
      <section className="w-full bg-white p-4 sm:p-6 md:p-8 lg:p-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col justify-start items-center gap-8 sm:gap-12 lg:gap-16">
            {/* Header */}
            <div className="flex flex-col justify-start items-center gap-4 sm:gap-6">
              <div className="h-8 sm:h-10 px-4 sm:px-6 py-2 sm:py-2.5 bg-zinc-200 rounded-full backdrop-blur-sm inline-flex justify-center items-center gap-4">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#001856' }} />
                <div className="justify-center text-[10px] font-bold tracking-wide" style={{ color: '#001856' }}>CONTACT US</div>
              </div>
              <div className="text-center justify-center text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal uppercase leading-tight font-anton">We&apos;d Love to Hear From You</div>
              <div className="text-center justify-center max-w-2xl">
                <span className="text-stone-500 text-sm sm:text-base font-normal leading-tight">Whether you have a question, need prayer, or just want to connect — </span>
                <span className="text-stone-500 text-sm sm:text-base font-bold leading-tight">We&apos;re here for you.</span>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="w-full max-w-4xl flex flex-col justify-start items-center gap-6 sm:gap-8 lg:gap-10">
              <div className="w-full flex flex-col justify-start items-center gap-4 sm:gap-6">
                {/* First Row - Name and Email */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="flex flex-col justify-start items-start gap-1.5">
                    <label className="text-slate-700 text-sm sm:text-base font-medium leading-tight">Full name</label>
                    <input 
                      type="text" 
                      placeholder="Enter your full name"
                      className="w-full h-11 sm:h-12 px-3.5 py-2.5 rounded-lg shadow-sm border border-gray-300 text-gray-900 text-sm sm:text-base placeholder-gray-500 focus:ring-2 focus:border-transparent outline-none transition-colors"
                      style={{ '--tw-ring-color': '#001856' } as React.CSSProperties}
                    />
                  </div>
                  <div className="flex flex-col justify-start items-start gap-1.5">
                    <label className="text-slate-700 text-sm sm:text-base font-medium leading-tight">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="Enter your email address"
                      className="w-full h-11 sm:h-12 px-3.5 py-2.5 rounded-lg shadow-sm border border-gray-300 text-gray-900 text-sm sm:text-base placeholder-gray-500 focus:ring-2 focus:border-transparent outline-none transition-colors"
                      style={{ '--tw-ring-color': '#001856' } as React.CSSProperties}
                    />
                  </div>
                </div>
                
                {/* Second Row - Phone and Location */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="flex flex-col justify-start items-start gap-1.5">
                    <label className="text-slate-700 text-sm sm:text-base font-medium leading-tight">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="Enter your phone number"
                      className="w-full h-11 sm:h-12 px-3.5 py-2.5 rounded-lg shadow-sm border border-gray-300 text-gray-900 text-sm sm:text-base placeholder-gray-500 focus:ring-2 focus:border-transparent outline-none transition-colors"
                      style={{ '--tw-ring-color': '#001856' } as React.CSSProperties}
                    />
                  </div>
                  <div className="flex flex-col justify-start items-start gap-1.5">
                    <label className="text-slate-700 text-sm sm:text-base font-medium leading-tight">Location</label>
                    <input 
                      type="text" 
                      placeholder="Enter your location"
                      className="w-full h-11 sm:h-12 px-3.5 py-2.5 rounded-lg shadow-sm border border-gray-300 text-gray-900 text-sm sm:text-base placeholder-gray-500 focus:ring-2 focus:border-transparent outline-none transition-colors"
                      style={{ '--tw-ring-color': '#001856' } as React.CSSProperties}
                    />
                  </div>
                </div>
                
                {/* Third Row - Service Type */}
                <div className="w-full flex flex-col justify-start items-start gap-1.5">
                  <label className="text-slate-700 text-sm sm:text-base font-medium leading-tight">What would you have us do for you?</label>
                  <select className="w-full h-11 sm:h-12 px-3.5 py-2.5 rounded-lg shadow-sm border border-gray-300 text-gray-900 text-sm sm:text-base focus:ring-2 focus:border-transparent outline-none transition-colors bg-white" style={{ '--tw-ring-color': '#001856' } as React.CSSProperties}>
                    <option value="">Select a service...</option>
                    <option value="prayer">Prayer</option>
                    <option value="direction">Direction</option>
                    <option value="counsel">Counsel</option>
                    <option value="help">Help</option>
                  </select>
                </div>
                
                {/* Message Field */}
                <div className="w-full flex flex-col justify-start items-start gap-1.5">
                  <label className="text-slate-700 text-sm sm:text-base font-medium leading-tight">Message</label>
                  <textarea 
                    placeholder="Your message..."
                    rows={6}
                    className="w-full px-3.5 py-3 rounded-lg shadow-sm border border-gray-300 text-gray-900 text-sm sm:text-base placeholder-gray-500 focus:ring-2 focus:border-transparent outline-none transition-colors resize-none"
                    style={{ '--tw-ring-color': '#001856' } as React.CSSProperties}
                  ></textarea>
                  <div className="text-slate-600 text-xs sm:text-sm font-normal leading-tight">This is a hint text to help user.</div>
                </div>
                
                {/* Submit Button */}
                <Button 
                  variant="primary" 
                  size="md"
                  type="submit"
                >
                  SEND MESSAGE
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Join Us Today Section */}
      <section className="w-full bg-white p-4 sm:p-6 md:p-8 lg:p-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col justify-start items-center gap-8 sm:gap-12">
            {/* Header */}
            <div className="text-center">
              <h2 className="text-black text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wide">
                JOIN US TODAY
              </h2>
            </div>
            
            {/* Cards Grid */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {/* Join Our Workforce Card */}
              <div className="relative group cursor-pointer h-48 sm:h-56 lg:h-64 rounded-2xl overflow-hidden bg-zinc-700">
                {/* Background Image */}
                <Image
                  src="/images/optimized/communityimage2.webp"
                  alt="Community workforce"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                
                {/* Overlay */}
                <div 
                  className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-90"
                  style={{ backgroundColor: '#001856B2' }}
                />
                
                {/* Content */}
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold uppercase text-center leading-tight">
                    JOIN OUR WORKFORCE
                  </h3>
                </div>
              </div>
              
              {/* Join A Prayer Group Card */}
              <div className="relative group cursor-pointer h-48 sm:h-56 lg:h-64 rounded-2xl overflow-hidden bg-zinc-700">
                {/* Background Image */}
                <Image
                  src="/images/optimized/communityimage3.webp"
                  alt="Prayer group"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                
                {/* Overlay */}
                <div 
                  className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-90"
                  style={{ backgroundColor: '#001856B2' }}
                />
                
                {/* Content */}
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold uppercase text-center leading-tight">
                    JOIN A PRAYER GROUP
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Key Contacts Section */}
      <section className="w-full bg-gray-50 p-4 sm:p-6 md:p-8 lg:p-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col justify-start items-center gap-8 sm:gap-12">
            {/* Section Title */}
            <div className="text-black text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wide">KEY CONTACTS</div>
            
            {/* Google Map */}
            <div className="w-full h-96 sm:h-[500px] lg:h-[600px] xl:h-[700px] rounded-2xl overflow-hidden shadow-lg border border-gray-200 mb-8 sm:mb-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.123456789!2d4.5!3d8.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMzAnMDAuMCJOIDTCsDMwJzAwLjAiRQ!5e0!3m2!1sen!2sng!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Word Sanctuary Headquarters - 101 Muritala Muhamed Way, Ilorin, Kwara, Nigeria"
              />
            </div>
            
            {/* Contact Cards */}
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                  {/* Phone Card */}
                  <div className="relative rounded-2xl p-4 sm:p-6 lg:p-8 min-h-32 sm:min-h-36 lg:min-h-40 flex flex-col justify-between shadow-xl" style={{ backgroundColor: '#001856' }}>
                    {/* Icon */}
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center mb-3">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#001856' }}>
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                      </svg>
                    </div>
                    
                    {/* Content */}
                    <div className="flex flex-col gap-1">
                      <div className="text-white text-sm sm:text-base font-bold">Phone No:</div>
                      <div className="text-white text-xs sm:text-sm font-normal">+234 123 4568 790</div>
                    </div>
                  </div>
                  
                  {/* Location Card */}
                  <div className="relative rounded-2xl p-4 sm:p-6 lg:p-8 min-h-32 sm:min-h-36 lg:min-h-40 flex flex-col justify-between shadow-xl" style={{ backgroundColor: '#001856' }}>
                    {/* Icon */}
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center mb-3">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#001856' }}>
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                    </div>
                    
                    {/* Content */}
                    <div className="flex flex-col gap-1">
                      <div className="text-white text-sm sm:text-base font-bold">Location:</div>
                      <div className="text-white text-xs sm:text-sm font-normal leading-5">
                        Word Sanctuary HQ, Ilorin, Kwara State.<br/>
                        Nigeria.
                      </div>
                    </div>
                  </div>
                  
                  {/* Email Card */}
                  <div className="relative rounded-2xl p-4 sm:p-6 lg:p-8 min-h-32 sm:min-h-36 lg:min-h-40 flex flex-col justify-between shadow-xl" style={{ backgroundColor: '#001856' }}>
                    {/* Icon */}
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center mb-3">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#001856' }}>
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                    </div>
                    
                    {/* Content */}
                    <div className="flex flex-col gap-1">
                      <div className="text-white text-sm sm:text-base font-bold">Email Address:</div>
                      <div className="text-white text-xs sm:text-sm font-normal leading-5 break-words">WordstanctuaryGlobal@gmail.com</div>
                    </div>
                  </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
