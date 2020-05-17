import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Table from "./Common/Table";

function PlaylistSongs(props) {
  const { playlists, songs } = props;
  const history = useHistory();

  const [myPlaylist, setMyPlaylist] = useState("");

  let filteredSongs = [];
  let { id } = useParams();

  useEffect(() => {
    setMyPlaylist(playlists.filter((pl) => pl.id == id)[0].name);
  }, [id, playlists]);

  const getSongsFromPlaylist = (id) => {
    let pl = playlists.filter((playlist) => playlist.id === +id);

    let songIds = pl[0].songs;

    if (songIds.length === 0) {
      history.push("/library");
      toast.info("Click + to add songs to your playlist");
      return;
    }

    filteredSongs = songs.filter((song) => {
      const idPresence = songIds.indexOf(song.id);
      return idPresence === -1 ? false : true;
    });
  };

  getSongsFromPlaylist(props.match.params.id);

  return (
    <div className="songs-table-container">
      <h1>{myPlaylist}</h1>
      <br />
      <Table data={filteredSongs} removeSongFlag={true} />
    </div>
  );
}

const mapStateToProps = ({ playlists, songs }) => {
  return {
    songs: songs.data,
    playlists: playlists.data,
  };
};

export default connect(mapStateToProps)(PlaylistSongs);
