import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import {
  showHidePopover,
  changeStyle,
} from "../../Redux/Popover/popoverAction";

function TableBody(props) {
  const { data: songs } = props;

  const dispatch = useDispatch();

  const clickHandler = (e, data) => {
    console.log("event object ", e);
    let style = {
      height: "250px",
      width: "200px",
      left: e.clientX - 225,
      top: e.clientY,
      position: "fixed",
    };

    dispatch(changeStyle({ style, data }));

    dispatch(showHidePopover(true));
  };

  return (
    <Fragment>
      <tbody>
        {songs.map((song) => (
          <tr className="song-record" key={song.id}>
            <td>{song.title}</td>
            <td>{song.duration}</td>
            <td>{song.album}</td>
            <td>{song.artist}</td>

            <td>
              <button
                onClick={(e) => clickHandler(e, song.id)}
                type="button"
                className="btn btn-dark clickable"
              >
                {props.removeSongFlag ? "-" : "+"}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </Fragment>
  );
}

export default TableBody;
