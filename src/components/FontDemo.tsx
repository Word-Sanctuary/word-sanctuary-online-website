/**
 * Font Demo Component
 * Demonstrates the available fonts in the application
 */

import React from 'react';

const FontDemo: React.FC = () => {
  return (
    <div className="p-8 space-y-6">
      <h1 className="text-3xl font-bold mb-8">Available Fonts</h1>
      
      {/* Anton Font */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-700">Anton</h2>
        <p className="font-anton text-2xl">
          The quick brown fox jumps over the lazy dog
        </p>
        <p className="font-anton text-4xl font-bold">
          WORD SANCTUARY GLOBAL
        </p>
        <code className="text-sm text-gray-600">className=&quot;font-anton&quot;</code>
      </div>

      {/* Lato Font */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-700">Lato</h2>
        <p className="font-lato text-lg font-light">
          The quick brown fox jumps over the lazy dog (Light)
        </p>
        <p className="font-lato text-lg">
          The quick brown fox jumps over the lazy dog (Regular)
        </p>
        <p className="font-lato text-lg font-bold">
          The quick brown fox jumps over the lazy dog (Bold)
        </p>
        <p className="font-lato text-lg font-black">
          The quick brown fox jumps over the lazy dog (Black)
        </p>
        <code className="text-sm text-gray-600">className=&quot;font-lato&quot;</code>
      </div>

      {/* Inter Font */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-700">Inter</h2>
        <p className="font-inter text-lg font-light">
          The quick brown fox jumps over the lazy dog (Light)
        </p>
        <p className="font-inter text-lg">
          The quick brown fox jumps over the lazy dog (Regular)
        </p>
        <p className="font-inter text-lg font-medium">
          The quick brown fox jumps over the lazy dog (Medium)
        </p>
        <p className="font-inter text-lg font-semibold">
          The quick brown fox jumps over the lazy dog (Semi Bold)
        </p>
        <p className="font-inter text-lg font-bold">
          The quick brown fox jumps over the lazy dog (Bold)
        </p>
        <code className="text-sm text-gray-600">className=&quot;font-inter&quot;</code>
      </div>

      {/* Usage Examples */}
      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Usage Examples</h3>
        <div className="space-y-2 text-sm">
          <p><code>font-anton</code> - Great for headlines and impact text</p>
          <p><code>font-lato</code> - Excellent for body text and readable content</p>
          <p><code>font-inter</code> - Perfect for UI elements and modern interfaces</p>
        </div>
      </div>
    </div>
  );
};

export default FontDemo;
