import { Routes, Route } from "react-router-dom";
import AllSongs from "./pages/AllSongs";
import Home from "./pages/Home";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Test from "./pages/Test";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allsongs" element={<AllSongs/>} />
        <Route path="/test" element={<Test/>} />
      </Routes>
    </>
  );
}

export default App;
