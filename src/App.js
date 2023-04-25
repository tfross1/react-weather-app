import React from "react";
import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
     <Weather defaultCity="New York" />
     <footer>
      This project was coded by Theresa Fross and is{" "}
     <a href="https://github.com/tfross1/react-weather-app" target="_blank" >open-sourced on GitHub.</a>
     </footer>
    </div>
  );
}


