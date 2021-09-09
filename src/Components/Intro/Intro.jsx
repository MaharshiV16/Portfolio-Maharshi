import image from "./Profile.jpeg";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <div className="introduction container-fluid text-dark">
      <div className="text-center">
        <motion.img
          src={image}
          className="rounded profileImage"
          alt="Profile-Pic"
          whileHover={{ scale: [0.8, 1.1] }}
          transition={{ duration: 0.5 }}
        ></motion.img>
      </div>
      <motion.div
        className="text-center name"
        initial={{
          y: -100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
          scale: [1, 2, 1],
        }}
        transition={{
          duration: 2,
          ease: "anticipate",
        }}
      >
        <h1>Maharshi Vashistha</h1>
      </motion.div>
      <motion.figure
        className="text-center introDetail"
        initial={{
          y: 100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
          scale: [1, 2, 1],
        }}
        transition={{
          delay: 1,
          duration: 2,
          ease: "backIn",
        }}
      >
        <blockquote className="blockquote">
          <p>An aspiring full-stack web-developer</p>
        </blockquote>
        <figcaption className="blockquote-footer">
          Copmuter Science Sophmore{" "}
          <cite title="Source Title">NIT Hamirpur</cite>
        </figcaption>
      </motion.figure>
      <motion.div
        className="text-center"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1,
          duration: 4,
        }}
      >
        <a href="#about-me" className="btn btn-outline-dark">
          About me
        </a>
        <a href="#contact" className="btn btn-outline-dark">
          Contact me
        </a>
      </motion.div>
    </div>
  );
}
