import { combineReducers } from "redux";
import playlists from "./Playlists/playlistReducer";
import songs from "./Songs/songsReducer";

export default combineReducers({
  songs,
  playlists,
});
