import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Search from "./pages/Search"
import Error from "./pages/Error";
import StockQuote from "./pages/StockQuote";
import Navbar from "./components/Navbar";

function App() {
  //Navbar should always be displayed, use route switch for simple navigation
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<Search />} />
        <Route path="/stocks/:qTicker" element={<StockQuote />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
