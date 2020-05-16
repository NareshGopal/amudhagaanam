import React from "react";

function TableHeader() {
  return (
    <thead className="thead-dark">
      <tr>
        <th scope="col">Id</th>
        <th scope="col">Name</th>
        <th scope="col">Duration</th>
        <th scope="col">Album</th>
        <th scope="col">Artist</th>

        <th scope="col">AddToPlaylist</th>
      </tr>
    </thead>
  );
}

export default TableHeader;
