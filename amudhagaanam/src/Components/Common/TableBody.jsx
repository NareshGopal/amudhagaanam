import React from "react";

function TableBody(props) {
  const { data: songs } = props;
  return (
    <tbody>
      {songs.map((song) => (
        <tr className="song-record" key={song.id}>
          <td>{song.title}</td>
          <td>{song.duration}</td>
          <td>{song.album}</td>
          <td>{song.artist}</td>

          <td>
            <button type="button" className="btn btn-dark clickable">
              {props.removeSongFlag ? "-" : "+"}
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;
