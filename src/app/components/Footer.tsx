import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className=" bg-primary">
        <div className=" container mx-auto px-2 py-10 flex flex-col md:flex-row justify-center gap-[20px] md:gap-[50px] lg:gap-[100px]">
          <div className=" flex flex-col justify-center items-center gap-[12px]">
            {/* <img
              src="/src/assets/img/mtl_logo.png"
              className=" w-[75px] h-[75px] md:w-[100px] md:h-[100px]"
            /> */}
            <p className=" text-[16px] md:text-[20px] text-white font-semibold">
              Minthila Express
            </p>
          </div>
          <div className=" flex flex-col items-start gap-[10px] text-white">
            <h3 className=" font-bold text-[20px] mb-4">Explore More</h3>
            <Link href={"/"}>Contact Us</Link>
            <Link href={"/"}>About Us</Link>
            <Link href={"/"}>Terms & Conditions</Link>
          </div>

          <div className=" flex flex-col items-start gap-[10px] text-white">
            <h3 className=" font-bold text-[20px] mb-4">Contact Us </h3>
            <p className=" flex flex-row gap-3">
              <span>
                <a href="tel:09404477118">09404477118</a>
              </span>{" "}
              |{" "}
              <span>
                <a href="tel:09250024653">09250024653</a>
              </span>
            </p>
            <p>
              No.72,Upper Pazondaung,Mingalar Taung Nyunt <br /> Yangon,
              Myanmar, 11221
            </p>
            <p>
              <a href="mailto:support@mtlexpressmm.com">
                support@mtlexpressmm.com
              </a>
            </p>
          </div>

          <div className=" flex flex-col gap-[50px]">
            <div className=" flex flex-col items-start gap-[10px] text-white">
              <h3 className=" font-bold text-[20px] mb-4">Connect With Us </h3>
            </div>

            <div className=" flex flex-col items-start gap-[10px] text-white">
              <h3 className=" font-bold text-[20px] mb-4">Download App</h3>
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </>
  );
};

export default Footer;
