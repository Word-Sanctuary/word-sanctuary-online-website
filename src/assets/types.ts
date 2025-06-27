/**
 * Type definitions for assets used throughout the application
 */

// Image file extensions
export type ImageExtension = 'jpg' | 'jpeg' | 'png' | 'webp' | 'svg' | 'gif' | 'avif';

// Font file extensions
export type FontExtension = 'woff' | 'woff2' | 'ttf' | 'otf' | 'eot';

// Icon file extensions
export type IconExtension = 'svg' | 'png' | 'ico';

// Asset metadata interface
export interface AssetMetadata {
  filename: string;
  alt?: string;
  width?: number;
  height?: number;
  description?: string;
}

// Image asset interface
export interface ImageAsset extends AssetMetadata {
  extension: ImageExtension;
  category: 'hero' | 'gallery' | 'thumbnail' | 'background' | 'product' | 'misc';
}

// Icon asset interface
export interface IconAsset extends AssetMetadata {
  extension: IconExtension;
  category: 'ui' | 'social' | 'navigation' | 'action' | 'status';
}

// Logo asset interface
export interface LogoAsset extends AssetMetadata {
  extension: ImageExtension;
  variant: 'primary' | 'secondary' | 'monochrome' | 'inverse';
}

// Font asset interface
export interface FontAsset {
  family: string;
  filename: string;
  weight: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  style: 'normal' | 'italic';
  extension: FontExtension;
}

// Font family configuration
export interface FontFamilyConfig {
  variable: string;
  className: string;
  weights: Array<100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900>;
  styles: Array<'normal' | 'italic'>;
}

// Available font families
export type FontFamily = 'anton' | 'lato' | 'inter' | 'geistSans' | 'geistMono';

// Font weight types
export type FontWeight = 'thin' | 'extraLight' | 'light' | 'normal' | 'medium' | 'semiBold' | 'bold' | 'extraBold' | 'black';
