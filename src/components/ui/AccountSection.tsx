import AccountCard from './AccountCard';

interface AccountInfo {
  bankName: string;
  accountNumber: string;
}

interface AccountSectionProps {
  title: string;
  accounts: AccountInfo[];
  onCopy?: (accountNumber: string) => void;
}

export default function AccountSection({ title, accounts, onCopy }: AccountSectionProps) {
  return (
    <div className="w-[1340px] h-56 left-[50px] top-[55px] absolute">
      <div className="w-[1340px] h-52 left-0 top-[19px] absolute rounded-lg outline outline-1 outline-offset-[-1px] outline-sky-900/30 overflow-hidden">
        <div className="left-[54.50px] top-[50px] absolute inline-flex justify-start items-center gap-12">
          {accounts.map((account, index) => (
            <AccountCard
              key={index}
              bankName={account.bankName}
              accountNumber={account.accountNumber}
              onCopy={() => onCopy?.(account.accountNumber)}
            />
          ))}
        </div>
      </div>
      <div className="px-7 py-2 left-[51px] top-0 absolute bg-white rounded-[50px] outline outline-1 outline-offset-[-1px] outline-sky-900/30 inline-flex justify-center items-center gap-2.5 overflow-hidden">
        <div className="text-center justify-center text-black text-sm font-bold font-['Lato'] leading-snug">
          {title}
        </div>
      </div>
    </div>
  );
}

