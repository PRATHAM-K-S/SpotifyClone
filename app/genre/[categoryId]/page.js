"use client";
import requestdata from "@/app/functions/requestdata";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const page = () => {
  const playlistLink = useSelector((state) => state.categoryLink.value);
  const data = async () => {
    const playlistdata = await requestdata(`${playlistLink}/playlists`);
    console.log(playlistdata);
  };

  useEffect(() => {
    data();
  }, []);

  return (
    <div>
      <p>{playlistLink}</p>
    </div>
  );
};

export default page;
