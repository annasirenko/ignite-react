import React from "react";
// Components and pages
import Home from "./pages/Home";
import Nav from "./components/Nav";
// Styles
import GlobalStyles from "./components/GlobalStyles";
// Router
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Routes>
        {/* Use the Routes component to wrap your Route components */}
        <Route path="/" element={<Home />} />
        <Route path="/game/:id" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;