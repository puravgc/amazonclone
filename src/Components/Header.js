"use client"
import Image from "next/image";
import React from "react";
import { MenuIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline';
const Header = () => {
  return (
    <header>
      <div className="flex items-center bg-default p-1 flex-grow py-2 pl-5">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            width={120}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        <div className="hidden sm:flex bg-yellow-400 hover:bg-yellow-500 items-center h-10 ml-5 rounded-md flex-grow">
          <input type="text" className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"/>
          <SearchIcon className="h-12 p-3 cursor-pointer"/>
        </div>
        <div className="text-white flex items-center text-xs space-x-6 mx-10 whitespace-nowrap">
        <div className="link">
          <p>Hello Purav GC</p>
          <p className="font-extrabold md:text-sm">Account & Lists</p>
          <h5></h5>
        </div>
        <div className="link">
          <p>Returns</p>
          <p className="font-extrabold md:text-sm">& Orders</p>
        </div>
        <div className="relative link flex items-center">
          <span className="absolute top-0 right-0 md:right-10 bg-yellow-400 h-4 w-4 font-bold rounded-full text-black text-center">0</span>
            <ShoppingCartIcon className="h-10"/>
            <p className="hidden sm:inline-block font-extrabold md:text-sm mt-2">Basket</p>
        </div>
        </div>
      </div>
      <div className="flex bg-light text-white text-sm items-center space-x-3 p-2 pl-6">
          <p className="flex items-center link">
            <MenuIcon className="h-6"/>
            All
          </p>
          <p className="link">
            Prime Video
          </p>
          <p className="link">
            Amazon Business
          </p>
          <p className="link">
            Today's Deals
          </p>
          <p className="link hidden lg:inline-flex">
            Electronics
          </p>
          <p className="link hidden lg:inline-flex">
            Food & Grocery
          </p>
          <p className="link hidden lg:inline-flex">
            Prime
          </p>
          <p className="link hidden lg:inline-flex">
            Buy Again
          </p>
          <p className="link hidden lg:inline-flex">
            Shopper Toolkit
          </p>
          <p className="link hidden lg:inline-flex">
            Health & Personal Care
          </p>
      </div>
    </header>
  );
};

export default Header;
