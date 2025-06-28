'use client';

import { useEffect } from 'react';

interface PerformanceMetrics {
  lcp?: number; // Largest Contentful Paint
  fid?: number; // First Input Delay
  cls?: number; // Cumulative Layout Shift
  ttfb?: number; // Time to First Byte
}

export default function PerformanceMonitor() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const metrics: PerformanceMetrics = {};

    // Monitor Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        switch (entry.entryType) {
          case 'largest-contentful-paint':
            metrics.lcp = entry.startTime;
            break;
          case 'first-input':
            metrics.fid = (entry as any).processingStart - entry.startTime;
            break;
          case 'layout-shift':
            if (!(entry as any).hadRecentInput) {
              metrics.cls = (metrics.cls || 0) + (entry as any).value;
            }
            break;
        }
      }
    });

    // Observe performance entries
    try {
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
    } catch (e) {
      // Ignore if not supported
    }

    // Monitor TTFB
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        metrics.ttfb = navigation.responseStart - navigation.requestStart;
      }

      // Log metrics in development
      if (process.env.NODE_ENV === 'development') {
        console.group('🚀 Performance Metrics');
        console.log('LCP (Largest Contentful Paint):', metrics.lcp?.toFixed(2) + 'ms');
        console.log('FID (First Input Delay):', metrics.fid?.toFixed(2) + 'ms');
        console.log('CLS (Cumulative Layout Shift):', metrics.cls?.toFixed(3));
        console.log('TTFB (Time to First Byte):', metrics.ttfb?.toFixed(2) + 'ms');
        console.groupEnd();
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}
