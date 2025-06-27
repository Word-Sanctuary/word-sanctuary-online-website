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
            <div className="text-center justify-center">
              <span className="text-white text-7xl font-normal font-['Anton'] leading-[79px]">
                Growing in Love — <br/>
              </span>
              <span className="text-sky-500 text-7xl font-normal font-['Anton'] leading-[79px]">
                A Church That's Heaven
              </span>
            </div>
          </div>
          
          {/* CTA Button */}
          <button className="h-11 px-8 py-2.5 bg-white rounded-[100px] inline-flex justify-center items-center gap-2.5 hover:bg-gray-100 transition-colors shadow-lg">
            <div className="justify-center text-black text-sm font-bold font-['Lato']">JOIN US</div>
          </button>
        </div>
      </section>
      
      {/* About Us Section */}
      <section className="w-full bg-white">
        <div className="self-stretch p-12 inline-flex flex-col justify-start items-center gap-4">
          <div className="self-stretch flex flex-col justify-start items-center gap-8">
            <div className="self-stretch flex flex-col justify-start items-center gap-12">
              <div className="self-stretch flex flex-col justify-start items-center gap-16">
                <div className="flex flex-col justify-start items-center gap-6">
                  <div className="h-10 px-6 py-2.5 bg-zinc-400/40 rounded-[100px] backdrop-blur-[2px] inline-flex justify-center items-center gap-4">
                    <div className="w-2 h-2 bg-sky-900 rounded-full" />
                    <div className="justify-center text-sky-900 text-[10px] font-bold font-['Inter']">ABOUT US</div>
                  </div>
                  <div className="text-center justify-center text-black text-5xl font-normal font-['Anton'] leading-[59px]">WORD SANCTUARY GLOBAL</div>
                  <div className="self-stretch text-center justify-center">
                    <span className="text-stone-500 text-sm font-normal font-['Lato'] leading-snug">The Heavenly Jerusalem; a Church that is </span>
                    <span className="text-black text-sm font-bold font-['Lato'] leading-snug">HEAVEN!</span>
                  </div>
                </div>
                <div className="self-stretch px-16 inline-flex justify-start items-start gap-16">
                  <div className="flex-1 self-stretch justify-start text-stone-500 text-sm font-normal font-['Lato'] leading-snug">
                    Lorem ipsum dolor sit amet consectetur. Tristique nam amet est turpis in pellentesque. Elit pellentesque ultricies donec posuere tellus egestas sem magna. Mi diam tincidunt urna massa urna lectus. Sit ac parturient morbi nunc hendrerit mauris quis ut a. Nisl sit diam mi nulla a pretium nec venenatis a. Neque mi suspendisse quam faucibus augue senectus. Neque diam duis eleifend metus ultricies tellus amet. Cursus eu morbi ullamcorper ullamcorper nec accumsan nibh. Justo velit vel dolor massa ipsum. Vestibulum laoreet adipiscing justo est suscipit magnis ut tincidunt augue. Varius iaculis tristique ut tincidunt posuere. Nunc viverra commodo aliquet arcu nibh. Cras quisque in sem massa euismod.
                  </div>
                  <div className="flex-1 self-stretch justify-start text-stone-500 text-sm font-normal font-['Lato'] leading-snug">
                    Lorem ipsum dolor sit amet consectetur. Tristique nam amet est turpis in pellentesque. Elit pellentesque ultricies donec posuere tellus egestas sem magna. Mi diam tincidunt urna massa urna lectus. Sit ac parturient morbi nunc hendrerit mauris quis ut a. Nisl sit diam mi nulla a pretium nec venenatis a. Neque mi suspendisse quam faucibus augue senectus. Neque diam duis eleifend metus ultricies tellus amet. Cursus eu morbi ullamcorper ullamcorper nec accumsan nibh. Justo velit vel dolor massa ipsum. Vestibulum laoreet adipiscing justo est suscipit magnis ut tincidunt augue. Varius iaculis tristique ut tincidunt posuere. Nunc viverra commodo aliquet arcu nibh. Cras quisque in sem massa euismod.
                  </div>
                  <div className="flex-1 self-stretch justify-start text-stone-500 text-sm font-normal font-['Lato'] leading-snug">
                    Lorem ipsum dolor sit amet consectetur. Tristique nam amet est turpis in pellentesque. Elit pellentesque ultricies donec posuere tellus egestas sem magna. Mi diam tincidunt urna massa urna lectus. Sit ac parturient morbi nunc hendrerit mauris quis ut a. Nisl sit diam mi nulla a pretium nec venenatis a. Neque mi suspendisse quam faucibus augue senectus. Neque diam duis eleifend metus ultricies tellus amet. Cursus eu morbi ullamcorper ullamcorper nec accumsan nibh. Justo velit vel dolor massa ipsum. Vestibulum laoreet adipiscing justo est suscipit magnis ut tincidunt augue. Varius iaculis tristique ut tincidunt posuere. Nunc viverra commodo aliquet arcu nibh. Cras quisque in sem massa euismod.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Beliefs Section */}
      <section className="w-full min-h-[753px] bg-gradient-to-br from-blue-900 via-sky-800 to-blue-700 flex justify-center items-end">
        <div className="w-[1440px] h-[753px] p-12 inline-flex flex-col justify-end items-start gap-6">
          <div className="self-stretch p-12 bg-black/20 rounded-xl outline outline-1 outline-offset-[-1px] outline-white/30 backdrop-blur-md flex flex-col justify-start items-start gap-6">
            <div className="self-stretch justify-center text-white text-7xl font-normal font-['Anton'] uppercase leading-[84px]">AT WORD SANCTUARY, we believe;</div>
            <div className="w-[1062.61px] h-36 justify-center text-white text-base font-normal font-['Inter'] leading-normal">
              Lorem ipsum dolor sit amet consectetur. Tincidunt aliquam scelerisque orci viverra at habitant nulla vel morbi. Ut nulla feugiat nibh turpis. Sit consequat lectus est laoreet facilisi ut duis est. Velit sollicitudin vitae erat id in sagittis. Tincidunt sed arcu pulvinar fames nibh proin platea massa. Dui diam a ligula pulvinar sed in.<br/>
              Tortor nunc cursus sit elit malesuada vel at viverra. Est eu at auctor duis ac orci elementum scelerisque. Id vel turpis proin integer dictum volutpat gravida pellentesque. Ridiculus lacinia quis adipiscing et augue auctor purus vulputate vel. Id id mi malesuada ultrices sagittis erat.
            </div>
          </div>
        </div>
      </section>
      
      {/* Family Section */}
      <section className="self-stretch px-12 py-24 bg-white inline-flex flex-col justify-start items-center gap-12 overflow-hidden">
        <div className="self-stretch flex flex-col justify-start items-center gap-12">
          <div className="self-stretch flex flex-col justify-start items-center gap-8">
            <div className="h-10 px-6 py-2.5 bg-slate-300 rounded-[100px] backdrop-blur-[2px] inline-flex justify-center items-center gap-4">
              <div className="w-2 h-2 bg-sky-900 rounded-full" />
              <div className="justify-center text-sky-900 text-[10px] font-bold">FAMILY</div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-center gap-4">
              <div className="self-stretch text-center justify-center">
                <span className="text-black text-5xl font-normal leading-[56px]">We do community differently <br/>at</span>
                <span className="text-sky-900 text-5xl font-normal leading-[56px]"> Word Sanctuary Global</span>
              </div>
              <div className="self-stretch text-center justify-center">
                <span className="text-black text-base font-normal">A place to grow, belong, and become — </span>
                <span className="text-black text-base font-bold">a church that's Heaven.</span>
              </div>
            </div>
          </div>
          <div className="h-10 px-7 py-2.5 rounded-[100px] outline outline-1 outline-offset-[-1px] outline-black inline-flex justify-center items-center gap-2">
            <div className="justify-center text-black text-xs font-bold">SEE ALL INSTALLATIONS</div>
            <div className="w-4 h-4 relative overflow-hidden">
              <svg className="w-2.5 h-2 absolute left-[2.67px] top-[4px] text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
        <div className="w-full max-w-[1340px] mx-auto flex flex-col lg:flex-row justify-between items-start gap-8">
          <div className="flex-1 max-w-96 flex flex-col justify-start items-start gap-4">
            <div className="self-stretch h-96 relative bg-neutral-900 rounded-lg overflow-hidden">
              <div className="w-[826px] h-[551px] left-[-299px] top-[-124px] absolute bg-sky-900/30" />
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-4">
              <div className="inline-flex justify-start items-end gap-2">
                <div className="justify-center text-black text-base font-bold">Life Class</div>
                <div className="w-4 h-4 relative overflow-hidden">
                  <svg className="w-2.5 h-2 absolute left-[2.67px] top-[4px] text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              <div className="self-stretch justify-center text-stone-500 text-sm font-normal tracking-wide">
                Life class gets you grounded in God's word with a systematic approach to the study of God's word; from salvation, to discipleship, evangelism, all these and more will be brought to your knowledge.
              </div>
            </div>
          </div>
          <div className="flex-1 max-w-96 flex flex-col justify-start items-start gap-4">
            <div className="self-stretch h-96 relative bg-neutral-900 rounded-lg overflow-hidden">
              <div className="w-[694.34px] h-96 left-[-131.67px] top-0 absolute bg-sky-900/30" />
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-4">
              <div className="inline-flex justify-start items-end gap-2">
                <div className="justify-center text-black text-base font-bold">Foundation Training</div>
                <div className="w-4 h-4 relative overflow-hidden">
                  <svg className="w-2.5 h-2 absolute left-[2.67px] top-[4px] text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              <div className="self-stretch justify-center text-stone-500 text-sm font-normal tracking-wide">
                Life class gets you grounded in God's word with a systematic approach to the study of God's word; from salvation, to discipleship, evangelism, all these and more will be brought to your knowledge.
              </div>
            </div>
          </div>
          <div className="flex-1 max-w-96 flex flex-col justify-start items-start gap-4">
            <div className="self-stretch h-96 relative bg-neutral-900 rounded-lg overflow-hidden">
              <div className="w-[826px] h-[551px] left-[-352.33px] top-[-138px] absolute bg-sky-900/30" />
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-4">
              <div className="inline-flex justify-start items-end gap-2">
                <div className="justify-center text-black text-base font-bold">Central Trainings</div>
                <div className="w-4 h-4 relative overflow-hidden">
                  <svg className="w-2.5 h-2 absolute left-[2.67px] top-[4px] text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              <div className="self-stretch justify-center text-stone-500 text-sm font-normal tracking-wide">
                Life class gets you grounded in God's word with a systematic approach to the study of God's word; from salvation, to discipleship, evangelism, all these and more will be brought to your knowledge.
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
