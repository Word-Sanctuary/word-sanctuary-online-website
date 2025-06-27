/**
 * React hooks for asset management
 * Custom hooks to easily use assets in React components
 */

import { useMemo } from 'react';
import { getAssetPath, getImagePath, getIconPath, getLogoPath } from './index';
import { ICON_ASSETS, LOGO_ASSETS, IMAGE_ASSETS, ASSET_SIZES } from './constants';
import type { AssetCategory } from './index';

/**
 * Hook to get asset path with memoization
 * @param category - Asset category
 * @param filename - Asset filename
 * @returns Memoized asset path
 */
export function useAssetPath(category: AssetCategory, filename: string) {
  return useMemo(() => getAssetPath(category, filename), [category, filename]);
}

/**
 * Hook to get image with metadata
 * @param imageKey - Key of the image asset
 * @returns Image data with path and metadata
 */
export function useImage(imageKey: string) {
  return useMemo(() => {
    const imageData = IMAGE_ASSETS[imageKey];
    if (!imageData) {
      console.warn(`Image asset "${imageKey}" not found`);
      return null;
    }
    
    return {
      src: getImagePath(imageData.filename),
      alt: imageData.alt || '',
      width: imageData.width,
      height: imageData.height,
      ...imageData,
    };
  }, [imageKey]);
}

/**
 * Hook to get icon with metadata
 * @param iconKey - Key of the icon asset
 * @param size - Size variant (optional)
 * @returns Icon data with path and metadata
 */
export function useIcon(iconKey: string, size?: keyof typeof ASSET_SIZES.icons) {
  return useMemo(() => {
    const iconData = ICON_ASSETS[iconKey];
    if (!iconData) {
      console.warn(`Icon asset "${iconKey}" not found`);
      return null;
    }
    
    const iconSize = size ? ASSET_SIZES.icons[size] : undefined;
    
    return {
      src: getIconPath(iconData.filename),
      alt: iconData.alt || '',
      width: iconData.width || iconSize,
      height: iconData.height || iconSize,
      ...iconData,
    };
  }, [iconKey, size]);
}

/**
 * Hook to get logo with metadata
 * @param logoKey - Key of the logo asset
 * @param size - Size variant (optional)
 * @returns Logo data with path and metadata
 */
export function useLogo(logoKey: string, size?: keyof typeof ASSET_SIZES.logos) {
  return useMemo(() => {
    const logoData = LOGO_ASSETS[logoKey];
    if (!logoData) {
      console.warn(`Logo asset "${logoKey}" not found`);
      return null;
    }
    
    const logoSize = size ? ASSET_SIZES.logos[size] : undefined;
    
    return {
      src: getLogoPath(logoData.filename),
      alt: logoData.alt || '',
      width: logoData.width || logoSize,
      height: logoData.height || logoSize,
      ...logoData,
    };
  }, [logoKey, size]);
}
