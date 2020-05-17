import React from "react";
import { connect } from "react-redux";

import Table from "./Common/Table";

function Library({ songs }) {
  return (
    <div className="songs-table-container">
      <Table data={songs} />
    </div>
  );
}

const mapStateToProps = ({ songs }) => {
  return {
    songs: songs.data,
  };
};

export default connect(mapStateToProps)(Library);
