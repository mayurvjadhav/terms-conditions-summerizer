import React from "react";
import { Navbar } from "./components/Navbar";
import Search from "./components/Search";
import Data from "./components/Data";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Search />
      <Data />
      <Footer />
    </div>
  );
};

export default App;
