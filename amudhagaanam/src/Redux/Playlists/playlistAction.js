import axios from "axios";
import {
  FETCH_PLAYLIST_FAILURE,
  FETCH_PLAYLIST_SUCCESS,
  FETCH_PLAYLIST_REQUEST,
  CREATE_PLAYLIST,
  ADD_SONG_TO_PLAYLIST,
  REMOVE_SONG_FROM_PLAYLIST,
} from "../actionTypes";

const requestSuccess = (data) => {
  return {
    type: FETCH_PLAYLIST_SUCCESS,
    payload: data,
  };
};

const requestFailure = (error) => {
  return {
    type: FETCH_PLAYLIST_FAILURE,
    payload: error,
  };
};

const playlist_request = () => {
  return {
    type: FETCH_PLAYLIST_REQUEST,
  };
};

export const createPlaylist = (playlist) => (dispatch) => {
  dispatch({
    type: CREATE_PLAYLIST,
    payload: playlist,
  });
};
