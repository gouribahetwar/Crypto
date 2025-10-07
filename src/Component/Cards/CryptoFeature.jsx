import React from "react";
import "./CryptoFeature.css";
import { motion } from "framer-motion";

import coinImg from "../../assets/coin.png";  
import diamondImg from "../../assets/diamond.png";
import paperImg from "../../assets/ice.png";
import right from "../../assets/right1.png";
import layer from "../../assets/layer.png";
import diamnds from "../../assets/diamnd.png";

const features = [
  { img: coinImg, title: "LAVARAGE UPTO 30%" },
  { img: diamondImg, title: "COMPOND WITH HIGH VALUE POOLS" },
  { img: paperImg, title: "SUPER CHEAF TRANSTATION" },
  { img: right, title: "LAVARAGE UPTO 30%" },
  { img: layer, title: "COMPOND WITH HIGH VALUE POOLS" },
  { img: diamnds, title: "SUPER CHEAF TRANSTATION" },
];

export default function CryptoFeature() {
  return (
    <section className="crypto-section">
      <h2>
        TAKE FULL CONTROL OF YOUR <span>CRYPTO</span>
      </h2>
      <p>
        Cryptocurrency, sometimes called crypto-currency or crypto, is any form
        of digital currency that doesn’t have a central authority.
      </p>

      <div className="card-grid">
        {features.map((item, index) => (
          <motion.div
            className="crypto-card"
            key={index}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="img-wrapper flame">
              <img src={item.img} alt={item.title} />
            </div>
            <h3>{item.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
