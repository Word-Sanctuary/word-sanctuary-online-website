import Image from "next/image";

interface CommunityCard {
  title: string;
  description: string;
  image: string;
}

interface CommunitySectionProps {
  cards?: CommunityCard[];
}

const defaultCards: CommunityCard[] = [
  {
    title: "Life Class",
    description: "Life class gets you grounded in God's word with a systematic approach to the study of God's word; from salvation, to discipleship, evangelism, all these and more will be brought to your knowledge.",
    image: "/images/community1.png"
  },
  {
    title: "Foundation Training", 
    description: "Life class gets you grounded in God's word with a systematic approach to the study of God's word; from salvation, to discipleship, evangelism, all these and more will be brought to your knowledge.",
    image: "/images/communityimage2.png"
  },
  {
    title: "Central Trainings",
    description: "Life class gets you grounded in God's word with a systematic approach to the study of God's word; from salvation, to discipleship, evangelism, all these and more will be brought to your knowledge.",
    image: "/images/communityimage3.png"
  }
];

export default function CommunitySection({ cards = defaultCards }: CommunitySectionProps) {
  return (
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
        {cards.map((card, index) => (
          <div key={index} className="flex-1 max-w-96 flex flex-col justify-start items-start gap-4">
            <div className="self-stretch h-96 relative bg-neutral-900 rounded-lg overflow-hidden">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-4">
              <div className="inline-flex justify-start items-end gap-2">
                <div className="justify-center text-black text-base font-bold">{card.title}</div>
                <div className="w-4 h-4 relative overflow-hidden">
                  <svg className="w-2.5 h-2 absolute left-[2.67px] top-[4px] text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              <div className="self-stretch justify-center text-stone-500 text-sm font-normal tracking-wide">
                {card.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
