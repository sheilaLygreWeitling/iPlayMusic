<<<<<<< HEAD
import { Routes, Route } from "react-router-dom";
import AllSongs from "./pages/AllSongs";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allsongs" element={<AllSongs/>} />
=======
import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage";
import NowPlaying from "./pages/Heading/NowPlaying";




function App() {
  return (

    <div className="w-full h-screen overflow-hidden bg-white dark:bg-darkPurple">

      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/Page1" element={} /> */}
        <Route path="NowPlaying" element={<NowPlaying />} />
>>>>>>> 5b8b2f7c2c3debc11e1d215bccb966a36361e119
      </Routes>

    </div>
  );
}

export default App;
