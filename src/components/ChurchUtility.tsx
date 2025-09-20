"use client";

import { useState, useEffect } from "react";

interface ChurchUtilityProps {
  className?: string;
}

type TabType = 'info' | 'schedule' | 'notes' | 'bible';

export default function ChurchUtility({ className = "" }: ChurchUtilityProps) {
  const [activeTab, setActiveTab] = useState<TabType>('info');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const tabs = [
    { id: 'info' as TabType, label: 'Info board', icon: 'info' },
    { id: 'schedule' as TabType, label: 'Schedule', icon: 'schedule' },
    { id: 'notes' as TabType, label: 'Note', icon: 'notes' },
    { id: 'bible' as TabType, label: 'Bible', icon: 'bible' }
  ];

  const renderTabIcon = (iconType: string, isActive: boolean) => {
    const iconClass = isActive ? "text-slate-900" : "text-neutral-400";

    switch (iconType) {
      case 'info':
        return (
          <div className="w-6 h-6 flex items-center justify-center">
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className={iconClass}>
              <path d="M12.8809 7.29781L17.6538 8.5695M11.8578 11.0947L14.2442 11.7304M11.9765 18.2477L12.9311 18.5021C15.631 19.2214 16.981 19.5811 18.0445 18.9706C19.108 18.36 19.4698 17.0176 20.1932 14.3329L21.2163 10.536C21.9398 7.8513 22.3015 6.50893 21.6875 5.45141C21.0735 4.39389 19.7235 4.0342 17.0235 3.31483L16.0689 3.06049C13.369 2.34111 12.019 1.98143 10.9555 2.59199C9.89196 3.20255 9.53023 4.54492 8.80678 7.22966L7.78366 11.0265C7.0602 13.7112 6.69848 15.0535 7.3125 16.111C7.92652 17.1686 9.27651 17.5284 11.9765 18.2477Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M12 21.2274L11.0477 21.4867C8.35403 22.2202 7.00722 22.5869 5.94619 21.9644C4.88517 21.3419 4.52429 19.9732 3.80253 17.2358L2.78182 13.3645C2.06006 10.6271 1.69918 9.25843 2.31177 8.18017C2.84167 7.24744 4 7.2814 5.5 7.28128" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        );
      case 'schedule':
        return (
          <div className="w-6 h-6 flex items-center justify-center">
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" className={iconClass}>
              <g clipPath="url(#clip0_4892_8426)">
                <path d="M16.25 7.70605H2.75M12.5 1.70605V4.70605M6.5 1.70605V4.70605M6.35 16.7061H12.65C13.9101 16.7061 14.5402 16.7061 15.0215 16.4608C15.4448 16.2451 15.789 15.9009 16.0048 15.4775C16.25 14.9962 16.25 14.3662 16.25 13.1061V6.80605C16.25 5.54594 16.25 4.91588 16.0048 4.43458C15.789 4.01121 15.4448 3.66701 15.0215 3.45129C14.5402 3.20605 13.9101 3.20605 12.65 3.20605H6.35C5.08988 3.20605 4.45982 3.20605 3.97852 3.45129C3.55516 3.66701 3.21095 4.01121 2.99524 4.43458C2.75 4.91588 2.75 5.54594 2.75 6.80605V13.1061C2.75 14.3662 2.75 14.9962 2.99524 15.4775C3.21095 15.9009 3.55516 16.2451 3.97852 16.4608C4.45982 16.7061 5.08988 16.7061 6.35 16.7061Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              <defs>
                <clipPath id="clip0_4892_8426">
                  <rect width="18" height="18" fill="white" transform="translate(0.5 0.206055)"/>
                </clipPath>
              </defs>
            </svg>
          </div>
        );
      case 'notes':
        return (
          <div className="w-6 h-6 flex items-center justify-center">
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" className={iconClass}>
              <path d="M14.5 2.5H4.5C3.11929 2.5 2 3.61929 2 5V14C2 15.3807 3.11929 16.5 4.5 16.5H14.5C15.8807 16.5 17 15.3807 17 14V5C17 3.61929 15.8807 2.5 14.5 2.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6.5 6.5H12.5M6.5 9.5H12.5M6.5 12.5H9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        );
      case 'bible':
        return (
          <div className="w-6 h-6 flex items-center justify-center">
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className={iconClass}>
              <path d="M8 2.28125V18.2812" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14.1484 6.15005V13.8749" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16.8047 8.44104H11.4883" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M20 22.2812H6C4.89543 22.2812 4 21.3858 4 20.2812M4 20.2812C4 19.1767 4.89543 18.2812 6 18.2812H20V6.28125C20 4.39563 20 3.45282 19.4142 2.86704C18.8284 2.28125 17.8856 2.28125 16 2.28125H10C7.17157 2.28125 5.75736 2.28125 4.87868 3.15993C4 4.03861 4 5.45282 4 8.28125V20.2812Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M19.5 18.2812C19.5 18.2812 18.5 19.044 18.5 20.2812C18.5 21.5185 19.5 22.2812 19.5 22.2812" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'info':
        return <InfoBoardTab />;
      case 'schedule':
        return <ScheduleTab />;
      case 'notes':
        return <NotesTab />;
      case 'bible':
        return <BibleTab />;
      default:
        return null;
    }
  };

  return (
    <div className={`relative bg-white overflow-hidden h-full flex flex-col ${className}`}>
      {/* Tab Navigation - Bottom on desktop, top on mobile */}
      <div className={`w-full px-6 py-4 ${isMobile ? 'order-1' : 'order-2'} bg-white shadow-[0px_-2px_24px_0px_rgba(0,0,0,0.12)] border-b border-slate-900/20 flex flex-col justify-start items-start gap-2.5 overflow-hidden z-10 flex-shrink-0`}>
        <div className="self-stretch flex justify-between items-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="w-14 flex flex-col justify-start items-center gap-2 hover:opacity-80 transition-opacity"
            >
              {renderTabIcon(tab.icon, activeTab === tab.id)}
              <div className={`self-stretch text-center justify-center text-xs font-bold font-['Lato'] ${
                activeTab === tab.id ? 'text-slate-900' : 'text-neutral-400'
              }`}>
                {tab.label}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content - Full area with proper spacing for tabs */}
      <div className={`w-full flex-1 ${isMobile ? 'order-2' : 'order-1'} overflow-hidden`}>
        {renderTabContent()}
      </div>
    </div>
  );
}

// Info Board Tab Component
function InfoBoardTab() {
  const forms = [
    { label: 'Guest', url: 'https://forms.google.com/guest' },
    { label: 'Life Class', url: 'https://forms.google.com/lifeclass' },
    { label: 'Counseling', url: 'https://forms.google.com/counseling' },
    { label: 'Prayers', url: 'https://forms.google.com/prayers' },
    { label: 'Accepting Jesus', url: 'https://forms.google.com/acceptingjesus' }
  ];

  return (
    <div className="w-full h-full flex flex-col p-4 gap-4">
      <div className="text-black text-base font-medium font-['Lato']">
        Fill the Forms, if you are or need info on any of the following:
      </div>
      <div className="flex-1 flex flex-col justify-start items-start gap-2 overflow-y-auto">
        {forms.map((form, index) => (
          <a
            key={index}
            href={form.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full p-4 bg-neutral-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-neutral-200 inline-flex justify-between items-center hover:bg-neutral-100 transition-colors"
          >
            <div className="justify-start text-black text-base font-bold font-['Lato']">
              {form.label}
            </div>
            <div className="w-4 h-4 flex items-center justify-center">
              <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-neutral-400">
                <path d="M4.57812 13.5938L13.5781 4.59375M13.5781 4.59375H7.57812M13.5781 4.59375V10.5938" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

// Schedule Tab Component
function ScheduleTab() {
  const [timeLeft, setTimeLeft] = useState({ days: 3, hours: 8, minutes: 32 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59 };
        } else if (prev.days > 0) {
          return { days: prev.days - 1, hours: 23, minutes: 59 };
        }
        return prev;
      });
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  const services = [
    { day: 'SUNDAY, DECEMBER 21', times: ['7:00AM', '10:00AM'] },
    { day: 'WEDNESDAY, DECEMBER 21', times: ['5:00PM'] }
  ];

  return (
    <div className="w-full h-full flex flex-col p-4 gap-4 overflow-y-auto">
      <div className="flex flex-col justify-start items-start gap-2.5">
        <div className="w-full inline-flex justify-between items-center">
          <div className="text-center justify-start text-black text-base font-bold font-['Lato']">
            NEXT SERVICE
          </div>
          <div className="px-4 py-3.5 bg-blue-950 rounded-[100px] flex justify-center items-center gap-2">
            <div className="text-center justify-start text-white text-xs font-bold font-['Lato']">
              JOIN LIVE
            </div>
          </div>
        </div>
        <div className="w-full p-4 bg-neutral-50 rounded-xl outline outline-1 outline-offset-[-1px] outline-neutral-200 flex flex-col justify-start items-start gap-2.5">
          <div className="w-full justify-start text-black text-base font-bold font-['Lato']">
            7:00AM
          </div>
          <div className="w-full inline-flex justify-start items-center gap-5">
            <div className="flex-1 h-14 rounded-lg outline outline-1 outline-offset-[-1px] outline-neutral-200 inline-flex flex-col justify-center items-center gap-1">
              <div className="self-stretch text-center justify-start text-black text-base font-bold font-['Lato']">
                {timeLeft.days}
              </div>
              <div className="self-stretch text-center justify-start text-neutral-400 text-xs font-normal font-['Lato']">
                DAYS
              </div>
            </div>
            <div className="flex-1 h-14 rounded-lg outline outline-1 outline-offset-[-1px] outline-neutral-200 inline-flex flex-col justify-center items-center gap-1">
              <div className="self-stretch text-center justify-start text-black text-base font-bold font-['Lato']">
                {timeLeft.hours}
              </div>
              <div className="self-stretch text-center justify-start text-neutral-400 text-xs font-normal font-['Lato']">
                HOURS
              </div>
            </div>
            <div className="flex-1 h-14 rounded-lg outline outline-1 outline-offset-[-1px] outline-neutral-200 inline-flex flex-col justify-center items-center gap-1">
              <div className="self-stretch text-center justify-start text-black text-base font-bold font-['Lato']">
                {timeLeft.minutes}
              </div>
              <div className="self-stretch text-center justify-start text-neutral-400 text-xs font-normal font-['Lato']">
                MINUTES
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-start items-start gap-4">
        {services.map((service, index) => (
          <div key={index} className="w-full flex flex-col justify-start items-start gap-4">
            <div className="w-full justify-start text-black text-base font-bold font-['Lato']">
              {service.day}
            </div>
            <div className="w-full flex flex-col justify-start items-start gap-2">
              {service.times.map((time, timeIndex) => (
                <div key={timeIndex} className="w-full p-2.5 bg-neutral-50 rounded-lg outline outline-1 outline-offset-[-1px] outline-neutral-200 inline-flex justify-start items-center gap-2.5">
                  <div className="justify-start text-black text-base font-bold font-['Lato']">
                    {time}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Notes Tab Component
function NotesTab() {
  const [notes, setNotes] = useState('');
  const [savedNotes, setSavedNotes] = useState<string[]>([]);
  // Removed unused isMobile state and related useEffect

  const saveNote = () => {
    if (notes.trim()) {
      setSavedNotes(prev => [...prev, notes]);
      setNotes('');
    }
  };

  const downloadNotes = () => {
    if (savedNotes.length === 0 && !notes.trim()) {
      alert('No notes to download');
      return;
    }

    // Include current note if it has content
    const allNotes = [...savedNotes];
    if (notes.trim()) {
      allNotes.push(notes);
    }

    const content = allNotes.join('\n\n---\n\n');
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `church-notes-${new Date().toISOString().split('T')[0]}.txt`;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const formatText = (command: string) => {
    if (command === 'insertUnorderedList') {
      insertTextAtCursor('• ');
    } else if (command === 'insertOrderedList') {
      // Get the next number in sequence
      const nextNumber = getNextNumber();
      insertTextAtCursor(`${nextNumber}. `);
    } else {
      // Use execCommand for other formatting
      document.execCommand(command, false);
    }
  };

  const getNextNumber = () => {
    // Get current content directly from the DOM
    const contentDiv = document.querySelector('[contenteditable="true"]');
    const content = contentDiv ? contentDiv.textContent || '' : '';
    
    // Count existing numbered items (1., 2., 3., etc.)
    const numberedItems = content.match(/\d+\./g);
    if (!numberedItems) return 1;
    
    // Find the highest number
    const numbers = numberedItems.map(item => parseInt(item.replace('.', '')));
    return Math.max(...numbers) + 1;
  };

  const insertTextAtCursor = (text: string) => {
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      range.deleteContents();
      range.insertNode(document.createTextNode(text));
      range.collapse(false);
      selection.removeAllRanges();
      selection.addRange(range);
    }
  };

  return (
    <div className="w-full h-full flex flex-col bg-white">
      {/* Minimal WYSIWYG Toolbar */}
      <div className="w-full px-4 py-3 flex justify-between items-center border-b border-gray-100">
        <div className="flex justify-start items-center gap-2">
          <button
            onClick={() => formatText('bold')}
            className="w-6 h-6 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded"
            title="Bold"
          >
            <span className="text-sm font-bold">B</span>
          </button>
          <button
            onClick={() => formatText('italic')}
            className="w-6 h-6 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded"
            title="Italic"
          >
            <span className="text-sm italic">I</span>
          </button>
          <button
            onClick={() => formatText('formatBlock')}
            className="w-6 h-6 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded"
            title="Heading"
          >
            <span className="text-sm font-bold">H</span>
          </button>
          <button
            onClick={() => formatText('insertUnorderedList')}
            className="w-6 h-6 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded"
            title="Bullet List"
          >
            <span className="text-xs">•</span>
          </button>
          <button
            onClick={() => formatText('insertOrderedList')}
            className="w-6 h-6 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded"
            title="Numbered List"
          >
            <span className="text-xs">1.</span>
          </button>
        </div>
        <button
          onClick={downloadNotes}
          className="w-6 h-6 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded"
          title="Download All Notes"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>

      {/* Clean Content Area */}
      <div className="flex-1 flex flex-col">
        <div
          contentEditable
          onInput={(e) => setNotes(e.currentTarget.textContent || '')}
          className="flex-1 p-6 text-gray-800 focus:outline-none overflow-y-auto resize-none"
          style={{ 
            minHeight: '100%',
            lineHeight: '1.6',
            fontSize: '16px',
            whiteSpace: 'pre-wrap'
          }}
          data-placeholder="Start writing your notes..."
        />
      </div>

      {/* Hidden Save Button - Auto-save on input */}
      <button
        onClick={saveNote}
        className="hidden"
        ref={(el) => {
          if (el) {
            // Auto-save every 30 seconds
            setInterval(() => {
              if (notes.trim()) {
                saveNote();
              }
            }, 30000);
          }
        }}
      />
    </div>
  );
}

// Bible Tab Component
function BibleTab() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-1 bg-white border border-neutral-200 rounded-lg overflow-hidden m-2">
        <iframe
          src="https://www.bible.com/bible/1/GEN.1.NIV"
          className="w-full h-full"
          title="Bible Reading"
          frameBorder="0"
          style={{ 
            minHeight: 'calc(100vh - 200px)',
            height: '100%'
          }}
        />
      </div>
    </div>
  );
}
