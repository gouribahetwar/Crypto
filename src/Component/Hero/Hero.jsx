import React from "react";
import "./Hero.css";
import heroImg from "../../assets/HeroImg.png";
import { FaGlobe } from "react-icons/fa";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        {/* LEFT SIDE */}
        <motion.div
          className="hero-left"
          initial={{ x: -200, opacity: 0 }}  // start off-screen left
          whileInView={{ x: 0, opacity: 1 }} // slide in to position
          viewport={{ once: false, amount: 0.3 }} // trigger on scroll
          transition={{ duration: 1 }}
        >
          <h1>
            Revolutionizing <span className="crypto">Crypto</span> and{" "}
            <span className="fintech">Fintech</span> Products
          </h1>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="hero-right"
          initial={{ x: 200, opacity: 0 }}  // start off-screen right
          whileInView={{ x: 0, opacity: 1 }} // slide in to position
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          <p>
            Explore the Future of Finance with Innovative Solutions, Seamlessly
            Bridging Traditional and Digital Economies.
          </p>

          <div className="hero-bottom-row">
            <div className="stats-box">
              <FaGlobe className="web-icon" />
              <div>
                <p>
                  58,000+ <br /> Users from the globe
                </p>
              </div>
            </div>

            <button className="hero-btn">
              Unlock Financial Freedom <span className="arrow">↗</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* HERO IMAGE */}
      <motion.div
        className="hero-img"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        <img src={heroImg} alt="Crypto Fintech" />
      </motion.div>
    </section>
  );
};
