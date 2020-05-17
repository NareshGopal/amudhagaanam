import React from "react";
import Search from "./Common/Search";
import { connect } from "react-redux";

function WelcomPage({ songs }) {
  return (
    <div className="intro-page">
      <span className="intro-page-span">
        <h1>Music heals the world!!</h1>
        <br />
        <br />
        <br />
        <h3>Happy Listening...</h3>
        <br />
        <br />
      </span>

      <Search />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    songs: state.songs.data,
  };
};

export default connect(mapStateToProps)(WelcomPage);
