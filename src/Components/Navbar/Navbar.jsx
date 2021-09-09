import { motion } from "framer-motion";
export default function Navbar() {
  const navVariants = {
    start: {
      y: -1000,
    },
    end: {
      y: 0,
      transition: {
        type: "tween",
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.5,
      },
    },
  };
  const itemVariants = {
    start: {
      opacity: 0,
      x: -1000,
    },
    end: {
      opacity: 1,
      x: 0,
    },
  };
  return (
    <motion.nav
      className="navbar navbar-expand-md navbar-dark bg-dark sticky-top"
      variants={navVariants}
      animate="end"
      initial="start"
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <motion.li className="nav-item" variants={itemVariants}>
              <a className="nav-link" href="#about-me">
                About
              </a>
            </motion.li>
            <motion.li className="nav-item e" variants={itemVariants}>
              <a className="nav-link edd" href="#education">
                Education / Experience
              </a>
            </motion.li>
            <motion.li className="nav-item" variants={itemVariants}>
              <a className="nav-link" href="#skill">
                Skills
              </a>
            </motion.li>
            <motion.li className="nav-item" variants={itemVariants}>
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </motion.li>
            <motion.li className="nav-item" variants={itemVariants}>
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </motion.li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
}
