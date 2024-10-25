import React from "react";
import KosarKezelo from "./Components/KosarKezelo";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Webáruház</h1>
      </header>
      <main className="App-main">
        <KosarKezelo />
      </main>
      <footer>Botka Bianka</footer>
    </div>
  );
}

export default App;

