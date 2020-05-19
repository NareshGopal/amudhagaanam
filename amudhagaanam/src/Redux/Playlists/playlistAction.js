import { toast } from "react-toastify";
import {
  FETCH_PLAYLIST_FAILURE,
  FETCH_PLAYLIST_SUCCESS,
  FETCH_PLAYLIST_REQUEST,
  CREATE_PLAYLIST,
  DELETE_PLAYLIST,
  ADD_SONG_TO_PLAYLIST,
  REMOVE_SONG_FROM_PLAYLIST,
} from "../actionTypes";

import http from "../../Services/httpService";

const endpointURL = http.endpointURL;

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

export const fetchPlaylist = () => {
  return (dispatch) => {
    dispatch(fetchPlaylistRequest());

    http
      .get(`${endpointURL}/playlist`)
      .then((res) => {
        const playlists = res.data;
        dispatch(fetchPlaylistSuccess(playlists));
      })
      .catch((err) => {
        const errorMsg = err.message;
        dispatch(fetchPlaylistFailure(errorMsg));
      });
  };
};

export const createPlaylist = (playlist) => {
  return (dispatch) => {
    http
      .post(`${endpointURL}/playlist`, playlist)
      .then((res) => {
        playlist = { ...playlist, id: res.data.id };
        dispatch({
          type: CREATE_PLAYLIST,
          payload: playlist,
        });
        toast.success("New playlist has been created");
      })
      .catch(() => {
        toast.error("Error in creating playlist");
      });
  };
};

export const deletePlaylist = (playlistId) => {
  return (dispatch) => {
    http
      .delete(`${endpointURL}/playlist/${playlistId}`)
      .then(() => {
        dispatch({
          type: DELETE_PLAYLIST,
          payload: playlistId,
        });
        toast.success("Playlist has been removed");
      })
      .catch(() => {
        toast.error("Error in deleting playlist");
      });
  };
};

export const addSongToPlaylist = (data) => {
  return (dispatch) => {
    debugger;
    const { songId, playlistId } = data;
    if (typeof songId == "number" && typeof playlistId == "number") {
      http
        .post(`${endpointURL}/playlist/${playlistId}/${songId}`)
        .then(() => {
          dispatch({
            type: ADD_SONG_TO_PLAYLIST,
            payload: data,
          });
          toast.success("Song has been added to the playlist");
        })
        .catch(() => {
          toast.error("Error in adding song to playlist");
        });
    } else {
      toast.error("Something went wrong");
    }
  };
};

export const removeSongFromPlaylist = (data) => {
  return (dispatch) => {
    const { rsongId, rplaylistId } = data;
    http
      .delete(`${endpointURL}/playlist/${rplaylistId}/${rsongId}`)
      .then(() => {
        dispatch({
          type: REMOVE_SONG_FROM_PLAYLIST,
          payload: data,
        });
        toast.success("Song has been removed from the playlist");
      })
      .catch(() => {
        toast.error("Error in deleting song from playlist");
      });
  };
};
