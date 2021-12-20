import React from "react";

import "animate.css/animate.min.css";

import SignIn from "./SignIn";
import Registration from "./Registration";
import Teams from "./Teams";
import QR from "./QR";
import Calendar from "./Calendar";
import DataVisualization from "./DataVisualization ";
function Home() {
  return (
    <div>
      <SignIn />
      <Calendar/>
      <DataVisualization/>
    </div>
  );
}

export default Home;
