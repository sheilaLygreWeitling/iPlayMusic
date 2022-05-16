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

      var albumids = "382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc,4aawyAB9vmqN3uQ7FjRGTy"
      // https://api.spotify.com/v1/albums/{id}
      const { data } = await axios.get(`https://api.spotify.com/v1/albums?ids=${albumids}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
      // console.log(data.tracks)

      const testarray = data.albums
      console.log(testarray)
      // console.log(data.tracks[0])
      // console.log(data.tracks[1])
      // console.log(data.tracks[2])
      // console.log(data.tracks[2])
      // console.log(data.tracks[0].album)
      // data.tracks.forEach(item => {
        // console.log(item.name)
        // console.log(item.id)
      // });

      setArtists(data.albums);
    };


    InitialSongs();

  }, []);

  const renderSongs = () => {

    // see console log for more
    return tracksarray.map((albums, index) => (
      <div key={index}>
        {albums.id} <br />
        {albums.name} <br />
        {albums.preview_url} <br />
        <img src={albums.images[0].url} />
      </div>
    ));
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