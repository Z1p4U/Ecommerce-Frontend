"use client";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
} from "./components/ui/Carousel";
import CategoryMenu from "./components/ui/CategoryMenu";

export default function Home() {
  return (
    <>
      <div className=" my-10 container mx-auto px-2">
        <div className=" grid grid-cols-12 gap-10">
          <div className=" col-span-3 h-fit">
            <div className=" border border-[#0000001A] rounded-xl py-2 aaa">
              <CategoryMenu />
            </div>
          </div>
          <div className=" col-span-9 rounded-xl z-0">
            <Carousel className=" z-0 h-full">
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index: any) => (
                  <CarouselItem key={index}>
                    <div className="">
                      <div className="flex items-center bg-black z-0 text-white justify-center p-6">
                        <span className="text-4xl font-semibold">
                          {index + 1}
                        </span>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {/* <CarouselPrevious /> */}
              {/* <CarouselNext /> */}
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}
