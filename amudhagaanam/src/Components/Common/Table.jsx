import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import ListGroup from "../ListGroup";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addSongToPlaylist } from "../../Redux/Playlists/playlistAction";
import { showHidePopover } from "../../Redux/Popover/popoverAction";

function Table(props) {
  const playlists = useSelector((state) => state.playlists);

  const { style, visibility, data: songId } = useSelector(
    (state) => state.popover
  );
  const dispatch = useDispatch();

  const insertSongToPlaylist = (playlistId) => {
    const payload = { songId, playlistId };
    dispatch(showHidePopover(false));
    dispatch(addSongToPlaylist(payload));

    toast.success("Song has been added to the playlist");
  };

  return (
    <>
      <table className="table table-striped">
        <TableHeader removeSongFlag={props.removeSongFlag} />
        <TableBody data={props.data} removeSongFlag={props.removeSongFlag} />
      </table>
      {visibility ? (
        <ListGroup
          itemsList={playlists.data}
          style={style}
          clickHandler={insertSongToPlaylist}
        />
      ) : null}
    </>
  );
}

export default Table;
