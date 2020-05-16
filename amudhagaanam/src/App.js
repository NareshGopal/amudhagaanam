import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./Components/Navbar";
import SongsTable from "./Components/SongsTable";
import Playlists from "./Components/Playlists";
import NotFound from "./Components/NotFound";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <Switch>
          <Route path="/library" component={SongsTable} />
          <Route path="/playlists" component={Playlists} />
          <Route exact path="/" component={SongsTable} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
