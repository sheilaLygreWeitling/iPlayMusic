import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
//import { ThemeProvider } from "../assets/components/context/ThemeContext"


function App() {
  return (
    <div className="w-full h-screen overflow-hidden bg-white dark:bg-darkPurple">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/AllSongs" element={<Page1 />} />
          <Route path="/NowPlaying" element={<Page2 />} />
        </Routes>
    </div>
  );
}

export default App;
