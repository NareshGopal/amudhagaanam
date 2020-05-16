import React from "react";
import Table from "./Common/Table";

function PlaylistSongs() {
  return (
    <div>
      <Table data={songs} />
    </div>
  );
}

export default PlaylistSongs;
