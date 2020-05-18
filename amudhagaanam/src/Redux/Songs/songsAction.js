import axios from "axios";
import {
  FETCH_SONGS_FAILURE,
  FETCH_SONGS_REQUEST,
  FETCH_SONGS_SUCCESS,
} from "../actionTypes";
import trie from "../../Autocomplete/Trie";

import { getLibrary } from "../../Services/libraryService";

const fetchSongSuccess = (data) => {
  return {
    type: FETCH_SONGS_SUCCESS,
    payload: data,
  };
};

const fetchSongFailure = (error) => {
  return {
    type: FETCH_SONGS_FAILURE,
    payload: error,
  };
};

const fetchSongRequest = () => {
  return {
    type: FETCH_SONGS_REQUEST,
  };
};

export const fetchSongs = () => {
  return (dispatch) => {
    dispatch(fetchSongRequest());
    // const songs = getLibrary();
    axios
      .get("https://mpplaylistbackend.herokuapp.com/library")
      .then((res) => {
        const songs = res.data;
        songs.map((song) => {
          trie.insert(song.title.toLocaleLowerCase(), "song");
          trie.insert(song.album.toLocaleLowerCase(), "album");
          trie.insert(song.artist.toLocaleLowerCase(), "artist");
        });
        dispatch(fetchSongSuccess(songs));
      })
      .catch((err) => {
        const errorMsg = err.message;
        dispatch(fetchSongFailure(errorMsg));
      });
  };
};
