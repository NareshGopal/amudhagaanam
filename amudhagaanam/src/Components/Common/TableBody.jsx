import React from "react";

function TableBody(props) {
  const { data: songs } = props;
  return (
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
  );
}

export default TableBody;
