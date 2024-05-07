import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const playlistLinkSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setPlaylistLink: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPlaylistLink } = playlistLinkSlice.actions;

export default playlistLinkSlice.reducer;
