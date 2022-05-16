import HomePage from "./pages/HomePage";

import { Routes, Route } from "react-router-dom";


import Page1 from "./pages/Page1";
import MusicPlayer from "./pages/MusicPlayer";


function App() {
  return (
    <div className="dark overflow-hidden ">
      <div>navbar</div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Page1" element={<Page1 />} />
        <Route path="/NowPlaying" element={<MusicPlayer />} />
      </Routes>
    </div>
  );
}

export default App;
