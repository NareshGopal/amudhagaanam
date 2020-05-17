import React, { useState, useEffect } from "react";
import axios from "axios";

import Table from "./Common/Table";
import { getLibrary } from "../Services/libraryService";

export default function Library() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const getSongs = () => {
      const result = getLibrary();
      setSongs(result);
    };
    getSongs();
  }, []);

  return (
    <div className="songs-table-container">
      <Table data={songs} />
    </div>
  );
}
