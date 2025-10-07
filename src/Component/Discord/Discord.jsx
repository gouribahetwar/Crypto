import React from 'react';
import "./Discord.css";
import { motion } from "framer-motion";

export const Discord = () => {
  return (
    <motion.div
      className="cta-box"
      initial={{ y: 50, opacity: 0, scale: 0.95 }}       // start slightly below
      whileInView={{ y: 0, opacity: 1, scale: 1 }}      // slide up & grow
      viewport={{ once: false, amount: 0.3 }}           // animate on scroll
      transition={{ duration: 0.8 }}
      whileHover={{ scale: 1.02, boxShadow: "0 15px 40px rgba(0,0,0,0.3)" }}
    >
      <h2>Looking To Build On Key?</h2>
      <motion.button
        className="cta-btn"
        whileHover={{ scale: 1.05, backgroundColor: "#fff", color: "#e85c0d" }}
        animate={{ y: [0, -5, 0], opacity: [1, 0.9, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        Join Discord
      </motion.button>
    </motion.div>
  );
};
