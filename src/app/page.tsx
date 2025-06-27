import Navbar from "@/components/Navbar";

export default function Home() {
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
            {/* Our Mandate Badge */}
            <div className="h-10 px-6 py-2.5 bg-white/40 rounded-full outline outline-1 outline-offset-[-1px] outline-white backdrop-blur-sm inline-flex justify-center items-center gap-4">
              <div className="w-2 h-2 bg-sky-900 rounded-full" />
              <div className="justify-center text-white text-xs font-bold tracking-wide font-lato">OUR MANDATE</div>
            </div>

            {/* Main Heading */}
            <div className="text-center justify-center max-w-4xl">
              <span className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight block font-anton">
                MAKING A FAMILY FOR GOD
              </span>
              <span className="text-sky-400 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight block font-anton">
                ON EARTH!
              </span>
            </div>
          </div>

          {/* CTA Button */}
          <button className="h-11 px-8 py-2.5 bg-white rounded-full inline-flex justify-center items-center gap-2.5 hover:bg-gray-100 transition-colors shadow-lg">
            <div className="justify-center text-black text-sm font-bold tracking-wide font-inter">JOIN US ON YOUTUBE</div>
          </button>
        </div>
      </section>

      {/* Welcome to Mount Zion Section */}
      <section className="w-full p-12 flex flex-col justify-start items-start gap-4 bg-white">
        <div className="max-w-[702px] flex flex-col justify-start items-start gap-8">
          {/* Welcome Badge */}
          <div className="h-10 px-6 py-2.5 bg-zinc-200 rounded-full backdrop-blur-sm inline-flex justify-center items-center gap-4">
            <div className="w-2 h-2 bg-sky-900 rounded-full" />
            <div className="justify-center text-sky-900 text-[10px] font-bold tracking-wide">WELCOME TO WORD SANCTUARY GLOBAL</div>
          </div>

          {/* Heading and Description */}
          <div className="w-full flex flex-col justify-start items-start gap-4">
            <div className="w-full flex flex-col justify-start items-start gap-8">
              <h2 className="w-full text-black text-5xl font-normal font-lato">WELCOME TO MOUNT ZION</h2>
              <div className="w-full font-inter">
                <span className="text-stone-500 text-sm font-normal leading-snug">
                  The Heavenly Jerusalem; a Church that is
                </span>
                <span className="text-black text-sm font-bold leading-snug">
                  {" HEAVEN!"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="w-full flex justify-start items-start gap-6">
          {/* About Us Card */}
          <div className="flex-1 h-96 relative bg-zinc-700 rounded-lg overflow-hidden group cursor-pointer">
            {/* Background Image Placeholder */}
            <div className="w-full h-full absolute bg-gradient-to-br from-zinc-600 to-zinc-800" />
            <div className="absolute inset-0 bg-zinc-700/60" />

            {/* Card Content */}
            <div className="w-36 h-80 left-[24px] top-[24px] absolute flex flex-col justify-between items-start">
              <div className="w-full flex flex-col justify-start items-start gap-1.5">
                <div className="w-full text-neutral-200 text-[10px] font-bold tracking-wide font-inter">WHO ARE WE?</div>
                <div className="w-full text-white text-3xl font-bold font-lato">About Us</div>
              </div>
              <div className="flex justify-start items-center gap-1 group-hover:gap-2 transition-all">
                <div className="text-neutral-200 text-[10px] font-bold tracking-wide font-inter">LEARN MORE</div>
                <div className="w-3 h-3 relative overflow-hidden">
                  <svg className="w-2 h-1.5 absolute left-[2px] top-[3px] text-neutral-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Community Card */}
          <div className="flex-1 h-96 relative bg-blue-600 rounded-lg overflow-hidden group cursor-pointer">
            {/* Background Image Placeholder */}
            <div className="w-full h-full absolute bg-gradient-to-br from-blue-500 to-blue-700" />
            <div className="absolute inset-0 bg-blue-600/50" />

            {/* Card Content */}
            <div className="h-80 left-[24px] top-[24px] absolute flex flex-col justify-between items-start">
              <div className="flex flex-col justify-start items-start gap-1.5">
                <div className="w-full text-neutral-200 text-[10px] font-bold tracking-wide">JOIN OUR COMMUNITY</div>
                <div className="text-white text-3xl font-bold">Community</div>
              </div>
              <div className="flex justify-start items-center gap-1 group-hover:gap-2 transition-all">
                <div className="text-neutral-200 text-[10px] font-bold tracking-wide">LEARN MORE</div>
                <div className="w-3 h-3 relative overflow-hidden">
                  <svg className="w-2 h-1.5 absolute left-[2px] top-[3px] text-neutral-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Celebration Card */}
          <div className="flex-1 h-96 relative bg-blue-600 rounded-lg overflow-hidden group cursor-pointer">
            {/* Background Image Placeholder */}
            <div className="w-full h-full absolute bg-gradient-to-br from-blue-500 to-blue-700" />
            <div className="absolute inset-0 bg-blue-600/50" />

            {/* Card Content */}
            <div className="h-80 left-[24px] top-[25px] absolute flex flex-col justify-between items-start">
              <div className="w-full flex flex-col justify-start items-start gap-1.5">
                <div className="w-full text-neutral-200 text-[10px] font-bold tracking-wide">JOIN US SPECIAL SERVICES</div>
                <div className="text-white text-3xl font-bold">Celebration</div>
              </div>
              <div className="flex justify-start items-center gap-1 group-hover:gap-2 transition-all">
                <div className="text-neutral-200 text-[10px] font-bold tracking-wide">LEARN MORE</div>
                <div className="w-3 h-3 relative overflow-hidden">
                  <svg className="w-2 h-1.5 absolute left-[2px] top-[3px] text-neutral-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Worship With Us Section */}
      <section className="w-full px-12 py-24 bg-stone-950 flex flex-col justify-start items-center gap-16 overflow-hidden">
        <div className="max-w-[785px] flex flex-col justify-start items-center gap-12">
          <div className="w-full flex flex-col justify-start items-center gap-8">
            {/* Worship Badge */}
            <div className="h-10 px-6 py-2.5 bg-zinc-400/40 rounded-full backdrop-blur-sm inline-flex justify-center items-center gap-4">
              <div className="w-2 h-2 bg-white rounded-full" />
              <div className="justify-center text-white text-[10px] font-bold tracking-wide">WORSHIP WITH US</div>
            </div>

            {/* Heading and Description */}
            <div className="w-full flex flex-col justify-start items-center gap-4">
              <div className="w-full text-center">
                <span className="text-white text-4xl font-bold uppercase leading-tight block font-anton">
                  Experience a new chapter in your
                </span>
                <span className="text-sky-500 text-4xl font-bold uppercase leading-tight block font-anton">
                  spiritual growth journey
                </span>
              </div>
              <div className="w-full text-center text-white text-sm font-medium">
                Find an installation near you
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button className="h-11 px-7 py-2.5 rounded-full outline outline-1 outline-offset-[-1px] outline-white inline-flex justify-center items-center gap-2.5 hover:bg-white/10 transition-colors">
            <div className="justify-center text-white text-sm font-bold">SEE ALL INSTALLATIONS</div>
          </button>
        </div>

        {/* Installation Cards */}
        <div className="w-full max-w-[1340px] flex justify-start items-center gap-4">
          {/* Ilorin */}
          <div className="flex-1 h-96 relative rounded overflow-hidden group cursor-pointer">
            {/* Background with warm earth tones */}
            <div className="w-full h-full absolute bg-gradient-to-br from-amber-600 via-orange-500 to-red-600" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Location Info */}
            <div className="absolute bottom-4 left-4 flex flex-col">
              <div className="text-white text-2xl font-bold mb-1">Ilorin</div>
              <div className="text-white text-xs font-medium opacity-90">Address in subtext</div>
            </div>
          </div>

          {/* Abuja */}
          <div className="flex-1 h-96 relative rounded overflow-hidden group cursor-pointer">
            {/* Background with modern blue tones */}
            <div className="w-full h-full absolute bg-gradient-to-br from-blue-600 via-indigo-500 to-purple-600" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Location Info */}
            <div className="absolute bottom-4 left-4 flex flex-col">
              <div className="text-white text-2xl font-bold mb-1">Abuja</div>
              <div className="text-white text-xs font-medium opacity-90">Address in subtext</div>
            </div>
          </div>

          {/* Lagos */}
          <div className="flex-1 h-96 relative rounded overflow-hidden group cursor-pointer">
            {/* Background with coastal cyan tones */}
            <div className="w-full h-full absolute bg-gradient-to-br from-cyan-500 via-blue-500 to-blue-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Location Info */}
            <div className="absolute bottom-4 left-4 flex flex-col">
              <div className="text-white text-2xl font-bold mb-1">Lagos</div>
              <div className="text-white text-xs font-medium opacity-90">Address in subtext</div>
            </div>
          </div>

          {/* Ibadan */}
          <div className="flex-1 h-96 relative rounded overflow-hidden group cursor-pointer">
            {/* Background with green nature tones */}
            <div className="w-full h-full absolute bg-gradient-to-br from-green-600 via-emerald-500 to-teal-600" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Location Info */}
            <div className="absolute bottom-4 left-4 flex flex-col">
              <div className="text-white text-2xl font-bold mb-1">Ibadan</div>
              <div className="text-white text-xs font-medium opacity-90">Address in subtext</div>
            </div>
          </div>

          {/* United Kingdom */}
          <div className="flex-1 h-96 relative rounded overflow-hidden group cursor-pointer">
            {/* Background with elegant gray tones */}
            <div className="w-full h-full absolute bg-gradient-to-br from-slate-600 via-gray-500 to-zinc-600" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Location Info */}
            <div className="absolute bottom-4 left-4 flex flex-col">
              <div className="text-white text-2xl font-bold mb-1">United Kingdom</div>
              <div className="text-white text-xs font-medium opacity-90">Address in subtext</div>
            </div>
          </div>
        </div>
      </section>

      {/* A Gathering of Achievers Section */}
      <section className="w-full min-h-[753px] bg-gradient-to-br from-blue-900 via-sky-800 to-blue-700 flex justify-center items-end">
        <div className="w-full max-w-[1440px] h-[753px] p-12 inline-flex flex-col justify-end items-start gap-6">
          <div className="p-12 bg-black/20 rounded-xl outline outline-1 outline-offset-[-1px] outline-white/30 backdrop-blur-md flex flex-col justify-start items-start gap-6">
            <div className="w-[671px] justify-center text-white text-7xl font-normal uppercase leading-[84px] font-anton">
              A gathering<br />of achievers
            </div>
            <div className="w-[640px] justify-center text-white text-base font-normal leading-normal">
              At Word Sanctuary, our greatest success story is the grace to effectively evangelize, disciple, and equip those who were once seekers—transforming them into mature disciples and vibrant ministers of the gospel.
            </div>
            <div className="h-10 px-7 py-2.5 bg-sky-500 rounded-[100px] inline-flex justify-center items-center gap-2">
              <div className="justify-center text-white text-sm font-semibold tracking-wide">LEARN MORE</div>
              <div className="w-3 h-3 relative overflow-hidden">
                <svg className="w-2 h-1.5 absolute left-[2px] top-[3px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Our Pastor Section */}
      <section className="w-full bg-stone-950">
        <div className="self-stretch px-12 py-24 inline-flex flex-col justify-start items-start gap-2.5">
          <div className="self-stretch inline-flex justify-start items-start gap-16">
            <img className="w-[571px] h-96 relative rounded-xl object-cover" src="https://placehold.co/571x437" alt="Pastor Temple" />
            <div className="flex-1 self-stretch inline-flex flex-col justify-start items-start">
              <div className="self-stretch flex-1 flex flex-col justify-start items-start gap-6">
                <div className="self-stretch text-white text-5xl font-bold uppercase leading-none font-anton">
                  ABOUT OUR PASTOR
                </div>
                <div className="self-stretch flex-1 text-justify justify-start text-white text-base font-normal leading-normal">
                  Pastor Temple embodies a fatherly figure, nurturing nations through Jesus' teachings. As our Good Shepherd, he guides us tirelessly, leading us closer to God. Through his vision, we've seen the birth of Word Sanctuary and Life Class, empowering us with God's Word.
                  <br /><br />
                  His influence radiates Jesus' love, and his unwavering dedication to God's kingdom inspires countless lives. With a rare anointing, he shapes hearts and minds, bringing people to the knowledge of God's Word. Through his servant-leadership, we've witnessed lives transformed and destinies fulfilled.
                </div>
              </div>
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
                <span className="text-black text-5xl font-normal leading-[56px] font-anton">We do community differently <br />at</span>
                <span className="text-sky-900 text-5xl font-normal leading-[56px] font-anton"> Word Sanctuary Global</span>
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
