import React from "react";
import { ArrowLeft, MapPin, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import CartIcon from "./CartIcon";
import WalletIcon from "./WalletIcon";

const Navbar = () => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between h-16 px-7 pt-8 pb-4">
        <div className="flex flex-row items-center gap-2">
          <ArrowLeft size={40} />
          <div>
            <div className="flex flex-row items-center">
              <h1 className="text-2xl font-semibold">Billekahalli</h1>
              <MapPin className="ps-1" />
            </div>
            <p className="text-sm md:text-base">Sarvabhoumanagar, Billekahalli</p>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-4 w-full max-w-3xl px-4">
          <div className="relative flex items-center w-full">
            <Input
              placeholder="Find lab test, diagnostic centers"
              className="w-full h-10 px-4 pr-10"
            />
            <Search
              className="absolute right-3 text-gray-500 cursor-pointer"
              size={20}
            />
          </div>
        </div>

        <div className="flex flex-row items-center gap-6 md:gap-10">
          <CartIcon />
          <WalletIcon />
        </div>
      </div>

      <div className="lg:hidden px-7 pb-4 pt-4">
        <div className="relative flex items-center w-full max-w-3xl mx-auto">
          <Input
            placeholder="Find lab test, diagnostic centers"
            className="w-full h-10 px-4 pr-10"
          />
          <Search
            className="absolute right-3 text-gray-500 cursor-pointer"
            size={20}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;