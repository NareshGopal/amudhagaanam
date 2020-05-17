import { combineReducers } from "redux";
import playlists from "./Playlists/playlistReducer";
import songs from "./Songs/songsReducer";
import popover from "./Popover/popoverReducer";

export default combineReducers({
  songs,
  playlists,
  popover,
});
