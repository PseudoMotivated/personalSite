import { TopHead } from "../components/TopHead"
import { useState , useEffect} from "react"
import TopNav from "../components/TopNav"
import { useParams } from 'react-router-dom';




function BlogView(blog) {

    const [importedModule, setImportedModule] = useState(<></>)
    
    const { id } = useParams();
    useEffect(() => {
        const importComponent = async () => {
          const module = await import('./blogs/sample.md');
          const AnotherComponent = module.ReactComponent;
          setImportedModule(<AnotherComponent />);
        };
    
        importComponent();
      }, []);
    



    return (
        <div>
            <div className="fixed w-full h-full  opacity-50 blur-3xl" style={{ zIndex: "-10", background: "radial-gradient(circle, rgba(255,255,255,0.2), var(--main-1))" }} />

            <TopHead />
            <TopNav />
            {importedModule}

        </div>
    )
}

export default BlogView
