"use client";
import React, { useEffect, useState } from "react";
import browsecategories from "../functions/browsecategories";
import BrowseCard from "../components/BrowseCard";

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
    const categorydata = await browsecategories();
    setcategoriesdata([categorydata]);
    console.log(categorydata)
  };

  useEffect(() => {
    data();
  }, []);

  return (
    <div>
      search
      <div className="flex flex-wrap justify-center gap-4 mb-20">
        {categoriesdata == null
          ? ""
          : categoriesdata[0].categories.items.map((item, i) => {
              return <BrowseCard altdesc={item.name} imgsrc={item.icons[0].url} color={colors[i]} title={item.name} />; //<p key={item.id}>{item.name}</p>
            })}
      </div>
    </div>
  );
};

export default page;
