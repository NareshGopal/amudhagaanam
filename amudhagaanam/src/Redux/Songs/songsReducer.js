import { FETCH_SONGS_SUCCESS } from "../actionTypes";

const initialState = [];

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_SONGS_SUCCESS:
      return [payload, ...state];

    default:
      return state;
  }
}
