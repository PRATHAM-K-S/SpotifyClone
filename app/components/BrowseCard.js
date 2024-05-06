import Image from "next/image";
import Link from "next/link";
import React from "react";

const BrowseCard = (props) => {
  return (
    <Link
      href={"/"}
      className={`border relative overflow-hidden ${props.color} h-24 w-44 rounded-md p-2`}
    >
      <p className="text-sm font-semibold">{props.title}</p>
      <Image
        className="absolute -rotate-45 -right-3 rounded-md filter contrast-125"
        src={props.imgsrc}
        width={70}
        height={70}
        alt={`representing the category ${props.altdesc}`}
      />
    </Link>
  );
};

export default BrowseCard;
