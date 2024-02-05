import React from "react";

import Link from "next/link";
import {Redressed} from 'next/font/google';
import { Container } from "../container";

const redressed = Redressed({subsets:['latin'],weight:['400'] })

export function NavBar() {
  return (
    <div
      className="
    sticky
    top-0
    z-30
    w-full
    shadow-sm
    bg-slate-200
    "
    >
    <div className="
    py-4
    border-b-[1px]
    ">
      <Container>
        <div className="
        flex
        item-center
        justify-between
        gap-3
        md:gap-0
        ">
          <Link href='/' className={`${redressed.className} font-bold text-2xl `} > Partum Tech</Link>
          <div>search</div>
          <div className="flex items-center gap-8 md:gap-12">
            <div>CartCount</div>
            <div>UserMenu</div>
          </div>
        </div>
      </Container>

    </div>
    </div>
  );
}
