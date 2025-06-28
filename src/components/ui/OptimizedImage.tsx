'use client';

import Image, { ImageProps } from 'next/image';
import { useState, useCallback } from 'react';

interface OptimizedImageProps extends Omit<ImageProps, 'src' | 'alt'> {
  src: string;
  alt: string;
  quality?: number;
  lazy?: boolean;
  showPlaceholder?: boolean;
  placeholderClassName?: string;
}

export default function OptimizedImage({
  src,
  alt,
  quality = 75,
  lazy = true,
  showPlaceholder = true,
  placeholderClassName = "bg-gray-200 animate-pulse",
  className,
  onLoad,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = useCallback((event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setIsLoading(false);
    onLoad?.(event);
  }, [onLoad]);

  const handleError = useCallback(() => {
    setIsLoading(false);
    setHasError(true);
  }, []);

  if (hasError) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <div className="text-gray-400 text-sm">Failed to load image</div>
      </div>
    );
  }

  return (
    <div className="relative">
      {isLoading && showPlaceholder && (
        <div className={`absolute inset-0 ${placeholderClassName}`} />
      )}
      <Image
        src={src}
        alt={alt}
        quality={quality}
        className={`transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        } ${className}`}
        onLoad={handleLoad}
        onError={handleError}
        loading={lazy ? 'lazy' : 'eager'}
        {...props}
      />
    </div>
  );
}
