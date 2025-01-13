
import { motion, useScroll, useTransform } from "framer-motion";
const TopHead = () => {
    const { scrollY } = useScroll();
    const yTransform = useTransform(scrollY, [0, 100], [0, 50]);

    return (
            <motion.div
                className="bg-[var(--main-1)] flex items-center justify-center"
                style={{
                    padding: "clamp(1rem, 5vw, 3rem)", paddingBottom: "0",
                }}>

                <h1 className="font-bold text-[min(8vw,3rem)] text-[var(--main-text)]">
                    Pseudomotivated ☕
                </h1>



            </motion.div>

    );
};






export { TopHead }