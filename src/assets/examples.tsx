/**
 * Example usage of the asset management system
 * This file demonstrates different ways to use assets in your components
 */

import Image from 'next/image';
import { 
  AssetIcon, 
  AssetLogo, 
  // AssetImage, // Commented out since it's not used in this file
  getIconPath, 
  getLogoPath,
  useIcon,
  useLogo 
} from '@/assets';

// Example 1: Using asset components (recommended)
export function ExampleWithComponents() {
  return (
    <div className="p-6 space-y-4">
      <h2 className="text-2xl font-bold">Using Asset Components</h2>
      
      {/* Logo with different sizes */}
      <div className="flex items-center space-x-4">
        <AssetLogo name="hq-and-global-main" size="small" />
        <AssetLogo name="hq-and-global-main" size="medium" />
        <AssetLogo name="footer-logo" size="large" />
      </div>
      
      {/* Icons with different sizes */}
      <div className="flex items-center space-x-4">
        <AssetIcon name="file" size="small" />
        <AssetIcon name="globe" size="medium" />
        <AssetIcon name="window" size="large" />
        <AssetIcon name="file" size={40} /> {/* Custom size */}
      </div>
    </div>
  );
}

// Example 2: Using hooks for more control
export function ExampleWithHooks() {
  const mainLogo = useLogo('hq-and-global-main', 'large');
  const footerLogo = useLogo('footer-logo', 'medium');
  const fileIcon = useIcon('file', 'medium');
  
  return (
    <div className="p-6 space-y-4">
      <h2 className="text-2xl font-bold">Using Asset Hooks</h2>
      
      {mainLogo && (
        <div>
          <Image 
            src={mainLogo.src} 
            alt={mainLogo.alt} 
            width={mainLogo.width} 
            height={mainLogo.height}
            className="border rounded"
          />
          <p className="text-sm text-gray-600">{mainLogo.description}</p>
        </div>
      )}
      
      {footerLogo && (
        <div>
          <Image 
            src={footerLogo.src} 
            alt={footerLogo.alt} 
            width={footerLogo.width} 
            height={footerLogo.height}
            className="border rounded"
          />
          <p className="text-sm text-gray-600">{footerLogo.description}</p>
        </div>
      )}
      
      {fileIcon && (
        <div className="flex items-center space-x-2">
          <Image 
            src={fileIcon.src} 
            alt={fileIcon.alt} 
            width={fileIcon.width} 
            height={fileIcon.height}
          />
          <span>File icon with metadata</span>
        </div>
      )}
    </div>
  );
}

// Example 3: Using utility functions
export function ExampleWithUtilities() {
  return (
    <div className="p-6 space-y-4">
      <h2 className="text-2xl font-bold">Using Utility Functions</h2>
      
      <div className="grid grid-cols-3 gap-4">
        <Image 
          src={getLogoPath('hq-and-global-1.svg')} 
          alt="Main Logo"
          width={80}
          height={80}
          className="w-20 h-auto"
        />
        <Image 
          src={getLogoPath('footerlogo.svg')} 
          alt="Footer Logo"
          width={80}
          height={80}
          className="w-20 h-auto"
        />
        <Image 
          src={getIconPath('file.svg')} 
          alt="File"
          width={80}
          height={80}
          className="w-8 h-8"
        />
      </div>
    </div>
  );
}

// Example 4: Responsive usage
export function ExampleResponsive() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Responsive Asset Usage</h2>
      
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
        {/* Logo that changes size on different screens */}
        <AssetLogo 
          name="footer-logo" 
          size={120}
          className="w-20 h-auto md:w-32 lg:w-40"
        />
        
        {/* Icons in a navigation-like layout */}
        <nav className="flex space-x-4">
          <AssetIcon name="file" size="medium" className="hover:scale-110 transition-transform" />
          <AssetIcon name="globe" size="medium" className="hover:scale-110 transition-transform" />
          <AssetIcon name="window" size="medium" className="hover:scale-110 transition-transform" />
        </nav>
      </div>
    </div>
  );
}
