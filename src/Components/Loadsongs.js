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

    if (token) {
      const InitialSongs = async () => {
        // between each song, add "%2C"
        var trackids =
          "7ouMYWpwJ422jRcDASZB7P%2C4VqPOruhp5EdPBeR92t6lQ%2C2takcwOaAZWiXQijPHIx7B%2C6pvqBIceXlX3zC09vqHOEo%2C2iblMMIgSznA464mNov7A8%2C4iV5W9uYEdYUVa79Axb7Rh%2C1301WleyT98MSxVHPZCA6M";
        const { data } = await axios.get(
          `https://api.spotify.com/v1/tracks?ids=${trackids}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        // console.log(data.tracks)
        // console.log(data.tracks[0])
        // console.log(data.tracks[0].album)
        // data.tracks.forEach((item) => {
        //   console.log(item.name)
        //   console.log(item.id)
        // });
        setArtists(data.tracks);
      };

      InitialSongs();
    }
  }, []);

  const renderSongs = () => {
    return tracksarray.map((item, index) => (
      <div key={index} data-id={item.album.id}>
        {item.album.id} <br />
        {item.album.name} <br />
        {item.preview_url} <br />
        <img src={item.album.images[0].url} />
      </div>
    ));
  };

  return (
    <header className="App-header">
      {!token ? (
        <div>normal page content</div>
      ) : (
        <div>search page content</div>
      )}

      {renderSongs()}
    </header>
  );
};

export default Loadsongs;
