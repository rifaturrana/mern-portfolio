import React from "react";
import "./Footer.scss";
import { socialIcons, links } from "../../../Data";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      transition={{ duration: 1.5 }}
      className="footer"
    >
      <div className="copyright">
        <p>Copyright&copy;2022 All rights reserved.</p>
      </div>
      <div className="followMe">
        <h4>Follow Me</h4>
        <div className="stick"></div>
        <div className="social_icons">
          {socialIcons.map((socialIcon, index) => {
            return (
              <div key={index}>
                <a href={links[index]} rel="noreferrer" target="_blank">
                  {socialIcon}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
