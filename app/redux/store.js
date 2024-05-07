import { configureStore } from "@reduxjs/toolkit";
import categoryPlaylistLink from "./categoryplaylist/playlistLinkSlice";

export const store = configureStore({
  reducer: {
    categoryLink: categoryPlaylistLink,
  },
});
