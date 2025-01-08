import { useState } from "react";
import {Outlet } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SignUp from "./SignUp.jsx";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Login from "./Login.jsx";
function App() {
  return (
    <div id='root'>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
