import React from "react";
import { NavLink, useLocation } from "react-router-dom";

import Search from "./Common/Search";

function Navbar() {
  const { pathname } = useLocation();
  return (
    <div className="navbar-container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink
          activeStyle={{
            fontWeight: "bold",
            color: "#fff",
            textDecoration: "none",
          }}
          className="app-title"
          to="/"
        >
          Amudhagaanam |
        </NavLink>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto navbar-list-container">
            <li className="nav-item">
              <NavLink
                activeStyle={{ fontWeight: "bold" }}
                className="nav-link"
                to="/playlists"
              >
                Playlists
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink
                activeStyle={{ fontWeight: "bold" }}
                className="nav-link"
                to="/library"
              >
                Library <span className="sr-only">(current)</span>
              </NavLink>
            </li>
          </ul>
          {pathname !== "/" ? <Search /> : null}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
