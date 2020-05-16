import React, { useState } from "react";
import Table from "./Common/Table";
import { getLibrary } from "../Services/libraryService";
import { getPlaylists } from "../Services/playlistService";

function PlaylistSongs(props) {
  const [songs, setSongs] = useState(getLibrary());
  const [playlists, setplaylists] = useState(getPlaylists());

  let filteredSongs = [];

  const getSongsFromPlaylist = (id) => {
    const songIds = playlists.filter((playlist) => playlist.id === +id)[0]
      .songs;

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

export default PlaylistSongs;
