import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import {
  showHidePopover,
  changeStyle,
} from "../../Redux/Popover/popoverAction";
import { removeSongFromPlaylist } from "../../Redux/Playlists/playlistAction";

function TableBody(props) {
  const params = useParams();

  const { data: songs } = props;

  const dispatch = useDispatch();

  const clickHandler = (e, data) => {
    let style = {
      height: "273px",
      width: "200px",
      left: e.clientX - 225,
      top: e.clientY,
      position: "fixed",
      overflow: "auto",
    };

    dispatch(changeStyle({ style, data }));
    dispatch(showHidePopover(true));
  };

  const removeHandler = (data) => {
    const payload = { rsongId: data, rplaylistId: params.id };
    dispatch(removeSongFromPlaylist(payload));
    toast.success("Songs has been remove from the playlist");
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
                onClick={(e) => {
                  props.removeSongFlag
                    ? removeHandler(song.id)
                    : clickHandler(e, song.id);
                }}
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
