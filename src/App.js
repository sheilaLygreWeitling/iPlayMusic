import { Routes, Route } from "react-router-dom";
import NowPlaying from "./pages/Heading/NowPlaying";
import Home from "./pages/Home";

import Page1 from "./pages/Page1";


function App() {
  return (
    <>
      <div>navbar</div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Page1" element={<Page1 />} />
        <Route path="NowPlaying" element={<NowPlaying />} />
      </Routes>
    </>
  );
}

export default App;
