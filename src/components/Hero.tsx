"use client";

import { useState, useEffect } from 'react';
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

  // Default carousel images
  const defaultCarouselImages = [
    '/images/hero-carousel/08Artboard 1 (2).jpg',
    '/images/hero-carousel/10Artboard 1 (2).jpg',
    '/images/hero-carousel/16 (4).jpg'
  ];

  const carouselImages = backgroundImages.length > 0 ? backgroundImages : defaultCarouselImages;

  useEffect(() => {
    if (!useCarousel || carouselImages.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % carouselImages.length
      );
    }, 5000); // Back to 5 seconds

    return () => clearInterval(interval);
  }, [useCarousel, carouselImages.length]);

  return (
    <section className="relative min-h-screen flex items-end justify-center pb-16 pt-20 overflow-hidden">
      {/* Background Images Carousel */}
      {useCarousel && carouselImages.length > 0 ? (
        <>
          {carouselImages.map((image, index) => (
            <div
              key={image}
              className={`absolute inset-0 transition-opacity duration-[2500ms] ease-out ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={image}
                alt={`Hero background ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </>
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
