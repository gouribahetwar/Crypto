import React from "react";
import FeatureCard from "./FeatureCard";
import "./FeatureSection.css";
import bitcoinImage from "../../assets/Bitcoin.png"; 

const FeatureSection = () => {
  const features = [
    {
      icon: "💾",
      title: "SECURE STORAGE",
      description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to",
    },
    {
      icon: "🔄",
      title: "LOW COST",
      description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to",
    },
    {
      icon: "🛡️",
      title: "PROTECTED BY INSURANCE",
      description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to",
    },
    {
      icon: "💸",
      title: "MONEY TRANSFER",
      description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to",
    },
  ];

  return (
    <div className="feature-section">
      {/* Left side image */}
      <div className="feature-image">
        <img src={bitcoinImage} alt="Bitcoin Illustration" />
      </div>

      {/* Right side feature list */}
      <div className="feature-list">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
