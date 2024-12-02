import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/main/Main";

function App() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
