"use client";
import React, { useState } from "react";
import { RiCustomerServiceLine } from "react-icons/ri";
import { FaCaretDown, FaExchangeAlt, FaHeart } from "react-icons/fa";
import { IoMdCart, IoMdPerson } from "react-icons/io";
import Hamburger from "hamburger-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [compare, setCompare] = useState(0);
  const [cart, setCart] = useState(0);
  const [fav, setFav] = useState(0);
  const [loggedIn, setLoggedIn] = useState(false);
  const [burger, setBurger] = useState(false);

  let pathName = usePathname();
  // console.log(pathName);

  const languages = [
    {
      id: 1,
      img: "",
      name: "EN",
      value: "eng",
    },
    {
      id: 2,
      img: "",
      name: "MM",
      value: "mm",
    },
  ];

  const navLinks = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "Brands", url: "/brand" },
    { id: 3, name: "Restaurants", url: "/restaurant" },
    { id: 4, name: "Shops", url: "/shop" },
    { id: 5, name: "New Arrivals", url: "/new_arrival" },
    { id: 6, name: "Best Deals", url: "/best deal" },
  ];

  return (
    <>
      <div className=" bg-primary py-1">
        <div className=" container mx-auto px-2 flex justify-between items-center">
          <div className=" flex sm:flex-row items-center gap-[10px] text-white">
            <RiCustomerServiceLine className=" hidden sm:block" />
            <div className=" flex flex-col sm:flex-row sm:items-center gap-[5px] sm:gap-[10px] ">
              <a href="tel:09404477118" className=" text-[13px] md:text-[15px]">
                094044771118
              </a>
              <span className=" hidden sm:block"> | </span>
              <a href="tel:250024653" className=" text-[13px] md:text-[15px]">
                09250024653
              </a>
            </div>
          </div>

          <div>
            {languages?.map((lang) => {
              return (
                <div
                  key={lang?.id}
                  className=" text-white flex flex-row items-center gap-[5px]"
                >
                  {/* <Image src={lang?.img} className=" w-[35px]" alt="LangImg" /> */}
                  <p className=" uppercase text-[16px] md:text-[18px]">
                    {lang?.name}
                  </p>
                  <FaCaretDown />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className=" flex items-center justify-between container mx-auto px-2 py-2 md:py-5">
        {/* <img
          src="/src/assets/img/mtl_logo.png"
          className=" w-[55px] h-[55px] md:w-[70px] md:h-[70px]"
        /> */}
        <div className=" w-[55px] h-[55px] md:w-[70px] md:h-[70px] bg-black"></div>

        <div className="  lg:w-2/3 max-w-[520px] hidden lg:flex justify-center items-center flex-row">
          <input
            type="text"
            name="search"
            id="nav_search"
            placeholder="Type to search ... "
            className=" px-5 py-3 xl:py-4 xl:px-8 border rounded-s-xl border-[#0000004D] outline-none w-[75%]"
          />
          <button className=" border border-primary bg-transparent text-primary px-8 py-3 xl:px-10 xl:py-4 rounded-e-xl hover:bg-primary hover:text-white transition-colors duration-300">
            Search
          </button>
        </div>

        <div className=" flex items-center gap-0 sm:gap-[8px] md:gap-[15px] ">
          <Link href={"/"}>
            <div className=" relative w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] md:w-[50px] md:h-[50px] flex justify-center align-middle items-center ">
              <FaExchangeAlt className=" text-[20px] sm:text-[22px] md:text-[25px] text-[#808080]" />
              <span className=" text-white m-0 rounded-full bg-primary absolute top-0 right-0 text-[10px] md:text-sm w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 flex justify-center items-center">
                {compare}
              </span>
            </div>
          </Link>
          <Link href={"/"}>
            <div className=" relative w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] md:w-[50px] md:h-[50px] flex justify-center align-middle items-center">
              <IoMdCart className=" text-[20px] sm:text-[22px] md:text-[25px]  text-[#808080]" />
              <span className=" text-white m-0 rounded-full bg-primary absolute top-0 right-0 text-[10px] md:text-sm w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 flex justify-center items-center">
                {cart}
              </span>
            </div>
          </Link>

          <Link href={"/"}>
            <div className=" relative w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] md:w-[50px] md:h-[50px] flex justify-center align-middle items-center">
              <FaHeart className=" text-[20px] sm:text-[22px] md:text-[25px]  text-[#808080]" />
              <span className=" text-white m-0 rounded-full bg-primary absolute top-0 right-0 text-[10px] md:text-sm w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 flex justify-center items-center">
                {fav}
              </span>
            </div>
          </Link>

          <div className="hidden md:block">
            {loggedIn ? (
              <Link href={"/"}>
                <div className=" flex justify-center items-center flex-row ">
                  <IoMdPerson className=" text-[20px] md:text-[25px] text-red-500" />
                  <p className=" text-[18px] font-semibold text-[#000000B2] ">
                    User
                  </p>
                </div>
              </Link>
            ) : (
              <Link href={"/"}>
                <div className=" flex justify-center items-center flex-row ">
                  <IoMdPerson className=" text-[25px]  text-[#808080]" />
                  <p className=" text-[18px] font-semibold text-[#000000B2] ">
                    {" "}
                    Login / Register
                  </p>
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className=" border-[#00000033] border-y-2">
        <div className=" hidden md:flex justify-between items-center container mx-auto px-2">
          {navLinks?.map((navLink) => {
            return (
              <Link
                key={navLink?.id}
                href={navLink?.url}
                className={`navLink ${
                  pathName == navLink?.url ? " active" : " "
                } hover:no-underline font-semibold  px-2 py-4`}
              >
                {navLink?.name}
              </Link>
            );
          })}
          <Link
            href={"/"}
            className={` px-2 py-4 hover:no-underline font-semibold text-white bg-primary hover:bg-red-500 hover:text-white `}
          >
            Sell On Minthila Express
          </Link>
        </div>

        <div className=" md:hidden container mx-auto px-2 ">
          <div className="text-center">Menu</div>
        </div>
      </div>
    </>
  );
};

export default Header;
