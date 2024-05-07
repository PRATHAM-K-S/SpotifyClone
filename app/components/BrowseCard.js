import Image from "next/image";
import Link from "next/link";
import React from "react";

const BrowseCard = (props) => {
  return (
    <Link
      href={"/search"}
      className={`relative overflow-hidden ${props.color} h-24 w-44 rounded-md p-2 hover:contrast-150 transition-all`}
      onClick={(e)=>console.log(e.target.id)}
      id={props.apilink}
    >
      <p className="text-sm font-semibold">{props.title}</p>
      <Image
        className="absolute -rotate-45 -right-4 rounded-md filter"
        src={props.imgsrc}
        width={70}
        height={70}
        alt={`representing the category ${props.altdesc}`}
        priority={true}
      />
    </Link>
  );
};

export default BrowseCard;
