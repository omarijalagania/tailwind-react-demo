import React from "react";

import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import PasswordReset from "./components/PasswordReset";
import PageNotFound from "./components/404";
import QR from "./components/QR";
import Print from "./components/Print";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/password-reset" element={<PasswordReset />} />
        <Route path="/qr" element={<QR />} />
        <Route path="/print" element={<Print />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
