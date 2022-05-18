import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AllSongs from "./pages/AllSongs";
import MusicPlayer from "./pages/MusicPlayer";
import Searchcomp from "./assets/components/allsongs/Searchcomp";

function App() {
  return (

    <div className="w-full h-screen overflow-hidden bg-white dark:bg-darkPurple dark:text-white">

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='*' element={<Navigate to="/" />} />
        <Route path="/allsongs" element={<AllSongs/>} />
        <Route path="NowPlaying" element={<MusicPlayer />} />
        <Route path="/Search" element={<Searchcomp />} />
      </Routes>

    </div>
  );
}

export default App;
