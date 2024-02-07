'use client'

import { CartProductType } from "@/app/product/ProductDetails";
import React from "react";
interface SetQuantityProps {
  cartCounter?: boolean;
  cartProduct: CartProductType;
  handleQtyIncrease: () => void;
  handleQtyDecrease: () => void;
}
const btnStyles = 'border-[1.2px] border-slate-300 px-2-300'

export function SetQuantity({
  cartProduct,
  cartCounter,
  handleQtyDecrease,
  handleQtyIncrease,
}: SetQuantityProps) {
  return (
    <div className="flex gap-8 items-center">
      {cartCounter ? null : <div className="font-semibold"> QUANTITY </div>}
      <div className="flex gap-4 items-center text-base">
        <button className={btnStyles} onClick={handleQtyDecrease}>-</button>
        <div>{cartProduct.quantity}</div>
        <button className={btnStyles} onClick={handleQtyIncrease}> +</button>
      </div>
    </div>
  );
}
