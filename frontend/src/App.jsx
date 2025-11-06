import { Navbar } from "./components/Navbar";
import Search from "./components/Search";
import Footer from "./components/Footer";
import Card from "./components/Card";
import { useEffect, useState } from "react";
import "./index.css";
import Data from "./components/Data";

const App = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("result");
    if (saved) setResult(JSON.parse(saved));
  }, []);

  useEffect(() => {
    if (result) {
      localStorage.setItem("result", JSON.stringify(result));
    }
  }, [result]);

  const handleDelete = (e) => {
    e.preventDefault();
    localStorage.removeItem("result");
    setResult(null);
  };

  return (
    <div>
      <Navbar />
      <Search setResult={setResult} setLoading={setLoading} loading={loading} />
      <Card result={result} handleDelete={handleDelete} loading={loading} />
      <Data />
      <Footer />
    </div>
  );
};

export default App;
