import React from "react";

function TableHeader(props) {
  return (
    <thead className="thead-dark">
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Duration</th>
        <th scope="col">Album</th>
        <th scope="col">Artist</th>

        <th scope="col"> {props.removeSongFlag ? "Remove" : "Playlist"}</th>
      </tr>
    </thead>
  );
}

export default TableHeader;
