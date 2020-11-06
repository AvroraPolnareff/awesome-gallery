import { Album, Photo } from "../api/jsonPlaceholder";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchAlbums } from "./albumsSlice";

interface ViewerState {
  show: boolean;
  currentPhoto?: Photo;
  currentAlbum?: Album;
}

const initialState: ViewerState = {
  show: false,
};

type showViewerPayload = { currentPhoto: Photo; currentAlbum: Album };

const viewer = createSlice({
  name: "viewer",
  initialState,
  reducers: {
    show: (state, action: PayloadAction<showViewerPayload>) => {
      state = { ...action.payload, show: true };
    },
    hide: (state) => {
      state = { show: false };
    },
    changeCurrentPhoto: (state, action: PayloadAction<number>) => {
      state.currentPhoto = state.currentAlbum?.photos.find(
        (photo) => photo.id === action.payload,
      );
    },
  },
});

export const { show, hide, changeCurrentPhoto } = viewer.actions;
export default viewer.reducer;
