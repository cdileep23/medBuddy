import React from "react";
import { ShoppingCart } from "lucide-react";

const CartIcon = () => {
  const cartItemCount = 1;

  return (
    <div className="relative inline-block">
   
      <ShoppingCart size={32} />

  
      {cartItemCount > 0 && (
        <span
          className="absolute -top-2 -right-2 bg-blue-500 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-md"
        >
          {cartItemCount}
        </span>
      )}
    </div>
  );
};

export default CartIcon;

