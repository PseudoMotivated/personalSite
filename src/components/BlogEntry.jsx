import { motion, useTime, useTransform, useMotionTemplate } from "motion/react"
import dog from '../assets/dog.webp'
const BlogEntry = ({ text , func, image}) => {
    const time = useTime();
    const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false });
    return (
        <div className="flex items-center justify-center h-full">
        <motion.div onClick={() => func()} 
        whileHover={{
            scale: 0.97, 
            opacity: 0.9,
          }}
          
         className=" w-fit p-1 flex justify-center items-center rounded-2xl cursor-pointer aspect-video m-3"
            style={{ background: useMotionTemplate`linear-gradient(${rotate}deg, var(--secondary-1), var(--secondary-2))` }}>
            <div className="bg-[var(--main-1)] flex flex-col w-full h-full rounded-xl overflow-hidden relative">
                    
                <div className="bg-[var(--main-1)] w-full">
                    <p className="p-5 absolute top-0 left-0 text-[white] z-10 w-full"
                       style={{backgroundColor: "rgba(0, 0, 0, 0.5)",fontSize: "large",}}
                    >{text}</p> 
                </div>
                <img className="relative min-h-full min-w-full object-cover" style={{ pointerEvents: 'none' }}  src={image ? image : dog} alt="" /> 
                
            </div>
        </motion.div>
        </div>
    )
}
export default BlogEntry
