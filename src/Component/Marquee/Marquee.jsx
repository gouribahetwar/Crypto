import React from "react";
import "./Marquee.css";

const items = [
  "✶ Instant Settlements",
  "✶ Seamless Integration",
  "✶ Cross platform Access",
  "✶ Secure Transactions",
];

const Marquee = () => {
  // duplicate items 3 times to ensure seamless scroll
  const repeatedItems = [...items, ...items, ...items];

  return (
    <div className="marquee">
      <div className="marquee-track">
        {repeatedItems.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
