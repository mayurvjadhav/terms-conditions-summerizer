import { Navbar } from "./components/Navbar";
import Search from "./components/Search";
import Footer from "./components/Footer";
import Card from "./components/Card";
import { useState } from "react";
import "./index.css";
import Data from "./components/Data";

const App = () => {
  const [result, setResult] = useState(null);

  return (
    <div>
      <Navbar />
      <Search setResult={setResult} />
      <Card result={result} />
      <Data />
      <Footer />
    </div>
  );
};

export default App;
