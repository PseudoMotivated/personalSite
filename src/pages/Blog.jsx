import TopNav from "../components/TopNav";
import { TopHead } from "../components/TopHead";
import BlogCarousel from "../components/BlogCarousel";
import BlogEntry from "../components/BlogEntry";
import { useState } from "react";
import blogsList from "../components/blogsList";
const Blog = () => {
    const [search, setSearch] = useState("")
    const tags = ["opinion", "essay", "tutorial", "project"]
    const [ticked, setTicked] = useState([])
    const [filteredBlogs, setFilteredBlogs] = useState(blogsList)
    console.log(blogsList)

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
                <div style={{ }} className="flex flex-wrap justify-center w-full">
                    {/* more blogs block */}
                    <div className="m-9">
                        {/* filtering block */}
                        <input placeholder="Search..." className="text-slate-900 text-xl w-full p-2  border border-gray-300 rounded" value={search} onChange={(event) => setSearch(event.target.value)} />
                        <div className="flex flex-wrap">{tags.map(tag => {
                            return <div onClick={() => { ticked.includes(tag) ? setTicked(ticked.filter(i => i != tag)) : setTicked(ticked.concat(tag)) }} className={"m-1 rounded-sm ml-0 p-1 cursor-pointer " + (ticked.includes(tag) ? "bg-red-500" : "bg-orange-500")} key={tag}>{tag}</div>
                        })}</div>
                    </div>
                    <div>
                        {/* blogs block */}
                        <div className=" flex justify-center items-center">
                            <div className="" style={{ width: "clamp(60%, 600px, 90%)" }}>
                                <div>
                                    <BlogEntry text="jdjdjdj" image="https://placehold.co/600x400?font=roboto" />
                                    <BlogEntry text="jdjdjdj" image="https://placehold.co/600x400?font=roboto" />
                                    <BlogEntry text="jdjdjdj" image="https://placehold.co/600x400?font=roboto" />
                                    <BlogEntry text="jdjdjdj" image="https://placehold.co/600x400?font=roboto" />
                                    <BlogEntry text="jdjdjdj" image="https://placehold.co/600x400?font=roboto" />
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