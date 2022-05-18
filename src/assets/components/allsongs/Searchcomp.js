import { useEffect, useState } from 'react';
import axios from 'axios';

const Searchcomp = () => {
    const [token, setToken] = useState('');
    const [tracksarray, setTracksArray] = useState([]);
    const [searchArray, setSearchArray] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const hash = window.location.hash;
        let token = window.localStorage.getItem('token');

        if (!token && hash) {
            token = hash
                .substring(1)
                .split('&')
                .find((elem) => elem.startsWith('access_token'))
                .split('=')[1];

            window.location.hash = '';
            window.localStorage.setItem('token', token);
        }

        setToken(token);

        if (token) {
            const InitialSongs = async () => {
                // between each song, add "%2C"
                var trackids =
                    '7ouMYWpwJ422jRcDASZB7P%2C4VqPOruhp5EdPBeR92t6lQ%2C2takcwOaAZWiXQijPHIx7B%2C6pvqBIceXlX3zC09vqHOEo%2C2iblMMIgSznA464mNov7A8%2C4iV5W9uYEdYUVa79Axb7Rh%2C1301WleyT98MSxVHPZCA6M';
                const { data } = await axios.get(
                    `https://api.spotify.com/v1/tracks?ids=${trackids}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                setTracksArray(data.tracks);
            };

            InitialSongs();
        }
    }, []);
    // console.log(searchArray[0]?.images[0])

    const logout = () => {
        setToken('');
        window.localStorage.removeItem('token');
    };

    const [searchKey, setSearchKey] = useState('');

    const searchArtists = async (e) => {
        e.preventDefault();
        const { data } = await axios.get('https://api.spotify.com/v1/search', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            params: {
                q: searchKey,
                type: 'artist',
            },
        });
        setSearchArray(data.artists.items);
    };

    const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
    const CLIENT_ID = '9d4b16ee4a594036945fc243b00d1491';
    const REDIRECT_URI = 'http://localhost:3000/Search';
    const RESPONSE_TYPE = 'token';

    const initialSongs = () => {
        return tracksarray.map((item, index) => (
            <div key={index}>
                <img src={item?.album?.images[0].url} />
            </div>
        ));
    };
    const searchSongs = () => {
        return searchArray.map((item, index) => (
            <div key={index}>
                <img src={item?.images[0]?.url} />
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
                <input
                    type="text"
                    onChange={(e) => setSearchKey(e.target.value)}
                />
                <button
                    onClick={() => setIsLoading(!isLoading)}
                    type={'submit'}
                >
                    Search
                </button>
            </form>

            {!isLoading ? (
                <div>{initialSongs()}</div>
            ) : (
                <div>{searchSongs()}</div>
            )}
        </header>
    );
};

export default Searchcomp;
