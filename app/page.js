'use client'

import ImageBanner from "@/components/ImageBanner";
//import Image from "next/image" ;
import Products from "@/components/Products"

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans dark:bg-black">
      <ImageBanner />
      <section>
        <Products />
      </section>
    </div>
  );
}
