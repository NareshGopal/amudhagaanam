import axios from "axios";
import {
  FETCH_PLAYLIST_FAILURE,
  FETCH_PLAYLIST_SUCCESS,
  FETCH_PLAYLIST_REQUEST,
  CREATE_PLAYLIST,
  ADD_SONG_TO_PLAYLIST,
  REMOVE_SONG_FROM_PLAYLIST,
} from "../actionTypes";

import { getPlaylists } from "../../Services/playlistService";
import { fetchSongs } from "../Songs/songsAction";
const fetchPlaylistSuccess = (data) => {
  return {
    type: FETCH_PLAYLIST_SUCCESS,
    payload: data,
  };
};

const fetchPlaylistFailure = (error) => {
  return {
    type: FETCH_PLAYLIST_FAILURE,
    payload: error,
  };
};

const fetchPlaylistRequest = () => {
  return {
    type: FETCH_PLAYLIST_REQUEST,
  };
};

let config = {
  headers: {
    "access-control-allow-origin": "*",
  },
};

export const fetchPlaylist = () => {
  return (dispatch) => {
    dispatch(fetchPlaylistRequest());
    const playlists = getPlaylists();

    // axios
    //   .get("http://localhost:5000/playlist/", config)
    //   .then((res) => {
    //     const playlists = res.data;
    dispatch(fetchPlaylistSuccess(playlists));
    //   })
    //   .catch((err) => {
    //     const errorMsg = err.message;
    //     dispatch(fetchPlaylistFailure(errorMsg));
    //   });
  };
};

export const createPlaylist = (playlist) => {
  return (dispatch) => {
    dispatch({
      type: CREATE_PLAYLIST,
      payload: playlist,
    });
  };
};

export const addSongToPlaylist = (data) => {
  return (dispatch) => {
    dispatch({
      type: ADD_SONG_TO_PLAYLIST,
      payload: data,
    });
  };
};

export const removeSongFromPlaylist = (data) => {
  return (dispatch) => {
    dispatch({
      type: REMOVE_SONG_FROM_PLAYLIST,
      payload: data,
    });
  };
};
