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
    // e.preventDefault();
    // ed sheeran
    // https://api.spotify.com/v1/track/2UN0lp72LAusrXi8LLVomt
    // spotify example
    // https://api.spotify.com/v1/tracks/2KrxsD86ARO5beq7Q0Drfqa
    // https://api.spotify.com/v1/search?query=Testshot&type=artist&locale=da-DK%2Cda%3Bq%3D0.9%2Cen-US%3Bq%3D0.8%2Cen%3Bq%3D0.7&offset=0&limit=20

    // til 3 tracks med tracks api
    // 7ouMYWpwJ422jRcDASZB7P
    // 2C4VqPOruhp5EdPBeR92t6lQ
    // 2C2takcwOaAZWiXQijPHIx7B
    // 7ouMYWpwJ422jRcDASZB7P%2C4VqPOruhp5EdPBeR92t6lQ%2C2takcwOaAZWiXQijPHIx7B
    const { data } = await axios.get("https://api.spotify.com/v1/tracks?ids=7ouMYWpwJ422jRcDASZB7P", {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });

    // til 1 track med search api
    // const { data } = await axios.get("https://api.spotify.com/v1/search?query=Testshot&type=artist&locale=da-DK%2Cda%3Bq%3D0.9%2Cen-US%3Bq%3D0.8%2Cen%3Bq%3D0.7&offset=0&limit=20", {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    //   params: {
    //     type: "artist",
    //   },
    // });

    console.log(data.tracks)
    data.tracks.forEach(item => {
      // console.log(item)
      // console.log(item.preview_url)
      // console.log(item.name)

      // return <h1>song item</h1>

    });


    setArtists(data.tracks.items);
  };



  const renderSongs = () => {
    // return tracks.map((track) => (
    //   <div>
    //       {track}
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