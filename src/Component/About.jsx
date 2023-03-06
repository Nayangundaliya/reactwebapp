import React from "react";
import Comman from "./Comman";
import web from "../Img/abha-title-image.webp";

const About = () => {
  return (
    <div>
      <Comman
        name="Welcome to About page"
        imgsrc={web}
        visit="/contact"
        btnname="Get Started"
      />
    </div>
  );
};

export default About;
