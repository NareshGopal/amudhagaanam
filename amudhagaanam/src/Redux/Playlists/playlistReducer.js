import {
  CREATE_PLAYLIST,
  FETCH_PLAYLIST_REQUEST,
  FETCH_PLAYLIST_SUCCESS,
  FETCH_PLAYLIST_FAILURE,
} from "../actionTypes";

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
      return [payload, ...state];

    default:
      return state;
  }
}
