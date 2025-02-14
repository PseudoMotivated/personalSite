import { motion } from "motion/react";
import { Link } from "react-router-dom";
const TopNav = () => {
  return (
    <div
      className="h-fit w-full p-5 border-b border-[var(--ternary-1)] rounded-b-3xl z-30  flex gap-2 sticky top-0" style={{ backgroundColor: "var(--main-1)" }}>
      <motion.div style={{ color: "var(--main-text)" }} whileHover={{ color: "var(--ternary-2)" }} transition={{ color: 0.1 }}>
        <Link to="/">Home</Link> 
      </motion.div>
      <motion.div style={{ color: "var(--main-text)" }} whileHover={{ color: "var(--ternary-2)" }} transition={{ color: 0.1 }}>
        <Link to="/Blog" >Blog</Link>
      </motion.div>
      <motion.a href="https://github.com/pseudomotivated" style={{ color: "var(--main-text)" }} whileHover={{ color: "var(--ternary-2)" }} transition={{ color: 0.1 }}>
        Github
      </motion.a>
      {/* <motion.div style={{ color: "var(--main-text)" }} whileHover={{ color: "var(--ternary-2)" }} transition={{ color: 0.1 }}>
        <Link to="/Portfolio">Portfolio</Link> 
      </motion.div> */}
      {/* <motion.a href="https://only-fans.uk/BananaMan" style={{ color: "var(--main-text)" }} whileHover={{ color: "var(--ternary-2)" }} transition={{ color: 0.1 }}>
        Onlyfans
      </motion.a> */}

    </div>
  );
};

export default TopNav;
