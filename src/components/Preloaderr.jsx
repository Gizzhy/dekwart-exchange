import { useState, useEffect } from "react";
import animationgif from "../assets/images/animationgif.gif";
import "../styles/preloader.css";

const preloader = () => {
  const [preloader, setPreloader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setPreloader(false);
    }, 4000);
  });
  return (
    <>
      {preloader && (
        <div className="preloader">
          <img className="preloader-img" src={animationgif} alt="loader" />
        </div>
      )}
    </>
  );
};

export default preloader;
