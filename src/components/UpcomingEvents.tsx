"use client";

import EventCard from '@/components/ui/EventCard';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  image: string;
  imageAlt?: string;
}

interface UpcomingEventsProps {
  events?: Event[];
  className?: string;
}

const defaultEvents: Event[] = [
  {
    id: '1',
    title: 'International Soul Winning Conference',
    date: '15th July, 2025.',
    time: '7:00 PM GMT',
    image: '/images/image8.png',
    imageAlt: 'International Soul Winning Conference'
  },
  {
    id: '2',
    title: 'International Soul Winning Conference',
    date: '15th July, 2025.',
    time: '7:00 PM GMT',
    image: '/images/image8.png',
    imageAlt: 'International Soul Winning Conference'
  },
  {
    id: '3',
    title: 'International Soul Winning Conference',
    date: '15th July, 2025.',
    time: '7:00 PM GMT',
    image: '/images/image8.png',
    imageAlt: 'International Soul Winning Conference'
  }
];

const UpcomingEvents: React.FC<UpcomingEventsProps> = ({
  events = defaultEvents,
  className = ''
}) => {
  return (
    <div className={`w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-blue-50 flex flex-col justify-start items-center gap-8 sm:gap-10 md:gap-12 lg:gap-14 overflow-hidden ${className}`}>
      {/* Section Header */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col justify-start items-center gap-3 sm:gap-4">
        <div className="w-full text-center text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal font-anton tracking-wider">
          Upcoming Event
        </div>
        <div className="w-full text-center text-neutral-500 text-sm sm:text-base font-normal font-lato">
          These are upcoming Events - Join us!
        </div>
      </div>
      
      {/* Event Cards */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 flex justify-center items-center">
        <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12 justify-items-center">
          {events.map((event) => (
            <EventCard
              key={event.id}
              title={event.title}
              date={event.date}
              time={event.time}
              image={event.image}
              imageAlt={event.imageAlt}
            />
          ))}
        </div>
      </div>
      
      {/* View More Button */}
      <div className="h-10 sm:h-11 px-6 sm:px-8 py-2 sm:py-2.5 bg-white rounded-[100px] inline-flex justify-center items-center gap-2 sm:gap-2.5 cursor-pointer hover:bg-gray-50 transition-colors duration-200">
        <div className="text-center text-black text-xs sm:text-sm font-bold font-lato uppercase">
          View more
        </div>
        <div className="w-5 h-5 sm:w-6 sm:h-6 relative flex items-center justify-center">
          <svg 
            className="w-4 h-4 sm:w-5 sm:h-5 text-black" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
