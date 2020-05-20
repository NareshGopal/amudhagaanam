import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import ListGroup from "../ListGroup";
import { useSelector, useDispatch } from "react-redux";
import OutsideAlerter from "./OutsideAlerter";
import { addSongToPlaylist } from "../../Redux/Playlists/playlistAction";
import { showHidePopover } from "../../Redux/Popover/popoverAction";

function Table(props) {
  const playlists = useSelector((state) => state.playlists);

  const { style, visibility, data: songId } = useSelector(
    (state) => state.popover
  );
  const dispatch = useDispatch();

  const insertSongToPlaylist = (playlistId) => {
    const payload = { songId, playlistId: playlistId.id };
    dispatch(showHidePopover({ isPlaylist: false }));
    dispatch(addSongToPlaylist(payload));
  };

  return (
    <>
      <table className="table table-striped">
        <TableHeader removeSongFlag={props.removeSongFlag} />
        <TableBody data={props.data} removeSongFlag={props.removeSongFlag} />
      </table>
      {visibility.isPlaylist && playlists.data.length > 0 ? (
        <OutsideAlerter hideList={{ isPlaylist: false }}>
          <ListGroup
            itemsList={playlists.data}
            style={style}
            clickHandler={insertSongToPlaylist}
          />
        </OutsideAlerter>
      ) : null}
    </>
  );
}

export default Table;
