import React from "react";

import { Link } from "react-router-dom";

import SignIn from "./SignIn";

function Home() {
  return (
    <div>
      <Link to="/signin">Signin</Link>
    </div>
  );
}

export default Home;
