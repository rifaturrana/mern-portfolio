import React from "react";
import portfolio from "../../../assets/rana.png";
import "./Home.scss";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { HiLightBulb } from "react-icons/hi";

const Home = () => {
  const moveVariants = {
    animation: {
      y: [0, -15],
      transition: {
        yoyo: Infinity,
        duration: 2,
        delay: 1,
      },
    },
  };

  return (
    <motion.div
      className="container "
      id="home"
      initial={{ y: -15, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 2,
        delay: 0.5,
      }}
    >
      <div className="profile">
        <img src={portfolio} alt="portfolio" />
      </div>
      <div className="profile_text">
        <h3 className="name">
          Hi, I'm{" "}
          <span>
            <Typewriter
              words={["Rifatur Rana", "Developer!", " Designer!", "Coder!"]}
              loop={5}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>{" "}
        </h3>
        <span className="job">
          Building the future, one line of code at a time
        </span>
        <span className="text">
          Passionately devoted to designing and developing <br /> innovative web
          ideas
          <HiLightBulb />
        </span>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.1 }}
          variants={moveVariants}
          animate="animation"
        >
          connect with me
        </motion.a>
        {/* <div className="web">Web Developer</div>
        <div className="ui">UI/UX Designer</div>
        <div className="freelance">Freelancer</div> */}
      </div>
    </motion.div>
  );
};

export default Home;
