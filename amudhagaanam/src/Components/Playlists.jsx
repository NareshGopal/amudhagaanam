import React, { useState, useEffect } from "react";
import Playlist from "./Playlist";
import { getPlaylists } from "../Services/playlistService";

function Playlists() {
  const [playlists, setplaylists] = useState(getPlaylists());
  const [inputPlaylist, setInputPlaylist] = useState("");

  const inputHandler = (e) => {
    setInputPlaylist(e.target.value);
  };

  const handlePlaylistAddition = () => {
    const result = [
      ...playlists,
      { id: playlists.length, name: inputPlaylist, songs: [] },
    ];
    setplaylists(result);
  };

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
          onChange={inputHandler}
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
