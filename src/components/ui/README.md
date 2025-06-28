# UI Components

This directory contains reusable UI components for the Word Sanctuary website.

## Components

### Button

A versatile button component that supports multiple variants, sizes, and states.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'ghost' \| 'link'` | `'primary'` | Visual style variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| `children` | `React.ReactNode` | - | Button content |
| `showArrow` | `boolean` | `false` | Show arrow icon |
| `isLoading` | `boolean` | `false` | Loading state |
| `fullWidth` | `boolean` | `false` | Full width button |
| `href` | `string` | - | URL for link buttons |
| `as` | `'button' \| 'a'` | `'button'` | HTML element type |
| `disabled` | `boolean` | `false` | Disabled state |
| `className` | `string` | `''` | Additional CSS classes |

#### Variants

- **primary**: Sky-500 background, white text (main action buttons)
- **secondary**: White background, sky-900 text (navigation, forms)
- **outline**: Transparent background, white border and text (on dark backgrounds)
- **ghost**: Transparent background, no border (subtle actions)
- **link**: No background, text only with hover effects (inline actions)

#### Sizes

- **sm**: 32px height, 16px padding
- **md**: 40px height, 24px padding
- **lg**: 44px height, 32px padding

#### Usage Examples

```tsx
import { Button } from '@/components/ui';

// Primary CTA button
<Button variant="primary" size="lg" showArrow>
  JOIN US ON YOUTUBE
</Button>

// Navigation button
<Button variant="secondary" href="/signup" as="a">
  JOIN US
</Button>

// Outline button for dark backgrounds
<Button variant="outline" size="md">
  SEE ALL INSTALLATIONS
</Button>

// Loading button
<Button variant="primary" isLoading>
  Creating Account...
</Button>

// Full width form button
<Button variant="primary" fullWidth type="submit">
  SEND MESSAGE
</Button>
```

### ActionLink

A specialized link component for "Learn More" style actions with hover animations.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | - | Link text |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Link size |
| `color` | `'light' \| 'dark'` | `'light'` | Color scheme |
| `showArrow` | `boolean` | `true` | Show arrow icon |
| `href` | `string` | - | Link URL |
| `className` | `string` | `''` | Additional CSS classes |

#### Usage Examples

```tsx
import { ActionLink } from '@/components/ui';

// Light color for dark backgrounds
<ActionLink href="/about" color="light" size="sm">
  LEARN MORE
</ActionLink>

// Dark color for light backgrounds
<ActionLink href="/community" color="dark" size="md">
  SEE ALL INSTALLATIONS
</ActionLink>

// Without arrow
<ActionLink href="/contact" showArrow={false}>
  GET IN TOUCH
</ActionLink>
```

## Design System

### Colors

- **Primary**: Sky-500 (#0ea5e9)
- **Secondary**: Sky-900 (#0c4a6e)
- **Text Light**: White (#ffffff)
- **Text Dark**: Black (#000000)
- **Text Muted**: Neutral-200 (#e5e5e5)

### Typography

- **Button Text**: Lato font family, bold weight, tracking-wide
- **Action Links**: Inter font family, bold weight, tracking-wide

### Icons

All buttons and action links use the `arrow-narrow-right.svg` icon when `showArrow` is enabled. The icon automatically adjusts color based on the component's color scheme.

### Responsive Design

All components are fully responsive with appropriate sizing for mobile, tablet, and desktop viewports.

### Accessibility

- Proper focus states with ring outlines
- Disabled states clearly indicated
- Loading states with proper ARIA attributes
- Semantic HTML elements (button vs anchor)

## Migration Guide

### Replacing Old Buttons

**Before:**
```tsx
<button className="h-11 px-8 py-2.5 bg-sky-500 rounded-full hover:bg-sky-600">
  LEARN MORE
</button>
```

**After:**
```tsx
<Button variant="primary" size="lg" showArrow>
  LEARN MORE
</Button>
```

### Replacing Action Links

**Before:**
```tsx
<div className="flex items-center gap-1 hover:gap-2">
  <div className="text-neutral-200 text-sm font-bold">LEARN MORE</div>
  <svg className="w-3 h-3">...</svg>
</div>
```

**After:**
```tsx
<ActionLink href="/about" color="light" size="md">
  LEARN MORE
</ActionLink>
```

## Best Practices

1. **Use semantic variants**: Choose the variant that matches the button's purpose
2. **Consistent sizing**: Use the same size for similar actions within a section
3. **Appropriate contrast**: Use light colors on dark backgrounds and vice versa
4. **Loading states**: Always provide loading feedback for async actions
5. **Accessibility**: Include proper ARIA labels and focus management

## Browser Support

These components support all modern browsers including:
- Chrome 90+
- Firefox 90+
- Safari 14+
- Edge 90+
