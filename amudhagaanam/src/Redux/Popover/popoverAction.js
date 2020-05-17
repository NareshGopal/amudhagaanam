import { SHOW_HIDE_POPOVER, CHANGE_STYLE } from "../actionTypes";

export const showHidePopover = (bool) => (dispatch) => {
  dispatch({
    type: SHOW_HIDE_POPOVER,
    payload: bool,
  });
};

export const changeStyle = (style) => (dispatch) => {
  dispatch({
    type: CHANGE_STYLE,
    payload: style,
  });
};
