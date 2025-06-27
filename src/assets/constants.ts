/**
 * Asset constants and metadata
 * Centralized place for asset information and configurations
 */

import { ImageAsset, IconAsset, LogoAsset } from './types';

// Logo assets metadata
export const LOGO_ASSETS: Record<string, LogoAsset> = {
  'hq-and-global-main': {
    filename: 'hq-and-global-1.svg',
    extension: 'svg',
    variant: 'primary',
    alt: 'HQ and Global Ministry Logo',
    description: 'Main logo for HQ and Global Ministry',
    width: 3840,
    height: 2160,
  },
  'footer-logo': {
    filename: 'footerlogo.svg',
    extension: 'svg',
    variant: 'secondary',
    alt: 'WSG World Sanctuary Global Logo',
    description: 'Footer logo for World Sanctuary Global',
    width: 285,
    height: 128,
  },
} as const;

// Icon assets metadata
export const ICON_ASSETS: Record<string, IconAsset> = {
  file: {
    filename: 'file.svg',
    extension: 'svg',
    category: 'ui',
    alt: 'File icon',
    description: 'Generic file icon',
  },
  globe: {
    filename: 'globe.svg',
    extension: 'svg',
    category: 'ui',
    alt: 'Globe icon',
    description: 'Globe or world icon',
  },
  window: {
    filename: 'window.svg',
    extension: 'svg',
    category: 'ui',
    alt: 'Window icon',
    description: 'Window or application icon',
  },
} as const;

// Image assets metadata (add as you include more images)
export const IMAGE_ASSETS: Record<string, ImageAsset> = {
  // Add your image assets here
} as const;

// Asset size configurations
export const ASSET_SIZES = {
  icons: {
    small: 16,
    medium: 24,
    large: 32,
    xlarge: 48,
  },
  logos: {
    small: 120,
    medium: 180,
    large: 240,
    xlarge: 320,
  },
  images: {
    thumbnail: 150,
    small: 300,
    medium: 600,
    large: 1200,
    xlarge: 1920,
  },
} as const;

// Supported formats for different asset types
export const SUPPORTED_FORMATS = {
  images: ['jpg', 'jpeg', 'png', 'webp', 'svg', 'gif', 'avif'],
  icons: ['svg', 'png', 'ico'],
  fonts: ['woff', 'woff2', 'ttf', 'otf', 'eot'],
} as const;

// Font configurations
export const FONT_FAMILIES = {
  anton: 'var(--font-anton)',
  lato: 'var(--font-lato)',
  inter: 'var(--font-inter)',
  geistSans: 'var(--font-geist-sans)',
  geistMono: 'var(--font-geist-mono)',
} as const;

// Font classes for Tailwind CSS
export const FONT_CLASSES = {
  anton: 'font-anton',
  lato: 'font-lato',
  inter: 'font-inter',
  geistSans: 'font-geist-sans',
  geistMono: 'font-geist-mono',
} as const;

// Font weights available for each font
export const FONT_WEIGHTS = {
  anton: {
    normal: '400',
  },
  lato: {
    thin: '100',
    light: '300',
    normal: '400',
    bold: '700',
    black: '900',
  },
  inter: {
    thin: '100',
    extraLight: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semiBold: '600',
    bold: '700',
    extraBold: '800',
    black: '900',
  },
  geistSans: {
    normal: '400',
  },
  geistMono: {
    normal: '400',
  },
} as const;
