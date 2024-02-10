"use client";
import {
  CartProductType,
  SelectedImageType,
} from "@/app/product/ProductDetails";
import Image from "next/image";
import React from "react";

interface ProductImageProps {
  cartProduct: CartProductType;
  product: any;
  handleColorSelect: (value: SelectedImageType) => void;
}
export function ProductImage({
  cartProduct,
  product,
  handleColorSelect,
}: ProductImageProps) {
  return (
    <div className="grid grid-cols-6 gap-2 h-full max-h-[500px] min-h-[300px]sm:min-h-[400px]">
      <div className="flex items-center justify-center cursor-pointer gap-4 border h-full  max-h-[500px] min-h-[300px]sm:min-h-[400px] ">
        {product.images.map((image: SelectedImageType) => {
        
          <div
            key={image.color}
            onClick={() => handleColorSelect(image)}
            className={`relative-w-[80%] aspect-square rounded border-teal-300 ${
              cartProduct.selectedImage.image === image.color
                ? "border-[1.5px]"
                : "border-none"
            }`}
          >
            <Image
              src={image.image}
              alt={image.color}
              fill
              className="object-contained"
            />
            
          </div>;
        })}
      </div>
      <div className="col-span-5 relative aspect-square "> <Image fill alt={cartProduct.name} src={cartProduct.selectedImage.image} className="w-full h-full object-contain max-h-[500px] min-h-[300px]sm:min-h-[400px]"/> </div>
    </div>
  );
}
