# Hero Component

A reusable hero section component with optional carousel background functionality.

## Features

- **Background Carousel**: Automatically cycles through images from the hero-carousel folder
- **Customizable Content**: Configurable badge, title, and CTA button
- **Responsive Design**: Works across all screen sizes
- **Smooth Transitions**: Fade transitions between carousel images
- **Carousel Indicators**: Visual dots to show current image and allow manual navigation
- **Fallback Background**: Falls back to gradient background if carousel is disabled

## Usage

### Basic Usage (No Carousel)

```tsx
import Hero from "@/components/Hero";

<Hero
  title={{
    primary: "Your Main Title",
    secondary: "Your Secondary Title"
  }}
/>
```

### With Carousel (Default Images)

```tsx
import Hero from "@/components/Hero";

<Hero
  useCarousel={true}
  title={{
    primary: "Your Main Title",
    secondary: "Your Secondary Title"
  }}
/>
```

### Full Configuration

```tsx
import Hero from "@/components/Hero";

<Hero
  useCarousel={true}
  badge={{
    text: "BADGE TEXT",
    showDot: true
  }}
  title={{
    primary: "Your Main Title",
    secondary: "Your Secondary Title"
  }}
  ctaButton={{
    text: "BUTTON TEXT",
    onClick: () => {
      // Your click handler
    }
  }}
  backgroundImages={[
    "/custom/image1.jpg",
    "/custom/image2.jpg"
  ]}
/>
```

## Props

### `HeroProps`

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `badge` | `object` | No | Badge configuration |
| `badge.text` | `string` | Yes (if badge) | Text to display in badge |
| `badge.showDot` | `boolean` | No | Whether to show dot indicator |
| `title` | `object` | Yes | Title configuration |
| `title.primary` | `string` | Yes | Primary title text |
| `title.secondary` | `string` | No | Secondary title text (appears in sky-blue) |
| `ctaButton` | `object` | No | CTA button configuration |
| `ctaButton.text` | `string` | Yes (if ctaButton) | Button text |
| `ctaButton.onClick` | `function` | No | Click handler |
| `useCarousel` | `boolean` | No | Enable carousel functionality (default: false) |
| `backgroundImages` | `string[]` | No | Custom carousel images (defaults to hero-carousel folder images) |

## Default Carousel Images

The component automatically uses images from `/public/images/hero-carousel/`:
- `08Artboard 1 (2).jpg`
- `10Artboard 1 (2).jpg`
- `16 (4).jpg`

## Carousel Settings

- **Auto-advance**: Every 6 seconds (relaxed pace)
- **Transition**: 2-second smooth fade with subtle scale effect
- **Manual Control**: Click indicators to jump to specific image
- **Loop**: Infinite loop through images
- **Overlay**: Uses navbar primary color (sky-900) for brand consistency

## Styling

The component uses Tailwind CSS classes and includes:
- Responsive text sizing
- Smooth transitions
- Background overlays for text readability
- Backdrop blur effects
- Custom fonts (Anton, Lato, Inter)

## Implementation Notes

- Images are optimized using Next.js `Image` component
- First image is prioritized for faster loading
- Component handles empty image arrays gracefully
- Carousel automatically disables for single images
- Background pattern overlay adds visual depth
