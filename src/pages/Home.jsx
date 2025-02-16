import { TopHead } from "../components/TopHead"
import { useState } from "react"
import TopNav from "../components/TopNav"
import BlogCarousel from "../components/BlogCarousel"
import Experiece from "../components/Experience"
import Button from "../components/Button"

function Home() {

  return (
    <div>
      <div className="fixed w-full h-full  opacity-50 blur-3xl" style={{ zIndex: "-10", background: "radial-gradient(circle, rgba(255,255,255,0.2), var(--main-1))" }}/>

      <TopHead />
      <TopNav />

      <div className="w-full flex items-center justify-center mt-10 flex-col">
        <h1 className="text-2xl border-b px-4">
          About me
        </h1>
        <div className="flex flex-col items-center m-5 mt-2 ">
          <p style={{ width: "clamp(60%, 600px, 100%)" }} >
            I'm a 17 year old student and linux enthusiast. I usually build in React, Tailwind and Vite and can get a website up and running for you in no time, so get in touch!
          </p>
        </div>
      </div>

      <div className="w-full flex items-center mb-4 justify-center mt-10 flex-col">
        <h1 className="text-2xl border-b px-4">
          Experience
        </h1>
      </div>

      <Experiece />

      <div className="w-full flex items-center justify-center mt-10 gap-2 flex-wrap">
        <Button text="Download Resume EN" func={() => { window.location.href = "https://stackoverflow.com"; }} />
        <Button text="Download Resume SV" func={() => { window.location.href = "https://stackoverflow.com"; }} />
      </div>

      <div className="w-full flex items-center justify-center mt-10 ">
        <h1 className="text-2xl border-b  px-4">
          Blogs
        </h1>
      </div>
      <BlogCarousel />
    </div>
  )
}

export default Home
