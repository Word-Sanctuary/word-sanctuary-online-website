interface AccountCardProps {
  bankName: string;
  accountNumber: string;
  onCopy?: () => void;
}

export default function AccountCard({ bankName, accountNumber, onCopy }: AccountCardProps) {
  const handleCopy = () => {
    navigator.clipboard.writeText(accountNumber);
    onCopy?.();
  };

  return (
    <div className="p-4 rounded-lg outline outline-1 outline-offset-[-1px] outline-sky-900/30 flex justify-between items-center gap-4">
      <div className="inline-flex flex-col justify-start items-start gap-[3px]">
        <div className="self-stretch justify-center text-zinc-400 text-sm font-normal font-['Lato'] leading-snug">
          {bankName}
        </div>
        <div className="text-center justify-center text-black text-4xl font-medium font-['Lato'] leading-[48px]">
          {accountNumber}
        </div>
      </div>
      <div 
        className="w-9 h-9 relative overflow-hidden cursor-pointer hover:opacity-70 transition-opacity flex-shrink-0"
        onClick={handleCopy}
      >
        <div className="w-7 h-7 left-[3px] top-[3px] absolute outline outline-[3px] outline-offset-[-1.50px] outline-black" />
      </div>
    </div>
  );
}
