import React from 'react';
import PlayingNow from '../assets/components/musicplayer/PlayingNow';
import Header from '../assets/components/header/Header';

import FetchSongs from '../assets/components/musicplayer/FetchSongs';

import ThinText from '../assets/components/musicplayer/ThinText';

const MusicPlayer = () => {
    return (
        <>
            <Header />
            <PlayingNow />

            <ThinText text="Nothing found..." />
            <FetchSongs />
        </>
    );
};

export default MusicPlayer;
