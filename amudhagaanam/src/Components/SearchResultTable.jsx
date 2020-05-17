import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Table from "../Components/Common/Table";

function SearchResultTable() {
  const { type, value } = useParams();

  const songs = useSelector((state) => state.songs.data);

  const filteredSongs = songs.filter(
    (song) => song[type].toLowerCase() == value
  );

  return (
    <div className="songs-table-container">
      <h1>Search Results</h1>
      <br />
      <Table data={filteredSongs} removeSongFlag={false} />
    </div>
  );
}

export default SearchResultTable;
