import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AllSongs from "./pages/AllSongs";
import MusicPlayer from "./pages/MusicPlayer";
import Searchcomp from "../src/Components/Searchcomp";

function App() {
  return (

    <div className="w-full h-screen overflow-hidden bg-white dark:bg-darkPurple">

      <Routes>
        <Route path="/" element={<HomePage />} />
          <Route path="/allsongs" element={<AllSongs/>} />
        <Route path="NowPlaying" element={<MusicPlayer />} />
        <Route path="/Search" element={<Searchcomp />} />
      </Routes>

    </div>
  );
}

export default App;
