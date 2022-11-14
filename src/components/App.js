import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
 
  const[flag,setFlag] = useState(false);
  return (
    <div id="main">
      // Do not alter the main div
     {flag == true && <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>} 
      <button id="click" onClick={()=>setFlag(true)}>Click</button>
    </div>
  );
}


export default App;
