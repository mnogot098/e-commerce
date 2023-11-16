import React from "react";
import hero_image from "../Assets/hero_image.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <p>Here you find what suits your!</p>
        <h3>Welcome to our online fashion hub! Discover the latest trends, exclusive deals, and curated collections for a seamless shopping experience. Elevate your style journey with us!</h3>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" height={600} />
      </div>
    </div>
  );
};

export default Hero;
