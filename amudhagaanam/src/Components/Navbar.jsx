import React from "react";
import { NavLink, useLocation } from "react-router-dom";

import Search from "./Common/Search";

function Navbar() {
  const { pathname } = useLocation();
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
          {pathname !== "/" ? <Search /> : null}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
