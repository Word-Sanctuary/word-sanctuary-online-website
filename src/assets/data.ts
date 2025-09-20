/**
 * Data utilities for loading static data assets
 */

import siteConfig from './data/site-config.json';

// Export the site configuration
export { siteConfig };

// Type definitions for the data structures
export interface NavigationItem {
  label: string;
  href: string;
  icon: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface SiteMetadata {
  title: string;
  description: string;
  author: string;
}

export interface HeroConfig {
  useCarousel: boolean;
  staticImage: string;
}

export interface SiteConfig {
  siteMetadata: SiteMetadata;
  hero: HeroConfig;
  navigation: {
    primary: NavigationItem[];
  };
  socialLinks: SocialLink[];
}

// Utility functions for accessing data
export function getNavigationItems(): NavigationItem[] {
  return siteConfig.navigation.primary;
}

export function getSocialLinks(): SocialLink[] {
  return siteConfig.socialLinks;
}

export function getSiteMetadata(): SiteMetadata {
  return siteConfig.siteMetadata;
}

export function getHeroConfig(): HeroConfig {
  return siteConfig.hero;
}

// Get navigation item by href
export function getNavigationItemByHref(href: string): NavigationItem | undefined {
  return siteConfig.navigation.primary.find(item => item.href === href);
}

// Get social link by platform
export function getSocialLinkByPlatform(platform: string): SocialLink | undefined {
  return siteConfig.socialLinks.find(link => link.platform === platform);
}
