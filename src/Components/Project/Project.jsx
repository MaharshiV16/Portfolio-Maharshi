import care4u from "./images/care4u.jpeg";
import clock from "./images/clock.jpeg";
import codequest from "./images/codequest.png";
import { motion } from "framer-motion";

export default function Project() {
  return (
    <div
      className="container-fluid bg-light text-dark project-bg"
      id="projects"
    >
      <div className="head text-center mb-5">
        <motion.h1
          className="skill-heading"
          whileTap={{ scale: 1.2 }}
          whileHover={{
            color: ["#212529", "#c6c6c6", "#212529"],
            scale: [1, 2],
          }}
        >
          Projects
        </motion.h1>
      </div>
      <div
        id="carouselCaptions"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item text-center active">
            <img src={care4u} alt="..." className="project-img" />
            <div className="carousel-caption bg-light d-none d-md-block text-dark">
              <h1>Care4U</h1>
              <h5>
                A web development project made under Electrothon 3.0 organised
                by SPEC at NITH targeted to spread awareness about periods,
                period health and to bust the myths around the same.
              </h5>
            </div>
          </div>
          <div className="carousel-item text-center">
            <img src={codequest} alt="..." className="project-img" />
            <div className="carousel-caption bg-light d-none d-md-block text-dark">
              <h1>CodeQuest</h1>
              <h5>
                A flutter and firebase based project that provides a platform
                for students to ask doubts and also educators to provide video
                tutorials.
              </h5>
            </div>
          </div>
          <div className="carousel-item text-center">
            <img src={clock} alt="..." className="project-img" />
            <div className="carousel-caption bg-light d-none d-md-block text-dark">
              <h1>World Clock</h1>
              <h5>
                A basic flutter app that shows time of different cities using
                the WorldClock API.
              </h5>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
