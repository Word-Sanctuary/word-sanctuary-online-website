/**
 * Example of how to add and use new assets
 * This demonstrates the workflow for adding custom images to the asset system
 */

import { AssetImage } from '@/assets';

// First, you would add your image metadata to constants.ts like this:
/*
In src/assets/constants.ts, add to IMAGE_ASSETS:

export const IMAGE_ASSETS: Record<string, ImageAsset> = {
  'hero-banner': {
    filename: 'hero-banner.jpg',
    extension: 'jpg',
    category: 'hero',
    alt: 'Word Sanctuary Hero Banner',
    description: 'Main hero banner for the homepage',
    width: 1920,
    height: 1080,
  },
  'about-gallery-1': {
    filename: 'about-gallery-1.jpg',
    extension: 'jpg',
    category: 'gallery',
    alt: 'About page gallery image 1',
    description: 'First image in the about page gallery',
    width: 800,
    height: 600,
  },
  // ... more images
};
*/

// Then you can use them in components like this:
export function HeroBanner() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image with fill */}
      <AssetImage
        name="hero-banner"
        fill
        priority
        className="object-cover"
        alt="Welcome to Word Sanctuary"
      />
      
      {/* Overlay content */}
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">HQ and Global Ministry</h1>
          <p className="text-xl">Headquarters and Global Ministry Operations</p>
        </div>
      </div>
    </section>
  );
}

export function AboutGallery() {
  const galleryImages = [
    'about-gallery-1',
    'about-gallery-2', 
    'about-gallery-3'
  ];

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Our Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {galleryImages.map((imageName) => (
          <div key={imageName} className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
            <AssetImage
              name={imageName}
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
              width={400}
              height={300}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

// Example of creating a reusable card component with assets
export function FeatureCard({ 
  iconName, 
  title, 
  description 
}: { 
  iconName: string; 
  title: string; 
  description: string; 
}) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4 flex justify-center">
        {/* This would use AssetIcon once the icon is added to ICON_ASSETS */}
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
          {/* Placeholder - replace with AssetIcon once icon is added */}
          <span className="text-blue-600 font-bold">{iconName.charAt(0).toUpperCase()}</span>
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
