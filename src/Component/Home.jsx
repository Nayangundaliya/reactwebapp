import React from "react";
import Comman from "./Comman";
import web from "../Img/bg-svg.svg";

const Home = () => {
  return (
    <div>
      <Comman
        name="Grow your bussiness with"
        imgsrc={web}
        visit="/service"
        btnname="Get Started"
      />
    </div>
  );
};

export default Home;
