import {
  FETCH_SONGS_SUCCESS,
  FETCH_SONGS_FAILURE,
  FETCH_SONGS_REQUEST,
} from "../actionTypes";

const initialState = {
  isLoading: false,
  data: [],
  error: "",
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_SONGS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_SONGS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: payload,
      };
    case FETCH_SONGS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

    default:
      return state;
  }
}
