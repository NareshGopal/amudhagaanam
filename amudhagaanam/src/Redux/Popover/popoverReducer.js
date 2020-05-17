import { SHOW_HIDE_POPOVER, CHANGE_STYLE } from "../actionTypes";

const initialState = {
  data: "",
  visibility: false,
  style: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SHOW_HIDE_POPOVER:
      return {
        ...state,
        visibility: payload,
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
