"use client";
import Image from "next/image";
import CategoryMenu from "./components/CategoryMenu";

export default function Home() {
  return (
    <>
      <div className=" my-10 container mx-auto px-2">
        <div className=" grid grid-cols-12 gap-10">
          <div className=" col-span-3">
            <div className=" border border-[#0000001A] rounded-xl py-2 aaa">
              <CategoryMenu />
            </div>
          </div>
          <div className=" col-span-9 w-full h-full bg-red-700 rounded-xl"></div>
        </div>
      </div>
    </>
  );
}
