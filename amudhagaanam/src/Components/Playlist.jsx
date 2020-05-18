import React from "react";
import { Link } from "react-router-dom";

function Playlist({ playlistInfo, deletePlaylistHandler }) {
  const toLink = `/playlists/${playlistInfo.id}`;
  let playlistName = playlistInfo.name;

  let nameLength = playlistName.length;

  return (
    <div
      className="card"
      style={{ width: "12rem", height: "23rem", margin: "10px" }}
    >
      <img
        src="https://cdn1.iconfinder.com/data/icons/ios-11-glyphs/30/musical_notes-512.png"
        // src="../../public/playmusicicon.jpg"
        className="card-img-top playlist-image"
        alt="Happy Listening"
      />
      <div className="card-body">
        <h5 className="card-title" title={playlistName}>
          {nameLength > 10
            ? playlistName.substring(0, 10) + "..."
            : playlistName}
        </h5>
        <p className="card-text"></p>
        <Link to={toLink} className="btn btn-primary view-songs-btn">
          {playlistInfo.songs.length === 0 ? "Add Songs" : "View Songs"}
        </Link>
        <button
          onClick={() => deletePlaylistHandler(playlistInfo.id)}
          className="btn btn-primary delete-songs-btn"
        >
          Delete Playlist
        </button>
      </div>
    </div>
  );
}

export default Playlist;
