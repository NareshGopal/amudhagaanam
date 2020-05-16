import React, { useState, useEffect } from "react";
import Playlist from "./Playlist";
import { getPlaylists } from "../Services/playlistService";

function Playlists() {
  const [playlists, setplaylists] = useState([]);

  useEffect(() => {
    const result = getPlaylists();
    setplaylists(result);
  }, []);

  return (
    <div
      className="playlists-container"
      style={{ width: "850px", height: "auto" }}
    >
      {playlists.map((playlist) => (
        <Playlist playlistInfo={playlist} />
      ))}
    </div>
  );
}

export default Playlists;
