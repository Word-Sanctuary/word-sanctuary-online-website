# Font Setup Documentation

## Available Fonts

The following fonts have been installed and configured for use in the Word Sanctuary Global website:

### 1. Anton
- **Type**: Display font
- **Weight**: 400 (Normal)
- **Best for**: Headlines, impact text, banners
- **Usage**: `className="font-anton"`
- **CSS Variable**: `var(--font-anton)`

### 2. Lato
- **Type**: Sans-serif
- **Weights**: 100 (Thin), 300 (Light), 400 (Normal), 700 (Bold), 900 (Black)
- **Best for**: Body text, readable content, paragraphs
- **Usage**: `className="font-lato"`
- **CSS Variable**: `var(--font-lato)`

### 3. Inter
- **Type**: Sans-serif
- **Weights**: 100-900 (Variable font)
- **Best for**: UI elements, modern interfaces, buttons
- **Usage**: `className="font-inter"`
- **CSS Variable**: `var(--font-inter)`

## Implementation Details

### Font Loading
Fonts are loaded using Next.js Google Fonts optimization in `src/app/layout.tsx`:

```tsx
import { Anton, Lato, Inter } from "next/font/google";

const anton = Anton({
  weight: "400",
  variable: "--font-anton",
  subsets: ["latin"],
});

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
```

### Tailwind Configuration
Fonts are configured in `tailwind.config.ts` to be used with Tailwind CSS classes:

```typescript
theme: {
  extend: {
    fontFamily: {
      anton: ['var(--font-anton)'],
      lato: ['var(--font-lato)'],
      inter: ['var(--font-inter)'],
    },
  },
}
```

## Usage Examples

### Tailwind CSS Classes

```tsx
// Anton for headlines
<h1 className="font-anton text-4xl font-bold">
  MAJOR HEADLINE
</h1>

// Lato for body text
<p className="font-lato text-lg">
  This is readable body text using Lato font.
</p>

// Inter for UI elements
<button className="font-inter text-sm font-medium">
  Click Here
</button>
```

### CSS Variables

```css
.custom-heading {
  font-family: var(--font-anton);
}

.custom-body {
  font-family: var(--font-lato);
}

.custom-ui {
  font-family: var(--font-inter);
}
```

### Font Weights with Tailwind

```tsx
// Lato with different weights
<p className="font-lato font-thin">Thin text</p>
<p className="font-lato font-light">Light text</p>
<p className="font-lato">Normal text</p>
<p className="font-lato font-bold">Bold text</p>
<p className="font-lato font-black">Black text</p>

// Inter with different weights
<span className="font-inter font-medium">Medium weight</span>
<span className="font-inter font-semibold">Semi-bold weight</span>
```

## Constants and Types

Font configurations are available in `src/assets/constants.ts`:

```typescript
export const FONT_FAMILIES = {
  anton: 'var(--font-anton)',
  lato: 'var(--font-lato)',
  inter: 'var(--font-inter)',
} as const;

export const FONT_CLASSES = {
  anton: 'font-anton',
  lato: 'font-lato',
  inter: 'font-inter',
} as const;
```

TypeScript types are defined in `src/assets/types.ts`:

```typescript
export type FontFamily = 'anton' | 'lato' | 'inter' | 'geistSans' | 'geistMono';
export type FontWeight = 'thin' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black';
```

## Best Practices

1. **Anton**: Use for impactful headlines and titles
2. **Lato**: Use for body text, descriptions, and content that needs to be easily readable
3. **Inter**: Use for UI elements, buttons, navigation, and modern interface components

## Performance

- All fonts are optimized using Next.js Google Fonts
- Fonts are preloaded and served with optimal performance
- CSS variables allow for easy theming and customization
- Font display is set to 'swap' for better loading performance
