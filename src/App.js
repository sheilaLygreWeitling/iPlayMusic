import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage";

import MusicPlayer from "./pages/MusicPlayer";

//import NowPlaying from "./pages/Heading/NowPlaying";





function App() {
  return (

    <div className="w-full h-screen overflow-hidden bg-white dark:bg-darkPurple">

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="NowPlaying" element={<NowPlaying />} />

      </Routes>

    </div>
  );
}

export default App;
