"use client";

import React from 'react';
import Image from 'next/image';

export interface ActionLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  color?: 'light' | 'dark';
  showArrow?: boolean;
}

const ActionLink: React.FC<ActionLinkProps> = ({
  children,
  size = 'md',
  color = 'light',
  showArrow = true,
  className = '',
  ...props
}) => {
  // Size classes
  const sizeClasses = {
    sm: 'text-xs gap-1',
    md: 'text-sm gap-1',
    lg: 'text-base gap-2'
  };

  // Color classes
  const colorClasses = {
    light: 'text-neutral-200',
    dark: 'text-black'
  };

  // Base classes with hover effect
  const baseClasses = 'inline-flex items-center font-bold tracking-wide font-inter transition-all duration-200 hover:gap-2 focus:outline-none group';

  // Arrow size based on button size
  const arrowSize = {
    sm: 'w-2.5 h-2.5',
    md: 'w-3 h-3',
    lg: 'w-3.5 h-3.5'
  };

  // Combine classes
  const classes = `${baseClasses} ${sizeClasses[size]} ${colorClasses[color]} ${className}`.trim();

  return (
    <a className={classes} {...props}>
      <span>{children}</span>
      {showArrow && (
        <div className={`${arrowSize[size]} relative overflow-hidden flex-shrink-0 transition-transform duration-200 group-hover:translate-x-0.5`}>
          <Image
            src="/icons/arrow-narrow-right.svg"
            alt=""
            width={13}
            height={12}
            className="object-contain"
            style={{
              filter: color === 'dark' ? 'invert(1)' : 'none'
            }}
          />
        </div>
      )}
    </a>
  );
};

export default ActionLink;
