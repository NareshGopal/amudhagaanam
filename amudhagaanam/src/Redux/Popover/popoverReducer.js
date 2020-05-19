import { SHOW_HIDE_POPOVER, CHANGE_STYLE } from "../actionTypes";

const initialState = {
  data: "",
  visibility: { isSearch: false, isPlaylist: false },
  style: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SHOW_HIDE_POPOVER:
      return {
        ...state,
        visibility: { ...state.visibility, ...payload },
      };
    case CHANGE_STYLE:
      return {
        ...state,
        style: payload.style,
        data: payload.data,
      };

    default:
      return state;
  }
}
