import React, { useState, useEffect } from "react";
import Playlist from "./Playlist";
import { getLibrary } from "../Services/libraryService";
import { getPlaylists } from "../Services/playlistService";

function Playlists(props) {
  const [songs, setSongs] = useState(getLibrary());
  const [playlists, setplaylists] = useState(getPlaylists());
  const [inputPlaylist, setInputPlaylist] = useState("");

  const handlePlaylistAddition = () => {
    const result = [
      ...playlists,
      { id: playlists.length, name: inputPlaylist, songs: [] },
    ];
    setplaylists(result);
    setInputPlaylist("");
  };

  // const songsViewHandler = (id) => {
  //   const songIds = playlists.filter((playlist) => playlist.id === id)[0].songs;
  //   const filteredSongs = songs.filter((song) => {
  //     const idPresence = songIds.indexOf(song.id);
  //     return idPresence === -1 ? false : true;
  //   });
  // };

  return (
    <div
      className="playlists-container"
      style={{ width: "850px", height: "auto" }}
    >
      <div className="create-playlist-container">
        <button
          onClick={handlePlaylistAddition}
          type="button"
          className="btn btn-secondary"
        >
          Create Playlist
        </button>
        <input
          onChange={(e) => setInputPlaylist(e.target.value)}
          value={inputPlaylist}
          className="add-playlist-input"
          type="text"
        />
      </div>
      {playlists.map((playlist) => (
        <Playlist playlistInfo={playlist} />
      ))}
    </div>
  );
}

export default Playlists;
