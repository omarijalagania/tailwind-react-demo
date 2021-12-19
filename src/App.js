import React from "react";

import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SignIn from "./components/SignIn";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Registration from "./components/Registration";
import PasswordReset from "./components/PasswordReset";
import PageNotFound from "./components/404";
import QR from "./components/QR";
import DataVisualization from "./components/DataVisualization ";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/password-reset" element={<PasswordReset />} />
        <Route path="/qr" element={<QR />} />
        <Route path="/dataVisualization" element={<DataVisualization />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
