import React from "react";

import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import SignIn from "./components/SignIn";

function App() {
  return (
    <>
      <Home />
      <Routes>
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;
