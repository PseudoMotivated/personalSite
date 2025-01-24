import { HashRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Blog from "./pages/Blog"
import BlogView from "./pages/BlogView"
function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/BlogView/:post" element={<BlogView />}/>
        </Routes>
      </HashRouter>
      <div className="p-5 bottom-0 mb-0 backdrop-blur-sm mt-10 bg-gradient-to-l flex  items-center from-[var(--main-2)] to-[var(--main-1)]">
        <p > &copy; 2024 PseudoMotivated. All rights reserved.</p>
      </div>
    </div>



  )
}

export default App
