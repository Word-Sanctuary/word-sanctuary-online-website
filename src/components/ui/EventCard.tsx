"use client";

import Image from 'next/image';

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  image: string;
  imageAlt?: string;
  className?: string;
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  date,
  time,
  image,
  imageAlt = "Event image",
  className = ''
}) => {
  return (
    <div className={`w-full max-w-sm sm:max-w-md lg:w-96 bg-white rounded-2xl shadow-[0px_12px_32px_2px_rgba(0,0,0,0.12)] outline outline-1 outline-offset-[-1px] outline-blue-950/20 flex flex-col justify-start items-start gap-3 sm:gap-4 overflow-hidden ${className}`}>
      {/* Event Image */}
      <div className="w-full h-64 sm:h-80 lg:h-96 relative bg-neutral-900 overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 384px"
        />
      </div>
      
      {/* Event Details */}
      <div className="w-full px-3 sm:px-4 pb-3 sm:pb-4 flex flex-col justify-start items-start gap-3 sm:gap-4">
        {/* Event Title */}
        <div className="w-full flex justify-start items-end gap-2">
          <div className="text-black text-sm sm:text-base font-bold font-lato leading-tight">
            {title}
          </div>
        </div>
        
        {/* Event Date and Time */}
        <div className="w-full flex flex-col justify-start items-start gap-2">
          {/* Date */}
          <div className="w-full flex justify-start items-center gap-2">
            <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 relative flex items-center justify-center flex-shrink-0">
              <svg width="16" height="16" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_4892_8426)">
                  <path d="M16.25 7.70605H2.75M12.5 1.70605V4.70605M6.5 1.70605V4.70605M6.35 16.7061H12.65C13.9101 16.7061 14.5402 16.7061 15.0215 16.4608C15.4448 16.2451 15.789 15.9009 16.0048 15.4775C16.25 14.9962 16.25 14.3662 16.25 13.1061V6.80605C16.25 5.54594 16.25 4.91588 16.0048 4.43458C15.789 4.01121 15.4448 3.66701 15.0215 3.45129C14.5402 3.20605 13.9101 3.20605 12.65 3.20605H6.35C5.08988 3.20605 4.45982 3.20605 3.97852 3.45129C3.55516 3.66701 3.21095 4.01121 2.99524 4.43458C2.75 4.91588 2.75 5.54594 2.75 6.80605V13.1061C2.75 14.3662 2.75 14.9962 2.99524 15.4775C3.21095 15.9009 3.55516 16.2451 3.97852 16.4608C4.45982 16.7061 5.08988 16.7061 6.35 16.7061Z" stroke="#666666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <defs>
                  <clipPath id="clip0_4892_8426">
                    <rect width="18" height="18" fill="white" transform="translate(0.5 0.206055)"/>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="text-stone-500 text-xs sm:text-sm font-normal font-lato tracking-wide">
              {date}
            </div>
          </div>
          
          {/* Time */}
          <div className="w-full flex justify-start items-center gap-2">
            <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 relative flex items-center justify-center flex-shrink-0">
              <svg width="16" height="16" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.25 2.45605L2 4.70605M17 4.70605L14.75 2.45605M5 14.4561L3.5 15.9561M14 14.4561L15.5 15.9561M9.5 6.95605V9.95605L11 11.4561M9.5 15.9561C11.0913 15.9561 12.6174 15.3239 13.7426 14.1987C14.8679 13.0735 15.5 11.5474 15.5 9.95605C15.5 8.36476 14.8679 6.83863 13.7426 5.71341C12.6174 4.5882 11.0913 3.95605 9.5 3.95605C7.9087 3.95605 6.38258 4.5882 5.25736 5.71341C4.13214 6.83863 3.5 8.36476 3.5 9.95605C3.5 11.5474 4.13214 13.0735 5.25736 14.1987C6.38258 15.3239 7.9087 15.9561 9.5 15.9561Z" stroke="#666666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="text-stone-500 text-xs sm:text-sm font-normal font-lato tracking-wide">
              {time}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
