import React, { useState } from 'react';

function Room() {
  const [isLit, setLit]= useState(false);
  function updateLit() {
    console.log("button clicked");
    setLit(!isLit);
    
  }
  return (
    <div>
      This is room. Lit = {isLit? "lit": "dark"}
      <br/>
      <button onClick={updateLit}>click here</button>
    </div>
  );
}

export default Room;
