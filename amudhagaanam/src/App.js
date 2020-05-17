import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from "./Redux/store";
import Navbar from "./Components/Navbar";
import Library from "./Components/Library";
import Playlists from "./Components/Playlists";
import PlaylistSongs from "./Components/PlaylistSongs";
import NotFound from "./Components/NotFound";
import WelcomePage from "./Components/WelcomPage";
import { fetchSongs } from "./Redux/Songs/songsAction";
import { fetchPlaylist } from "./Redux/Playlists/playlistAction";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  useEffect(() => {
    store.dispatch(fetchPlaylist());
    store.dispatch(fetchSongs());
  }, []);

  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <div>
          <Switch>
            <Route path="/library" component={Library} />
            <Route path="/playlists/:id" component={PlaylistSongs} />
            <Route path="/playlists" component={Playlists} />
            <Route exact path="/" component={WelcomePage} />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
        <ToastContainer />
      </div>
    </Provider>
  );
}

export default App;
