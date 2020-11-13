import React, { useEffect } from 'react';
import './App.css';
import Login from "./Login";
import { getTokenFromUrl } from './spotify';

function App() {
  
  // Runs code based on a given condition
useEffect(() => {
  const token = getTokenFromUrl();
  console.log('TOKEN IS >>>', token)
  window.location.hash = "";
}, []);

  return (
    <div className="app">
      <Login />

    </div>
  );
}

export default App;
