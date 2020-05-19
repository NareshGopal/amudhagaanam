import React from "react";
import { connect } from "react-redux";

import Table from "./Common/Table";

function Library({ songs }) {
  return (
    <div className="songs-table-container">
      <h1>All Songs</h1>
      <br />
      {songs.isLoading ? (
        <h3 className="loading-display">Loading...</h3>
      ) : (
        <Table data={songs.data} />
      )}
    </div>
  );
}

const mapStateToProps = ({ songs }) => {
  return {
    songs,
  };
};

export default connect(mapStateToProps)(Library);
