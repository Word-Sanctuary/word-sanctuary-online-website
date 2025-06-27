/**
 * Assets configuration and utility functions
 * This file provides a centralized way to manage and access all assets in the application
 */

// Asset paths configuration
export const ASSET_PATHS = {
  images: '/images',
  icons: '/icons',
  logos: '/logos',
  fonts: '/fonts',
} as const;

// Type definitions for asset categories
export type AssetCategory = keyof typeof ASSET_PATHS;

/**
 * Get the full path for a public asset
 * @param category - The asset category (images, icons, logos, fonts)
 * @param filename - The filename of the asset
 * @returns The full path to the asset
 */
export function getAssetPath(category: AssetCategory, filename: string): string {
  return `${ASSET_PATHS[category]}/${filename}`;
}

/**
 * Get the full path for an image asset
 * @param filename - The filename of the image
 * @returns The full path to the image
 */
export function getImagePath(filename: string): string {
  return getAssetPath('images', filename);
}

/**
 * Get the full path for an icon asset
 * @param filename - The filename of the icon
 * @returns The full path to the icon
 */
export function getIconPath(filename: string): string {
  return getAssetPath('icons', filename);
}

/**
 * Get the full path for a logo asset
 * @param filename - The filename of the logo
 * @returns The full path to the logo
 */
export function getLogoPath(filename: string): string {
  return getAssetPath('logos', filename);
}

/**
 * Get the full path for a font asset
 * @param filename - The filename of the font
 * @returns The full path to the font
 */
export function getFontPath(filename: string): string {
  return getAssetPath('fonts', filename);
}

// Common asset collections for easy access
export const COMMON_ASSETS = {
  logos: {
    main: getLogoPath('hq-and-global-1.svg'),
    footer: getLogoPath('footerlogo.svg'),
    // Add more logos as needed
  },
  icons: {
    file: getIconPath('file.svg'),
    globe: getIconPath('globe.svg'),
    window: getIconPath('window.svg'),
    // Add more icons as needed
  },
} as const;

// Export types for TypeScript support
export type CommonLogos = keyof typeof COMMON_ASSETS.logos;
export type CommonIcons = keyof typeof COMMON_ASSETS.icons;

// Re-export from other modules for convenience
export * from './types';
export * from './constants';
export * from './hooks';
export * from './components';
export * from './data';
