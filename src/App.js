import React, { useState, useEffect } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from './components/TextForm';
import Alert from "./components/Alert";

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [redmode, setredmode] = useState("light");

  const [alert, setalert] = useState(null);
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };
  

const togglemode = (cls) => {
  console.log(cls);

  document.body.classList.remove("bg-primary", "bg-warning", "bg-info", "bg-success");

  if (cls !== "dark" && cls !== "light") {
    document.body.classList.add("bg-" + cls);
    showalert(cls.charAt(0).toUpperCase() + cls.slice(1) + " Mode enabled", "success");
  } else {
    if (mode === "dark") {
      setMode("light");
      document.body.classList.remove("bg-dark");
      showalert("Light Mode enabled", "success");
    } else {
      setMode("dark");
      document.body.classList.add("bg-dark");
      showalert("Dark Mode enabled", "success");
    }
  }   
};

  let togglemode1 = () => {
    if (redmode === "red") {
      setredmode("light");
      showalert("Light Mode enable", "success");
    } else {
      setredmode("red");
      showalert("Red Mode enable", "success");
    }
  };

  useEffect(() => {
    document.body.className = `${mode} ${redmode}`; // Apply class based on mode
  }, [mode, redmode]);

  return (
    <>
    <Router>

      <Navbar
        titlex={"NeonText"}
        abouttext="About"
        dropdown="List"
        mode={mode}
        redmode={redmode}
        togglemode={togglemode}
        togglemode1={togglemode1}
      />


      <Alert alert={alert} />
      <div className="container my-3">
      <Routes>
          <Route path="/about" element={<About mode={mode} redmode = {redmode} />} />
          <Route path="/" element={<TextForm heading="Text Editor -Word Counter, Character Counter, Remove Extra space and Many More" mode={mode} showalert={showalert} />} />
          <Route path="*" element={<Navigate to="/"   />} />
      </Routes>
      </div>

      </Router>
    </>
  );
}

export default App;
