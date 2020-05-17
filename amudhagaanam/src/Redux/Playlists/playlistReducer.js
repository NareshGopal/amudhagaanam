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
        ...initialState,
        isLoading: true,
      };
    case FETCH_PLAYLIST_SUCCESS:
      return {
        ...initialState,
        isLoading: false,
        data: payload,
      };
    case FETCH_PLAYLIST_FAILURE:
      return {
        ...initialState,
        isLoading: false,
        error: payload,
      };
    case CREATE_PLAYLIST:
      return [payload, ...state];

    default:
      return initialState;
  }
}
