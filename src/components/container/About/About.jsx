import React from "react";
import "./About.scss";

import { motion } from "framer-motion";
import { bios } from "../../../Data";
import portfolio from "../../../assets/rana2.jpg";
const About = () => {
  return (
    <div className="container " id="about">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="title"
      >
        <span>Who Am I?</span>
        <h1>About Me</h1>
      </motion.div>

      <div className="about_container">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="about_left"
        >
          <motion.img
            src={portfolio}
            whileHover={{ y: -48, x: -55 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        <motion.div
          className="about_right"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p style={{ opacity: "1" }}>
            Hey, this is Rana. I am a full-stack developer with a passion for
            software development. I have been working with the MERN stack, which
            includes MongoDB, Express.js, React.js, and Node.js. Currently, I am
            pursuing my BSc from Chittagong University of Engineering and
            Technology (CUET) and is highly motivated to continue learning and
            growing in his field and is excited about the possibilities that
            technology offers.I am interested in all aspects of software
            development and is eager to take on new challenges.
          </p>
          {bios.map((bio) => {
            return (
              <div className="bio" key={bio.id}>
                <span className="bioKey">
                  {bio.icon}
                  {bio.key}
                </span>
                <span className="bioValue">{bio.value}</span>
              </div>
            );
          })}
          <motion.a
            href="Rifatur_Rana_Resume.pdf"
            target="_blank"
            download="Rifatur_Rana_Resume.pdf"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
