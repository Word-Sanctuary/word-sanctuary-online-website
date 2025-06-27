"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { useState } from "react";

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  const fullText = `Pastor Temple embodies a fatherly figure, nurturing nations through Jesus' teachings. As our Good Shepherd, he guides us tirelessly, leading us closer to God. Through his vision, we've seen the birth of Word Sanctuary and Life Class, empowering us with God's Word.

His influence radiates Jesus' love, and his unwavering dedication to God's kingdom inspires countless lives. With a rare anointing, he shapes hearts and minds, bringing people to the knowledge of God's Word. Through his servant-leadership, we've witnessed lives transformed, new relationships formed, broken marriages restored, and the Word of God bringing out the best in people.

His passion for souls is contagious, his love for people unconditional, and his commitment to God's Word unshakeable. His impact not only transforms lives but also foreshadows greater things to come, a true blessing to our generation, an honour to God's kingdom, and a testament to His faithfulness.

Pastor Temple's ministry extends beyond the pulpit, reaching into the hearts of communities worldwide. His teachings have sparked spiritual revivals, established strong foundations for believers, and created lasting change in countless lives. Through his guidance, Word Sanctuary Global has become a beacon of hope and transformation.`;

  const truncatedText = `Pastor Temple embodies a fatherly figure, nurturing nations through Jesus' teachings. As our Good Shepherd, he guides us tirelessly, leading us closer to God. Through his vision, we've seen the birth of Word Sanctuary and Life Class, empowering us with God's Word.

His influence radiates Jesus' love, and his unwavering dedication to God's kingdom inspires countless lives. With a rare anointing, he shapes hearts and minds, bringing people to the knowledge of God's Word.`;

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
      />
      
      {/* About Us Section */}
      <section className="w-full bg-white p-12">
        <div className="max-w-6xl mx-auto flex flex-col justify-start items-center gap-4">
          <div className="w-full flex flex-col justify-start items-center gap-8">
            <div className="w-full flex flex-col justify-start items-center gap-12">
              <div className="w-full flex flex-col justify-start items-center gap-16">
                <div className="flex flex-col justify-start items-center gap-6">
                  <div className="h-10 px-6 py-2.5 bg-zinc-200 rounded-full backdrop-blur-sm inline-flex justify-center items-center gap-4">
                    <div className="w-2 h-2 bg-sky-900 rounded-full" />
                    <div className="justify-center text-sky-900 text-[10px] font-bold tracking-wide">ABOUT US</div>
                  </div>
                  <div className="text-center justify-center text-black text-5xl font-normal leading-[59px] font-anton">WORD SANCTUARY GLOBAL</div>
                  <div className="max-w-2xl text-center justify-center">
                    <span className="text-stone-500 text-sm font-normal leading-snug">The Heavenly Jerusalem; a Church that is </span>
                    <span className="text-black text-sm font-bold leading-snug">HEAVEN!</span>
                  </div>
                </div>
                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-stone-500 text-sm font-normal leading-snug">
                    Lorem ipsum dolor sit amet consectetur. Tristique nam amet est turpis in pellentesque. Elit pellentesque ultricies donec posuere tellus egestas sem magna. Mi diam tincidunt urna massa urna lectus. Sit ac parturient morbi nunc hendrerit mauris quis ut a. Nisl sit diam mi nulla a pretium nec venenatis a. Neque mi suspendisse quam faucibus augue senectus.
                  </div>
                  <div className="text-stone-500 text-sm font-normal leading-snug">
                    Lorem ipsum dolor sit amet consectetur. Tristique nam amet est turpis in pellentesque. Elit pellentesque ultricies donec posuere tellus egestas sem magna. Mi diam tincidunt urna massa urna lectus. Sit ac parturient morbi nunc hendrerit mauris quis ut a. Nisl sit diam mi nulla a pretium nec venenatis a. Neque mi suspendisse quam faucibus augue senectus.
                  </div>
                  <div className="text-stone-500 text-sm font-normal leading-snug">
                    Lorem ipsum dolor sit amet consectetur. Tristique nam amet est turpis in pellentesque. Elit pellentesque ultricies donec posuere tellus egestas sem magna. Mi diam tincidunt urna massa urna lectus. Sit ac parturient morbi nunc hendrerit mauris quis ut a. Nisl sit diam mi nulla a pretium nec venenatis a. Neque mi suspendisse quam faucibus augue senectus.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Beliefs Section */}
      <section className="w-full min-h-[753px] bg-gradient-to-br from-blue-900 via-sky-800 to-blue-700 flex justify-center items-end">
        <div className="max-w-6xl mx-auto w-full p-12 flex flex-col justify-end items-start gap-6">
          <div className="w-full p-12 bg-black/20 rounded-xl outline outline-1 outline-offset-[-1px] outline-white/30 backdrop-blur-md flex flex-col justify-start items-start gap-6">
            <div className="w-full text-white text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-tight font-anton">AT WORD SANCTUARY, we believe;</div>
            <div className="w-full text-white text-base font-normal leading-normal">
              Lorem ipsum dolor sit amet consectetur. Tincidunt aliquam scelerisque orci viverra at habitant nulla vel morbi. Ut nulla feugiat nibh turpis. Sit consequat lectus est laoreet facilisi ut duis est. Velit sollicitudin vitae erat id in sagittis. Tincidunt sed arcu pulvinar fames nibh proin platea massa. Dui diam a ligula pulvinar sed in.<br/><br/>
              Tortor nunc cursus sit elit malesuada vel at viverra. Est eu at auctor duis ac orci elementum scelerisque. Id vel turpis proin integer dictum volutpat gravida pellentesque. Ridiculus lacinia quis adipiscing et augue auctor purus vulputate vel. Id id mi malesuada ultrices sagittis erat.
            </div>
          </div>
        </div>
      </section>
      
      {/* About Our Pastor Section */}
      <section className="self-stretch bg-neutral-900 inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
        <div className="self-stretch px-12 py-24 flex flex-col justify-start items-start gap-2.5">
          <div className="self-stretch inline-flex justify-start items-start gap-16">
            <img className="w-[571px] h-[602px] relative rounded-xl flex-shrink-0" src="https://placehold.co/571x602" />
            <div className="flex-1 self-stretch inline-flex flex-col justify-start items-start">
              <div className="self-stretch flex-1 flex flex-col justify-start items-start gap-6">
                <div className="self-stretch text-white text-5xl font-bold uppercase leading-none font-anton">ABOUT OUR PASTOR</div>
                <div 
                  className={`self-stretch text-justify justify-start text-white text-base font-normal leading-normal transition-all duration-300 ${
                    isExpanded ? 'flex-1' : 'overflow-hidden'
                  }`}
                  style={!isExpanded ? { maxHeight: '480px' } : {}}
                >
                  {isExpanded ? (
                    <div className="space-y-4">
                      {fullText.split('\n').filter(p => p.trim()).map((paragraph, index) => (
                        <p key={index} className="mb-4 last:mb-0">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {truncatedText.split('\n').filter(p => p.trim()).map((paragraph, index) => (
                        <p key={index} className="mb-4 last:mb-0">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="h-10 py-2.5 rounded-[100px] inline-flex justify-center items-center gap-2 hover:bg-white/10 transition-colors duration-200"
              >
                <div className="justify-center text-white text-sm font-semibold underline tracking-wide">
                  {isExpanded ? 'READ LESS' : 'READ MORE'}
                </div>
                <div className="w-3 h-3 relative overflow-hidden">
                  <div 
                    className={`w-2 h-1.5 left-[2px] top-[3px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-white transition-transform duration-200 ${
                      isExpanded ? 'rotate-90' : ''
                    }`} 
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Family Section */}
      <section className="w-full px-12 py-24 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col justify-start items-center gap-12 overflow-hidden">
          <div className="w-full flex flex-col justify-start items-center gap-12">
            <div className="w-full flex flex-col justify-start items-center gap-8">
              <div className="h-10 px-6 py-2.5 bg-zinc-200 rounded-full backdrop-blur-sm inline-flex justify-center items-center gap-4">
                <div className="w-2 h-2 bg-sky-900 rounded-full" />
                <div className="justify-center text-sky-900 text-[10px] font-bold tracking-wide">FAMILY</div>
              </div>
              <div className="w-full flex flex-col justify-start items-center gap-4">
                <div className="w-full text-center justify-center">
                  <span className="text-black text-4xl md:text-5xl font-normal leading-tight font-anton">We do community differently <br/>at</span>
                  <span className="text-sky-900 text-4xl md:text-5xl font-normal leading-tight font-anton"> Word Sanctuary Global</span>
                </div>
                <div className="w-full text-center justify-center">
                  <span className="text-black text-base font-normal">A place to grow, belong, and become — </span>
                  <span className="text-black text-base font-bold">a church that's Heaven.</span>
                </div>
              </div>
            </div>
            <div className="h-10 px-7 py-2.5 rounded-full outline outline-1 outline-offset-[-1px] outline-black inline-flex justify-center items-center gap-2">
              <div className="justify-center text-black text-xs font-bold tracking-wide">SEE ALL INSTALLATIONS</div>
              <div className="w-4 h-4 relative overflow-hidden">
                <svg className="w-2.5 h-2 absolute left-[2.67px] top-[4px] text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="flex flex-col justify-start items-start gap-4">
              <div className="w-full h-96 relative bg-neutral-900 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-sky-900/30" />
              </div>
              <div className="w-full flex flex-col justify-start items-start gap-4">
                <div className="inline-flex justify-start items-end gap-2">
                  <div className="justify-center text-black text-base font-bold">Life Class</div>
                  <div className="w-4 h-4 relative overflow-hidden">
                    <svg className="w-2.5 h-2 absolute left-[2.67px] top-[4px] text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                <div className="w-full text-stone-500 text-sm font-normal tracking-wide">
                  Life class gets you grounded in God's word with a systematic approach to the study of God's word; from salvation, to discipleship, evangelism, all these and more will be brought to your knowledge.
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start gap-4">
              <div className="w-full h-96 relative bg-neutral-900 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-sky-900/30" />
              </div>
              <div className="w-full flex flex-col justify-start items-start gap-4">
                <div className="inline-flex justify-start items-end gap-2">
                  <div className="justify-center text-black text-base font-bold">Foundation Training</div>
                  <div className="w-4 h-4 relative overflow-hidden">
                    <svg className="w-2.5 h-2 absolute left-[2.67px] top-[4px] text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                <div className="w-full text-stone-500 text-sm font-normal tracking-wide">
                  Life class gets you grounded in God's word with a systematic approach to the study of God's word; from salvation, to discipleship, evangelism, all these and more will be brought to your knowledge.
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start gap-4">
              <div className="w-full h-96 relative bg-neutral-900 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-sky-900/30" />
              </div>
              <div className="w-full flex flex-col justify-start items-start gap-4">
                <div className="inline-flex justify-start items-end gap-2">
                  <div className="justify-center text-black text-base font-bold">Central Trainings</div>
                  <div className="w-4 h-4 relative overflow-hidden">
                    <svg className="w-2.5 h-2 absolute left-[2.67px] top-[4px] text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                <div className="w-full text-stone-500 text-sm font-normal tracking-wide">
                  Life class gets you grounded in God's word with a systematic approach to the study of God's word; from salvation, to discipleship, evangelism, all these and more will be brought to your knowledge.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
