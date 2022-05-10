import { Routes, Route } from "react-router-dom";
import NowPlaying from "./pages/Heading/NowPlaying";
import Home from "./pages/Home";

import Page1 from "./pages/Page1";


function App() {
  return (
    <>
      <div>navbar</div>

      <a href="/">Home</a>
      <a href="Page1">Page1</a>
      <a href="NowPlaying">Page2</a>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Page1" element={<Page1 />} />
        <Route path="NowPlaying" element={<NowPlaying />} />
      </Routes>
    </>
  );
}

export default App;
