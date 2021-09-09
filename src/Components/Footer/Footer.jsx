import { motion } from "framer-motion";

export default function Footer() {
  const date = new Date();
  var year = date.getFullYear();

  return (
    <div className="bg-light text-dark container-fluid text-center footer">
      <p class="lead">
        {" "}
        <span> Made With</span>{" "}
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 0.75 }}
        >
          ❤️
        </motion.div>
      </p>
      <p>Copyright ©️ {year} Maharshi Vashistha</p>
    </div>
  );
}
