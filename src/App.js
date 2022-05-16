
import { Routes, Route } from "react-router-dom";
import AllSongs from "./pages/AllSongs";
import HomePage from "./pages/HomePage";
import MusicPlayer from "./pages/MusicPlayer";



function App() {
  return (

    <div className="w-full h-screen overflow-hidden bg-white dark:bg-darkPurple">

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/allsongs" element={<AllSongs/>} />
        <Route path="NowPlaying" element={<MusicPlayer />} />
      </Routes>

    </div>
  );
}

export default App;
