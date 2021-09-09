import { motion } from "framer-motion";
import { useState } from "react";

export default function ItemSkill(props) {
  const [isAnimating, setIsanimating] = useState(false);
  return (
    <motion.div
      className="card"
      animate={{
        scale: isAnimating ? [0.8, 1.4, 1.4, 1, 1] : 1,
        borderRadius: isAnimating ? [20, 20, 100, 50, 0] : 0,
        rotate: isAnimating ? [0, 0, 360, 360, 0] : 0,
      }}
      transition={{
        duration: 2,
      }}
      onClick={() => setIsanimating(!isAnimating)}
    >
      <div className="text-center">
        <img src={props.img} className="skill-img .img-fluid" alt="" />
      </div>
      <div className="card-body">
        <h3 className="card-title">{props.tech}</h3>
        <div className="progress">
          <div
            className="progress-bar progress-bar-striped"
            role="progressbar"
            style={props.style}
          ></div>
        </div>
      </div>
    </motion.div>
  );
}
