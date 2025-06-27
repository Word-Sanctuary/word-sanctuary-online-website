# Assets Management System

This directory contains a comprehensive asset management system for the Word Sanctuary website. It provides organized storage, easy access, and type-safe usage of all application assets.

## Directory Structure

```
src/assets/
├── index.ts          # Main entry point with utility functions
├── types.ts          # TypeScript type definitions
├── constants.ts      # Asset metadata and configurations
├── hooks.ts          # React hooks for asset usage
├── components.tsx    # React components for common asset usage
├── data/            # Static data files (JSON, etc.)
├── fonts/           # Local font files
├── images/          # Source images (for processing)
├── icons/           # Source icons
├── logos/           # Source logos
└── styles/          # Additional CSS/SCSS files

public/
├── images/          # Optimized images
├── icons/           # Optimized icons
├── logos/           # Optimized logos
└── fonts/           # Web fonts
```

## Usage Examples

### Basic Asset Path Resolution

```typescript
import { getImagePath, getIconPath, getLogoPath } from '@/assets';

// Get asset paths
const heroImage = getImagePath('hero-banner.jpg');
const menuIcon = getIconPath('menu.svg');
const companyLogo = getLogoPath('logo-main.svg');
```

### Using React Hooks

```typescript
import { useIcon, useLogo, useImage } from '@/assets/hooks';

function MyComponent() {
  const logo = useLogo('logo-placeholder', 'large');
  const icon = useIcon('file', 'medium');
  
  return (
    <div>
      <img src={logo?.src} alt={logo?.alt} width={logo?.width} />
      <img src={icon?.src} alt={icon?.alt} width={icon?.width} />
    </div>
  );
}
```

### Using Asset Components

```typescript
import { AssetIcon, AssetLogo, AssetImage } from '@/assets/components';

function Header() {
  return (
    <header>
      <AssetLogo name="logo-placeholder" size="large" />
      <AssetIcon name="menu" size={24} />
    </header>
  );
}
```

### Adding New Assets

1. **Add the physical file** to the appropriate `public/` subdirectory
2. **Update constants.ts** with metadata:

```typescript
export const ICON_ASSETS: Record<string, IconAsset> = {
  // ...existing icons
  'new-icon': {
    filename: 'new-icon.svg',
    extension: 'svg',
    category: 'ui',
    alt: 'New icon description',
    description: 'Description of what this icon represents',
  },
};
```

3. **Use the asset** in your components:

```typescript
<AssetIcon name="new-icon" size="medium" />
```

## Best Practices

### File Organization
- Keep source files in `src/assets/` subdirectories
- Place optimized/final files in `public/` subdirectories
- Use descriptive, kebab-case filenames
- Group similar assets together

### Asset Naming
- Use descriptive names: `hero-banner.jpg` instead of `img1.jpg`
- Include size indicators when needed: `logo-small.svg`, `logo-large.svg`
- Use consistent naming patterns across asset types

### Performance
- Use appropriate formats (WebP for images, SVG for icons)
- Provide multiple sizes for responsive images
- Use Next.js Image component for automatic optimization
- Set `priority={true}` for above-the-fold images

### TypeScript
- Always update type definitions when adding new asset categories
- Use the provided interfaces for better type safety
- Leverage the asset metadata for consistent usage

## Asset Categories

### Images (`/public/images/`)
- Hero banners
- Product photos
- Gallery images
- Background images
- Thumbnails

### Icons (`/public/icons/`)
- UI icons (menu, close, arrow, etc.)
- Social media icons
- Status indicators
- Navigation icons

### Logos (`/public/logos/`)
- Company logos (different variants)
- Partner logos
- Brand marks
- Favicons

### Fonts (`/public/fonts/`)
- Custom web fonts
- Icon fonts
- Local font files

## Configuration

The system is highly configurable through `constants.ts`:

- **ASSET_SIZES**: Define standard sizes for different asset types
- **SUPPORTED_FORMATS**: List of allowed file formats
- **Asset metadata**: Rich information about each asset

## Migration from Legacy Assets

If you have existing assets in the root `public/` directory:

1. Move them to appropriate subdirectories
2. Update any hardcoded paths in components
3. Add metadata to `constants.ts`
4. Replace manual imports with the asset system

This system provides a scalable, maintainable approach to asset management that grows with your application.
