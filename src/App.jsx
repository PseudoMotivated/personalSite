import { HashRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Blog from "./pages/Blog"
function App() {


  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Blog" element={<Blog />} />
        </Routes>
      </HashRouter>
      <div className="p-5 backdrop-blur-sm mt-10 bg-gradient-to-l flex  items-center from-[var(--main-2)] to-[var(--main-1)]">
        <p> &copy; 2024 PseudoMotivated. All rights reserved.</p>
      </div>
    </div>



  )
}

export default App
