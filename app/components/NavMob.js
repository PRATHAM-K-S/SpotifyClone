"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { GoHome } from "react-icons/go";
import { GoHomeFill } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import { IoLibraryOutline } from "react-icons/io5";
import { IoLibrary } from "react-icons/io5";

const NavMob = () => {
  const pathname = usePathname();
  return (
    <div className="fixed bottom-0 flex justify-evenly w-full py-3 bg-black/90  sm:hidden">
      <Link
        href={"/"}
        className={`flex flex-col items-center gap-1 ${
          pathname == "/" ? "text-[#3fff55]" : "text-gray-300"
        }`}
      >
        {pathname == "/" ? (
          <GoHomeFill size={"1.5em"} />
        ) : (
          <GoHome size={"1.5em"} />
        )}{" "}
        <span className="text-xs">Home</span>
      </Link>
      <Link
        href={"/search"}
        className={`flex flex-col items-center gap-1  ${
          pathname == "/search" ? "text-[#3fff55]" : "text-gray-300"
        }`}
      >
        {pathname == "/search" ? (
          <IoSearchSharp size={"1.5em"} />
        ) : (
          <IoSearchOutline size={"1.5em"} />
        )}{" "}
        <span className="text-xs">Search</span>
      </Link>
      <Link
        href={"/library"}
        className={`flex flex-col items-center gap-1 ${
          pathname == "/library" ? "text-[#3fff55]" : "text-gray-300"
        }`}
      >
        {pathname == "/library" ? (
          <IoLibrary size={"1.5em"} />
        ) : (
          <IoLibraryOutline size={"1.5em"} />
        )}{" "}
        <span className="text-xs">Library</span>
      </Link>
    </div>
  );
};

export default NavMob;
