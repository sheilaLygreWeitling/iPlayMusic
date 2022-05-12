import { useEffect, useState } from "react";
import axios from "axios";

const Loadsongs = () => {

  const [token, setToken] = useState("");

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    setToken(token);
  }, []);

  const [tracks, setArtists] = useState([]);

  const LoadSongs = async (e) => {
    const { data } = await axios.get("https://api.spotify.com/v1/tracks?ids=7ouMYWpwJ422jRcDASZB7P%2C4VqPOruhp5EdPBeR92t6lQ%2C2takcwOaAZWiXQijPHIx7B", {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
    console.log(data.tracks)
    data.tracks.forEach(item => {
      console.log(item.name)
    });

    setArtists(data.tracks.items);
  };



  const renderSongs = () => {
    // return tracks.map((track) => (
    //   <div>
    //       {track}
    //   </div>
    // ));

    // return tracks.map((item) => (
    //   <div>
    //       {item}
    //   </div>
    // ));
  };

  LoadSongs();

  return (
    <header className="App-header">
      <h1>Load songs</h1>

      {!token ? (
        <div>normal page content</div>
      ) : (
        <div>search page content</div>
      )}

      {renderSongs()}

    </header>
  );
}

export default Loadsongs;