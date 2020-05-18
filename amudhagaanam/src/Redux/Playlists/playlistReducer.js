import {
  CREATE_PLAYLIST,
  DELETE_PLAYLIST,
  FETCH_PLAYLIST_REQUEST,
  FETCH_PLAYLIST_SUCCESS,
  FETCH_PLAYLIST_FAILURE,
  ADD_SONG_TO_PLAYLIST,
  REMOVE_SONG_FROM_PLAYLIST,
} from "../actionTypes";
import store from "../store";

const initialState = {
  isLoading: false,
  data: [],
  error: "",
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_PLAYLIST_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_PLAYLIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: payload,
      };
    case FETCH_PLAYLIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case CREATE_PLAYLIST:
      const stateData = state.data;
      return {
        ...state,
        data: [...stateData, payload],
      };

    case DELETE_PLAYLIST:
      const revisedData = state.data.filter((pl) => pl.id != payload);
      return {
        ...state,
        data: [...revisedData],
      };
    case ADD_SONG_TO_PLAYLIST:
      const { songId, playlistId } = payload;

      const newStateData = state.data.map((pl) => {
        if (pl.id == playlistId) {
          pl.songs.push(songId);
        }
        return pl;
      });
      return {
        ...state,
        data: [...newStateData],
      };

    case REMOVE_SONG_FROM_PLAYLIST:
      const { rsongId, rplaylistId } = payload;

      const newStateDataR = state.data.map((pl) => {
        if (pl.id == rplaylistId) {
          let spliceIndex = pl.songs.indexOf(rsongId);
          pl.songs.splice(spliceIndex, 1);
        }
        return pl;
      });
      return {
        ...state,
        data: [...newStateDataR],
      };

    default:
      return state;
  }
}
