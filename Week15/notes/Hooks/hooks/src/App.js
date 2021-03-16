import React, { useState,useEffect } from 'react'; 

export default function App() {

  const [isOn, setIsOn] = useState(false); 
  const [clickCount,setClickCount] = useState(0); 

  useEffect(()=> {
    document.title = isOn ? "On" : "off"
  }
  )

  return(
    <div>
      <p>{isOn ? 'is on' : 'Off'} </p>
      <p> times Clicked : {clickCount}</p>
      <button onClick={()=> {
        setIsOn(!isOn); 
        setClickCount(clickCount +1);  
        
      }}> Switch</button>
    </div>
  );
}