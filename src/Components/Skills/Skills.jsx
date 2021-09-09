import html from "./images/html.png";
import css from "./images/css.png";
import js from "./images/js.png";
import bootstrap from "./images/boot.png";
import node from "./images/node.png";
import react from "./images/react.png";
import flutter from "./images/flutter.png";
import firebase from "./images/firebase.png";
import github from "./images/github.png";
import cpp from "./images/c++.svg";
import python from "./images/python.png";
import c from "./images/c.png";
import ItemSkill from "./ItemSkill";
import { motion } from "framer-motion";
export default function Skills() {
  return (
    <div
      className="skills container-fluid bg-dark text-light text-center"
      id="skill"
    >
      <motion.h1
        className="skill-heading"
        whileTap={{ scale: 1.2 }}
        whileHover={{
          color: ["#c6c6c6", "#212529", "#c6c6c6"],
          scale: [1, 2],
        }}
      >
        Skills
      </motion.h1>
      <div className="text-center">
        <div className="row text-dark">
          <div className="col-xl-2 col-md-3 col-6">
            <ItemSkill img={html} tech="HTML" style={{ width: "85%" }} />
          </div>
          <div className="col-xl-2 col-md-3 col-6">
            <ItemSkill img={css} tech="CSS" style={{ width: "70%" }} />
          </div>
          <div className="col-xl-2 col-md-3 col-6">
            <ItemSkill img={js} tech="JavaScript" style={{ width: "70%" }} />
          </div>
          <div className="col-xl-2 col-md-3 col-6">
            <ItemSkill
              img={bootstrap}
              tech="Bootstrap"
              style={{ width: "85%" }}
            />
          </div>
          <div className="col-xl-2 col-md-3 col-6">
            <ItemSkill img={node} tech="Node.js" style={{ width: "85%" }} />
          </div>
          <div className="col-xl-2 col-md-3 col-6">
            <ItemSkill img={react} tech="React.js" style={{ width: "60%" }} />
          </div>
          <div className="col-xl-2 col-md-3 col-6">
            <ItemSkill img={flutter} tech="Flutter" style={{ width: "50%" }} />
          </div>
          <div className="col-xl-2 col-md-3 col-6">
            <ItemSkill
              img={firebase}
              tech="FireBase"
              style={{ width: "60%" }}
            />
          </div>
          <div className="col-xl-2 col-md-3 col-6">
            <ItemSkill img={github} tech="Github" style={{ width: "75%" }} />
          </div>
          <div className="col-xl-2 col-md-3 col-6">
            <ItemSkill img={cpp} tech="C++" style={{ width: "80%" }} />
          </div>
          <div className="col-xl-2 col-md-3 col-6">
            <ItemSkill img={python} tech="Python" style={{ width: "50%" }} />
          </div>
          <div className="col-xl-2 col-md-3 col-6">
            <ItemSkill img={c} tech="C" style={{ width: "80%" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
