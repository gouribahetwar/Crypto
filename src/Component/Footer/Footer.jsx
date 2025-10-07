import React from "react";
import "./Footer.css";
import { motion } from "framer-motion";

const footerData = [
  {
    title: "CRYPTOCRYANCYY",
    links: ["COLUTE", "GREEN", "DASH", "SKATCH"],
  },
  {
    title: "SERVICES",
    links: ["BEST SERVICES", "GREEN SERVICES", "DASH SERVICES", "SKATCH SERVICES"],
  },
  {
    title: "OVERVIEW",
    links: ["FAQ", "INTERNET", "MANUAL"],
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <motion.div
        className="footer-container"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1 }}
      >
        {/* Left Column */}
        <motion.div
          className="footer-col"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="footer-logo">CRYPTO</h2>
          <p>
            In publishing and graphic design, Lorem Ipsum is a placeholder text 
            commonly used in <br />publishing and graphic design.
          </p>
        </motion.div>

        {/* Dynamic Columns */}
        {footerData.map((col, index) => (
          <motion.div
            key={index}
            className="footer-col"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <h3>{col.title}</h3>
            <ul>
              {col.links.map((link, i) => (
                <li key={i}>{link}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom Text */}
      <motion.div
        className="footer-bottom"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <p className="footer-last">ALL RIGHT RESERVED THAT 2012 TO INOZO</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
