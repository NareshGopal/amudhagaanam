import React from "react";
import { Link } from "react-router-dom";

function Playlist(props) {
  return (
    <div
      className="card"
      style={{ width: "12rem", height: "23rem", margin: "10px" }}
    >
      <img
        src="https://i.pinimg.com/originals/65/77/b7/6577b70fbefcc699bb1dd11ba170ba4e.jpg"
        // src="../../public/playmusicicon.jpg"
        className="card-img-top"
        alt="Happy Listening"
      />
      <div className="card-body">
        <h5 className="card-title">{props.playlistInfo.name}</h5>
        <p className="card-text"></p>
        <Link
          onClick={() => props.songsViewHandler(props.playlistInfo.id)}
          href=""
          className="btn btn-primary"
        >
          View Songs
        </Link>
      </div>
    </div>
  );
}

export default Playlist;
