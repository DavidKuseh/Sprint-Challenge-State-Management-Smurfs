import React from "react";
import SmurfsList from './SmurfsList';
import SmurfForm from "./SmurfForm";
import "./App.css";

function App () {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfForm />
        <SmurfsList />
      </div>
    );
  }

export default App;
