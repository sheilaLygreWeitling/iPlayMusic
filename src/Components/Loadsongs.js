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



    const InitialSongs = async (e) => {
      // https://api.spotify.com/v1/me/tracks?limit=50
      // prøv SPOTIFY me tracks

      var trackids = "7ouMYWpwJ422jRcDASZB7P%2C4VqPOruhp5EdPBeR92t6lQ%2C2takcwOaAZWiXQijPHIx7B"
      const { data } = await axios.get(`https://api.spotify.com/v1/tracks?ids=${trackids}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
      console.log(data.tracks)
      data.tracks.forEach(item => {
        // console.log(item.name)
        // console.log(item.id)
      });

      setArtists(data.tracks.name);
    };


    InitialSongs();

  }, []);

  const [tracks, setArtists] = useState([]);





  const renderSongs = () => {

    return tracks.map((track) => (
      <div key={track.id}>
        hello {track}
      </div>
    ));

    return (
      <div>
        helllllllo
      </div>
    )

  };



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