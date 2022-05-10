import HomePage from "./pages/HomePage";

import { Routes, Route } from "react-router-dom";

import NowPlaying from "./pages/Heading/NowPlaying";
import Home from "./pages/Home";


import HomePage from "./pages/HomePage";

import Page1 from "./pages/Page1";


function App() {
  return (
    <div className="dark overflow-hidden ">
      <div>navbar</div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Page1" element={<Page1 />} />
        <Route path="NowPlaying" element={<NowPlaying />} />
      </Routes>
    </div>
  );
}

export default App;
