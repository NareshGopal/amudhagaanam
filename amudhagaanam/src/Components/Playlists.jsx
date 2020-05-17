import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  createPlaylist,
  fetchPlaylist,
} from "../Redux/Playlists/playlistAction";
import Playlist from "./Playlist";
import { toast } from "react-toastify";

function Playlists({ playlists, createPlaylist, fetchPlaylist }) {
  useEffect(() => {
    fetchPlaylist();
  }, []);

  const [inputPlaylist, setInputPlaylist] = useState("");

  const handlePlaylistAddition = () => {
    if (!inputPlaylist) {
      toast.error("Enter a name for the playlist");
      return;
    }

    const result = { id: playlists.length, name: inputPlaylist, songs: [] };
    createPlaylist(result);

    setInputPlaylist("");
    toast.success("New playlist has been created");
  };

  return (
    <div
      className="playlists-container"
      style={{ width: "850px", height: "auto" }}
    >
      <div className="create-playlist-container">
        <input
          onChange={(e) => setInputPlaylist(e.target.value)}
          value={inputPlaylist}
          className="add-playlist-input"
          type="text"
          placeholder="Give a name for your new playlist"
        />
        <button
          onClick={handlePlaylistAddition}
          type="button"
          className="btn btn-secondary"
        >
          Create Playlist
        </button>
      </div>
      {playlists.map((playlist) => (
        <Playlist playlistInfo={playlist} key={playlist.id} />
      ))}
    </div>
  );
}

const mapStateToProps = ({ playlists }) => {
  return {
    playlists: playlists.data,
  };
};

export default connect(mapStateToProps, { createPlaylist, fetchPlaylist })(
  Playlists
);
