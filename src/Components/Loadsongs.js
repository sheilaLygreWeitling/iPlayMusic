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
  const [artists, setArtists] = useState([]);

  const LoadSongs = async (e) => {
    // e.preventDefault();
    // ed sheeran
    // https://api.spotify.com/v1/track/2UN0lp72LAusrXi8LLVomt
    // spotify example
    // https://api.spotify.com/v1/tracks/2KrxsD86ARO5beq7Q0Drfqa
    // https://api.spotify.com/v1/search?query=Testshot&type=artist&locale=da-DK%2Cda%3Bq%3D0.9%2Cen-US%3Bq%3D0.8%2Cen%3Bq%3D0.7&offset=0&limit=20
    const { data } = await axios.get("https://api.spotify.com/v1/search?query=Testshot&type=artist&locale=da-DK%2Cda%3Bq%3D0.9%2Cen-US%3Bq%3D0.8%2Cen%3Bq%3D0.7&offset=0&limit=20", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        type: "artist",
      },
    });

    console.log(data)

    setArtists(data.artists.items);
  };

  const renderSongs = () => {
    return artists.map((artist) => (
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