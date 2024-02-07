"use client";

import {
  CartProductType,
  SelectedImageType,
} from "@/app/product/ProductDetails";
import React from "react";

interface SetColorProps {
  images: SelectedImageType[];
  cartProduct: CartProductType;
  handleColorSelect: (value: SelectedImageType) => void;
}

export function SetColor({
  images,
  cartProduct,
  handleColorSelect,
}: SetColorProps) {
  return (
    <div className="flex gap-4 items-center ">
      <div>
        <span className="font-semibold">COLOR:</span>
        <div className="flex gap-1">
          {images.map((image) => {
            return (
              <div
                className={`h-7,w-7 rounded-full border-teal-300 flex items-center justify-center ${
                  cartProduct.selectedImage.color === image.color
                    ? "border-[1.5px]"
                    : "border-none"
                }`}
                key={image.color}
                onClick={() => handleColorSelect(image)}
              >
                <div
                  className="h-5 w-5 rounder-full border-[1.2px] border-slate-200 cursor-pointer"
                  style={{ background: image.colorCode }}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
