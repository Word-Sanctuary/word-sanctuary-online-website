"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CommunitySection from "@/components/CommunitySection";
import { Button } from "@/components/ui";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [shouldShowReadMore, setShouldShowReadMore] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);
  const imageHeight = 602; // Height of the image container

  const fullText = `Pastor Temple embodies a fatherly figure, nurturing nations through Jesus' teachings. As our Good Shepherd, he guides us tirelessly, leading us closer to God. Through his vision, we've seen the birth of Word Sanctuary and Life Class, empowering us with God's Word.

His influence radiates Jesus' love, and his unwavering dedication to God's kingdom inspires countless lives. With a rare anointing, he shapes hearts and minds, bringing people to the knowledge of God's Word. Through his servant-leadership, we've witnessed lives transformed, new relationships formed, broken marriages restored, and the Word of God bringing out the best in people.

His passion for souls is contagious, his love for people unconditional, and his commitment to God's Word unshakeable. His impact not only transforms lives but also foreshadows greater things to come, a true blessing to our generation, an honour to God's kingdom, and a testament to His faithfulness.

Pastor Temple's ministry extends beyond the pulpit, reaching into the hearts of communities worldwide. His teachings have sparked spiritual revivals, established strong foundations for believers, and created lasting change in countless lives. Through his guidance, Word Sanctuary Global has become a beacon of hope and transformation.`;

  const truncatedText = `Pastor Temple embodies a fatherly figure, nurturing nations through Jesus' teachings. As our Good Shepherd, he guides us tirelessly, leading us closer to God. Through his vision, we've seen the birth of Word Sanctuary and Life Class, empowering us with God's Word.

His influence radiates Jesus' love, and his unwavering dedication to God's kingdom inspires countless lives. With a rare anointing, he shapes hearts and minds, bringing people to the knowledge of God's Word.`;

  // Check if content needs truncation based on height
  useEffect(() => {
    if (textRef.current) {
      // Create a temporary element to measure full text height
      const tempDiv = document.createElement('div');
      tempDiv.style.position = 'absolute';
      tempDiv.style.visibility = 'hidden';
      tempDiv.style.width = textRef.current.offsetWidth + 'px';
      tempDiv.style.fontSize = '16px';
      tempDiv.style.lineHeight = 'normal';
      tempDiv.innerHTML = fullText.split('\n').filter(p => p.trim()).map(p => `<p style="margin-bottom: 16px;">${p}</p>`).join('');
      
      document.body.appendChild(tempDiv);
      const fullHeight = tempDiv.offsetHeight;
      document.body.removeChild(tempDiv);
      
      // Add some buffer for the header and spacing, check if content would overflow
      const availableTextHeight = imageHeight - 100; // Subtract space for title and button
      setShouldShowReadMore(fullHeight > availableTextHeight);
    }
  }, [fullText]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <Hero
        useCarousel={true}
        title={{
          primary: "GROWING IN LOVE — ",
          secondary: "A CHURCH THAT'S HEAVEN"
        }}
        ctaButton={{
          text: "JOIN US",
          onClick: () => {
            // Add your YouTube link logic here
            window.open('https://youtube.com/@wordsanctuaryglobal', '_blank');
          }
        }}
      />
      
      {/* About Us Section */}
      <section className="w-full bg-white p-4 sm:p-6 md:p-8 lg:p-12">
        <div className="max-w-6xl mx-auto flex flex-col justify-start items-center gap-3 sm:gap-4">
          <div className="w-full flex flex-col justify-start items-center gap-6 sm:gap-8">
            <div className="w-full flex flex-col justify-start items-center gap-8 sm:gap-10 md:gap-12">
              <div className="w-full flex flex-col justify-start items-center gap-10 sm:gap-12 md:gap-16">
                <div className="flex flex-col justify-start items-center gap-4 sm:gap-6">
                  <div className="h-8 sm:h-10 px-4 sm:px-6 py-2 sm:py-2.5 bg-zinc-200 rounded-full backdrop-blur-sm inline-flex justify-center items-center gap-3 sm:gap-4">
                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-sky-900 rounded-full" />
                    <div className="justify-center text-sky-900 text-[9px] sm:text-[10px] font-bold tracking-wide">ABOUT US</div>
                  </div>
                  <div className="text-center justify-center text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-tight sm:leading-snug md:leading-tight lg:leading-[59px] font-anton">WORD SANCTUARY GLOBAL</div>
                  <div className="max-w-2xl text-center justify-center">
                    <span className="text-stone-500 text-xs sm:text-sm font-normal leading-snug">The Heavenly Jerusalem; a Church that is </span>
                    <span className="text-black text-xs sm:text-sm font-bold leading-snug">HEAVEN!</span>
                  </div>
                </div>
                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                  <div className="text-stone-500 text-xs sm:text-sm font-normal leading-snug">
                    Lorem ipsum dolor sit amet consectetur. Tristique nam amet est turpis in pellentesque. Elit pellentesque ultricies donec posuere tellus egestas sem magna. Mi diam tincidunt urna massa urna lectus. Sit ac parturient morbi nunc hendrerit mauris quis ut a. Nisl sit diam mi nulla a pretium nec venenatis a. Neque mi suspendisse quam faucibus augue senectus.
                  </div>
                  <div className="text-stone-500 text-xs sm:text-sm font-normal leading-snug">
                    Lorem ipsum dolor sit amet consectetur. Tristique nam amet est turpis in pellentesque. Elit pellentesque ultricies donec posuere tellus egestas sem magna. Mi diam tincidunt urna massa urna lectus. Sit ac parturient morbi nunc hendrerit mauris quis ut a. Nisl sit diam mi nulla a pretium nec venenatis a. Neque mi suspendisse quam faucibus augue senectus.
                  </div>
                  <div className="text-stone-500 text-xs sm:text-sm font-normal leading-snug">
                    Lorem ipsum dolor sit amet consectetur. Tristique nam amet est turpis in pellentesque. Elit pellentesque ultricies donec posuere tellus egestas sem magna. Mi diam tincidunt urna massa urna lectus. Sit ac parturient morbi nunc hendrerit mauris quis ut a. Nisl sit diam mi nulla a pretium nec venenatis a. Neque mi suspendisse quam faucibus augue senectus.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Beliefs Section */}
      <section className="w-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[753px] bg-gradient-to-br from-blue-900 via-sky-800 to-blue-700 flex justify-center items-end">
        <div className="max-w-6xl mx-auto w-full p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-end items-start gap-4 sm:gap-6">
          <div className="w-full p-4 sm:p-6 md:p-8 lg:p-12 bg-black/20 rounded-xl outline outline-1 outline-offset-[-1px] outline-white/30 backdrop-blur-md flex flex-col justify-start items-start gap-4 sm:gap-6">
            <div className="w-full text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold uppercase leading-tight font-anton">AT WORD SANCTUARY, we believe;</div>
            <div className="w-full text-white text-sm sm:text-base font-normal leading-relaxed sm:leading-normal">
              Lorem ipsum dolor sit amet consectetur. Tincidunt aliquam scelerisque orci viverra at habitant nulla vel morbi. Ut nulla feugiat nibh turpis. Sit consequat lectus est laoreet facilisi ut duis est. Velit sollicitudin vitae erat id in sagittis. Tincidunt sed arcu pulvinar fames nibh proin platea massa. Dui diam a ligula pulvinar sed in.<br/><br/>
              Tortor nunc cursus sit elit malesuada vel at viverra. Est eu at auctor duis ac orci elementum scelerisque. Id vel turpis proin integer dictum volutpat gravida pellentesque. Ridiculus lacinia quis adipiscing et augue auctor purus vulputate vel. Id id mi malesuada ultrices sagittis erat.
            </div>
          </div>
        </div>
      </section>
      
      {/* About Our Pastor Section */}
      <section className="self-stretch bg-neutral-900 inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
        <div className="self-stretch p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-2.5">
          <div className="self-stretch inline-flex flex-col lg:flex-row justify-start items-start gap-8 sm:gap-12 lg:gap-16">
            <div className="w-full lg:w-[571px] h-64 sm:h-80 md:h-96 lg:h-[602px] relative rounded-xl overflow-hidden flex-shrink-0">
              <Image
                src="/images/optimized/ourpastor.webp"
                alt="Pastor Temple"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 571px"
              />
            </div>
            <div className="flex-1 self-stretch inline-flex flex-col justify-start items-start">
              <div className="self-stretch flex-1 flex flex-col justify-start items-start gap-4 sm:gap-6">
                <div className="self-stretch text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase leading-tight sm:leading-snug md:leading-tight lg:leading-none font-anton">ABOUT OUR PASTOR</div>
                <div 
                  ref={textRef}
                  className={`self-stretch text-left sm:text-justify justify-start text-white text-sm sm:text-base font-normal leading-relaxed sm:leading-normal transition-all duration-300 ${
                    isExpanded || !shouldShowReadMore ? 'flex-1' : 'overflow-hidden'
                  }`}
                  style={!isExpanded && shouldShowReadMore ? { maxHeight: `${imageHeight - 150}px` } : {}}
                >
                  {(isExpanded || !shouldShowReadMore) ? (
                    <div className="space-y-3 sm:space-y-4">
                      {fullText.split('\n').filter(p => p.trim()).map((paragraph, index) => (
                        <p key={index} className="mb-3 sm:mb-4 last:mb-0">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-3 sm:space-y-4">
                      {truncatedText.split('\n').filter(p => p.trim()).map((paragraph, index) => (
                        <p key={index} className="mb-4 last:mb-0">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              {shouldShowReadMore && (
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="h-8 sm:h-10 py-2 sm:py-2.5 text-white text-xs sm:text-sm font-semibold underline"
                >
                  {isExpanded ? 'READ LESS' : 'READ MORE'}
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Family Section */}
      <CommunitySection />
      
    </div>
  );
}
