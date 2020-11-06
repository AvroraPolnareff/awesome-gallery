import { Album, getAlbums } from "../api/jsonPlaceholder";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../app/store";

interface AlbumsState {
  albums: Album[];
  loading: boolean;
  error: string | null;
}

const initialState: AlbumsState = {
  albums: [],
  loading: false,
  error: null,
};

const albums = createSlice({
  name: "albums",
  initialState,
  reducers: {
    getAlbumsStart(state) {
      state.loading = true;
      state.error = null;
    },
    getAlbumsSuccess(state, action: PayloadAction<Album[]>) {
      state.albums = action.payload;
      state.loading = false;
      state.error = null;
    },
    getAlbumsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getAlbumsStart,
  getAlbumsSuccess,
  getAlbumsFailure,
} = albums.actions;
export default albums.reducer;

export const fetchAlbums = (): AppThunk => async (dispatch) => {
  try {
    dispatch(getAlbumsStart());
    const albums = await getAlbums();
    dispatch(getAlbumsSuccess(albums));
  } catch (err) {
    dispatch(getAlbumsFailure(err));
  }
};
