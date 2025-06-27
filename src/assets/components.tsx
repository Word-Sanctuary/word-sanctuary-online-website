/**
 * Asset components for easy usage in React
 * Reusable components that automatically handle asset paths and metadata
 */

import Image from 'next/image';
import { useIcon, useLogo, useImage } from './hooks';
import { ASSET_SIZES } from './constants';

// Props interfaces
interface IconProps {
  name: string;
  size?: keyof typeof ASSET_SIZES.icons | number;
  className?: string;
  alt?: string;
}

interface LogoProps {
  name: string;
  size?: keyof typeof ASSET_SIZES.logos | number;
  className?: string;
  alt?: string;
}

interface AssetImageProps {
  name: string;
  className?: string;
  alt?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  fill?: boolean;
}

/**
 * Icon component that automatically resolves icon assets
 */
export function AssetIcon({ name, size = 'medium', className, alt }: IconProps) {
  const icon = useIcon(name, typeof size === 'string' ? size : undefined);
  
  if (!icon) {
    return null;
  }
  
  const iconSize = typeof size === 'number' ? size : (icon.width || ASSET_SIZES.icons.medium);
  
  return (
    <Image
      src={icon.src}
      alt={alt || icon.alt}
      width={iconSize}
      height={iconSize}
      className={className}
    />
  );
}

/**
 * Logo component that automatically resolves logo assets
 */
export function AssetLogo({ name, size = 'medium', className, alt }: LogoProps) {
  const logo = useLogo(name, typeof size === 'string' ? size : undefined);
  
  if (!logo) {
    return null;
  }
  
  const logoSize = typeof size === 'number' ? size : (logo.width || ASSET_SIZES.logos.medium);
  
  return (
    <Image
      src={logo.src}
      alt={alt || logo.alt}
      width={logoSize}
      height={logo.height || logoSize}
      className={className}
    />
  );
}

/**
 * Image component that automatically resolves image assets
 */
export function AssetImage({ 
  name, 
  className, 
  alt, 
  width, 
  height, 
  priority = false, 
  fill = false 
}: AssetImageProps) {
  const image = useImage(name);
  
  if (!image) {
    return null;
  }
  
  if (fill) {
    return (
      <Image
        src={image.src}
        alt={alt || image.alt}
        fill
        className={className}
        priority={priority}
      />
    );
  }
  
  return (
    <Image
      src={image.src}
      alt={alt || image.alt}
      width={width || image.width || 300}
      height={height || image.height || 200}
      className={className}
      priority={priority}
    />
  );
}
