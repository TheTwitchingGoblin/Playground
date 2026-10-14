import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Fruits from "./components/Fruits";
import Fruit from "./components/Fruit";

import ConditionalComponent from "./components/ConditionalComponent";

function App() {
  return (
    <>
      <Fruits />
      <ConditionalComponent />
    </>
  );
}

export default App;
