import TopNav from "../components/TopNav";
import { TopHead } from "../components/TopHead";
import BlogCarousel from "../components/BlogCarousel";
import BlogEntry from "../components/BlogEntry";
import { useEffect, useState } from "react";
import { getAllPosts, getAllTags } from '../utils/BlogManager'
import { useNavigate } from "react-router-dom";
import { resolveImage } from "../utils/ImageManager";


const Blog = () => {
    // Create function to navigate links inside the site.
    const navigate = useNavigate()

    const [search, setSearch] = useState("")
    const [tags, setTags] = useState([])
    const [ticked, setTicked] = useState([])
    const [blogs, setBlogs] = useState([])
    const [filteredBlogs, setFilteredBlogs] = useState([])

    // Gets all available blogs.
    useEffect(() => {
        getAllPosts().then(resp => {
            setBlogs(resp)
            setTags(getAllTags(resp))
        })
    }, [])

    // Update which blogs to render on:
    // Blogs updated (on import)
    // User ticks a tag
    // Change in searchbar
    // To be included in rendered array the blog must contain all params.
    useEffect(() => {
        const filtered = blogs.filter(blog =>
            blog.frontmatter.title.toLowerCase().includes(search.toLowerCase()) &&
            (ticked.length === 0 || ticked.every(tag => blog.frontmatter.tags?.includes(tag)))
        );
        setFilteredBlogs(filtered);
    }, [search, blogs, ticked])


    return (
        <div>
            <div className="fixed w-full h-full  opacity-50 blur-3xl" style={{ zIndex: "-10", background: "radial-gradient(circle, rgba(255,255,255,0.2), var(--main-1))" }} />

            <TopHead />
            <TopNav />

            <div className="w-full flex items-center mb-4 justify-center mt-10 flex-col">
                <h1 className="text-2xl border-b px-4">
                    Good Stuff
                </h1>
            </div>

            <BlogCarousel />
            <div className="w-full flex items-center mb-4 justify-center mt-10 flex-col">
                <h1 className="text-2xl border-b px-4">
                    More Blogs
                </h1>
            </div>
            <div className="w-full justify-center flex">
                <div className="flex flex-wrap justify-center w-full">
                    <div className="p-8" style={{ width: "clamp(30%, 500px, 90%)" }}>
                        <input placeholder="Search..." className="bg-white text-slate-900 text-xl w-full p-2 border border-gray-300 rounded" value={search} onChange={(event) => setSearch(event.target.value)} />
                        <div className="flex flex-wrap">{
                            // render all tags gotten from the blogs
                            tags.map(tag => {
                                return (
                                    <div
                                        // tag is red if included in ticked array, otherwise red
                                        className={"m-1 rounded-sm ml-0 p-1 cursor-pointer " + (ticked.includes(tag) ? "bg-red-500" : "bg-orange-500")}
                                        key={tag}
                                        // When clicked checks if tag is in ticked array, removes it if it is, adds it if its not.
                                        onClick={() => {
                                            ticked.includes(tag) ? setTicked(ticked.filter(i => i != tag)) : setTicked(ticked.concat(tag))
                                        }}>
                                        {tag}
                                    </div>
                                )
                            })}</div>
                    </div>

                    <div style={{ width: "clamp(40%, 500px, 90%)" }} >
                        <div className=" flex justify-center items-center">
                            <div >
                                <div>
                                    {
                                        /*Renders the blogs in filtered blogs array*/
                                        filteredBlogs.map(blog => {
                                            return (
                                                <BlogEntry text={blog.frontmatter.title}
                                                    key={blogs.indexOf(blog)}
                                                    func={() => navigate(`/BlogView/${blog.slug}`)}
                                                    image={resolveImage(blog.frontmatter.image)} />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;