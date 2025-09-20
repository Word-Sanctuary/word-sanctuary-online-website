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
    <div className={`w-full py-24 bg-blue-50 inline-flex flex-col justify-start items-center gap-14 overflow-hidden ${className}`}>
      {/* Section Header */}
      <div className="self-stretch h-24 flex flex-col justify-start items-center gap-4">
        <div className="self-stretch text-center justify-center text-black text-5xl font-normal font-anton tracking-wider">
          Upcoming Event
        </div>
        <div className="self-stretch flex-1 text-center justify-center text-neutral-500 text-base font-normal font-lato">
          These are upcoming Events - Join us!
        </div>
      </div>
      
      {/* Event Cards */}
      <div className="self-stretch px-12 flex justify-center items-center">
        <div className="inline-flex justify-between items-center gap-12">
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
      <div className="h-11 px-8 py-2.5 bg-white rounded-[100px] inline-flex justify-center items-center gap-2.5 cursor-pointer hover:bg-gray-50 transition-colors duration-200">
        <div className="justify-center text-black text-sm font-bold font-lato uppercase">
          View more
        </div>
        <div className="w-6 h-6 relative flex items-center justify-center">
          <svg 
            className="w-5 h-5 text-black" 
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
