"use client";

import Image from 'next/image';

interface FeatureCardProps {
  title: string;
  image: string;
  imageAlt?: string;
  href: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  image,
  imageAlt = "Feature image",
  href,
  className = ''
}) => {
  return (
    <a
      href={href}
      className={`w-full md:flex-1 h-64 sm:h-80 md:h-96 relative bg-zinc-700 rounded-lg overflow-hidden group cursor-pointer ${className}`}
    >
      {/* Background Image */}
      <Image
        src={image}
        alt={imageAlt}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      
      {/* Overlay */}
      <div 
        className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-90"
        style={{ backgroundColor: '#001856B2' }}
      />
      
      {/* Title */}
      <div className="absolute inset-0 flex items-end p-4 sm:p-6">
        <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold leading-tight">
          {title}
        </h3>
      </div>
    </a>
  );
};

export default FeatureCard;
