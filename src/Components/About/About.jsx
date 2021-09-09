import { motion } from "framer-motion";
export default function About() {
  return (
    <div className="container-fluid bg-dark text-light" id="about-me">
      <div className="about text-center">
        <motion.h3
          className="head text-center mb-5"
          whileHover={{
            color: ["#c6c6c6", "#212529", "#c6c6c6"],
            scale: [1, 2],
          }}
          whileTap={{ scale: 1.2 }}
        >
          About me
        </motion.h3>
        <p>
          I'm a web developer who specialises in creating amazing web
          experiences. I like developing websites that are well-designed,
          intuitive, and practical. I'm motivated to learn new technologies and
          develop my skills by taking on practical projects since I aim to grow
          every day. As an actively engaged learner, I am open to new ideas and
          eager to make my mark as a developer.
        </p>
      </div>
    </div>
  );
}
