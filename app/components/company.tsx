import Image from "next/image";
import React from "react";

export default function Company() {
  return (
    <div className="flex flex-col gap-12 py-40">
      <div className="md:text-8xl text-4xl text-center">Our Company</div>
      <div className="flex justify-center md:flex-row flex-col items-center">
        <Image src={"/Logo1.png"} alt="" width={160} height={160}></Image>
        <Image src={"/Logo1.png"} alt="" width={160} height={160}></Image>
        <Image src={"/Logo1.png"} alt="" width={160} height={160}></Image>
        <Image src={"/Logo1.png"} alt="" width={160} height={160}></Image>
        <Image src={"/Logo1.png"} alt="" width={160} height={160}></Image>
        <Image src={"/Logo1.png"} alt="" width={160} height={160}></Image>
        <Image src={"/Logo1.png"} alt="" width={160} height={160}></Image>
      </div>
    </div>
  );
}
