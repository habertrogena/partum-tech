"use client";
import { Rating } from "@mui/material";
import React, { useCallback, useState } from "react";
import { Button, ProductImage, SetColor, SetQuantity } from "../components";

interface ProductDetailsProp {
  product: any;
}

export type CartProductType = {
  id: string;
  quantity: 1;
  name: string;
  description: string;
  brand: string;
  selectedImage: SelectedImageType;
  price: number;
};

export type SelectedImageType = {
  color: string;
  colorCode: string;
  image: string;
};

const Horizontal = () => {
  return <hr className="w-[30%] my-2" />;
};

export function ProductDetails({ product }: ProductDetailsProp) {
  const [cartProduct, setCartProduct] = useState<CartProductType>({
    id: product.id,
    quantity: 1,
    name: product.name,
    description: product.description,
    brand: product.brand,
    selectedImage: { ...product.images[0] },
    price: product.price,
  });

  const productRating =
    product.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    product.reviews.length;

  const handleColorSelect = useCallback(
    (value: SelectedImageType) => {
      setCartProduct((prev) => ({ ...prev, selectedImage: value }));
    },
    [cartProduct.selectedImage]
  );

  const handleQtyIncrease = useCallback(() => {
    setCartProduct((prev) => {
      return { ...prev, quantity: ++prev.quantity };
    });
  }, [cartProduct]);

  const handleQtyDecrease = useCallback(() => {
    if (cartProduct.quantity === 1) return;
    setCartProduct((prev) => {
      return { ...prev, quantity: --prev.quantity };
    });
  }, [cartProduct]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <ProductImage cartProduct={cartProduct} product={product} handleColorSelect={handleColorSelect}/>

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
        <SetColor
          handleColorSelect={handleColorSelect}
          images={product.images}
          cartProduct={cartProduct}
        />
        <Horizontal />
        <SetQuantity
          cartProduct={cartProduct}
          handleQtyDecrease={handleQtyDecrease}
          handleQtyIncrease={handleQtyIncrease}
        />
        <Horizontal />
        <div className="max-w-[300px]"><Button label="Add to Cart" onClick={()=>{}}
        /></div>
      </div>
    </div>
  );
}
