import React from "react";
import "./App.css";
import Coronavirus from "../src/components/allData";
//import styled from "styled-components";
//import WorldStats from "../src/components/worldStats";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Coronavirus />
    </div>
  );
}

export default App;
