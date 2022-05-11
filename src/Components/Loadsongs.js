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

  const [searchKey, setSearchKey] = useState("");
  const [tracks, setArtists] = useState([]);

  const LoadSongs = async (e) => {
    // ed sheeran
    // https://api.spotify.com/v1/track/2UN0lp72LAusrXi8LLVomt
    // spotify example
    // https://api.spotify.com/v1/tracks/2KrxsD86ARO5beq7Q0Drfqa
    const { data } = await axios.get("https://api.spotify.com/v1/tracks/2KrxsD86ARO5beq7Q0Drfqa", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        // q: searchKey,
        type: "tracks",
      },
    });

    // console.log(data)

    setArtists(data.tracks.items);
  };

  const renderSongs = () => {
    return tracks.map((artist) => (
      <div key={artist.id}>
        {artist.images.length ? (
          <img width={"100%"} src={artist.images[0].url} />
        ) : (
          <div>No Image</div>
        )}
        {artist.name}
      </div>
    ));
  };

  LoadSongs();

  return (
    <header className="App-header">
      <h1>Load songs</h1>

      {/* <div onLoad={LoadSongs}></div> */}
      {renderSongs()}

    </header>
  );
}

export default Loadsongs;