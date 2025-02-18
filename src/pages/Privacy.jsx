import { useState, useEffect } from "react"
import TopNav from "../components/TopNav"
import { useParams } from 'react-router-dom';
import "../gfm.css"


const Privacy = () => {
  const NotFound = () => {
    return (
      <></>
    )
  }

  const [importedModule, setImportedModule] = useState(<NotFound />)
  const { post } = useParams()
  useEffect(() => {

    const importComponent = async () => {
      try {
        const module = await import(`./misc/privacy.md`);
        const AnotherComponent = module.ReactComponent;
        setImportedModule(<AnotherComponent />)
      }
      catch {
        setImportedModule(<NotFound />)
      }
    }
    window.scrollTo(0, 0)
    importComponent()
  }, [post])

  return (
    <div className="min-h-screen">
      <div className="fixed w-full h-full opacity-50 blur-3xl" style={{ zIndex: "-10", background: "radial-gradient(circle, rgba(255,255,255,0.2), var(--main-1))" }} />
      <TopNav />
      <div className="flex justify-center items-center">
        <div style={{ width: "clamp(70%, 800px, 95%)" }} className="markdown-body p-10 mt-10">
          {importedModule}
        </div>
      </div>
    </div>
  )
}

export default Privacy
