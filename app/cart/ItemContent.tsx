import React from "react";
import { CartProductType } from "../product/ProductDetails";
import { TruncateText, formatPrice } from "@/utils";
import Link from "next/link";
import { Button, SetQuantity } from "../components";
import Image from "next/image";
import { UseCart } from "../hooks";

interface ItemContentProp {
  item: CartProductType;
}

export function ItemContent({ item }: ItemContentProp) {
  const {handleRemoveProductFromCart,handleItemQtyDecrease, handleItemQtyIncrease} = UseCart()
  return (
    <div className="grid grid-cols-5 text-xs md:text-sm gap-4 border-t-[1.5px] border-slate-200 py-4 items-center">
      <div className="col-span-2 justify-self-start flex gap-2 md:gap-4" >
        <Link href={`/product/${item.id}`}>
            <div className="relative w-[70px] aspect-square">
              <Image src={item.selectedImage.image} alt={item.name} fill className="object-contain"/>
            </div>
        </Link>
        <div className="flex flex-col justify-between" >
        <Link href={`/product/${item.id}`}>
        {TruncateText(item.name)}
        </Link>
        <div>{item.selectedImage.color}</div>
        <div className="w-[70px]">
          <Button  label="remove"onClick={()=>{handleRemoveProductFromCart(item)}} />
        </div>
        </div>
      </div>
      <div className="justify-self-centre">{formatPrice(item.price)}</div>
      <div className="justify-self-centre">
        <SetQuantity
        cartProduct={item}
        cartCounter={true}
        handleQtyDecrease={()=>{handleItemQtyDecrease(item)}}
        handleQtyIncrease={()=>{handleItemQtyIncrease(item)}}
        />
      </div>
      <div className="justify-self-end font-semibold"> {formatPrice(item.price*item.quantity)}</div>
    </div>
  );
}
