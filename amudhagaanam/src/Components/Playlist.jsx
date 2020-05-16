import React from "react";

function Playlist(props) {
  return (
    <div
      className="card"
      style={{ width: "12rem", height: "23rem", margin: "10px" }}
    >
      <img
        src="https://i.pinimg.com/originals/65/77/b7/6577b70fbefcc699bb1dd11ba170ba4e.jpg"
        className="card-img-top"
        alt="Happy Listening"
      />
      <div className="card-body">
        <h5 className="card-title">{props.playlistInfo.name}</h5>
        <p className="card-text"></p>
        <a href="" className="btn btn-primary">
          View Songs
        </a>
      </div>
    </div>
  );
}

export default Playlist;
