import { motion, useTime, useTransform, useMotionTemplate } from "motion/react"
const Button = ({ text , func}) => {




    const time = useTime();
    const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false });
    return (
        <motion.div onClick={() => func()}     
        whileHover={{
            scale: 0.95, 
            
          }}
         className=" w-fit p-1 flex justify-center items-center rounded-2xl cursor-pointer"
            style={{ background: useMotionTemplate`linear-gradient(${rotate}deg, var(--secondary-1), var(--secondary-2))` }}>

            <div className="bg-[var(--main-1)] w-full h-full p-3 rounded-xl">
                    
                <div>
                    {text}
                </div>
                
            </div>
        </motion.div>
    )
}
export default Button