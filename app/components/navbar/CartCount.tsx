"use client";
import { UseCart } from "@/app/hooks";
import { useRouter } from "next/navigation";
import React from "react";
import { CiShoppingCart } from "react-icons/ci";

export function CartCount() {
  const router = useRouter();
  const { cartTotalQty } = UseCart();
  return (
    <div
      onClick={() => router.push("/cart")}
      className="relative cursor-pointer"
    >
      <div className="3xl">
        <CiShoppingCart />
        <span className="absolute top-[-20px]right-[-10px] bg-slate-700 text-white h-5 w-6 rounded-full flex items-center justify-center text-sm">
          {cartTotalQty}
        </span>
      </div>
    </div>
  );
}
