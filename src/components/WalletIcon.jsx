import React from "react";
import { Wallet } from "lucide-react";

const WalletIcon = () => {
  const walletCount = 3000;

  return (
    <div className="relative inline-block">
    
      <Wallet size={32} />


      {walletCount > 0 && (
        <span
          className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white text-[10px] font-bold rounded-full h-5 min-w-5 px-2 flex items-center justify-center shadow-md"
        >
          {walletCount}
        </span>
      )}
    </div>
  );
};

export default WalletIcon;
