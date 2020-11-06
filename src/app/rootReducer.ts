import { combineReducers } from "@reduxjs/toolkit";
import albumsReducer from "../store/albumsSlice";
import viewerReducer from "../store/viewerSlice";

const rootReducer = combineReducers({
  albums: albumsReducer,
  viewer: viewerReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
