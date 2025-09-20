"use client";

import { useState, useEffect, useMemo, useCallback } from 'react';
import { Button } from '@/components/ui';
import CarouselNavButton from '@/components/ui/CarouselNavButton';
import Image from 'next/image';

interface HeroProps {
  badge?: {
    text: string;
    showDot?: boolean;
  };
  title?: {
    primary: string;
    secondary?: string;
  };
  ctaButton?: {
    text: string;
    onClick?: () => void;
  };
  useCarousel?: boolean;
  backgroundImages?: string[];
  staticImage?: string;
  showNavigation?: boolean;
}

const Hero: React.FC<HeroProps> = ({
  badge,
  title,
  ctaButton,
  useCarousel = false,
  backgroundImages = [],
  staticImage,
  showNavigation = false
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState<Set<number>>(new Set());

  // Memoize carousel images to prevent recalculation
  const carouselImages = useMemo(() => {
    const defaultCarouselImages = [
      '/images/optimized/hero-carousel/08Artboard 1 (2).webp',
      '/images/optimized/hero-carousel/10Artboard 1 (2).webp',
      '/images/optimized/hero-carousel/16 (4).webp'
    ];
    return backgroundImages.length > 0 ? backgroundImages : defaultCarouselImages;
  }, [backgroundImages]);

  // Track image loading
  const handleImageLoad = useCallback((index: number) => {
    setImagesLoaded(prev => new Set(prev).add(index));
  }, []);

  // Optimized transition function
  const handleTransition = useCallback(() => {
    if (!useCarousel || carouselImages.length <= 1 || isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    
    // Reset transition flag after transition completes
    setTimeout(() => setIsTransitioning(false), 2000);
  }, [useCarousel, carouselImages.length, isTransitioning]);

  // Navigation functions
  const goToPrevious = useCallback(() => {
    if (!useCarousel || carouselImages.length <= 1 || isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
    
    // Reset transition flag after transition completes
    setTimeout(() => setIsTransitioning(false), 2000);
  }, [useCarousel, carouselImages.length, isTransitioning]);

  const goToNext = useCallback(() => {
    if (!useCarousel || carouselImages.length <= 1 || isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    
    // Reset transition flag after transition completes
    setTimeout(() => setIsTransitioning(false), 2000);
  }, [useCarousel, carouselImages.length, isTransitioning]);

  // Preload next image when current loads
  useEffect(() => {
    if (imagesLoaded.has(currentImageIndex) && carouselImages.length > 1) {
      const nextIndex = (currentImageIndex + 1) % carouselImages.length;
      if (!imagesLoaded.has(nextIndex)) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = carouselImages[nextIndex];
        link.as = 'image';
        document.head.appendChild(link);
      }
    }
  }, [currentImageIndex, carouselImages, imagesLoaded]);

  useEffect(() => {
    if (!useCarousel || carouselImages.length <= 1) return;

    const interval = setInterval(handleTransition, 6000); // Slower transition
    return () => clearInterval(interval);
  }, [useCarousel, carouselImages.length, handleTransition]);

  return (
    <section className="relative min-h-screen flex items-end justify-center pb-16 pt-20 overflow-hidden">
      {/* Navigation Buttons */}
      {useCarousel && carouselImages.length > 1 && showNavigation && (
        <>
          {/* Previous Button */}
          <div className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-30">
            <CarouselNavButton
              direction="left"
              onClick={goToPrevious}
              disabled={isTransitioning}
            />
          </div>
          
          {/* Next Button */}
          <div className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-30">
            <CarouselNavButton
              direction="right"
              onClick={goToNext}
              disabled={isTransitioning}
            />
          </div>
        </>
      )}

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
                transition: 'opacity 2s cubic-bezier(0.4, 0, 0.2, 1)',
                backfaceVisibility: 'hidden',
                perspective: 1000,
              }}
            >
              <Image
                src={image}
                alt={`Hero background ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0} // Only prioritize first image
                quality={75} // Reduced quality for better performance
                sizes="100vw"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyaKex8MRXYBZkRZdehAVBp5JjM3AxyCLCnpGNGFsO4TrUNJ9nLxwwFzYFYq5LqEKkmCWJC5D8vWgS2lLwFqIZV/9k="
                onLoad={() => handleImageLoad(index)}
              />
            </div>
          ))}
        </div>
      ) : staticImage ? (
        // Static background image
        <div className="absolute inset-0">
          <Image
            src={staticImage}
            alt="Hero background"
            fill
            className="object-cover"
            priority
            quality={75}
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyaKex8MRXYBZkRZdehAVBp5JjM3AxyCLCnpGNGFsO4TrUNJ9nLxwwFzYFYq5LqEKkmCWJC5D8vWgS2lLwFqIZV/9k="
          />
        </div>
      ) : (
        // Fallback gradient background
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700"></div>
      )}

      {/* Background overlay for better text readability - using navbar primary color */}
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 24, 86, 0.6)' }}></div>

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
              {badge.showDot && <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#001856' }} />}
              <div className="justify-center text-white text-xs font-bold tracking-wide font-lato">
                {badge.text}
              </div>
            </div>
          )}

          {/* Main Heading */}
          {title && (
            <div className="text-center justify-center max-w-4xl">
              <span className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight block font-anton">
                {title.primary}
              </span>
              {title.secondary && (
                <span className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight block font-anton" style={{ color: '#60a5fa' }}>
                  {title.secondary}
                </span>
              )}
            </div>
          )}
        </div>

        {/* CTA Button */}
        {ctaButton && (
          <Button 
            variant="secondary" 
            size="lg"
            onClick={ctaButton.onClick}
          >
            {ctaButton.text}
          </Button>
        )}
      </div>
    </section>
  );
};

export default Hero;
