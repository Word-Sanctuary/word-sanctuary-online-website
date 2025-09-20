"use client";

interface CarouselNavButtonProps {
  direction: 'left' | 'right';
  onClick: () => void;
  disabled?: boolean;
  className?: string;
}

const CarouselNavButton: React.FC<CarouselNavButtonProps> = ({
  direction,
  onClick,
  disabled = false,
  className = ''
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`p-2.5 bg-white rounded-lg inline-flex justify-center items-center gap-2.5 hover:bg-gray-50 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg ${className}`}
      style={{ zIndex: 30 }}
    >
      <div className="w-6 h-6 relative flex items-center justify-center">
        {direction === 'left' ? (
          <svg 
            className="w-4 h-4 text-black" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
          </svg>
        ) : (
          <svg 
            className="w-4 h-4 text-black" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
          </svg>
        )}
      </div>
    </button>
  );
};

export default CarouselNavButton;
