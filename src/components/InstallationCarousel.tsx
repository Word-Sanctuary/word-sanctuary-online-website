"use client";

import { useState, useRef } from "react";
import Image from "next/image";

interface Installation {
  name: string;
  image: string;
  address: string;
}

interface InstallationCarouselProps {
  installations: Installation[];
}

export default function InstallationCarousel({ installations }: InstallationCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const startX = useRef<number>(0);
  const isDragging = useRef<boolean>(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
    isDragging.current = true;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    
    const currentX = e.touches[0].clientX;
    const diffX = startX.current - currentX;
    
    // Add some resistance to the swipe
    if (Math.abs(diffX) > 50) {
      if (diffX > 0 && currentIndex < installations.length - 1) {
        // Swipe left - next
        setCurrentIndex(currentIndex + 1);
        isDragging.current = false;
      } else if (diffX < 0 && currentIndex > 0) {
        // Swipe right - previous
        setCurrentIndex(currentIndex - 1);
        isDragging.current = false;
      }
    }
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full">
      {/* Carousel Container */}
      <div
        ref={carouselRef}
        className="relative overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-300 ease-out"
          style={{
            transform: `translateX(-${currentIndex * 85}%)`,
          }}
        >
          {installations.map((installation, index) => (
            <div
              key={installation.name}
              className="w-[85%] flex-shrink-0 pr-4"
            >
              <div className="h-96 relative rounded overflow-hidden group cursor-pointer">
                {/* Background Image */}
                <Image
                  src={installation.image}
                  alt={`${installation.name} Installation`}
                  fill
                  className="object-cover"
                  sizes="85vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Location Info */}
                <div className="absolute bottom-4 left-4 flex flex-col">
                  <div className="text-white text-2xl font-bold mb-1">{installation.name}</div>
                  <div className="text-white text-xs font-medium opacity-90">{installation.address}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 gap-2">
        {installations.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
              index === currentIndex
                ? "bg-white"
                : "bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* Optional: Card counter */}
      <div className="text-center mt-4">
        <span className="text-white/60 text-sm">
          {currentIndex + 1} of {installations.length}
        </span>
      </div>
    </div>
  );
}
