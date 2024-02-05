"use client";
import { Rating } from "@mui/material";
import React, { useState } from "react";

interface ProductDetailsProp {
  product: any;
}

export type CartProductType ={
  id: string,
  quantity: 1,
  name: string,
  description: string,
  brand: string,
  selectedImage:SelectedImageType,
  price:number

}

export type SelectedImageType ={
  color: string,
  colorCode:string,
  image: string
}

const Horizontal = () => {
  return <hr className="w-[30%] my-2" />;
};

export function ProductDetails({ product }: ProductDetailsProp) {
  const [cartProduct,setCartProduct]= useState<CartProductType>({ id:product.id,
    quantity:1,
    name: product.name,
    description:product.description,
    brand: product.brand,
    selectedImage:{...product.images[0]},
    price:product.price});

  const productRating =
    product.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    product.reviews.length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>images</div>

      <div className="flex flex-col gap-1 text-slate-500 text-sm">
        <h2 className="text-3xl font-medium text-slate-700">{product.name}</h2>

        <div className="flex items-center gap-2">
          <Rating value={productRating} readOnly />
          <div>{product.reviews.length} reviews</div>
        </div>
        <Horizontal />
        <div className="text-justify">{product.description}</div>
        <Horizontal />
        <div>
          <span className="font-semibold">CATEGORY:</span>
          {product.category}
        </div>
        <div>
          <span className="font-semibold">BRAND:</span>
          {product.brand}
        </div>
        <div className={product.inStock ? "text-teal-400" : "text-rose-500"}>
          {product.inStock ? "in stock" : "out of stock"}
        </div>
        <Horizontal />
        <div> color</div>
        <Horizontal />
        <div>quality</div>
        <Horizontal />
        <div>add to cart</div>
      </div>
    </div>
  );
}
