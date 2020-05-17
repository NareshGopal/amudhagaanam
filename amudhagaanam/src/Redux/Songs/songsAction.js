import axios from "axios";
import {
  FETCH_SONGS_FAILURE,
  FETCH_SONGS_REQUEST,
  FETCH_SONGS_SUCCESS,
} from "../actionTypes";

const requestSuccess = (data) => {
  return {
    type: FETCH_SONG_SUCCESS,
    payload: data,
  };
};

const requestFailure = (error) => {
  return {
    type: FETCH_SONG_FAILURE,
    payload: error,
  };
};

const songRequest = () => {
  return {
    type: FETCH_SONG_REQUEST,
  };
};
