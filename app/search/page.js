"use client";
import React, { useEffect, useState } from "react";
import requestdata from "../functions/requestdata";
import BrowseCard from "../components/BrowseCard";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";

const page = () => {
  const [categoriesdata, setcategoriesdata] = useState(null);

  const colors = [
    "bg-red-500",
    "bg-red-700",
    "bg-green-500",
    "bg-green-700",
    "bg-blue-500",
    "bg-blue-700",
    "bg-yellow-500",
    "bg-yellow-700",
    "bg-purple-500",
    "bg-purple-700",
    "bg-pink-500",
    "bg-pink-700",
    "bg-indigo-500",
    "bg-indigo-700",
    "bg-orange-500",
    "bg-orange-700",
    "bg-teal-500",
    "bg-teal-700",
    "bg-gray-500",
    "bg-gray-700",
  ];

  const data = async () => {
    const categorydata = await requestdata('https://api.spotify.com/v1/browse/categories');
    setcategoriesdata([categorydata]);
    // console.log(categorydata);
  };

  useEffect(() => {
    data();
  }, []);

  return (
    <div className="mx-2">
      <div className="w-full flex justify-center items-center gap-1 my-4">
        <input
          placeholder="Find music tracks"
          type="text"
          className="w-[90vw] py-3 px-6 outline-none bg-[#333333] hover:bg-[#4a4a4a] focus:border-2 focus:bg-[#333333] border-white transition-colors rounded-3xl"
        />
      </div>
      <div className="flex flex-wrap justify-center gap-4 mb-20">
        {categoriesdata == null
          ? ""
          : categoriesdata[0].categories.items.map((item, i) => {
              return (
                <BrowseCard
                  altdesc={item.name}
                  imgsrc={item.icons[0].url}
                  color={colors[i]}
                  title={item.name}
                  apilink={item.href}
                  id={item.id}
                />
              ); //<p key={item.id}>{item.name}</p>
            })}
      </div>
    </div>
  );
};

export default page;
