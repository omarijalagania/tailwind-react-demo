import React from "react";

import "animate.css/animate.min.css";

import SignIn from "./SignIn";
import Registration from "./Registration";
import Teams from "./Teams";
import Calendar from "./Calendar";
import DataVisualization from "./DataVisualization ";
import Contact from "./Contact";
import Drag from "./Drag";
import Signature from "./Signature";
function Home() {
  return (
    <div>
      <Registration />
      <SignIn />
      <Calendar />
      <DataVisualization />
      <Contact />
      <Drag />
      <Signature />
    </div>
  );
}

export default Home;
