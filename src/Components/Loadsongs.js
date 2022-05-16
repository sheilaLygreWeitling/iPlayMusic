import { useEffect, useState } from "react";
import axios from "axios";

const Loadsongs = () => {

  const [token, setToken] = useState("");
  const [artists, setArtists] = useState([]);

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

    if (token) {
      const InitialSongs = async (e) => {
        // e.preventDefault();
        const { data } = await axios.get(
          "https://api.spotify.com/v1/search?query=Testshot&type=artist&locale=da-DK%2Cda%3Bq%3D0.9%2Cen-US%3Bq%3D0.8%2Cen%3Bq%3D0.7&offset=0&limit=20",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            params: {
              type: "artist",
            },
          }
        );
        // console.log(data);
        setArtists(data.artists.items);
      };
      InitialSongs();
    }
  }, []);

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

  return (
    <header className="App-header">
      <h1>Load songs</h1>

      {!token ? <div>normal page content</div> : <div>search page content</div>}

      {renderSongs()}
    </header>
  );
};

export default Loadsongs;
