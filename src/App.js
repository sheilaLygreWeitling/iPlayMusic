
import { Routes, Route } from "react-router-dom"

import HomePage from "./pages/HomePage";

import { Routes, Route } from "react-router-dom";

import NowPlaying from "./pages/Heading/NowPlaying";
import Home from "./pages/Home";




function App() {
  return (

    <div className="w-full h-screen overflow-hidden bg-white dark:bg-darkPurple">
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
