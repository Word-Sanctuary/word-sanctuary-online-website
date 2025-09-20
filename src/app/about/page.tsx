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
        useCarousel={false}
        title={{
          primary: "YEAR'S THEME PICTURE",
        }}
        staticImage="/images/optimized/hero-carousel/10Artboard 1 (2).webp"
      />
      
      {/* About Us Section */}
      <section className="w-full bg-white p-4 sm:p-6 md:p-8 lg:p-12">
        <div className="max-w-6xl mx-auto flex flex-col justify-start items-center gap-3 sm:gap-4">
          <div className="w-full flex flex-col justify-start items-center gap-6 sm:gap-8">
            <div className="w-full flex flex-col justify-start items-center gap-8 sm:gap-10 md:gap-12">
              <div className="w-full flex flex-col justify-start items-center gap-10 sm:gap-12 md:gap-16">
                <div className="flex flex-col justify-start items-center gap-4 sm:gap-6">
                  <div className="h-8 sm:h-10 px-4 sm:px-6 py-2 sm:py-2.5 bg-zinc-200 rounded-full backdrop-blur-sm inline-flex justify-center items-center gap-3 sm:gap-4">
                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full" style={{ backgroundColor: '#001856' }} />
                    <div className="justify-center text-[9px] sm:text-[10px] font-bold tracking-wide" style={{ color: '#001856' }}>ABOUT US</div>
                  </div>
                  <div className="text-center justify-center text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-tight sm:leading-snug md:leading-tight lg:leading-[59px] font-['Anton']">PREACH THE WORD!</div>
            
                </div>
                <div className="self-stretch px-80 inline-flex flex-col justify-start items-start gap-3">
                  <div className="self-stretch text-center justify-start text-stone-500 text-sm font-normal font-['Lato'] leading-snug">Word Sanctuary Global, A church called by God to fill the earth with the knowledge of the Glory of God. We are an apostolic church, with the mandate of making a family for God on earth. We are Kings and Priests, called to preach the gospel of Christ everywhere we get, till the whole world is taken and given back to God. 1Timothy 2:4, Habakkuk 2:14, Revelations 1:6.</div>
                  <div className="self-stretch text-center justify-start text-stone-500 text-sm font-normal font-['Lato'] leading-snug">We are intent on ensuring that the church online community, represented as Word Sanctuary Global, blooms and prospers, as everyone, everywhere in the world, are connected to church and the consistent word of God, and are trained to be better evangelists and disciplers.</div>
                  <div className="self-stretch text-center justify-start text-stone-500 text-sm font-normal font-['Lato'] leading-snug">We have a wide variety of avenues where people are taught to be better representatives of the Lord, in every aspect, e.g. Marriages and Relationships, Business, Home management, Entrepreneurship, etc.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Vision and Mission Section */}
      <section className="w-full min-h-[600px] sm:min-h-[700px] md:min-h-[800px] lg:min-h-[900px] xl:min-h-[1000px] relative flex">
        {/* Vision Half - Left Side */}
        <div className="w-1/2 relative flex justify-center items-end">
          {/* Background Image for Vision */}
        <div className="absolute inset-0">
          <Image
              src="/images/achievers.png"
              alt="Vision Background"
            fill
            className="object-cover"
              sizes="50vw"
            priority
          />
            {/* Blue overlay for Vision */}
            <div className="absolute inset-0" style={{ backgroundColor: '#001856CC' }} />
          </div>
          
          {/* Vision Content */}
          <div className="relative z-10 w-full p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-end items-start gap-4 sm:gap-6">
            <div className="self-stretch p-12 inline-flex flex-col justify-end items-start gap-6">
              <div className="self-stretch p-12 bg-black/20 rounded-2xl outline outline-1 outline-offset-[-1px] outline-white/30 backdrop-blur-md flex flex-col justify-start items-start gap-6">
                <div className="self-stretch justify-center text-white text-7xl font-normal font-['Anton'] uppercase leading-[84px]">VISION</div>
                <div className="self-stretch justify-center text-white text-base font-normal font-['Lato'] leading-normal">Lorem ipsum dolor sit amet consectetur. Tincidunt aliquam scelerisque orci viverra at habitant nulla vel morbi. Ut nulla feugiat nibh turpis. Sit consequat lectus est laoreet facilisi ut duis est. Velit sollicitudin vitae erat id in sagittis. Tincidunt sed arcu pulvinar fames nibh proin platea massa. Dui diam a ligula pulvinar sed in.<br/>Tortor nunc cursus sit elit malesuada vel at viverra. Est eu at auctor duis ac orci elementum scelerisque. Id vel turpis proin integer dictum volutpat gravida pellentesque. Ridiculus lacinia quis adipiscing et augue auctor purus vulputate vel. Id id mi malesuada ultrices sagittis erat.</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mission Half - Right Side */}
        <div className="w-1/2 relative flex justify-center items-end">
          {/* Background Image for Mission */}
          <div className="absolute inset-0">
            <Image
              src="/images/achievers.png"
              alt="Mission Background"
              fill
              className="object-cover"
              sizes="50vw"
              priority
            />
            {/* Light blue overlay for Mission */}
            <div className="absolute inset-0" style={{ backgroundColor: '#B3D6FFCC' }} />
          </div>
          
          {/* Mission Content */}
          <div className="relative z-10 w-full p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-end items-start gap-4 sm:gap-6">
            <div className="self-stretch p-12 inline-flex flex-col justify-end items-start gap-6">
              <div className="self-stretch p-12 bg-black/80 rounded-2xl outline outline-1 outline-offset-[-1px] outline-white/30 backdrop-blur-md flex flex-col justify-start items-start gap-6">
                <div className="self-stretch justify-center text-white text-7xl font-normal font-['Anton'] uppercase leading-[84px]">MISSION</div>
                <div className="self-stretch justify-center text-white text-base font-normal font-['Lato'] leading-normal">Lorem ipsum dolor sit amet consectetur. Tincidunt aliquam scelerisque orci viverra at habitant nulla vel morbi. Ut nulla feugiat nibh turpis. Sit consequat lectus est laoreet facilisi ut duis est. Velit sollicitudin vitae erat id in sagittis. Tincidunt sed arcu pulvinar fames nibh proin platea massa. Dui diam a ligula pulvinar sed in.<br/>Tortor nunc cursus sit elit malesuada vel at viverra. Est eu at auctor duis ac orci elementum scelerisque. Id vel turpis proin integer dictum volutpat gravida pellentesque. Ridiculus lacinia quis adipiscing et augue auctor purus vulputate vel. Id id mi malesuada ultrices sagittis erat.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Leadership Section */}
      <section className="self-stretch bg-neutral-900 inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
        <div className="self-stretch px-12 py-24 inline-flex flex-col justify-start items-start gap-2.5">
          <div className="self-stretch flex flex-col justify-center items-start gap-16">
            <div className="self-stretch px-28 flex flex-col justify-start items-start">
              <div className="self-stretch flex flex-col justify-start items-center gap-6">
                <div className="self-stretch text-center justify-center text-white text-7xl font-normal font-['Anton'] uppercase leading-[84px]">Our Leadership</div>
                <div className="self-stretch text-center justify-start text-white text-base font-normal font-['Lato'] leading-normal">Word Sanctuary, A Subsidiary of the Word Commission International, under the supreme leadership of His Grace, Evangelist Isaac Omolehin, is Led by Pastors Temple and Omolara Omolehin, and are supported by a team of pastors and ministers who are committed to the God-given mandate.</div>
                <div className="self-stretch text-center justify-start text-white text-base font-bold font-['Lato'] leading-normal">MEET OUR PASTORS</div>
              </div>
            </div>
            <div className="self-stretch inline-flex justify-center items-center gap-11 flex-wrap content-center">
              <div className="w-96 h-[500px] relative bg-gradient-to-b from-stone-500/0 via-neutral-600/40 to-neutral-900 rounded-2xl outline outline-2 outline-offset-[-2px] outline-white/50 overflow-hidden">
                <Image
                  src="/images/ourpastor.png"
                  alt="Pastor Temple Omolehin"
                  fill
                  className="object-cover"
                  sizes="384px"
                />
                <div className="w-96 h-24 p-2.5 left-0 top-[400px] absolute bg-white/5 border-t-2 border-white/50 inline-flex justify-center items-center gap-2.5">
                  <div className="text-center justify-center text-white text-2xl font-normal font-['Anton']">Pastor Temple Omolehin</div>
                </div>
              </div>
              <div className="w-96 h-[500px] relative bg-gradient-to-b from-stone-500/0 via-neutral-600/40 to-neutral-900 rounded-2xl outline outline-2 outline-offset-[-2px] outline-white/50 overflow-hidden">
                <Image
                  src="/images/ourpastor.png"
                  alt="Pastor Moyo Omolehin"
                  fill
                  className="object-cover"
                  sizes="384px"
                />
                <div className="w-96 h-24 p-2.5 left-0 top-[400px] absolute bg-white/5 border-t-2 border-white/50 inline-flex justify-center items-center gap-2.5">
                  <div className="text-center justify-center text-white text-2xl font-normal font-['Anton']">Pastor Moyo Omolehin</div>
                </div>
              </div>
              <div className="w-96 h-[500px] relative bg-gradient-to-b from-stone-500/0 via-neutral-600/40 to-neutral-900 rounded-2xl outline outline-2 outline-offset-[-2px] outline-white/50 overflow-hidden">
                <Image
                  src="/images/ourpastor.png"
                  alt="Pastor Ayanfeoluwa Adelowo"
                  fill
                  className="object-cover"
                  sizes="384px"
                />
                <div className="w-96 h-24 p-2.5 left-0 top-[400px] absolute bg-white/5 border-t-2 border-white/50 inline-flex justify-center items-center gap-2.5">
                  <div className="text-center justify-center text-white text-2xl font-normal font-['Anton']">Pastor Ayanfeoluwa Adelowo</div>
                </div>
              </div>
              <div className="w-96 h-[500px] relative bg-gradient-to-b from-stone-500/0 via-neutral-600/40 to-neutral-900 rounded-2xl outline outline-2 outline-offset-[-2px] outline-white/50 overflow-hidden">
                <Image
                  src="/images/ourpastor.png"
                  alt="Pastor Michael Jackson"
                  fill
                  className="object-cover"
                  sizes="384px"
                />
                <div className="w-96 h-24 p-2.5 left-0 top-[400px] absolute bg-white/5 border-t-2 border-white/50 inline-flex justify-center items-center gap-2.5">
                  <div className="text-center justify-center text-white text-2xl font-normal font-['Anton']">Pastor Michael Jackson</div>
                </div>
              </div>
              <div className="w-96 h-[500px] relative bg-gradient-to-b from-stone-500/0 via-neutral-600/40 to-neutral-900 rounded-2xl outline outline-2 outline-offset-[-2px] outline-white/50 overflow-hidden">
              <Image
                  src="/images/ourpastor.png"
                  alt="Pastor Oyinkansola Omolehin"
                fill
                  className="object-cover"
                  sizes="384px"
              />
                <div className="w-96 h-24 p-2.5 left-0 top-[400px] absolute bg-white/5 border-t-2 border-white/50 inline-flex justify-center items-center gap-2.5">
                  <div className="text-center justify-center text-white text-2xl font-normal font-['Anton']">Pastor Oyinkansola Omolehin</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Installations Section */}
      <section className="w-full bg-white p-4 sm:p-6 md:p-8 lg:p-12">
        <div className="w-[1440px] max-w-full mx-auto p-12 inline-flex flex-col justify-start items-center gap-4">
          <div className="self-stretch flex flex-col justify-start items-center gap-8">
            <div className="self-stretch flex flex-col justify-start items-center gap-12">
              <div className="self-stretch flex flex-col justify-start items-center gap-16">
                <div className="flex flex-col justify-start items-center gap-6">
                  <div className="h-10 px-6 py-2.5 bg-zinc-400/40 rounded-[100px] backdrop-blur-[2px] inline-flex justify-center items-center gap-4">
                    <div className="w-2 h-2 bg-blue-950 rounded-full" />
                    <div className="justify-center text-blue-950 text-[10px] font-bold font-['Lato']">INSTALLATIONS</div>
                  </div>
                  <div className="text-center justify-center text-black text-5xl font-normal font-['Anton'] leading-[59px]">JOIN US IN OVER 20 INSTALLATIONS <br/>WORLD WIDE</div>
                  <div className="self-stretch text-center justify-center">
                    <span className="text-stone-500 text-sm font-normal font-['Lato'] leading-snug">The Heavenly Jerusalem; a Church that is </span>
                    <span className="text-black text-sm font-bold font-['Lato'] leading-snug">HEAVEN!</span>
                  </div>
                </div>
                <div className="self-stretch flex flex-col justify-center items-center gap-12">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 w-full max-w-7xl">
                    <div className="w-full h-96 relative bg-white rounded-2xl overflow-hidden">
                      <Image
                        src="/images/ilorin.png"
                        alt="Ilorin Installation"
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="w-full h-96 left-0 top-0 absolute bg-black/50 rounded overflow-hidden">
                        <div className="w-full left-4 right-4 top-[298px] absolute inline-flex flex-col justify-start items-start gap-1">
                          <div className="self-stretch justify-center text-white text-2xl sm:text-3xl font-bold font-['Lato']">Ilorin</div>
                          <div className="self-stretch flex flex-col justify-start items-start gap-1">
                            <div className="text-center justify-center text-white text-sm font-normal font-['Lato']">Description of Address</div>
                            <div className="text-center justify-center text-white text-sm font-normal font-['Lato']">+2340123456789</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full h-96 relative bg-white rounded-2xl overflow-hidden">
                      <Image
                        src="/images/abuja.png"
                        alt="Abuja Installation"
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="w-full h-96 left-0 top-0 absolute bg-black/50 rounded overflow-hidden">
                        <div className="w-full left-4 right-4 top-[298px] absolute inline-flex flex-col justify-start items-start">
                          <div className="self-stretch justify-center text-white text-2xl sm:text-3xl font-bold font-['Lato']">Abuja</div>
                          <div className="self-stretch flex flex-col justify-start items-start gap-1">
                            <div className="text-center justify-center text-white text-sm font-normal font-['Lato']">Description of Address</div>
                            <div className="text-center justify-center text-white text-sm font-normal font-['Lato']">+2340123456789</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full h-96 relative bg-white rounded-2xl overflow-hidden">
                      <Image
                        src="/images/lagos.png"
                        alt="Lagos Installation"
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="w-full h-96 left-0 top-0 absolute bg-black/50 rounded overflow-hidden">
                        <div className="w-full left-4 right-4 top-[298px] absolute inline-flex flex-col justify-start items-start">
                          <div className="self-stretch justify-center text-white text-2xl sm:text-3xl font-bold font-['Lato']">Lagos</div>
                          <div className="self-stretch flex flex-col justify-start items-start gap-1">
                            <div className="text-center justify-center text-white text-sm font-normal font-['Lato']">Description of Address</div>
                            <div className="text-center justify-center text-white text-sm font-normal font-['Lato']">+2340123456789</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full h-96 relative bg-white rounded-2xl overflow-hidden">
                      <Image
                        src="/images/ibadan.png"
                        alt="Ibadan Installation"
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="w-full h-96 left-0 top-0 absolute bg-black/50 rounded overflow-hidden">
                        <div className="w-full left-4 right-4 top-[298px] absolute inline-flex flex-col justify-start items-start">
                          <div className="self-stretch justify-center text-white text-2xl sm:text-3xl font-bold font-['Lato']">Ibadan</div>
                          <div className="self-stretch flex flex-col justify-start items-start gap-1">
                            <div className="text-center justify-center text-white text-sm font-normal font-['Lato']">Description of Address</div>
                            <div className="text-center justify-center text-white text-sm font-normal font-['Lato']">+2340123456789</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 w-full max-w-7xl">
                    <div className="w-full h-96 relative bg-white rounded-2xl overflow-hidden">
                      <Image
                        src="/images/ilorin.png"
                        alt="Ilorin Installation"
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="w-full h-96 left-0 top-0 absolute bg-black/50 rounded overflow-hidden">
                        <div className="w-full left-4 right-4 top-[298px] absolute inline-flex flex-col justify-start items-start gap-1">
                          <div className="self-stretch justify-center text-white text-2xl sm:text-3xl font-bold font-['Lato']">Ilorin</div>
                          <div className="self-stretch flex flex-col justify-start items-start gap-1">
                            <div className="text-center justify-center text-white text-sm font-normal font-['Lato']">Description of Address</div>
                            <div className="text-center justify-center text-white text-sm font-normal font-['Lato']">+2340123456789</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full h-96 relative bg-white rounded-2xl overflow-hidden">
                      <Image
                        src="/images/abuja.png"
                        alt="Abuja Installation"
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="w-full h-96 left-0 top-0 absolute bg-black/50 rounded overflow-hidden">
                        <div className="w-full left-4 right-4 top-[298px] absolute inline-flex flex-col justify-start items-start">
                          <div className="self-stretch justify-center text-white text-2xl sm:text-3xl font-bold font-['Lato']">Abuja</div>
                          <div className="self-stretch flex flex-col justify-start items-start gap-1">
                            <div className="text-center justify-center text-white text-sm font-normal font-['Lato']">Description of Address</div>
                            <div className="text-center justify-center text-white text-sm font-normal font-['Lato']">+2340123456789</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full h-96 relative bg-white rounded-2xl overflow-hidden">
                      <Image
                        src="/images/lagos.png"
                        alt="Lagos Installation"
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="w-full h-96 left-0 top-0 absolute bg-black/50 rounded overflow-hidden">
                        <div className="w-full left-4 right-4 top-[298px] absolute inline-flex flex-col justify-start items-start">
                          <div className="self-stretch justify-center text-white text-2xl sm:text-3xl font-bold font-['Lato']">Lagos</div>
                          <div className="self-stretch flex flex-col justify-start items-start gap-1">
                            <div className="text-center justify-center text-white text-sm font-normal font-['Lato']">Description of Address</div>
                            <div className="text-center justify-center text-white text-sm font-normal font-['Lato']">+2340123456789</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full h-96 relative bg-white rounded-2xl overflow-hidden">
                      <Image
                        src="/images/ibadan.png"
                        alt="Ibadan Installation"
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="w-full h-96 left-0 top-0 absolute bg-black/50 rounded overflow-hidden">
                        <div className="w-full left-4 right-4 top-[298px] absolute inline-flex flex-col justify-start items-start">
                          <div className="self-stretch justify-center text-white text-2xl sm:text-3xl font-bold font-['Lato']">Ibadan</div>
                          <div className="self-stretch flex flex-col justify-start items-start gap-1">
                            <div className="text-center justify-center text-white text-sm font-normal font-['Lato']">Description of Address</div>
                            <div className="text-center justify-center text-white text-sm font-normal font-['Lato']">+2340123456789</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
