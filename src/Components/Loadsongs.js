import { useEffect, useState } from "react";
import axios from "axios";

const Loadsongs = () => {

  const [token, setToken] = useState("");

  const [tracksarray, setArtists] = useState([]);

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



    const InitialSongs = async () => {
      // https://api.spotify.com/v1/me/tracks?limit=50
      // prøv SPOTIFY me tracks

      var trackids = "7ouMYWpwJ422jRcDASZB7P%2C4VqPOruhp5EdPBeR92t6lQ%2C2takcwOaAZWiXQijPHIx7B"
      // var trackids = "4iV5W9uYEdYUVa79Axb7Rh%1301WleyT98MSxVHPZCA6M"
      const { data } = await axios.get(`https://api.spotify.com/v1/tracks?ids=${trackids}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
      // console.log(data.tracks)

      const testarray = data.tracks
      console.log(testarray)
      // console.log(data.tracks[0])
      // console.log(data.tracks[1])
      // console.log(data.tracks[2])
      // console.log(data.tracks[2])
      // console.log(data.tracks[0].album)
      data.tracks.forEach(item => {
        // console.log(item.name)
        // console.log(item.id)
      });

      setArtists(data.tracks);
    };


    InitialSongs();

  }, []);







  const renderSongs = () => {

    // see console log for more
    return tracksarray.map((artist) => (
      <div key={artist}>
        {artist.album.id} <br />
        {artist.album.name} <br />
        {artist.preview_url} <br />
        <img src={artist.album.images[0].url} />
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