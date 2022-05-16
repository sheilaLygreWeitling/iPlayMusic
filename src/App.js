import { Routes, Route } from "react-router-dom";
import AllSongs from "./pages/AllSongs";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allsongs" element={<AllSongs/>} />
      </Routes>
    </>
  );
}

export default App;
