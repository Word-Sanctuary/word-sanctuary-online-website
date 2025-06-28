"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <Hero
        useCarousel={true}
        title={{
          primary: "WHERE HELP MEETS HOPE — ",
          secondary: "GET IN TOUCH"
        }}
        ctaButton={{
          text: "JOIN US",
          onClick: () => {
            window.location.href = '/signup';
          }
        }}
      />
      
      {/* Contact Form Section */}
      <section className="w-full bg-white p-4 sm:p-6 md:p-8 lg:p-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col justify-start items-center gap-8 sm:gap-12 lg:gap-16">
            {/* Header */}
            <div className="flex flex-col justify-start items-center gap-4 sm:gap-6">
              <div className="h-8 sm:h-10 px-4 sm:px-6 py-2 sm:py-2.5 bg-zinc-200 rounded-full backdrop-blur-sm inline-flex justify-center items-center gap-4">
                <div className="w-2 h-2 bg-sky-900 rounded-full" />
                <div className="justify-center text-sky-900 text-[10px] font-bold tracking-wide">CONTACT US</div>
              </div>
              <div className="text-center justify-center text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal uppercase leading-tight font-anton">We'd Love to Hear From You</div>
              <div className="text-center justify-center max-w-2xl">
                <span className="text-stone-500 text-sm sm:text-base font-normal leading-tight">Whether you have a question, need prayer, or just want to connect — </span>
                <span className="text-stone-500 text-sm sm:text-base font-bold leading-tight">We're here for you.</span>
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
                      className="w-full h-11 sm:h-12 px-3.5 py-2.5 rounded-lg shadow-sm border border-gray-300 text-gray-900 text-sm sm:text-base placeholder-gray-500 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-colors"
                    />
                  </div>
                  <div className="flex flex-col justify-start items-start gap-1.5">
                    <label className="text-slate-700 text-sm sm:text-base font-medium leading-tight">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="Enter your email address"
                      className="w-full h-11 sm:h-12 px-3.5 py-2.5 rounded-lg shadow-sm border border-gray-300 text-gray-900 text-sm sm:text-base placeholder-gray-500 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-colors"
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
                      className="w-full h-11 sm:h-12 px-3.5 py-2.5 rounded-lg shadow-sm border border-gray-300 text-gray-900 text-sm sm:text-base placeholder-gray-500 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-colors"
                    />
                  </div>
                  <div className="flex flex-col justify-start items-start gap-1.5">
                    <label className="text-slate-700 text-sm sm:text-base font-medium leading-tight">Location</label>
                    <input 
                      type="text" 
                      placeholder="Enter your location"
                      className="w-full h-11 sm:h-12 px-3.5 py-2.5 rounded-lg shadow-sm border border-gray-300 text-gray-900 text-sm sm:text-base placeholder-gray-500 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-colors"
                    />
                  </div>
                </div>
                
                {/* Third Row - Service Type */}
                <div className="w-full flex flex-col justify-start items-start gap-1.5">
                  <label className="text-slate-700 text-sm sm:text-base font-medium leading-tight">What would you have us do for you?</label>
                  <select className="w-full h-11 sm:h-12 px-3.5 py-2.5 rounded-lg shadow-sm border border-gray-300 text-gray-900 text-sm sm:text-base focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-colors bg-white">
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
                    className="w-full px-3.5 py-3 rounded-lg shadow-sm border border-gray-300 text-gray-900 text-sm sm:text-base placeholder-gray-500 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-colors resize-none"
                  ></textarea>
                  <div className="text-slate-600 text-xs sm:text-sm font-normal leading-tight">This is a hint text to help user.</div>
                </div>
                
                {/* Submit Button */}
                <button className="px-6 sm:px-8 py-2.5 bg-sky-500 hover:bg-sky-600 rounded-full text-white text-sm sm:text-base font-semibold tracking-wide transition-colors">
                  SEND MESSAGE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Information Section */}
      <section className="w-full bg-gray-50 p-4 sm:p-6 md:p-8 lg:p-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col justify-start items-center gap-8 sm:gap-12">
            <div className="text-black text-sm sm:text-base font-bold uppercase tracking-wider">OUR CONTACT INFORMATION</div>
            
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Phone Card */}
              <div className="relative bg-sky-900 rounded-3xl p-6 sm:p-8 lg:p-9 min-h-48 sm:min-h-56 lg:min-h-60 flex flex-col justify-between">
                {/* Icon */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-sky-900" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                
                {/* Content */}
                <div className="flex flex-col gap-2">
                  <div className="text-white text-base sm:text-lg font-bold">Phone No:</div>
                  <div className="text-white text-sm sm:text-base font-normal">+234 123 4568 790</div>
                </div>
              </div>
              
              {/* Location Card */}
              <div className="relative bg-sky-900 rounded-3xl p-6 sm:p-8 lg:p-9 min-h-48 sm:min-h-56 lg:min-h-60 flex flex-col justify-between">
                {/* Icon */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-sky-900" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                
                {/* Content */}
                <div className="flex flex-col gap-2">
                  <div className="text-white text-base sm:text-lg font-bold">Location:</div>
                  <div className="text-white text-sm sm:text-base font-normal leading-6 sm:leading-7">
                    Word Sanctuary HQ, Ilorin, Kwara State.<br/>
                    Nigeria.
                  </div>
                </div>
              </div>
              
              {/* Email Card */}
              <div className="relative bg-sky-900 rounded-3xl p-6 sm:p-8 lg:p-9 min-h-48 sm:min-h-56 lg:min-h-60 flex flex-col justify-between md:col-span-2 lg:col-span-1">
                {/* Icon */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-sky-900" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                
                {/* Content */}
                <div className="flex flex-col gap-2">
                  <div className="text-white text-base sm:text-lg font-bold">Email Address:</div>
                  <div className="text-white text-sm sm:text-base font-normal leading-6 sm:leading-7 break-words">WordstanctuaryHQ@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
