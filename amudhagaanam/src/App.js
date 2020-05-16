import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Library from "./Components/Library";
import Playlists from "./Components/Playlists";
import NotFound from "./Components/NotFound";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <Switch>
          <Route path="/library" component={Library} />
          <Route path="/playlists" component={Playlists} />
          <Route exact path="/" component={Library} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
