import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div
      className="container-fluid bg-dark text-light text-center pb-5 contact-me"
      id="contact"
    >
      <div>
        <motion.h1
          className="head text-center mb-5 pt-5"
          whileTap={{ scale: 1.2 }}
          whileHover={{
            color: ["#c6c6c6", "#212529", "#c6c6c6"],
            scale: [1, 2],
          }}
        >
          Contact Me
        </motion.h1>
      </div>
      <figure className="text-center">
        <blockquote className="blockquote">
          <p>For giving feedback, any querries or collaboration</p>
        </blockquote>
        <figcaption className="blockquote-footer">
          mail me at <cite title="Source Title">maharshiv16@gmail.com</cite>
        </figcaption>
      </figure>
      <div className="icons">
        <span className="ic">
          <a
            href="https://www.linkedin.com/in/maharshi-vashistha-953bbb202/"
            className="icon-link"
          >
            <i class="fab fa-linkedin"></i>
          </a>
        </span>
        <span className="ic">
          <a
            href="https://www.instagram.com/lil_halfblood/"
            className="icon-link"
          >
            <i class="fab fa-instagram"></i>
          </a>
        </span>
        <span className="ic">
          <a href="mailto:maharshiv16@gmail.com" className="icon-link">
            <i class="far fa-envelope"></i>
          </a>
        </span>
        <span className="ic">
          <a href="https://github.com/MaharshiV16" className="icon-link">
            <i class="fab fa-github-square"></i>
          </a>
        </span>
      </div>
    </div>
  );
}
