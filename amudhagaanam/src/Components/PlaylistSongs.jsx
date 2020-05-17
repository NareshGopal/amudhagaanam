import React, { useState } from "react";
import { connect } from "react-redux";
import { createPlaylist } from "../Redux/Playlists/playlistAction";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import Table from "./Common/Table";
import { getLibrary } from "../Services/libraryService";
import { getPlaylists } from "../Services/playlistService";

function PlaylistSongs(props) {
  const [songs, setSongs] = useState(getLibrary());

  const { playlists } = props;
  const history = useHistory();

  let filteredSongs = [];

  const getSongsFromPlaylist = (id) => {
    debugger;
    let songIds = playlists.filter((playlist) => playlist.id === +id)[0].songs;

    if (songIds.length == 0) {
      history.push("/library");
      toast.info("Click + to add songs to your playlist");
      return;
    }

    filteredSongs = songs.filter((song) => {
      const idPresence = songIds.indexOf(song.id);
      return idPresence === -1 ? false : true;
    });
  };

  getSongsFromPlaylist(props.match.params.id);

  return (
    <div className="songs-table-container">
      <Table data={filteredSongs} removeSongFlag="true" />
    </div>
  );
}

const mapStateToProps = ({ playlists }) => {
  return {
    playlists,
  };
};

export default connect(mapStateToProps)(PlaylistSongs);
