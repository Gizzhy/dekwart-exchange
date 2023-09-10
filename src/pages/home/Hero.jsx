import React from "react";
import "../../styles/hero.css";

// import crypto from "../../assets/images/crypto.png";
// import whatsapp from "../../assets/images/whatsapp.svg";
import Bitcoin from "../../assets/images/Bitcoin.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  return (
    <>
      <div className="container hero-a">
        <div className="hero-a1">
          <div className="hero-a11">
            DEWKART <span className="exc">EXCHANGE</span>
            <p className="h-w">
              Dive into crypto trading and ride the wave to financial freedom!
              Buy when the market dips, sell when it soars – it's the ultimate
              game of strategy and opportunity.
            </p>
            <a href="https://wa.me/+2349037376545" target="__blank">
              <button className="hero-b">
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  size="2xl"
                  style={{ color: "#f5f5f5", paddingRight: "8px" }}
                />
                Get in Touch
              </button>
            </a>
          </div>
          <div className="hero-a12">
            <img className="hero-img" src={Bitcoin} alt="dewkart" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
