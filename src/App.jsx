import React from "react";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import Footer from "./components/layout/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Footer/>
    </>
  );
};

export default App;
