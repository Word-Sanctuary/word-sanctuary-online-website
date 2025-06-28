"use client";

import React from 'react';
import Image from 'next/image';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  showArrow?: boolean;
  isLoading?: boolean;
  fullWidth?: boolean;
  href?: string;
  as?: 'button' | 'a';
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  showArrow = false,
  isLoading = false,
  fullWidth = false,
  href,
  as = 'button',
  className = '',
  disabled,
  ...props
}) => {
  // Base classes
  const baseClasses = 'inline-flex justify-center items-center gap-2 font-bold tracking-wide transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-[0.98]';

  // Size classes
  const sizeClasses = {
    sm: 'h-8 px-4 py-2 text-xs',
    md: 'h-10 px-6 py-2.5 text-sm',
    lg: 'h-11 px-8 py-2.5 text-sm'
  };

  // Variant classes
  const variantClasses = {
    primary: 'bg-sky-500 hover:bg-sky-600 hover:shadow-md text-white rounded-full shadow-sm focus:ring-sky-500 hover:brightness-110',
    secondary: 'bg-white hover:bg-gray-50 hover:shadow-md text-sky-900 rounded-full shadow-sm focus:ring-sky-500 hover:brightness-105',
    outline: 'bg-transparent hover:bg-white/15 hover:shadow-md text-white rounded-full outline outline-1 outline-offset-[-1px] outline-white focus:ring-white hover:outline-white/80',
    ghost: 'bg-transparent hover:bg-white/10 text-white focus:ring-white rounded-lg hover:brightness-110',
    link: 'bg-transparent text-current p-0 h-auto focus:ring-current'
  };

  // Full width class
  const widthClass = fullWidth ? 'w-full' : '';

  // Loading state
  const isDisabled = disabled || isLoading;

  // Combine all classes
  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${widthClass} group ${className}`.trim();

  // Arrow component
  const ArrowIcon = () => (
    <div className="w-3 h-3 relative overflow-hidden flex-shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">
      <Image
        src="/icons/arrow-narrow-right.svg"
        alt=""
        width={13}
        height={12}
        className="object-contain"
      />
    </div>
  );

  // Loading spinner
  const LoadingSpinner = () => (
    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin flex-shrink-0" />
  );

  // Content with optional arrow
  const content = (
    <>
      {isLoading && <LoadingSpinner />}
      <span className={variant === 'link' ? 'font-inter' : 'font-lato'}>
        {children}
      </span>
      {showArrow && !isLoading && <ArrowIcon />}
    </>
  );

  // Render as link if href is provided
  if (as === 'a' || href) {
    return (
      <a
        href={href}
        className={classes}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </a>
    );
  }

  // Render as button
  return (
    <button
      className={classes}
      disabled={isDisabled}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;
