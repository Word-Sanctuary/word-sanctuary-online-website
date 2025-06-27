import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-sky-800 to-blue-700 flex items-end justify-center pb-16 pt-20">
        {/* Background overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Background pattern effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 inline-flex flex-col justify-start items-center gap-9 px-6 text-center">
          <div className="flex flex-col justify-start items-center gap-6">
            {/* Main Heading */}
            <div className="text-center justify-center max-w-4xl">
              <span className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight block font-sans">
                Growing in Love — 
              </span>
              <span className="text-sky-400 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight block font-sans">
                A Church That's Heaven
              </span>
            </div>
          </div>
          
          {/* CTA Button */}
          <button className="h-11 px-8 py-2.5 bg-white rounded-full inline-flex justify-center items-center gap-2.5 hover:bg-gray-100 transition-colors shadow-lg">
            <div className="justify-center text-black text-sm font-bold tracking-wide">JOIN US</div>
          </button>
        </div>
      </section>
      
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
                  <div className="text-center justify-center text-black text-5xl font-normal leading-[59px]">WORD SANCTUARY GLOBAL</div>
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
            <div className="w-full text-white text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-tight">AT WORD SANCTUARY, we believe;</div>
            <div className="w-full text-white text-base font-normal leading-normal">
              Lorem ipsum dolor sit amet consectetur. Tincidunt aliquam scelerisque orci viverra at habitant nulla vel morbi. Ut nulla feugiat nibh turpis. Sit consequat lectus est laoreet facilisi ut duis est. Velit sollicitudin vitae erat id in sagittis. Tincidunt sed arcu pulvinar fames nibh proin platea massa. Dui diam a ligula pulvinar sed in.<br/><br/>
              Tortor nunc cursus sit elit malesuada vel at viverra. Est eu at auctor duis ac orci elementum scelerisque. Id vel turpis proin integer dictum volutpat gravida pellentesque. Ridiculus lacinia quis adipiscing et augue auctor purus vulputate vel. Id id mi malesuada ultrices sagittis erat.
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
                  <span className="text-black text-4xl md:text-5xl font-normal leading-tight">We do community differently <br/>at</span>
                  <span className="text-sky-900 text-4xl md:text-5xl font-normal leading-tight"> Word Sanctuary Global</span>
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
