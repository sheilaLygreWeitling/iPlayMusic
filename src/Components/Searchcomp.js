import { useEffect, useState } from "react";
import axios from "axios";

const Searchcomp = () => {
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
  }, []);

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  const [searchKey, setSearchKey] = useState("");

  const searchArtists = async (e) => {
    e.preventDefault();
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: searchKey,
        type: "artist",
      },
    });
    console.log(data.artists.items)
    setArtists(data.artists.items);
  };

  // https://accounts.spotify.com/da-DK/authorize?
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const CLIENT_ID = "9d4b16ee4a594036945fc243b00d1491";
  // const REDIRECT_URI = "http://localhost:3000";
  const REDIRECT_URI = "http://localhost:3000/Search";
  const RESPONSE_TYPE = "token";

  const searchSongs = () => {
    return tracksarray.map((item, index) => (
      <div key={index} data-id={item.id}>
        {item.images.length ? (
          <img width={"100%"} src={item.images[0].url} />
        ) : (
          <div>No Image</div>
        )}
        {item.name}
      </div>
    ));
  };

  return (
    <header className="App-header">
      {!token ? (
        <a
          href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
        >
          Login to Spotify
        </a>
      ) : (
        <button onClick={logout}>Logout</button>
      )}

      <form onSubmit={searchArtists}>
        <input type="text" onChange={(e) => setSearchKey(e.target.value)} />
        <button type={"submit"}>Search</button>
      </form>

      {/*
      {searchSongs()}
      {initialSongs()}
      */}
      {tracksarray.length <= 0 ? (
        <div>initial fetch</div>
      ) : (
        <div>search fetch</div>
      )}

      {searchSongs()}
    </header>
  );
}

export default Searchcomp;
