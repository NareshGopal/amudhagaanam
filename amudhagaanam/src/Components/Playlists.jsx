import React, { useState } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import {
  createPlaylist,
  fetchPlaylist,
  deletePlaylist,
} from "../Redux/Playlists/playlistAction";
import Playlist from "./Playlist";

function Playlists({
  playlists,
  createPlaylist,
  fetchPlaylist,
  deletePlaylist,
}) {
  const [inputPlaylist, setInputPlaylist] = useState("");
  const playLists = playlists.data;

  const handlePlaylistAddition = () => {
    if (!inputPlaylist) {
      toast.error("Enter a name for the playlist");
      return;
    }

    const result = { id: null, name: inputPlaylist, songs: [] };

    createPlaylist(result);

    setInputPlaylist("");
  };

  const deletePlaylistHandler = (playlistId) => {
    deletePlaylist(playlistId);
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
      {playlists.isLoading ? (
        <h3 className="loading-display-playlists">Loading...</h3>
      ) : (
        playLists
          .sort((a, b) => b.id - a.id)
          .map((playlist) => (
            <Playlist
              key={playlist.id}
              playlistInfo={playlist}
              deletePlaylistHandler={deletePlaylistHandler}
            />
          ))
      )}
    </div>
  );
}

const mapStateToProps = ({ playlists }) => {
  return {
    playlists,
  };
};

export default connect(mapStateToProps, {
  createPlaylist,
  fetchPlaylist,
  deletePlaylist,
})(Playlists);
