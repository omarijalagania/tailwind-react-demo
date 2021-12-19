import React from "react";

import Hero from "./Hero";
import Content from "./Content";
import Teams from "./Teams";
import Featured from "./Featured";
function Home() {
  return (
    <div>
      <Hero />
      <Content />
      <Featured />
      <Teams />
    </div>
  );
}

export default Home;
