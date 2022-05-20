import { useEffect, useState } from 'react';
import axios from 'axios';

const FetchSongs = (props) => {
    const [token, setToken] = useState('');
    const [tracksarray, setTracksArray] = useState([]);

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

    const initialSongs = () => {
        return tracksarray.map((item, index) => (
            <div key={index}>
                <img src={item?.album?.images[0].url} />
                {/* <audio src={item?.preview_url} type="audio/mpeg" controls autoPlay /> */}
                {item?.name}
                <br />
                {item?.album?.artists[0].name}
            </div>
        ));
    };

    return (
        <header className="App-header">
            {initialSongs()}
        </header>
    );
}

export default FetchSongs;