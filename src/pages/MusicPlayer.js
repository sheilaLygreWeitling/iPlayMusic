import React from 'react';
import PlayingNow from '../assets/components/musicplayer/PlayingNow';
import Header from '../assets/components/header/Header';

import FetchSongs from '../assets/components/musicplayer/FetchSongs';

const MusicPlayer = () => {
    return (
        <>
            <Header />

            <PlayingNow />
            <FetchSongs />
        </>
    );
};

export default MusicPlayer;
