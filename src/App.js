import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'

function App() {
  return (
    <>
      <div>navbar</div>

      <a href="/">Home</a>
      <a href="Page1">Page1</a>
      <a href="Page2">Page2</a>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Page1" element={<Page1 />} />
        <Route path="/Page2" element={<Page2 />} />
      </Routes>
    </>
  )
}

export default App
