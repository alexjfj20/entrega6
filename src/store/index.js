import { configureStore } from "@reduxjs/toolkit";
import credentials from "./slices/creadentials.slice";
import tracks from './slices/track.slic'

export default configureStore({
  reducer: {
    credentials,
    tracks
  },
});
