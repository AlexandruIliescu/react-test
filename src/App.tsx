import React, { ReactElement, ReactNode } from "react";
import { Router } from '@reach/router';
import './App.css';
import Home from "./Home/Home";
import Details from "./Details/Details";

function App() {
  return (
    <div className="App">
      <Router>
        <Home path= "/"/>
        <Details path= "/games/:gameId"/> 
        <Details path= "/games/"/> 
      </Router>         
    </div>
  );
}
// https://www.youtube.com/watch?v=EtAwj75F6tU

export default App