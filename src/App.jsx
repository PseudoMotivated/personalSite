import { HashRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Blog from "./pages/Blog"
import BlogView from "./pages/BlogView"
import Privacy from "./pages/Privacy"
import { useNavigate } from "react-router-dom"
function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/BlogView/:post" element={<BlogView />} />
          <Route path="/Privacy" element={<Privacy />} />
        </Routes>
      </HashRouter>
      <div className="p-5 gap-3 flex-row bottom-0 mb-0 backdrop-blur-sm mt-10 bg-gradient-to-l items-center from-[var(--main-2)] to-[var(--main-1)]">
        <p> &copy; 2024 PseudoMotivated. All rights reserved.</p>
        <div className="gap-3 flex text-sm hover:text-purple-400 bottom-0 mb-0 backdrop-blur-sm mt-2 bg-gradient-to-l items-center from-[var(--main-2)] to-[var(--main-1)]">
          <a href="/#/Privacy">Privacy</a>
        </div>
      </div>
    </div>



  )
}

export default App
