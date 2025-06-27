"use client";

import { useState, useEffect, useMemo, useCallback } from 'react';
import Image from 'next/image';

interface HeroProps {
  badge?: {
    text: string;
    showDot?: boolean;
  };
  title: {
    primary: string;
    secondary?: string;
  };
  ctaButton?: {
    text: string;
    onClick?: () => void;
  };
  useCarousel?: boolean;
  backgroundImages?: string[];
}

const Hero: React.FC<HeroProps> = ({
  badge,
  title,
  ctaButton,
  useCarousel = false,
  backgroundImages = []
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Memoize carousel images to prevent recalculation
  const carouselImages = useMemo(() => {
    const defaultCarouselImages = [
      '/images/hero-carousel/08Artboard 1 (2).jpg',
      '/images/hero-carousel/10Artboard 1 (2).jpg',
      '/images/hero-carousel/16 (4).jpg'
    ];
    return backgroundImages.length > 0 ? backgroundImages : defaultCarouselImages;
  }, [backgroundImages]);

  // Optimized transition function
  const handleTransition = useCallback(() => {
    if (!useCarousel || carouselImages.length <= 1 || isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    
    // Reset transition flag after transition completes
    setTimeout(() => setIsTransitioning(false), 2500);
  }, [useCarousel, carouselImages.length, isTransitioning]);

  useEffect(() => {
    if (!useCarousel || carouselImages.length <= 1) return;

    const interval = setInterval(handleTransition, 5000);
    return () => clearInterval(interval);
  }, [useCarousel, carouselImages.length, handleTransition]);

  return (
    <section className="relative min-h-screen flex items-end justify-center pb-16 pt-20 overflow-hidden">
      {/* Background Images Carousel */}
      {useCarousel && carouselImages.length > 0 ? (
        <div className="absolute inset-0" style={{ contain: 'layout style paint' }}>
          {carouselImages.map((image, index) => (
            <div
              key={image}
              className={`absolute inset-0 will-change-[opacity] transform-gpu ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                transition: 'opacity 2.5s cubic-bezier(0.4, 0, 0.2, 1)',
                backfaceVisibility: 'hidden',
                perspective: 1000,
              }}
            >
              <Image
                src={image}
                alt={`Hero background ${index + 1}`}
                fill
                className="object-cover"
                priority={index <= 1} // Prioritize first 2 images
                quality={85} // Slightly reduce quality for faster loading
                sizes="100vw"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyaKex8MRXYBZkRZdehAVBp5JjM3AxyCLCnpGNGFsO4TrUNJ9nLxwwFzYFYq5LqEKkmCWJC5D8vWgS2lLwFqIZV/9k="
                onLoad={() => {
                  if (index === 0) {
                    // Preload next image after first loads
                    const nextIndex = (index + 1) % carouselImages.length;
                    const link = document.createElement('link');
                    link.rel = 'preload';
                    link.href = carouselImages[nextIndex];
                    link.as = 'image';
                    document.head.appendChild(link);
                  }
                }}
              />
            </div>
          ))}
        </div>
      ) : (
        // Fallback gradient background
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-sky-800 to-blue-700"></div>
      )}

      {/* Background overlay for better text readability - using navbar primary color */}
      <div className="absolute inset-0 bg-sky-900/60"></div>

      {/* Background pattern effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 inline-flex flex-col justify-start items-center gap-9 px-6 text-center">
        <div className="flex flex-col justify-start items-center gap-6">
          {/* Badge */}
          {badge && (
            <div className="h-10 px-6 py-2.5 bg-white/40 rounded-full outline outline-1 outline-offset-[-1px] outline-white backdrop-blur-sm inline-flex justify-center items-center gap-4">
              {badge.showDot && <div className="w-2 h-2 bg-sky-900 rounded-full" />}
              <div className="justify-center text-white text-xs font-bold tracking-wide font-lato">
                {badge.text}
              </div>
            </div>
          )}

          {/* Main Heading */}
          <div className="text-center justify-center max-w-4xl">
            <span className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight block font-anton">
              {title.primary}
            </span>
            {title.secondary && (
              <span className="text-sky-400 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight block font-anton">
                {title.secondary}
              </span>
            )}
          </div>
        </div>

        {/* CTA Button */}
        {ctaButton && (
          <button 
            className="h-11 px-8 py-2.5 bg-white rounded-full inline-flex justify-center items-center gap-2.5 hover:bg-gray-100 transition-colors shadow-lg"
            onClick={ctaButton.onClick}
          >
            <div className="justify-center text-black text-sm font-bold tracking-wide font-inter">
              {ctaButton.text}
            </div>
          </button>
        )}
      </div>
    </section>
  );
};

export default Hero;
