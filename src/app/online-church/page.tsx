"use client";

import Navbar from "@/components/Navbar";
import ChurchUtility from "@/components/ChurchUtility";

export default function OnlineChurch() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />
      
      {/* Main Online Church Section - Full height minus navbar */}
      <div className="h-full md:h-[calc(100vh-80px)] mt-20 flex flex-col md:flex-row">
        {/* YouTube Video Widget - 2/3 on desktop, full width on mobile */}
        <div className="flex md:flex-[2] bg-black flex items-center justify-center h-[50vh] md:h-full">
          <div className="w-full h-full max-w-4xl mx-auto p-4">
            <div className="relative w-full h-full rounded-lg overflow-hidden">
              {/* YouTube Video Embed */}
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/XST1c_XjR_Y?autoplay=0&mute=0&controls=1&showinfo=1&rel=0"
                title="Word Sanctuary Online Church - Live Service"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* Church Utility Section - 1/3 on desktop, remaining height on mobile */}
        <div className="flex md:flex-[1] bg-white relative overflow-hidden flex-1 md:h-full">
          <ChurchUtility className="h-full w-full" />
        </div>
      </div>
    </div>
  );
}
