import Songs from "../assets/components/allsongs/Songs";
import Header from "../assets/components/header/Header";
import Title from "../assets/components/title/Title";

import FetchSongs from '../assets/components/musicplayer/FetchSongs';

const AllSongs = () => {
  return (
    <>
      <Header/>
      <Title/>
      <Songs/>

      {/* <FetchSongs /> */}
    </>
  );
};

export default AllSongs;
