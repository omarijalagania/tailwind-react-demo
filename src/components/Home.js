import React from "react";

import "animate.css/animate.min.css";

import SignIn from "./SignIn";
import Registration from "./Registration";
import Teams from "./Teams";
import Calendar from "./Calendar";
import DataVisualization from "./DataVisualization ";
import Contact from "./Contact";
function Home() {
  return (
    <div>
      <Registration />
      <SignIn />
      <Calendar />
      <DataVisualization />
      <Contact />
    </div>
  );
}

export default Home;
