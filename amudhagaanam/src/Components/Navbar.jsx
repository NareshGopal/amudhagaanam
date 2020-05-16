import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar-container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink
          activeStyle={{ fontWeight: "bold" }}
          className="app-title"
          to="/"
        >
          Amudhagaanam
        </NavLink>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink
                activeStyle={{ fontWeight: "bold" }}
                className="nav-link"
                to="/library"
              >
                Library <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeStyle={{ fontWeight: "bold" }}
                className="nav-link"
                to="/playlists"
              >
                Playlists
              </NavLink>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search your song"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
