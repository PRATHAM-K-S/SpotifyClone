import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import { setPlaylistLink } from "../redux/categoryplaylist/playlistLinkSlice";

const BrowseCard = (props) => {
  const dispatch = useDispatch();
  return (
    <Link
      href={`/genre/${props.id}`}
      className={`relative overflow-hidden ${props.color} h-24 w-44 rounded-md p-2 hover:contrast-150 transition-all`}
      id={props.apilink}
      onClick={(e) => dispatch(setPlaylistLink(e.target.id))}
    >
      <p className="text-sm font-semibold">{props.title}</p>
      <Image
        className="absolute -rotate-45 -right-4 rounded-md"
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
