import HomePage from "./pages/HomePage";

import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";

function App() {
  return (
    <div className="dark overflow-hidden ">
      <div>navbar</div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Page1" element={<Page1 />} />
        <Route path="/Page2" element={<Page2 />} />
      </Routes>
    </div>
  );
}

export default App;
