import React, { useState, useEffect } from "react";
import axios from "axios";
import { getLibrary } from "../Services/libraryService";

export default function SongsTable() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const getSongs = () => {
      console.log("here");
      const result = getLibrary();
      setSongs(result);
    };
    getSongs();
  }, []);

  return (
    <div className="songs-table-container">
      <table className="table table-striped">
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
        <tbody>
          {songs.map((song) => (
            <tr>
              <th scope="row">{song.id}</th>
              <td>{song.title}</td>
              <td>{song.duration}</td>
              <td>{song.album}</td>
              <td>{song.artist}</td>

              <td>
                <button type="button" className="btn btn-dark clickable">
                  Add to playlist
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
